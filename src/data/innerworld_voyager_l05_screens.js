// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L05 — The Placebo Effect: Real and Strange
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Mind-Body Science, Scientific Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (placebo research vs wellness gurus vs viral claims)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l05-v1";

const INNERWORLD_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-05`,
      title: `The Placebo Effect: Real and Strange`,
      duration: 35,
      xpReward: 75,
      badge: `placebo-detective`,
      badgeName: `Placebo Detective`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, here is something strange and real. If a doctor gives you a pill with nothing active in it, just sugar and chalk, and tells you it will reduce your pain, your pain often goes down. Not a little. Sometimes a lot. This is not your imagination. Brain scans show real changes. Pain measurements drop. This is called the placebo effect. It has been studied for over 70 years. It is real. And it is also one of the most misunderstood and oversold ideas in modern wellness. Today we look at what the placebo effect actually is, what it can and cannot do, and how to tell real placebo science from the people using the word to sell you things that don't work.`,
          headline: `The Placebo Effect`,
          subtitle: `Real, measurable, and constantly oversold.`,
          visual: `/voyager-assets/inner-world/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Sugar Pill That Worked`,
          paragraphs: [
            `In 1955, a Harvard anesthesiologist named Henry Beecher published a paper called The Powerful Placebo. He had observed something strange during World War II. When morphine ran low on the battlefield, he had injected wounded soldiers with saline solution (basically just salt water) and told them it was morphine. Many soldiers reported significant pain relief. Their pain actually decreased. Beecher reviewed 15 clinical studies and found that, on average, about 35 percent of patients improved on placebo treatments alone.`,
            `That paper kicked off seven decades of research into one of the strangest phenomena in medicine. The placebo effect is when a treatment with no active ingredient produces real, measurable improvement in a patient's condition. The treatment can be a sugar pill, a saline injection, even a sham surgery where doctors make incisions but don't actually fix anything. The condition can be pain, depression, anxiety, Parkinson's symptoms, irritable bowel syndrome, asthma, and more.`,
            `Here's what's strange. The patients aren't faking it. Their pain really does decrease. Brain scans show real changes in pain-processing regions. Their immune markers shift. Their dopamine levels rise. Something is genuinely happening in their bodies. The placebo effect is a real biological phenomenon. It just doesn't work the way most people think.`,
          ],
          image: `/voyager-assets/inner-world/l05-s1-beecher.webp`,
          imageCaption: `Beecher's 1955 paper opened seven decades of placebo research.`,
          vocab: [
            {
              word: `placebo`,
              definition: `A treatment with no active medical ingredient (like a sugar pill or saline injection) that nonetheless produces real measurable improvement in some patients.`,
              audioPrompt: `A placebo is a treatment with no active ingredient that still produces real improvement in some patients, {name}. The word comes from Latin, meaning 'I shall please.' Originally it was a kind of medical white lie. Now it is one of the most studied phenomena in medicine. A sugar pill, a saline injection, even a fake surgery can produce measurable physiological changes. The patient is not faking. Brain scans show real activity changes. Something biological happens. Understanding what is and isn't a placebo effect is one of the most important scientific literacy skills you can develop.`,
            },
            {
              word: `saline solution`,
              definition: `A liquid made of salt and water with no active medical ingredient. Henry Beecher observed that wounded soldiers given saline solution instead of morphine often reported significant pain relief, an early observation of the placebo effect.`,
              audioPrompt: `A saline solution is just salt and water, {name}. It has no active medical ingredient. During World War II, when morphine ran low on the battlefield, Harvard anesthesiologist Henry Beecher injected wounded soldiers with saline and told them it was morphine. Many soldiers reported significant pain relief. Their pain actually decreased. This was not imagination. Something real was happening in their bodies. Beecher went on to review 15 clinical studies and found that, on average, about 35 percent of patients improved on placebo treatments alone. That observation sparked seven decades of scientific research into one of the strangest phenomena in medicine.`,
            },
            {
              word: `sham surgery`,
              definition: `A fake surgical procedure in which doctors make incisions but do not perform the actual medical intervention. Sham surgeries have been used in research and have produced real measurable improvement in some patients.`,
              audioPrompt: `A sham surgery is a fake surgical procedure, {name}. Doctors make real incisions, but they do not actually perform the medical intervention being studied. What is remarkable is that sham surgeries have produced real, measurable improvement in some patients. Not just in how patients feel, but in measurable outcomes. This is one of the most striking demonstrations that the placebo effect is a genuine biological phenomenon, not simply patients convincing themselves they feel better. The body responds to the ritual, the expectation, and the context of treatment, even when the treatment itself contains no active element.`,
            }
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What's Actually Happening In The Brain`,
          paragraphs: [
            `When you take a pill you believe will help, your brain starts working before any chemical hits your bloodstream. Expectation activates real neural pathways. Tor Wager's research at Dartmouth and University of Colorado has used brain imaging to map what happens during placebo responses. When patients expect pain relief from a placebo cream, regions that process pain (the anterior cingulate cortex, the insula, the thalamus) show reduced activity. Other regions associated with reward and expectation light up.`,
            `Your brain releases real chemicals during placebo responses. Studies have measured increased dopamine release in Parkinson's patients given placebos, increased endorphin release during placebo pain relief, and shifts in serotonin in depression placebo trials. When researchers give patients a drug that blocks endorphins and then give them a placebo, the placebo pain relief disappears. This proves the body's own chemistry is doing the work.`,
            `Context matters enormously. The same sugar pill works better if it's a capsule than a tablet. It works better if it's brand-name than generic. Two pills work better than one. Injections work better than pills. A pill given by a confident doctor in a white coat works better than the same pill given without ceremony. The brain is reading every signal about how serious the treatment is, and adjusting the body's response accordingly. None of this is fake. All of it is information about how powerfully expectation shapes biology.`,
          ],
          image: `/voyager-assets/inner-world/l05-s2-brain.webp`,
          imageCaption: `Expectation activates real neural pathways before any chemical acts.`,
          vocab: [
            {
              word: `expectation`,
              definition: `What you anticipate will happen. In placebo science, expectation activates real brain chemistry and shapes how the body responds.`,
              audioPrompt: `Expectation is what you anticipate will happen, {name}. In placebo research, expectation has been measured changing real brain chemistry. If you expect a pill to reduce your pain, your brain often releases endorphins, your body's natural painkillers, before any active ingredient hits. The expectation itself triggers the response. This is why doctors take bedside manner seriously. It's not just kindness. The way information is delivered shapes how the patient's body reacts. Expectation isn't imagination. It is biology.`,
            },
            {
              word: `endorphins`,
              definition: `The body's natural painkillers, released in the brain during placebo pain relief. When endorphins are blocked by a drug, placebo pain relief disappears, proving the body's own chemistry is doing the work.`,
              audioPrompt: `Endorphins are your body's natural painkillers, {name}. They are released in the brain during placebo pain relief. Researchers have proven this with a precise experiment. When they give patients a drug that blocks endorphins and then give them a placebo, the placebo pain relief disappears. This tells us something important. The body's own chemistry is doing the work, not imagination or wishful thinking. Your brain releases endorphins when you expect relief. The expectation triggers a real biological response. This is why placebo effects are not dismissed by serious scientists. They are real phenomena with real measurable mechanisms. Endorphin release is one of the most studied of those mechanisms.`,
            },
            {
              word: `bedside manner`,
              definition: `How a doctor communicates and relates to a patient. Research shows bedside manner directly shapes placebo responses, because the brain reads contextual cues about how serious a treatment is and adjusts the body's response accordingly.`,
              audioPrompt: `Bedside manner is how a doctor communicates and relates to a patient, {name}. Research has shown that it directly shapes how the body responds to treatment. A pill given by a confident doctor in a white coat works better than the same pill given without ceremony. The brain reads every signal about how serious the treatment is and adjusts the body's response accordingly. This is why doctors take bedside manner seriously. It is not just kindness. It is biology. The context, the ritual, the relationship between patient and practitioner, all of these are information that the brain processes and translates into real physiological response.`,
            }
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Placebo Can And Cannot Do`,
          paragraphs: [
            `Here is what placebo effects can do well. They reduce subjective experiences. Pain, nausea, anxiety, depression symptoms, fatigue. These are conditions where how the brain processes signals matters enormously. The placebo effect works because the brain is in charge of these experiences. Change the brain's expectation, change the experience.`,
            `Here is what placebo effects cannot do. They cannot cure cancer. They cannot regrow tissue. They cannot kill bacteria. They cannot fix a broken bone. They cannot lower blood sugar in diabetes (though they may make a person feel better while their actual glucose stays high). Placebos work on perception and on certain regulatory systems. They do not work on the underlying biology of structural disease. This distinction is the one wellness influencers most often blur.`,
            `Even within what placebos can do, the effects are typically modest, not magical. The 35 percent figure from Beecher's original paper has been criticized as too high in some studies and too low in others. Modern meta-analyses suggest placebo effects are real but moderate, and they're stronger for some conditions (pain, depression, IBS) than others. Honest placebo research celebrates the effect for what it is while staying clear-eyed about what it isn't.`,
          ],
          image: `/voyager-assets/inner-world/l05-s3-limits.webp`,
          imageCaption: `Placebo works on perception, not on broken bones.`,
          vocab: [
            {
              word: `subjective`,
              definition: `Relating to what you experience or perceive, rather than what is measured externally.`,
              audioPrompt: `Subjective means relating to what you experience or perceive, {name}. Pain is subjective. Mood is subjective. Fatigue is subjective. These are real experiences, but they live in your perception. This is exactly where placebo effects work best. Placebos can change subjective experience because subjective experience is generated by your brain, and your brain responds to expectation. Objective things like a broken bone or a bacterial infection are not subjective. They exist whether you believe in them or not. Placebos can change how you feel about an objective problem, but they cannot fix the problem itself.`,
            },
            {
              word: `meta-analysis`,
              definition: `A study that combines results from many individual studies to find the overall pattern. Meta-analyses on placebo effects suggest real but moderate effects, stronger for some conditions than others.`,
              audioPrompt: `A meta-analysis is a study of studies, {name}. Instead of running one experiment, researchers gather every reliable study on a topic and combine the results to find the overall pattern. Modern meta-analyses on the placebo effect suggest the effects are real but moderate. They are stronger for some conditions, like pain, depression, and irritable bowel syndrome, than for others. Beecher's original 35 percent figure has been criticized as too high in some studies and too low in others. Meta-analyses give a more honest and comprehensive picture than any single study can. When you see a meta-analysis referenced, you are seeing the whole field's findings, not just one researcher's results.`,
            },
            {
              word: `regulatory systems`,
              definition: `Body systems that manage internal balance, such as pain signaling, inflammation, and mood. Placebo effects can influence these systems but cannot fix structural problems like broken bones or bacterial infections.`,
              audioPrompt: `Regulatory systems are the body's systems that manage internal balance, {name}. They include pain signaling, inflammation, mood, and immune response. Placebo effects work on perception and on certain regulatory systems. They can reduce pain, lower anxiety, ease depression symptoms, and influence bowel discomfort. What they cannot do is cure structural disease. They cannot regrow tissue, kill bacteria, fix a broken bone, or lower blood sugar in diabetes, though they may make a person feel better while the actual glucose stays high. This distinction, between what placebos can affect and what they cannot, is the one the wellness industry most often blurs. Knowing it protects you.`,
            }
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How The Word Placebo Gets Hijacked`,
          paragraphs: [
            `Once people learn that 'the mind can heal the body,' the placebo concept starts getting used to justify treatments that don't work. The reasoning goes: 'It worked for me, so it works, even if science can't prove it.' This is where the wellness industry has built much of its business. Energy healing, crystal therapy, homeopathy, magnetic bracelets, and dozens of other modalities often produce real subjective improvement in users. That improvement is real. But it's the placebo effect, not the treatment itself.`,
            `Here's why this matters. If you have a backache and a chiropractor cracks your back and the chiropractor was kind and confident, you may feel real relief. The relief is genuine. But the relief came from your brain's response to the ritual and expectation, not from anything specific about spinal alignment that wasn't testable. The danger comes when the same logic gets applied to serious conditions. If someone tells you their crystals 'cured their cancer,' they may have felt better. But the cancer either went into spontaneous remission, was misdiagnosed, or progressed undetected while they felt better.`,
            `The most common red flag: when someone uses 'placebo' or 'mind-body healing' as a justification for skipping evidence-based medicine, especially for serious conditions. Real placebo researchers say the opposite. Use the placebo effect as a bonus on top of treatments that actually work. Take the proven medicine. Also get a kind doctor. Also pay attention to ritual and expectation. These layers stack. They don't substitute for each other.`,
          ],
          image: `/voyager-assets/inner-world/l05-s4-hijack.webp`,
          imageCaption: `Real effect, oversold reach: the placebo concept gets misused constantly.`,
          vocab: [
            {
              word: `meta-analysis`,
              definition: `A study that combines results from many individual studies to find the overall pattern. Stronger evidence than any single study.`,
              audioPrompt: `A meta-analysis is a study of studies, {name}. Instead of running one experiment, researchers gather every reliable study that has been done on a topic and combine the results to see the overall pattern. Meta-analyses are some of the strongest evidence in science because they correct for the limitations of any single study. When you see a meta-analysis on placebo effects, you're seeing what the entire scientific field has found, not just one researcher's view. If a wellness claim contradicts a meta-analysis, that's a serious red flag.`,
            },
            {
              word: `spontaneous remission`,
              definition: `When a disease resolves on its own without treatment. This can be mistakenly credited to a concurrent alternative treatment, making it appear that the treatment caused the recovery.`,
              audioPrompt: `Spontaneous remission is when a disease resolves on its own without treatment, {name}. It is one of the reasons wellness claims are so hard to evaluate. If someone believes their crystals cured their cancer, they may have felt better. But the cancer either went into spontaneous remission, was misdiagnosed, or progressed undetected while they felt better. Real improvement happened at the same time as the alternative treatment, but that does not mean the treatment caused it. Correlation is not causation. The danger is that this logic, applied to serious conditions, can lead people to skip medicine that actually works. That is the real cost of mistaking placebo for cure.`,
            },
            {
              word: `ritual`,
              definition: `A structured, meaningful set of actions. In placebo research, ritual is one of the key contextual cues the brain reads to determine how seriously to respond to a treatment.`,
              audioPrompt: `Ritual is a structured, meaningful set of actions, {name}. In placebo science, ritual is one of the most powerful contextual factors shaping how the body responds. Injections work better than pills. Capsules work better than tablets. A pill given with ceremony in a clinical setting works better than the same pill handed over informally. The brain reads the ritual as information about how serious the treatment is. Real placebo researchers say the right response to this is not to abandon ritual. It is to use the placebo effect as a bonus layer on top of treatments that actually work. Take the evidence-based medicine. Also get a kind doctor. The layers stack.`,
            }
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What This Means For Your Health Literacy`,
          paragraphs: [
            `The placebo effect is one of the most fascinating windows into how the mind and body actually connect. Your brain is not separate from your biology. Expectation, belief, ritual, and context shape your real physical experience. This is true. Honoring it is part of being a good thinker about health.`,
            `What's also true is that the mind-body connection is not unlimited. Your beliefs do not override structural disease. Your meditation practice does not cure infections. Your positive thinking does not regrow severed nerves. The wellness industry sells the unlimited version because it sells well. The actual evidence sells the bounded version. Knowing the difference is a literacy skill you will use the rest of your life.`,
            `When you encounter a health claim involving 'mind-body healing' or 'the power of belief,' run it through these questions. What is the actual condition being treated? Is it a subjective experience (pain, mood, anxiety) or a structural problem (infection, tumor, broken bone)? What does the evidence-based medicine for this condition look like? Is the claim a layered addition to real treatment, or a substitute for it? These questions don't make you cynical. They make you informed. Real wisdom about the mind-body connection includes knowing where it works and where it doesn't.`,
          ],
          image: `/voyager-assets/inner-world/l05-s5-literacy.webp`,
          imageCaption: `Mind and body really do connect. The connection is bounded, not unlimited.`,
          vocab: [
            {
              word: `evidence-based medicine`,
              definition: `Medical treatments tested through controlled studies, peer review, and replication, with measured effects on real biological outcomes.`,
              audioPrompt: `Evidence-based medicine is medical treatment that has been tested through controlled studies and proven to work, {name}. The key word is evidence. Anyone can claim a treatment works. Evidence-based means someone actually tested it, controlled for placebo effects, had other scientists check the work, and replicated the results in other studies. Evidence-based medicine is what separates real treatments from things that just feel like treatments. When a wellness claim opposes evidence-based medicine without good reason, that's a major warning sign.`,
            },
            {
              word: `health literacy`,
              definition: `The ability to find, evaluate, and apply health information accurately. It includes knowing which conditions respond to placebo and which require structural treatment, and recognizing overreach in wellness claims.`,
              audioPrompt: `Health literacy is the ability to find, evaluate, and apply health information accurately, {name}. It includes knowing the difference between a subjective experience like pain or anxiety, where placebo effects are real, and a structural problem like a tumor or infection, where they are not. It means asking: what is the actual condition? What does evidence-based medicine say? Is this claim a layered addition to real treatment or a substitute for it? These questions do not make you cynical. They make you informed. Real wisdom about the mind-body connection includes knowing where it works and where it does not. That is health literacy. It is one of the most useful skills you can have.`,
            },
            {
              word: `mind-body connection`,
              definition: `The relationship between mental states and physical biology. It is real and measurable, but bounded: expectation and belief influence subjective experience and certain regulatory systems, not all biological conditions.`,
              audioPrompt: `The mind-body connection is the relationship between mental states and physical biology, {name}. It is real. Expectation, belief, ritual, and context shape your real physical experience. This is what placebo research has measured carefully across seven decades. But the connection is bounded, not unlimited. Your beliefs do not override structural disease. Your meditation practice does not cure infections. Your positive thinking does not regrow severed nerves. The wellness industry sells the unlimited version because it sells well. The actual evidence sells the bounded version. Knowing the difference, honoring what the connection genuinely does while staying clear-eyed about what it does not, is the real sophistication this lesson is building in you.`,
            }
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l05-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Healing Through Belief`,
          intro: `Three different sources make claims about the placebo effect and mind-body healing. Rank them from most credible to least credible. Explain your reasoning. Then see how a researcher would actually evaluate them.`,
          topic: `Can you heal serious conditions through belief, expectation, and mind-body practices?`,
          sources: [
            {
              id: `source-a`,
              name: `Wager et al., 2004 — Placebo-induced changes in fMRI in the anticipation and experience of pain`,
              type: `Peer-reviewed neuroscience study, journal Science`,
              claim: `Expectation of pain relief from a placebo cream produces measurable decreases in activity in pain-processing brain regions (anterior cingulate cortex, thalamus, insula) and increased activity in prefrontal regions involved in regulation. The effect is bounded to pain perception, not underlying tissue damage.`,
              evidence: `24 healthy participants underwent fMRI brain scans while receiving thermal pain with and without placebo cream. Specific brain regions identified. Methodology peer-reviewed. Published in Science, one of the world's top journals. Findings have been replicated by multiple research groups including Tor Wager's lab and others.`,
            },
            {
              id: `source-b`,
              name: `Dr. Joe Dispenza`,
              type: `Bestselling author and popular speaker (You Are the Placebo, Becoming Supernatural). Holds a chiropractic degree, not an MD or research PhD.`,
              claim: `Through meditation and the power of belief, you can heal yourself of essentially any condition including serious diseases. People in his workshops have healed tumors, regrown tissue, and reversed chronic illness through the placebo principle.`,
              evidence: `Cites real placebo research in his talks. Provides testimonials from workshop attendees. No peer-reviewed studies of his methods. No controlled trials of his workshops. Sells books, online programs, and multi-thousand-dollar retreats. Multiple actual placebo researchers have criticized his claims as far exceeding what placebo science actually shows.`,
            },
            {
              id: `source-c`,
              name: `@quantum_healing_journey`,
              type: `Instagram reel, 90 seconds, 2.1 million views, posted by a self-described "energy healer"`,
              claim: `Your beliefs literally rewrite your biology. I cured my chronic Lyme disease with morning affirmations and gratitude journaling. You can heal anything if you commit to the practice. Doctors don't want you to know this.`,
              evidence: `One personal story from the creator. No medical records shared. No diagnosis verification. No study referenced. Closes with a link to a $147 course. Comments full of "this saved my life" but no medical evidence presented. Implication of medical conspiracy.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use to rank these? What red flags appeared in the weaker sources?`,
          reveal: {
            title: `How a placebo researcher would evaluate these`,
            content: [
              `Source A is exactly what good placebo research looks like. Specific brain regions named. Specific measurement (fMRI activity). Specific population (24 participants under controlled conditions). The claim is bounded: placebo affects pain perception, not underlying tissue damage. Published in Science. Replicated. The honesty of the bounds is part of what makes it credible. The researchers are not selling you anything.`,
              `Source B is the most insidious because it uses real concepts to justify enormous claims. Dispenza references real placebo research, then leaps from "placebo can reduce pain perception" to "you can heal cancer through belief." The actual placebo science does not support this leap. Actual placebo researchers have publicly criticized him. Notice the credential mismatch: a chiropractic degree does not qualify someone as a neuroscience or placebo expert. Notice the financial structure: bestselling books and multi-thousand-dollar retreats. The pattern is consistent with selling unprovable claims to people in pain.`,
              `Source C is the easiest to spot but also the most dangerous in some ways. The claim ("I cured chronic Lyme with affirmations") is unverifiable. There's no diagnosis verification, no medical records, no measurement. The conspiracy framing ("doctors don't want you to know") is a major red flag in any health claim, because real medical findings get published and shared. The course sale at the end completes the pattern: anecdote + conspiracy + product. This is one of the most common formats of online health misinformation.`,
              `The key insight from all three: real placebo science is honest about its limits. It celebrates what's been measured (real effects on pain, mood, certain regulatory systems) and is explicit about what hasn't (curing serious structural disease). Anytime someone uses the word "placebo" or "mind-body healing" to make claims much bigger than the actual research supports, that's the moment to slow down. Real scientists in this field are some of your best allies because they're the ones drawing the honest boundaries.`,
            ],
          },
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the placebo effect?`,
              options: [
                `When patients pretend to feel better`,
                `When a treatment with no active ingredient produces real measurable improvement in some patients`,
                `When doctors lie to patients about their condition`,
                `When a medicine works only for some people`,
              ],
              correctIndex: 1,
              explanation: `The placebo effect is real biological response. Patients aren't faking. Brain scans, hormone levels, and pain measurements show genuine changes from treatments with no active ingredient.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did Henry Beecher's 1955 paper establish?`,
              options: [
                `That morphine is the best painkiller`,
                `That doctors should always tell patients the truth`,
                `That about 35% of patients improve on placebo treatments, opening seven decades of formal placebo research`,
                `That war injuries don't really cause pain`,
              ],
              correctIndex: 2,
              explanation: `Beecher's "The Powerful Placebo" was the foundational paper that made placebo a serious topic of study. His battlefield observations of saline-as-morphine sparked the field.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Which evidence proves the body's own chemistry produces placebo pain relief?`,
              options: [
                `When researchers block endorphins with a drug, placebo pain relief disappears`,
                `Patients say they feel better`,
                `Placebos cost less than real medicine`,
                `Brain scans look the same with and without placebo`,
              ],
              correctIndex: 0,
              explanation: `If endorphin blockers eliminate placebo pain relief, then endorphins (your body's natural painkillers) are doing the work. Real biological chemistry, not imagination.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why does context matter so much in placebo effects?`,
              options: [
                `Because patients are easily tricked`,
                `Because the brain reads every signal about how serious a treatment is and adjusts the body's response accordingly`,
                `Because doctors use different pills with different patients`,
                `Because some pills taste better`,
              ],
              correctIndex: 1,
              explanation: `Capsules work better than tablets. Brand-name beats generic. Injections beat pills. The white coat matters. The brain reads every contextual cue about how serious the treatment is. This is real measured biology.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Which CAN placebos actually do, based on the research?`,
              options: [
                `Cure cancer`,
                `Regrow severed nerves`,
                `Reduce pain, nausea, anxiety, and depression symptoms; influence subjective experience and certain regulatory systems`,
                `Fix broken bones`,
              ],
              correctIndex: 2,
              explanation: `Placebo effects work where the brain is in charge of the experience: pain, mood, anxiety, regulatory functions. They do not affect structural disease like tumors, infections, or broken bones.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `When someone uses "the placebo effect" to justify a treatment like crystal therapy or homeopathy for cancer, what's happening?`,
              options: [
                `They're discovering new science`,
                `They're hijacking a real concept (the placebo effect) to justify treatments that aren't doing what they claim, often substituting for evidence-based medicine`,
                `They've found something doctors are hiding`,
                `They're just being open-minded`,
              ],
              correctIndex: 1,
              explanation: `The placebo effect is real but bounded. Using it to justify replacing evidence-based treatment for serious conditions is the classic overreach pattern. Real placebo researchers oppose this misuse.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the difference between subjective and objective in medicine?`,
              options: [
                `Subjective is fake, objective is real`,
                `Subjective is what the patient experiences (pain, mood); objective is what can be measured externally (tumor size, blood test results)`,
                `Subjective only applies to children`,
                `There is no difference`,
              ],
              correctIndex: 1,
              explanation: `Both are real. Subjective experiences are generated by the brain and respond to expectation (this is where placebos work). Objective measurements exist independent of belief (this is where placebos cannot help).`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is Dr. Joe Dispenza's chiropractic degree a credibility red flag for his neuroscience claims?`,
              options: [
                `Chiropractors are always wrong`,
                `Because his training is not in neuroscience or placebo research, and he makes claims that exceed what placebo researchers in those actual fields support`,
                `Because he doesn't have a PhD in any field`,
                `Because he sells books`,
              ],
              correctIndex: 1,
              explanation: `Credentials matter when they match the topic. A chiropractor making detailed neuroscience claims is a mismatch. Actual placebo researchers have publicly criticized his overreach.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The placebo effect can cure cancer if you believe strongly enough.`,
              correctAnswer: false,
              explanation: `False. Placebo affects subjective experience and certain regulatory systems. It does not cure cancer, regrow tissue, or kill bacteria. Claims that it can are oversold and dangerous, especially when they replace evidence-based treatment.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend tells you that her grandma cured her arthritis with magnetic bracelets. Her grandma is convinced they work. Based on this lesson, what's the most likely explanation?`,
              options: [
                `The magnetic bracelets really cured the arthritis through magnetism`,
                `Her grandma was lying about her recovery`,
                `Her grandma experienced real subjective relief from the placebo effect (expectation + ritual + belief in the treatment), which is genuine but not because of any magnetic property`,
                `Magnetic bracelets are scientifically proven`,
              ],
              correctIndex: 2,
              explanation: `Her relief is real. The mechanism is the placebo effect, not magnetism. The brain's response to expectation and ritual produces genuine biological changes. The bracelet's "magnetic" property has nothing to do with it. This is the most common pattern in alternative medicine: real subjective benefit, wrong attributed cause.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What surprised you most about the placebo effect? Did anything shift in how you think about mind and body?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `How easy or hard was it to tell the three sources apart? What signals did you catch fastest? What would have fooled you for longer?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Most people in your life will have strong opinions about wellness, healing, and "natural medicine" that don't match the actual evidence. How will you handle disagreement with people you love?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of one health practice in your family (a tea, a remedy, a wellness routine). Run it through the questions from Section 5. Is it bounded placebo, evidence-based, or something else?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the lesson be wrong in any way? Is there a place where mind-body practices might actually do more than the current science measures? Defend your answer.` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Have YOU ever felt better from something that probably wasn't doing what you thought (a vitamin, a ritual, a placebo from a doctor)? What was real about that experience and what wasn't?` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The placebo effect is a real biological phenomenon, but the word is used to sell things constantly. Two paths below: a family conversation to bring this into shared awareness, and an optional 2-week practice if you want to become a real consumer of mind-body health claims.`,
          familyActivity: {
            title: `The Family Remedy Audit`,
            duration: `30 minutes`,
            description: `At dinner tonight, each family member shares one health remedy, ritual, or wellness practice they personally believe in (vitamins, supplements, essential oils, a specific tea, a recurring habit). Then together, run each one through the literacy questions: Is the effect subjective (mood, energy, perception) or objective (a specific measurable problem)? Is there real evidence for it, or mostly testimonials? Could it be working through the placebo effect rather than what the bottle claims? Be respectful. The goal isn't to mock anyone's habits, it's to build shared discernment as a family. You might be surprised which beliefs survive the audit and which don't.`,
          },
          projectOption: {
            title: `The Wellness Claim Tracker, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Every day for 14 days, find one health or wellness claim in the wild (TikTok, Instagram, a friend, a podcast, a magazine). Log it. Then run it through this filter: What specifically is being claimed? Who is making the claim and what are their credentials? What evidence is offered? Is it a subjective benefit or an objective cure? Is there a product being sold? After 14 days, you'll have 14 case studies and patterns will emerge. Write 500 words on what you learned about how health claims get made in modern media. This is the kind of media literacy that protects you for life.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If most of the wellness world is selling you the unbounded version, who do you want to be in your relationship to your own health?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can honor the mind-body connection without falling for everyone selling miracle cures.`,
            `A person who asks "is this subjective or structural?" before accepting a health claim.`,
            `Someone who isn't impressed just because a treatment "worked for grandma."`,
          ],
          saveKey: `identity_responses_iw_11_12_05`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain what the placebo effect actually is and what's happening in the brain, distinguish between subjective experiences placebos can affect and structural conditions they cannot, recognize when the placebo concept is being hijacked to justify treatments that don't work, and evaluate three different sources making mind-body health claims. You're building one of the most valuable life skills there is: health literacy. Most adults don't have this. Next time we go straight into the most controversial figure in this whole space: Dr. Joe Dispenza. We will look honestly at what he claims, what his fans say, what his critics say, and how to think about him without being either a true believer or a dismissive skeptic. See you there. — Sage`,
          badge: `placebo-detective`,
          badgeName: `Placebo Detective`,
          xpEarned: 75,
          competencies: [
            `Can define the placebo effect and explain what's actually happening biologically`,
            `Can describe the limits of placebo effects (subjective vs structural conditions)`,
            `Can recognize when the placebo concept is hijacked to justify pseudoscience`,
            `Has practiced source evaluation on mind-body health claims`,
            `Understands credential mismatch and conspiracy framing as red flags`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: Dr. Joe Dispenza — Three Honest Views`,
            hook: `Millions of people credit his work with transforming their lives. Real scientists say much of what he claims isn't supported. How do you think clearly about a contested figure?`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L05 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
