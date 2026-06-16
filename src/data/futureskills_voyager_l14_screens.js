// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L14 — Emotional Intelligence
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Psychology, Self-Awareness
// CALIBRATED: Voyager spec v1.1 (May 2026) — honest about what EI research actually shows
// Interaction format: SOURCE EVALUATION (academic EI research / popular Goleman framing / viral self-help)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l14-v1";

const FUTURESKILLS_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-14`,
      title: `Emotional Intelligence`,
      duration: 35,
      xpReward: 75,
      badge: `emotion-literate`,
      badgeName: `Emotion Literate`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, you've probably heard "EQ matters more than IQ." It's one of the most repeated lines in popular psychology. It's also more wrong than the popular version suggests. Emotional intelligence is a real construct that real researchers have studied for over three decades, and the actual findings are useful but more modest than the pop version claims. Today we look at three sources: the peer-reviewed academic research that started the field, Daniel Goleman's 1995 popular book that made EQ a household concept, and viral self-help content that overstates everything. By the end you'll have a calibrated view of what emotional intelligence really is, what it actually predicts, and how to develop it without falling for either dismissal or hype.`,
          headline: `Emotional Intelligence`,
          subtitle: `Real EI research vs pop framings vs viral self-help. The honest picture.`,
          visual: `/voyager-assets/future-skills/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Emotional Intelligence Actually Is`,
          paragraphs: [
            `The term "emotional intelligence" was coined by psychologists Peter Salovey (Yale) and John Mayer (University of New Hampshire) in a 1990 academic paper. Their framing was specific: emotional intelligence is the ability to perceive emotions, understand emotions, use emotions to facilitate thinking, and regulate emotions in oneself and others. Each of these is measurable through specific tests. The construct emerged from careful research, not self-help marketing.`,
            `Their model distinguishes four branches. First: perceiving emotions accurately, both in yourself and in others (reading facial expressions, body language, tone of voice, your own internal signals). Second: using emotions to facilitate thinking (recognizing when emotion is providing useful information and when it's interfering with reasoning). Third: understanding emotions (knowing how emotions develop, transition, and combine). Fourth: managing emotions (regulating your own emotional responses and influencing others' emotions appropriately).`,
            `Salovey and Mayer developed specific tests (like the MSCEIT, the Mayer-Salovey-Caruso Emotional Intelligence Test) that measure these abilities. The tests have established reliability and validity. People score differently on them. The scores predict some real-world outcomes, though more modestly than pop versions claim. The research has accumulated for over 30 years and is still active.`,
            `Importantly, the academic version distinguishes ability EI (what you can do, measured through performance tests) from trait EI (what you report about yourself, measured through self-report questionnaires). These two correlate but are not the same thing. Self-report measures tend to capture personality more than ability. Performance measures are harder to game. Most popular EQ content uses self-report measures, which is part of why their predictive validity is weaker than the academic field's better measures.`,
          ],
          image: `/voyager-assets/future-skills/l14-s1-real.webp`,
          imageCaption: `Real EI is a measurable construct with four branches. Salovey and Mayer 1990, peer-reviewed research since.`,
          vocab: [
            {
              word: `emotional intelligence`,
              definition: `Construct introduced by Peter Salovey and John Mayer (1990): ability to perceive emotions, use them to facilitate thinking, understand them, and regulate them. Measured through performance tests like the MSCEIT. Distinct from "trait EI" measured through self-report. Modest predictive validity for some workplace outcomes. Real construct studied for over 30 years.`,
              audioPrompt: `Emotional intelligence in its academic version is a construct introduced by Peter Salovey at Yale and John Mayer at the University of New Hampshire in a 1990 paper, {name}. The ability to perceive emotions accurately, use them to facilitate thinking, understand how they develop and combine, and regulate them in yourself and others. Four branches. Each measurable through specific tests. The construct emerged from careful research, not from self-help marketing. The main academic test is the MSCEIT, the Mayer-Salovey-Caruso Emotional Intelligence Test, which measures performance on emotion-related tasks rather than asking people to rate themselves. Important distinction: ability EI (what you can do, measured by performance) is different from trait EI (what you report about yourself). They correlate but are not the same. Performance measures tend to be more useful predictors than self-report.`,
            },
            {
              word: `ability EI`,
              definition: `Emotional intelligence measured as actual performance on emotion-related tasks, as opposed to what people report about themselves. The four-branch Salovey-Mayer model is an ability model: it asks what you can do with emotions, not how you rate your own emotional skills. Measured through tests like the MSCEIT. Harder to game than self-report; tends to be a stronger predictor of real-world outcomes.`,
              audioPrompt: `Ability EI is emotional intelligence measured as actual performance on emotion-related tasks, {name}. It asks: what can you actually do with emotions? Can you accurately read facial expressions and body language? Can you identify how emotions develop and combine? Can you regulate your own emotional responses effectively? This is distinct from trait EI, which is what you report about yourself on self-report questionnaires. Both are real measures, but they capture different things. Self-report measures of EI tend to capture personality traits more than actual emotional abilities. Performance measures like the MSCEIT, the Mayer-Salovey-Caruso Emotional Intelligence Test, ask you to perform tasks rather than rate yourself. They're harder to game because there are correct answers. People with high ability EI perform well on the tasks, not just on their self-assessment. Most popular EQ content uses self-report measures, which is part of why their predictive validity is weaker than the academic field's better performance-based measures.`,
            },
            {
              word: `four branches`,
              definition: `The four components of the Salovey-Mayer model of emotional intelligence: perceiving emotions (reading facial expressions, body language, internal signals), using emotions to facilitate thinking, understanding emotions (how they develop, transition, and combine), and managing emotions (regulating your own and influencing others'). Each is measurable and represents a distinct ability.`,
              audioPrompt: `The four branches are the four components of the Salovey-Mayer model of emotional intelligence, {name}. First: perceiving emotions accurately, in yourself and in others — reading facial expressions, body language, tone of voice, and your own internal signals. Second: using emotions to facilitate thinking — recognizing when emotion is providing useful information and when it's interfering with reasoning. Third: understanding emotions — knowing how emotions develop, transition from one to another, and combine. Understanding that frustration often precedes anger, or that pride and guilt can coexist. Fourth: managing emotions — regulating your own emotional responses and influencing others' emotions appropriately. Each branch is measurable through specific performance tests. People differ on each. The four-branch model emerged from careful academic research and is distinct from Daniel Goleman's popular version, which expanded EI to include a much wider range of personality traits and competencies that the academic field doesn't necessarily consider part of EI proper.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What EI Research Has Actually Found`,
          paragraphs: [
            `Three decades of research have produced a moderately clear picture, though some specifics remain contested. EI is a real measurable construct. People differ in it. The differences are partly stable (related to personality, temperament) and partly malleable (can be improved with deliberate training). The construct correlates with some real-world outcomes including job performance in certain roles, relationship quality, and mental health, but the correlations are typically modest (often r=0.2 to 0.3, meaning EI accounts for somewhere around 5 to 10 percent of variance).`,
            `Marc Brackett at Yale developed the RULER program (Recognize, Understand, Label, Express, Regulate) for teaching emotional skills in schools. His research, published in peer-reviewed journals, has shown that explicit emotional skill instruction can improve students' performance on emotion-related tasks, reduce classroom conflict, and modestly improve academic outcomes. The effects are real but moderate. They require sustained instruction over months and years, not single workshops.`,
            `Meta-analyses (studies that combine results from many individual studies) have shown that ability EI predicts job performance with effect sizes similar to general cognitive ability for certain emotional-labor roles (customer service, teaching, leadership). For other roles where emotional skills matter less (technical work, routine tasks), the predictive validity is much weaker. This nuance is usually missing from pop EI content, which claims EI predicts everything.`,
            `The honest summary. EI is real and worth developing. The specific claims about EI being more important than IQ, predicting life success better than other factors, or being the secret to leadership are overstated relative to what the research actually shows. The skills underneath EI (perceiving, understanding, managing emotions in yourself and others) are genuinely useful across many contexts. They're learnable. The pop framing of "develop high EQ and you'll succeed at everything" is more marketing than science.`,
          ],
          image: `/voyager-assets/future-skills/l14-s2-research.webp`,
          imageCaption: `EI is real, modestly predictive of some outcomes, learnable. Not the magic key to everything that pop versions suggest.`,
          vocab: [
            {
              word: `predictive validity`,
              definition: `How well a measure predicts a relevant real-world outcome. Higher validity means the measure tells you something useful about future behavior. EI's predictive validity for some workplace outcomes is real but modest (typically r=0.2 to 0.3). Pop versions often overstate predictive validity dramatically.`,
              audioPrompt: `Predictive validity is how well a measure predicts a relevant real-world outcome, {name}. Higher predictive validity means the measure tells you something useful about future behavior. A measure of cognitive ability has high predictive validity for academic performance because the correlation is strong. EI's predictive validity is real but modest. Typically the correlation is around 0.2 to 0.3 for outcomes like job performance in emotionally-relevant roles, meaning EI accounts for around 5 to 10 percent of variance in those outcomes. This is real and useful, but it's not the dramatic predictor that pop versions often claim. Knowing about predictive validity protects you from overstating what any measure tells you. A measure can be real, measurable, and useful while still having modest rather than dramatic predictive power.`,
            },
            {
              word: `RULER program`,
              definition: `Emotional skills training program developed by Marc Brackett at the Yale Center for Emotional Intelligence. RULER stands for Recognize, Understand, Label, Express, Regulate. Peer-reviewed research has shown it modestly improves emotion-related performance, reduces classroom conflict, and produces small academic gains. Effects are real but require sustained instruction over months and years, not single workshops.`,
              audioPrompt: `The RULER program is an emotional skills training program developed by Marc Brackett at the Yale Center for Emotional Intelligence, {name}. RULER stands for Recognize, Understand, Label, Express, Regulate. Brackett's research, published in peer-reviewed journals, has shown that explicit emotional skill instruction using this program can improve students' performance on emotion-related tasks, reduce classroom conflict, and modestly improve academic outcomes. The effects are real but moderate. They require sustained instruction over months and years. A single workshop doesn't produce durable changes. The RULER program represents the academic field's evidence-based approach to teaching emotional skills. The research is honest about effect sizes, acknowledges where evidence is stronger or weaker, and engages with the limits of what EI training can accomplish. This is distinct from pop EI content, which promises dramatic transformation. Meta-analyses combining results from many individual studies have confirmed that emotional skill instruction in schools produces real, if modest, benefits.`,
            },
            {
              word: `meta-analysis`,
              definition: `Research study that combines results from many individual studies to produce a more reliable overall estimate. More powerful than any single study because it averages across different samples, methodologies, and contexts. Meta-analyses of EI research have shown modest but real predictive validity for some workplace outcomes. The technique is how researchers detect genuine effects from inconsistent individual studies.`,
              audioPrompt: `A meta-analysis is a research study that combines results from many individual studies to produce a more reliable overall estimate of an effect, {name}. More powerful than any single study because it averages across different samples, methodologies, and contexts. Individual studies can produce conflicting results due to small samples or specific conditions. Meta-analyses combine many studies to detect what's actually happening across the full body of research. Meta-analyses of emotional intelligence research have shown that ability EI predicts job performance with real but modest effect sizes for certain emotionally-intensive roles like customer service, teaching, and leadership. For roles where emotional skills matter less, the predictive validity is weaker. This nuance is usually missing from pop EI content, which claims EI predicts everything. Meta-analyses are one of the most reliable tools in research because they reduce the influence of any single study's quirks. When you see a meta-analysis cited for a claim about psychology or any field, that's a stronger form of evidence than a single study.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Daniel Goleman And The Pop Version`,
          paragraphs: [
            `Daniel Goleman, a science journalist, published "Emotional Intelligence: Why It Can Matter More Than IQ" in 1995. The book sold over five million copies and made EQ a household term. It also significantly oversold what the research showed at the time, and the framing has been criticized by academic EI researchers including Salovey and Mayer themselves.`,
            `What Goleman got right. EI is a real construct worth taking seriously. Emotional skills are learnable. They matter for some workplace and life outcomes. Schools and workplaces benefit from explicit attention to emotional skill development. These claims are well-supported and the book helped bring useful ideas into mainstream conversation.`,
            `What Goleman overstated. The book's central claim that EI matters MORE than IQ for life success has not been supported by subsequent research. IQ (or general cognitive ability) remains the strongest single predictor of academic and many job outcomes. EI predicts some additional variance for certain roles, but it doesn't replace cognitive ability. The book also expanded EI to include a wide range of personality traits and competencies that the academic field doesn't necessarily consider part of EI proper. This made the construct fuzzier and easier to overclaim.`,
            `The deeper pattern. Goleman wrote an accessible book about an interesting academic finding. The book's success was driven partly by its dramatic claims. Subsequent decades of research showed the dramatic claims were overstated, but the popular version retained the original framing. This pattern is common across many "science of X" popular books: the popular version often outpaces the research, and the research catches up but doesn't catch the popular conversation. The honest move is reading both the popular version AND what the research has subsequently shown.`,
            `One important note. Criticizing Goleman's overclaim isn't the same as dismissing EI. Many of Goleman's underlying ideas are valuable. Schools that adopted emotional learning programs after his book often produced real benefits for students. The construct is genuinely useful even at its more modest evidence-based level. The skill is holding both: take EI seriously while being honest about what the evidence actually supports.`,
          ],
          image: `/voyager-assets/future-skills/l14-s3-goleman.webp`,
          imageCaption: `Goleman 1995: real ideas, oversold claims. The construct is genuinely useful at the more modest evidence-based level.`,
          vocab: [
            {
              word: `popular science overreach`,
              definition: `Common pattern where popular books about academic research overstate the research's claims. The book sells well; the claims enter mainstream conversation; subsequent research often shows the dramatic claims were overstated but the popular version persists. Important to recognize because most public understanding of psychology, nutrition, and similar fields runs through popular books.`,
              audioPrompt: `Popular science overreach is a common pattern where popular books about academic research overstate the research's claims, {name}. The book sells well, partly because of its dramatic claims. The claims enter mainstream conversation. Subsequent research often shows the dramatic claims were overstated. But the popular version persists in public understanding even after the research has moved on. This pattern is common across many "science of X" popular books. Most public understanding of psychology, nutrition, parenting, business research, and similar fields runs through popular books rather than through the underlying academic literature. Knowing the pattern protects you from accepting any single popular book as the final word on a topic. The honest move is reading both the popular version and checking what the research has subsequently shown.`,
            },
            {
              word: `science journalist`,
              definition: `Writer who translates academic research into accessible content for general audiences. Quality varies enormously. Daniel Goleman had a PhD in psychology and was a former New York Times science writer — a credentialed journalist writing about real research. His 1995 book popularized real academic findings while significantly overstating the evidence. Science journalists are not the same as academics; their work requires additional verification.`,
              audioPrompt: `A science journalist is a writer who translates academic research into accessible content for general audiences, {name}. Daniel Goleman, who wrote the 1995 book "Emotional Intelligence: Why It Can Matter More Than IQ," was a science journalist with a PhD in psychology and a background as a former New York Times science writer. He was credentialed and writing about real research. His book sold over five million copies and made EQ a household term. It also significantly oversold what the research showed at the time. The book's central claim that EI matters more than IQ for life success was criticized by the academic EI researchers including Salovey and Mayer themselves, and has not been supported by subsequent research. Goleman illustrates both the value and the risk of science journalism. The value: translating real academic findings into mainstream conversation. The risk: dramatic claims sell books; academic nuance doesn't. Goleman is not the same category as viral self-help, but he's also not the same as peer-reviewed academic research. Science journalists sit in between, requiring their own calibrated reading.`,
            },
            {
              word: `overclaim`,
              definition: `Making a claim that goes beyond what the evidence actually supports. The central overclaim of Goleman's EI book: that EQ matters MORE than IQ for life success. This has not been supported by subsequent research, which shows IQ remains the strongest single predictor of academic and many job outcomes. EI adds modestly but doesn't replace cognitive ability. Recognizing overclaims requires comparing what the popular version says to what the underlying research actually shows.`,
              audioPrompt: `An overclaim is a statement that goes beyond what the evidence actually supports, {name}. The central overclaim of Daniel Goleman's 1995 emotional intelligence book is that EQ matters more than IQ for life success. This dramatic framing drove the book's popularity. Subsequent decades of research have not supported it. IQ, or general cognitive ability, remains the strongest single predictor of academic and many job outcomes. Emotional intelligence adds modestly for certain emotionally-intensive roles. It doesn't replace cognitive ability. Goleman also expanded EI to include a wide range of personality traits and competencies that the academic field doesn't necessarily consider part of EI, making the construct fuzzier and easier to overclaim. Recognizing overclaims requires comparing what the popular version says to what the underlying research actually shows. This is the deeper pattern: a valuable book about a real academic finding overstated its claims, those claims spread widely, and the research that showed the overclaim persists in public understanding even now. Almost every major "science of X" popular book contains some version of this.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Viral EQ Content (Self-Help Edition)`,
          paragraphs: [
            `Beyond serious research and popular books, there's a large ecosystem of viral EQ content. LinkedIn posts about "10 things high EQ people do." Instagram carousels about "signs of high EQ." TikTok videos about how to spot "low EQ" colleagues. Courses promising to "transform your relationships with high EQ habits." The content varies in quality. Most of it is, charitably, not very useful.`,
            `Several patterns recur. First: confident lists without sourcing. "High EQ people always do X." Real EI research doesn't produce simple lists; it produces measurements with statistical effect sizes. When you see confident specific claims about high-EQ behavior without citations, you're seeing creator opinion dressed as established psychology.`,
            `Second: EQ as personality categorization. Much viral content treats EQ as a fixed label (you have it or you don't) used to categorize people you like (high EQ) and people you don't (low EQ). The academic literature treats EI as a continuum of skills that change over time and across contexts. Using EQ as a personality label is closer to astrology than to actual psychology.`,
            `Third: EQ as superiority signal. "Most people don't have high EQ; here's how to spot it in yourself." Real EI research doesn't support the framing that most people lack basic emotional skills. The framing exists to make readers feel special for engaging with the content.`,
            `Fourth: monetization. Many EQ content creators sell courses, coaching, books, or consulting on EQ-development. None of these are inherently bad. They do create incentives to overstate what EQ development can do. "Develop high EQ and 10x your career" is a sellable message; "develop modest emotional skills that may modestly improve some workplace outcomes" is not.`,
            `Fifth: EQ-as-everything. A worrying pattern conflates EI with emotional regulation generally, with empathy, with social skills, with kindness, with introversion or extroversion, with mental health. The academic literature carefully separates these constructs because they don't fully overlap. Viral content typically blends them, which makes specific claims hard to evaluate.`,
          ],
          image: `/voyager-assets/future-skills/l14-s4-viral.webp`,
          imageCaption: `Viral EQ content: confident lists, personality categorization, superiority framing, monetization, EQ-as-everything.`,
          vocab: [
            {
              word: `construct conflation`,
              definition: `Pattern where multiple related but distinct concepts get blended together, making it hard to evaluate specific claims. Viral EQ content often conflates emotional intelligence with empathy, social skills, kindness, emotional regulation, and mental health. Academic research carefully separates these because they don't fully overlap. Conflation makes claims harder to evaluate.`,
              audioPrompt: `Construct conflation is a pattern where multiple related but distinct concepts get blended together, making it hard to evaluate specific claims, {name}. Viral emotional intelligence content often conflates EI with empathy, social skills, kindness, emotional regulation generally, and mental health. These are related but distinct constructs in academic research. Empathy, for example, is partly an EI skill but also has neurological and developmental aspects that EI doesn't capture. Mental health overlaps with emotional regulation but involves much more. Conflation makes specific claims harder to evaluate. Knowing this pattern protects you from accepting sweeping claims that lump multiple constructs together. Real evidence-based discussion separates the constructs.`,
            },
            {
              word: `personality categorization`,
              definition: `Pattern in viral EQ content where emotional intelligence is treated as a fixed label used to sort people into high EQ and low EQ categories. The academic literature treats EI as a continuum of skills that change over time and across contexts. Using EQ as a fixed personality label is closer to astrology than to actual psychology. Functions mainly to make readers feel special for engaging with the content.`,
              audioPrompt: `Personality categorization is a pattern in viral EQ content where emotional intelligence is treated as a fixed label used to sort people into high EQ and low EQ categories, {name}. The framing is binary: you have it or you don't. High EQ people always do certain things. Low EQ colleagues have specific tells. The academic literature treats EI very differently. EI is a continuum of skills that change over time and across contexts. People can develop emotional abilities through deliberate practice. Performance varies across situations. The academic model is skill-based and developmental; the viral model is categorical and fixed. Using EQ as a fixed personality label to categorize people you like as high EQ and people you don't as low EQ is closer to astrology than to actual psychology. The categorization framing exists primarily to make readers feel special for engaging with the content and to create a framework for judging others. Real EI research doesn't produce simple categorical distinctions between the emotionally enlightened and everyone else.`,
            },
            {
              word: `superiority signal`,
              definition: `Framing used in viral EQ content suggesting that most people lack high EQ, positioning the reader who engages with the content as among the rare few who have it. The academic research doesn't support the premise that most people lack basic emotional skills. The framing exists to make readers feel special and is a common technique in viral self-help content across many topics.`,
              audioPrompt: `A superiority signal is a framing used in viral EQ content suggesting that most people lack high EQ, {name}. Statements like "99% of people have LOW EQ and don't even know it" or "most people don't have this" position the reader who engages with the content as among the rare few who can recognize and develop it. The academic research doesn't support this premise. The research doesn't conclude that most people lack basic emotional skills. The framing exists to make readers feel special for engaging with the content — to give them an identity of being among the emotionally intelligent few who can see what others can't. It's a common technique in viral self-help content across many topics, not just EI. "Most people don't understand X; here's what high-X people know" is a reliable formula for engagement. Recognizing superiority signaling as a technique protects you from being manipulated by it. Real psychological research doesn't typically produce framings that sort people into the enlightened few and the unaware majority.`,
            },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources making different kinds of claims about emotional intelligence. The first is current peer-reviewed academic EI research as represented by Marc Brackett's RULER program and related work at Yale. The second is Daniel Goleman's 1995 book. The third is a viral self-help account.`,
            `As you rank them, apply the framework from Lesson 11 of this band. What's the author's expertise? What's the methodology? What's the financial incentive structure? What do they acknowledge as uncertain? Do they engage with limits?`,
            `One framing to consider. Goleman's book is harder to rank than the obvious extremes. It's not in the same category as serious peer-reviewed research, but it's not equivalent to viral self-help content either. Many of its underlying ideas are valuable. Its overclaim about EQ being more important than IQ has been criticized by the academic field. The skill is recognizing that "between" is a real place to land.`,
            `One last framing. Whatever conclusions you reach, the underlying skills of EI (perceiving emotions, understanding them, regulating them, influencing others' emotions appropriately) are genuinely useful regardless of how the research debate resolves. Even the more modest evidence base supports developing these skills. The lesson is partly about EI itself and partly about how to read science journalism, popular books, and viral self-help on any psychological topic.`,
          ],
          image: `/voyager-assets/future-skills/l14-s5-before.webp`,
          imageCaption: `Three sources, three calibration levels. The "between" category matters: not everything is serious or viral.`,
          vocab: [
            {
              word: `science journalism`,
              definition: `Books, articles, and other media that translate academic research for general audiences. Quality varies enormously. Best science journalism (e.g., Carl Zimmer, Ed Yong) is accurate, careful, and useful. Worst science journalism overstates dramatically. Most popular books on psychology, nutrition, and similar topics fall in this category. Reading critically means asking how accurately the journalism represents the underlying research.`,
              audioPrompt: `Science journalism as a category includes books, articles, and other media that translate academic research for general audiences, {name}. Quality varies enormously. Best science journalism is accurate, careful, and useful: writers like Carl Zimmer on biology or Ed Yong on microbiology and broader science do strong work that respects what the research actually shows. Worst science journalism overstates dramatically, makes confident claims the research doesn't support, and sells dramatic narratives. Most popular books on psychology, nutrition, parenting, business research, and similar topics fall somewhere in this category. Reading critically means asking how accurately the journalism represents the underlying research. The same author can do good work on one topic and overreach on another. Treating science journalism as a category to evaluate, rather than as automatic truth or automatic noise, is part of information literacy.`,
            },
            {
              word: `financial incentive structure`,
              definition: `The financial motivations shaping what a source produces and how they frame it. Viral EQ creators selling courses have an incentive to overstate what EQ development can do. Popular book authors have an incentive toward dramatic claims that sell copies. Academic researchers have career incentives toward publication and grant funding. Understanding who profits from a claim helps evaluate why they're making it.`,
              audioPrompt: `Financial incentive structure refers to the financial motivations shaping what a source produces and how they frame it, {name}. When evaluating any source making claims about emotional intelligence, or any other topic, the incentive structure is a key question. Many EQ content creators sell courses, coaching, books, or consulting. None of these are inherently bad, but they do create incentives. "Develop high EQ and transform your career" is a sellable message. "Develop modest emotional skills that may modestly improve some workplace outcomes" is accurate but wouldn't sell a course. Daniel Goleman also has a substantial commercial enterprise built on EI consulting and training, which creates some conflict of interest even while his underlying ideas have value. Academic researchers have different incentive structures: toward publication, grants, and reputation in the field. Peer review introduces accountability. Understanding who profits from a claim, and how, helps you evaluate why they're making it and whether the framing is shaped by what's true or what's profitable. The question "what does this source gain from my believing this?" is one of the most useful tools in evaluating any source.`,
            },
            {
              word: `modest evidence base`,
              definition: `The actual level of research support for emotional intelligence: real, useful, and worth acting on, but not the dramatic predictor pop versions claim. EI is a genuine construct with 30+ years of research. The skills are learnable. The practical implication: develop emotional skills because they have real value at a realistic level, not because they'll transform everything about your life.`,
              audioPrompt: `The modest evidence base for emotional intelligence means the research is real, useful, and worth acting on, but not the dramatic predictor pop versions claim, {name}. EI is a genuine construct. Salovey and Mayer's model has been studied for over 30 years. The skills, perceiving, understanding, regulating, and using emotions, are learnable. The RULER program research shows explicit instruction produces real improvements. Meta-analyses show modest but real predictive validity for some workplace outcomes. This is the honest picture. The skills underneath EI are genuinely useful across many contexts: understanding your own emotions, reading others accurately, regulating responses under pressure, influencing others' emotional states appropriately. These are worth developing. The lesson is holding both: take emotional intelligence seriously because the modest evidence base is real, while being accurate about what it can and can't do. The pop framing of "develop high EQ and you'll succeed at everything" is more marketing than science. The honest framing: these skills matter, they're learnable, and they'll help you at a realistic level.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l14-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Emotional Intelligence`,
          intro: `Three sources discuss emotional intelligence. Rank them from most credible to least credible based on methodology, evidence, and acknowledgment of limits. Then see how a careful analyst would evaluate them.`,
          topic: `What does the evidence actually say about emotional intelligence?`,
          sources: [
            {
              id: `source-a`,
              name: `Marc Brackett's RULER program research, Yale Center for Emotional Intelligence — peer-reviewed academic work`,
              type: `Research program by Marc Brackett, professor at Yale and founding director of the Yale Center for Emotional Intelligence, published in peer-reviewed journals; based on extensive empirical work in schools`,
              claim: `Emotional skills (Recognize, Understand, Label, Express, Regulate) can be explicitly taught in schools. Children who receive this instruction show modest but real improvements in emotion-related performance, reduced classroom conflict, and modestly improved academic outcomes. Effects require sustained instruction over months and years, not single workshops. The research is careful about effect sizes and acknowledges where evidence is stronger or weaker. The framework builds on the original Salovey-Mayer model of EI.`,
              evidence: `Brackett is an established academic researcher at Yale with substantial peer-reviewed publications. The RULER program has been studied in many schools with controlled methodology. Effect sizes are reported honestly rather than dramatized. The research engages with limits including the difficulty of scaling, the need for sustained implementation, and variations in effects across student populations. Some commercial activity exists around the program (training, materials), but the core research is published in peer-reviewed academic venues. Best available representation of where academic EI research currently stands.`,
            },
            {
              id: `source-b`,
              name: `Daniel Goleman, "Emotional Intelligence: Why It Can Matter More Than IQ" (1995) — popular book by science journalist`,
              type: `Best-selling popular psychology book by science journalist Daniel Goleman, building on early academic EI research; sold over 5 million copies and made EQ a household term`,
              claim: `Emotional intelligence may matter more than IQ for life success. EQ predicts workplace performance, relationship quality, and well-being. The book expanded EI to include a wide range of personality traits and competencies, presenting EQ as a primary factor in success that complements or exceeds cognitive ability. The book is engagingly written and brought useful ideas into mainstream conversation. It also significantly overstated the evidence relative to what subsequent research has supported.`,
              evidence: `Goleman is a credentialed science journalist (PhD in psychology, former New York Times science writer) writing accessibly about real research. The underlying ideas (EI is real, learnable, matters for some outcomes) are well-supported. The central claim (EQ matters MORE than IQ for life success) has been criticized by the academic field including Salovey and Mayer themselves, and has not been supported by subsequent meta-analyses. The book expanded EI beyond what the academic field considers part of the construct, making the framework fuzzier and easier to overclaim. Goleman also has a substantial commercial enterprise built on EI consulting and training, which creates some conflict of interest. Useful as an entry point but should be read alongside subsequent research rather than as the final word.`,
            },
            {
              id: `source-c`,
              name: `@HighEQHabits — Instagram account, 1.6M followers, sells $397 "High EQ Transformation" course with weekly content drops`,
              type: `Viral Instagram self-help account producing daily content with titles like "7 things people with HIGH EQ always do" and "These habits separate high EQ people from everyone else," selling courses and one-on-one coaching`,
              claim: `"High EQ is the SECRET that separates successful people from everyone else. 99% of people have LOW EQ and don't even know it. Here are 7 things high EQ people ALWAYS do, including specific phrases they use, body language patterns, and morning routines. My $397 'High EQ Transformation' course has helped over 12,000 students transform their relationships, careers, and lives in just 30 days. Early-bird pricing ends Friday. Don't waste another year being held back by low EQ. The window to upgrade is closing."`,
              evidence: `No credentials in psychology or relevant research. Confident specific claims ("99% have LOW EQ") that the academic literature doesn't support. Personality-categorization framing (high EQ vs low EQ as fixed labels) inconsistent with research on EI as continuum of skills. Superiority signaling ("most people don't have it") common in self-help marketing. Course-and-urgency-pricing structure shaping content toward dramatic confident claims. Construct conflation throughout (EI blended with empathy, social skills, communication, mental health). The actual EI research, even in its more modest evidence-based form, doesn't support most of the specific claims.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How did you place Goleman? He's not academic research but he's not pure self-help. What does the "between" category reveal about science journalism?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A (Brackett's RULER research) is the most credible for understanding current EI evidence. Brackett is an established academic researcher with substantial peer-reviewed work at Yale. The research reports effect sizes honestly and engages with limits. The framework builds on the original Salovey-Mayer model. The modest effects are useful precisely because they're realistic. For understanding where the academic field actually is, this kind of research is the bedrock.`,
              `Source B (Goleman) is harder to rank. The book is genuinely valuable in some ways: it brought useful ideas into mainstream conversation, the underlying premise that emotional skills are real and learnable is well-supported, and many schools and workplaces benefit from taking EI seriously after engaging with Goleman's framing. The book also significantly overstated the evidence, particularly the central claim that EQ matters more than IQ. The honest reading places Goleman as somewhere between rigorous research and viral self-help — a category worth recognizing because most popular psychology books fall there. Useful as entry point, but should be read alongside subsequent research.`,
              `Source C is recognizable viral self-help content with all the typical patterns. No credentials. Confident specific claims without citations. Personality-categorization framing. Superiority signaling. Construct conflation. Course-with-urgency-pricing monetization. The "99% have LOW EQ" framing isn't psychology; it's marketing. Real EI research treats EI as a continuum of skills, not a binary high/low label distinguishing the enlightened from the masses.`,
              `The deeper lesson. Most popular psychology you encounter will fall somewhere on the spectrum from rigorous research to viral self-help, with most living in the middle. The skill is recognizing the gradient and reading accordingly. Even good popular books like Goleman's overstate; even careful research has limits. Calibrated reading takes both seriously without treating either as the final word. As you grow up reading popular psychology content for the next 60 years, this calibration is the skill that protects you from being manipulated and the skill that lets you actually learn from useful sources.`,
            ],
          },
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Who coined "emotional intelligence" and when?`,
              options: [
                `Daniel Goleman 1995`,
                `Peter Salovey (Yale) and John Mayer (UNH) in a 1990 academic paper; defined as ability to perceive, use, understand, and regulate emotions; specific measurable construct distinct from the pop version that came later`,
                `Aristotle long ago`,
                `Random psychologist`,
              ],
              correctIndex: 1,
              explanation: `Important historically because most people associate EI with Daniel Goleman's 1995 popular book. The academic construct came first, and Goleman's framing both popularized AND distorted the academic version. Knowing the academic origins helps calibrate expectations.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does EI research actually show about predictive validity?`,
              options: [
                `EI predicts everything`,
                `Modest correlations (typically r=0.2 to 0.3) with some outcomes like job performance in emotionally-relevant roles; weaker for technical work; meaning EI accounts for around 5 to 10 percent of variance; real and useful but not the dramatic predictor pop versions claim`,
                `EI predicts nothing`,
                `Random results`,
              ],
              correctIndex: 1,
              explanation: `The honest picture: EI is real, modestly predictive of some outcomes, and worth developing. The specific claim that EI matters MORE than IQ for life success hasn't been supported by subsequent research. IQ remains the strongest single predictor of academic and many job outcomes.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the difference between "ability EI" and "trait EI"?`,
              options: [
                `Same thing`,
                `Ability EI: what you can do, measured through performance tests (like the MSCEIT); trait EI: what you report about yourself, measured through self-report questionnaires; the two correlate but aren't the same; self-report tends to capture personality more than ability; performance measures are harder to game`,
                `Different terms`,
                `Skill vs talent`,
              ],
              correctIndex: 1,
              explanation: `Most popular EI content uses self-report measures, which is part of why their predictive validity is weaker than the academic field's better measures. The distinction matters when evaluating EI claims and tests.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Who is Marc Brackett and what is RULER?`,
              options: [
                `Random teacher`,
                `Professor at Yale and founding director of the Yale Center for Emotional Intelligence; developed RULER (Recognize, Understand, Label, Express, Regulate) program for teaching emotional skills in schools; peer-reviewed research showing modest but real improvements with sustained instruction`,
                `Pop author`,
                `Self-help coach`,
              ],
              correctIndex: 1,
              explanation: `Brackett's work represents where academic EI research currently sits. Real but modest effects requiring sustained implementation. Honest about limits. Best representation of where the evidence-based field currently stands.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What did Daniel Goleman get right and what did he overstate?`,
              options: [
                `Everything right`,
                `Got right: EI is real construct worth taking seriously; emotional skills are learnable; matter for some workplace and life outcomes; schools benefit from explicit attention. Overstated: central claim that EQ matters MORE than IQ for life success (not supported by subsequent research); expanded EI to include wide range of competencies the academic field doesn't include`,
                `Everything wrong`,
                `Just made stuff up`,
              ],
              correctIndex: 1,
              explanation: `Criticizing Goleman's overclaim isn't dismissing EI. Many underlying ideas are valuable; the dramatic framing was overstated. This pattern (good book, oversold claims) is common in popular psychology.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "popular science overreach"?`,
              options: [
                `Bad science`,
                `Common pattern where popular books about academic research overstate the research's claims; book sells well partly because of dramatic claims; subsequent research often shows the claims were overstated but popular version persists in public understanding; important to recognize because most public understanding of fields like psychology runs through popular books`,
                `Old research`,
                `Marketing`,
              ],
              correctIndex: 1,
              explanation: `Recognizing this pattern protects you from accepting any single popular book as the final word. The honest move: read the popular version and check what the research has subsequently shown. This applies across psychology, nutrition, parenting, business research.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What patterns recur in viral EQ self-help content?`,
              options: [
                `Random claims`,
                `Confident lists without sourcing; EQ as personality categorization (fixed labels); EQ as superiority signal ("most people don't have it"); monetization through courses; construct conflation (blending EI with empathy, social skills, communication, mental health)`,
                `Quality content`,
                `Real research`,
              ],
              correctIndex: 1,
              explanation: `Real EI research treats EI as a continuum of skills that change over time. Viral framing of high-EQ vs low-EQ people as fixed labels is closer to astrology than to actual psychology. The patterns are recognizable across many viral self-help niches.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "construct conflation"?`,
              options: [
                `Building things`,
                `Pattern where multiple related but distinct concepts get blended together, making it hard to evaluate specific claims; viral EQ content often conflates EI with empathy, social skills, kindness, emotional regulation, and mental health; academic research carefully separates these because they don't fully overlap`,
                `Combining concepts`,
                `Language confusion`,
              ],
              correctIndex: 1,
              explanation: `Conflation makes specific claims harder to evaluate. Empathy is partly an EI skill but also has neurological and developmental aspects EI doesn't capture. Mental health overlaps but involves much more. Knowing this pattern protects you from sweeping claims that lump constructs together.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because Goleman's specific claims were overstated, emotional intelligence isn't worth developing.`,
              correctAnswer: false,
              explanation: `False. The skill of distinguishing Goleman's overclaim from the underlying construct is what this lesson is about. EI is real, learnable, and predicts some real-world outcomes. The dramatic version was oversold; the modest evidence-based version is genuinely useful. Both can be true.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I read on Instagram that high EQ people NEVER apologize unless they truly mean it, and that's how you can tell who has high EQ." Based on this lesson, what should you point out?`,
              options: [
                `"That's correct"`,
                `"That's recognizable viral self-help content rather than actual EI research. Several flags: confident specific behavior claim (always/never), EQ as personality category (used to label who has it), no source citation, probably leading to a course or product. Real EI research treats EI as a continuum of skills (perceiving, understanding, regulating emotions) measured through tests like the MSCEIT, not a fixed personality type identifiable by single behaviors. Apologizing patterns vary across cultures, contexts, and relationships in ways the viral framing ignores. Real EI research (Salovey, Mayer, Brackett at Yale) is more careful and more modest in its claims. Worth developing emotional skills, not worth taking viral EQ-as-label content seriously."`,
                `"EI doesn't exist"`,
                `"Instagram is always wrong"`,
              ],
              correctIndex: 1,
              explanation: `Real applied EI literacy. Don't dismiss EI as a concept; identify the specific content as viral self-help with recognizable patterns. Point to real research. This is the kind of pushback that protects friends from absorbing low-quality content.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you know there was a gap between popular EI claims and academic research? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Of the four EI branches (perceive, use, understand, regulate emotions), which do you do well? Which would benefit from deliberate practice?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with strong emotional skills (not the magic version, but the real one), what does that change about your relationships, work, and well-being over decades?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific emotional skill (perceiving your own emotions accurately, regulating anger, reading others' feelings). Practice it deliberately for two weeks. Notice what changes.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there contexts where the academic EI framework misses things? What about cultures with different emotional norms? What about contexts where suppressing emotions is actually adaptive?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read one chapter of Brackett's "Permission to Feel" or another careful EI book. Compare to one viral EQ post. Notice the gap.` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Emotional skills compound across a lifetime of relationships and work. Two paths.`,
          familyActivity: {
            title: `The Family Emotion Vocabulary Exercise`,
            duration: `30 minutes`,
            description: `Share what you learned. Then run an exercise: each family member tries to name their current emotional state using specific words rather than generic ones. "Bad" becomes "frustrated and tired." "Good" becomes "relieved and curious." Most families discover their emotion vocabulary is much smaller than it could be, and that more specific language produces clearer communication. This is one of the most practical applications of the "labeling" skill in RULER.`,
          },
          projectOption: {
            title: `Read Marc Brackett's "Permission to Feel," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Read Marc Brackett's "Permission to Feel" (2019), an accessible book by the Yale EI researcher. Compare it to Goleman's "Emotional Intelligence" if you want a contrast. Apply Brackett's RULER framework to one specific relationship or context in your life over the four weeks. Write 2,000 words on what you learned about the gap between research and pop psychology, plus what you actually changed in your own emotional skills.`,
            offerToParent: `Parent: opt your kid into this project. Reading a careful EI book at 12 is genuinely useful.`,
          },
          identityQuestion: `If you become someone with calibrated emotional skills (the real version, not the magic version), what does that mean for the quality of your relationships and work over a lifetime?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the difference between real EI research and pop EI claims.`,
            `A person who can name specific emotions instead of "good" or "bad."`,
            `Someone willing to develop emotional skills without falling for self-help hype.`,
          ],
          saveKey: `identity_responses_fs_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteenth Future Skills lesson done. You now know that emotional intelligence is a real construct (Salovey and Mayer 1990) with four branches, real but modest predictive validity, and significant gap between academic research and the pop version popularized by Goleman in 1995. You can distinguish ability EI from trait EI, recognize popular science overreach as a pattern, spot viral EQ self-help content, and develop emotional skills without falling for hype. Real names: Peter Salovey, John Mayer, Marc Brackett, Daniel Goleman. Next time we go into another huge meta-skill: resilience and failure. How should you actually relate to failure? Three positions defended by serious people. Argument Builder format. Let's go. — Byte`,
          badge: `emotion-literate`,
          badgeName: `Emotion Literate`,
          xpEarned: 75,
          competencies: [
            `Articulates EI's four branches and academic origins (Salovey & Mayer 1990)`,
            `Distinguishes ability EI from trait EI and their measurement differences`,
            `Recognizes popular science overreach as a pattern, including Goleman's overclaim`,
            `Spots viral EQ self-help content patterns (categorization, superiority, conflation)`,
            `Knows Marc Brackett's RULER program and the realistic evidence base`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Resilience & Failure`,
            hook: `Three positions on how to relate to failure. Minimize / embrace / context-match. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L14 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
