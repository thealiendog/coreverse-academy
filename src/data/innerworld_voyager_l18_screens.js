// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L18 — Near-Death Experiences: Honest Evaluation of Contested Evidence
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Scientific Literacy, Contested Evidence
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (neuroscience explanation / consciousness research / viral content)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l18-v1";

const INNERWORLD_VOYAGER_L18 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-18`,
      title: `Near-Death Experiences: Honest Evaluation of Contested Evidence`,
      duration: 35,
      xpReward: 75,
      badge: `frontier-thinker`,
      badgeName: `Frontier Thinker`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}, today's lesson is uncomfortable for a different reason than the others. We're going to look at evidence at the edges of what science can investigate: near-death experiences, the reports millions of people have made of consciousness continuing during cardiac arrest, surgical anesthesia, or moments of clinical death. Some of these reports have features that current neuroscience cannot easily explain. Other features look exactly like what dying brains might produce. Three different sources interpret the same evidence in three very different ways. There is no easy answer here. This is what genuinely contested evidence looks like. Your job today is to evaluate sources carefully on a question where even careful researchers disagree.`,
          headline: `Near-Death Experiences`,
          subtitle: `What happens when the line between science and mystery gets thin.`,
          visual: `/voyager-assets/inner-world/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What People Actually Report`,
          paragraphs: [
            `Near-death experiences (NDEs) are reports made by people who were clinically dead or near death and were then revived. Cardiac arrest survivors, accident victims, surgical patients during complications, people in deep comas. The phenomenon was studied in detail starting with Raymond Moody's 1975 book Life After Life, which compiled hundreds of accounts and identified common features. Since then, researchers including Pim van Lommel, Bruce Greyson, and Sam Parnia have collected thousands of cases under various levels of methodological rigor.`,
            `The common features are remarkably consistent across cultures, ages, and religious backgrounds. People report a sense of leaving the body and viewing the scene from above. Moving through a tunnel toward a light. Encountering deceased relatives or a being of light. A life review, often described as seeing significant moments and feeling them from the perspective of others. A sense of unconditional love. A boundary or choice point where they were either told or chose to return. The feeling of being "more conscious" than in ordinary life, not less.`,
            `What's striking, and what makes NDEs scientifically interesting, is the consistency. Across thousands of accounts, certain features show up again and again. Children too young to have absorbed cultural ideas about death report similar experiences. People from religious backgrounds that don't include such imagery still report it. People who were skeptical or atheist sometimes report the same features as believers. The phenomenon is real in the sense that the reports are real. What's debated is what they tell us.`,
          ],
          image: `/voyager-assets/inner-world/l18-s1-reports.webp`,
          imageCaption: `Striking cross-cultural consistency. The reports themselves are real.`,
          vocab: [
            {
              word: `near-death experience`,
              definition: `Reports made by people who were clinically dead or near death and were then revived, often with consistent features across cultures (out-of-body sensation, tunnel, light, life review).`,
              audioPrompt: `A near-death experience, often called an NDE, is a report made by someone who was clinically dead or near death and was then revived, {name}. The reports are remarkably consistent across cultures and individuals: an out-of-body sensation, movement through a tunnel toward light, encounters with figures, a life review, and a return decision. Researchers have collected thousands of cases over decades. The reports themselves are real. People are not making them up. What's contested is what causes them and what they mean.`,
            },
            {
              word: `life review`,
              definition: `A commonly reported feature of near-death experiences in which a person perceives significant moments of their life and often feels them from the perspective of others. Consistent across cultures and belief backgrounds.`,
              audioPrompt: `Life review is one of the most consistently reported features of near-death experiences, {name}. It involves perceiving significant moments of one's life — often described as seeing them and feeling them from the perspective of others involved. The lesson notes that this feature appears across thousands of accounts, across different cultures, ages, and religious backgrounds, including among people whose religious traditions contain no such imagery. The consistency of the life review across such diverse reporters is part of what makes the NDE phenomenon scientifically interesting. What causes it — brain mechanisms under dying conditions, or something else — is part of what remains contested.`,
            },
            {
              word: `cross-cultural consistency`,
              definition: `The quality of a phenomenon appearing with similar features across different cultures, ages, and belief backgrounds. The cross-cultural consistency of NDE reports is part of what makes them scientifically significant.`,
              audioPrompt: `Cross-cultural consistency is the quality of a phenomenon appearing with similar features across different cultures, ages, and belief backgrounds, {name}. In near-death experience research, it is one of the most striking aspects of the data. Children too young to have absorbed cultural ideas about death report similar experiences. People from religious backgrounds that include no such imagery still report it. Skeptics and atheists sometimes report the same features as devout believers. This consistency suggests a shared underlying cause — whether that is shared brain physiology under dying conditions or something the current scientific model does not fully account for. The consistency is real; its interpretation is contested.`,
            }
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Standard Neuroscience Explanation`,
          paragraphs: [
            `Mainstream neuroscience generally explains NDEs as products of the dying or stressed brain. Specific mechanisms have been proposed and tested. Oxygen deprivation (hypoxia) is known to produce visual phenomena including tunnel vision and bright lights. The brain releases endogenous opioids and other chemicals during severe stress that can produce feelings of peace and euphoria. Specific brain regions, including the temporoparietal junction, when stimulated or disrupted, can produce out-of-body sensations in laboratory settings.`,
            `The pattern of common NDE features maps reasonably well onto these mechanisms. Tunnel vision: hypoxia. Sense of peace: endogenous opioids and dampened threat response. Out-of-body sensation: temporoparietal junction disruption. Life review: temporal lobe activation during stress, which can produce vivid autobiographical memories. Encounters with figures: limbic system activity and pattern-completion. From this view, NDEs are real subjective experiences caused by predictable brain mechanisms during the dying process. The experiences are genuine. The interpretation that they prove anything beyond brain activity is not justified.`,
            `Critics of this view note that the explanations are post-hoc: they assume the brain causes the experiences and then look for mechanisms. The mechanisms exist, but mapping them precisely onto the specific cluster of NDE features is not always clean. Some critics also point out that NDE features cluster together in ways that seem more organized than a random mix of brain malfunctions would produce. This is exactly the kind of dispute that makes the question genuinely contested.`,
          ],
          image: `/voyager-assets/inner-world/l18-s2-standard.webp`,
          imageCaption: `Standard neuroscience: real experiences caused by predictable brain mechanisms.`,
          vocab: [
            {
              word: `hypoxia`,
              definition: `Insufficient oxygen reaching brain tissue. Known to produce visual phenomena including tunnel vision and altered states of consciousness. A leading proposed mechanism for some NDE features.`,
              audioPrompt: `Hypoxia is insufficient oxygen reaching brain tissue, {name}. It is known to produce specific visual and conscious effects, including tunnel vision and bright light experiences. During cardiac arrest, the brain becomes severely hypoxic within seconds. Many of the visual features of NDEs map onto hypoxia effects studied in laboratory conditions. Hypoxia is a well-documented physiological mechanism. The question is whether it fully explains the more elaborate features of NDEs (life review, encounters with figures, sense of being more conscious than usual) or whether something else is also involved.`,
            },
            {
              word: `temporoparietal junction`,
              definition: `A brain region that, when stimulated or disrupted, can produce out-of-body sensations. Its disruption during near-death events is one of the proposed neuroscience mechanisms for the out-of-body feature of NDEs.`,
              audioPrompt: `The temporoparietal junction is a specific brain region that, when stimulated or disrupted, can produce out-of-body sensations, {name}. This has been demonstrated in laboratory settings. The lesson presents it as one of the neuroscience mechanisms proposed to explain a common NDE feature. The mapping goes: temporoparietal junction disruption during cardiac arrest or severe stress produces the sensation of leaving the body and observing from above. This is a real brain mechanism with real documented effects. The question is whether this mechanism fully explains the out-of-body feature of NDEs, or whether some cases involve something the laboratory stimulation model does not capture.`,
            },
            {
              word: `endogenous opioids`,
              definition: `Naturally occurring brain chemicals released during severe stress that can produce feelings of peace, euphoria, and reduced pain. Proposed as a neuroscience mechanism for the sense of peace commonly reported in NDEs.`,
              audioPrompt: `Endogenous opioids are naturally occurring brain chemicals released during severe stress, {name}. The body produces them. They can produce feelings of peace, euphoria, and reduced pain. The lesson names them as one of the specific mechanisms mainstream neuroscience proposes to explain NDE features — specifically the sense of unconditional peace and love that is so commonly reported. The mapping: severe physiological stress triggers opioid release, which produces the subjective quality of calm and euphoria. Critics of the pure neuroscience model note that this mapping, while plausible, is post-hoc. The mechanism exists. Whether it fully accounts for the specific quality of the NDE peace is part of the ongoing dispute.`,
            }
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where Things Get More Interesting`,
          paragraphs: [
            `Several findings in NDE research are harder to explain with the standard neuroscience model. Some patients report observations during clinical death that were later verified to be accurate, including details they could not have observed under normal circumstances. The most studied case is the AWARE study led by Sam Parnia at the University of Southampton, which found that a small percentage of cardiac arrest survivors reported verifiable observations of events that occurred during the period when their brain showed no measurable activity.`,
            `The veridical perception evidence is contested. Critics argue that the verifiable observations could have been reconstructed from information acquired before or after the period of clinical death, or that the timing of the perceptions has been mis-assigned. Defenders argue that the methodology in the better studies controls for these factors and that genuine cases remain. The argument hasn't been settled definitively. It's one of the most carefully studied questions at the edge of what science can investigate.`,
            `Another puzzling feature: NDE reporters often describe their experience as "more real than reality" in a way that ordinary hallucinations or dreams don't typically produce. They also report consistent long-term life changes after NDEs: reduced fear of death, changed values toward relationships and meaning, increased spirituality regardless of prior belief. These changes are documented across thousands of cases. They don't prove anything specific about what the experience was. But they suggest the experience is unusual in ways that pure brain malfunction explanations don't fully capture.`,
          ],
          image: `/voyager-assets/inner-world/l18-s3-puzzling.webp`,
          imageCaption: `Some features are harder to fit into the standard model.`,
          vocab: [
            {
              word: `veridical perception`,
              definition: `Perception of real events or information that is later verified to be accurate. In NDE research, claims of veridical perception during clinical death are contested but actively studied.`,
              audioPrompt: `Veridical perception is perception of real events or information that is later verified to be accurate, {name}. In NDE research, the claim is that some patients report seeing or hearing things during clinical death that they could not have known by ordinary means, and which turn out to be accurate. The most rigorous study of this is Sam Parnia's AWARE study at Southampton. The findings are real but their interpretation is contested. Critics argue the perceptions might have been reconstructed from information acquired at other times. Defenders argue the methodology controls for this. The debate is unresolved.`,
            },
            {
              word: `AWARE study`,
              definition: `A multi-year prospective study led by Sam Parnia at the University of Southampton investigating whether cardiac arrest survivors report verifiable observations during periods of clinical death. One of the most methodologically careful NDE studies conducted.`,
              audioPrompt: `The AWARE study is a multi-year prospective investigation led by Sam Parnia at the University of Southampton, {name}. It tracked cardiac arrest survivors and examined whether any reported verifiable observations of events that occurred during the period when their brain showed no measurable activity. The lesson describes it as the most studied case in the veridical perception debate. A small percentage of survivors reported potentially verifiable observations. Critics argue the timing of those perceptions is difficult to establish with certainty. Defenders argue the methodology controls for confounds and that genuine cases remain. The AWARE findings are real and the debate around them is unresolved.`,
            },
            {
              word: `long-term life changes`,
              definition: `Documented alterations in values, fear of death, and relationships that NDE reporters consistently show following their experience. These changes are recorded across thousands of cases regardless of the cause of the NDE.`,
              audioPrompt: `Long-term life changes are documented alterations that consistently follow near-death experiences, {name}. The lesson names three: reduced fear of death, changed values toward relationships and meaning, and increased spirituality regardless of prior belief. These changes are recorded across thousands of cases. They do not prove anything specific about what caused the experience. But they suggest the NDE is unusual in ways that pure brain malfunction explanations do not fully capture. Ordinary hallucinations and dreams do not typically produce lasting value shifts of this kind. The lesson presents long-term life changes as one of the features of NDEs that is harder to fit cleanly into the standard neuroscience model.`,
            }
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How To Hold Contested Evidence Honestly`,
          paragraphs: [
            `Most evidence in science is reasonably clear. NDEs are not. The phenomenon involves real reports, real consistency, partial neuroscientific explanation, and some features that resist easy explanation. Holding this kind of evidence honestly requires specific intellectual habits. The first is humility about what we know. The standard neuroscience model explains a lot but not everything. Claims that NDEs are "proof of an afterlife" go beyond what the evidence supports. Claims that NDEs are "fully explained by brain chemistry" also go beyond what the evidence supports.`,
            `The second habit is taking the reporters seriously without taking their interpretations as final. Someone who had an NDE is the world's expert on what they experienced. Their interpretation of what it meant is one possible framework, but it isn't automatically correct. People interpret experiences through frameworks they already have. A devout Christian and a committed atheist who report similar experiences will explain them very differently. The reports are evidence; the interpretations are conclusions that need their own support.`,
            `The third habit is patience. Scientific questions at the edges of what current tools can investigate take time to resolve. Some questions remain open for decades or centuries. NDEs may turn out to be fully explained by future neuroscience. Or they may turn out to point to something current science hasn't fully grasped. The mature stance is to hold the question open while being honest about what's currently known and what isn't. Cosmic certainty in either direction is the position to avoid.`,
          ],
          image: `/voyager-assets/inner-world/l18-s4-honest.webp`,
          imageCaption: `Take reports seriously, hold interpretations loosely, wait for evidence.`,
          vocab: [
            {
              word: `intellectual humility`,
              definition: `The willingness to acknowledge what you don't know and to hold beliefs proportional to actual evidence. Particularly important for contested questions.`,
              audioPrompt: `Intellectual humility is the willingness to acknowledge what you don't know, {name}. It is one of the most important features of careful thinking. Most contested questions don't have clean answers. The most accurate position is often the most uncertain one. Intellectual humility lets you say "I don't know if NDEs are fully explained by brain chemistry or whether they point to something else. Both views have something to them. I'm not going to commit to either until the evidence is stronger." That position is harder than picking a side. It is also usually more accurate when the evidence genuinely doesn't settle the question.`,
            },
            {
              word: `taking reporters seriously`,
              definition: `The intellectual practice of treating NDE reporters as genuine witnesses to their own experience while recognizing that their interpretation of what it means is not automatically correct.`,
              audioPrompt: `Taking reporters seriously is an intellectual practice the lesson identifies as essential for engaging with contested evidence honestly, {name}. Someone who had a near-death experience is the world's expert on what they experienced. Their testimony deserves genuine attention. But their interpretation of what it means is one possible framework, not automatically the correct one. People interpret experiences through frameworks they already hold. A devout Christian and a committed atheist who report similar experiences will explain them very differently. Taking the report seriously and taking the interpretation as final are two different moves. Only the first is required for honest engagement with the evidence.`,
            },
            {
              word: `cosmic certainty`,
              definition: `The posture of claiming definitive answers to questions at the edges of what current evidence can settle. The lesson identifies this as the position to avoid on genuinely contested questions like NDEs.`,
              audioPrompt: `Cosmic certainty is the posture of claiming definitive answers to questions where current evidence does not actually settle the matter, {name}. The lesson names it specifically as the position to avoid on near-death experiences. Claiming NDEs are proof of an afterlife is cosmic certainty. Claiming NDEs are fully explained by brain chemistry is also cosmic certainty. Both go beyond what the evidence supports. The mature stance is different: hold the question open, be honest about what is currently known and what isn't, continue engaging carefully as new evidence accumulates. Cosmic certainty in either direction is the mistake the lesson warns against, regardless of which direction feels more comfortable to you.`,
            }
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why This Matters For Your Thinking Life`,
          paragraphs: [
            `Most lessons in this band have taught you to evaluate evidence on questions where mainstream science had reasonably clear answers. This lesson is different. NDEs are an example of a genuinely contested question. The skill you need here is different from the skill of dismissing pseudoscience or recognizing overreach. You need the skill of holding open questions open without collapsing into either belief or dismissal.`,
            `This skill matters because real life is full of contested questions. The hard problem of consciousness. The nature of free will. The ethics of emerging technology. The boundaries of artificial intelligence. The interpretation of historical events. These don't have clean answers. The honest position is to engage with them carefully, weigh the evidence each direction, notice where you are tempted to overclaim, and live with uncertainty when uncertainty is what the evidence supports.`,
            `In the source evaluation that follows, you will see three different framings of NDE evidence. None of them is straightforwardly the truth. Your job is to rank them by credibility within their own claims, not by which interpretation you favor. The most careful source may make claims you find unappealing. The most exciting source may have the weakest evidence. Real intellectual work means evaluating sources on their methodology and rigor, not on whether their conclusions fit your worldview. This is one of the hardest cognitive skills there is. Practice it on NDEs and you will use it for the rest of your life.`,
          ],
          image: `/voyager-assets/inner-world/l18-s5-skill.webp`,
          imageCaption: `The skill: evaluate methodology, not preferred conclusions.`,
          vocab: [
            {
              word: `genuine uncertainty`,
              definition: `An open question where current evidence does not clearly favor one answer. Different from manufactured doubt and from refusing to engage; intellectual honesty about what is actually known.`,
              audioPrompt: `Genuine uncertainty is an open question where current evidence does not clearly favor one answer, {name}. It is different from manufactured doubt, where people pretend something is uncertain to avoid acknowledging clear evidence. It is also different from refusing to engage, where people throw up their hands instead of trying to think carefully. Genuine uncertainty is intellectual honesty about what is actually known and not yet known. NDEs are a good example. Climate change is not, because the evidence there is clear. Knowing which questions have genuine uncertainty and which have clear answers is itself a real skill.`,
            },
            {
              word: `hard problem of consciousness`,
              definition: `The unresolved philosophical and scientific question of why there is subjective experience at all — why physical brain processes give rise to the felt quality of inner life. Named as one of the genuinely contested open questions in this band.`,
              audioPrompt: `The hard problem of consciousness is the question of why there is subjective experience at all, {name}. Physical brain processes can be studied and mapped. But why does any of that activity feel like something from the inside? Why is there a felt quality to seeing red, or being in pain, or recognizing a friend? This question has not been answered. The lesson names it as one of the genuinely contested open questions — alongside near-death experiences and the nature of free will — that illustrate what it means to hold open questions open. Intellectual honesty about the hard problem means acknowledging that current science has no satisfying answer. That acknowledgment is not weakness. It is accuracy.`,
            },
            {
              word: `evaluate on methodology`,
              definition: `The practice of judging the credibility of a source based on how it produces and tests its claims, rather than on whether its conclusions match your preferred worldview.`,
              audioPrompt: `Evaluating on methodology is the practice of judging a source's credibility based on how it produces and tests its claims, {name}. The lesson names it as one of the hardest cognitive skills there is. The most careful source may reach conclusions you find unappealing. The most exciting source may have the weakest evidence. Real intellectual work means tracking methodology, openness about limitations, and the relationship between claims and evidence — not whether a source tells you what you hoped to hear. This skill, applied to near-death experience research, is what separates the AWARE study and the Mobbs and Watt paper from the YouTube testimonial channel, even when readers might prefer the latter's conclusions.`,
            }
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l18-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Near-Death Experiences`,
          intro: `Three sources interpret NDE evidence differently. Rank them by credibility within their own claims. Pay attention to methodology, not just to which conclusion you prefer.`,
          topic: `What do near-death experience reports actually tell us about consciousness and what happens at death?`,
          sources: [
            {
              id: `source-a`,
              name: `Parnia et al., 2014 — AWARE study, Resuscitation journal`,
              type: `Peer-reviewed multicenter prospective study by Sam Parnia at the University of Southampton; published in a mainstream medical journal`,
              claim: `Some cardiac arrest survivors report experiences during periods when their brains showed no measurable activity. A small percentage of these reports include verifiable observations of events in the resuscitation environment. The findings warrant further research but do not yet establish whether these reports represent veridical perception or reconstruction from other information. The methodology aims to control for confounds.`,
              evidence: `Multi-year prospective study across multiple hospitals in the US, UK, and Austria. 2,060 cardiac arrest cases tracked. 9% of survivors reported some form of conscious experience during resuscitation. A small number reported potentially verifiable observations. Methodology was peer-reviewed before publication. Critics have noted limitations in establishing exact timing of the reported experiences. Both findings and limitations are reported openly by the authors.`,
            },
            {
              id: `source-b`,
              name: `Mobbs & Watt, 2011 — "There is nothing paranormal about near-death experiences"`,
              type: `Peer-reviewed paper in Trends in Cognitive Sciences arguing that NDEs are fully explained by known neuroscience mechanisms`,
              claim: `The features of NDEs map onto known brain mechanisms (hypoxia, endogenous opioids, temporoparietal junction disruption, REM intrusion, temporal lobe activation). The phenomenon does not require any explanation beyond these mechanisms. NDEs are real subjective experiences with predictable neurobiological causes. Claims of veridical perception or evidence for consciousness beyond the brain are not supported by careful examination of the data.`,
              evidence: `Reviews the existing NDE literature systematically. Maps each common NDE feature to specific brain mechanisms documented in mainstream neuroscience. Cites peer-reviewed studies for each mapping. Acknowledges that the experiences themselves are real. Critics argue some of the mappings are post-hoc and that the article does not fully address the most carefully documented veridical perception cases. The argument is rigorous within its framework.`,
            },
            {
              id: `source-c`,
              name: `"What I Saw In Heaven" — Viral YouTube channel, 850K subscribers`,
              type: `YouTube account featuring weekly first-person NDE testimony videos with dramatic music, sponsor mentions, and book promotions; runs companion website selling courses on "preparing for the afterlife"`,
              claim: `NDEs definitively prove the existence of an afterlife, the reality of God or a "being of light," and that consciousness continues after death. Multiple "biblical confirmations" appear in NDE reports. Skeptics are wrong because they haven't experienced it. The brain doesn't create consciousness; it merely receives it. Buy the host's bestselling book and complete the "Eternal Life Preparation Course" for $297 to ensure your own positive afterlife experience.`,
              evidence: `Compiled first-person testimonials from people who report NDE experiences. No engagement with peer-reviewed research except selective citation that supports the channel's framing. No discussion of alternative explanations. Significant financial structure (book sales, courses, sponsorships). Strong religious framing imposed on diverse experiences across different religious backgrounds. Conspiracy framing about mainstream science.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible. This is harder than usual because the credibility is about methodology, not about which conclusion you might prefer.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? Was it harder to rank these than previous source evaluations? Why?`,
          reveal: {
            title: `How a careful researcher would evaluate these`,
            content: [
              `Source A is the most rigorous on a genuinely difficult question. Notice everything it has: prospective multicenter design (much stronger than retrospective interviews), thousands of cases tracked, peer-reviewed publication in a mainstream medical journal, careful acknowledgment of both findings and methodological limitations, no overstated conclusions. The authors don't claim NDEs prove an afterlife. They report what they found and what their methodology can and can't establish. This is what serious research on contested evidence actually looks like.`,
              `Source B is also rigorous, with a different conclusion. Mobbs and Watt's paper is peer-reviewed, systematically reviews the literature, and maps NDE features to specific brain mechanisms with citations. Its conclusion is more skeptical than Source A's. Both can be credible at the same time because they're doing different intellectual work: Source A is reporting empirical findings with limitations openly stated; Source B is providing a theoretical framework that explains the phenomenon. Both are within mainstream science. Both are honest about their reasoning. Neither overclaims.`,
              `Source C is the now-recognizable pattern of commercial spiritual content. The conclusion (definitive proof of afterlife) far exceeds what evidence supports. The methodology (selecting testimonials that fit a religious framing) is not designed to evaluate the evidence; it is designed to confirm a predetermined view. The financial structure (book, $297 course) creates strong incentive to maintain the framing regardless of what evidence suggests. The conspiracy framing about mainstream science is a major red flag. The cherry-picking of testimonials, while ignoring the diversity of NDE experiences across belief systems, distorts the actual data.`,
              `The deeper lesson: on genuinely contested questions, two methodologically careful sources can reach different conclusions and both be credible. Source A and Source B disagree, but both engage honestly with evidence and acknowledge what they don't know. The line between credible and not-credible doesn't track whether you like the conclusion. It tracks methodology, openness about limitations, and the relationship between claims and evidence. This is what you need to take with you. When evidence is genuinely uncertain, the credibility of a source comes from its honesty about that uncertainty, not from whether it offers you the answer you want.`,
            ],
          },
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is a near-death experience (NDE)?`,
              options: [
                `A delusion`,
                `A report made by someone who was clinically dead or near death and was then revived, often with consistent features (out-of-body sensation, tunnel, light, life review) across cultures`,
                `A type of meditation`,
                `Only a religious experience`,
              ],
              correctIndex: 1,
              explanation: `NDEs are real reports made by real people. The phenomenon (the reporting) is well-documented. What's contested is the interpretation and underlying mechanism.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the standard neuroscience explanation for NDE features?`,
              options: [
                `That NDEs aren't real`,
                `That known brain mechanisms (hypoxia for tunnel vision, endogenous opioids for euphoria, temporoparietal junction disruption for out-of-body sensation, temporal lobe activation for life review) produce the experiences during the dying process`,
                `That NDEs prove an afterlife`,
                `That patients are confused`,
              ],
              correctIndex: 1,
              explanation: `The mainstream neuroscience model maps NDE features to specific documented brain mechanisms. The experiences are real subjective phenomena with proposed predictable causes.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "veridical perception" in NDE research?`,
              options: [
                `Always seeing the truth`,
                `Perception of real events or information during NDE that is later verified to be accurate; contested but actively studied, especially in Sam Parnia's AWARE study`,
                `Religious vision`,
                `Lying about experiences`,
              ],
              correctIndex: 1,
              explanation: `Veridical perception is the harder-to-explain feature. If verified, it's evidence that conscious perception was happening during periods of clinical death. The interpretation of these findings is contested.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the AWARE study by Sam Parnia represent in NDE research?`,
              options: [
                `A small informal survey`,
                `A multi-year prospective multicenter study tracking thousands of cardiac arrest cases across multiple hospitals, peer-reviewed in mainstream medical journals, examining whether some NDE reports contain verifiable observations`,
                `Pseudoscience`,
                `Religious propaganda`,
              ],
              correctIndex: 1,
              explanation: `AWARE is one of the most methodologically careful studies of NDEs ever conducted. It doesn't prove anything definitively but represents serious research on a difficult question.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the difference between a "real experience" and "evidence for an afterlife" in NDE discussions?`,
              options: [
                `There's no difference`,
                `The experiences themselves are real (people genuinely have them); whether they prove an afterlife is a separate interpretive question that current evidence doesn't settle`,
                `Real experiences always prove afterlives`,
                `Only afterlives are real`,
              ],
              correctIndex: 1,
              explanation: `This distinction is central. The reports are real. The interpretation of what they mean is contested. Conflating these two leads to overreach in either direction.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "intellectual humility"?`,
              options: [
                `Pretending you don't know things`,
                `The willingness to acknowledge what you don't know and to hold beliefs proportional to actual evidence`,
                `Being shy`,
                `Refusing to think`,
              ],
              correctIndex: 1,
              explanation: `Intellectual humility is one of the most important features of careful thinking. It is particularly important on contested questions where the evidence doesn't clearly favor one answer.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does "genuine uncertainty" mean?`,
              options: [
                `Not knowing anything`,
                `An open question where current evidence does not clearly favor one answer; different from manufactured doubt and from refusing to engage`,
                `Always being unsure`,
                `Pretending to be confused`,
              ],
              correctIndex: 1,
              explanation: `Genuine uncertainty is intellectual honesty. NDEs have it. Climate change does not (the evidence there is clear). Knowing which questions have genuine uncertainty is itself a real skill.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why can both Source A (Parnia AWARE) and Source B (Mobbs & Watt) be credible even though they reach different conclusions?`,
              options: [
                `Because they're not credible`,
                `Because they do different intellectual work: Source A reports empirical findings with limitations openly stated; Source B provides a theoretical framework that explains the phenomenon; both engage honestly with evidence and acknowledge what they don't know`,
                `Because contradiction proves both right`,
                `Because credibility is random`,
              ],
              correctIndex: 1,
              explanation: `On genuinely contested questions, two methodologically careful sources can disagree and both remain credible. This is what real intellectual work looks like at the edge of what's known.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: NDE reports are remarkably consistent across different cultures, ages, and religious backgrounds.`,
              correctAnswer: true,
              explanation: `True. This cross-cultural consistency is part of what makes the phenomenon scientifically interesting. It suggests a shared underlying cause, whether that's shared brain physiology under dying conditions or something else.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend tells you their aunt had an NDE and saw heaven. Based on this lesson, what's the most thoughtful response?`,
              options: [
                `"That's proof of an afterlife!"`,
                `"It was all just brain chemistry, nothing real."`,
                `"Her experience was real. People have these and they're often life-changing. There are different scientific explanations being studied. Some neuroscientists explain the features through specific brain mechanisms during the dying process. Others point to features that aren't fully explained yet. The honest answer is we don't fully know what NDEs are. The experience was real, the interpretation is still being studied carefully."`,
                `"That's just a religious story."`,
              ],
              correctIndex: 2,
              explanation: `Nuanced. Honor the reality of the experience. Name the genuine uncertainty about its meaning. Avoid overreach in either direction. This is intellectual humility applied to a real conversation about a contested phenomenon.`,
            },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What's harder about evaluating NDE evidence than evaluating the manifestation claims in Lesson 13 or the placebo claims in L5? Why?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `When you ranked the three sources, were you tempted to rank them by which conclusion you preferred rather than by their methodology? Be honest.` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Most people pick a team on NDEs (believer or dismisser). What kind of person are you trying to be when you choose to hold the question open instead?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of another contested question in your life (a science topic, a historical event, a political question). Could you apply the same intellectual humility framework?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is "I don't know" sometimes a cop-out? When does holding the question open become an excuse not to think?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `How does the question of what happens at death actually sit with you right now? Be specific about both your thoughts and your feelings.` },
          ],
        },

        {
          id: `l18-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `NDEs touch one of the deepest questions humans face. Engaging with the evidence carefully is real intellectual work. Two paths below.`,
          familyActivity: {
            title: `The Hard Question Conversation`,
            duration: `30 minutes`,
            description: `At dinner tonight, share what you learned about NDEs. Then ask each family member: what do you actually think happens at death, and what's the basis for what you think? Listen carefully. Notice how people mix evidence, religious belief, hope, fear, and intuition in their answers. The goal isn't to agree or argue. The goal is to practice talking about deep uncertain questions with intellectual honesty in a family. This is rare. It also builds the muscle for any future conversation about hard things.`,
          },
          projectOption: {
            title: `Hold One Open Question, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Pick one genuinely uncertain question that matters to you (could be NDE-related or something else: free will, consciousness, the existence of God, the future of AI, the right thing to do about a hard life choice). For 14 days, hold it open. Each day, spend 10 minutes thinking, reading, or talking with someone about it. Don't try to settle it. Practice the discipline of holding it open. Each day write 2-3 sentences about what you noticed. After 14 days, write 500 words on what you learned about your own thinking under uncertainty. This is real intellectual training.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Trust their privacy with their reflections.`,
          },
          identityQuestion: `If you can sit with deep uncertainty without rushing to belief or dismissal, what kind of thinking partner does that make you?`,
        },

        {
          id: `l18-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can hold open the questions everyone else rushes to answer.`,
            `A person who evaluates evidence on methodology, not on preferred conclusion.`,
            `Someone willing to take both believers and skeptics seriously without joining either team.`,
          ],
          saveKey: `identity_responses_iw_11_12_18`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can describe NDE phenomena and their typical features, articulate both the standard neuroscience explanation and what's harder to explain within it, hold contested evidence with intellectual humility, evaluate sources on methodology rather than on preferred conclusion, and engage genuinely uncertain questions without collapsing into belief or dismissal. This is one of the hardest intellectual skills there is. The next two lessons close out the Inner World band. Living in alignment with your values, and the capstone, designing a conscious life. See you there. — Sage`,
          badge: `frontier-thinker`,
          badgeName: `Frontier Thinker`,
          xpEarned: 75,
          competencies: [
            `Can describe near-death experience phenomena and common features`,
            `Can articulate the standard neuroscience explanation and its limitations`,
            `Holds contested evidence with intellectual humility`,
            `Evaluates sources on methodology rather than on preferred conclusion`,
            `Distinguishes manufactured doubt from genuine uncertainty`,
          ],
          nextLessonPreview: {
            title: `Lesson 19: Living in Alignment with Values — Stoic, Existentialist, or Virtue Ethics?`,
            hook: `Three ancient and modern approaches to living a life that matches your values. Build your argument for the strongest approach.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L18;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L18.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L18 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
