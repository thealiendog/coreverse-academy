// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L02 — AI and the Changing Workplace
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Career Education, Economics, Media Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026) — Tier 2-3 honesty on AI labor impact
// Interaction format: SOURCE EVALUATION (economist research vs AI lab analysis vs viral AI content)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l02-v1";

const FUTURESKILLS_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-02`,
      title: `AI and the Changing Workplace`,
      duration: 35,
      xpReward: 75,
      badge: `ai-economy-analyst`,
      badgeName: `AI Economy Analyst`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a fact most adults haven't fully internalized. The version of AI you're growing up with is genuinely different from anything previous generations had. ChatGPT launched in late 2022. By 2024, AI was writing code, drafting emails, summarizing documents, and doing tasks that used to require entry-level workers. By 2026, AI is everywhere in white-collar work. The question isn't whether AI will change the labor market; it already has. The question is what's actually happening and what to do about it. Today we look at three radically different sources making claims about AI and work: a serious labor economist, a research team at a major AI lab, and the viral TikTok content telling you which jobs are doomed. You evaluate them.`,
          headline: `AI and the Changing Workplace`,
          subtitle: `Three sources, three very different stories. Your evaluation.`,
          visual: `/voyager-assets/future-skills/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Has Actually Happened (As Of 2026)`,
          paragraphs: [
            `Let's start with what we can observe. ChatGPT, the consumer interface for OpenAI's GPT models, launched in November 2022 and reached 100 million users in two months, the fastest adoption of any consumer technology in history. Within a year, Anthropic's Claude, Google's Gemini, Meta's Llama models, and others were comparable or better at many tasks. By 2024, AI was being integrated into core business software (Microsoft Office, Google Workspace, Slack, etc.) used by hundreds of millions of workers daily. By 2026, generative AI is a normal tool in most office work.`,
            `What has this actually done to jobs? The data is mixed and still being analyzed, but several patterns are visible. Some jobs have seen significant productivity increases (software development, marketing copy, customer service, basic data analysis), with workers using AI to do more in less time. Some entry-level roles in those fields have seen hiring slow as senior workers handle more with AI help. Some specific tasks have become essentially automated (basic translation, summarization, certain kinds of writing). Other jobs have been less affected so far (most physical work, complex interpersonal work, work requiring physical presence).`,
            `Importantly: the most dramatic predictions from 2023-2024 haven't materialized as fast as some claimed. Predictions of "50% of jobs gone by 2025" were wrong. But predictions of "AI won't affect anything important" were also wrong. The actual pattern is more nuanced: significant productivity gains for many workers, restructuring of some entry-level roles, gradual shifts rather than sudden mass displacement, with the full effects still unfolding. Real economists who study labor markets generally treat AI as one of several major forces reshaping work, alongside demographics, globalization, and policy choices.`,
            `One more thing to note. The story is different across countries. The US, UK, and other knowledge-economy countries are seeing different impacts than countries with different labor structures. Effects are different in industries with strong professional licensing (medicine, law) than in less regulated fields. The impacts vary by company size, age of workers, and many other factors. "What is AI doing to jobs" doesn't have one answer; it has many depending on which slice of the labor market you're asking about.`,
          ],
          image: `/voyager-assets/future-skills/l02-s1-actual.webp`,
          imageCaption: `Real observable effects: productivity gains, entry-level shifts, gradual restructuring. Not "everyone fired tomorrow."`,
          vocab: [
            {
              word: `generative AI`,
              definition: `Class of AI systems that produce new content (text, images, code, audio, video) based on patterns learned from training data. Includes large language models like GPT, Claude, Gemini. Distinct from earlier "discriminative" AI that primarily classified existing content.`,
              audioPrompt: `Generative AI is the class of AI systems that produce new content based on patterns learned from training data, {name}. Includes large language models like ChatGPT, Claude, and Gemini. Also includes image generators like DALL-E and Midjourney, code generators like GitHub Copilot, video generators like Sora, and audio generators. Generative AI is distinct from earlier "discriminative" AI that primarily classified existing content (is this email spam? is this picture a cat?). The generative kind produces new outputs on demand. The technology has advanced rapidly since 2017 when transformer architectures were introduced. ChatGPT in late 2022 brought it to mainstream attention. By 2026, generative AI is a normal tool in most office work and an active area of research, business, and policy debate.`,
            },
            {
              word: `productivity gains`,
              definition: `Measurable increases in output or efficiency per worker. Erik Brynjolfsson's 2023 study found approximately 14% productivity gains for customer service workers using AI tools, with the largest gains going to less experienced workers. Real but variable across tasks and users.`,
              audioPrompt: `Productivity gains are measurable increases in output or efficiency per worker, {name}. One of the most important documented effects of AI on the labor market so far. Erik Brynjolfsson at Stanford produced detailed empirical work showing AI tools made customer service workers about fourteen percent more productive on average in his 2023 study. Notably, the largest gains went to the least experienced workers, helping them perform more like senior workers. Other research has found similar patterns in software development, writing, and data analysis. Productivity gains are real, but they are also variable. They depend heavily on which specific tasks are involved, which industry, which worker skill level, and how well the AI tool is integrated into workflow. Viral AI content often presents dramatic productivity claims without the rigorous measurement that distinguishes real research. The honest picture, backed by economists like Brynjolfsson, shows significant but uneven gains, not a uniform transformation of all work overnight.`,
            },
            {
              word: `knowledge work`,
              definition: `Work primarily involving information, ideas, analysis, and communication rather than physical labor. Includes roles like software development, marketing, customer service, data analysis, and writing. The category of work most directly affected by generative AI since 2022.`,
              audioPrompt: `Knowledge work is work primarily involving information, ideas, analysis, and communication rather than physical labor, {name}. Roles like software development, marketing, customer service, data analysis, legal work, and writing all fall into this category. Knowledge work is the category most directly affected by generative AI since 2022. ChatGPT, Claude, and similar systems can assist with drafting, summarizing, brainstorming, translating, and many other knowledge-work tasks. Some specific entry-level roles in knowledge-work fields have seen hiring slow as senior workers handle more with AI help. Some specific tasks within those roles have become essentially automated. The data as of 2026 shows a more nuanced pattern than either dramatic mass displacement or no change. Serious labor economists like David Autor, Daron Acemoglu, and Erik Brynjolfsson treat AI as one of several major forces reshaping knowledge work, with the full effects still unfolding and not yet fully visible in employment statistics.`,
            },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Real Economists Are Studying`,
          paragraphs: [
            `Labor economists are some of the most useful sources for understanding what AI is actually doing to work. They study labor markets carefully, with data, over long timescales. They don't typically make sensational predictions; they document what's happening and identify patterns.`,
            `David Autor at MIT is one of the most prominent labor economists studying AI. His work on labor market polarization (the hollowing out of middle-skill jobs while high-skill and low-skill jobs both grow) has been influential for over two decades. More recently, he and colleagues have published on how AI affects different categories of work. His 2024 NBER working paper "Applying AI to Rebuild Middle Class Jobs" argued that AI might actually help middle-skill workers by giving them tools that previously required years of specialist training. This is contrarian to much pop AI commentary.`,
            `Daron Acemoglu (also MIT, 2024 Nobel laureate in economics) has been more cautious about AI's effects, arguing that AI may further increase inequality if deployed primarily to automate workers rather than complement them. His book "Power and Progress" (2023, with Simon Johnson) is a serious historical analysis of how technologies are deployed and who benefits.`,
            `Erik Brynjolfsson at Stanford has produced detailed empirical work on AI's productivity effects in specific contexts. His 2023 study with co-authors found that AI tools made customer service workers about 14% more productive on average, with the largest gains going to the least experienced workers (helping them perform more like senior workers). This is an early data point in a much larger research program.`,
            `What these economists share. They cite data. They distinguish what's measured from what's speculated. They acknowledge what they don't know. They publish in peer-reviewed venues. Their predictions have ranges and uncertainties, not single dramatic numbers. They're useful sources precisely because they don't try to be entertaining.`,
          ],
          image: `/voyager-assets/future-skills/l02-s2-economists.webp`,
          imageCaption: `Real labor economists: data, peer review, uncertainty ranges. Less dramatic, more reliable.`,
          vocab: [
            {
              word: `labor market polarization`,
              definition: `Phenomenon documented by David Autor and others: hollowing out of middle-skill jobs (routine clerical, basic manufacturing) while both high-skill (knowledge work) and low-skill (in-person service) jobs grow. Major pattern of US labor markets since ~1980. AI may extend or reverse this depending on how it's deployed.`,
              audioPrompt: `Labor market polarization is a phenomenon documented by David Autor and other labor economists, {name}. The pattern: middle-skill jobs like routine clerical work and basic manufacturing have been hollowing out, while both high-skill jobs like knowledge work and low-skill jobs like in-person service have been growing. This has been a major pattern in US labor markets since around 1980. The cause has been technologies that automate routine tasks combined with globalization. AI may extend the pattern, reverse it, or change it in new ways depending on how it's deployed. Autor's 2024 work suggests AI might actually help middle-skill workers by giving them tools that previously required specialist training. This would reverse some of the polarization. The empirical evidence is still being gathered.`,
            },
            {
              word: `entry-level pipeline`,
              definition: `The flow of less experienced workers into a field, typically through roles that handle routine or foundational tasks. AI is affecting some entry-level pipelines by allowing senior workers to handle more with AI assistance, slowing new-hire growth in specific knowledge-work roles even as the field overall continues.`,
              audioPrompt: `The entry-level pipeline is the flow of less experienced workers into a field, typically through roles that handle routine or foundational tasks, {name}. It is one of the most directly affected labor market structures as of 2026. In some knowledge-work fields, senior workers using AI assistance can now handle tasks that previously required hiring more junior staff. This has slowed hiring in some entry-level roles even as overall field activity continues. The shift is not uniform. Some fields show it clearly; others show little effect. And the long-term implications are still being studied. A slower entry-level pipeline has real consequences: if junior roles are the traditional training ground where workers develop expertise by doing foundational work, and those roles shrink, the career development path for the next generation of seniors changes too. Labor economists including Autor and Acemoglu are actively studying how these dynamics will resolve. The honest answer is that we don't yet fully know.`,
            },
            {
              word: `productivity effects`,
              definition: `The measured changes in how much work gets done per worker when new technology is introduced. Erik Brynjolfsson's empirical research found AI tools made customer service workers about 14% more productive on average, with the largest gains going to the least experienced workers. Productivity effects vary significantly across industries and job types.`,
              audioPrompt: `Productivity effects are the measured changes in how much work gets done per worker when a new technology is introduced, {name}. Economists study productivity effects carefully because they reveal what a technology is actually doing to work, beyond the hype. Erik Brynjolfsson at Stanford produced one of the early empirical data points on AI's productivity effects: a 2023 study found that AI tools made customer service workers about 14% more productive on average. Importantly, the largest gains went to the least experienced workers, helping them perform more like senior workers. This matters because it complicates simple narratives in both directions. It's not "AI is destroying jobs." But it's also not "AI has no effect." It suggests AI tools may be equalizing performance across experience levels in some roles. Brynjolfsson, like Autor and Acemoglu, publishes in peer-reviewed venues, cites data, and acknowledges the limits of what the evidence shows. His work is an early piece of a much larger ongoing research program.`,
            },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What AI Labs Are Saying`,
          paragraphs: [
            `AI labs are the companies that actually build the AI systems being deployed. Their perspectives are useful for understanding the technology, but they have obvious conflicts of interest. They benefit from AI being seen as transformative and inevitable. They also have insider knowledge that economists don't have. Reading them carefully means taking the technical accuracy seriously while being skeptical of self-serving framing.`,
            `Anthropic (the company that makes Claude) has published research on AI's economic effects, including the "Anthropic Economic Index" launched in 2025. The index tracks how people actually use AI in their work, based on aggregated and anonymized data from Claude conversations. The findings have shown that AI is being used for a wide range of tasks across many industries, with patterns that don't quite match the loudest pop predictions. The work is technically careful, but readers should remember the data comes from Anthropic's own product.`,
            `OpenAI has published similar analyses, including research on which occupations are "exposed" to potential AI automation. Their 2023 paper "GPTs are GPTs" estimated that ~80% of US workers could have at least 10% of their work tasks affected by GPT-style systems. The "exposed" framing is technical: it means some tasks could potentially be done by AI; it doesn't necessarily mean workers will be replaced. This nuance matters but often gets lost in pop coverage.`,
            `Google DeepMind, Meta AI, and other major labs publish their own research. Some of it is genuinely valuable and peer-reviewed. Some is closer to corporate communication. The key skill is distinguishing the technical content from the marketing layer that often surrounds it. Labs have real incentives to oversell AI's capabilities and inevitability; they also have real expertise that outside researchers lack.`,
            `One important caveat. Researchers who actually work at AI labs include some of the world's best technical experts on these systems. Dismissing AI lab research as "just marketing" is as wrong as accepting it uncritically. Real engagement with AI lab work means reading carefully, distinguishing claims, and weighing the source's credibility against its incentives.`,
          ],
          image: `/voyager-assets/future-skills/l02-s3-labs.webp`,
          imageCaption: `AI labs: real expertise + real conflicts of interest. Read carefully; don't dismiss or accept wholesale.`,
          vocab: [
            {
              word: `conflict of interest`,
              definition: `Situation in which a person or organization's primary interests (financial, professional) might influence their stated analysis or recommendations. Doesn't mean the analysis is wrong, but means readers should be aware of the incentive structure. Important consideration in evaluating sources.`,
              audioPrompt: `A conflict of interest is a situation in which a person or organization's primary interests might influence their stated analysis or recommendations, {name}. Financial interests, professional interests, reputational interests can all create conflicts. AI labs have conflicts of interest when commenting on AI's economic effects: they benefit from AI being seen as transformative and inevitable. Pharmaceutical companies have conflicts of interest when commenting on their own drugs. Politicians have conflicts of interest when commenting on policies that affect their donors. A conflict of interest doesn't mean the analysis is automatically wrong. It does mean readers should weigh the source's credibility against its incentives. Disclosed conflicts are generally more trustworthy than hidden ones. Acknowledging conflicts is part of doing source evaluation well.`,
            },
            {
              word: `AI labs`,
              definition: `Companies that build and deploy large AI systems, including Anthropic (Claude), OpenAI (ChatGPT), Google DeepMind (Gemini), and Meta AI (Llama). Their research has insider technical expertise but also real conflicts of interest when commenting on AI's effects. Reading AI lab research requires weighing credibility against incentives.`,
              audioPrompt: `AI labs are the companies that build and deploy large AI systems, {name}. The major ones as of 2026 include Anthropic, which makes Claude; OpenAI, which makes ChatGPT; Google DeepMind, which makes Gemini; and Meta AI, which produces the Llama models. AI labs publish research that is valuable because they have insider technical knowledge that outside economists lack. They also have real conflicts of interest: they benefit from AI being seen as transformative and inevitable. Their analyses often frame findings in ways that support continued investment in and use of their products. The skill of reading AI lab research is to separate the technical content from the framing layer. The Anthropic Economic Index, for example, is based on real aggregated data from Claude conversations, which gives it genuine empirical content. But it only sees Claude users, not the full labor market, and the framing is naturally oriented toward showing AI's positive role. Real engagement means taking the data seriously while being aware of what it doesn't capture.`,
            },
            {
              word: `occupational exposure`,
              definition: `A technical measure of how much of a given job's tasks could potentially be affected by AI systems. Used in research like OpenAI's 2023 paper estimating about 80% of US workers could have at least 10% of their work tasks affected by GPT-style systems. Exposure means potential effect, not necessarily displacement.`,
              audioPrompt: `Occupational exposure is a technical measure of how much of a given job's tasks could potentially be affected by AI systems, {name}. The term comes from research like OpenAI's 2023 paper "GPTs are GPTs," which estimated that roughly 80% of US workers could have at least 10% of their work tasks affected by GPT-style systems. The "exposed" framing is technical and careful. It means some tasks in a role could potentially be done by AI. It does not mean workers will be replaced. That distinction matters enormously, but it often gets lost in popular coverage. When a news headline says "AI could affect 80% of jobs," it is typically based on this kind of occupational exposure research. The research itself is more careful than the headline. Some AI lab research, like OpenAI's and Google DeepMind's peer-reviewed studies, is genuinely valuable. Real engagement with it means reading the technical framing carefully, not just the summary statistic. Occupational exposure is one of several measures economists and AI researchers use to track what AI is doing to work.`,
            },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Viral AI Content Ecosystem`,
          paragraphs: [
            `Distinct from both economists and AI labs is a large and profitable ecosystem of viral AI content. This includes TikTok and Instagram accounts predicting which jobs will be eliminated, courses teaching how to "get rich with AI," doom-focused podcasts predicting civilization collapse, and breathless coverage of every new AI release as either utopian or apocalyptic. The content is often emotionally charged and shareable, which is why it goes viral.`,
            `Several patterns appear repeatedly. First: confident dramatic predictions without uncertainty ranges. "These 10 jobs will be GONE by 2027." "AI will create 100 million new jobs." Real economists almost never speak this way; the confidence is the tell that someone isn't doing serious analysis. Second: cherry-picked anecdotes. One person made $50K using AI; one person got laid off because of AI. These are real stories but they don't establish patterns. Third: monetization. The content commonly sells courses, AI prompt packs, coaching, or affiliate products. Revenue comes from engagement, not accuracy.`,
            `Specific patterns in AI doom content: predictions of total job replacement on short timelines, claims that "specific skill" will save you, urgency to act NOW. Specific patterns in AI utopia content: claims that AI will solve all hard problems soon, claims that adopting specific AI tools will transform your life, courses on "how to use AI to retire early." Both genres profit from emotional engagement. Both often misrepresent the technical reality and the economic data.`,
            `Importantly, some popular AI commentators are serious and reliable. Ben Thompson's "Stratechery" newsletter offers careful business analysis. Dwarkesh Patel's podcast features serious technical conversations. Zvi Mowshowitz writes thorough weekly summaries of AI developments. These sources are different from viral content even when they comment on the same events. The difference is methodology, transparency about uncertainty, and lack of get-rich-quick promises.`,
            `A pattern worth specifically noticing. Manifestation and "abundance mindset" content has started incorporating AI: "manifest your AI-enabled wealth," "align with the AI revolution to receive abundance." This combines the manifestation issues we covered in earlier lessons with the AI hype issues from this lesson. When you see them combined, both pseudoscience flags are flying. Real economic analysis doesn't involve "manifesting wealth alignment."`,
          ],
          image: `/voyager-assets/future-skills/l02-s4-viral.webp`,
          imageCaption: `Viral AI content: confident drama, cherry-picked anecdotes, monetization. Patterns to recognize.`,
          vocab: [
            {
              word: `cherry-picking`,
              definition: `Selecting only evidence that supports a desired conclusion while ignoring contradicting evidence. Common pattern in viral content where individual dramatic stories are presented as proof of larger patterns. Avoided by serious researchers through systematic sampling and reporting of all results.`,
              audioPrompt: `Cherry-picking is selecting only evidence that supports a desired conclusion while ignoring contradicting evidence, {name}. A common pattern in viral content. One person made $50,000 using AI; one person got laid off because of AI. These are real stories. They don't establish patterns. The full picture would require systematic data on what's happening across many people, not just the dramatic individual cases. Serious researchers avoid cherry-picking through structured methodology: predefined samples, reporting of all results including null findings, statistical analysis. Viral content has every incentive to cherry-pick because dramatic stories drive engagement. Recognizing cherry-picking as a pattern is one of the most useful skills for evaluating any claim with prominent anecdotes.`,
            },
            {
              word: `peer-reviewed research`,
              definition: `Research that has been evaluated by other qualified experts in the field before publication. The standard quality-control mechanism in academic science. Peer-reviewed AI labor research by economists like Autor, Acemoglu, and Brynjolfsson is more credible than viral content precisely because it has passed this scrutiny.`,
              audioPrompt: `Peer-reviewed research is research that has been evaluated by other qualified experts in the field before publication, {name}. The standard quality-control mechanism in academic science. Before a paper appears in a serious journal or working paper series like NBER, other researchers with relevant expertise read it critically, check the methodology, challenge the conclusions, and either approve it or send it back for revision. This process is imperfect, but it filters out many weak claims that would otherwise spread. Labor economists like David Autor, Daron Acemoglu, and Erik Brynjolfsson publish through peer-reviewed venues. This doesn't make their work automatically correct, but it means their claims have survived a level of scrutiny that viral TikTok content never faces. When serious labor economists say something about AI and work, they are making claims they expect other experts to challenge. When viral creators say something dramatic, they face no comparable accountability. That difference is real and matters for how much weight you give each source.`,
            },
            {
              word: `emotional engagement`,
              definition: `Content designed to generate strong feelings like fear, excitement, or urgency rather than to inform accurately. Viral AI content is often built on emotional engagement: doom predictions trigger fear; utopia promises trigger excitement. Both patterns drive sharing and monetization regardless of accuracy.`,
              audioPrompt: `Emotional engagement is content designed to generate strong feelings rather than to inform accurately, {name}. It is the core mechanism of viral AI content. Doom-focused predictions of job destruction trigger fear. Utopian promises of AI-enabled wealth trigger excitement. Both are emotionally activating, and emotional activation drives sharing. This is why viral AI creators consistently make extreme predictions: "these ten jobs will be completely gone by 2027" or "AI will solve every major problem within five years." Extreme claims produce strong feelings that make people share, comment, and buy courses. The emotional engagement is the point, not accuracy. This pattern is distinct across content types. Doom content predicts collapse on short timelines and sells urgency. Utopia content promises transformation if you just adopt the right tools and mindset. Manifestation content adds abundance thinking to the mix. What they share is prioritizing emotional response over careful analysis. Recognizing emotional engagement as a production strategy, not a sign of expertise, is one of the most practical tools you have for evaluating any viral AI source.`,
            },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources making claims about AI and the workplace. The first is David Autor's peer-reviewed economic research. The second is the Anthropic Economic Index. The third is a viral TikTok creator selling an "AI-proof your career" course. They're not equally credible, but their relative credibility is more nuanced than it might first appear.`,
            `As you rank them, apply the framework from L01 of the Cosmos band's L16. Does the source make falsifiable claims? Does it cite data? Does it acknowledge uncertainty? Does it have conflicts of interest? What's the financial incentive structure? Does it engage with opposing views?`,
            `One framing as you work. The point isn't to dismiss AI lab research because labs have conflicts of interest. AI labs have real expertise that outside economists don't have. The point isn't to dismiss viral content because it's monetized; books, lectures, and academic careers are also monetized in their own ways. The point is to weigh the methodology, evidence, and incentive structure together to arrive at a calibrated sense of credibility. This is the actual skill of source evaluation.`,
            `One final note about your specific situation. You're 12 in 2026, which means you're growing up entirely inside an AI-saturated economy. The "what should I do about AI?" question is more pressing for you than it was for your parents at your age. The lessons in this band over the next several weeks will keep returning to AI from different angles. By the end, you'll have a working framework for how to navigate the technology and the economy it's reshaping. Today is the first piece: learning to tell rigorous AI analysis from breathless hype.`,
          ],
          image: `/voyager-assets/future-skills/l02-s5-before.webp`,
          imageCaption: `Calibrated source evaluation: weigh methodology, evidence, and incentives together.`,
          vocab: [
            {
              word: `calibrated confidence`,
              definition: `Holding beliefs with confidence levels that match the actual evidence. High confidence when evidence is strong; low confidence when evidence is weak; uncertainty when evidence is mixed. Distinct from "always uncertain" (paralysis) and "always confident" (overconfidence). Goal of careful thinking.`,
              audioPrompt: `Calibrated confidence is holding beliefs with confidence levels that match the actual evidence, {name}. High confidence when evidence is strong. Low confidence when evidence is weak. Genuine uncertainty when evidence is mixed. The goal of careful thinking. Calibrated confidence is distinct from two failure modes. The first is always uncertain: refusing to commit to any belief, which produces paralysis. The second is always confident: holding all beliefs strongly regardless of evidence, which produces overconfidence. Real calibration requires updating beliefs as evidence comes in. AI labor market questions are a good test case. Some claims have strong evidence (productivity gains are real). Some have moderate evidence (entry-level hiring patterns are shifting). Some have weak evidence (specific 5-10 year predictions). Calibrated confidence treats each claim according to its actual evidence level.`,
            },
            {
              word: `confidence without evidence`,
              definition: `Making strong specific claims with little or no supporting data, a common pattern in viral AI content. Contrasted with calibrated confidence held by serious researchers. Real labor economists almost never say specific things like "50% of jobs will be gone by 2027" because the data doesn't support that level of confidence.`,
              audioPrompt: `Confidence without evidence is making strong, specific claims with little or no supporting data, {name}. It is one of the most reliable tells that a source is not doing serious analysis. Real labor economists studying AI almost never say things like "these ten jobs will be completely gone by 2027" because the data doesn't support that level of confidence. Their predictions come with uncertainty ranges, hedges, and explicit acknowledgments of what is unknown. Viral AI content creators say exactly those dramatic things because confident drama drives engagement. "These jobs will be GONE by 2027" is shareable. "We estimate some restructuring in certain middle-skill roles over the next decade, with uncertain magnitude, depending on deployment patterns" is accurate but not viral. Recognizing confidence without evidence as a pattern, rather than as a sign of expertise, is one of the most useful tools in evaluating AI content. The more specific and confident the prediction, the more skeptical you should be.`,
            },
            {
              word: `incentive structure`,
              definition: `The set of financial, professional, or reputational rewards that shape how a source frames and communicates information. Part of rigorous source evaluation alongside methodology and evidence. AI labs, viral creators, and academic economists each have different incentive structures that influence their claims in different ways.`,
              audioPrompt: `An incentive structure is the set of financial, professional, or reputational rewards that shape how a source frames and communicates information, {name}. It is a core part of rigorous source evaluation alongside methodology and evidence. Every source has an incentive structure. David Autor and academic economists earn credibility and career standing by being accurate and having their claims survive expert scrutiny. AI labs earn investment and users by framing their technology as transformative and inevitable. Viral TikTok creators earn money directly from engagement, which rewards confident dramatic claims over careful uncertain ones. None of this means a source is automatically wrong because of its incentive structure. Acknowledging conflicts of interest doesn't mean the analysis is wrong. But understanding the incentive structure helps you ask the right questions when reading any source. Does this source benefit from you believing this specific claim? What would they lose by being uncertain? The point isn't to dismiss all monetized sources; it's to weigh the methodology, evidence, and incentive structure together. That combination is the actual skill of source evaluation.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l02-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On AI And The Workplace`,
          intro: `Three sources discuss AI and the future of work. Rank them from most credible to least credible based on methodology, evidence, and acknowledgment of uncertainty. Then see how a careful analyst would evaluate them.`,
          topic: `What is AI actually doing to work, and how do we tell rigorous analysis from hype?`,
          sources: [
            {
              id: `source-a`,
              name: `David Autor et al., "Applying AI to Rebuild Middle Class Jobs" (2024) — NBER Working Paper, peer-reviewed economics research`,
              type: `Working paper by David Autor (MIT professor of economics, one of the most cited labor economists alive) and collaborators, published through the National Bureau of Economic Research`,
              claim: `AI may reverse decades of labor market polarization by giving middle-skill workers tools that previously required specialist training. Specifically: workers with moderate skill levels can use AI to perform tasks that used to require years of additional education. If deployed this way, AI could rebuild middle-class jobs rather than eliminate them. The paper presents detailed analysis of how different occupational tasks are affected, distinguishes "exposure" from "automation," and is explicit about uncertainty. The conclusions are contrarian to much pop AI commentary but technically careful.`,
              evidence: `Author is one of the most cited labor economists in the world with decades of peer-reviewed publications on technological change and labor markets. NBER is a serious economic research institution; working papers are written for peer review and academic use. The paper provides detailed methodology, distinguishes empirical findings from speculation, acknowledges what's uncertain, and engages with opposing views. Autor's earlier work on labor market polarization has been heavily cited and replicated. He doesn't have direct financial interests in AI companies' success, though academic economists have their own incentive structures (publication, reputation).`,
            },
            {
              id: `source-b`,
              name: `Anthropic Economic Index — quarterly reports on AI usage patterns, 2025-2026`,
              type: `Series of reports published by Anthropic (AI lab that makes Claude) based on aggregated anonymized data from Claude conversations`,
              claim: `Anthropic's data shows AI is being used for a wide range of tasks across many industries: software development, writing, analysis, customer service, education, and more. Usage patterns suggest most users employ AI to augment their work (do more in less time) rather than to fully automate tasks. Specific industries show different adoption patterns. The reports distinguish raw usage data from claims about long-term effects, and are explicit about methodology limitations including that they only see Claude users, not the full labor market.`,
              evidence: `Anthropic is a major AI lab with real technical expertise. The reports are based on actual data from a substantial user base, which gives them empirical content other commentary lacks. Reports include detailed methodology and acknowledge limitations. However: Anthropic has obvious conflicts of interest. They benefit from AI being seen as transformative and inevitable. The data is from their own product, not the full labor market. Reading the reports critically means taking the empirical content seriously while being aware of the framing layer. Better source for understanding current usage patterns than for predicting long-term economic effects.`,
            },
            {
              id: `source-c`,
              name: `@AIProofYourCareer — TikTok account, 2.8M followers, sells $497 "AI-Proof Your Career in 30 Days" course`,
              type: `Viral TikTok account warning that AI will eliminate most jobs by 2027 and selling courses on which "AI-proof" careers to pursue`,
              claim: `"These 7 jobs will be COMPLETELY GONE by 2027—and AI is coming for YOUR job next. The economy is going to be UNRECOGNIZABLE in 3 years. But there are 5 'AI-proof' careers that will explode. My students have already pivoted to recession-proof fields making 6 figures. Don't wait until it's too late. Join my $497 AI-Proof Your Career in 30 Days course before prices go up Friday. The window is closing."`,
              evidence: `Predictions are confidently stated without uncertainty ranges; real labor economists almost never speak this way. Specific job lists are dramatic and shareable but rarely based on rigorous analysis. Claims about "students making 6 figures" are unverified anecdotes (cherry-picked examples). Course sale at the end; profit motive structural. No engagement with serious economic literature. Urgency creates pressure to buy. The pattern matches viral pseudo-economics content in many fields: confident drama, cherry-picked stories, course monetization. Real economists publishing predictions like these would lose academic credibility.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How did you weigh peer-reviewed academic research vs AI lab data vs viral content? What signals matter most?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A (David Autor) is the most credible for understanding the broad economic dynamics of AI and labor. Autor is one of the most cited labor economists in the world with decades of peer-reviewed work. The paper distinguishes empirical findings from speculation, acknowledges uncertainty, and engages with opposing views. Importantly, the conclusion is contrarian to much pop commentary (AI might help middle-skill workers rather than eliminate them), but it's defended rigorously rather than dramatically. Academic economists have their own incentive structures, but they're much less likely to make sensational predictions without evidence. For understanding the broad question of AI and labor markets, Autor and similar economists are the bedrock.`,
              `Source B (Anthropic Economic Index) is useful and credible for what it claims to measure. The data on actual AI usage patterns is real empirical content that economic theorizing alone can't produce. The reports are methodologically careful, distinguish data from speculation, and acknowledge limitations including that they only see Claude users. The conflicts of interest are real: Anthropic benefits from AI being seen as transformative. But conflicts of interest don't make the data wrong; they just mean readers should weigh the empirical content separately from the framing. For understanding current usage patterns, this is one of the better available sources. For long-range predictions, less credible.`,
              `Source C is recognizable viral AI content. The confident dramatic predictions, cherry-picked success stories, urgency framing, and course sale at the end all match patterns of pseudo-economics content. Real labor economists almost never speak with this level of confidence about specific job eliminations on short timelines because the data doesn't support such confidence. The financial incentive structure means revenue comes from emotional engagement and course sales, not from analytical accuracy. The person could be sincere; the format makes accuracy nearly impossible.`,
              `The deeper pattern. AI and labor is exactly the kind of high-stakes, uncertain, emotionally charged topic where pseudo-economics flourishes. People want to know what to do; viral content offers confident drama; serious economics offers careful uncertainty. The serious answer is usually less satisfying than the viral version but more actually useful. As you navigate AI's effects on your own future career, the source-evaluation framework here will protect you from both doom panic and false confidence. Real economists like David Autor, Daron Acemoglu, and Erik Brynjolfsson are publishing useful work. Serious AI lab research exists. Both deserve more attention than viral TikTok predictions, even when the viral content is emotionally compelling.`,
            ],
          },
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What has AI actually done to jobs as of 2026?`,
              options: [
                `Eliminated 50% of jobs`,
                `Significant productivity gains for many workers; restructuring of some entry-level roles; gradual shifts rather than sudden mass displacement; effects vary across industries, countries, and worker types; full effects still unfolding`,
                `Nothing observable`,
                `Created infinite new jobs`,
              ],
              correctIndex: 1,
              explanation: `Predictions from 2023-2024 of dramatic short-term mass unemployment didn't materialize. Predictions of "AI won't affect anything important" were also wrong. The reality is more nuanced and still developing.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "generative AI"?`,
              options: [
                `A type of generator`,
                `Class of AI systems that produce new content (text, images, code, audio, video) based on patterns learned from training data; includes large language models like GPT, Claude, Gemini; distinct from earlier discriminative AI that primarily classified existing content`,
                `Old computer technology`,
                `Internet search`,
              ],
              correctIndex: 1,
              explanation: `Generative AI's mainstream emergence in late 2022 with ChatGPT is one of the most significant technology shifts in decades. By 2026, it's a normal tool in most office work.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "labor market polarization"?`,
              options: [
                `Workers being divided politically`,
                `Phenomenon documented by David Autor and others: hollowing out of middle-skill jobs (routine clerical, basic manufacturing) while both high-skill and low-skill jobs grow; major pattern of US labor markets since ~1980; AI may extend or reverse it`,
                `Workers freezing in cold places`,
                `Magnetic worker attraction`,
              ],
              correctIndex: 1,
              explanation: `Autor's research on polarization has been influential for over two decades. AI represents the next major technological force that may extend the pattern, reverse it, or change it in new ways. His 2024 work suggests AI might actually help middle-skill workers.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why are working labor economists more reliable than viral AI content?`,
              options: [
                `They're older`,
                `They cite data, distinguish what's measured from what's speculated, acknowledge what they don't know, publish in peer-reviewed venues, and have predictions with ranges/uncertainties rather than single dramatic numbers; less entertaining but more reliable`,
                `They're official`,
                `Random chance`,
              ],
              correctIndex: 1,
              explanation: `The methodology and incentive structure matter. Real economists are rewarded for accurate analysis over time. Viral content creators are rewarded for engagement, which favors drama over accuracy.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's a "conflict of interest" in source evaluation?`,
              options: [
                `Two people arguing`,
                `Situation in which a person or organization's primary interests (financial, professional) might influence their stated analysis; doesn't mean analysis is wrong, but means readers should be aware of the incentive structure; important consideration in evaluating sources`,
                `Fighting over money`,
                `Business problem`,
              ],
              correctIndex: 1,
              explanation: `AI labs have conflicts of interest when commenting on AI's economic effects. So do TikTok creators selling courses. So do academic economists in different ways. Acknowledging conflicts is part of doing source evaluation well; ignoring them produces naive readings.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why aren't AI labs automatically dismissed as sources?`,
              options: [
                `Because they're big companies`,
                `Researchers at AI labs include world's best technical experts on these systems; have real expertise outside researchers lack; dismissing as "just marketing" is as wrong as accepting uncritically; the skill is reading carefully and weighing source credibility against incentives`,
                `Because they're official`,
                `Because they're funded`,
              ],
              correctIndex: 1,
              explanation: `Real source evaluation isn't about dismissing entire categories. It's about reading carefully, distinguishing technical content from marketing layer, and weighing credibility against incentives. AI lab research has real value when read this way.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's "cherry-picking" and why is it a viral content pattern?`,
              options: [
                `Picking fruit`,
                `Selecting only evidence that supports a desired conclusion while ignoring contradicting evidence; common pattern where individual dramatic stories are presented as proof of larger patterns; avoided by serious researchers through systematic methodology`,
                `Choosing cherries`,
                `A type of game`,
              ],
              correctIndex: 1,
              explanation: `"One person made $50K with AI" and "one person got laid off because of AI" are both real stories but neither establishes the broader pattern. Cherry-picking drives engagement (dramatic stories are shareable) but undermines analysis.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "calibrated confidence"?`,
              options: [
                `Being careful`,
                `Holding beliefs with confidence levels that match actual evidence; high confidence when evidence is strong, low when weak, uncertainty when mixed; distinct from "always uncertain" (paralysis) and "always confident" (overconfidence)`,
                `Mathematical certainty`,
                `Religious faith`,
              ],
              correctIndex: 1,
              explanation: `Calibrated confidence is one of the most useful intellectual skills available. AI labor questions provide good practice: some claims have strong evidence, others weak, others mixed. Treating each according to actual evidence is the goal.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All confidently stated AI labor predictions on TikTok are wrong; therefore TikTok is useless for AI information.`,
              correctAnswer: false,
              explanation: `False. The framing is too sweeping. Some TikTok creators (and some long-form podcasters, newsletter writers, etc.) offer serious analysis. The pattern to recognize isn't "TikTok = wrong" but "confidently dramatic predictions without uncertainty ranges, cherry-picked anecdotes, course sales = unreliable signal regardless of platform." Source quality varies more by methodology than by platform.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I saw a TikTok that AI will replace 80% of jobs by 2028; I should immediately switch career goals." Based on this lesson, what's the most useful response?`,
              options: [
                `"Yes, switch immediately"`,
                `"That prediction is far more confident than the actual evidence supports. Real labor economists like David Autor don't make claims like that because the data doesn't support them. AI is having real effects—productivity gains, entry-level hiring shifts, gradual restructuring—but the dramatic mass-replacement predictions from 2023-2024 haven't materialized as fast as claimed. Switching career goals based on a single confident TikTok is exactly the kind of decision viral content is designed to provoke. Better to read serious labor economics (David Autor, Daron Acemoglu, Erik Brynjolfsson) and the Anthropic Economic Index alongside the viral content, then make decisions with calibrated confidence."`,
                `"AI doesn't matter"`,
                `"Career planning is fake"`,
              ],
              correctIndex: 1,
              explanation: `Real applied AI labor literacy. Honor the friend's serious question (career decisions matter) without endorsing the viral framing. Point to better sources. This is how the source-evaluation framework actually protects people from making decisions based on bad information.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, where did you mostly get information about AI and jobs? Has anything shifted about which sources you trust?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `When you encounter AI content online, what's your default reaction—excitement, fear, dismissal? How does that affect what you're willing to believe?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can distinguish rigorous AI analysis from viral hype, what does that change about how you make future career decisions?` },
            { id: `reflect-application`, category: `Application`, prompt: `Find one AI prediction in your social media feed today. Apply the lesson's framework. Where does it fall on the credibility spectrum?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there serious AI labor sources the lesson didn't cover? What about labor activists, AI ethicists, or workers in affected fields? Do those count as serious sources?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult in tech or knowledge work: how has AI actually affected their job over the past 2 years? What patterns do they see vs what they read online?` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `AI literacy is one of the most useful skills for the world you're growing into. Two paths.`,
          familyActivity: {
            title: `The Family AI Reality Check`,
            duration: `40 minutes`,
            description: `At dinner, share what you learned about AI and the workplace. Ask each adult: how has AI actually affected their work over the past 2 years? Have they noticed productivity changes, hiring shifts, new tools, or anything else? Compare their direct experience with the AI content they see on social media. Most families will find that the lived experience is more nuanced (productivity gains, some friction, ongoing learning) than the viral coverage (everyone fired tomorrow or magical productivity gold rush). The conversation often calibrates everyone's expectations productively.`,
          },
          projectOption: {
            title: `Track One AI Labor Source For A Month, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per week`,
            description: `Pick one serious source on AI and labor: David Autor's research page (NBER), the Anthropic Economic Index, Erik Brynjolfsson's Stanford work, Ben Thompson's Stratechery, or another. Follow it for 4 weeks. Write 1,500 words synthesizing what you learned about the actual state of AI's labor effects vs the viral coverage. Real applied media literacy at a level few adults reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Sustained engagement with serious AI sources is genuinely formative.`,
          },
          identityQuestion: `If you become someone who can distinguish rigorous AI analysis from viral hype, what does that mean for the decisions you'll make about your own career, education, and skills over the next 10 years?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows David Autor and Anthropic Economic Index are better sources than viral TikToks for understanding AI's labor effects.`,
            `A person who recognizes "AI will eliminate X jobs by Y" predictions as the viral pattern they are.`,
            `Someone willing to navigate AI's economic effects with calibrated confidence instead of panic or hype.`,
          ],
          saveKey: `identity_responses_fs_11_12_02`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. Second Future Skills lesson done. You can now distinguish serious AI labor research (Autor, Acemoglu, Brynjolfsson) from AI lab analyses (Anthropic Economic Index, OpenAI economic papers) from viral AI content. You know what's actually happening in the labor market as of 2026 (productivity gains, gradual restructuring, not mass replacement). You understand conflicts of interest, cherry-picking, and calibrated confidence. You can navigate AI economic content with adult-level source evaluation. Most adults can't. Next time we go into one of the most important meta-skills: learning how to learn. Three real learners, three different approaches, real learning science. Case Study format. Let's go. — Byte`,
          badge: `ai-economy-analyst`,
          badgeName: `AI Economy Analyst`,
          xpEarned: 75,
          competencies: [
            `Articulates what AI has actually done to the labor market as of 2026 (nuanced, not dramatic)`,
            `Knows major labor economists studying AI (Autor, Acemoglu, Brynjolfsson)`,
            `Recognizes AI lab research as expert but conflicted; reads carefully`,
            `Identifies viral AI content patterns (confident drama, cherry-picking, course sales)`,
            `Applies calibrated confidence to AI labor predictions`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Learning How to Learn`,
            hook: `Three real learners, three approaches, real learning science. Spaced repetition, deliberate practice, growth mindset. Case Study format.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L02 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
