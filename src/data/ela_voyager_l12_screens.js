// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L12 — Synthesis Writing
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Writing from Multiple Sources, Synthesis
// Interaction: SOURCE EVALUATION. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l12-v1";

const ELA_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-12`,
      title: `Synthesis Writing`,
      duration: 35,
      xpReward: 75,
      badge: `synthesizer`,
      badgeName: `Synthesizer`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, satire is rhetoric wearing a mask — it uses irony, exaggeration, and humor to make serious arguments that direct criticism can't land. Swift, Twain, Colbert, The Onion: different centuries, same basic move. This lesson reads satire as a rhetorical form and asks what it can do that straight argument can't.`,
          headline: `Synthesis Writing`,
          subtitle: `Weaving many sources into a single argument that is entirely your own. A Source Evaluation.`,
          visual: `/voyager-assets/ela/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Beyond The Book Report`,
          paragraphs: [
            `Picture six articles on one hard question, each saying something a little different. A weak writer summarizes them in a row: this one says X, that one says Y, the third says Z. That's a list, a book report, not an essay. It tells the reader what others think but never what you think, and never weaves the pieces into anything whole.`,
            `Synthesis is the higher skill: weaving multiple sources together into a single, coherent argument that is your own. The word itself means combining separate parts into a new whole. In synthesis, the sources don't sit side by side like strangers in a waiting room; they're brought into conversation with each other, in service of a point you are making.`,
            `Think of yourself not as a reporter but as a conductor. A reporter relays what each source said. A conductor brings many voices together to play one piece of music, music they composed. The sources are your instruments; your thesis is the score. That shift, from listing to conducting, is the whole heart of synthesis writing.`,
          ],
          image: `/voyager-assets/ela/l12-s1-beyond.webp`,
          imageCaption: `Picture six articles on one hard question, each saying something different. A weak writer summarizes them in a row, this says X, that says Y, the third says Z, which is a list, a book report, not an essay: it tells what others think but never what you think. SYNTHESIS is the higher skill: weaving multiple sources into a single, coherent argument that is your own. The word means combining separate parts into a new whole. The sources don't sit side by side like strangers in a waiting room; they're brought into conversation, in service of your point. Think of yourself not as a reporter relaying what each source said, but as a CONDUCTOR bringing many voices together to play one piece of music you composed. The sources are your instruments; your thesis is the score.`,
          vocab: [
            { word: `synthesis`,
              definition: `Weaving multiple sources together into a single, coherent argument of your own, combining separate parts into a new whole.`,
              audioPrompt: `Synthesis, {name}, means weaving multiple sources together into a single argument that is your own. The word means combining separate parts into a new whole, which is exactly what synthesis writing does with many voices.` },
            { word: `summary`,
              definition: `Restating what one source says. A row of summaries is a book report, not synthesis, it never builds a new whole.`,
              audioPrompt: `A summary, {name}, just restates what one source says. Lining up summaries one after another is a book report, not synthesis, because it never weaves the pieces together or says what you yourself think.` },
            { word: `conductor`,
              definition: `The image for a synthesis writer: someone who brings many source-voices together to play one piece they composed.`,
              audioPrompt: `Think of a synthesis writer as a conductor, {name}. A reporter just relays what each source said, but a conductor brings many voices together to play one piece of music, the argument you composed yourself.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your Thesis Stays In Command`,
          paragraphs: [
            `The first rule of synthesis: your own original thesis is in charge, not the sources. Before you weave anything, you decide what you're arguing. The thesis is your answer to the question, the point all the sources will serve. Without it, you have no music to conduct, just instruments playing whatever they like.`,
            `This means sources are evidence, not authority. A weak writer lets a source run the show, repeating its conclusion as if it settled everything. A synthesizer uses sources to support, complicate, or test their own argument. You're in command: you decide which voices to bring in, when, and why, always to advance the point that is yours.`,
            `A useful test: could a reader state your thesis after reading your essay, in your words, not any single source's? If your essay just echoes one article's view, you've been led, not conducted. If it makes a point none of your sources made alone, a point built from all of them, you've truly synthesized. The thesis is the proof that the work is yours.`,
          ],
          image: `/voyager-assets/ela/l12-s2-thesis.webp`,
          imageCaption: `The first rule of synthesis: your own original THESIS is in charge, not the sources. Before weaving anything, you decide what you're arguing, your answer to the question, the point all sources will serve. Without it you have no music to conduct, just instruments playing whatever they like. This means sources are EVIDENCE, not authority: a weak writer lets a source run the show, repeating its conclusion as if it settled everything, while a synthesizer uses sources to support, complicate, or test their own argument. A test: could a reader state your thesis in your words, not any single source's? If your essay echoes one article, you've been led, not conducted. If it makes a point none of your sources made alone, built from all of them, you've truly synthesized.`,
          vocab: [
            { word: `thesis`,
              definition: `Your own original argument, the point all the sources will serve. In synthesis, it stays in command.`,
              audioPrompt: `Your thesis, {name}, is your own original argument, the point that all your sources will serve. In synthesis it stays in command: you decide what you're proving, and the sources work for you, not the reverse.` },
            { word: `sources as evidence`,
              definition: `Using sources to support, complicate, or test your own argument, rather than letting one source's conclusion run the show.`,
              audioPrompt: `Sources as evidence, {name}, means using them to support, complicate, or test your own argument, never just repeating one source's conclusion as if it settled everything. You stay in command of what they're doing.` },
            { word: `original`,
              definition: `Genuinely your own. A synthesized essay makes a point none of its sources made alone, built from all of them together.`,
              audioPrompt: `Original, {name}, means genuinely your own. A truly synthesized essay makes a point that none of its sources made on their own, a new whole built from all of them, which is the proof the work is really yours.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Putting Sources In Conversation`,
          paragraphs: [
            `Here's the engine of synthesis: making sources talk to each other. Sources relate in a few key ways, and naming the relationship is how you weave them. Sometimes two sources agree, and you can build on their shared ground for extra force. Pointing out that independent sources reach the same conclusion strengthens your case considerably.`,
            `More interesting is when sources disagree. A synthesizer doesn't hide a clash, they spotlight it, then do real thinking: why do these two conflict? Is one more credible, more recent, looking at different evidence? Explaining a disagreement, and taking a side with reasons, is some of the sharpest work in synthesis, and it's where your own thinking shows most.`,
            `Sources also extend and qualify each other. One may fill a gap another left open; one may add a condition, a "yes, but only when..." Your job is to weave these relationships into a flowing argument, not "Source A says... Source B says..." but "While A shows X, B reveals that this holds only when Y, which together suggest my point Z." That weaving is synthesis in action.`,
          ],
          image: `/voyager-assets/ela/l12-s3-conversation.webp`,
          imageCaption: `Here's the engine of synthesis: making sources TALK to each other. They relate in key ways, and naming the relationship is how you weave them. Sometimes two sources AGREE, and you build on their shared ground for extra force, independent sources reaching the same conclusion strengthens your case. More interesting is when they DISAGREE: a synthesizer doesn't hide the clash but spotlights it and asks why, which is more credible, more recent, looking at different evidence? Taking a side with reasons is the sharpest work in synthesis. Sources also EXTEND and QUALIFY each other, one filling a gap, one adding a condition. Weave these into flowing argument, not "A says, B says," but "While A shows X, B reveals it holds only when Y, together suggesting my point Z."`,
          vocab: [
            { word: `sources in conversation`,
              definition: `The core move of synthesis: showing how sources agree, disagree, extend, or qualify one another, rather than listing them.`,
              audioPrompt: `Putting sources in conversation, {name}, is the engine of synthesis: showing how they agree, disagree, extend, or qualify each other. Naming that relationship is how you weave separate sources into one argument.` },
            { word: `corroborate`,
              definition: `When independent sources agree and confirm each other. Pointing this out strengthens an argument considerably.`,
              audioPrompt: `To corroborate, {name}, is when independent sources agree and back each other up. Pointing out that separate, credible sources reach the same conclusion adds real force to your argument, since it's not just one voice.` },
            { word: `qualify`,
              definition: `When a source adds a condition or limit to another's point, a "yes, but only when..." that makes the picture more precise.`,
              audioPrompt: `To qualify, {name}, is when one source adds a condition or limit to another's point, a "yes, but only when this is true." Weaving in those qualifications makes your argument more precise and more honest.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Weaving It Cleanly, And Honestly`,
          paragraphs: [
            `Synthesis demands clean integration. Quote sparingly and only when exact words matter; otherwise paraphrase in your own voice, so your argument keeps its flow. Every source you bring in should be doing a job for your thesis, not sitting there because you read it. If a source isn't advancing your point, cut it, no matter how interesting.`,
            `Always credit your sources. When you use someone's idea, data, or words, you attribute it clearly, naming who said what. This isn't just a rule; it's honesty and credibility. Crediting sources shows your reader exactly where your evidence comes from, lets them check it, and proves you're building on real work rather than pretending it's all your own.`,
            `The clearest sign of failed synthesis is a "Frankenstein essay," chunks of different sources stitched together with no real connection, no flow, no argument of your own running through. The fix is always the same: lead with your thesis, weave sources in to serve it, name how they relate, and write in your own connecting voice. Then the seams disappear and the parts become one whole.`,
          ],
          image: `/voyager-assets/ela/l12-s4-weaving.webp`,
          imageCaption: `Synthesis demands clean integration. Quote sparingly, only when exact words matter; otherwise PARAPHRASE in your own voice so the argument keeps its flow. Every source should do a job for your thesis, not sit there because you read it, if it isn't advancing your point, cut it. Always CREDIT your sources: when you use someone's idea, data, or words, attribute it clearly. This is honesty and credibility, showing your reader where evidence comes from and proving you build on real work. The clearest sign of failure is a "Frankenstein essay," chunks of sources stitched together with no flow or argument of your own. The fix: lead with your thesis, weave sources to serve it, name how they relate, write in your own connecting voice. Then the seams disappear and the parts become one whole.`,
          vocab: [
            { word: `paraphrase`,
              definition: `Restating a source's idea in your own words. Synthesis paraphrases mostly and quotes only when exact wording matters.`,
              audioPrompt: `To paraphrase, {name}, is to restate a source's idea in your own words. Good synthesis paraphrases most of the time and quotes only when the exact wording really matters, which keeps your own voice in command.` },
            { word: `attribution`,
              definition: `Clearly crediting who said what. It's both honest and credible, showing the reader where your evidence comes from.`,
              audioPrompt: `Attribution, {name}, means clearly crediting who said what when you use someone's idea, data, or words. It's both honest and credible, letting your reader see exactly where your evidence comes from and check it.` },
            { word: `Frankenstein essay`,
              definition: `A failed synthesis: chunks of different sources stitched together with no flow and no argument of your own running through.`,
              audioPrompt: `A Frankenstein essay, {name}, is failed synthesis: chunks of different sources stitched together with no real flow and no argument of your own. The fix is to lead with your thesis and weave the sources to serve it.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together. Synthesis is weaving many sources into a single argument that is your own, the conductor, not the reporter. Lining up summaries is a book report; synthesis combines separate parts into a new whole. Your own thesis stays in command, with sources used as evidence to support, complicate, or test your point, never running the show.`,
            `The engine is putting sources in conversation: showing where they agree (corroborate), where they clash (and explaining why, taking a side), and where they extend or qualify each other. You weave cleanly, paraphrasing mostly, quoting rarely, crediting every source honestly, and cutting anything that doesn't serve the thesis, so you never produce a stitched-together Frankenstein essay.`,
            `Now the source-evaluation screen gives you several real sources on one question, of differing credibility and viewpoint. Your job is to evaluate each, then think like a synthesizer: which to trust and weight, where they agree and clash, and how you'd weave them into an argument of your own. Onward.`,
          ],
          image: `/voyager-assets/ela/l12-s5-before.webp`,
          imageCaption: `Threads together. Synthesis is weaving many sources into a single argument that is your own, the conductor, not the reporter. Lining up summaries is a book report; synthesis combines parts into a new whole. Your own THESIS stays in command, sources used as evidence to support, complicate, or test your point. The engine is putting sources in CONVERSATION: where they agree (corroborate), clash (explain why, take a side), and extend or qualify each other. Weave cleanly, paraphrasing mostly, quoting rarely, crediting honestly, cutting anything that doesn't serve the thesis, never a stitched-together Frankenstein essay. The source-evaluation screen gives several real sources on one question, of differing credibility. Evaluate each, then think like a synthesizer: which to trust, where they agree and clash, how to weave them.`,
          vocab: [
            { word: `credibility`,
              definition: `How trustworthy a source is, based on expertise, evidence, recency, and freedom from bias. It guides how much weight you give it.`,
              audioPrompt: `Credibility, {name}, is how trustworthy a source is, based on its expertise, evidence, recency, and freedom from bias. In synthesis, credibility guides how much weight you give each source when they agree or clash.` },
            { word: `weight`,
              definition: `How much importance you give a source in your argument. More credible sources earn more weight than weaker ones.`,
              audioPrompt: `Weight, {name}, is how much importance you give a source in your argument. When two sources disagree, you give more weight to the more credible one, and you explain to your reader why you did.` },
            { word: `coherent`,
              definition: `Holding together as one clear, connected whole. The goal of synthesis is a coherent argument, not a pile of parts.`,
              audioPrompt: `Coherent, {name}, means holding together as one clear, connected whole. The goal of synthesis is a coherent argument where every source serves your thesis, not a disconnected pile of summaries.` },
          ],
        },

        {
          id: `l12-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Sources, One Question`,
          intro: `{name}, here's a real situation: you're writing about whether schools should replace printed textbooks with tablets. These five sources take different angles and differ in credibility. Evaluate each one, then think like a synthesizer: which to trust and weight, where they agree and clash, and how you'd weave them into an argument of your own.`,
          sources: [
            {
              id: `s1`,
              tier: `Strong`,
              title: `Peer-reviewed education journal study`,
              type: `Academic research`,
              context: `A multi-year, peer-reviewed study across forty schools, comparing learning outcomes between tablet-based and print-based classrooms, published in a respected education journal.`,
              quote: `"Outcomes depended less on the device than on teacher training and how the tools were used."`,
              questions: [
                `What makes this source highly credible?`,
                `How does its nuanced finding complicate a simple "tablets vs. print" debate?`,
                `In a synthesis, how much weight would you give it, and why?`,
              ],
              evaluation: `This is the strongest source: peer-reviewed, multi-year, across forty schools, published in a respected journal, all marks of high credibility. Its finding is valuable precisely because it's nuanced, it refuses the simple framing that one device is just "better," and shows the real variable is teacher training and use. In synthesis, you'd give it heavy weight and likely build your thesis around its insight, using weaker or one-sided sources as contrast. A skilled synthesizer would let this source qualify the others: when a vendor or a fan claims tablets transform learning, this study reveals the missing condition, only with good training and thoughtful use. That's synthesis: not just citing the study, but letting it reframe the whole conversation.`,
            },
            {
              id: `s2`,
              tier: `Weak`,
              title: `Tablet manufacturer's marketing page`,
              type: `Commercial / promotional`,
              context: `A glossy page from a company that sells education tablets, headlined "Transform Your Classroom," featuring impressive-sounding statistics with no clear study cited.`,
              quote: `"Schools using our tablets report up to 90% higher engagement!"`,
              questions: [
                `What's the obvious credibility problem here?`,
                `Does "up to 90%" and "report" tell you anything solid?`,
                `Can a synthesizer use this source at all, and how?`,
              ],
              evaluation: `The obvious problem is a clear conflict of interest: a company selling tablets has every incentive to make them look transformative, so its claims need heavy skepticism. The language is a red flag, "up to 90%" sets a ceiling, not a typical result (1% is "up to 90%"), and "schools report" is vague, self-selected, and uncited, not real evidence. A synthesizer wouldn't use this as proof of tablets' value, but it isn't useless: you can cite it as an example of the hype and marketing pressure surrounding the issue, then set the credible study against it. That's a sophisticated synthesis move, using a weak source not as evidence for its claim, but as evidence about the debate's distortions, while letting your strong source do the real work.`,
            },
            {
              id: `s3`,
              tier: `Moderate`,
              title: `Veteran teacher's reflective blog post`,
              type: `Practitioner experience`,
              context: `A thoughtful blog post by a teacher with twenty years' experience, describing what happened when their own classroom switched to tablets, with honest pros and cons.`,
              quote: `"The tablets helped my struggling readers, but the distraction was constant and real."`,
              questions: [
                `What kind of value does firsthand teacher experience add?`,
                `What are its limits as evidence?`,
                `How would you weave it with the peer-reviewed study?`,
              ],
              evaluation: `Firsthand teacher experience adds real value: grounded, specific, on-the-ground texture that a statistical study can't capture, including the honest tension of a benefit (helping struggling readers) alongside a cost (constant distraction). Its limits are also clear: it's a single classroom, one perspective, not generalizable on its own, and memory and personal bias shape any reflection. In synthesis, this source pairs beautifully with the peer-reviewed study: the study gives the broad, credible pattern (outcomes depend on training and use), and the teacher's account illustrates that pattern in lived detail, showing what "thoughtful use" and "distraction" actually look like in a room. Weaving them, you might write that the large study's finding is "echoed in practice" by the teacher's mixed experience, evidence corroborating across very different source types, which is exactly the kind of move that makes synthesis persuasive.`,
            },
            {
              id: `s4`,
              tier: `Moderate`,
              title: `News article quoting parents and students`,
              type: `Journalism`,
              context: `A balanced local news article reporting a community's debate over the switch, quoting parents worried about screen time and students who like the lighter backpacks and interactive features.`,
              quote: `"Parents and students remain sharply divided over the change."`,
              questions: [
                `What does this source capture that the others don't?`,
                `How reliable is "parents and students are divided" as evidence?`,
                `What role could it play in a synthesized argument?`,
              ],
              evaluation: `This source captures something the others miss: the human and community dimension, the values, worries, and preferences of the people actually affected, which a study of outcomes doesn't measure. As a balanced piece of journalism quoting multiple viewpoints, it's moderately credible for what it claims, that the community is divided, though it reports opinions, not proof of what works. In a synthesized argument, it plays the role of showing why the question is contested and what's at stake for real people: screen-time worries, backpack weight, engagement. You might weave it in to acknowledge the stakes and the disagreement, then turn to your stronger sources for what the evidence actually shows. It helps you frame the debate fairly and address the counterargument, the worried parents, before resolving it with better evidence. That's synthesis serving both fairness and force.`,
            },
            {
              id: `s5`,
              tier: `Weak`,
              title: `Viral social media post`,
              type: `Anonymous online claim`,
              context: `A widely-shared anonymous post claiming "tablets are destroying kids' brains and attention spans," with no sources, lots of capital letters, and tens of thousands of likes.`,
              quote: `"Schools are RUINING our children by putting screens in their hands!!!"`,
              questions: [
                `Why does popularity (lots of likes) not equal credibility?`,
                `What's missing that a credible source would have?`,
                `Should this appear in your synthesis at all?`,
              ],
              evaluation: `Popularity isn't credibility: tens of thousands of likes measure emotional reach, not truth, and viral posts spread because they're alarming, not because they're accurate. What's missing is everything a credible source has, an identifiable author with relevant expertise, cited evidence, measured language, and any way to verify the claim; the all-caps alarm and absolute claim ("destroying brains") are red flags of emotion over evidence. As proof, this has no place in your synthesis. But like the marketing page, it can appear in a sophisticated way: as an example of the fear-driven, evidence-free discourse around the issue, which you then contrast with what the peer-reviewed study actually found. The synthesizer's skill is knowing the difference between using a source for its claim (never, here) and using it as evidence about the conversation itself (sometimes valuable). Weak sources aren't always cut, but they're never trusted.`,
            },
          ],
          synthesisPrompt: `Now think like a synthesizer: using these five sources, what THESIS would you argue about schools switching to tablets? Which sources carry the most weight, where do they agree and clash, and how would you weave them into one argument that's yours, not any single source's? In 5-6 sentences.`,
          reflectionPrompt: `Synthesis means no single source runs the show, you weigh many and forge your own view. When have you formed a real opinion by reading or hearing several different takes, rather than just adopting the first or loudest one? What was that process like?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is synthesis writing?`,
              options: [
                `Summarizing each source one after another in a neat list.`,
                `Weaving multiple sources into a single, coherent argument of your own.`,
                `Copying the conclusion of the single most credible source you found.`,
                `Writing about a topic without using any outside sources at all.`,
              ],
              correctIndex: 1,
              explanation: `Synthesis weaves multiple sources together into a single, coherent argument that is your own, combining separate parts into a new whole. The distractors describe a book-report list, parroting one source, and source-free writing.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `The lesson compares a synthesis writer to a conductor. What does that mean?`,
              options: [
                `You should relay exactly what each source said, one at a time.`,
                `You should pick the loudest source and let it lead the essay.`,
                `You bring many source-voices together to play one piece you composed.`,
                `You should collect as many sources as possible and never cut any.`,
              ],
              correctIndex: 2,
              explanation: `A conductor brings many voices together to play one piece of music they composed; the sources are instruments and your thesis is the score. The distractors describe a reporter relaying sources, letting one source lead, or hoarding sources.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `In synthesis, what's the relationship between your thesis and your sources?`,
              options: [
                `Your thesis stays in command, and sources are evidence serving your point.`,
                `The most credible source becomes your thesis automatically.`,
                `Your sources are in command, and your thesis just echoes them.`,
                `The thesis and sources should contradict each other on purpose.`,
              ],
              correctIndex: 0,
              explanation: `Your own original thesis stays in command, and sources are used as evidence to support, complicate, or test your point, never running the show. The distractors flip the relationship or invent a rule about contradiction.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `The lesson gives a test for real synthesis. What is it?`,
              options: [
                `Whether you used at least ten different sources in the essay.`,
                `Whether every paragraph begins with a different source's name.`,
                `Whether the finished essay happens to be noticeably longer than any single source that you read.`,
                `Whether a reader could state your thesis in your words, making a point no single source made alone.`,
              ],
              correctIndex: 3,
              explanation: `The test is whether a reader could state your thesis in your words, a point built from all the sources that none made alone; if the essay just echoes one article, you were led, not conducting. The distractors measure source count, formatting, or length.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does a synthesizer do when two credible sources disagree?`,
              options: [
                `Hide the disagreement so the essay seems tidier.`,
                `Spotlight the clash and explain why, taking a side with reasons.`,
                `Throw out both sources since they can't both be right.`,
                `Always side with whichever source is more recent, no matter what.`,
              ],
              correctIndex: 1,
              explanation: `A synthesizer spotlights a clash rather than hiding it, then does real thinking about why the sources conflict and takes a side with reasons, some of the sharpest work in synthesis. The distractors hide it, discard both, or apply a rigid recency rule.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is a "Frankenstein essay"?`,
              options: [
                `An essay that simply happens to be written about classic horror stories and famous monsters.`,
                `An essay that uses only one source from start to finish.`,
                `Chunks of different sources stitched together with no flow or argument of your own.`,
                `An essay so original that it uses no sources whatsoever.`,
              ],
              correctIndex: 2,
              explanation: `A Frankenstein essay is failed synthesis: chunks of different sources stitched together with no real connection, no flow, and no argument of your own running through. The distractors confuse it with the subject matter, single-source writing, or source-free writing.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does the lesson say you must credit (attribute) your sources?`,
              options: [
                `It's only needed if you copy a source word for word.`,
                `It makes the essay longer, which always improves the grade.`,
                `It conveniently lets you avoid ever having to develop any real thesis of your own at all.`,
                `It's honest and credible: it shows where evidence comes from and lets readers check it.`,
              ],
              correctIndex: 3,
              explanation: `Crediting sources is honesty and credibility: it shows the reader where your evidence comes from, lets them check it, and proves you're building on real work. The distractors limit it to direct quotes, treat it as padding, or confuse it with avoiding a thesis.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `A viral anonymous post with 50,000 likes claims tablets "destroy kids' brains." How should a synthesizer treat it?`,
              options: [
                `Not as proof of its claim, but possibly as an example of fear-driven discourse to contrast with credible evidence.`,
                `As genuinely strong evidence, on the theory that fifty thousand people surely can't all be wrong.`,
                `As the centerpiece of the essay because it's the most popular source.`,
                `Exactly the same as a peer-reviewed study, since all sources are equal.`,
              ],
              correctIndex: 0,
              explanation: `Popularity isn't credibility; the post has no author, evidence, or measured language, so it's never trusted as proof, but a skilled synthesizer can use it as evidence about the debate's fear-driven distortions, contrasted with credible sources. The distractors treat likes as truth, center it, or pretend all sources are equal.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A great synthesis essay is one that carefully summarizes each of your sources in turn, one paragraph per source, so the reader knows exactly what every source said.`,
              correctAnswer: false,
              explanation: `False, and this is the exact trap the whole lesson is built to help you escape. Summarizing each source in turn, one paragraph per source, feels organized and responsible, but it produces a book report, not a synthesis essay. It tells the reader what each source said while never telling them what you think, and it never weaves the separate pieces into anything whole. That's the reporter's job, not the conductor's. Real synthesis does something fundamentally different: it leads with your own original thesis and brings the sources into conversation with one another in service of that point. Instead of "Source A says X. Source B says Y. Source C says Z," a synthesizer writes something like "While A shows X, B reveals this holds only when Y, and together they support my argument that Z." You name how sources relate, where they corroborate each other for added force, where they clash (and you explain why and take a side), where one qualifies or extends another. You paraphrase mostly and quote rarely, you credit every source, and you cut anything that doesn't serve your thesis. The result is a single coherent argument that makes a point none of your sources made alone, built from all of them, and that is unmistakably yours. A row of summaries can't do that, no matter how careful each summary is.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Two classmates write about the same five sources. Maya's essay has five paragraphs, each summarizing one source, ending "so there are many views." Leo's leads with his own claim, shows where two sources agree, explains why he trusts the study over the marketing page, and uses the weak viral post as an example of hype. Using the lesson, who synthesized, and why?`,
              options: [
                `Maya, because covering every source equally in its own paragraph is the fairest approach.`,
                `Neither, because real synthesis requires far more than five sources to work.`,
                `Leo, because he leads with his own thesis, puts sources in conversation (agreement, weighted disagreement, using a weak source as evidence about the debate), and forges one argument that's his, while Maya produced a book report that never says what she thinks.`,
                `Maya, because Leo showed bias by trusting one source more than another.`,
              ],
              correctIndex: 2,
              explanation: `Leo synthesized: he leads with his own thesis, puts sources in conversation (showing agreement, explaining a weighted disagreement, and using the weak viral post as evidence about the debate rather than proof), and forges a single argument that's his. Maya wrote the classic book report, a row of summaries ending in "many views," that never states her own point. The distractors praise Maya's listing, demand more sources, or misread Leo's reasoned weighting as bias (weighing credibility is exactly the synthesizer's job).`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-conductor`, category: `Reporter or conductor`, prompt: `Synthesis means being the conductor, not the reporter, bringing many voices together into something of your own. In your own life, when have you taken in lots of different opinions and forged your own view, versus just repeating what one trusted source told you?` },
            { id: `reflect-clash`, category: `When sources clash`, prompt: `The sharpest synthesis work is explaining why credible sources disagree and taking a side. When have you faced two trustworthy people or sources who flatly contradicted each other? How did you decide what to believe?` },
            { id: `reflect-weight`, category: `Weighing credibility`, prompt: `Not all sources deserve equal weight. How do you personally decide who to trust, an expert study, a friend's experience, a viral post? What signals make you give a source more or less weight in your own thinking?` },
            { id: `reflect-heritage`, category: `Many voices, one vision`, prompt: `Caro, building Coreverse means synthesizing many sources, research, other parents, your own kids' experience, your Colombian roots, into one vision that's yours. How do you weave so many voices without letting any single one run the show?` },
            { id: `reflect-original`, category: `Making it yours`, prompt: `The proof of synthesis is making a point none of your sources made alone. When have you combined things others said into a genuinely new idea of your own? What did it feel like to realize the thought was truly yours?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "synthesis is just a fancy word for picking sources that agree with you and ignoring the rest, real objectivity means reporting all views equally." State that view as strongly as you can. Where does it have a point, and where does the lesson show the difference between synthesis and cherry-picking?` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Synthesis is how a thinking person handles a complicated world, many voices, one clear view of your own. These build the skill. Two paths.`,
          familyActivity: {
            title: `The Family Decision Synthesis`,
            duration: `One real decision`,
            description: `Use synthesis to make a real family decision better. Pick something the family actually needs to decide, where to go on a trip, what to do about screens or chores, a big purchase, anything with real trade-offs. Instead of letting the loudest voice or the first opinion win, run it like a synthesis. First, gather the "sources": have each person (and maybe a quick search or two) put forward their view with a reason, and treat them like sources of differing credibility, whose information is solid, whose is just a strong feeling, whose has firsthand experience. Then do the synthesizer's work out loud as a family: Where do people agree? Where do they clash, and why, is one view based on better information? Does one person's point qualify another's ("yes, but only if...")? Finally, instead of just picking a side, forge a "thesis", a decision that's genuinely built from all the input, that no single person proposed alone, and say it clearly: "Given all of this, here's what we'll do, and here's why." Notice how different this feels from a normal argument where someone just wins. You'll be modeling exactly how synthesis turns many competing voices into one thoughtful, owned conclusion, a skill that serves every hard decision for life.`,
          },
          projectOption: {
            title: `Write A Real Synthesis Essay, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become a true synthesizer. Week 1: pick a genuine question you're curious about that has more than one defensible answer (should your town do X, is some technology good or bad for kids, etc.). Find four to six real sources of different types and credibility levels, a study or expert piece, a firsthand account, a news article, and yes, maybe a weak or biased one. For each, write a quick credibility note: how much do you trust it, and why? Then, crucially, before writing, decide your own thesis, your answer, built from weighing all of them. Week 2: write the essay, but never as a row of summaries. Lead with your thesis. Then weave: show where sources corroborate each other, spotlight where they clash and explain which you trust more and why, note where one qualifies another. Paraphrase mostly, quote only when the exact words matter, and credit every source. If you used a weak source, use it the sophisticated way, as evidence about the debate, not proof of its claim. Finally, run the test: could a reader state your thesis in your words, a point no single source made alone? If yes, you've conducted the orchestra. You'll have produced the kind of writing real thinkers, researchers, and decision-makers do, and trained the skill of forging your own view from many voices.`,
            offerToParent: `Parent: opt your child into the synthesis essay project. Synthesizing multiple sources of varying credibility into an original, coherent argument, weighing sources, explaining disagreements, and weaving rather than listing, is one of the most demanding and transferable skills in the standards. Evaluating credibility (including using weak sources as evidence about a debate rather than proof) builds serious information literacy for a world of competing claims. The result is a genuinely original essay and a thinker who can handle complexity without just parroting the loudest voice. It's rigorous, CCSS-aligned, and deeply practical.`,
          },
          identityQuestion: `If you become someone who can take in many competing voices, weigh them honestly, and forge a clear view that's genuinely your own, what kind of thinker does that make you, in a world that constantly pushes you to just adopt the first or loudest opinion, that someone who can only repeat a single source can never quite become?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can weave many voices into a view that's truly my own.`,
            `A thinker who weighs sources instead of just trusting the loudest.`,
            `Someone who conducts the orchestra instead of just reporting it.`,
          ],
          saveKey: `identity_responses_ela_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelve done, and you've learned to conduct an orchestra of sources. You learned that lining up summaries one after another is just a book report, while synthesis is the higher skill: weaving many sources into a single, coherent argument that is genuinely your own, combining separate parts into a new whole. You learned that your own thesis stays in command, with sources used as evidence to support, complicate, or test your point, never running the show, and that the real test is whether you've made a point none of your sources made alone. You learned the engine of synthesis, putting sources in conversation: building on agreement, spotlighting and explaining clashes while taking a side, and weaving in how sources extend and qualify each other. And you learned to integrate cleanly and honestly, paraphrasing mostly, crediting every source, cutting whatever doesn't serve your thesis, so you never stitch together a Frankenstein essay. Most powerfully, you learned to weigh credibility, even using a weak source as evidence about a debate rather than proof of its claim. This is how real thinkers handle a complex world. Next: we turn to style and voice, the art of writing that sounds unmistakably like you. Onward, {name}. — Quill`,
          badge: `synthesizer`,
          badgeName: `Synthesizer`,
          xpEarned: 75,
          competencies: [
            `Defines synthesis as weaving multiple sources into a single original argument, not a list of summaries`,
            `Keeps an original thesis in command, using sources as evidence rather than authority`,
            `Puts sources in conversation: corroboration, weighted disagreement, extension, and qualification`,
            `Evaluates source credibility and assigns appropriate weight to each`,
            `Uses even weak or biased sources skillfully, as evidence about a debate rather than proof`,
            `Integrates cleanly: paraphrases over quotes, attributes honestly, cuts what doesn't serve the thesis`,
            `Avoids the "Frankenstein essay" by leading with thesis and connecting sources in their own voice`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Style and Voice`,
            hook: `The art of writing that sounds unmistakably, powerfully like you. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const src = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L12 ${VERSION}] "${l.title}" mags=${mags} sources=${src} q=${quiz}`);
}
