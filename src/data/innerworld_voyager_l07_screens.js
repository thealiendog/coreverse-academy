// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L07 — Meditation Neuroscience: Reading the Research
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Contemplative Neuroscience, Primary Source Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ANNOTATE (excerpt from real meditation neuroscience paper)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l07-v1";

const INNERWORLD_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-07`,
      title: `Meditation Neuroscience: Reading the Research`,
      duration: 35,
      xpReward: 75,
      badge: `research-reader`,
      badgeName: `Research Reader`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, after the last lesson on contested figures, today we go in the opposite direction. Meditation has been studied seriously in neuroscience for about 30 years. The findings are real, modest, and clearly bounded. They don't sound as dramatic as the wellness industry's version, but they are stronger evidence. Today you will do something very few people your age get to do. You will read directly from one of the foundational papers in the neuroscience of meditation. Not a summary. Not a popularization. The actual researcher's words. Then you will annotate it the way a scientist would. By the end you will know more about meditation research than 99 percent of adults.`,
          headline: `Meditation Neuroscience`,
          subtitle: `Reading what the actual researchers actually said.`,
          visual: `/voyager-assets/inner-world/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `How Meditation Got Into Labs`,
          paragraphs: [
            `Meditation was a contemplative practice for thousands of years before any scientist studied it. The shift began in the 1970s. Herbert Benson at Harvard published The Relaxation Response in 1975, framing meditation as a measurable physiological state of reduced arousal. In the 1980s and 1990s, Jon Kabat-Zinn at the University of Massachusetts developed Mindfulness-Based Stress Reduction (MBSR), an 8-week program that brought meditation into mainstream medicine and was tested in clinical trials.`,
            `The real explosion came when brain imaging arrived. By the 2000s, functional MRI (fMRI) let researchers watch what happens in the brain during meditation. Richard Davidson at the University of Wisconsin partnered with the Dalai Lama to study long-term Buddhist meditators with thousands of hours of practice. Their brains looked measurably different from non-meditators. The studies kept coming. Sara Lazar at Harvard. Judson Brewer at Yale and then Brown. Tania Singer in Germany. Cliff Saron at UC Davis.`,
            `What did they find? Meditation produces measurable changes in brain function and structure with sustained practice. The changes are real, replicated across labs, and biologically modest. They affect attention regulation, emotional reactivity, the Default Mode Network, and certain immune markers. They do not produce supernatural abilities, cure cancer, or rewrite DNA. The actual findings are exciting precisely because they don't need overselling.`,
          ],
          image: `/voyager-assets/inner-world/l07-s1-history.webp`,
          imageCaption: `Three decades of meditation in the neuroscience lab.`,
          vocab: [
            {
              word: `fMRI`,
              definition: `Functional Magnetic Resonance Imaging. A brain scanning technology that measures activity by tracking blood flow to active regions in real time.`,
              audioPrompt: `fMRI stands for functional Magnetic Resonance Imaging, {name}. It is a brain scanning technology that doesn't just take a picture of your brain's structure. It measures activity by tracking where blood is flowing while the brain works. Active brain regions need more oxygen, so blood flow increases there. fMRI can detect this in real time. This is what transformed meditation research. Before fMRI, you could only ask meditators what they experienced. With fMRI, you can watch what's happening in their brain during meditation. The technology is what made the modern field possible.`,
            },
            {
              word: `Mindfulness-Based Stress Reduction`,
              definition: `An 8-week meditation program developed by Jon Kabat-Zinn at the University of Massachusetts that brought mindfulness practice into mainstream medicine and clinical research.`,
              audioPrompt: `Mindfulness-Based Stress Reduction, or MBSR, is an 8-week program developed by Jon Kabat-Zinn at the University of Massachusetts, {name}. It was one of the key developments that brought meditation into mainstream medicine. Kabat-Zinn designed it to be tested in clinical trials, which is how meditation made the transition from contemplative practice to medical research. MBSR has been studied in hundreds of controlled trials. It is one of the best-studied mind-body interventions in the medical literature, and its development in the 1980s and 1990s helped make the modern meditation neuroscience field possible.`,
            },
            {
              word: `brain imaging`,
              definition: `Technologies such as fMRI that allow researchers to observe brain structure and activity in living people. The arrival of brain imaging transformed meditation research by making it possible to observe what happens in the brain during practice.`,
              audioPrompt: `Brain imaging refers to technologies that allow researchers to observe brain activity in living people, {name}. The real explosion in meditation research came when brain imaging arrived. By the 2000s, functional MRI let researchers watch what happens in the brain during meditation. Before this, scientists could only ask meditators what they experienced. Richard Davidson at the University of Wisconsin used brain imaging to study long-term Buddhist meditators and found their brains looked measurably different from non-meditators. Brain imaging made the modern neuroscience of meditation possible.`,
            }
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What The Studies Actually Found`,
          paragraphs: [
            `Here is a careful summary of what 30 years of research has established. Mindfulness meditation, practiced consistently over 8 weeks, produces measurable changes in attention regulation. Practitioners get better at noticing when their mind has wandered and returning attention to a chosen focus. This is a real, modest cognitive improvement that shows up in standardized attention tests.`,
            `Long-term meditation practice (thousands of hours over years) is associated with structural brain changes. Sara Lazar's lab at Harvard found increased grey matter density in regions involved in attention and interoception (awareness of internal body signals). The changes are small but consistent across studies. Whether the meditation caused the changes or whether people who already had these brain features were more likely to stick with meditation is a real methodological question still being studied.`,
            `Other findings: meditation reduces activity in the Default Mode Network during practice (and in long-term meditators, even when not practicing), shifts measures of emotional reactivity, modestly improves immune markers, and reduces inflammation-related gene expression in some studies. These effects are real. They are also bounded. Meditation is one of several well-supported interventions for stress and emotional regulation. It is not a cure-all, and the research community is generally careful to frame it that way.`,
          ],
          image: `/voyager-assets/inner-world/l07-s2-findings.webp`,
          imageCaption: `Real findings, replicated, modest in scale, bounded in scope.`,
          vocab: [
            {
              word: `grey matter`,
              definition: `The parts of the brain made up mostly of neuron cell bodies. Often used as a rough measure of brain region size and activity capacity.`,
              audioPrompt: `Grey matter refers to the parts of the brain made up mostly of neuron cell bodies, {name}. Different brain regions have different amounts of grey matter. When neuroscientists talk about meditation increasing grey matter density in a certain region, they mean structural changes in how many neurons or how much neural tissue is concentrated there. These changes are subtle. They are measured with statistical comparisons between groups. They don't mean a meditator's brain looks dramatically different from anyone else's. They mean a measurable, statistically significant difference shows up when you compare hundreds of brains carefully.`,
            },
            {
              word: `interoception`,
              definition: `Awareness of internal body signals, such as heartbeat, breath, and physical sensations. A function associated with specific brain regions studied in meditation research.`,
              audioPrompt: `Interoception is awareness of internal body signals, {name}. It includes your sense of heartbeat, breath, temperature, and physical sensations arising from inside the body. Sara Lazar's lab at Harvard found increased grey matter density in brain regions involved in attention and interoception in long-term meditators. This is one of the structural brain changes that meditation research has found. The changes are small but consistent across studies. Interoception is considered a real and trainable capacity, and meditation practices that involve sustained attention to internal body sensations appear to be one way to develop it.`,
            },
            {
              word: `attention regulation`,
              definition: `The ability to direct and sustain attention intentionally, notice when attention has wandered, and return it to a chosen focus. A cognitive skill measurably improved by consistent mindfulness practice.`,
              audioPrompt: `Attention regulation is the ability to direct and sustain attention intentionally, notice when your mind has wandered, and return to a chosen focus, {name}. It is one of the most clearly established benefits of consistent mindfulness meditation. Studies show that practitioners get measurably better at this after 8 weeks of daily practice. The improvement shows up in standardized attention tests, not just self-report. This is a real, modest cognitive gain from a real practice. Attention regulation is one of the bounded, replicated findings in meditation neuroscience that does not need to be oversold to be genuinely impressive.`,
            }
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What A Scientific Paper Looks Like`,
          paragraphs: [
            `Scientific papers have a structure. Most follow what's called IMRaD: Introduction, Methods, Results, Discussion. The introduction explains why the question matters and what previous research has found. The methods section describes exactly what was done so other scientists can replicate. The results section reports what was measured. The discussion interprets findings and acknowledges limitations.`,
            `Scientific writing has a specific tone. It's cautious. It uses qualifiers like "appears to," "is consistent with," "suggests," rather than dramatic verbs. It cites previous work obsessively. It openly states what the study did NOT find and what its limitations are. This caution is not weakness. It's intellectual honesty. Real scientists know their study is one data point in a larger body of evidence.`,
            `Compare this to wellness writing. Wellness writing uses certain language. It tells stories. It rarely mentions limitations. It often skips the methods entirely. Reading a real scientific paper helps you feel the difference. Once you've read research, you can spot the gap between research and pop interpretation immediately. The passage you are about to annotate is short but real. It comes from a paper by Brewer, Worhunsky, Gray, Tang, Weber, and Kober, published in 2011 in the Proceedings of the National Academy of Sciences.`,
          ],
          image: `/voyager-assets/inner-world/l07-s3-paper.webp`,
          imageCaption: `Real science writing: cautious, specific, replicable, honest about limits.`,
          vocab: [
            {
              word: `IMRaD`,
              definition: `The standard structure of scientific papers: Introduction, Methods, Results, and Discussion.`,
              audioPrompt: `IMRaD is the standard structure of scientific papers, {name}. It stands for Introduction, Methods, Results, and Discussion. Every section has a specific job. The Introduction explains why the study matters. Methods explain exactly what was done, in enough detail that another scientist could replicate. Results report what was measured. Discussion interprets the findings and discusses limitations. When you read a real paper, you can usually identify each section. This structure is one of science's quality controls. It forces researchers to make their methods transparent and their conclusions accountable.`,
            },
            {
              word: `replicable`,
              definition: `A finding or method that other researchers, following the same procedure, can reproduce with consistent results. A core requirement of trustworthy science.`,
              audioPrompt: `Replicable means that other researchers, following the same procedure, can reproduce the finding with consistent results, {name}. It is a core quality standard in science. The methods section of a scientific paper exists precisely to make replication possible. When findings replicate across multiple independent labs, confidence in them increases dramatically. When they do not replicate, the original finding is called into question. The established meditation neuroscience findings, like those on attention regulation and Default Mode Network activity, have replicated across labs. That is what makes them trustworthy.`,
            },
            {
              word: `primary source`,
              definition: `The original research paper or document written by the people who did the work. Distinguished from summaries, popularizations, or news articles written about the work.`,
              audioPrompt: `A primary source is the original paper or document written by the people who did the actual work, {name}. Reading primary sources means reading what scientists actually said in their own words, not what a journalist or blogger summarized. The lesson you are in is built around reading a primary source: a real paper published in PNAS in 2011. Once you have read a real paper, you can feel the difference between the careful, hedged language of a primary source and the confident, dramatic language of a popular article written about that source. That ability to feel the difference is one of the most durable skills this lesson offers.`,
            }
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Before You Read: What To Watch For`,
          paragraphs: [
            `In a moment you will read a real passage from a real meditation neuroscience paper. The passage is short, just five sentences, but every sentence is doing something specific. Your job is to label what each sentence is doing. To prepare, here are the moves you'll see.`,
            `Claim statement. The sentence makes a specific factual claim about what the study found. Look for precise language: a brain region, a specific measurement, a particular comparison group. Methodology reference. The sentence describes how something was measured or what technique was used. Look for words like "fMRI," "compared to," "during meditation," that signal the experimental approach. Limitation acknowledgment. The sentence openly states what the study didn't show or where the finding has bounds. Look for qualifiers like "did not," "however," "limited to."`,
            `Cautious interpretation. The sentence offers an interpretation but with hedging language: "may suggest," "is consistent with," "appears to." Connection to prior work. The sentence ties this finding to what other studies have shown. Look for citation patterns or references to "previous research." Once you can identify these moves in five sentences, you can identify them in any paper. This is the foundation of scientific literacy at the source-document level.`,
          ],
          image: `/voyager-assets/inner-world/l07-s4-watch.webp`,
          imageCaption: `Five sentence-level moves to spot in any real research paper.`,
          vocab: [
            {
              word: `hedging`,
              definition: `Using cautious qualifying language ("may," "suggests," "appears to") rather than absolute claims. A hallmark of careful scientific writing.`,
              audioPrompt: `Hedging is using cautious qualifying language rather than absolute claims, {name}. Scientific writers hedge constantly. They say "the data suggest" rather than "the data prove." They say "appears to be associated with" rather than "causes." Hedging isn't weakness. It is honesty about uncertainty. A single study rarely proves anything definitively. It provides evidence that adds to other evidence. Strong hedging is one of the clearest signals you are reading careful scientific work. Confident absolute claims, by contrast, are a warning sign in any health-related writing.`,
            },
            {
              word: `claim statement`,
              definition: `A sentence in a scientific paper that makes a specific factual assertion about what the study found, typically naming a precise measurement, brain region, or comparison group.`,
              audioPrompt: `A claim statement is a sentence in a scientific paper that makes a specific factual assertion about what the study found, {name}. It typically names precise elements: a specific brain region, a specific measurement, a particular comparison group. When you read 'experienced meditators showed significantly less activity in the default mode network during three different meditation practices, compared to non-meditators,' every word is doing specific work. Population, brain network, condition, comparison. That density of precision is what a real claim statement looks like.`,
            },
            {
              word: `limitation acknowledgment`,
              definition: `A sentence in a scientific paper where researchers openly state what their study did not show or where the findings have boundaries. A hallmark of honest scientific writing.`,
              audioPrompt: `A limitation acknowledgment is a sentence where researchers openly state what their study did not show, {name}. It is one of the clearest markers of honest scientific writing. Real scientists know their study is one data point in a larger body of evidence. They know their methods have boundaries. They say so. A wellness blog or popular article would hide the limitations or not mention them at all. A real paper puts them in plainly. Learning to spot limitation acknowledgments helps you instantly distinguish careful research writing from promotional writing, regardless of what field you are reading in.`,
            }
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why This Skill Lasts A Lifetime`,
          paragraphs: [
            `For the rest of your life you will encounter health claims that reference "studies." Most people stop at the headline. The headline says "Study finds meditation rewires the brain." The study itself almost never says that. The headline is written by a journalist or editor trying to get clicks. The study itself says something more careful and more interesting. Once you know how to read a real paper, you can go check the source whenever a claim seems too dramatic.`,
            `You don't need to become a neuroscientist. You need to know what a careful paper looks like, so you can recognize the gap between the paper and the headline. PubMed is a free public database of scientific abstracts. Most major studies' abstracts are available there. You can read what the researchers actually concluded in their own words. This takes 5 to 15 minutes per claim. It's not always practical to do for every headline. But for the claims that matter (your health, a big decision, a family member's situation), it's one of the most valuable habits you can build.`,
            `Reading the actual research also makes you immune to a specific kind of manipulation. When someone cites "research shows X" but X sounds bigger than what real research usually shows, you can ask "which study? what did it actually measure?" That single question filters out a huge amount of bad information. People making honest claims will be happy to point you to the source. People overselling will get evasive. The evasiveness itself is the signal.`,
          ],
          image: `/voyager-assets/inner-world/l07-s5-skill.webp`,
          imageCaption: `Read the source. The headline is rarely the finding.`,
          vocab: [
            {
              word: `PubMed`,
              definition: `A free public database run by the US National Library of Medicine. Hosts abstracts of millions of peer-reviewed biomedical studies. Anyone can search it.`,
              audioPrompt: `PubMed is a free public database of biomedical research, {name}. It is run by the US National Library of Medicine. Anyone can search it. Most published medical and neuroscience studies have their abstract available on PubMed. An abstract is a one-paragraph summary of what the study did and found. Reading abstracts is a real skill anyone can develop. Next time someone tells you "studies show" something dramatic, try searching PubMed for what the studies actually say. You'll be surprised how often the actual research is more measured than the popular claim.`,
            },
            {
              word: `abstract`,
              definition: `A one-paragraph summary of a scientific study, written by the researchers, describing what was done and what was found. Freely available for most published studies on PubMed.`,
              audioPrompt: `An abstract is a one-paragraph summary of a scientific study, written by the researchers who did the work, {name}. Most published medical and neuroscience studies have their abstract freely available on PubMed, the National Library of Medicine's database. Reading an abstract takes a few minutes. It tells you what the study did and what it found, in the researchers' own words. For most people and most purposes, reading the abstract is enough to check whether a popular claim accurately reflects what the actual study concluded. Learning to read abstracts is a real skill that takes practice but pays back for the rest of your life.`,
            },
            {
              word: `selection bias`,
              definition: `A distortion in evidence that occurs when the group studied is not representative of the broader population, producing results that do not generalize correctly.`,
              audioPrompt: `Selection bias is a distortion in evidence that occurs when the group studied is not representative of the broader population, {name}. In the context of wellness testimonials, the people you hear from are self-selected: those who improved and chose to speak publicly. The people who tried the same method and did not improve are rarely heard. That is a form of selection bias. Asking who was selected and who was not is one of the most powerful questions for evaluating any claim that references research or personal accounts as evidence. It is a move that immediately improves how you read health-related information.`,
            }
          ],
        },

        // ───── ANNOTATE ───────────────────────────────────────────────────────
        {
          id: `l07-annotate`,
          type: `annotate`,
          headline: `A Real Meditation Neuroscience Paper`,
          intro: `Below is a 5-sentence excerpt from a real published study. Brewer et al. 2011 in PNAS. Read it slowly. Then tag what each sentence is doing.`,
          sourceCitation: `Brewer JA, Worhunsky PD, Gray JR, Tang YY, Weber J, Kober H. (2011). Meditation experience is associated with differences in default mode network activity and connectivity. Proceedings of the National Academy of Sciences, 108(50), 20254-20259.`,
          passage: [
            `Meditation experience has been suggested to enhance attention and awareness, but the neural mechanisms underlying these benefits remain unclear.`,
            `Here we report that experienced meditators showed significantly less activity in the default mode network during three different meditation practices, compared to non-meditators performing the same tasks.`,
            `In particular, the medial prefrontal cortex and posterior cingulate cortex, regions involved in self-referential processing and mind-wandering, showed reduced activation in meditators.`,
            `These differences were observed regardless of meditation type, suggesting a general effect of contemplative practice on default mode network functioning.`,
            `However, our cross-sectional design cannot determine whether these differences are caused by meditation practice itself or whether individuals with these neural characteristics are more likely to maintain a meditation practice.`,
          ],
          labels: [
            { id: `claim-prior`, label: `Reference to prior research / context`, color: `#60a5fa` },
            { id: `claim-finding`, label: `Specific claim about what was measured`, color: `#4ade80` },
            { id: `methodology`, label: `Methodology / what was compared`, color: `#a78bfa` },
            { id: `hedging`, label: `Hedging / cautious interpretation`, color: `#f97316` },
            { id: `limitation`, label: `Limitation acknowledgment`, color: `#fbbf24` },
          ],
          annotationPrompts: [
            {
              targetSentenceIndex: 0,
              prompt: `Sentence 1 sets up the study by referring to prior research AND signaling something is unclear. In 2-3 sentences, explain how this opening sentence is doing both jobs at once. Why is that a smart move?`,
            },
            {
              targetSentenceIndex: 4,
              prompt: `Sentence 5 directly acknowledges a major limitation. In 2-3 sentences, explain what the limitation is and why the researchers chose to admit it openly. How would a wellness blog have handled this differently?`,
            },
          ],
          expertAnnotation: [
            {
              sentenceIdx: 0,
              label: `Reference to prior research / context`,
              note: `Opens by acknowledging prior research ("has been suggested to enhance attention") while flagging a gap ("neural mechanisms remain unclear"). Classic scientific opening: name what's been claimed, identify what hasn't been answered, position your study as filling that gap.`,
            },
            {
              sentenceIdx: 1,
              label: `Specific claim about what was measured`,
              note: `The core finding. Notice the precision: "experienced meditators showed significantly less activity in the default mode network during three different meditation practices, compared to non-meditators." Specific population, specific brain network, specific comparison, specific contexts. No drama. Just measurement.`,
            },
            {
              sentenceIdx: 2,
              label: `Methodology / what was compared`,
              note: `Names the specific brain regions (medial prefrontal cortex, posterior cingulate cortex) and identifies what those regions are involved in ("self-referential processing and mind-wandering"). This gives context for why the finding matters. Connects the data to function.`,
            },
            {
              sentenceIdx: 3,
              label: `Hedging / cautious interpretation`,
              note: `"Suggesting a general effect" is hedging language. They're not claiming the effect is proven. They're saying their data is consistent with a general effect. The word "suggesting" does a lot of work here. A wellness blog would have written "proves" or "shows."`,
            },
            {
              sentenceIdx: 4,
              label: `Limitation acknowledgment`,
              note: `The honest admission: cross-sectional studies (comparing two groups at one time point) cannot prove causation. Meditation might cause the brain changes, OR people with these brain features might be more likely to stick with meditation. Both are possible. A real scientist names this. This single sentence is what separates real research from "studies show meditation rewires your brain."`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does fMRI stand for and what does it measure?`,
              options: [
                `Forced Magnetic Reading Image; it measures emotions`,
                `Functional Magnetic Resonance Imaging; it measures brain activity by tracking blood flow to active regions`,
                `Full Memory Recall Image; it measures memory`,
                `Forward Movement Response Indicator; it measures movement`,
              ],
              correctIndex: 1,
              explanation: `fMRI = Functional Magnetic Resonance Imaging. It measures brain activity by tracking where blood flows. Active regions need more oxygen, so blood flow increases. fMRI made modern meditation research possible.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the IMRaD structure of scientific papers?`,
              options: [
                `Introduction, Methods, Results, and Discussion`,
                `Important Major Research about Data`,
                `Initial Material Review and Documentation`,
                `Inputs, Modifications, Reasons, and Decisions`,
              ],
              correctIndex: 0,
              explanation: `IMRaD = Introduction, Methods, Results, Discussion. Standard structure of scientific papers. Each section has a specific job. Understanding it helps you read any research paper.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is "hedging" a feature of careful scientific writing?`,
              options: [
                `Because scientists are afraid to commit to ideas`,
                `Because hedging language ("suggests," "appears to," "may") is intellectually honest about uncertainty in any single study's findings`,
                `Because hedging makes papers longer`,
                `Because it makes science harder to understand`,
              ],
              correctIndex: 1,
              explanation: `Hedging isn't weakness. It is honesty. A single study rarely proves something definitively. Cautious language reflects this reality. Absolute confident claims, by contrast, are a warning sign.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did the Brewer et al. 2011 study actually find?`,
              options: [
                `That meditation cures depression`,
                `That experienced meditators showed less Default Mode Network activity during meditation, in specific brain regions (medial prefrontal cortex, posterior cingulate cortex), compared to non-meditators`,
                `That meditation rewires the brain`,
                `That meditation makes you a different person`,
              ],
              correctIndex: 1,
              explanation: `Specific population, specific brain network, specific regions, specific comparison. This is what the actual study found. Notice how different this is from the popular versions that say things like "meditation rewires your brain."`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the key limitation Brewer et al. honestly acknowledge?`,
              options: [
                `That meditation doesn't work`,
                `That their cross-sectional design cannot determine whether meditation caused the brain differences, or whether people with these brain features are more likely to stick with meditation`,
                `That fMRI is unreliable`,
                `That they didn't have enough participants`,
              ],
              correctIndex: 1,
              explanation: `This is the gold-standard scientific honesty move. Cross-sectional studies show correlation, not causation. The researchers openly state this. A wellness blog would have hidden it.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does it mean that a study is "cross-sectional"?`,
              options: [
                `It compares two groups at one time point, which shows correlation but cannot prove causation`,
                `It cuts across multiple disciplines`,
                `It uses cross-shaped graphs`,
                `It's a poor type of study`,
              ],
              correctIndex: 0,
              explanation: `Cross-sectional studies are useful but limited. They establish associations. To prove causation, you usually need longitudinal studies that follow people over time, or randomized controlled trials.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is PubMed?`,
              options: [
                `A medication pricing service`,
                `A free public database of peer-reviewed biomedical research abstracts that anyone can search`,
                `A website for selling supplements`,
                `A medical school`,
              ],
              correctIndex: 1,
              explanation: `PubMed is the National Library of Medicine's free database. Search it next time someone says "studies show X." See what the studies actually say.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the difference between a headline like "Meditation rewires the brain" and what the actual research usually says?`,
              options: [
                `The headline is always more accurate`,
                `The headline is written by journalists for engagement; the study itself usually makes more specific, bounded, hedged claims that are more accurate but less dramatic`,
                `They're identical`,
                `The headline is faster to read`,
              ],
              correctIndex: 1,
              explanation: `Headlines maximize clicks. Studies maximize accuracy. The gap between them is one of the most important things to recognize. Reading the actual study (or even the abstract) catches it.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A real scientific paper will openly state the limitations of its own findings.`,
              correctAnswer: true,
              explanation: `True. This is one of the strongest signals of real science: open admission of what the study did not show and where its findings might be wrong. Cautious honesty about limits is a quality marker.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You see a Facebook post claiming "Studies prove meditation can cure depression." How should you investigate?`,
              options: [
                `Believe it because it sounds scientific`,
                `Dismiss it because Facebook is unreliable`,
                `Ask which studies, what they actually measured, and check the original sources (or at least the abstracts on PubMed) to see what the researchers actually concluded`,
                `Ask a meditation teacher`,
              ],
              correctIndex: 2,
              explanation: `The investigative move. "Studies prove" is a red flag because real studies rarely "prove" anything definitively, and "cure" is a strong claim. Check the source. If it actually says "may help reduce symptoms in some patients" the gap from "cure" is dramatic and revealing.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What was different about reading actual scientific language compared to reading about science in a popular article? What did you notice in the tone?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which sentence in the Brewer passage was hardest to label? Why? What did you have to figure out?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Most people never read a real scientific paper in their life. You just did. What does it feel like to know you can read actual research? What kind of person does that make you?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one health claim you've heard recently. Imagine looking up the actual source on PubMed. What would you specifically want to know?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is there any way scientific papers themselves could be wrong or misleading? When? How would you spot it?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Do you meditate? If so, has reading this changed how you think about what your practice is doing? If not, does the actual research interest you more or less than the popular versions?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `You just did real intellectual work. The skill of reading primary research is one of the most useful you can have. Two paths below to make it stick.`,
          familyActivity: {
            title: `Check The Headline`,
            duration: `30 minutes`,
            description: `Find a recent health-related news article online with a dramatic headline (something like "Study shows X cures Y" or "Research reveals Z about your brain"). At dinner, read the article aloud together. Then search PubMed for the actual study the article references. Read the abstract. Compare what the abstract actually says to what the headline claimed. Discuss as a family: where's the gap? Who benefits from the gap? This activity will permanently change how your family reads science news.`,
          },
          projectOption: {
            title: `Read One Real Paper, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session`,
            description: `Pick a topic in mind-body science that interests you: meditation, placebo, sleep, exercise. Find one real peer-reviewed study on PubMed (search keywords + filter for full-text available). Read the abstract carefully. If accessible, read the introduction and discussion sections. Spend 14 days slowly working through it. Write 500 words at the end: what did the paper actually claim, what evidence did it offer, what were its limitations, and how does this compare to popular versions of the same topic. You will know more about that topic than almost any adult around you.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If you can read real research, you don't need to take anyone's word for it. Who does that make you?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read what scientists actually said, not just what the headline claimed.`,
            `A person who notices the hedging language and the honest limitations in real research.`,
            `Someone who doesn't have to take anyone's word for what studies show.`,
          ],
          saveKey: `identity_responses_iw_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. You just annotated a real primary scientific source. Five sentences from PNAS 2011. You can identify the moves real researchers make in their own writing. You know what hedging is, what cross-sectional limitations look like, what honest scientific tone sounds like. This skill takes most adults years to develop, if they develop it at all. You have it now. Next time we go deeper into one specific brain network you just read about: the Default Mode Network. It's the network that builds the feeling of being you. We will look at it from a different angle: what happens when it gets quieter, and is that actually a good thing? Argument Builder format. See you there. — Sage`,
          badge: `research-reader`,
          badgeName: `Research Reader`,
          xpEarned: 75,
          competencies: [
            `Can identify the IMRaD structure of scientific papers`,
            `Can recognize hedging language and why it matters`,
            `Can identify limitations openly acknowledged in research`,
            `Has annotated a real primary scientific source at sentence level`,
            `Knows how to search PubMed for original studies`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: The Default Mode Network — Is Quieter Always Better?`,
            hook: `Meditation quiets the DMN. The DMN builds the sense of you. So is having less "you" actually good? Three positions, your call.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const annotate = l.screens.find((s) => s.type === `annotate`)?.passage?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L07 ${VERSION}] "${l.title}" — ${mags} magazine, ${annotate}-sentence annotate, ${quiz} quiz, ${reflect} reflection`
  );
}
