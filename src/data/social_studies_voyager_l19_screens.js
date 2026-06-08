// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L19 — Media Literacy in the Social Studies Classroom
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework — D1, D2, D4
// Interaction: SOURCE-EVALUATION (5 media sources). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l19-v1";

const SOCIAL_STUDIES_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-19`,
      title: `Media Literacy in the Social Studies Classroom`,
      duration: 35,
      xpReward: 75,
      badge: `media-analyst`,
      badgeName: `Media Analyst`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, media isn't a window onto the world — it's one of the primary mechanisms through which your understanding of the world is constructed. Business models, news values, algorithmic amplification, partisan framing: these forces shape what you see, what feels important, and what counts as normal. Media literacy is the skill of navigating that landscape critically. This lesson builds it.`,
          headline: `Media Literacy in the Social Studies Classroom`,
          subtitle: `How news media works, how algorithms shape information environments, and how to navigate a media landscape that is never neutral.`,
          visual: `/voyager-assets/social-studies/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `How News Media Works`,
          paragraphs: [
            `News media is not a neutral window onto the world — it is a set of institutions with owners, business models, audiences, cultural assumptions, and editorial traditions that shape what gets covered and how. Understanding how news is made is the first step to reading it critically.`,
            `Every news organization makes selection decisions: which events are newsworthy, which stories get prominent placement, which sources get quoted, which images accompany a story. These decisions reflect news values — a set of editorial criteria including novelty, conflict, prominence, human interest, proximity, and relevance to the audience.`,
            `News organizations also operate within business models that shape their journalism. Advertising-supported media have incentives to maximize audience and engagement. Subscription-based media are accountable to subscribers. Public broadcasters operate under different pressures.`,
          ],
          image: `/voyager-assets/social-studies/l19-s1-media.webp`,
          imageCaption: `NEWS MEDIA is not a neutral window. Every news organization makes SELECTION DECISIONS about which events are newsworthy, which sources are quoted, and which images accompany a story. These decisions reflect NEWS VALUES including novelty, conflict, prominence, human interest, proximity, and relevance to the audience. NEWS ORGANIZATIONS also operate within BUSINESS MODELS — advertising-supported, subscription-based, or public — that shape editorial priorities. Digital media has intensified competition for attention, creating incentives for SENSATIONALISM, OUTRAGE, and CONFLICT over nuance. Understanding how news is produced is the first step to reading it critically. Every story reflects hundreds of small editorial choices made by journalists and editors.`,
          vocab: [
            { word: `news values`,
              definition: `The editorial criteria — including novelty, conflict, prominence, human interest, and proximity — that determine which events get news coverage and how prominently they are featured.`,
              audioPrompt: `News values, {name}, are the criteria that determine what journalists and editors consider newsworthy. Events that are novel get covered; events that are ongoing and routine don't, even if they're more important. Events that involve conflict or drama get covered; events that are complex and nuanced but don't generate heat often don't. Events that affect prominent people get covered more than events that affect ordinary people with the same consequences. Events close to the audience get more coverage than events far away with the same significance. These values shape what you see when you open a news outlet — and equally importantly, what you don't see. Understanding news values helps you recognize what the media landscape systematically overcovers and undercovers.` },
            { word: `media framing`,
              definition: `The way news organizations present an issue — which aspects are emphasized, which language is chosen, which sources are included — shapes how audiences understand and evaluate it.`,
              audioPrompt: `Media framing, {name}, is one of the most powerful mechanisms through which media shapes perception. How a story is framed determines what it means. The same events can be framed as a crime story, a public health story, a poverty story, or an immigration story — and each frame leads to different conclusions about causes and solutions. The same policy can be described as a tax cut for the wealthy or tax relief for families. The same protest can be framed as a civil rights demonstration or public disorder. The sources chosen to comment on a story shape its frame: who counts as an expert, whose perspective is treated as the default, whose voice is included as an addition. Critical media literacy means asking not just what a story says but how it is framed.` },
            { word: `editorial independence`,
              definition: `The degree to which a news organization's journalism is insulated from pressures exerted by its owners, advertisers, commercial considerations, or political actors.`,
              audioPrompt: `Editorial independence, {name}, refers to how insulated a news organization's journalism is from outside pressures. A fully independent editorial operation would cover stories based entirely on their journalistic merit — regardless of whether coverage might offend advertisers, alienate the owner's business partners, or generate reader backlash. In practice, no media organization is fully independent. Owners have political and business interests. Advertisers apply pressure. Audiences expect certain framings. Understanding the ownership structure, business model, and track record of a news organization helps you assess how much editorial independence it actually maintains — and where its journalism might be shaped by pressures beyond pure journalistic judgment.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Algorithms, Bias, and Information Ecosystems`,
          paragraphs: [
            `Social media platforms have become primary news sources for large portions of the population, but they distribute information through algorithms designed to maximize engagement, not accuracy.`,
            `This creates information ecosystems: clusters of sources, communities, and content that reinforce a particular worldview and rarely expose users to challenging perspectives. Research on filter bubbles shows that algorithmic personalization tends to show people content that confirms their existing views, narrowing the range of information they encounter.`,
            `Partisan media compounds this. Media organizations explicitly targeting partisan audiences have business incentives to confirm and amplify their audience's existing views rather than challenge them. This is a deliberate editorial strategy, not the same as bias.`,
          ],
          image: `/voyager-assets/social-studies/l19-s2-algorithms.webp`,
          imageCaption: `ALGORITHMS on social media platforms distribute information to maximize ENGAGEMENT, not accuracy. Content that generates strong emotional reactions — outrage, fear, moral indignation — spreads faster and further than nuanced reporting. This creates INFORMATION ECOSYSTEMS: clusters of sources, communities, and content that reinforce a particular worldview. Research on FILTER BUBBLES shows that algorithmic personalization narrows the range of information people encounter. PARTISAN MEDIA compounds this by designing content to confirm and amplify an audience's existing views. The result: two people can inhabit completely different INFORMATION ENVIRONMENTS — seeing different facts, different experts, different framings of the same events. Understanding these dynamics is essential for navigating the modern media landscape.`,
          vocab: [
            { word: `filter bubble`,
              definition: `The condition in which algorithmic personalization and selective media consumption results in an individual primarily encountering information that confirms their existing beliefs and perspectives.`,
              audioPrompt: `A filter bubble, {name}, is the information environment created when algorithms and selective media consumption systematically show you content that confirms what you already believe. On social media, content you engage with positively gets amplified; content that challenges your views gets deprioritized. Over time, this can create a situation where your information environment consists almost entirely of sources that share your perspective, making your views seem more universal than they are and making you less equipped to understand or engage with people who see things differently. The term was coined by internet activist Eli Pariser, who noted that Google search results were personalized in ways that showed people different information based on their prior behavior. Filter bubbles are not absolute, but they represent a real tendency in algorithmic media.` },
            { word: `disinformation`,
              definition: `Disinformation is false or misleading content deliberately created to deceive; misinformation is false or misleading content spread without the intent to deceive, often by people who believe it is accurate.`,
              audioPrompt: `The distinction between disinformation and misinformation, {name}, matters for understanding the information ecosystem. Misinformation is false or misleading information spread by people who believe it is accurate: you share a news story that turns out to be wrong because you thought it was true. Disinformation is different: it is deliberately created false or misleading content designed to deceive audiences. Political propaganda, state-sponsored influence operations, and deliberately misleading advertising all count as disinformation. Both damage the information ecosystem, but they require different responses. Correcting misinformation is primarily an educational task. Combating disinformation requires also understanding who creates it, why, what interests it serves, and how it is distributed — because it is a strategic information operation, not simply an error.` },
            { word: `media ecosystem`,
              definition: `The full range of media sources, platforms, and distribution channels through which information reaches a particular audience or society, including mainstream journalism, partisan media, social media, and alternative sources.`,
              audioPrompt: `The media ecosystem, {name}, is the full range of sources, platforms, and channels through which information reaches audiences. A healthy media ecosystem has competitive, independent journalism that covers a wide range of perspectives and holds power accountable; diverse ownership; accessible quality news; and strong norms of factual accuracy. A degraded media ecosystem has concentrated ownership, weak fact-checking norms, dominant partisan outlets that prioritize tribal loyalty over accuracy, and algorithmic amplification of outrage and disinformation. Most societies have mixed ecosystems with healthy and degraded elements coexisting. Media literacy involves understanding the specific ecosystem you inhabit and where different sources fit within it.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Reading Media Across The Spectrum`,
          paragraphs: [
            `A fundamental media literacy skill is the ability to read across the ideological spectrum — not to treat all perspectives as equally valid, but to understand how different political traditions frame issues, what assumptions underlie different framings, and where genuine factual disputes exist versus where disputes are really about values and priorities.`,
            `Reading across the spectrum means understanding what conservative, progressive, libertarian, and other perspectives actually argue at their strongest — not caricatures. Every political tradition has insights that illuminate aspects of social reality that other traditions underemphasize.`,
            `Reading across the spectrum also means distinguishing between legitimate partisan disagreement and factual error. Two journalists can look at the same economic data and reach different policy conclusions based on different values — that is legitimate. One journalist can misrepresent the data — that is factual error.`,
          ],
          image: `/voyager-assets/social-studies/l19-s3-spectrum.webp`,
          imageCaption: `READING ACROSS THE SPECTRUM is a fundamental media literacy skill. Understanding how different political traditions frame issues — conservative, progressive, libertarian, and others — means understanding their STRONGEST arguments, not caricatures. Every political tradition has insights that illuminate aspects of social reality. Conservative perspectives often emphasize UNINTENDED CONSEQUENCES of policy interventions. Progressive perspectives often emphasize STRUCTURAL INEQUALITY and the experiences of marginalized groups. Critical reading also means distinguishing between LEGITIMATE PARTISAN DISAGREEMENT (different values applied to the same facts) and FACTUAL ERROR (misrepresenting the facts themselves). Media literacy means engaging seriously with genuine value disagreements while not treating factual errors as mere differences of perspective.`,
          vocab: [
            { word: `ideological framing`,
              definition: `The way political and ideological perspectives shape how an issue is defined, which causes are identified, which solutions seem natural, and whose experiences and interests are treated as primary.`,
              audioPrompt: `Ideological framing, {name}, is the way political and ideological perspectives shape how an issue is understood. The same social phenomenon can be framed very differently depending on ideological starting point. High crime rates might be framed as a law enforcement failure requiring more policing, an economic failure requiring more poverty reduction, a cultural failure requiring moral renewal, or a systemic racism failure requiring structural reform. Each frame identifies different causes and leads to different solutions. No frame is simply neutral and objective; each reflects underlying values, assumptions about what causes social problems, and which interests should be prioritized. Understanding ideological framing helps you recognize what assumptions underlie different accounts of the same events — including the accounts you find most intuitive.` },
            { word: `false balance`,
              definition: `The journalistic practice of presenting two sides of an issue as equally credible when one position has substantially stronger evidence, expertise, or factual support than the other.`,
              audioPrompt: `False balance, {name}, is a journalistic failure that results from misapplying the norm of fairness. Fairness in journalism means accurately representing the full range of credible perspectives on a contested issue. It does not mean treating all positions as equally credible regardless of the evidence. When a news story presents climate scientists and industry-funded skeptics as two equally valid scientific perspectives, it produces false balance — the misrepresentation that there is genuine scientific controversy where there is actually scientific consensus. The same problem occurs when a story about vaccine safety presents peer-reviewed evidence and discredited research as equally authoritative. False balance is a form of inaccuracy: it gives audiences a misleading picture of where the evidence actually stands.` },
            { word: `vs opinion`,
              definition: `News analysis is journalism that explains the context, significance, and implications of events without crossing into advocacy; opinion journalism explicitly advocates for particular positions and is clearly labeled as such.`,
              audioPrompt: `The distinction between news analysis and opinion, {name}, is an important but often blurry line in journalism. Hard news reports what happened: the facts, the direct quotes, the concrete events. News analysis explains what those events mean, their context, their significance, their implications — adding journalistic interpretation without explicit advocacy. Opinion journalism goes further: it explicitly argues for a particular position or policy. Well-functioning media organizations clearly label these different types of journalism so readers know what kind of content they're encountering. When these distinctions get blurred — when analysis shades into advocacy without being labeled as such, or when opinion content is presented with the authority of news reporting — readers are being misled about what kind of information they're receiving.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Verifying Claims And Assessing Sources`,
          paragraphs: [
            `Fact-checking is both a professional practice and a personal skill. Professional fact-checking organizations like PolitiFact, FactCheck.org, and Snopes systematically evaluate specific claims made by public figures and viral content.`,
            `Lateral reading is one of the most effective personal fact-checking strategies. Instead of evaluating a source by reading it deeply (vertical reading), lateral reading involves opening multiple new tabs and searching for what other sources — especially those with expertise and independence — say about the original source.`,
            `Source evaluation in the social media era also requires understanding how viral content works. False stories spread faster than true ones partly because they are designed to trigger strong emotional responses — outrage, fear, disgust, or excitement.`,
          ],
          image: `/voyager-assets/social-studies/l19-s4-factcheck.webp`,
          imageCaption: `FACT-CHECKING is both a professional practice and a personal skill. Professional fact-checking organizations like POLITIFACT, FACTCHECK.ORG, and SNOPES systematically evaluate claims made by public figures and viral content. LATERAL READING is one of the most effective personal fact-checking strategies: instead of reading a source deeply (vertical reading), lateral reading involves searching for what other independent and expert sources say about the original source. Research shows that professional fact-checkers use lateral reading instinctively and are therefore harder to fool. VIRAL CONTENT works partly by triggering strong emotional responses that bypass critical evaluation. Before sharing: check whether multiple independent sources report the same claim; search for what fact-checkers have said; and ask whether your emotional response to the story is driving your belief in it.`,
          vocab: [
            { word: `lateral reading`,
              definition: `The fact-checking strategy of searching for what credible, independent sources say about a source or claim — instead of evaluating the source itself in isolation — to quickly assess its credibility.`,
              audioPrompt: `Lateral reading, {name}, is the most effective strategy for quickly evaluating whether a source is credible. Instead of reading a source deeply and trying to evaluate it from the inside — which is what most people do and which sophisticated misinformation is designed to defeat — lateral reading means immediately opening new tabs and searching for what other sources say about the source you're evaluating. What do expert organizations in this field say about this source? Has it been fact-checked? Is it cited by reliable outlets? What is the organization or author's track record and funding? Research from the Stanford History Education Group showed that professional fact-checkers use this strategy instinctively: they don't try to evaluate a source purely from the inside; they check it against the broader information ecosystem.` },
            { word: `source provenance`,
              definition: `The origin, history, and chain of evidence for a claim or piece of information — tracing where a claim originally came from, who made it, on what basis, and how it was transformed as it spread.`,
              audioPrompt: `Source provenance, {name}, means tracing where a claim originally came from. Many false or distorted claims spread because they travel through chains of transmission where each step makes the original context and evidence harder to trace. A claim might start as a misrepresentation of a study, get amplified by a partisan outlet that strips away caveats, get shared on social media as an established fact, and end up in your feed without any trace of its origins. Establishing provenance means asking: who originally made this claim, what was the primary evidence they cited, can I access the original source, and has the claim been transformed or distorted in transmission? Provenance checking is especially important for statistical claims, which are frequently misquoted, taken out of context, or fabricated.` },
            { word: `epistemic humility`,
              definition: `The disposition to acknowledge the limits of one's own knowledge and the possibility that one's beliefs may be wrong, combined with genuine openness to revising beliefs in response to good evidence.`,
              audioPrompt: `Epistemic humility, {name}, is one of the most important intellectual virtues for navigating the modern information environment. It means acknowledging that you might be wrong — that your information environment might be systematically skewing your views, that your emotional responses might be leading you to accept false claims that confirm what you already believe, and that the experts and sources you trust might be mistaken. This doesn't mean treating all claims as equally uncertain or refusing to reach conclusions. It means holding your conclusions with appropriate tentativeness, remaining genuinely open to updating them when confronted with strong counter-evidence, and recognizing that certainty about complex empirical questions is usually unwarranted.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Media Literacy As Civic Practice`,
          paragraphs: [
            `Pull it together. News media is not neutral — it reflects the business models, ownership, editorial traditions, and cultural assumptions of the organizations that produce it. Social media algorithms amplify engagement over accuracy, creating filter bubbles and information ecosystems that can narrow the range of perspectives people encounter.`,
            `Reading critically across the ideological spectrum means understanding what different political traditions actually argue at their strongest, distinguishing legitimate value disagreements from factual errors, and recognizing how ideological framing shapes which causes and solutions seem natural.`,
            `Now you become the media analyst. Five media sources present examples of journalism, social media content, partisan media, and fact-checking challenges.`,
          ],
          image: `/voyager-assets/social-studies/l19-s5-civic.webp`,
          imageCaption: `MEDIA LITERACY AS CIVIC PRACTICE means reading critically across the ideological spectrum. NEWS MEDIA is not neutral — it reflects business models, ownership, editorial traditions, and cultural assumptions of the organizations that produce it. SOCIAL MEDIA ALGORITHMS amplify engagement over accuracy. READING CRITICALLY means distinguishing legitimate VALUE DISAGREEMENTS from factual errors, and recognizing how IDEOLOGICAL FRAMING shapes which causes and solutions seem natural. FACT-CHECKING through LATERAL READING and PROVENANCE TRACING are practical skills that operationalize these insights. EPISTEMIC HUMILITY — the disposition to acknowledge the limits of one's own knowledge and remain open to revising beliefs — is one of the most important intellectual virtues for navigating the modern information environment as a civic participant.`,
          vocab: [
            { word: `media accountability`,
              definition: `The mechanisms through which news organizations are held responsible for the accuracy, fairness, and quality of their journalism — including editorial standards, press councils, fact-checkers, media critics, and public pressure.`,
              audioPrompt: `Media accountability, {name}, refers to the mechanisms that hold news organizations responsible for the quality of their journalism. Some accountability mechanisms are internal: editorial standards, fact-checking desks, editors who review stories before publication, and ombudsmen who investigate complaints. External accountability includes independent press councils, media criticism from journalists who cover journalism, public corrections requirements, and the court of public opinion. Media literacy involves understanding how much accountability a given source operates under. A news organization with robust internal standards, a track record of issuing corrections, and accountability to professional journalism standards is more trustworthy than one that operates outside these norms — even if you find its perspective congenial.` },
            { word: `agenda setting`,
              definition: `The media's capacity to influence which issues audiences think about as important — not necessarily telling people what to think, but shaping what they think about — through decisions about coverage prominence and emphasis.`,
              audioPrompt: `Agenda setting, {name}, is one of the most well-documented effects of media on public opinion. Media organizations don't just report the news; they decide which events are newsworthy and how prominently to feature them. Research consistently shows that the issues that receive prominent media coverage are the issues that audiences report as important, regardless of their actual significance in people's lives. An issue can be genuinely important but receive minimal coverage; an issue can be relatively minor but receive saturation coverage and dominate public debate. Understanding agenda setting helps you recognize how your sense of what issues matter has been shaped by editorial choices — and motivates you to actively seek out coverage of issues that don't make the front page.` },
            { word: `civic information literacy`,
              definition: `The set of skills — evaluating sources, understanding framing, distinguishing evidence from assertion, reading across the spectrum — that enable informed civic participation in a complex information environment.`,
              audioPrompt: `Civic information literacy, {name}, is the full set of skills that enable you to participate meaningfully in democratic life despite the complexity and noise of the modern information environment. It combines the source evaluation skills you developed in the previous lesson with the media analysis skills from this one: understanding how news is produced and by whom, recognizing ideological framing and its assumptions, applying lateral reading and provenance checking to viral claims, distinguishing legitimate value disagreements from factual disputes, and maintaining epistemic humility about the limits of your own information environment. These are not optional skills for a few engaged citizens. In a democracy where major collective decisions are made through public opinion and elected representatives, everyone's civic participation depends on the quality of information that shapes their views.` },
          ],
        },

        {
          id: `l19-interaction`,
          type: `source-evaluation`,
          headline: `Five Media Sources: Analyze Each`,
          instruction: `Apply the media literacy tools from the lesson to each source. Identify the source type and business model, analyze framing choices, assess the evidence base, and evaluate whether the source meets standards of journalistic quality.`,
          sources: [
            {
              id: `src-1`,
              type: `news-article`,
              label: `Source 1: Major Newspaper Article`,
              excerpt: `"Immigration enforcement agents conducted 847 arrests in the greater metropolitan area last month, according to Immigration and Customs Enforcement data, a 34% increase over the same month last year. Officials attributed the increase to a renewed focus on individuals with prior criminal convictions, though advocates for immigrant communities said the arrests swept up longtime residents with no criminal records. 'We are seeing people who have lived here for 20 years, who have US citizen children, being detained,' said Maria Guerrero, an attorney with the Central Immigration Legal Clinic. ICE spokesperson Daniel Reyes disputed the characterization, saying 93% of those arrested had prior criminal records or were recent border crossers."`,
              analysisPrompts: [
                `What is the source type and what does that tell you about its accountability standards?`,
                `What sources does the article quote, and does the balance of sources seem appropriate to the story?`,
                `What factual claims are made, and which are contested between the sources quoted?`,
                `What information would you want to verify, and how would you do it?`,
              ],
              guidanceText: `This is a news article from a major newspaper — a source with editorial standards, fact-checking norms, and accountability mechanisms including corrections policies. The article quotes both official government sources and community advocates, representing multiple perspectives on contested claims. Critically, the article accurately presents a factual dispute: ICE claims 93% of arrests involved criminal records; advocates report long-term residents with no records being detained. A media-literate reader would note this factual dispute and want to verify it through additional reporting. The article does not resolve the factual dispute — which reflects honest journalism when the truth is contested — but it accurately represents the contention. A key limitation: the article relies on official ICE data and quotes without independent verification of those specific statistics.`,
            },
            {
              id: `src-2`,
              type: `social-media`,
              label: `Source 2: Social Media Post`,
              excerpt: `Posted by a political advocacy account with 380,000 followers: "NEW STUDY: Schools that receive federal funding are 3x more likely to suppress free speech. The Deep State is coming for your children's minds. Share this BEFORE IT GETS TAKEN DOWN 🚨🚨🚨 [Link to article on unverified website]"`,
              analysisPrompts: [
                `What techniques in this post are designed to generate emotional responses and discourage critical evaluation?`,
                `What is the source of the claim about the "3x more likely" statistic, and how would you evaluate it?`,
                `Why does the post include "BEFORE IT GETS TAKEN DOWN" and what effect is this designed to have?`,
                `How would you apply lateral reading to evaluate this claim before sharing it?`,
              ],
              guidanceText: `This post uses multiple techniques designed to bypass critical evaluation. Urgent, all-caps language creates artificial pressure to act before thinking. The claim to a specific statistic gives false precision to what may be a fabricated or distorted number. The "before it gets taken down" framing creates urgency and signals to a tribal audience that this content is being suppressed by hostile forces — increasing engagement from people predisposed to believe it. The political framing ("Deep State") signals tribal identity and activates emotional responses. A media-literate response would use lateral reading: search for the original "study" cited, check whether reputable fact-checkers have addressed this claim, and look for any reporting from credible news organizations about the study. In most cases, a post with these characteristics links to either fabricated content or severely distorted summaries of real research.`,
            },
            {
              id: `src-3`,
              type: `partisan-outlet`,
              label: `Source 3: Partisan Opinion Article`,
              excerpt: `"The so-called 'climate change' agenda is nothing more than a wealth redistribution scheme dressed up in scientific language. Every major policy proposed to address climate — carbon taxes, electric vehicle mandates, restrictions on natural gas — transfers wealth from ordinary working families to wealthy elites and foreign competitors. The real agenda has nothing to do with the climate and everything to do with government control of the economy. The scientists behind these claims are funded by the same globalist foundations pushing the policy agenda they've been paid to justify. Don't be fooled."`,
              analysisPrompts: [
                `What is the relationship between the factual claims, the value claims, and the conspiratorial claims in this excerpt?`,
                `How does the article use language to make its conclusions seem inevitable to a sympathetic reader?`,
                `What legitimate conservative arguments about climate policy does this excerpt potentially distort or replace?`,
                `Does disagreeing with this excerpt's conclusions require accepting or rejecting any scientific consensus?`,
              ],
              guidanceText: `This excerpt mixes three distinct types of claims that require different analytical responses. The claim that climate change is scientifically established is a factual matter where there is overwhelming scientific consensus — the excerpt's scare quotes around "climate change" are a misinformation technique. The claim that specific climate policies are economically harmful to working families is a legitimate policy debate where reasonable people disagree based on evidence and values. The claim that climate scientists are paid to justify a political agenda is a conspiratorial claim that contradicts the evidence. By blending these three types of claims, the article allows readers to use their reasonable concerns about specific policies to underwrite rejection of scientific consensus. A media-literate reader can accept the policy concerns while rejecting the scientific misinformation and the conspiracy framing.`,
            },
            {
              id: `src-4`,
              type: `fact-check`,
              label: `Source 4: Fact-Checking Article`,
              excerpt: `"CLAIM: 'Our country has the highest murder rate in the developed world.' RULING: FALSE. Context: While the United States has a significantly higher homicide rate than most other wealthy nations — approximately four to five times the rate of Canada, Australia, or most European countries — it does not have the highest murder rate in the world or even in the Western Hemisphere. Multiple Latin American countries, including Honduras, El Salvador, and Jamaica, have substantially higher homicide rates. The speaker's statement contains a true concern (the US homicide rate is high by wealthy-nation standards) but overstates the claim in a factually inaccurate direction."`,
              analysisPrompts: [
                `What does this fact-check illustrate about the relationship between a technically false claim and a legitimate underlying concern?`,
                `How does the fact-check handle the distinction between what is true, what is false, and what is a matter of framing?`,
                `What information would a citizen need beyond this fact-check to assess the significance of the US homicide rate?`,
                `Does a "FALSE" ruling mean that the underlying concern about US homicide rates is invalid?`,
              ],
              guidanceText: `This fact-check illustrates a crucial media literacy lesson: a claim can be technically false while reflecting a genuine and legitimate concern. The speaker's claim that the US has the world's highest murder rate is factually wrong — several countries have higher rates. But the underlying concern — that the US homicide rate is extremely high by the standards of wealthy democracies — is factually accurate and important. A media-literate reader uses the fact-check to get accurate information but doesn't use a "FALSE" ruling to dismiss the underlying concern. This also illustrates why fact-checking is not the same as political analysis: establishing a claim is false doesn't tell you what you should do about the problem the speaker was pointing to. Good fact-checking is precise about what it is and isn't settling.`,
            },
            {
              id: `src-5`,
              type: `media-criticism`,
              label: `Source 5: Media Criticism Analysis`,
              excerpt: `"Compare front-page coverage of two weeks of unemployment statistics: Outlet A ran the bad unemployment numbers in week 1 at the top of the front page with analysis of economic suffering; the good unemployment numbers in week 2 were buried on page 8 with no analysis. Outlet B ran the good numbers in week 2 at the top with celebratory framing; the bad numbers in week 1 were absent from the front page entirely. Both outlets covered the same statistics with opposite selection and prominence decisions. Neither audience received a full picture of the two-week trend. This is not disinformation — neither outlet published anything false. But it is systematic distortion through selection decisions that serve the political interests of their respective audiences."`,
              analysisPrompts: [
                `What specific media behaviors does this example illustrate, and what names would you give them?`,
                `Is this example of media behavior ethically equivalent to publishing a false story? Why or why not?`,
                `As a reader of either outlet in isolation, what would be the most media-literate way to respond to this systematic pattern?`,
                `What does this example tell you about the difference between "no false statements" and "accurate overall picture"?`,
              ],
              guidanceText: `This example illustrates how selection bias — decisions about which stories to cover, how prominently to feature them, and with what framing — can systematically distort audience perception without any false statement being published. Both outlets printed only true statistics. But through selection and prominence decisions that consistently served their audiences' political preferences, they each produced a systematically misleading picture of economic trends. This is not legally or technically the same as publishing false information, but it is a form of dishonesty: both audiences were denied the information they needed to form accurate views. The media-literate response to this pattern is consuming news from multiple sources with different editorial orientations, specifically because no single source's selection decisions will give you a complete picture. This is why media literacy is not just about avoiding false stories — it's about understanding how systematic selection creates systematic distortion.`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Media Literacy: What You Know`,
          questions: [
            {
              id: `q1`,
              type: `mc`,
              text: `News values are the editorial criteria that determine which events get news coverage. Which of the following is NOT typically considered a standard news value in professional journalism?`,
              options: [
                `Representativeness: events that accurately reflect the statistical distribution of events in the broader population`,
                `Conflict: events that involve tension, disagreement, opposition, or competition between parties`,
                `Novelty: events that are new, unusual, or represent a change from the established pattern`,
                `Prominence: events that involve well-known, powerful, or socially significant people and institutions`,
              ],
              correctIndex: 0,
              explanation: `Representativeness is NOT a standard news value — in fact, news systematically covers unusual, extreme, and prominent events rather than typical ones, which is why news consumption gives a distorted picture of everyday reality. Novelty, conflict, and prominence are all standard news values that help explain which events get covered and which don't.`,
            },
            {
              id: `q2`,
              type: `mc`,
              text: `Media framing refers to how news organizations present an issue. Which of the following best describes why framing matters for how audiences understand an issue?`,
              options: [
                `Framing determines which sources get quoted, and quotes from different sources contain different facts that audiences otherwise wouldn't encounter in isolation`,
                `Framing shapes which aspects of an issue are emphasized, which causes seem primary, which solutions seem natural, and whose experiences and interests are treated as default`,
                `Framing is primarily a visual choice about which images accompany a story, and images have stronger effects on audience perception than the written text itself`,
                `Framing refers specifically to the political ideology of the journalist writing the story, which inevitably shapes every editorial decision they make throughout the reporting`,
              ],
              correctIndex: 1,
              explanation: `Media framing shapes how an issue is understood — which aspects are emphasized, which language is used, which causes are identified, and which solutions seem natural. The same events framed as a crime story vs. a poverty story lead to fundamentally different conclusions about causes and appropriate responses. Framing is broader than just source selection, image choice, or individual journalist ideology.`,
            },
            {
              id: `q3`,
              type: `mc`,
              text: `Lateral reading is a fact-checking strategy. What makes it more effective than the alternative approach of reading a source deeply in isolation?`,
              options: [
                `Lateral reading is faster than deep reading, allowing fact-checkers to evaluate more sources in the same amount of time than they could by reading sources carefully`,
                `Deep reading of a source can reveal internal inconsistencies, while lateral reading reveals what external sources say about the source's credibility and track record`,
                `Lateral reading involves searching for what credible, independent sources say about a source, which is harder to fake than a well-designed source that appears credible in isolation`,
                `Lateral reading provides a broader perspective on an issue by exposing the fact-checker to multiple viewpoints on the same topic rather than relying on a single account`,
              ],
              correctIndex: 2,
              explanation: `Lateral reading is more effective because sophisticated misinformation is designed to appear credible when read in isolation — it uses professional design, plausible-sounding statistics, and expert-seeming language. What it can't easily fake is a credible independent track record outside its own presentation. Lateral reading — checking what external sources say about the source — is therefore harder to fool than deep reading of the source itself.`,
            },
            {
              id: `q4`,
              type: `mc`,
              text: `False balance is a specific journalistic failure. Which of the following is the most accurate description of false balance?`,
              options: [
                `False balance occurs when a news organization gives equal coverage to both sides of an issue when one side has far more relevant news events occurring and thus more legitimate claim to coverage`,
                `False balance occurs when journalists give equivalent prominence or credibility to positions that have very different levels of evidence or expert support, misrepresenting the actual state of knowledge`,
                `False balance is a form of political bias in which news organizations give equal coverage to political parties despite one party having significantly more popular support among registered voters`,
                `False balance occurs when a news story includes quotations from sources with different perspectives but fails to fact-check whether the claims made by each source are actually accurate`,
              ],
              correctIndex: 1,
              explanation: `False balance occurs when journalism presents positions with very different levels of evidence or expert support as roughly equally credible, misleading audiences about where the preponderance of evidence actually falls. The classic example is presenting climate scientists alongside industry-funded skeptics as two sides of a scientific debate when there is scientific consensus on one side. This is distinct from presenting multiple perspectives on genuine value disagreements, which is appropriate journalism.`,
            },
            {
              id: `q5`,
              type: `mc`,
              text: `The concept of a filter bubble describes a specific mechanism through which social media shapes information consumption. Which of the following most accurately describes what a filter bubble is and how it forms?`,
              options: [
                `A filter bubble forms when individuals deliberately choose to follow only sources that confirm their existing beliefs, creating a self-reinforcing cycle of exposure to one-sided content`,
                `A filter bubble forms when social media platforms legally restrict certain types of content from their platforms, preventing users from accessing information that contradicts platform guidelines`,
                `A filter bubble forms when algorithmic personalization systems show users content similar to content they've previously engaged with, gradually narrowing the range of perspectives and information they encounter`,
                `A filter bubble forms when news organizations deliberately target specific demographic audiences with tailored content designed to reinforce the political views of that audience segment`,
              ],
              correctIndex: 2,
              explanation: `A filter bubble specifically refers to the effect of algorithmic personalization: when platforms show you content based on your engagement history, they gradually narrow the range of perspectives you encounter — not because of your explicit choices (as in option A) but as an automated byproduct of engagement optimization. This distinction matters because filter bubbles can form even in people who consider themselves open-minded.`,
            },
            {
              id: `q6`,
              type: `mc`,
              text: `The distinction between misinformation and disinformation is important for understanding the information ecosystem. What is the key difference between these two concepts?`,
              options: [
                `Misinformation refers specifically to false statistical claims, while disinformation refers specifically to false narratives about events that did or didn't happen`,
                `Misinformation spreads through social media and informal channels, while disinformation is primarily distributed through professional media organizations with large audiences`,
                `Misinformation refers to content that is factually incorrect on specific details, while disinformation refers to content that creates an overall misleading impression despite containing no individually false statements`,
                `Misinformation is false or misleading content spread by people who believe it is accurate, while disinformation is deliberately created false content designed to deceive`,
              ],
              correctIndex: 3,
              explanation: `The key distinction is intent: misinformation is false or misleading content spread by people who believe it is true; disinformation is deliberately created to deceive. Both are harmful, but they require different responses. Correcting misinformation is primarily an educational and communication challenge. Combating disinformation also requires understanding who is creating it, why, what political or financial interests it serves, and how the distribution networks operate — because it is a strategic operation rather than simply an error.`,
            },
            {
              id: `q7`,
              type: `mc`,
              text: `Agenda setting refers to a well-documented media effect on public opinion. What does agenda setting specifically describe?`,
              options: [
                `The media's capacity to tell audiences what political positions to hold on major issues, directly shaping public opinion in the direction preferred by media ownership`,
                `The media's capacity to influence which issues audiences consider important through decisions about coverage prominence and emphasis, independent of what audiences then conclude about those issues`,
                `The process by which political parties and governments set the topics that media organizations cover, using press releases and official communications to determine the news agenda`,
                `The deliberate choice by media organizations to prioritize coverage of stories that generate high advertising revenue over stories that are more important but attract smaller audiences`,
              ],
              correctIndex: 1,
              explanation: `Agenda setting specifically describes how media shapes what people think about — not what they think — by determining which issues receive prominent coverage and therefore seem important. Media that covers immigration extensively makes immigration seem like a major issue; media that ignores rural poverty makes rural poverty seem less important. This effect operates separately from any direct attempt to change opinion on specific issues.`,
            },
            {
              id: `q8`,
              type: `mc`,
              text: `Reading across the ideological spectrum is a media literacy skill. What does it require that distinguishes it from simply consuming a wider variety of media?`,
              options: [
                `It requires treating all media as equally credible regardless of their factual track record, since judging credibility is itself an ideologically loaded act that no reader can perform neutrally`,
                `It requires consuming equal amounts of conservative and progressive media on each topic to ensure perfectly balanced information exposure and prevent any ideological perspective from dominating`,
                `It requires understanding what different political traditions argue at their strongest, distinguishing value disagreements from factual disputes, and recognizing how ideology shapes framing`,
                `It requires deliberately seeking out media that challenges your beliefs in uncomfortable ways, even when you believe that media contains inaccurate information and false claims`,
              ],
              correctIndex: 2,
              explanation: `Reading across the spectrum means understanding what different political traditions actually argue at their best — not caricatures — and developing the analytical capacity to distinguish legitimate value disagreements (where people with the same facts reach different conclusions based on different priorities) from factual disputes (where people are disagreeing about what is actually true). It doesn't mean treating all sources as equally credible, mechanically balancing sources, or seeking discomfort for its own sake.`,
            },
            {
              id: `q9`,
              type: `tf`,
              text: `A news article that contains only factually accurate statements cannot be misleading or produce systematic distortion in audience understanding.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False. The social media criticism example in the lesson illustrates exactly how systematic selection decisions — which accurate stories to cover, how prominently to feature them — can produce systematic distortion without any false statement being published. Both outlets in the example published only true unemployment statistics, but through opposite selection decisions, each audience received a systematically misleading picture of the two-week economic trend. Accuracy in individual statements does not guarantee accuracy in overall impression.`,
            },
            {
              id: `q10`,
              type: `inference`,
              text: `A student reads a news article about a protest. The article quotes three law enforcement officials about the protest's disruptions and one protest organizer about the protesters' goals. The article is published by a reputable news organization with strong editorial standards and contains no factually inaccurate statements. What should a media-literate reader conclude about this article?`,
              options: [
                `The article is reliable and unbiased because it was published by a reputable news organization, quotes multiple sources, and contains no factual errors`,
                `The article is unreliable because reputable news organizations consistently misrepresent protests and law enforcement officials are not credible sources on protest-related topics`,
                `The source imbalance means the article's framing is likely to emphasize the disruption dimension of the protest over the protesters' goals, creating an incomplete picture even without factual errors`,
                `The article should be trusted for factual claims but not for analysis or interpretation, since reputable outlets typically separate news reporting from opinion`,
              ],
              correctIndex: 2,
              explanation: `A media-literate reader recognizes that the source imbalance — three law enforcement voices to one organizer voice — shapes the framing regardless of whether each statement is factually accurate. Stories about protests are systematically framed differently depending on whose perspective is given most prominence. The reputable outlet status means the factual claims are more trustworthy, but the source selection decisions are still editorial choices that shape framing. The article can be trusted for the facts it contains while being recognized as an incomplete picture of the event — which is the kind of nuanced media literacy this lesson develops.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Your Information Environment`,
          prompts: [
            {
              id: `refl-1`,
              text: `Describe your primary news sources. What are their business models, ownership, and ideological orientations? What do you think they systematically undercover?`,
              minWords: 40,
            },
            {
              id: `refl-2`,
              text: `Think of a time when you believed something that turned out to be false or misleading. How did you come to believe it, and what caused you to update your view?`,
              minWords: 40,
            },
            {
              id: `refl-3`,
              text: `What issues do you feel you have a strong understanding of? How confident are you that your information environment is giving you an accurate picture of those issues?`,
              minWords: 35,
            },
            {
              id: `refl-4`,
              text: `How does understanding agenda setting change how you would use news media to stay informed about civic issues?`,
              minWords: 35,
            },
            {
              id: `refl-5`,
              text: `Design a personal media diet for staying informed as a citizen. What sources would you include, what would you read across the ideological spectrum, and what fact-checking habits would you maintain?`,
              minWords: 50,
            },
            {
              id: `refl-6`,
              text: `After five source exercises: what type of media content did you find most difficult to evaluate critically, and what does that tell you about where your media literacy skills need development?`,
              minWords: 35,
            },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          headline: `Media Literacy In Your World`,
          intro: `Media literacy is not just an academic skill — it's a daily civic practice that affects how you form beliefs, make decisions, and participate in democratic life. These challenges put it to work.`,
          challenges: [
            {
              id: `rw-1`,
              title: `The Audit`,
              description: `Spend one day tracking every piece of news and information you encounter — social media posts, news articles, conversations, podcasts, videos. At the end of the day, map it: What were the sources? What were their business models and orientations? What topics were covered? What wasn't covered? What framing dominated? Write a one-page media audit.`,
              difficulty: `medium`,
            },
            {
              id: `rw-2`,
              title: `Same Story, Different Outlets`,
              description: `Choose a current news story and read coverage of it from three news organizations with different ideological orientations. Compare: What facts are emphasized? Which sources are quoted? What is the framing? What is included and excluded? Write a 300-word comparison analyzing the differences.`,
              difficulty: `medium`,
            },
            {
              id: `rw-3`,
              title: `Lateral Reading Practice`,
              description: `Find five claims you encounter in your social media feed in one day. For each, apply lateral reading: search for what credible, independent sources say about the claim or the source that made it. Document your process and conclusions. How many claims held up? How many didn't?`,
              difficulty: `hard`,
            },
          ],
        },

        {
          id: `l19-identity`,
          type: `identity-hook`,
          headline: `Who Is This Lesson Making You?`,
          guideText: `{name}. After this lesson you understand how news is made and how business models and news values shape what gets covered. You can recognize media framing and explain what assumptions underlie different framings of the same events. You know what filter bubbles are and how algorithmic personalization creates them. You can apply lateral reading and provenance checking to evaluate claims before you share them. You understand the difference between disinformation and misinformation and what different responses each requires. That is a set of skills most adults don't have. The question now is what you do with them. Because media literacy isn't just a tool for protecting yourself from being misled — though it is that. It's also a tool for engaging more honestly with people who get their information from completely different media ecosystems. It makes it possible to have real conversations across political lines instead of talking-past-each-other performances. It makes it possible to hold your own views with appropriate tentativeness — knowing they've been shaped by your information environment and could be revised by better evidence. In the final lesson, we take everything from this band — history, geography, sociology, economics, political systems, sources, media — and ask: what does an active citizen do with all of this? See you there.`,
          saveKey: `identity_responses_social_studies_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          headline: `Media Analyst Unlocked`,
          guideText: `{name}. After this lesson you can explain how news values and business models shape coverage decisions, recognize media framing and the assumptions embedded in different framings, understand how algorithmic personalization creates filter bubbles, apply lateral reading and provenance checking to evaluate claims, and distinguish legitimate value disagreements from factual errors. These are the analytical tools that informed civic participation requires. Next: the capstone. Everything from across this band, brought to bear on the question of what active citizenship actually looks like. See you there.`,
          xpEarned: 75,
          badgeEarned: `media-analyst`,
          badgeName: `Media Analyst`,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L19;
