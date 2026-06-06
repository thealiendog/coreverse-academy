// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L10 — Research Writing: The Documented Essay
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Writing (Research), Source Evaluation, Citation
// Interaction: SOURCE-EVALUATION. Sections <=1100ch (paras ~330ch). 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l10-v1";

const ELA_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-10`,
      title: `Research Writing: The Documented Essay`,
      duration: 35,
      xpReward: 75,
      badge: `research-writer`,
      badgeName: `Research Writer`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, until now we've mostly read what others wrote. Today you start building something of your own: a documented essay, an argument you make and then back up with real evidence from real sources. This is one of the most important kinds of writing there is, the foundation of almost all serious work in school, science, journalism, and beyond. A documented essay isn't just a report that piles up facts; it makes a claim, a thesis, and then proves it, using carefully chosen, trustworthy evidence, while honestly telling the reader exactly where every piece came from. Three skills make it work, and we'll learn all three. First, finding and judging sources, because not all information is equally trustworthy, and using a bad source can sink an otherwise great argument. Second, weaving evidence into your own argument, so the sources serve your point instead of replacing it. And third, citing honestly, giving credit so readers can check your work and so you never, ever steal someone else's words or ideas, which is called plagiarism and is a serious offense. Master this, and you can make a case the world has to take seriously. Onward.`,
          headline: `Research Writing: The Documented Essay`,
          subtitle: `Building a real argument backed by solid evidence and honest sources. A Source Investigation.`,
          visual: `/voyager-assets/ela/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `An Argument, Not A Pile Of Facts`,
          paragraphs: [
            `A documented essay is not a report that piles up facts. It makes an argument: it states a claim, called a thesis, and then proves it with carefully chosen evidence from real sources. The difference matters. A report says "here is everything about whales." An essay says "whale songs prove animal culture exists, and here's the evidence."`,
            `This is one of the most important kinds of writing there is. It's the foundation of serious work in school, science, journalism, law, and beyond. Whenever someone needs to convince thoughtful people of something true, they make a claim and back it with evidence, honestly sourced. Learning to do this gives you real power: the power to make a case the world must take seriously.`,
            `Three skills make a documented essay work, and we'll build all three. First, finding and judging sources, because not all information is trustworthy. Second, weaving evidence into your own argument, so sources serve your point. Third, citing honestly, giving credit so readers can check you, and so you never steal another's words or ideas. Master these, and your argument stands on solid ground.`,
          ],
          image: `/voyager-assets/ela/l10-s1-argument.webp`,
          imageCaption: `A documented essay is not a report that piles up facts. It makes an ARGUMENT: it states a claim, called a THESIS, and proves it with carefully chosen evidence from real sources. A report says "here is everything about whales"; an essay says "whale songs prove animal culture exists, and here's the evidence." This is one of the most important kinds of writing there is, the foundation of serious work in school, science, journalism, and law: whenever someone must convince thoughtful people of something true, they make a claim and back it with honestly sourced evidence. Three skills make it work: finding and judging sources (not all information is trustworthy), weaving evidence into your own argument so sources serve your point, and citing honestly so readers can check you and you never steal another's words.`,
          vocab: [
            { word: `documented essay`,
              definition: `An essay that makes an argument and proves it with carefully chosen evidence from real sources, honestly cited.`,
              audioPrompt: `A documented essay, {name}, makes an argument and then backs it up with real evidence from real sources. It's not just a pile of facts, it makes a claim and proves it, while honestly telling the reader where every piece came from.` },
            { word: `thesis`,
              definition: `The central claim an essay sets out to prove. Everything in the essay works to support this single, arguable point.`,
              audioPrompt: `A thesis, {name}, is the central claim your essay sets out to prove, the one arguable point everything else supports. A report describes a topic; a thesis takes a position on it that you then back with evidence.` },
            { word: `evidence`,
              definition: `Facts, data, examples, or expert testimony from sources, used to support a claim. The proof behind an argument.`,
              audioPrompt: `Evidence, {name}, is the facts, data, examples, and expert testimony you gather from sources to support your claim. An argument without evidence is just an opinion; evidence is what turns your claim into a case worth taking seriously.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Not All Sources Are Equal`,
          paragraphs: [
            `Your argument is only as strong as your sources, and not all sources are equally trustworthy. A claim in a peer-reviewed scientific study, where other experts checked the work, carries far more weight than a random comment online. Using a weak or biased source can sink an otherwise good argument, so judging sources is the first real skill of research.`,
            `Ask a few key questions of any source. Who made it, and what are their credentials? Why was it made, to inform, or to sell or persuade you? When was it made, is it current enough to matter? Is it primary (a firsthand record, like an original study or eyewitness account) or secondary (someone describing or interpreting that record)? Each answer shifts how much you should trust it.`,
            `Build a hierarchy in your mind. Near the top: peer-reviewed research, reputable books, expert institutions, quality journalism. Lower down: sources with an obvious agenda, anonymous posts, sites that profit from a particular answer. The goal isn't to use only "perfect" sources, none exist, but to know each source's strengths and limits, and to lean your argument on the strongest ground available.`,
          ],
          image: `/voyager-assets/ela/l10-s2-sources.webp`,
          imageCaption: `Your argument is only as strong as your sources, and not all sources are equally trustworthy. A claim in a PEER-REVIEWED study, checked by other experts, carries far more weight than a random online comment, and a weak source can sink a good argument. Ask key questions of any source: WHO made it and what are their credentials? WHY, to inform, or to sell and persuade? WHEN, is it current? Is it PRIMARY (a firsthand record like an original study or eyewitness account) or SECONDARY (someone describing that record)? Build a hierarchy: near the top, peer-reviewed research, reputable books, expert institutions, quality journalism; lower down, sources with an obvious agenda, anonymous posts, sites that profit from one answer. Know each source's strengths and limits, and lean on the strongest ground available.`,
          vocab: [
            { word: `peer review`,
              definition: `The process where independent experts check a study before publication. Peer-reviewed work is among the most trustworthy evidence.`,
              audioPrompt: `Peer review, {name}, is when independent experts check a study before it's published, catching errors and weak reasoning. A peer-reviewed source carries far more weight than a random claim, because other experts have already scrutinized it.` },
            { word: `primary source`,
              definition: `A firsthand record or original evidence, like an original study, eyewitness account, or original document, as opposed to a secondary description of it.`,
              audioPrompt: `A primary source, {name}, is a firsthand record or original evidence: an original study, an eyewitness account, an original document. A secondary source is someone later describing or interpreting that firsthand material.` },
            { word: `bias`,
              definition: `A source's slant or agenda that can distort its information, especially when it profits from, or strongly favors, one answer.`,
              audioPrompt: `Bias, {name}, is a source's slant or agenda that can distort what it tells you, especially when the source profits from, or strongly favors, one particular answer. Spotting bias is a key part of judging whether to trust a source.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Weaving Evidence Into Your Argument`,
          paragraphs: [
            `Gathering good sources is only half the job. The other half is weaving their evidence into your own argument so the sources serve your point, not replace it. A weak essay is just stitched-together quotes with no real voice. A strong essay is your argument, in your words, with evidence brought in exactly where it proves what you're claiming.`,
            `There are three ways to use a source. You can quote it directly (use sparingly, only when the exact words matter). You can paraphrase, restate its idea fully in your own words. Or you can summarize, boil a long passage down to its key point. Most of your essay should be paraphrase and summary in your own voice, with quotes saved for when wording truly counts.`,
            `Crucially, every piece of evidence needs your analysis. Don't just drop a fact and move on; explain how it supports your claim. The pattern is: make a point, give the evidence, then show what it proves. The evidence is the witness; you are the lawyer making the case. Your thinking, connecting evidence to claim, is what turns a pile of sources into a real argument.`,
          ],
          image: `/voyager-assets/ela/l10-s3-weaving.webp`,
          imageCaption: `Gathering good sources is only half the job; the other half is WEAVING their evidence into your own argument so sources serve your point, not replace it. A weak essay is stitched-together quotes with no voice; a strong essay is your argument, in your words, with evidence brought in exactly where it proves your claim. Three ways to use a source: QUOTE directly (sparingly, when exact words matter), PARAPHRASE (restate the idea fully in your own words), or SUMMARIZE (boil a long passage to its key point). Most of your essay should be paraphrase and summary in your own voice. Crucially, every piece of evidence needs your ANALYSIS: make a point, give the evidence, then show what it proves. The evidence is the witness; you are the lawyer making the case.`,
          vocab: [
            { word: `paraphrase`,
              definition: `Restating a source's idea fully in your own words. Most of a strong essay uses paraphrase rather than direct quotation.`,
              audioPrompt: `To paraphrase, {name}, is to restate a source's idea fully in your own words, not just swap a word or two. Most of a strong essay should be paraphrase in your own voice, with direct quotes saved for when the exact wording truly matters.` },
            { word: `analysis`,
              definition: `Your own thinking that connects a piece of evidence to your claim, explaining what it proves. It turns facts into argument.`,
              audioPrompt: `Analysis, {name}, is your own thinking that connects evidence to your claim. Don't just drop a fact and move on; explain how it supports your point. Make a claim, give the evidence, then show what it proves, that's analysis.` },
            { word: `synthesis`,
              definition: `Combining evidence from several sources into one coherent argument in your own voice, rather than listing sources one by one.`,
              audioPrompt: `Synthesis, {name}, is combining evidence from several sources into one coherent argument in your own voice. Instead of summarizing each source in turn, you weave them together so they all serve the single case you're building.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Honesty: Citation And Plagiarism`,
          paragraphs: [
            `The final skill is honesty about where your evidence came from. A citation is a note that gives credit, telling the reader the source of a fact, idea, or quote. Citations do two vital things: they let readers check your work and find the original, and they honestly credit the people whose thinking you're using. A documented essay lives or dies on this honesty.`,
            `Failing to cite, passing off someone else's words or ideas as your own, is called plagiarism, and it's a serious offense. It's a form of theft, and in school or professional life it can end a career or get you expelled. Plagiarism isn't only copying word-for-word; using someone's idea or structure without credit counts too, even if you reword it. When in doubt, cite.`,
            `Different fields use different citation styles, MLA, APA, Chicago, but they all answer the same questions: who said it, where, and when? You don't have to memorize every comma; you have to grasp the principle. Track where every piece of evidence comes from as you research, and credit it clearly. Honest citation isn't a chore tacked on at the end, it's what makes your argument trustworthy.`,
          ],
          image: `/voyager-assets/ela/l10-s4-citation.webp`,
          imageCaption: `The final skill is honesty about where evidence came from. A CITATION is a note giving credit, telling the reader the source of a fact, idea, or quote. Citations do two vital things: they let readers check your work and find the original, and they honestly credit the people whose thinking you're using. Failing to cite, passing off another's words or ideas as your own, is PLAGIARISM, a serious offense and a form of theft that can end a career or get you expelled. It isn't only word-for-word copying; using someone's idea or structure without credit counts too, even reworded. Different fields use different styles, MLA, APA, Chicago, but all answer the same questions: who said it, where, and when? Track every source as you research and credit it clearly. Honest citation is what makes your argument trustworthy.`,
          vocab: [
            { word: `citation`,
              definition: `A note giving credit to a source, so readers can check your work and the original author is credited. The backbone of honest research.`,
              audioPrompt: `A citation, {name}, is a note that gives credit to a source, telling the reader where a fact, idea, or quote came from. Citations let readers check your work and honestly credit the people whose thinking you used.` },
            { word: `plagiarism`,
              definition: `Passing off someone else's words or ideas as your own without credit. A serious form of theft, even when the words are reworded.`,
              audioPrompt: `Plagiarism, {name}, is passing off someone else's words or ideas as your own without giving credit. It's a serious offense, a form of theft, and it isn't only copying word-for-word; using someone's idea without credit counts too.` },
            { word: `citation style`,
              definition: `A standard format for citing sources, such as MLA, APA, or Chicago. All styles answer who said it, where, and when.`,
              audioPrompt: `A citation style, {name}, is a standard format for crediting sources, like MLA, APA, or Chicago. You don't have to memorize every comma; just grasp that they all answer the same questions: who said it, where, and when?` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Investigation`,
          paragraphs: [
            `Pull it together. A documented essay makes an argument, a thesis, and proves it with honestly sourced evidence. Three skills make it work. First, judging sources: not all are equally trustworthy, so you ask who made it, why, when, and whether it's primary or secondary, and lean your case on the strongest ground.`,
            `Second, weaving evidence in: quote sparingly, paraphrase and summarize in your own voice, and always add your analysis connecting each piece to your claim. The evidence is your witness; you are the lawyer. Third, citing honestly: give credit so readers can check you and so you never commit plagiarism, the theft of others' words or ideas.`,
            `Now the source-investigation screen puts the first skill to the test directly. You'll examine several sources making claims for a research essay, and judge each one: how trustworthy is it, and why? Look at who made it, their purpose, their evidence, and their possible bias. A real researcher doesn't trust a source because it agrees with them, they trust it because it holds up under exactly this kind of scrutiny. Investigate carefully. Onward.`,
          ],
          image: `/voyager-assets/ela/l10-s5-before.webp`,
          imageCaption: `Threads together. A documented essay makes an argument, a thesis, and proves it with honestly sourced evidence. Three skills: judging sources (ask who made it, why, when, primary or secondary, and lean on the strongest ground); weaving evidence in (quote sparingly, paraphrase and summarize in your own voice, always adding your analysis connecting each piece to your claim, the evidence is your witness, you are the lawyer); and citing honestly (give credit so readers can check you, and never commit plagiarism, the theft of others' words or ideas). The source-investigation screen tests the first skill: examine several sources for a research essay and judge each, who made it, their purpose, evidence, and bias. A real researcher trusts a source because it holds up under scrutiny, not because it agrees with them.`,
          vocab: [
            { word: `credibility`,
              definition: `How trustworthy a source is, based on its author, purpose, evidence, and freedom from distorting bias.`,
              audioPrompt: `Credibility, {name}, is how trustworthy a source is, judged by who made it, why, what evidence it offers, and whether bias distorts it. Judging credibility is the first real skill of research, because a weak source can sink a strong argument.` },
            { word: `corroboration`,
              definition: `Confirming a claim by checking whether several independent, trustworthy sources agree. Strong evidence is corroborated.`,
              audioPrompt: `Corroboration, {name}, means confirming a claim by checking whether several independent, trustworthy sources agree. One source can be wrong; when several solid sources point the same way, your evidence is far stronger.` },
            { word: `scrutiny`,
              definition: `Careful, critical examination. A real researcher trusts a source because it holds up under scrutiny, not because it agrees with them.`,
              audioPrompt: `Scrutiny, {name}, is careful, critical examination. A real researcher doesn't trust a source just because it agrees with them; they trust it because it holds up under scrutiny, exactly the kind you're about to practice.` },
          ],
        },

        {
          id: `l10-source-evaluation`,
          type: `source-evaluation`,
          headline: `Judge The Sources`,
          intro: `{name}, imagine you're writing a research essay on whether a new city policy of banning cars from the downtown core actually helps. Here are five sources you found. Judge each one: how trustworthy is it, and why? Look at who made it, their purpose, their evidence, and possible bias. Trust a source because it holds up, not because it agrees with you.`,
          sources: [
            {
              id: `s1`,
              tier: `Strong`,
              title: `A peer-reviewed university study`,
              type: `Peer-reviewed research (primary)`,
              context: `A study published in a respected, peer-reviewed urban-planning journal, by researchers at a university with no financial stake in the outcome. It measured air quality, foot traffic, and local business revenue in three cities before and after car-free downtowns, over two years.`,
              quote: `"Across all three cities, air quality improved measurably and local retail revenue rose modestly within eighteen months of pedestrianization."`,
              questions: [
                `Who made this, and what are their credentials?`,
                `Was it checked by anyone before publication?`,
                `Does the source have a financial stake in the answer?`,
              ],
              evaluation: `This is your strongest source. It's peer-reviewed, meaning independent experts scrutinized the methods and reasoning before publication, which catches errors a single researcher might miss. The authors are credentialed university researchers with no financial stake in the outcome, so bias toward a particular answer is low. It's primary research with real, measured data (air quality, foot traffic, revenue) gathered over a meaningful two-year span across multiple cities, which guards against a one-off fluke. You should lean your argument heavily on a source like this, and look for other studies that corroborate it. Even here, stay alert: three cities is not the whole world, and you'd note that limit honestly rather than overclaiming.`,
            },
            {
              id: `s2`,
              tier: `Weak`,
              title: `A blog post from a car-industry group`,
              type: `Advocacy / industry source (biased)`,
              context: `A polished, confident article on the website of a national association of car manufacturers, arguing that car-free downtowns "devastate" local economies. It cites no studies, but features dramatic anecdotes about a few shops that closed.`,
              quote: `"Car-free zones are an economic disaster that destroys the small businesses that make our cities great."`,
              questions: [
                `Why was this source created, who benefits from its conclusion?`,
                `What evidence does it actually offer?`,
                `Should you ignore it entirely, or use it carefully?`,
              ],
              evaluation: `This is a weak source for a factual claim, because of clear bias: a car-manufacturers' association profits when cities stay car-dependent, giving it a direct stake in this exact conclusion. Its purpose is to persuade, not to inform neutrally. And it offers no real evidence, just dramatic anecdotes about a few closures, which prove nothing about the overall effect (some shops close in any economy). You shouldn't lean your argument on it. But "weak" doesn't mean "ignore entirely": a smart researcher might cite it as an example of industry opposition, clearly labeled as a biased advocacy source, not as proof of economic harm. Knowing why a source is weak lets you use it honestly for what it actually is.`,
            },
            {
              id: `s3`,
              tier: `Moderate`,
              title: `A quality newspaper article`,
              type: `Journalism (secondary)`,
              context: `A well-reported article in a reputable newspaper with a strong fact-checking reputation. The journalist interviewed city officials, business owners on both sides, and an urban planner, and summarized two academic studies, while clearly noting which voices disagreed.`,
              quote: `"Reactions are mixed: officials cite cleaner air and more foot traffic, while some shop owners report a difficult first year."`,
              questions: [
                `What does quality journalism do well here?`,
                `Is this primary or secondary evidence?`,
                `How should you use it, and what should you do next?`,
              ],
              evaluation: `This is a solid, moderate source, useful but not your foundation. Quality journalism from a reputable, fact-checking outlet does real work: it gathers multiple perspectives, talks to people on both sides, and fairly notes disagreement instead of cherry-picking. That balance is a sign of trustworthiness. But notice it's secondary, the journalist is summarizing academic studies, not conducting them, so for the underlying facts you should go to those primary studies directly when you can. Use this article well: for the human picture (the mixed reactions, the difficult first year), for leads to primary sources, and for showing you've represented the debate fairly. Then corroborate its key claims against the peer-reviewed research itself.`,
            },
            {
              id: `s4`,
              tier: `Weak`,
              title: `An anonymous comment on social media`,
              type: `Anonymous online post`,
              context: `A widely-shared post from an anonymous account stating, with great confidence and no source, that "studies prove" car-free downtowns cut crime by 40%. The number is specific and striking, and the post has thousands of shares.`,
              quote: `"Studies prove car-free downtowns cut crime by 40 percent. Wake up, people!"`,
              questions: [
                `Can you tell who made this or where the number came from?`,
                `Does being widely shared make it more trustworthy?`,
                `Could you use this 40% figure in your essay as-is?`,
              ],
              evaluation: `This is a weak source you should not rely on, no matter how striking the number. You can't tell who made it (anonymous), what their credentials are, or where the "40%" came from, "studies prove" with no actual study named is a classic red flag. Being widely shared means nothing about truth; false claims often spread fastest because they're dramatic. You absolutely cannot drop this 40% figure into your essay as-is; doing so would mean citing a phantom source, and if the number is wrong, it sinks your credibility. The honest move is to treat the claim as a lead, not evidence: try to find whether any real, named, peer-reviewed study actually supports it. If you can't trace it to a credible primary source, it doesn't belong in your argument at all.`,
            },
            {
              id: `s5`,
              tier: `Moderate`,
              title: `A government transportation department report`,
              type: `Official institutional data (primary-ish)`,
              context: `A detailed report from the city's own transportation department, full of real traffic and air-quality data it collected. The data looks solid, but the report was released by the same city government that championed the car-free policy and wants it to look successful.`,
              quote: `"Following pedestrianization, downtown air-quality measurements improved and pedestrian counts increased substantially."`,
              questions: [
                `What's the strength of this source?`,
                `What's the possible bias to watch for?`,
                `How can you use it responsibly?`,
              ],
              evaluation: `This is a genuinely useful source with one bias to watch, making it moderate. Its strength is real, detailed firsthand data (traffic, air quality) collected by an institution with the resources to measure carefully, that's close to primary evidence. The bias to watch is the conflict of interest: the same government that championed the policy released the report and wants it to look good, which could shape what data gets emphasized, framed favorably, or quietly left out. That doesn't mean the data is fake, official numbers are often reliable, but it means you read it critically. Use it responsibly: cite the hard data, but corroborate the rosy framing against independent sources like the peer-reviewed study, and note the conflict of interest honestly in your essay. That's exactly the kind of careful, transparent handling that makes a researcher trustworthy.`,
            },
          ],
          synthesisPrompt: `After judging all five: which sources would you build your essay's argument on, and which would you handle carefully or set aside, and why? How would you use even the weak ones honestly? In 5-6 sentences.`,
          reflectionPrompt: `A real researcher trusts a source because it holds up under scrutiny, not because it agrees with them. Be honest: how often do you accept information because it confirms what you already believe? What would change if you scrutinized the sources you agree with as hard as the ones you don't?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `How is a documented essay different from a report?`,
              options: [
                `A documented essay must be much longer than any report.`,
                `A documented essay makes an argument with a thesis; a report just gathers facts.`,
                `A documented essay never uses any sources, while a report uses many.`,
                `A documented essay is written by hand, while a report is typed.`,
              ],
              correctIndex: 1,
              explanation: `A documented essay makes an argument: it states a claim (thesis) and proves it with evidence, while a report just gathers and presents facts on a topic. The distractors invent differences about length, sources, and format that aren't the real distinction.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is a "thesis" in a documented essay?`,
              options: [
                `The list of all the sources used at the end of the essay.`,
                `The first fact the writer happens to find while researching.`,
                `The central, arguable claim the essay sets out to prove.`,
                `A summary of everything known about the general topic.`,
              ],
              correctIndex: 2,
              explanation: `The thesis is the central, arguable claim the essay sets out to prove, and everything in the essay works to support it. The distractors confuse it with the source list, a random first fact, or a broad topic summary, none of which is an arguable claim.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does the lesson say "not all sources are equally trustworthy"?`,
              options: [
                `Because newer sources are always wrong and older sources are always right.`,
                `Because a peer-reviewed study carries more weight than a random online comment.`,
                `Because only sources you personally agree with can ever be trusted.`,
                `Because longer sources are always more trustworthy than shorter ones.`,
              ],
              correctIndex: 1,
              explanation: `Sources vary in trustworthiness: a peer-reviewed study (checked by independent experts) carries far more weight than a random online comment, and a weak source can sink a good argument. The distractors invent false rules about age, agreement, and length.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the difference between a primary and a secondary source?`,
              options: [
                `A primary source is true and a secondary source is always false.`,
                `A primary source is the first one you read; a secondary source is the second.`,
                `A primary source is short, while a secondary source is always long.`,
                `A primary source is a firsthand record; a secondary source describes or interprets it.`,
              ],
              correctIndex: 3,
              explanation: `A primary source is a firsthand record or original evidence (an original study, an eyewitness account), while a secondary source describes or interprets that firsthand material. The distractors confuse the distinction with truth, reading order, or length.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `The lesson says most of your essay should be in what form?`,
              options: [
                `Paraphrase and summary in your own voice, with quotes used sparingly.`,
                `Long direct quotations stitched together, since sources say it best.`,
                `Your own opinions only, with no evidence from sources at all.`,
                `Bullet-pointed lists of facts copied straight from each source.`,
              ],
              correctIndex: 0,
              explanation: `Most of a strong essay should be paraphrase and summary in your own voice, with direct quotes saved for when the exact wording truly matters, so the sources serve your argument rather than replacing your voice. The distractors describe quote-stitching, evidence-free opinion, or copied lists.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does every piece of evidence need your "analysis"?`,
              options: [
                `Because analysis makes the essay longer and more impressive-looking.`,
                `Because you must always disagree with every source you cite.`,
                `Because a dropped fact proves nothing until you explain how it supports your claim.`,
                `Because analysis lets you avoid having to cite the source at all.`,
              ],
              correctIndex: 2,
              explanation: `Every piece of evidence needs analysis because a dropped fact proves nothing on its own; your thinking, connecting the evidence to your claim and showing what it proves, is what turns sources into a real argument (the evidence is the witness, you are the lawyer). The distractors treat analysis as padding, forced disagreement, or a citation dodge.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is plagiarism?`,
              options: [
                `Using more than three sources in a single research essay.`,
                `Passing off someone else's words or ideas as your own without credit.`,
                `Quoting a source directly instead of paraphrasing it.`,
                `Citing a source in MLA style when your teacher wanted APA.`,
              ],
              correctIndex: 1,
              explanation: `Plagiarism is passing off someone else's words or ideas as your own without credit, a serious form of theft that includes using someone's idea or structure even if reworded. The distractors confuse it with using many sources, quoting (which is fine when cited), or a citation-style mismatch.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What two things do citations accomplish?`,
              options: [
                `They make the essay look longer and they fill up the final page.`,
                `They prove you read fast and they impress the teacher with big names.`,
                `They let readers check your work and find the original, and they credit the real author.`,
                `They completely replace the need for any thesis and they conveniently hide weak evidence.`,
              ],
              correctIndex: 2,
              explanation: `Citations do two vital things: they let readers check your work and find the original source, and they honestly credit the people whose thinking you used, which is what makes a documented essay trustworthy. The distractors treat citations as padding, showing off, or a way to dodge a thesis and hide weak evidence.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If a striking statistic is shared by thousands of people online, that wide sharing makes it trustworthy enough to use as evidence in your essay.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important habits to break. How widely a claim is shared tells you nothing about whether it's true. In fact, dramatic and striking claims, exactly the ones that grab attention, often spread fastest precisely because they're exciting, regardless of whether they're accurate; false information frequently travels further and faster than careful truth. Trustworthiness comes from the qualities the lesson teaches you to check: who made the claim and what their credentials are, why they made it (to inform, or to sell and persuade), whether it's backed by real evidence you can trace, and whether it's been scrutinized, as in peer review. A specific, striking statistic with no named, credible source behind it, "studies prove" with no actual study you can find, is a classic red flag, not a green light. If you dropped that unverified number into your essay, you'd be citing a phantom source, and if the figure turned out to be wrong, it would sink your whole argument's credibility. The honest move is to treat a viral claim as a lead to investigate, not as evidence: try to trace it back to a real, named, credible primary source. If you can't, it simply doesn't belong in your argument, no matter how many shares it has.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `While researching, you find one source that perfectly supports your thesis, it's an anonymous post with no evidence, and one peer-reviewed study that partly complicates your thesis. Using the lesson, what should a real researcher do?`,
              options: [
                `Use the anonymous post, since it agrees with you, and ignore the study that complicates things.`,
                `Throw out your thesis instantly the moment any source complicates it.`,
                `Trust sources by how well they hold up, not by whether they agree with you: rely on the peer-reviewed study even though it complicates your thesis, set aside the unsourced anonymous post, and honestly adjust your argument to fit the strong evidence.`,
                `Keep both equally, treating the anonymous post and the peer-reviewed study as worth the same.`,
              ],
              correctIndex: 2,
              explanation: `This is the heart of honest research: you trust sources because they hold up under scrutiny, not because they flatter your thesis. The peer-reviewed study is strong evidence even though it complicates your argument, so you weigh it and adjust your thesis honestly; the unsourced anonymous post is weak no matter how perfectly it agrees, so you set it aside. The distractors do the opposite, cherry-picking the agreeable weak source, panicking and discarding the thesis, or wrongly treating both sources as equal.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-confirmation`, category: `Scrutinizing yourself`, prompt: `A real researcher scrutinizes sources they agree with as hard as ones they don't. Be honest: when have you believed something mainly because it confirmed what you already thought? What might change if you checked your own side's claims just as carefully?` },
            { id: `reflect-evidence`, category: `Claim and proof`, prompt: `An argument without evidence is just an opinion. Think of something you strongly believe. What actual evidence supports it, and where did that evidence come from? Is it as solid as you assumed, or have you never really checked?` },
            { id: `reflect-plagiarism`, category: `Honest credit`, prompt: `Citation is about honestly crediting whose thinking you're using. Why does giving credit matter, beyond just avoiding punishment? What does it say about a person, and about your respect for others' work, when you credit ideas honestly?` },
            { id: `reflect-heritage`, category: `Whose evidence counts`, prompt: `Caro, "credible sources" often centers certain institutions. When might valuable knowledge, including from your own Colombian or Latin American community, live in sources, elders, oral history, local experts, that formal research overlooks? How do you weigh that fairly alongside peer-reviewed evidence?` },
            { id: `reflect-bias`, category: `Following the money`, prompt: `A key question is "who benefits from this conclusion?" Pick something you've seen advertised or argued recently. Who profits if you believe it? How does asking that question change how much you trust the claim?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "you can find a source to prove anything, so research is pointless, just believe what makes sense to you." State that view as strongly as you can. Where does it have a real point about misuse, and where does it dangerously give up on truth?` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Judging evidence and citing honestly isn't just for essays, it's how you think clearly in a world full of claims. Two paths.`,
          familyActivity: {
            title: `Investigate A Viral Claim`,
            duration: `One sitting`,
            description: `Become source detectives together. As a family, pick one striking claim you've actually seen recently, a viral statistic, a health "fact," a dramatic headline, a forwarded message, something that made someone go "whoa, really?" Now investigate it the way a researcher would, out loud, together. Ask the lesson's questions: Who originally made this claim, and can you even find out? Why did they make it, who benefits if you believe it? What actual evidence is offered, or is it just "studies prove" with no study named? Can you trace it to a real, credible primary source, a named study, a reputable outlet, an expert with credentials? Try to corroborate it: do several independent, trustworthy sources agree? You'll often discover the claim is exaggerated, missing context, or completely unsourced, and occasionally you'll find it holds up, which is satisfying too. The goal isn't cynicism; it's the calm, powerful habit of asking "how do we actually know this?" before believing or sharing. In a world flooded with confident claims, this skill protects your whole family from being fooled.`,
          },
          projectOption: {
            title: `Write A Real Documented Essay, 3 weeks (optional)`,
            duration: `3 weeks, ~40 minutes per session`,
            description: `Build a full documented essay from scratch on a question you genuinely care about. Week 1, research and judge: pick an arguable question (not "are dogs nice" but something with real debate), then find at least four sources and rank them using the lesson's tools, who made each, why, when, primary or secondary, and what bias to watch. Keep careful track of where every fact comes from. Week 2, draft: write a clear thesis, then build body paragraphs using the pattern, make a point, give the evidence (mostly paraphrased in your own voice), then analyze how it proves your claim. Weave several sources together rather than summarizing them one by one, and represent the other side fairly. Week 3, cite and revise: add honest citations for every borrowed fact or idea in a consistent style, double-check you've committed no accidental plagiarism, and revise so your own argument, not your sources, drives the essay. You'll finish with a real, defensible piece of research writing, the exact skill that powers serious work in school, science, journalism, and beyond, and the deep confidence of knowing you can make a case the world has to take seriously.`,
            offerToParent: `Parent: opt your child into the documented-essay project. Researching an arguable question, ranking sources by credibility, weaving paraphrased evidence into an original argument with analysis, and citing honestly is one of the highest-value academic skills there is, foundational for high school, college, and professional life. It builds critical thinking, source literacy, integrity, and persuasive writing all at once. It's demanding, deeply CCSS-aligned work, and the payoff, a child who can build and defend a real evidence-based argument, is enormous.`,
          },
          identityQuestion: `If you become someone who makes claims backed by real evidence, judges every source by whether it holds up rather than whether it flatters you, and credits others' work honestly, what kind of thinker, and what kind of person, does that make you, in a world full of confident claims, that someone who just believes whatever agrees with them can never quite become?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who asks "how do we actually know this?" before believing it.`,
            `A person who backs up what I claim with real evidence.`,
            `Someone who judges a source by whether it holds up, not whether I like it.`,
          ],
          saveKey: `identity_responses_ela_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. Ten done, halfway through the whole ELA Voyager journey, and you've learned to build an argument the world has to take seriously. You learned that a documented essay isn't a pile of facts, it makes a claim, a thesis, and proves it with honestly sourced evidence. You learned the first real skill of research: not all sources are equal, so you judge each one, who made it, why, when, primary or secondary, what bias to watch, and lean your case on the strongest ground, trusting a source because it holds up under scrutiny, not because it agrees with you. You learned to weave evidence into your own argument, paraphrasing in your own voice, quoting sparingly, and always adding the analysis that connects each piece to your claim, because the evidence is the witness and you are the lawyer. And you learned the honesty at the heart of it all: citing your sources so readers can check you, and never committing plagiarism, the theft of others' words or ideas. This skill doesn't just power essays, it protects you from being fooled in a world full of confident claims. Next: we sharpen the argument itself, advanced argumentative writing, where you'll learn to persuade with logic, fairness, and force. Onward, {name}. — Quill`,
          badge: `research-writer`,
          badgeName: `Research Writer`,
          xpEarned: 75,
          competencies: [
            `Distinguishes a documented essay (argument + thesis + evidence) from a fact-gathering report`,
            `Judges source credibility by author, purpose, date, and primary vs. secondary status`,
            `Identifies bias and asks "who benefits from this conclusion?" when weighing a source`,
            `Weaves evidence into an argument using paraphrase, summary, and sparing quotation`,
            `Adds analysis connecting each piece of evidence to the claim it supports`,
            `Cites honestly and understands plagiarism as theft of words or ideas, even when reworded`,
            `Trusts sources because they hold up under scrutiny, not because they confirm a belief`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Argumentative Writing — Advanced`,
            hook: `Persuading with logic, fairness, and real force, and answering the other side honestly. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const src = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L10 ${VERSION}] "${l.title}" mags=${mags} sources=${src} q=${quiz}`);
}
