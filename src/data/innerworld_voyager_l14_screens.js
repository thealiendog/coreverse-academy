// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L14 — The Heart in Consciousness: What's Actually Real?
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Heart-Brain Science, Critical Evaluation
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (HeartMath / brain-centric / integrated view)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l14-v1";

const INNERWORLD_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-14`,
      title: `The Heart in Consciousness: What's Actually Real?`,
      duration: 35,
      xpReward: 75,
      badge: `heart-brain-thinker`,
      badgeName: `Heart-Brain Thinker`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, you've heard people talk about "thinking with your heart" or "trusting your gut." Wellness culture is full of claims about the heart having its own intelligence, emotions originating in the heart, and the heart sending signals up to the brain that shape consciousness. Some of these claims are based on real science. Some are dramatic overreach. The actual picture, what neuroscience and cardiology have established about the heart-brain connection, is more interesting and more bounded than either the wellness version or the dismissive scientific version. Today we look at three positions on the heart's role in consciousness. Then you build an argument for the one you find most defensible.`,
          headline: `The Heart in Consciousness`,
          subtitle: `What the heart actually does, and what it doesn't.`,
          visual: `/voyager-assets/inner-world/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's Actually In The Heart`,
          paragraphs: [
            `Your heart is mostly a muscular pump. It contracts and relaxes about 100,000 times a day, moving roughly 2,000 gallons of blood through your body. This is the most basic and well-established function. But the heart is more than just a pump. It contains neurons, specialized nerve cells similar to those in the brain. The exact count is debated, but estimates range from about 40,000 to 100,000 neurons in the human heart. These neurons form what cardiologists call the intrinsic cardiac nervous system, sometimes informally called "the heart brain."`,
            `This heart-based nervous system is real. It was first studied in detail by the cardiologist J. Andrew Armour in the 1990s. The neurons in the heart do real work. They locally regulate heart rate, contraction strength, and rhythm. They process information about blood pressure, hormone levels, and chemical signals. They communicate with the brain via the vagus nerve and the sympathetic nervous system. The heart and brain are in constant two-way communication.`,
            `So the basic factual claim is true: the heart has its own neurons. It does its own local processing. It communicates richly with the brain. None of this is controversial in cardiology. What IS controversial is what to make of this. Different interpreters take the same factual ground and draw very different conclusions about what the heart's role in consciousness, emotion, and intuition actually is.`,
          ],
          image: `/voyager-assets/inner-world/l14-s1-heart.webp`,
          imageCaption: `40,000+ neurons in a pump. Real but bounded.`,
          vocab: [
            {
              word: `nervous system`,
              definition: `The network of neurons within the heart itself, sometimes informally called "the heart brain." Real and well-established in cardiology.`,
              audioPrompt: `The intrinsic cardiac nervous system is the network of neurons within the heart itself, {name}. Estimates put it at around 40,000 to 100,000 neurons in the human heart. These neurons regulate heart rate, contraction strength, and rhythm locally without needing constant signals from the brain. They communicate with the brain through major nerves like the vagus nerve. This is real and well-established cardiology, first studied in detail by J. Andrew Armour in the 1990s. The disagreement isn't about whether these neurons exist. It is about what they mean for consciousness and emotion.`,
            },
            {
              word: `intrinsic cardiac nervous system`,
              definition: `The network of approximately 40,000 to 100,000 neurons within the heart itself, first studied in detail by cardiologist J. Andrew Armour in the 1990s. Locally regulates heart rate, contraction strength, and rhythm.`,
              audioPrompt: `The intrinsic cardiac nervous system is the network of neurons within the heart itself, {name}. Estimates put the count at around 40,000 to 100,000 neurons in the human heart. These neurons were first studied in detail by cardiologist J. Andrew Armour in the 1990s. They do real local work: regulating heart rate, contraction strength, and rhythm. They process information about blood pressure, hormone levels, and chemical signals. They communicate with the brain via the vagus nerve and the sympathetic nervous system. This is established cardiology, not contested. The disagreement is about what to make of it.`,
            },
            {
              word: `vagus nerve`,
              definition: `A major nerve connecting the brain to the heart and other organs. One of the primary pathways of two-way communication between the heart and the brain. Also relevant to heart rate variability and paced breathing.`,
              audioPrompt: `The vagus nerve is a major nerve connecting the brain to the heart and other organs, {name}. It is one of the primary pathways of two-way communication between the heart and the brain. The neurons in the heart communicate with the brain via the vagus nerve and the sympathetic nervous system. This communication is constant. The heart and brain are not separate systems sending occasional messages; they are in continuous dialogue. The vagus nerve is also relevant to heart rate variability and the calming effects of paced breathing, which is part of why breathing practices produce real physiological effects.`,
            }
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The HeartMath View`,
          paragraphs: [
            `HeartMath Institute, founded in California in 1991 by Doc Childre, is the most prominent organization making strong claims about the heart in consciousness. HeartMath proposes that the heart has its own form of intelligence, that it generates an electromagnetic field many times stronger than the brain's, that emotional states create measurable patterns in heart rate variability, and that conscious focus on the heart can produce coherent physiological states that affect cognition, immunity, and even social interaction.`,
            `Some of HeartMath's claims are supported by mainstream research. Heart rate variability (the small variations in time between heartbeats) is a real, measurable phenomenon and is associated with emotional regulation, stress, and health outcomes. Vagal tone, which influences HRV, is studied seriously in cardiology and psychology. Breathing-based heart coherence practices that HeartMath teaches can shift HRV and produce real, measurable physiological effects.`,
            `Other HeartMath claims are more contested. The claim that the heart's electromagnetic field can be detected several feet from the body is technically true but the strength is extremely weak; mainstream physicists generally consider its causal influence on other people negligible. Claims that hearts can "synchronize" between people in ways that affect their consciousness or emotion are extrapolations beyond what current evidence clearly supports. HeartMath sells products, training programs, and certifications, which gives them a financial incentive that some critics flag.`,
          ],
          image: `/voyager-assets/inner-world/l14-s2-heartmath.webp`,
          imageCaption: `HeartMath: real research on HRV, contested claims about field effects.`,
          vocab: [
            {
              word: `heart rate variability`,
              definition: `HRV. The small variations in time between heartbeats. A real, measurable phenomenon associated with emotional regulation, stress, autonomic balance, and overall health. Studied seriously in mainstream cardiology.`,
              audioPrompt: `Heart rate variability is the small variations in time between heartbeats, {name}. Often called HRV. It is a real, measurable phenomenon. Higher HRV is generally associated with better cardiovascular health, better stress regulation, and better emotional flexibility. HRV can be influenced by breathing, by emotional state, by sleep quality, and by exercise. This is mainstream cardiology, not pseudoscience. HeartMath's research on HRV is built on real foundations, even if some of their broader claims extrapolate beyond what the evidence clearly supports.`,
            },
            {
              word: `heart coherence`,
              definition: `A physiological state, measurable in heart rate variability patterns, associated with calm emotional focus. HeartMath teaches breathing-based practices intended to produce this state with real measurable effects.`,
              audioPrompt: `Heart coherence is a physiological state measurable in heart rate variability patterns, {name}. HeartMath Institute proposes that conscious focus on the heart can produce coherent physiological states affecting cognition, immunity, and social interaction. The breathing-based heart coherence practices HeartMath teaches can shift heart rate variability and produce real, measurable physiological effects built on real scientific foundations. Where HeartMath becomes more contested is in broader claims about electromagnetic field effects on other people. The coherence practices work; the more metaphysical claims around them are less well supported.`,
            },
            {
              word: `electromagnetic field`,
              definition: `A field of electrical and magnetic energy generated by the heart. Technically measurable at a distance but extremely weak outside the body. Mainstream physicists consider its causal influence on other people negligible.`,
              audioPrompt: `An electromagnetic field is a field of electrical and magnetic energy, {name}. The heart generates one. HeartMath claims this field is many times stronger than the brain and can be detected several feet from the body. This is technically true with sensitive equipment. However, the strength of the heart electromagnetic field outside the body is extremely weak. Mainstream physicists generally consider any causal influence on other people negligible. The broader HeartMath claims about this field affecting the consciousness of other people extrapolate beyond what current evidence supports. A real phenomenon whose significance is being overstated.`,
            }
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Brain-Centric View`,
          paragraphs: [
            `Mainstream neuroscience generally takes a different position. Consciousness, emotion, and intuition are generated in the brain. The heart is an important organ with real local processing and rich communication with the brain, but it is not where thoughts, feelings, or self-awareness happen. The phrase "thinking with your heart" is a metaphor; literal thinking takes place in the brain.`,
            `From this view, the heart-brain communication is mostly the brain receiving useful internal information (interoception) from the heart, which the brain then uses to generate emotional experiences and shape conscious states. The famous research of Antonio Damasio supports this picture: the body, including the heart, sends signals to the brain about its current state. The brain integrates these signals into what we feel as emotion. The brain is the integrator and conscious experiencer. The heart provides input but is not itself conscious.`,
            `On this view, claims that the heart "has its own intelligence" are seen as overstating what's true. Yes, the heart has neurons. Yes, those neurons do real work locally. But local processing is not the same as intelligence in the sense people usually mean. Many parts of your body do local processing (the gut has its own enteric nervous system; the intestines contain more neurons than the heart). Calling any of them "intelligent" in the colloquial sense is a category mistake. The brain remains the seat of consciousness and the integrator of all this information.`,
          ],
          image: `/voyager-assets/inner-world/l14-s3-brain.webp`,
          imageCaption: `Brain-centric: the heart provides input, the brain integrates and generates experience.`,
          vocab: [
            {
              word: `interoception`,
              definition: `The brain's perception of internal body signals like heartbeat, breathing, hunger, and visceral sensations. A real, well-studied function of the brain that shapes emotion.`,
              audioPrompt: `Interoception is the brain's perception of internal body signals, {name}. Your heartbeat, your breathing, hunger, the sensations in your gut, all of this information is constantly being sent to the brain, which builds a moment-by-moment picture of your internal state. Interoception is fundamental to emotion. When you feel anxious, much of what you're feeling is the brain perceiving and interpreting elevated heart rate, shallow breathing, tense muscles. The body provides the raw signals. The brain generates the experience. Antonio Damasio's research on this is among the most influential in modern neuroscience.`,
            },
            {
              word: `somatic marker`,
              definition: `In the research of Antonio Damasio, a body-based signal that the brain uses to inform emotional experience and decision-making. Supports the brain-centric view that the brain integrates body signals into felt emotion.`,
              audioPrompt: `A somatic marker is a body-based signal that the brain uses to inform emotional experience and decision-making, {name}. The term comes from Antonio Damasio. His somatic marker hypothesis proposes that the body, including the heart, sends signals to the brain about its current state. The brain integrates these signals into what we feel as emotion. Under this brain-centric view, the heart provides important input but the brain is the integrator and conscious experiencer. When you feel anxious, much of what you experience is the brain perceiving and interpreting body signals, including elevated heart rate and shallow breathing.`,
            },
            {
              word: `enteric nervous system`,
              definition: `The network of approximately 100 million neurons in the gut. Raised in the lesson as a consistency challenge to heart-intelligence claims, since the gut has far more neurons yet is not labeled intelligent the same way.`,
              audioPrompt: `The enteric nervous system is the network of neurons in the gut, {name}. It contains roughly 100 million neurons, far more than the estimated 40,000 to 100,000 in the heart. The gut also communicates richly with the brain. The lesson raises this as a consistency challenge to heart-intelligence claims. If local neural processing makes an organ intelligent in the colloquial sense, the gut would qualify more strongly than the heart. Most heart-centric proponents do not embrace this conclusion. The selective application of the intelligence label to the heart but not the gut suggests something other than neuron count is driving the claim.`,
            }
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Integrated View`,
          paragraphs: [
            `A third position exists between HeartMath's strong claims and the strict brain-centric view. The integrated view acknowledges that the heart has real local processing, communicates richly with the brain, and influences emotional and conscious states through this communication, while not claiming the heart is itself conscious or has its own form of intelligence in the metaphorical wellness sense.`,
            `Under this view, the heart-brain system is genuinely integrated. The brain is the conscious experiencer, but the heart contributes important signals that shape emotion, decision-making, and physiological regulation. Practices that engage the heart-brain pathway intentionally, such as paced breathing, certain meditation techniques, and HRV biofeedback, can produce real benefits in stress regulation, emotional flexibility, and cardiovascular health. The benefits don't require any metaphysical claims about heart intelligence; they work through well-understood physiological mechanisms.`,
            `This view is more demanding than either alternative because it requires holding distinctions: yes the heart has neurons and they matter, no the heart is not literally conscious; yes HRV is real and trainable, no your heart's electromagnetic field is not significantly affecting other people; yes heart-focused practices produce benefits, no those benefits require the universe-vibration framework HeartMath sometimes uses. Holding these distinctions is harder than either pure embrace or pure dismissal. It's also what careful research actually supports.`,
          ],
          image: `/voyager-assets/inner-world/l14-s4-integrated.webp`,
          imageCaption: `Integrated view: real heart-brain dialogue, no metaphysical overreach.`,
          vocab: [
            {
              word: `biofeedback`,
              definition: `Techniques that give you real-time information about a physiological function (like heart rate or muscle tension) so you can learn to influence it. HRV biofeedback is a research-supported practice.`,
              audioPrompt: `Biofeedback is a technique that gives you real-time information about a physiological function so you can learn to influence it, {name}. HRV biofeedback shows you your heart rate variability in real time, often through a simple device that displays it on your phone. With practice, people can learn to shift their HRV through breathing, posture, and emotional regulation. HRV biofeedback is a research-supported practice for stress and anxiety. It is also one of the practices HeartMath teaches. The technique works without requiring any of HeartMath's more metaphysical claims.`,
            },
            {
              word: `paced breathing`,
              definition: `A breathing practice involving inhaling and exhaling at a deliberate, even rhythm, typically five seconds in and five seconds out. Produces measurable shifts in heart rate variability and emotional state.`,
              audioPrompt: `Paced breathing is a breathing practice that involves inhaling and exhaling at a deliberate, even rhythm, {name}. The lesson mentions inhaling for five seconds and exhaling for five seconds as a typical practice. Paced breathing engages the heart-brain pathway intentionally and produces real, measurable improvements in stress regulation, emotional flexibility, and cardiovascular health through well-understood physiological mechanisms including vagal tone and autonomic balance. This is one of the clearest practical takeaways from the lesson: paced breathing is genuinely useful and needs no metaphysical claim about heart intelligence to explain why.`,
            },
            {
              word: `autonomic balance`,
              definition: `The relationship between the sympathetic and parasympathetic branches of the nervous system. Associated with emotional flexibility and stress regulation. Can be influenced by paced breathing and HRV practices.`,
              audioPrompt: `Autonomic balance is the relationship between the sympathetic and parasympathetic branches of the nervous system, {name}. The sympathetic branch governs the stress response. The parasympathetic branch governs rest and recovery. When these are well-balanced, the result is better emotional flexibility and stress regulation. Heart rate variability is one of the best measures of autonomic balance. Paced breathing and HRV biofeedback practices can shift this balance toward the parasympathetic side, producing real, measurable physiological effects. This is the well-understood mechanism behind heart-focused practices, with no metaphysical claims about heart intelligence required.`,
            }
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `Three positions exist on the heart in consciousness. Strong heart-intelligence view (HeartMath and similar): the heart has its own intelligence, generates significant electromagnetic effects, and is central to consciousness and emotion in ways mainstream science hasn't fully accepted. Strict brain-centric view: consciousness is generated in the brain; the heart is an important organ with local processing but does not have intelligence or consciousness; heart-focused practices work through ordinary physiological mechanisms or placebo. Integrated view: the heart and brain are genuinely connected and the connection matters for emotion and well-being, but the heart isn't itself conscious; practices that engage the heart-brain pathway produce real benefits through well-understood mechanisms.`,
            `In the argument builder you will pick one of these and build a case for it using real evidence. Note that this is harder than the source evaluation in L13 because the heart-brain question genuinely has uncertainty. Real cardiologists, neuroscientists, and researchers disagree about the right interpretation of the same evidence. You aren't being asked to spot fraud; you're being asked to weigh evidence on a contested scientific question.`,
            `As you choose, remember the moves you've learned. What mechanism is each view claiming? What evidence directly supports that mechanism? Where does each view potentially overreach? Which view best fits both the established cardiology and the limits of current evidence? Build the strongest version of your chosen position. Address the strongest counterargument with care. This is what serious thinking on contested science looks like.`,
          ],
          image: `/voyager-assets/inner-world/l14-s5-before.webp`,
          imageCaption: `Three positions on contested science. Pick one. Build the case.`,
          vocab: [
            {
              word: `contested science`,
              definition: `A scientific area where the basic findings are established but the interpretation is still debated by competent researchers. Not pseudoscience, but science whose meaning is genuinely uncertain.`,
              audioPrompt: `Contested science is a scientific area where the basic findings are established but the interpretation is still debated, {name}. The heart-brain question is a good example. Everyone agrees the heart has neurons. Everyone agrees they communicate with the brain. The disagreement is about what to make of this: does it justify language like "heart intelligence," or is that overreach? Contested science is different from pseudoscience. In pseudoscience, the claims are unfalsifiable or contradict established evidence. In contested science, real researchers are still working out the right interpretation. Holding this distinction protects you from two errors: treating contested science as settled, and dismissing genuinely interesting research as fake.`,
            },
            {
              word: `overreach`,
              definition: `Extending a claim beyond what the available evidence actually supports. A common pattern in wellness and science communication where real findings are used to justify much stronger claims.`,
              audioPrompt: `Overreach is extending a claim beyond what the available evidence actually supports, {name}. The lesson traces this pattern in the heart-brain area. The science on heart neurons, heart rate variability, and heart-brain communication is genuine and well-established. The overreach comes when this foundation is used to support stronger claims: that the heart has its own intelligence, that its electromagnetic field significantly affects others, or that hearts synchronize between people in ways that alter consciousness. Recognizing overreach without dismissing the underlying science is the skill this lesson is building.`,
            },
            {
              word: `financial incentive`,
              definition: `A motivation arising from potential financial gain. Relevant when evaluating the claims of organizations that sell products and certifications based on those same claims.`,
              audioPrompt: `A financial incentive is a motivation arising from potential financial gain, {name}. The lesson notes that HeartMath sells products, training programs, and certifications, which gives them a financial incentive that some critics flag. This is not an automatic disqualifier. Real science is sometimes funded by organizations with financial interests. But financial incentive is worth noting when the same organization making the claims is also selling products based on those claims. It raises the question of whether the evidence has been evaluated independently. Knowing a source has a financial stake in a claim is relevant information for assessing how much independent scrutiny that claim has received.`,
            }
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l14-argument-builder`,
          type: `argument-builder`,
          headline: `Build Your Argument: The Heart In Consciousness`,
          intro: `Pick one of three positions. Choose 3-4 pieces of evidence from the lesson to defend it. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `strong-heart`,
              label: `Strong heart-intelligence (HeartMath-aligned)`,
              summary: `The heart has its own form of intelligence and generates measurable effects on consciousness and emotion that mainstream science has not fully recognized. The heart's neural network, electromagnetic field, and HRV patterns are central to mental and physiological functioning. Heart-focused practices work in part through these mechanisms beyond what brain-centric models explain.`,
            },
            {
              id: `brain-centric`,
              label: `Strict brain-centric view`,
              summary: `Consciousness is generated in the brain. The heart is an important organ with real local processing and rich communication with the brain, but it is not conscious and does not have intelligence in the colloquial sense. Heart-focused practices produce real benefits, but those benefits work through ordinary physiological mechanisms (vagal tone, breathing, interoception, placebo) that don't require any special heart-intelligence claim.`,
            },
            {
              id: `integrated`,
              label: `Integrated view`,
              summary: `The heart and brain are genuinely integrated; the heart's local processing and communication with the brain matter for emotion and well-being. But the heart isn't itself conscious. Practices that engage the heart-brain pathway produce real benefits through well-understood mechanisms (HRV, breathing, vagal tone) without requiring metaphysical claims. The mature position holds both the real connection and its actual limits.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `The human heart contains approximately 40,000-100,000 neurons forming the intrinsic cardiac nervous system, first studied in detail by cardiologist J. Andrew Armour in the 1990s.`,
              source: `Armour, J. A. (1991, 2008). Anatomy and function of the intrathoracic neurons regulating the mammalian heart.`,
            },
            {
              id: `e2`,
              text: `Heart rate variability (HRV) is a real, measurable phenomenon strongly associated with emotional regulation, stress, autonomic balance, and overall health. Studied seriously in mainstream cardiology and psychology.`,
              source: `Established research, multiple decades`,
            },
            {
              id: `e3`,
              text: `Antonio Damasio's somatic marker hypothesis: the body (including the heart) sends signals to the brain, which integrates them into emotional experience. The brain remains the integrator and conscious experiencer.`,
              source: `Damasio, A. (1994). Descartes' Error: Emotion, Reason, and the Human Brain.`,
            },
            {
              id: `e4`,
              text: `The heart's electromagnetic field can be measured several feet from the body using sensitive equipment. However, the strength is extremely weak and mainstream physicists generally consider any causal influence on other people negligible.`,
              source: `HeartMath research with mainstream physics critique`,
            },
            {
              id: `e5`,
              text: `Paced breathing practices and HRV biofeedback can produce real, measurable improvements in stress regulation, emotional flexibility, and cardiovascular markers. These benefits work through well-understood physiological mechanisms (vagal tone, autonomic balance).`,
              source: `Multiple controlled studies; HRV biofeedback is an established research-supported practice`,
            },
            {
              id: `e6`,
              text: `The gut contains roughly 100 million neurons, far more than the heart, forming the enteric nervous system. The intestines also communicate richly with the brain. By the same logic as "heart intelligence," the gut would be even more "intelligent," which most heart-centric proponents do not embrace.`,
              source: `Established enteric nervous system research`,
            },
            {
              id: `e7`,
              text: `HeartMath sells courses, certifications, and products, which creates a financial incentive that critics flag. Some of HeartMath's specific claims have been challenged by mainstream cardiologists and neuroscientists as extrapolating beyond what the evidence supports.`,
              source: `Public scientific commentary on HeartMath claims`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. Whatever position you took, someone could argue: serious heart-brain interaction is a real research area with practical benefits people can feel. Whatever caution you raised, isn't it more useful to engage with practices that work (paced breathing, HRV biofeedback, meditation) than to argue about the precise interpretation? Why does the interpretation matter when the practical benefits are available either way?"`,
            promptInstruction: `In 3-4 sentences, respond to this objection. Why does the framing matter beyond just the practical benefit?`,
          },
          reflectionPrompt: `Looking at the position you didn't pick, which evidence on the other side challenged your view most? Could you imagine updating in two years if new research came out?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is established cardiology about the heart's neurons?`,
              options: [
                `The heart has no neurons`,
                `The human heart contains approximately 40,000-100,000 neurons forming a real, locally-functioning nervous system`,
                `The heart has more neurons than the brain`,
                `The heart's neurons are imaginary`,
              ],
              correctIndex: 1,
              explanation: `This is established cardiology, not contested. The heart's intrinsic cardiac nervous system is real. The disagreement is about what to make of it.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is Heart Rate Variability (HRV)?`,
              options: [
                `When your heart beats too fast`,
                `The small variations in time between heartbeats; a real measurable phenomenon associated with emotional regulation, stress, and health`,
                `An illness`,
                `Made up by HeartMath`,
              ],
              correctIndex: 1,
              explanation: `HRV is mainstream cardiology, not pseudoscience. HeartMath builds on real HRV research. The contested claims involve their broader interpretation, not the basic HRV science.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is Antonio Damasio's somatic marker hypothesis?`,
              options: [
                `That emotions don't exist`,
                `That the body (including the heart) sends signals to the brain, which integrates them into what we feel as emotion; the brain remains the integrator and conscious experiencer`,
                `That only the brain matters`,
                `That the heart is conscious`,
              ],
              correctIndex: 1,
              explanation: `Damasio's framework: body signals (including from the heart) shape emotion, but the brain is the integrator. This is foundational modern neuroscience of emotion.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the brain-centric view of "heart intelligence"?`,
              options: [
                `That the heart is the most intelligent organ`,
                `That the heart has real local processing and communicates with the brain, but isn't itself "intelligent" in the colloquial sense; many organs have local processing without being conscious`,
                `That the heart is irrelevant`,
                `That the heart can think`,
              ],
              correctIndex: 1,
              explanation: `Brain-centric: yes neurons in the heart, no conscious intelligence. Local processing is not the same as intelligence. The gut has more neurons but isn't called "intelligent" in the same way.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is interoception?`,
              options: [
                `A meditation practice`,
                `The brain's perception of internal body signals like heartbeat, breathing, hunger; a well-studied function that shapes emotion`,
                `Something only spiritual people experience`,
                `Heart magic`,
              ],
              correctIndex: 1,
              explanation: `Interoception is real neuroscience. The brain constantly perceives internal signals from the body, including the heart, and uses them to build emotion and bodily awareness.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the integrated view hold?`,
              options: [
                `That the heart is conscious`,
                `That the heart is irrelevant`,
                `That the heart and brain are genuinely connected and the connection matters for emotion and well-being, but the heart isn't itself conscious; practices that engage the heart-brain pathway produce real benefits through well-understood mechanisms`,
                `That HeartMath is fully correct`,
              ],
              correctIndex: 2,
              explanation: `The integrated view holds distinctions: real connection AND no metaphysical overreach. Practices work through known mechanisms (HRV, vagal tone, breathing). No magic required.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "contested science"?`,
              options: [
                `Science that's been disproven`,
                `A scientific area where basic findings are established but the interpretation is still genuinely debated by competent researchers; different from pseudoscience`,
                `Fake science`,
                `Science that's wrong`,
              ],
              correctIndex: 1,
              explanation: `Contested science is real but interpretively open. The heart-brain interpretation is a good example. Different from pseudoscience, which contradicts evidence or makes unfalsifiable claims.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the gut comparison challenge "heart intelligence" claims?`,
              options: [
                `Because the gut is more important than the heart`,
                `Because the gut contains roughly 100 million neurons (more than the heart) and communicates richly with the brain; by the same logic as "heart intelligence," the gut would be even more "intelligent," which most heart-centric proponents don't embrace`,
                `Because the gut doesn't have neurons`,
                `Because the gut is dirty`,
              ],
              correctIndex: 1,
              explanation: `The consistency challenge: if local neural processing makes an organ "intelligent," then the gut, with far more neurons, would be more so. The selective use of "intelligence" for the heart but not the gut suggests something else is going on.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: HeartMath's research on Heart Rate Variability is built on real mainstream cardiology.`,
              correctAnswer: true,
              explanation: `True. HRV is mainstream science. HeartMath builds on this real foundation. The contested claims are about broader interpretations (electromagnetic field effects, heart intelligence), not HRV itself.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A wellness coach says "your heart has more wisdom than your brain — listen to it." Based on this lesson, what's the most thoughtful response?`,
              options: [
                `"Yes, the heart is wiser"`,
                `"That's pseudoscience and you're wrong"`,
                `"There's real research on heart-brain communication and HRV. Practices that engage that pathway can produce real benefits. But 'heart wisdom' usually means body-based emotional signals the brain is interpreting, not the heart itself being a wiser thinker. The bounded version is true. The metaphorical version overstates."`,
                `"Tell me more about your courses"`,
              ],
              correctIndex: 2,
              explanation: `Nuanced response. Honor what's real (heart-brain communication, body-based emotional signals matter). Name the overreach (the heart isn't literally wiser than the brain). This is using contested science carefully without dismissing it or buying the overstated version.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Did anything shift in how you think about "trusting your heart"? Where do you think that phrase actually points to?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position did you build your argument for, and why? Was it the strongest evidence, or what you already felt drawn to?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Heart-based wisdom is romantic and appealing. Brain-based reality is less romantic. Where do you sit emotionally on this question? Where do you sit intellectually? Do they match?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pay attention this week to when you "feel something in your heart." What's actually happening? Heart rate change? Chest sensation? Memory? Brain interpretation? Be specific.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the mainstream brain-centric view be missing something the heart-intelligence proponents are pointing toward, even if their language overstates? What would be a fair version of their best argument?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Try paced breathing for 5 minutes right now (inhale 5 seconds, exhale 5 seconds). Notice any shift in your emotional state. What do you think happened mechanistically?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Heart-brain communication is real and the practices that engage it can be useful. Two paths below to apply what's real and avoid what's overstated.`,
          familyActivity: {
            title: `The Paced Breathing Experiment`,
            duration: `20 minutes`,
            description: `As a family, try 5 minutes of paced breathing together (5 seconds in, 5 seconds out). Then discuss: did anyone notice a shift in their emotional state? Heart rate? Focus? Then talk about what likely happened mechanistically. Hint: the paced breathing engaged the vagus nerve, shifted heart rate variability, and influenced the autonomic nervous system. The brain interpreted these changes as calm. No mystical heart intelligence required. Real bodily experiences with real mechanisms.`,
          },
          projectOption: {
            title: `HRV Awareness, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `If you have access to a wearable device that measures HRV (some smartwatches and apps do), track it daily. If not, just track how you feel emotionally each day on a 1-10 scale and how rested you feel. Each day, do 5 minutes of paced breathing. Log how it shifts your mood/energy. After 14 days, write 500 words: what patterns showed up? Is HRV awareness useful for emotional regulation? Did you notice any difference from the practice? You are doing real applied physiology, not magic.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If your heart's role in your emotions is real but bounded, how does that change how you talk about feelings?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can use heart-brain practices without buying the heart-intelligence overreach.`,
            `A person who knows the difference between contested science and pseudoscience.`,
            `Someone who notices when "wisdom" language is doing metaphysical work it can't actually back up.`,
          ],
          saveKey: `identity_responses_iw_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can describe what's actually established about the heart's neural network and HRV, articulate three serious positions on the heart in consciousness, distinguish contested science from pseudoscience, and apply real heart-brain practices without buying the overreach. The heart-brain area is a perfect example of why nuanced scientific thinking matters: the real science is genuinely interesting, the overreach is genuinely misleading, and most people can't tell them apart. You now can. Next time we go into one of the most powerful Jungian concepts: archetypes and the collective unconscious. We read Jung directly. Annotate format. See you there. — Sage`,
          badge: `heart-brain-thinker`,
          badgeName: `Heart-Brain Thinker`,
          xpEarned: 75,
          competencies: [
            `Can describe what's established about the heart's neural network and HRV`,
            `Can articulate three positions on the heart in consciousness`,
            `Distinguishes contested science from pseudoscience`,
            `Can apply real heart-brain practices without metaphysical overreach`,
            `Has built and defended an argument on contested scientific terrain`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Archetypes and the Collective Unconscious — Reading Jung Directly`,
            hook: `Jung claimed that beneath your personal unconscious lies a shared layer of mind we all draw from. Hero. Wise old one. Trickster. Mother. We read his own words and analyze them.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L14 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
