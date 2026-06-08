// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L18 — Research in Social Studies: Sources, Evidence, Argument
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Inquiry) — D1, D3, D4
// Interaction: SOURCE-EVALUATION (5 sources). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l18-v1";

const SOCIAL_STUDIES_VOYAGER_L18 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-18`,
      title: `Research in Social Studies: Sources, Evidence, Argument`,
      duration: 35,
      xpReward: 75,
      badge: `evidence-builder`,
      badgeName: `Evidence Builder`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}, you've been taking in information across this entire band. Now we examine the process itself: where does social studies knowledge come from, how do we evaluate it, and how do we build honest arguments from evidence? Primary sources, credibility assessment, the Claim-Evidence-Reasoning framework, logical fallacies — these are the tools of rigorous research. In a world saturated with information, they're survival skills.`,
          headline: `Research in Social Studies: Sources, Evidence, Argument`,
          subtitle: `How to evaluate sources critically, build evidence-based arguments, and engage with contested social questions with honesty and rigor.`,
          visual: `/voyager-assets/social-studies/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Primary And Secondary Sources`,
          paragraphs: [
            `Social studies research rests on sources. A primary source is original material from the historical period or event being studied: documents, letters, speeches, photographs, artifacts, census data, and firsthand accounts. A secondary source is an interpretation or analysis of primary sources, created after the fact by scholars who study the original evidence.`,
            `Primary sources are invaluable because they provide direct evidence from the time and place being studied. But primary sources are not simply objective windows onto the past: they reflect the perspectives, biases, purposes, and contexts of their creators. A photograph captures one moment and one angle. Reading primary sources critically means asking who created this and for what purpose.`,
            `Secondary sources synthesize and interpret primary evidence to build arguments about history and society. Good secondary sources cite their evidence clearly, acknowledge uncertainty and disagreement, engage honestly with evidence that challenges their argument, and distinguish between what is documented and what is inferred.`,
          ],
          image: `/voyager-assets/social-studies/l18-s1-sources.webp`,
          imageCaption: `Social studies research rests on SOURCES. A PRIMARY SOURCE is original material from the historical period or event being studied: documents, letters, speeches, photographs, artifacts, census data, laws, and firsthand accounts. A SECONDARY SOURCE is an interpretation or analysis of primary sources, created after the fact by scholars. A TERTIARY SOURCE compiles and summarizes secondary sources. Primary sources are invaluable because they provide DIRECT EVIDENCE, but they are not objective windows: they reflect the perspectives, biases, purposes, and contexts of their creators. Reading primary sources critically means asking WHO created this, FOR WHAT PURPOSE, with WHAT PERSPECTIVE, and WHAT IT DOES AND DOESN'T TELL YOU. Secondary sources synthesize and interpret primary evidence. Good secondary sources CITE EVIDENCE, ACKNOWLEDGE UNCERTAINTY AND DISAGREEMENT, ENGAGE HONESTLY WITH COUNTER-EVIDENCE, and distinguish between what is documented and what is inferred.`,
          vocab: [
            { word: `primary source`,
              definition: `Original material from the historical period or event being studied: documents, letters, speeches, photographs, artifacts, firsthand accounts, and data collected at the time.`,
              audioPrompt: `A primary source, {name}, is original material from the historical period or event being studied: a letter written by a historical figure, a government document from the period, census data collected at the time, a photograph taken in the moment, a firsthand account by someone who was there. Primary sources are invaluable because they provide direct evidence. But they are not simply objective windows onto the past: every primary source reflects the perspective, purpose, and context of its creator. A document defending a policy tells you how its author wanted the policy perceived; a photograph captures one moment from one angle chosen by a photographer with a particular purpose. Reading primary sources critically means asking: who created this, for what purpose, and what does it and doesn't it tell me?` },
            { word: `secondary source evaluation`,
              definition: `The critical assessment of scholarly interpretations of primary sources, examining whether they cite evidence clearly, acknowledge uncertainty, engage with counter-evidence, and distinguish documented facts from inferences.`,
              audioPrompt: `Secondary source evaluation, {name}, is how you assess whether the scholarly works you read are rigorous and trustworthy. Good secondary sources have several characteristics: they cite their evidence clearly so you can check it; they acknowledge what they don't know and where evidence is uncertain; they engage honestly with evidence that challenges their argument rather than ignoring it; and they distinguish clearly between what is directly documented and what is the researcher's interpretation or inference. When you read a secondary source and it doesn't cite specific evidence, ignores counter-evidence, or presents inferences as certain facts, those are warning signs that the source may not meet high standards of scholarly rigor.` },
            { word: `bias perspective`,
              definition: `The ways in which every source reflects the particular perspective, purposes, and context of its creator, requiring critical readers to account for these factors in evaluating what a source does and doesn't tell us.`,
              audioPrompt: `Source bias and perspective, {name}, are not reasons to dismiss a source but crucial dimensions to account for in evaluating what it tells us. Every source, primary or secondary, reflects the perspective of its creator: their social position, their interests, their cultural assumptions, their purposes in creating the source, and their historical context. A government document defending a colonial policy reflects how colonial administrators thought about their work; it doesn't tell you how colonized people experienced it. A newspaper article reflects the political orientation of the publication and the choices of an individual reporter. Recognizing perspective doesn't mean a source is useless; it means you need to read it in light of whose perspective it represents and what those perspectives might lead the source to emphasize or omit.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Evaluating Source Credibility`,
          paragraphs: [
            `Not all sources are equally credible. Evaluating source credibility involves assessing several dimensions: the expertise and credentials of the author, the evidence base the source draws on, whether the source has been peer-reviewed or editorially scrutinized, the transparency of the source about its methods and evidence, and the reputation of the publication.`,
            `In the digital age, source evaluation has become both more important and more difficult. The internet has democratized access to information but also created vast ecosystems of misinformation, partisan advocacy disguised as neutral reporting, and content optimized for engagement rather than accuracy.`,
            `Several practical tools can help evaluate sources. The SIFT method: Stop before sharing or accepting a claim; Investigate the source's background and reputation; Find better coverage from multiple reputable sources; and Trace claims to their original sources. The CRAAP test examines Currency, Relevance, Authority, Accuracy, and Purpose.`,
          ],
          image: `/voyager-assets/social-studies/l18-s2-credibility.webp`,
          imageCaption: `Not all sources are equally CREDIBLE. Evaluating source credibility involves assessing: EXPERTISE AND CREDENTIALS of the author; EVIDENCE BASE the source draws on; whether the source has been PEER-REVIEWED OR EDITORIALLY SCRUTINIZED; TRANSPARENCY about methods and evidence; REPUTATION of the publication or organization; and whether the source ACKNOWLEDGES UNCERTAINTY AND COUNTER-EVIDENCE. The SIFT METHOD: Stop before sharing or accepting a claim; INVESTIGATE the source's background and reputation; FIND BETTER COVERAGE from multiple reputable sources; TRACE claims to their original sources to verify they say what they're claimed to say. The CRAAP TEST examines Currency (how recent), Relevance (appropriate for the question), Authority (expertise of author), Accuracy (evidence-based and verifiable), and Purpose (informational vs. advocacy).`,
          vocab: [
            { word: `peer review`,
              definition: `The process by which scholarly research is evaluated by other experts in the field before publication, providing a quality control mechanism that filters out research with serious methodological flaws.`,
              audioPrompt: `Peer review, {name}, is one of the most important quality control mechanisms in academic research. Before a scholarly article is published in a reputable academic journal, it is evaluated by other experts in the same field who assess whether the research methods are sound, the evidence supports the claims, and the conclusions are appropriate. This doesn't guarantee that peer-reviewed research is correct, but it does mean it has passed a rigorous scrutiny that most other sources have not. When you see that a study was published in a peer-reviewed journal, that's a meaningful signal that it has met basic standards of scholarly rigor. When a claim circulates on social media without citation to any peer-reviewed research, that's a meaningful warning sign.` },
            { word: `the SIFT method`,
              definition: `A practical source evaluation framework: Stop before sharing a claim; Investigate the source; Find better coverage; Trace claims to their original sources.`,
              audioPrompt: `The SIFT method, {name}, is a practical tool for evaluating sources in the digital information environment. Stop: before you share or act on information, pause and don't let the emotional reaction drive you to spread it before evaluating it. Investigate: check the source's reputation and background, not just the content itself. Find better coverage: look for how other sources report on the same claim; if a dramatic claim appears in only one place, be skeptical. Trace: find the original source of a claim to verify it says what it's being claimed to say, because claims often get distorted as they travel across the internet. These four steps won't catch everything, but they will protect you from spreading a great deal of misinformation.` },
            { word: `misinformation and disinformation`,
              definition: `Misinformation is false information spread without deliberate intent to deceive; disinformation is false information spread deliberately to mislead. Both are prevalent in the digital information environment.`,
              audioPrompt: `Misinformation and disinformation, {name}, are related but distinct concepts. Misinformation is false information spread without deliberate intent to mislead: people sharing something they believe to be true that isn't. Disinformation is false information spread deliberately to mislead: intentional deception for political, financial, or other purposes. Both are enormously prevalent in the digital information environment. Research shows that false information spreads faster on social media than true information, partly because it tends to be more emotionally activating. Developing the habit of verifying before sharing, and being especially skeptical of information that makes you feel strongly confirmed in your existing views, is one of the most important information hygiene practices of the digital era.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Building Evidence-Based Arguments`,
          paragraphs: [
            `A well-constructed argument consists of a clear claim (what you're asserting), evidence (the specific facts, data, or examples that support the claim), reasoning (the logical connection that explains why the evidence supports the claim), and acknowledgment of counter-evidence.`,
            `Evidence in social studies can take several forms. Statistical data (census figures, economic data, survey results) can provide quantitative support for claims about social patterns and trends. Historical examples provide concrete cases that illustrate or support general claims.`,
            `A crucial element of honest argumentation is engaging seriously with counter-evidence. The most common intellectual dishonesty in social studies is cherry-picking: presenting only the evidence that supports your argument while ignoring the evidence that challenges it.`,
          ],
          image: `/voyager-assets/social-studies/l18-s3-argument.webp`,
          imageCaption: `A well-constructed argument in social studies consists of: a clear CLAIM (what you're asserting); EVIDENCE (the specific facts, data, or examples that support the claim); REASONING (the logical connection explaining why the evidence supports the claim); and ACKNOWLEDGMENT OF COUNTER-EVIDENCE (other evidence that challenges the claim and how you address it). This is the CLAIM-EVIDENCE-REASONING (CER) FRAMEWORK. Evidence in social studies can take several forms: STATISTICAL DATA (census figures, economic data, survey results); HISTORICAL EXAMPLES (concrete cases that illustrate general claims); EXPERT CONSENSUS (when scholars broadly agree); and FIRSTHAND ACCOUNTS AND CASE STUDIES (specific situations that test whether general claims apply). A crucial element of honest argumentation: engaging seriously with COUNTER-EVIDENCE. The most common intellectual dishonesty is CHERRY-PICKING: presenting only supportive evidence while ignoring challenging evidence.`,
          vocab: [
            { word: `Claim-Evidence-Reasoning`,
              definition: `A framework for constructing academic arguments: a clear claim (assertion), specific evidence (facts, data, examples), logical reasoning (connecting evidence to claim), and acknowledgment of counter-evidence.`,
              audioPrompt: `Claim-Evidence-Reasoning, or CER, {name}, is the framework for building rigorous academic arguments in social studies. A claim is what you're asserting, the position you're taking. Evidence is the specific facts, data, or examples that support your claim; "evidence" doesn't mean general impressions or widely held beliefs, it means specific, verifiable information. Reasoning is the logical connection that explains why the evidence supports the claim; this is where you show your analytical thinking, not just list facts. And the strongest arguments also acknowledge and address counter-evidence, the evidence that challenges your claim. When you read any argument, try to identify these components: if evidence or reasoning is missing, the argument is weak regardless of how confident it sounds.` },
            { word: `cherry-picking`,
              definition: `The intellectual dishonesty of presenting only the evidence that supports your argument while ignoring the evidence that challenges it, producing a misleadingly one-sided case.`,
              audioPrompt: `Cherry-picking, {name}, is one of the most common forms of intellectual dishonesty in arguments about social and political questions. It's the practice of presenting only the evidence that supports your position while ignoring, suppressing, or failing to seek out the evidence that challenges it. Cherry-picked arguments can be technically accurate, every piece of evidence cited may be real and correct, while still being fundamentally misleading because they present a one-sided picture of a complex evidence base. Learning to recognize cherry-picking, and to actively seek out counter-evidence when building your own arguments, is one of the most important intellectual skills in social studies.` },
            { word: `social studies`,
              definition: `The different forms of evidence used in social studies research: statistical data, historical examples, expert consensus, and firsthand accounts, each with different strengths and appropriate uses for different kinds of claims.`,
              audioPrompt: `Types of evidence in social studies, {name}, include several forms that are appropriate for different kinds of claims. Statistical data, census figures, economic data, survey results, can provide quantitative support for claims about social patterns and trends, but you need to understand who collected the data and how. Historical examples provide concrete cases that illustrate or test general claims, but single examples can't establish general patterns by themselves. Expert consensus, when scholars in a field broadly agree, is itself evidence about the state of knowledge, but you need to assess whether it represents the genuine consensus of experts rather than a minority view being presented as consensus. Each type of evidence has both strengths and limitations.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Logical Fallacies And Common Errors`,
          paragraphs: [
            `Logical fallacies are errors in reasoning that make arguments invalid regardless of the truth of their premises. Several are common in social and political arguments. Ad hominem attacks the person rather than the argument. Straw man misrepresents an opponent's argument in a weaker form that's easier to attack.`,
            `In social studies, several other errors are common. Overgeneralization draws broad conclusions from limited cases. Presentism judges past events by present-day values without understanding historical context. Whataboutism deflects criticism of one thing by pointing to something else.`,
            `Understanding these fallacies is particularly important in an era of polarized politics and social media.`,
          ],
          image: `/voyager-assets/social-studies/l18-s4-fallacies.webp`,
          imageCaption: `LOGICAL FALLACIES are errors in reasoning that make arguments invalid regardless of the truth of their premises. Common examples: AD HOMINEM attacks the person rather than the argument. STRAW MAN misrepresents an opponent's argument in a weaker form that's easier to attack. FALSE DICHOTOMY presents only two options when more exist. CORRELATION VS. CAUSATION confuses "two things occur together" with "one causes the other." In social studies specifically: OVERGENERALIZATION draws broad conclusions from limited cases. PRESENTISM judges past events by present-day values without understanding historical context. WHATABOUTISM deflects criticism by pointing to something else. ANECDOTE SUBSTITUTES FOR EVIDENCE by using a single story as if it established a general pattern. Social media content designed to manipulate views often works by exploiting these reasoning errors: presenting FALSE DICHOTOMIES, using EMOTIONAL ANECDOTES instead of evidence, or ATTACKING MESSENGERS rather than arguments.`,
          vocab: [
            { word: `causation`,
              definition: `The distinction between two variables occurring together (correlation) and one variable causing the other (causation), one of the most important and most frequently confused distinctions in social science research.`,
              audioPrompt: `Correlation versus causation, {name}, is one of the most important and most frequently confused distinctions in social science. When two things tend to occur together, they're correlated: ice cream sales and drowning rates both go up in summer. But correlation does not mean one causes the other: ice cream doesn't cause drowning; they're both correlated with summer heat. Establishing causation is much harder than establishing correlation: you need to rule out alternative explanations (confounding variables), establish that the cause precedes the effect, and ideally have a plausible mechanism explaining how the cause produces the effect. Much poor social reasoning mistakes correlation for causation.` },
            { word: `historical analysis`,
              definition: `The error of judging people and events of the past by the standards and values of the present, without adequately understanding the historical context in which they made their choices.`,
              audioPrompt: `Presentism in historical analysis, {name}, is the error of judging historical actors and events by contemporary standards without adequate attention to their historical context. It's not wrong to make moral judgments about history, but those judgments need to be grounded in understanding: what options were available to people in their context? What values and knowledge were widely shared at the time? What did people know and not know? Presentism dismisses historical complexity by applying today's moral framework as if it were always obvious and available. This doesn't mean historical atrocities weren't wrong; it means that understanding history requires understanding the contexts in which choices were made, not just the contemporary verdict on those choices.` },
            { word: `whataboutism`,
              definition: `A rhetorical tactic that deflects criticism of one thing by pointing to another, without actually addressing the original criticism. Common in political arguments, it is logically invalid because another party's wrongdoing doesn't justify or excuse your own.`,
              audioPrompt: `Whataboutism, {name}, is a rhetorical tactic that's very common in political arguments: when confronted with a criticism of one's own behavior or position, responding by pointing to another party's behavior as if that response addressed the original criticism. "How can you criticize what we did when they did something similar?" is the classic form. Whataboutism is logically invalid because another party's wrongdoing doesn't justify, excuse, or address your own. It's a distraction technique, not a refutation. Recognizing it helps you stay focused on the actual argument at hand rather than being led into a comparison game that never resolves the original question.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Sources`,
          paragraphs: [
            `Pull it together. Social studies research rests on primary sources (original material from the period being studied) and secondary sources (scholarly interpretations).`,
            `Building rigorous arguments requires the CER framework: clear claims supported by appropriate evidence (statistical data, historical examples, expert consensus, firsthand accounts) connected by explicit reasoning, and honestly engaging with counter-evidence. Cherry-picking, presenting only supportive evidence, is the most common form of intellectual dishonesty.`,
            `Now you become the research analyst. Five source exercises present real or representative sources of different types: a government document, a scholarly article, a news article, a social media post, and a historical primary source.`,
          ],
          image: `/voyager-assets/social-studies/l18-s5-before.webp`,
          imageCaption: `Threads together. SOCIAL STUDIES RESEARCH rests on PRIMARY SOURCES (original material from the period being studied) and SECONDARY SOURCES (scholarly interpretations). Both require critical reading: primary sources reflect the perspective of their creators; secondary sources must be evaluated for their evidence base, transparency, and engagement with counter-evidence. Evaluating SOURCE CREDIBILITY involves assessing expertise, evidence quality, peer review, transparency, and reputation, using tools like SIFT and CRAAP. Rigorous arguments use the CER FRAMEWORK: clear claims supported by appropriate evidence connected by explicit reasoning, and honestly engaging with counter-evidence. CHERRY-PICKING is the most common form of intellectual dishonesty. LOGICAL FALLACIES undermine reasoning even when the underlying facts may be accurate. Five source exercises follow. Apply the evaluation tools: identify source type, assess credibility, identify fallacies or cherry-picking, evaluate the evidence base, and assess what the source does and doesn't tell us. Onward.`,
          vocab: [
            { word: `research analyst skills`,
              definition: `The integrated set of skills for evaluating sources, building arguments, and recognizing logical errors that enable rigorous engagement with social studies content and information in general.`,
              audioPrompt: `Research analyst skills, {name}, are the integrated toolkit for engaging honestly and rigorously with information in social studies and in the world. They include: evaluating sources for their type, credibility, and perspective; building arguments with the CER framework that acknowledge counter-evidence; recognizing logical fallacies and rhetorical manipulations; distinguishing correlation from causation; understanding the difference between documented facts and inferences; and engaging with contested questions in ways that are honest about uncertainty. These are not just academic skills: they are the foundation for informed citizenship in an era of information abundance and manipulation. The source exercises that follow will put this toolkit to work on real-world material.` },
            { word: `social studies`,
              definition: `The recognition that many important questions in social studies are genuinely contested among scholars, involving real uncertainty, value disagreements, and ongoing debate, requiring intellectual humility and honest engagement with disagreement.`,
              audioPrompt: `Contested knowledge in social studies, {name}, is the recognition that many of the most important questions in history, economics, political science, and sociology are genuinely contested: scholars disagree, evidence is incomplete, values shape interpretations, and the "right answer" is not always clear. This is different from saying all views are equally valid; some claims are better supported by evidence than others. But it means that engaging honestly with social studies requires intellectual humility: acknowledging what you don't know, what scholars disagree about, and where your own values and perspectives are shaping your interpretation. Pretending certainty where there is genuine uncertainty is its own form of intellectual dishonesty.` },
            { word: `the research standard`,
              definition: `The standard of intellectual rigor in social studies research: clear claims, specific evidence, transparent reasoning, honest engagement with counter-evidence, and acknowledgment of uncertainty.`,
              audioPrompt: `The research standard, {name}, is the set of expectations that distinguish rigorous social studies work from advocacy, opinion, or poorly supported assertion. It requires: clear and specific claims (not vague assertions); specific evidence (not general impressions); transparent reasoning that connects evidence to claim; honest engagement with counter-evidence (not cherry-picking); and acknowledgment of uncertainty where it exists (not false confidence). When you evaluate any source or argument, you're essentially asking: does this meet the research standard? And when you build your own arguments, the goal is to apply that same standard to yourself. The source evaluations that follow will practice applying this standard to diverse source types.` },
          ],
        },

        {
          id: `l18-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Source Evaluations`,
          intro: `{name}, you're the research analyst now. For each source, apply the critical reading skills from the lesson: identify the source type, assess credibility, identify any logical fallacies or cherry-picking, evaluate the evidence base, and assess what the source does and doesn't tell us. Not all sources are equally credible or useful, but even weak sources can tell us something about their context.`,
          sources: [
            {
              id: `s1`,
              title: `A government press release on immigration policy`,
              type: `Government document (primary source)`,
              excerpt: `"The Department of Homeland Security reports that border enforcement actions have increased 47% over the previous fiscal year, demonstrating the success of the administration's border security strategy. The number of successful interceptions has risen substantially, protecting American communities and the integrity of our immigration system. The administration remains committed to secure borders and orderly immigration processes that reflect our nation's values."`,
              context: `This is a press release from a government agency, intended for public distribution and media coverage. It was released during a period of significant political debate over immigration policy. It does not include any statistical methodology, comparison to previous periods, or definition of key terms.`,
              questions: [
                `What type of source is this, and what does that tell you about how to read it?`,
                `What information does this source provide, and what information does it omit that would be essential for evaluating its claims?`,
                `What logical or rhetorical issues do you notice in how the claims are framed?`,
              ],
              evaluation: `This source is a government press release, which is a primary source in the sense that it reflects how a government agency characterized its own work at a particular moment. Understanding what it is tells you immediately how to read it: press releases are not balanced reporting or scholarly analysis; they are advocacy documents designed to present a government agency's work in the most favorable light possible. They are useful sources of information about how government agencies want to be perceived and what claims they were making at a particular time, but they require significant critical reading before they can be used as evidence in a social studies argument. The source has several significant issues from an evidence quality perspective. The statistic (47% increase in "border enforcement actions") is presented without any methodology: what counts as an "enforcement action," and how was it counted? Statistics without methodology are often impossible to evaluate. The claim of "success" is asserted rather than argued: what criteria define success in border enforcement, who set those criteria, and does a 47% increase in enforcement actions actually meet them? The "successful interceptions" is defined only as increasing "substantially" without a specific number. The phrase "protecting American communities" implies that the absence of the enforcement actions would have led to harm to communities, which is an assumed causal claim that is not supported by any evidence in the release. "Orderly immigration processes that reflect our nation's values" invokes widely shared language ("our nation's values") without specifying what values these are or how the policy reflects them, which is a rhetorical technique designed to invoke agreement without providing a basis for it. What is omitted is as important as what is included: there is no information about immigration court backlogs, humanitarian conditions at the border, the costs of enforcement, the effects on asylum seekers, the accuracy of the claim about previous years' comparison, or any evidence about whether the policy is achieving its stated goals. As a social studies research analyst, you'd use this source as evidence of what the administration claimed its policy was achieving during this period, while recognizing that it provides no reliable evidence for evaluating whether those claims are accurate.`,
            },
            {
              id: `s2`,
              title: `A peer-reviewed economic study on minimum wage effects`,
              type: `Scholarly secondary source`,
              excerpt: `"We examine the employment effects of minimum wage increases in 138 local labor markets across the United States from 2010-2019, using a border discontinuity design that compares counties on either side of state borders with different minimum wage laws. Our analysis finds no statistically significant effect of minimum wage increases on total employment levels in the restaurant sector, though we find evidence of reduced hours per worker. These findings are consistent with recent empirical literature suggesting that moderate minimum wage increases have smaller employment effects than predicted by simple supply-demand models. [Published in the Journal of Economic Perspectives, with data and methodology available at the authors' website.]"`,
              context: `This excerpt is from a peer-reviewed economics article that uses a specific research methodology (border discontinuity design) to isolate the effects of minimum wage increases on employment. The full article is 45 pages and includes detailed methodology, robustness checks, and engagement with prior literature.`,
              questions: [
                `What features of this source indicate that it meets high standards of scholarly rigor?`,
                `What are the limits of what this study can tell us about minimum wage policy, and what would be needed for a complete picture?`,
                `How does this source's approach to uncertainty and counter-evidence differ from the government press release?`,
              ],
              evaluation: `This source has multiple features that indicate it meets high standards of scholarly rigor, and examining those features helps illustrate what rigorous research looks like in contrast to advocacy documents like press releases. The research methodology is explicitly stated and justified: the "border discontinuity design" is a specific econometric technique designed to address the fundamental challenge of isolating minimum wage effects (if you simply compare states with and without minimum wage increases, many other factors differ). By comparing counties on either side of the same state border, the researchers control for many regional factors that might otherwise confound the comparison. This is not a perfect methodology, and any sophisticated reader would want to understand its limitations, but its use represents a serious attempt to address a genuine methodological challenge rather than simply asserting a correlation. The study specifies its evidence base precisely: 138 local labor markets, a specific time period (2010-2019), and a specific sector (restaurant). This precision allows evaluation of whether the evidence base is appropriate for the claims being made and where its limits might apply. The findings acknowledge uncertainty ("no statistically significant effect") and distinguish between total employment and hours per worker, a more nuanced finding that acknowledges that the outcome may not be a simple binary. The study explicitly locates itself in a broader scholarly literature ("consistent with recent empirical literature"), showing awareness of and engagement with prior research rather than treating itself as the only word on the subject. The data and methodology are available for verification, meeting one of the key standards of scholarly transparency. What are the limits of this study? It focuses on the restaurant sector, which may not generalize to all sectors. It studies "moderate" minimum wage increases, and the findings may not apply to larger increases. It uses data from 2010-2019, and conditions may have changed. It doesn't examine all potential effects of minimum wage increases (effects on income distribution, poverty rates, business formation, or other outcomes). A complete picture of minimum wage policy effects would require research examining multiple outcomes, multiple sectors, multiple time periods, and multiple contexts. This is the honest acknowledgment of limitation that distinguishes rigorous scholarship from advocacy: one good study is evidence, not proof.`,
            },
            {
              id: `s3`,
              title: `A news article on climate change and natural disasters`,
              type: `Journalism (secondary source)`,
              excerpt: `"This year has seen record-breaking natural disasters across the globe, and scientists say climate change is making them worse. Hurricane intensity has increased by 15% compared to 30 years ago, according to a study from NOAA. 'We are seeing what we predicted,' said Dr. Andrea Morales, a climate scientist at the University of Colorado. 'The warming ocean gives hurricanes more energy to feed on.' A spokesman for the American Petroleum Institute, responding to the report, said the industry was 'committed to addressing climate change while maintaining American energy security.'"`,
              context: `This excerpt is from a news article published in a general audience newspaper. The journalist quoted one climate scientist and one industry spokesperson. The full article is 800 words and includes links to the referenced NOAA study.`,
              questions: [
                `What are the strengths and limitations of this news article as a source for understanding the relationship between climate change and hurricanes?`,
                `How does the article's structure (quoting a scientist and an industry spokesperson) affect its evidential value?`,
                `What additional sources or information would you need to build a rigorous argument about climate change and hurricane intensity?`,
              ],
              evaluation: `This news article illustrates both the value and the significant limitations of journalism as a source for social studies research, and analyzing it carefully helps distinguish what journalism can and can't reliably tell us. The article has several strengths. It cites a specific study from a named and reputable institution (NOAA), which allows verification. It provides a specific statistic (15% increase in hurricane intensity over 30 years) with a source. It quotes an identified expert (Dr. Andrea Morales) with stated credentials (climate scientist, University of Colorado). The inclusion of a link to the referenced study allows the reader to verify the citation and assess whether the article accurately represents it. These are all features that distinguish this article from much worse journalism. The limitations are also significant. A single scientist's quote cannot represent the state of scientific consensus on a topic; the selection of which scientists to quote involves journalistic judgment about who is most articulate or quotable, not necessarily who is most authoritative. The "balance" structure of the article, quoting both a scientist and an industry spokesperson, is one of the most problematic conventions in journalism on topics like climate change: it creates a false equivalence between scientific expertise on the mechanisms of climate change and an industry advocacy organization's response, which is not providing scientific evidence but a public relations statement. The industry spokesman's quote says nothing about the science; it makes an organizational commitment claim. Treating it as a counterweight to a scientist's statement misrepresents the epistemic situation. The specific statistic (15% increase) would need to be verified against the actual NOAA study: does the study actually say 15%, for what type of hurricanes, over what exact time period, and with what level of confidence? News articles frequently simplify or slightly misrepresent the findings of complex studies. A rigorous social studies argument about climate change and hurricanes would not rely on a news article as its primary source; it would go to the NOAA study itself, examine its methodology, check whether its findings are consistent with the broader scientific literature, and engage with the debates within the scientific community about climate change and hurricane attribution.`,
            },
            {
              id: `s4`,
              title: `A social media post on immigration statistics`,
              type: `Social media content`,
              excerpt: `"FACT: Immigration has increased crime rates dramatically. In [City X], violent crime has gone up 35% since the city declared itself a sanctuary city in 2018. Liberals won't tell you this! Share if you believe in law and order. #BorderSecurity #AmericaFirst"`,
              context: `This post appeared on a political social media account with 150,000 followers. It does not cite a source for the statistics. Fact-checking organizations have found that overall violent crime rates in [City X] did increase by approximately that percentage, but the increase began two years before the sanctuary city declaration and is attributed by local law enforcement to economic factors rather than immigration policy.`,
              questions: [
                `What evaluation tools would you apply to this social media post, and what do they reveal?`,
                `What logical fallacies or evidence issues do you identify in this post?`,
                `How does the context information about the city's actual crime data affect your analysis of the post?`,
              ],
              evaluation: `This social media post is a useful example for applying source evaluation skills precisely because it represents a very common type of problematic content: it uses real statistics in a way that is technically partially accurate but deeply misleading due to cherry-picking, a false causal claim, and political framing designed to provoke an emotional response rather than inform. Applying the SIFT method reveals several immediate red flags. The post does not cite any source, which means the statistical claim ("35%") cannot be verified. The framing ("FACT:") and the call to action ("Share if you believe in law and order") and the hashtags (#BorderSecurity #AmericaFirst) are signals that this is political advocacy, not information. The claim that "liberals won't tell you this!" is an ad hominem gesture that implies the information is suppressed, which is both untrue (this kind of claim circulates widely) and irrelevant to whether the statistics are accurate or the causal inference valid. The logical fallacy at the center of the post is a correlation-causation error combined with omission of crucial context. The context information confirms that crime did increase by approximately the stated percentage, which means the statistic itself is not fabricated. But it omits that the increase began before the sanctuary city declaration, which is the crucial contextual information that breaks the implied causal link between immigration policy and crime rates. This is cherry-picking: selecting a true statistic while omitting the context that makes it impossible to support the causal claim. The post implies (without stating) that the sanctuary city policy caused the crime increase. But temporal precedence is one of the basic requirements for establishing causation: a cause must precede its effect. If crime increased before the sanctuary city declaration, the declaration cannot be the cause of the increase. Additionally, the post attributes the causal mechanism to immigration without providing any evidence that immigration rates changed in a way that could explain the crime change; it simply assumes that a sanctuary city policy change affected immigration rates in ways that affected crime rates, without any evidence for either link in that causal chain. As a research analyst, you'd conclude that this post takes a real statistic, strips it of the context that reveals it cannot support the implied causal argument, adds inflammatory framing to provoke emotional sharing, and provides no methodology or source that would allow verification. It is an excellent example of how technically accurate statistics can be used to support a deeply misleading argument.`,
            },
            {
              id: `s5`,
              title: `An excerpt from a Latin American independence document`,
              type: `Primary historical source`,
              excerpt: `"We, the representatives of the peoples of this territory, exercising the natural and imprescriptible rights of nations to determine their own governance, hereby declare that the bonds of political subjection between this territory and the Crown of Spain are and ought to be dissolved. We found this declaration on the universal principles of justice and human dignity, and on the particular experience of three centuries during which the wealth and labor of these lands has enriched distant monarchs while leaving their people in subjection and poverty. We call upon all nations that cherish liberty to recognize our sovereignty."`,
              context: `This is an excerpt from a South American independence declaration from the early nineteenth century, written by the creole elite (American-born descendants of Europeans) who led the independence movement. Indigenous and African-descended people were not represented in the drafting process and were largely excluded from political participation in the new republic.`,
              questions: [
                `What can this primary source tell us about the independence movement, and what are its significant limitations as a source?`,
                `How does knowing the social composition of the document's authors affect how you read its claims about "peoples" and "human dignity"?`,
                `What other primary sources would you need to get a more complete picture of the independence period?`,
              ],
              evaluation: `This primary source document is a valuable and important historical source precisely because analyzing it carefully reveals both what primary sources can tell us and what their significant limitations are, and because it illustrates the concept of source perspective in a particularly instructive way. What can this source tell us? It provides direct evidence of how the leaders of the independence movement framed their cause: in the language of natural rights, national self-determination, and human dignity. It tells us the ideological framework they invoked (Enlightenment principles about natural rights and the illegitimacy of political subjection). It tells us how they characterized the colonial relationship (three centuries of wealth extraction leaving the people in poverty). It tells us who they saw as their audience (other nations that might recognize their sovereignty). It tells us that they were aware of and chose to invoke the international legitimacy discourse of their era. All of this is genuine historical information about the independence movement's ideological character and self-presentation. But the source has very significant limitations that the context information reveals. The document was written by the creole elite: American-born descendants of Europeans who had substantial economic and social interests in independence from Spain but who also had interests in maintaining the social hierarchies within the territory. When the document speaks of "the peoples of this territory" and "human dignity," it is using universal language that was not, in practice, applied universally. Indigenous and African-descended people, who constituted the majority of the population in many regions, were not represented in the drafting process and were largely excluded from political participation in the new republics. The phrase "subjection and poverty" describes the experience of the colonial relationship, but the creole elite writing this document were not the most subjected or impoverished people in the territory; they were the relatively privileged group who held economic power and chafed at political dependence on Spain. A complete historical analysis of the independence period would require additional primary sources: accounts and documents reflecting the perspectives of Indigenous communities (what did they think independence would mean for them?), African-descended peoples (particularly those who were enslaved), rural workers and urban poor, and women, none of whom are represented in this document. The independence document is valuable evidence of how the creole elite thought about and justified their movement; it is not adequate evidence for how independence was experienced by the full population of the territory.`,
            },
          ],
          synthesisPrompt: `After all five sources: what patterns do you notice in how different source types have different strengths and limitations? What is the most important lesson about source evaluation that you'd carry forward? How does understanding these evaluation skills change how you'll approach information you encounter in the future? In 5-6 sentences, reflect on the integrated skill of rigorous source evaluation.`,
          reflectionPrompt: `The information landscape you navigate daily is full of sources with different levels of rigor, transparency, and honesty. How do the source evaluation skills from this lesson change how you think about your own information consumption and what responsibilities you have as a sharer of information?`,
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the difference between a primary source and a secondary source in social studies research?`,
              options: [
                `Primary sources are more important; secondary sources are less reliable and should be avoided in serious academic research whenever primary sources are available.`,
                `A primary source is original material from the period or event being studied; a secondary source is a scholarly interpretation or analysis of primary sources created after the fact.`,
                `Primary sources are exclusively government documents, while secondary sources are exclusively peer-reviewed academic articles published in scholarly journals by credentialed researchers.`,
                `Primary sources are written by participants or witnesses to the events being studied; secondary sources are written by observers who analyze those primary materials after the fact.`,
              ],
              correctIndex: 1,
              explanation: `A primary source is original material from the historical period or event being studied (documents, letters, speeches, firsthand accounts, data); a secondary source is a scholarly interpretation or analysis of primary sources created after the fact. The distractors falsely rank them by importance, limit primary sources to government documents, or incorrectly define secondary sources as written by observers.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the SIFT method help you do, and what does each letter stand for?`,
              options: [
                `A scientific framework for designing research studies: Sample, Investigate, Frame, Test.`,
                `A source evaluation framework: Stop (before sharing), Investigate (the source), Find better coverage, Trace claims to their original sources.`,
                `A reading comprehension strategy with four steps: Skim, Identify main ideas, Find supporting details, Translate into simple language.`,
                `An argument building framework: State your claim, Identify evidence, Form a conclusion, Test your reasoning.`,
              ],
              correctIndex: 1,
              explanation: `SIFT is a source evaluation framework: Stop (pause before sharing or accepting a claim), Investigate (the source's background and reputation), Find (better coverage from multiple reputable sources), and Trace (claims to their original sources to verify they say what they're claimed to say). The distractors describe research design, reading comprehension, or argument building frameworks.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are the components of the Claim-Evidence-Reasoning (CER) framework for building arguments?`,
              options: [
                `A clear claim, specific evidence, logical reasoning connecting evidence to claim, and acknowledgment of counter-evidence.`,
                `Context, Explanation, Result, which is a framework for structuring persuasive essays and presentations in social studies classes.`,
                `Conclusions, Examples, Reflection, which is a framework for post-assignment evaluation and self-assessment rather than argument construction.`,
                `Correlation, Evidence, Research, which is a framework used in statistical analysis to identify relationships between variables rather than construct arguments.`,
              ],
              correctIndex: 0,
              explanation: `The CER framework consists of a clear claim (what you're asserting), specific evidence (facts, data, examples that support the claim), logical reasoning (explaining why the evidence supports the claim), and acknowledgment of counter-evidence (engaging honestly with challenges to the argument). The distractors use the same letters for different concepts.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "cherry-picking" in argumentation, and why is it a form of intellectual dishonesty?`,
              options: [
                `Selecting only the strongest arguments to present, which is actually a sign of rigorous research and intellectual honesty rather than a form of intellectual dishonesty.`,
                `The practice of deliberately choosing your examples and citations exclusively from high-quality and reputable sources rather than poor ones.`,
                `Presenting only the evidence that supports your argument while ignoring or omitting the evidence that challenges it, producing a misleadingly one-sided picture of a complex evidence base.`,
                `Choosing your research topic based on personal interest rather than scholarly significance, which social scientists sometimes call "convenience sampling" in the research design stage.`,
              ],
              correctIndex: 2,
              explanation: `Cherry-picking is the practice of presenting only the evidence that supports your argument while ignoring or omitting the evidence that challenges it. It's a form of intellectual dishonesty because it produces a misleadingly one-sided picture: the cited evidence may be accurate, but the overall argument is distorted by what's left out. The distractors describe selecting strong arguments, choosing quality sources, or selecting research topics.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "presentism" in historical analysis?`,
              options: [
                `The practice of deliberately focusing only on current events and completely ignoring all historical context when analyzing social issues.`,
                `The error of judging people and events of the past by the standards and values of the present, without adequately understanding the historical context in which they made their choices.`,
                `A historical method that focuses primarily on economic factors in explaining events, associated with Marxist historiography and materialist analysis of social and political change.`,
                `The practice of using present-day data to make projections about future historical trends.`,
              ],
              correctIndex: 1,
              explanation: `Presentism in historical analysis is the error of judging past people and events by contemporary standards without adequately understanding the historical context in which they made their choices. It's not wrong to make moral judgments about history, but those judgments need to be grounded in understanding the contexts, options, and knowledge available at the time. The distractors describe focusing on current events, economic history, or future projections.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the logical fallacy in the reasoning: "After the new mayor took office, unemployment rose. Therefore the new mayor's policies caused unemployment to rise."`,
              options: [
                `Ad hominem: attacking the mayor's character rather than the policy, which would involve criticizing personal attributes of the mayor to discredit the policy argument without addressing its merits.`,
                `Straw man: misrepresenting the mayor's policies to make them easier to criticize, which would involve distorting or exaggerating the policy position to argue against a weakened version of the mayor's actual argument.`,
                `Correlation vs. causation: confusing the fact that two things occurred in sequence (new mayor, rising unemployment) with the claim that one caused the other, without establishing actual causal mechanisms.`,
                `False dichotomy: the logical fallacy of presenting only two available options when in fact many more exist and the available evidence would support consideration of additional alternatives.`,
              ],
              correctIndex: 2,
              explanation: `This is a correlation vs. causation fallacy (sometimes called post hoc ergo propter hoc: "after this, therefore because of this"): just because unemployment rose after the new mayor took office doesn't mean the mayor's policies caused it. Many other factors could explain the unemployment increase. The distractors describe ad hominem, straw man, and false dichotomy fallacies, which don't apply to this example.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is the "balance" convention in journalism (quoting both a scientist and an industry spokesperson on climate change) potentially misleading in social studies research?`,
              options: [
                `Because journalists should only quote scientists, never industry representatives, since industry representatives are biased parties who cannot provide accurate information about the effects of their industry's activities.`,
                `Because it creates a false equivalence between scientific expertise on factual questions and an advocacy organization's public relations statement, misrepresenting the state of knowledge.`,
                `Because industry representatives are never knowledgeable about climate science and therefore cannot offer any factually accurate information whatsoever about climate science or its policy implications.`,
                `Because the convention prevents journalists from forming and expressing their own independent opinions on contested issues and from making clear to readers which factual claims are accurate and which are not.`,
              ],
              correctIndex: 1,
              explanation: `The "balance" convention creates a false equivalence between scientific expertise (evidence about causal mechanisms) and an industry advocacy organization's statement (a public relations response), misrepresenting the epistemic situation: these are not two equally informed perspectives on a factual question. The distractors claim journalists should exclude industry voices, deny industry knowledge, or focus on journalist opinions.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `When analyzing a historical primary source like an independence declaration, what is the most important question to ask about source perspective?`,
              options: [
                `Whether the document is written in formal or informal language, which tells you about the intended audience and register but does not tell you about the document's perspective or purpose.`,
                `Whether the document was originally written by hand or printed by a printing press or other mechanical device, which tells you about its production context but does not reveal anything about the perspective of its creator.`,
                `Who created this document, for what purpose, from whose perspective, and what perspectives and experiences it does not represent, since all primary sources reflect the viewpoint of their creators.`,
                `Whether the document has been preserved in its original form or edited by later historians, which is a relevant consideration in textual criticism but is not the most important question for reading a primary source.`,
              ],
              correctIndex: 2,
              explanation: `The most important question about source perspective for a historical primary source is who created it, for what purpose, from whose perspective, and what perspectives it does not represent, because all primary sources reflect the viewpoint of their creators and may omit or misrepresent the experiences of those not represented in the creation process. The distractors focus on language formality, writing method, or preservation, which are less fundamental to critical source reading.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A source that contains true and accurate statistics must be considered a reliable and honest source for building arguments in social studies, because factual accuracy is the primary standard for source reliability.`,
              correctAnswer: false,
              explanation: `False, and the social media post case study in this lesson illustrates exactly why: a source can contain technically accurate statistics while still being deeply misleading and dishonest as an argument, because the honesty and reliability of a source for argumentative purposes depends on much more than whether individual statistics are accurate. Several dimensions beyond factual accuracy determine whether a source meets the research standard. First, context and completeness: the social media post contained an accurate statistic about crime rates in a city, but omitted the crucial context that the increase began before the policy change that was implied to have caused it. This omission transformed an accurate statistic into a misleading argument. Cherry-picking accurate statistics while omitting contradicting context or alternative explanations is one of the most common forms of intellectual dishonesty, precisely because each individual piece of evidence may be technically accurate. Second, causal claims: a source can accurately report a correlation (two things occurred together or in sequence) while dishonestly implying causation. The social media post accurately reported that crime increased after the sanctuary city declaration, but dishonestly implied (without stating) that one caused the other. A reliable source for social studies arguments must be honest about the difference between documented correlations and established causal relationships. Third, framing and purpose: a source can present accurate statistics within a framing designed to produce a predetermined conclusion or emotional reaction rather than to inform. This is the difference between reporting and advocacy, and both can contain accurate statistics while serving very different epistemic purposes. Fourth, logical validity: even arguments based on accurate premises can be logically invalid if the reasoning connecting evidence to conclusion is flawed. Factual accuracy is a necessary but not sufficient condition for reliability. The full standard for a reliable social studies source includes: specific and verifiable evidence; transparent methodology; honest engagement with counter-evidence and alternative interpretations; appropriate causal claims; and a purpose of informing rather than manipulating. So the statement is false: factual accuracy is necessary but not sufficient; cherry-picking, causal fallacies, and misleading framing can all produce dishonest arguments from accurate statistics.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student is writing a paper arguing that a particular economic policy caused an improvement in living standards. They cite three studies supporting their claim and do not mention two peer-reviewed studies with contradicting findings that they found in their research. Using the lesson, how would you evaluate this approach to argumentation?`,
              options: [
                `This is good research practice, because citing the strongest supporting evidence is appropriate.`,
                `This is an example of cherry-picking: the student is presenting only the supportive evidence while omitting the counter-evidence they found, which is a form of intellectual dishonesty that violates the research standard of honest engagement with the full evidence base.`,
                `This is acceptable because peer-reviewed studies can always be disputed.`,
                `This is fine because the paper only needs to argue one side of the question.`,
              ],
              correctIndex: 1,
              explanation: `This is cherry-picking: the student found five relevant studies, cited the three supporting their argument, and omitted the two contradicting it, violating the research standard of honest engagement with the full evidence base. A rigorous argument would cite all relevant evidence and address why the supporting evidence is more compelling despite the contradicting findings. The distractors falsely endorse selective citation, dismiss peer review, or confuse argumentative writing with advocacy.`,
            },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-information`, category: `Your information landscape`, prompt: `The information landscape you navigate daily is full of sources with different levels of rigor, transparency, and honesty. How do the source evaluation skills from this lesson change how you think about your own information consumption and what responsibilities you have as a sharer of information?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, you may have thought primarily about whether information is "true" or "false." What surprised you most about how sources can be technically accurate while still being misleading, and how does that change how you evaluate information you encounter?` },
            { id: `reflect-argument`, category: `Honest argumentation`, prompt: `The research standard requires engaging honestly with counter-evidence even when you disagree with it. How do you think that standard applies to how you argue your own positions on contested social and political questions, and how hard is it to apply in practice?` },
            { id: `reflect-heritage`, category: `Teaching research skills`, prompt: `Caro, you're building social studies for conscious families. How would you help a child develop genuine critical thinking about information, rather than just skepticism of views they disagree with, so they apply the same rigor to sources that confirm their existing beliefs as to those that challenge them?` },
            { id: `reflect-social-media`, category: `The social media question`, prompt: `Social media amplifies misinformation, false causal claims, and cherry-picked statistics faster than true information spreads. What responsibilities do you think individuals have when deciding what to share, and what responsibilities do platform companies have for the information ecosystems they create?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `The research standard of honest engagement with counter-evidence is easy to endorse but hard to practice, especially when you care deeply about an issue. Think of a topic you feel strongly about. How rigorous have you been about seeking out and engaging honestly with the strongest counter-evidence? What would it take to meet the full research standard on that topic?` },
          ],
        },

        {
          id: `l18-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Build Your Research Skills`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a research skills practice session that builds rigorous thinking habits for the whole family. Start with source evaluation practice: each person finds one piece of information they recently encountered (a news article, a social media post, a claim a friend made) and applies the SIFT method to it. What do you find? Share your evaluations and discuss what makes each source more or less reliable. Practice the CER framework: choose a current social or political issue your family has views on and have each person construct a short CER argument: what's your claim? What specific evidence supports it? What's the reasoning connecting evidence to claim? What counter-evidence exists, and how would you address it? Evaluate each argument for cherry-picking and logical fallacies. Find the primary source: take a claim you commonly see in news or social media about a social issue and trace it back to its original source. Does the original source say what it's claimed to say? How has the claim been distorted or simplified as it traveled? Practice spotting fallacies: watch or read a political debate, speech, or social media argument and identify as many logical fallacies as you can find: ad hominem, straw man, false dichotomy, correlation-causation confusion, whataboutism. Reflect on contested questions: discuss a social question that your family finds genuinely contested, where you don't have certainty. Practice acknowledging that genuine uncertainty honestly rather than pretending confidence. The goal is to build the habits of mind that distinguish rigorous thinking from motivated reasoning: actively seeking counter-evidence, tracing claims to their sources, distinguishing correlation from causation, and recognizing when framing is designed to manipulate rather than inform.`,
          },
          projectOption: {
            title: `The Research Skills Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Apply rigorous research skills to a real social studies question, building a complete, honest, evidence-based argument that meets the research standard. Week 1, choose a question and gather diverse sources: choose a genuine social studies question that is interesting and contested, preferably one connected to your family's heritage or a current issue you care about. Research the question using multiple source types: find at least one primary source, one peer-reviewed secondary source, one journalistic source, and one source you're skeptical of (perhaps a government document or advocacy organization report). For each source, apply the evaluation tools: source type, credibility assessment, identification of logical issues, evidence base, and what the source does and doesn't tell you. Keep careful notes on what you're learning about the question and about the sources. Week 2, build and evaluate your argument: using the CER framework, build a rigorous argument about your question that cites specific evidence from multiple sources, explains your reasoning, acknowledges the strongest counter-evidence, and is honest about what remains uncertain. Then evaluate your own argument: have you cherry-picked? Are there logical fallacies in your reasoning? Have you engaged honestly with the counter-evidence? Have you distinguished correlation from causation? Revise your argument based on this self-evaluation. Produce your final piece, an evidence-based essay, a "research brief" presenting what you found and how confident you are in different claims, a source evaluation portfolio analyzing each source you used, or a debate preparation document presenting both the strongest argument for your position and the strongest counter-argument, that demonstrates the integrated skills of source evaluation, argument construction, and honest engagement with uncertainty.`,
            offerToParent: `Parent: opt your child into the Research Skills Project. Building a rigorous evidence-based argument about a real social studies question, evaluating multiple source types, applying the CER framework, engaging honestly with counter-evidence, and practicing the full research standard, directly develops C3 Framework inquiry skills: constructing compelling questions, evaluating sources, constructing and presenting evidence-based arguments, and engaging honestly with uncertainty and disagreement. These are not just social studies skills; they are foundational critical thinking skills that apply across every domain and to every information challenge your child will face.`,
          },
          identityQuestion: `If you become someone who applies the research standard to information you encounter, who evaluates sources critically rather than accepting what confirms your existing views, who builds arguments honestly by engaging with counter-evidence, and who can recognize logical fallacies and cherry-picking in your own thinking as well as others', what kind of citizen and thinker does that make you, one who engages with the information landscape and with contested social questions with genuine intellectual integrity, that someone who only consumes information uncritically never can?`,
        },

        {
          id: `l18-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who evaluates sources critically rather than accepting information that confirms my existing views.`,
            `A person who builds arguments honestly by engaging with counter-evidence, not just supportive evidence.`,
            `Someone who can recognize cherry-picking and logical fallacies in my own thinking as well as others'.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_18`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just built one of the most important and transferable intellectual toolkits in the social studies curriculum: the ability to evaluate sources, construct rigorous arguments, and recognize the errors and manipulations that undermine good thinking. You learned the distinction between primary and secondary sources and how to read each critically with attention to perspective and purpose. You built a framework for evaluating source credibility using SIFT and the research standard. You learned the CER framework for constructing honest, evidence-based arguments that engage with counter-evidence rather than cherry-picking. You identified key logical fallacies, including correlation-causation confusion, presentism, and whataboutism, that undermine reasoning even when individual facts are accurate. And through five source evaluations, from a government press release to a peer-reviewed study to a social media post to a historical primary source, you practiced applying these skills to the kinds of sources you'll actually encounter. These skills don't just make you a better social studies researcher. They make you a more resilient and rigorous thinker in every domain of life. The final two lessons of the Social Studies Voyager band bring it all together: media literacy and active citizenship. Onward, {name}. — Atlas`,
          badge: `evidence-builder`,
          badgeName: `Evidence Builder`,
          xpEarned: 75,
          competencies: [
            `Distinguishes primary and secondary sources and reads each with attention to perspective and purpose`,
            `Can evaluate source credibility using multiple criteria including the SIFT method and CRAAP test`,
            `Builds evidence-based arguments using the Claim-Evidence-Reasoning framework`,
            `Understands the intellectual dishonesty of cherry-picking and actively seeks counter-evidence`,
            `Can identify logical fallacies including ad hominem, straw man, false dichotomy, correlation-causation confusion, presentism, and whataboutism`,
            `Can analyze sources of different types for their strengths, limitations, and evidential value`,
            `Applies the research standard of honest engagement with uncertainty and counter-evidence`,
          ],
          nextLessonPreview: {
            title: `Lesson 19: Media Literacy in the Social Studies Classroom`,
            hook: `How to read media critically, understand how media shapes our understanding of social reality, and navigate the contemporary information landscape. A Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L18;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L18.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L18 ${VERSION}] "${l.title}" mags=${mags} sources=${cs} q=${quiz}`);
}
