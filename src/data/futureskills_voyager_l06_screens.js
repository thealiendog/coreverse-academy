// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L06 — Working With AI as a Tool
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — AI Literacy, Media Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026) — honest about what AI actually does well/badly
// Interaction format: SOURCE EVALUATION (researcher vs AI lab guidance vs viral productivity hype)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l06-v1";

const FUTURESKILLS_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-06`,
      title: `Working With AI as a Tool`,
      duration: 35,
      xpReward: 75,
      badge: `ai-tool-user`,
      badgeName: `AI Tool User`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, AI tools are genuinely useful and genuinely unreliable. The failure modes — hallucination, sycophancy, context loss — are predictable once you understand how the tools work. This lesson covers what AI does well, what it doesn't, and how to build workflows that use AI for the right things.`,
          headline: `Working With AI as a Tool`,
          subtitle: `How to actually use AI well, and how to tell rigorous advice from viral hype.`,
          visual: `/voyager-assets/future-skills/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What AI Tools Actually Do Well (And Don't)`,
          paragraphs: [
            `Generative AI tools (large language models like Claude, ChatGPT, Gemini; image generators like Midjourney; code assistants like Cursor and GitHub Copilot) are genuinely useful for a specific range of tasks. They're also genuinely bad at others. The line between the two is sharper than most viral content suggests.`,
            `What they do well. Drafting (text, code, plans) when you can edit afterward. Summarizing long documents into shorter ones. Brainstorming when you want many options to consider. Explaining concepts in different ways until you find one that clicks. Translating between languages or styles. Coding routine tasks where the patterns are common. Acting as a thinking partner you can think out loud with. Quick research where you can verify the key claims afterward. Producing first drafts of nearly anything.`,
            `What they do poorly. Generating reliable factual claims about specific people, dates, numbers, or events (they "hallucinate" — produce plausible-sounding but wrong information). Tasks requiring precise reasoning about novel problems (they pattern-match better than they reason). Tasks where being wrong is costly and verification is hard (medical diagnosis, legal advice, financial decisions). Anything requiring physical embodiment. Anything requiring real-world updates (their knowledge has a cutoff date and they often don't know what they don't know about recent events). Creative work that requires genuine novelty rather than recombination of training data.`,
            `One important framing. AI tools have improved rapidly since 2022, and they'll keep improving. The specific weaknesses described above will shift over time. But the meta-pattern (some tasks AI does well, others it doesn't, the line keeps moving) will continue to matter. Knowing how to think about the line is more important than memorizing today's specifics.`,
          ],
          image: `/voyager-assets/future-skills/l06-s1-actual.webp`,
          imageCaption: `What AI does well: drafting, summarizing, brainstorming, explaining. What it does poorly: novel reasoning, precise facts, anything where wrong is costly.`,
          vocab: [
            {
              word: `hallucination`,
              definition: `Tendency of large language models to produce plausible-sounding but factually wrong information. The model generates text statistically similar to its training data without distinguishing what it actually knows from what just sounds right. Major reason AI cannot be trusted for factual claims without verification.`,
              audioPrompt: `Hallucination in AI is the tendency of large language models to produce plausible-sounding but factually wrong information, {name}. The term is borrowed from human psychology but it's misleading. The AI isn't perceiving things that aren't there. It's generating text statistically similar to its training data without distinguishing what it actually knows from what just sounds right. The model can produce a confidently stated date, name, or fact that is completely fabricated. This is the major reason AI cannot be trusted for factual claims without verification. The hallucination rate has improved with newer models but it has not been eliminated. Researchers expect it to keep improving over time but it will probably never reach zero. Knowing AI hallucinates is one of the most important things to internalize before relying on its outputs.`,
            },
            {
              word: `large language model`,
              definition: `Type of AI system trained on large amounts of text to predict and generate language. The technology underlying Claude, ChatGPT, and Gemini. Good at drafting, summarizing, explaining, and translating. Distinct from image generators and code-specific tools. Tends to pattern-match rather than reason from first principles.`,
              audioPrompt: `A large language model, or LLM, is a type of AI system trained on large amounts of text to predict and generate language, {name}. It is the technology underlying tools like Claude, ChatGPT, and Google Gemini. The model learns statistical patterns in text rather than explicit rules, which is why it can produce fluent, coherent writing across many topics. It is also why it hallucinates: it generates text that looks statistically like what a correct answer would look like, without actually knowing whether the facts are accurate. Large language models are good at tasks that primarily involve language: drafting, summarizing, explaining, brainstorming, translating, and coding. They're weaker at tasks that require novel reasoning about specific real-world facts or deep causal understanding. Knowing that LLMs work this way — pattern completion rather than true understanding — helps you predict where they'll be reliable and where they'll fail.`,
            },
            {
              word: `knowledge cutoff`,
              definition: `The date after which a language model has no training data and cannot know about events. AI models trained before a certain date do not know about developments after that date and often don't accurately know what they don't know about recent events. A structural limitation of all large language models with fixed training data.`,
              audioPrompt: `Knowledge cutoff is the date after which a language model has no training data and cannot know about events, {name}. AI models are trained on data collected up to a specific point in time. After that point, they have no information about what happened in the world. And they often don't accurately know what they don't know about recent events. A model trained through mid-2024 might not know about developments from late 2024 or 2025, and might answer questions about those periods by confidently drawing on whatever related patterns it does know, which produces hallucination about recent events specifically. Knowledge cutoff is one of the structural limitations of all large language models with fixed training data. For any question involving recent events, recent research, or current conditions, you should verify AI outputs against up-to-date primary sources rather than trusting the AI's response.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Effective Patterns: How To Actually Use AI Well`,
          paragraphs: [
            `Real research on how people use AI effectively has accumulated over the last few years. Ethan Mollick at Wharton has been one of the most rigorous voices, both in his academic research and in his accessible book "Co-Intelligence" (2024). Several patterns recur across the research.`,
            `First: AI works best as a co-worker, not a replacement worker. Mollick's framing: AI is like a fast intern who is good at a lot of things but inconsistent and never the final authority. You direct the work, evaluate the output, and decide what stays. Treating AI as a finished-product producer almost always disappoints. Treating it as a draft producer almost always helps.`,
            `Second: be specific about what you want. Vague prompts produce vague output. Specific prompts (what kind of output, for what audience, in what style, of what length, with what constraints) produce better output. The same is true of human communication, but it matters more with AI because AI lacks the context you'd otherwise share.`,
            `Third: iterate. The first output is rarely the best output. Ask for revisions, give specific feedback, try different prompts. The work happens in the loop between you and the AI, not in any single response. People who treat AI as one-shot get worse results than people who treat it as conversational.`,
            `Fourth: verify anything that matters. Hallucinations are real. Facts get fabricated. Citations get invented. Anything you'd care about being wrong should be checked against primary sources. This isn't a flaw in AI use; it's a built-in feature of using AI responsibly.`,
            `Fifth: use it where it shines, do other things yourself. AI is useful for tasks at the edge of your competence: things you could do but slowly, or things you understand but haven't fully internalized. It's less useful for tasks central to your expertise (where you already do them better) or far outside your competence (where you can't tell if its output is correct). The "expanding cone of competence" is where AI multiplies your effectiveness.`,
          ],
          image: `/voyager-assets/future-skills/l06-s2-patterns.webp`,
          imageCaption: `Effective use: co-worker not replacement, specific prompts, iterate, verify, use it at the edges of your competence.`,
          vocab: [
            {
              word: `prompt engineering`,
              definition: `The skill of writing effective inputs to AI tools. Includes specifying what you want, providing context, giving examples, setting constraints, and structuring the request. Not magic; mostly clear instruction with examples. Has become a real applied skill since 2022. Tactics evolve as models improve.`,
              audioPrompt: `Prompt engineering is the skill of writing effective inputs to AI tools, {name}. It includes specifying what you want, providing context, giving examples, setting constraints, and structuring the request clearly. Not magic. Mostly just clear instruction with relevant examples. Has become a real applied skill since 2022. Some patterns work well across many models: be specific about format and audience, give one or two examples of what good output looks like, break complex tasks into steps, ask the model to think through its reasoning before answering. Tactics evolve as models improve; the broad principles stay stable. The same clear-thinking skills that produce good human communication produce good AI prompts. Don't believe people selling "secret prompts" for hundreds of dollars; the actual skill is much more boring than that.`,
            },
            {
              word: `co-worker framing`,
              definition: `Ethan Mollick's framework for using AI well: treat AI like a fast intern who is good at a lot of things but inconsistent and never the final authority. You direct the work, evaluate the output, and decide what stays. Contrasted with the replacement worker framing where AI produces finished products without human judgment involved.`,
              audioPrompt: `The co-worker framing is Ethan Mollick's framework for thinking about effective AI use, {name}. Mollick, based on his research at Wharton, suggests treating AI like a fast intern who is good at a lot of things but inconsistent and never the final authority. You direct the work. You evaluate the output. You decide what stays. This is different from treating AI as a replacement worker who produces finished products you hand in or use directly. The co-worker framing explains why iterating rather than expecting one-shot results is so important. A fast intern's first draft is a starting point, not a finished product. You apply your own judgment and expertise to improve it. This also explains why AI is most useful at the edge of your competence: you need to be close enough to the domain to evaluate what the intern produced. The framing isn't perfect but it's one of the most practical mental models available for using AI in a way that actually builds rather than replaces your own capability.`,
            },
            {
              word: `verification habit`,
              definition: `Practice of checking AI-generated claims against primary sources before acting on or sharing them. Essential because AI hallucinates: it produces confident-sounding but fabricated facts, invented citations, and flawed arguments. Anything you'd care about being wrong should be checked. Not a flaw in AI use; a built-in requirement of responsible AI use.`,
              audioPrompt: `Verification habit refers to the practice of checking AI-generated claims against primary sources before acting on or sharing them, {name}. It is one of the five key patterns of effective AI use, and perhaps the one most consistently skipped. AI hallucinates. It produces confident-sounding but fabricated facts, invented citations, and flawed arguments. The problem is that hallucinations don't sound like hallucinations. They sound like normal, confident statements. A well-written paragraph with a wrong fact looks identical to a well-written paragraph with a correct fact. Users who read smoothly written output and assume it's accurate get burned regularly. The verification habit means: anything you'd care about being wrong should be checked against actual primary sources. Dates, specific statistics, citations, quotes, claims about real people or events. This isn't a sign that AI is useless. It's a built-in requirement of using any tool that sometimes fails in non-obvious ways. Developing this habit early makes AI much safer and more useful across your entire life.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Common Failure Modes To Watch For`,
          paragraphs: [
            `Knowing what works requires also knowing where AI use commonly goes wrong. Several failure modes recur across many users and tasks.`,
            `First failure: outsourcing thinking. Some people use AI to avoid thinking rather than to enhance their thinking. The AI drafts the essay; the student doesn't engage with the ideas; they submit it and learn nothing. Used this way, AI is a learning anti-tool. The skill it's substituting for (thinking through hard problems) is exactly the skill that builds expertise over time. Avoiding it short-term makes you less capable long-term. The kids who use AI to think with rather than think instead of are building real capability.`,
            `Second failure: trusting outputs without verification. AI can produce a confident, well-written paragraph that contains a wrong fact, an invented citation, or a flawed argument. Users who read smoothly written output and assume it's accurate get burned regularly. This is especially dangerous because hallucinations don't sound like hallucinations; they sound like normal, confident statements. The rule: anything that matters needs verification against primary sources.`,
            `Third failure: assuming consistency. AI outputs vary across runs. The same prompt can produce slightly different responses. Sometimes the variation matters. Users who treat AI as deterministic miss that and get inconsistent quality across their work.`,
            `Fourth failure: ignoring context limits. Models have context windows; if you feed them too much, parts get dropped. They can also degrade across long conversations. Knowing the model's actual capabilities prevents the frustration of expecting more than it can deliver.`,
            `Fifth failure: over-relying on AI for things it does badly. Reasoning about novel problems, precise factual claims, areas requiring deep judgment, work where being wrong is costly. People who use AI for these tasks without realizing the risk produce work that looks polished but is structurally weak. The skill is matching tool to task.`,
          ],
          image: `/voyager-assets/future-skills/l06-s3-failures.webp`,
          imageCaption: `Common failures: outsourcing thinking, trusting unverified outputs, ignoring inconsistency and limits.`,
          vocab: [
            {
              word: `outsourcing thinking`,
              definition: `Pattern where AI is used to avoid mental effort rather than enhance it. Produces short-term convenience and long-term skill atrophy. The thinking skill the AI substitutes for is often exactly the skill that builds expertise over time. Distinct from using AI to extend or scale thinking you're already doing.`,
              audioPrompt: `Outsourcing thinking is the pattern where AI is used to avoid mental effort rather than enhance it, {name}. The student who uses AI to draft an essay they don't engage with. The professional who uses AI to write reports they don't think through. The kid who uses AI to do their math homework rather than learn the math. Each case produces short-term convenience and long-term skill atrophy. The thinking skill being substituted for is often exactly the skill that builds expertise over time. Avoiding it short-term makes you less capable long-term. There's a real distinction here. Using AI to extend or scale thinking you're already doing is fine. Using AI to skip thinking entirely is corrosive to your own capability. The line is whether you're still doing the underlying intellectual work.`,
            },
            {
              word: `context window`,
              definition: `The maximum amount of text a language model can process in a single conversation, beyond which earlier content gets dropped or degraded. One of the structural limitations of AI tools. Feeding too much text into a conversation can cause parts to be missed. Models can also degrade across very long exchanges.`,
              audioPrompt: `Context window is the maximum amount of text a language model can process in a single conversation, {name}. Beyond this limit, earlier parts of the conversation may get dropped entirely or degraded in how much they influence the model's responses. It is one of the structural limitations of AI tools that directly affects how you use them. If you're working on a complex task that requires the model to keep many things in mind simultaneously, exceeding the context window can produce confusing or inconsistent responses. The same prompt can produce different results depending on how much conversation history precedes it. Models can also show degraded performance across very long exchanges even within their context limit. Knowing this limitation prevents the frustration of expecting more than the model can deliver, and helps you structure your AI interactions in ways that stay within effective operating conditions.`,
            },
            {
              word: `tool-task matching`,
              definition: `Practice of using AI only for tasks where it is actually effective. Using AI for things it does poorly — novel reasoning, precise facts, high-stakes decisions — produces work that looks polished but is structurally weak. Effective AI use requires accurately assessing which tasks benefit from AI assistance and which should be done without it.`,
              audioPrompt: `Tool-task matching is the practice of using AI only for tasks where it is actually effective, {name}. This is the core skill underlying most of the specific advice in this lesson. AI does some things well: drafting, summarizing, brainstorming, explaining, translating. It does other things poorly: novel reasoning, precise factual claims, high-stakes decisions where being wrong is costly. People who use AI for things it does poorly, without realizing the risk, produce work that looks polished but is structurally weak. The essay with the hallucinated citation. The report with the plausible but wrong statistic. The advice that sounded reasonable but missed key considerations. Real AI skill includes accurately assessing which tasks benefit from AI assistance and which tasks should be done without it. This assessment changes as models improve. The meta-skill is developing the judgment to assess each task rather than either using AI for everything or avoiding it entirely.`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Viral AI Productivity Content Ecosystem`,
          paragraphs: [
            `A large ecosystem of viral content sells AI productivity advice. TikTok and YouTube creators promising "10 prompts that will 10x your life." Substacks pitching "the prompt no one's talking about." Courses promising to teach you "the secret techniques top performers use." Affiliate-link compilations of "essential AI tools." The content varies in quality. Most of it is, charitably, not very good.`,
            `Several patterns recur. First: confident drama about specific tactics. "This ONE prompt template will change your life." Real prompt engineering is mostly clear thinking applied to instruction-writing; there are no magic templates. Specific templates can be useful in specific contexts; treating any one as universally transformative is the tell of viral content.`,
            `Second: rapidly dating advice. AI models change every few months. A "best prompt techniques" video from 18 months ago often contains tactics that no longer work or that have been replaced. Viral content rarely flags this; it presents tactics as if they were stable laws. Reading any AI advice critically means asking how recently it was produced and whether the underlying models still behave that way.`,
            `Third: monetization through courses and tool affiliate links. Many creators earn revenue from courses (often hundreds of dollars), affiliate links to AI tools (commissions on sign-ups), or sponsored content. None of these are inherently bad. They do create incentives to overstate the value of specific tools or techniques. Free real-research blogs and books often outperform paid courses on this material.`,
            `Fourth: claims of dramatic productivity gains without rigorous measurement. "I got 5x more productive with AI." Sometimes true in specific narrow contexts. Often unmeasured and unverifiable. Real productivity gains from AI are real but variable across tasks and users. Brynjolfsson's 2023 study found ~14% productivity gains in customer service tasks; some specific knowledge work shows larger gains; some shows none. The honest picture has uncertainty that viral content doesn't.`,
            `Fifth: AI manifestation content. A particularly strange genre has emerged combining AI hype with manifestation tropes. "Manifest your AI-enabled wealth." "Use AI to align with abundance." This combines the manifestation pseudoscience we covered in Lesson 2 of Inner World with the AI productivity hype here. When you see them combined, both flags are flying. There is no AI prompt that "manifests" outcomes through cosmic alignment.`,
          ],
          image: `/voyager-assets/future-skills/l06-s4-viral.webp`,
          imageCaption: `Viral AI productivity content: drama, dating advice, monetization, unmeasured claims, manifestation crossover.`,
          vocab: [
            {
              word: `survivor bias`,
              definition: `Tendency to focus on visible successes while ignoring invisible failures. Viral AI productivity content typically features dramatic wins ("AI helped me 10x my output") while ignoring people who got similar advice and didn't see those results. The sample is filtered by visibility, not by representativeness. Makes the techniques look more reliable than they are.`,
              audioPrompt: `Survivor bias is the tendency to focus on visible successes while ignoring invisible failures, {name}. The classic example: studying surviving WWII planes returned with bullet holes in certain locations, military analysts initially wanted to reinforce those locations. The statistician Abraham Wald pointed out the error: planes hit in OTHER locations didn't come back at all. The bullet holes on returning planes showed where planes could survive being hit. Survivor bias is everywhere in productivity content. Viral AI advice features people who got dramatic results. People who tried the same advice and got nothing rarely make videos. The sample is filtered by visibility, not by representativeness. This makes techniques look more reliable than they are. Recognizing survivor bias is one of the most useful patterns for media literacy.`,
            },
            {
              word: `dating advice`,
              definition: `In the context of AI content, advice that rapidly becomes outdated because AI models change every few months. Tactics from 18 months ago may no longer work or may have been replaced. Viral AI content rarely flags this, presenting tactics as stable when they are not. Reading any AI advice critically includes asking how recently it was produced.`,
              audioPrompt: `Dating advice, in the context of AI content, refers to advice that rapidly becomes outdated because AI models change every few months, {name}. This is distinct from the ordinary meaning of dating advice. A "best prompt techniques" video from 18 months ago often contains tactics that no longer work or that have been replaced by simpler approaches in newer models. Models have gotten substantially better at following nuanced instructions, which has changed which specific prompt structures produce the best results. Viral AI content rarely flags when its tactics are dated; it presents them as if they were stable laws of AI use. Reading any AI advice critically means asking when it was produced and whether the underlying models still behave that way. This is one reason research-grounded sources like Mollick's work tend to age better than viral content: research-grounded sources explain the underlying principles, which are more stable than the specific tactics. Specific tactics date; underlying patterns date much more slowly.`,
            },
            {
              word: `affiliate link`,
              definition: `A link that pays the person sharing it a commission when someone clicks and makes a purchase or signs up. Common in viral AI productivity content, where creators earn revenue from recommending AI tools and courses. Creates an incentive to recommend tools based on commission rate rather than actual quality. One factor to consider when evaluating any productivity content.`,
              audioPrompt: `An affiliate link is a link that pays the person sharing it a commission when someone clicks and makes a purchase or signs up, {name}. It is common in viral AI productivity content. Creators earn revenue from recommending AI tool subscriptions, course purchases, and other products through affiliate programs. The affiliate model creates a structural incentive to recommend tools based on commission rate rather than actual quality or usefulness for a specific task. Many viral AI productivity channels compile "essential AI tools" lists where every tool has an affiliate link. The list may be genuinely useful, or it may primarily feature tools that pay the best commissions. This doesn't mean all affiliate-linked recommendations are wrong. It means knowing about the incentive structure helps you weigh the recommendation more accurately. The same tool recommended by a researcher with no commercial relationship to it, versus by a creator earning revenue from signups, warrants different levels of skepticism. One factor among several when evaluating any AI productivity content.`,
            },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources making different claims about how to use AI effectively. The first is Ethan Mollick's "Co-Intelligence" (2024), based on his research at Wharton. The second is the official Anthropic prompt engineering documentation (a representative AI lab guidance document). The third is a viral YouTube creator selling a "Master AI Prompts" course.`,
            `As you rank them, apply the source-evaluation framework from earlier in this band. What's the author's expertise? What's the methodology behind their claims? What conflicts of interest exist? What's the financial incentive structure? Are the claims falsifiable or vague? Does the source acknowledge uncertainty and limits?`,
            `One framing as you work. AI labs have real expertise and real conflicts of interest. Their documentation is technically careful but framed to encourage you to use their tools heavily. Academic researchers like Mollick have less conflict but also limited access to certain internal information. Viral creators have neither the expertise nor the institutional incentives toward accuracy. None of these sources is perfectly objective; the skill is weighing each one's strengths against its incentives.`,
            `One last framing. Working with AI is going to be a normal part of your life. Building good habits early is much easier than fixing bad habits later. The kids who develop calibrated, skilled, verification-oriented AI use at 12 will outpace the kids who either avoid AI entirely or rely on it without thinking. The framework you build now compounds for decades.`,
          ],
          image: `/voyager-assets/future-skills/l06-s5-before.webp`,
          imageCaption: `Three sources. Three methodologies. Three incentive structures. Real source evaluation.`,
          vocab: [
            {
              word: `cone of competence`,
              definition: `Range of tasks where you can evaluate whether output is correct. Inside the cone, you can use AI safely because you can check its work. Far outside the cone, you can't tell if AI output is right or wrong, which makes its use risky. AI is most useful at the edge of your cone of competence: tasks you could do but slowly, or tasks you understand but haven't internalized.`,
              audioPrompt: `Cone of competence is a useful concept for thinking about where AI is genuinely helpful, {name}. Your cone of competence is the range of tasks where you can evaluate whether output is correct. Inside your cone, you can use AI safely because you can check its work. Far outside your cone, you can't tell if AI output is right or wrong, which makes its use risky. AI is most useful at the edge of your cone of competence: tasks you could do but slowly, or tasks you understand at a basic level but haven't internalized at expert level. Using AI deep in your expertise produces little gain because you already do those tasks better. Using AI far outside your expertise produces hidden risk because you can't tell when AI is wrong. The edge is where AI multiplies effectiveness without creating quality risk.`,
            },
            {
              word: `AI habits`,
              definition: `The patterns of AI use you develop early, which compound over years. Building calibrated, verification-oriented AI use at 12 produces dramatically better long-term outcomes than developing habits of uncritical reliance. The habit of iterating, verifying, and using AI at the edge of your competence, built early, compounds across decades of AI-integrated work.`,
              audioPrompt: `AI habits are the patterns of AI use you develop early, which compound over years, {name}. Working with AI is going to be a normal part of your life. The habits you build now shape how effective your AI use will be for decades. The kid who develops calibrated, verification-oriented AI use at 12 — iterating rather than expecting one-shot results, verifying anything that matters, using AI at the edge of their competence rather than instead of their thinking — will outpace the kid who develops habits of uncritical reliance or total avoidance. Both bad habits compound negatively: uncritical reliance erodes your ability to catch errors and builds dependency; total avoidance leaves you slower and less effective than peers who use AI well. The calibrated middle path, using AI as a co-worker while maintaining your own judgment and verification habits, produces the best long-term outcomes. The framework you build now runs for decades.`,
            },
            {
              word: `AI manifestation content`,
              definition: `A genre that combines AI productivity hype with manifestation tropes: "manifest your AI-enabled wealth," "use AI to align with abundance." Combines the pseudoscience of manifestation with AI hype. When both patterns appear together, both flags are flying: no AI prompt manifests outcomes through cosmic alignment, and no abundance mindset makes AI tools work better.`,
              audioPrompt: `AI manifestation content is a particularly unusual genre that combines AI productivity hype with manifestation tropes, {name}. Examples include claims like "manifest your AI-enabled wealth," "use AI to align with abundance," and "the AI revolution is the cosmic opportunity you've been waiting for." This combines two distinct problems from different lessons. From this lesson: AI productivity hype that overstates what AI tools can do and sells courses promising secrets that don't exist. From earlier lessons: the manifestation pseudoscience claiming that mental states directly cause physical outcomes in the external world through cosmic forces. When you see both patterns combined in the same content, both flags are flying simultaneously. There is no AI prompt that "manifests" outcomes through cosmic alignment. Real productivity gains from AI are documented, moderate, variable by task, and dependent on skill in using the tools, not on alignment with abundance. The combination of two forms of hype is a reliable signal that neither has much to offer.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l06-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On How To Use AI Well`,
          intro: `Three sources offer advice on how to use AI as a tool. Rank them from most credible to least credible based on methodology, evidence, and incentive structure. Then see how a careful analyst would evaluate them.`,
          topic: `How do you actually use AI effectively, and how do you tell rigorous guidance from viral productivity hype?`,
          sources: [
            {
              id: `source-a`,
              name: `Ethan Mollick, "Co-Intelligence: Living and Working with AI" (2024) — popular book based on academic research`,
              type: `Book by Ethan Mollick, associate professor at the Wharton School of the University of Pennsylvania, based on years of research on AI's effects on knowledge work plus extensive personal experimentation`,
              claim: `AI works best as a co-worker, not a replacement worker. The book lays out specific frameworks: treat AI like a "fast intern" who is inconsistent but useful; use it at the edge of your competence; iterate rather than expecting one-shot results; always verify anything that matters. Mollick distinguishes empirically supported claims from his own observations from speculation, and is explicit about uncertainty. He addresses common failure modes including hallucinations and outsourcing thinking. The book engages with the rapid pace of model improvement and notes that specific tactics will date even when underlying principles remain.`,
              evidence: `Author is an established academic with peer-reviewed publications on innovation and entrepreneurship and a strong track record of careful research. He runs the Generative AI Lab at Wharton, which produces actual empirical studies on how people use AI in work. The book is grounded in his research rather than personal anecdotes, distinguishes well-supported claims from speculation, and addresses opposing views fairly. He has a popular Substack ("One Useful Thing") with consistent, careful writing on AI. Some conflict of interest exists (his career benefits from AI being seen as transformative), but it's the modest conflict every working researcher has. Better source for understanding actual AI use patterns than nearly any alternative currently available.`,
            },
            {
              id: `source-b`,
              name: `Anthropic prompt engineering documentation — official guidance from the AI lab that makes Claude`,
              type: `Technical documentation maintained by Anthropic on how to write effective prompts for Claude, with regular updates as models evolve`,
              claim: `Documents specific techniques that work well with Claude: being specific about what you want, providing examples, using structured prompts with XML tags for complex tasks, breaking complex requests into steps, asking the model to think through reasoning before answering. The documentation is technically detailed and updated as models change. It acknowledges that techniques are model-specific and may not transfer to other AI systems. It does not make broad productivity claims; it focuses on getting good outputs from a specific tool.`,
              evidence: `Authors are AI researchers and engineers at one of the major AI labs with direct technical knowledge of how their model works. The documentation is technically careful, regularly updated, and acknowledges model-specific behavior. Conflict of interest is real and structural: Anthropic profits from people using Claude. The documentation encourages heavier use of their tools, which is in their commercial interest. However, the technical content is accurate; the conflict shapes framing more than facts. Good source for using Claude specifically. Should be combined with broader perspective from sources like Mollick for understanding how to use AI generally.`,
            },
            {
              id: `source-c`,
              name: `@AIMillionairePrompts — YouTube channel, 1.4M subscribers, sells $297 "Master AI Prompts" course with weekly updated "money-making prompt packs"`,
              type: `Viral YouTube creator producing weekly videos with titles like "The ONE prompt that 10x'd my income" and "Use AI to make $500/day passively," selling courses and prompt packs`,
              claim: `"There's ONE prompt template the top 1% are using that nobody is talking about. Most AI advice is OUTDATED. My students are making $500/day passively using my exact templates. Join my $297 Master AI Prompts course (ending Friday — $497 after that) and get my weekly money-making prompt pack updates. AI is going to make you rich if you have the SECRET techniques. Stop watching free content and INVEST in your AI mastery."`,
              evidence: `No credentials in AI research, computer science, or productivity research. Claims about specific income generation are unverified anecdotes (cherry-picked from any students who saw results, with no information about students who didn't). Predicts dramatic productivity gains without rigorous measurement. Uses urgency tactics (Friday deadline pricing) common in pressure-marketing. Tactics shown often work less well than presented and date rapidly as models change. The course sale, prompt pack subscriptions, and affiliate links are the actual business; the AI content is the marketing channel. Several patterns from earlier lessons converge here: cherry-picking, motivated reasoning by the creator, monetization-shaped content.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How did you weigh academic research vs technical documentation vs viral monetized content? What does the framework reveal?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A (Ethan Mollick) is the most credible for general guidance on using AI well. Mollick is a working academic with strong credentials, peer-reviewed publications, and a research lab actually studying AI use. The book is grounded in real research, distinguishes well-supported claims from speculation, and acknowledges uncertainty. He addresses both effective use patterns and common failure modes. The conflict of interest is modest (his academic career benefits from AI being interesting, but he's not selling AI products). For the question "how should I think about using AI generally?", this is the bedrock.`,
              `Source B (Anthropic documentation) is credible and useful for what it claims to be: official guidance on a specific tool. The technical content is accurate; the techniques work as described. The conflict of interest is real and structural; the documentation is shaped toward encouraging heavier use of Anthropic's products. This doesn't make the technical content wrong, but it does mean the framing emphasizes what works (without much attention to limits, costs, or alternatives). Good source for using Claude specifically; should be combined with broader perspective for understanding how to use AI in general.`,
              `Source C is recognizable viral productivity content with all the typical patterns. No relevant credentials. Dramatic claims without rigorous measurement. Cherry-picked success stories. Urgency-based pricing. Course-and-affiliate revenue model. Promises of secrets that don't really exist. The actual skill of using AI well is much more boring than this content suggests; there is no magic prompt that "10x's your income." Real prompt engineering is mostly clear thinking applied to instruction-writing, which doesn't make for viral content.`,
              `The deeper lesson. AI is going to be a normal tool throughout your life. The actual skill of using it well is unglamorous: be specific, iterate, verify, use it at the edge of your competence, don't outsource your thinking. These principles transfer across models and across years. The viral content selling secret techniques is selling the dream of shortcuts that don't exist. Sources like Mollick and the AI labs' own documentation will keep you closer to what actually works than viral creators trying to sell courses. As you grow up alongside AI, calibrated sources will compound; viral hype will not.`,
            ],
          },
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does AI do well, and what does it do poorly?`,
              options: [
                `Does everything well`,
                `Does well: drafting, summarizing, brainstorming, explaining, translating, routine coding, thinking-partner work; does poorly: precise factual claims, novel reasoning, anything where wrong is costly and verification is hard, physical embodiment, real-world updates beyond cutoff`,
                `Does nothing well`,
                `Same for everything`,
              ],
              correctIndex: 1,
              explanation: `The line between AI's strengths and weaknesses is sharper than viral content suggests. It moves over time, but the meta-pattern (some things AI does well, others it doesn't) is stable. Knowing how to think about the line matters more than memorizing today's specifics.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "hallucination" in AI?`,
              options: [
                `AI being weird`,
                `Tendency of large language models to produce plausible-sounding but factually wrong information; generates text statistically similar to training data without distinguishing what it actually knows from what just sounds right; major reason AI cannot be trusted for factual claims without verification`,
                `Visual glitches`,
                `Random errors`,
              ],
              correctIndex: 1,
              explanation: `Hallucinations don't sound like hallucinations; they sound like normal, confident statements. This is what makes them dangerous. The rule: anything that matters needs verification against primary sources.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are the five key patterns of effective AI use (per Mollick and similar research)?`,
              options: [
                `Memorize prompts`,
                `Co-worker not replacement; be specific about what you want; iterate (don't expect one-shot); verify anything that matters; use it at the edge of your competence`,
                `Buy expensive tools`,
                `Use it for everything`,
              ],
              correctIndex: 1,
              explanation: `These five patterns recur across the research on effective AI use. They transfer across models and contexts. Most viral AI advice ignores them in favor of specific tactics that date rapidly.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "prompt engineering"?`,
              options: [
                `Designing AI systems`,
                `Skill of writing effective inputs to AI tools: specifying what you want, providing context, giving examples, setting constraints, structuring the request clearly; mostly clear instruction with examples; tactics evolve but principles stay stable; not magic`,
                `Hacking AI`,
                `Secret prompts`,
              ],
              correctIndex: 1,
              explanation: `Don't believe people selling "secret prompts" for hundreds of dollars. The actual skill is much more boring: it's clear thinking applied to instruction-writing. The same skills that produce good human communication produce good AI prompts.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "outsourcing thinking" and why is it a problem?`,
              options: [
                `Hiring help`,
                `Pattern where AI is used to avoid mental effort rather than enhance it; produces short-term convenience and long-term skill atrophy; the thinking skill being substituted for is often exactly the skill that builds expertise over time; distinct from using AI to extend thinking you're doing`,
                `Working in groups`,
                `Asking questions`,
              ],
              correctIndex: 1,
              explanation: `The kids who use AI to think WITH rather than think INSTEAD OF are building real capability. The kids who use it to skip thinking entirely are atrophying the skills they'll need later. The line is whether you're still doing the underlying intellectual work.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the "cone of competence" for AI use?`,
              options: [
                `Ice cream metaphor`,
                `Range of tasks where you can evaluate whether output is correct; inside the cone you can use AI safely because you can check its work; far outside the cone you can't tell if AI output is right; AI is most useful at the edge of your cone (tasks you could do but slowly)`,
                `Hierarchical org chart`,
                `Expertise levels`,
              ],
              correctIndex: 1,
              explanation: `Using AI deep in your expertise produces little gain because you already do those tasks better. Using AI far outside your expertise produces hidden risk because you can't tell when AI is wrong. The edge is where AI multiplies effectiveness without quality risk.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "survivor bias" in productivity content?`,
              options: [
                `Bias for survivors`,
                `Tendency to focus on visible successes while ignoring invisible failures; viral AI productivity content features dramatic wins ("AI helped me 10x my output") while people who tried the same advice and got nothing rarely make videos; the sample is filtered by visibility, not representativeness`,
                `Statistical method`,
                `Survival training`,
              ],
              correctIndex: 1,
              explanation: `Classic example: studying WWII planes returned with bullet holes; statistician Abraham Wald pointed out planes hit in OTHER locations didn't come back at all. Survivor bias is everywhere in productivity content and makes techniques look more reliable than they are.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is viral AI productivity content typically unreliable?`,
              options: [
                `It's mean`,
                `Confident drama about specific tactics ("ONE prompt template"); rapidly dating advice (AI models change every few months); monetization through courses and affiliate links creating incentives; dramatic productivity claims without rigorous measurement; cherry-picked success stories`,
                `Too long`,
                `Boring`,
              ],
              correctIndex: 1,
              explanation: `Real prompt engineering is mostly clear thinking applied to instruction-writing; there are no magic templates. Real productivity gains from AI exist but are variable across tasks and users. The honest picture has uncertainty that viral content doesn't.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Any AI advice older than 18 months should be approached with caution because models change rapidly.`,
              correctAnswer: true,
              explanation: `True. AI models change every few months. Specific tactics from older content may no longer work or may have been replaced. Broad principles (be specific, iterate, verify) stay stable; specific prompt templates and exact techniques often don't. Reading any AI advice critically means asking how recently it was produced.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm going to buy this $297 course on AI prompts—it promises to make me 10x more productive." Based on this lesson, what's the most useful response?`,
              options: [
                `"Yes, invest in yourself"`,
                `"Hold off. The actual skill of using AI well is mostly clear thinking applied to instruction-writing, plus iterating, plus verifying. There are no magic prompts. Real research on effective AI use (Ethan Mollick's 'Co-Intelligence,' the AI labs' own documentation, Wharton's Generative AI Lab studies) is free or low-cost and more accurate than any $297 course. The course is monetized by selling the dream of shortcuts that don't exist. The principles transfer across models; specific 'secret templates' often date within months as models change. Spend the $297 on something else and read Mollick or the official docs instead."`,
                `"AI is fake"`,
                `"You're not smart enough for AI"`,
              ],
              correctIndex: 1,
              explanation: `Real applied AI literacy. Don't dismiss interest in AI; redirect to better sources. The actual skill is unglamorous (be specific, iterate, verify, use at the edges of competence) and freely available. Save the friend hundreds of dollars and steer them toward content that won't be outdated in six months.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, where did you mostly get AI advice? Has anything shifted about which sources you trust?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `When you've used AI, which mode were you mostly in: thinking with it (good) or outsourcing thinking to it (corrosive)? Be honest with yourself.` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who uses AI to extend your thinking instead of replace it, what does that change about the kind of mind you'll have at 30?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one task this week. Try using AI on it at the edge of your competence (something you could do but slowly), then verify everything that matters. Notice what worked and what didn't.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there contexts where the principles in this lesson don't apply? What about creative work? What about deeply personal writing? What about learning new domains?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult who uses AI at work: what do they actually use it for? What do they NOT use it for? Most adults have learned by trial and error and have useful observations.` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `AI literacy now shapes the next 50 years of your professional and personal life. Two paths.`,
          familyActivity: {
            title: `The Family AI Practice Audit`,
            duration: `40 minutes`,
            description: `At dinner, share what you learned. Ask each family member: how do they currently use AI? What do they use it well for? Where do they use it badly? Most family members will discover they're using AI in some ways that are productive and other ways that are corrosive (outsourcing thinking, trusting unverified outputs). The conversation often calibrates everyone's actual practice better than any lecture. Especially useful for families where multiple generations are figuring out AI together.`,
          },
          projectOption: {
            title: `Read Mollick's "Co-Intelligence" Carefully, 3 weeks (optional)`,
            duration: `3 weeks, ~45 minutes per session`,
            description: `Read Ethan Mollick's "Co-Intelligence: Living and Working with AI" (2024). It's accessible and short enough for a 12-year-old to follow with effort. Take notes on the specific frameworks he proposes. After reading, run a 2-week experiment applying his frameworks to your own AI use. Document what worked and what didn't. Write 2,000 words synthesizing your learning. Real applied AI literacy at a level few adults reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Reading a real AI book at 12 plus running experiments is genuinely unusual and useful.`,
          },
          identityQuestion: `If you become someone who uses AI as a thinking-extension tool, with calibrated trust, verification habits, and clear sense of where it's useful, what does that mean for your capability over the next 50 years?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who uses AI to think with, not think instead of.`,
            `A person who verifies anything that matters before trusting AI output.`,
            `Someone willing to skip viral AI hype in favor of slower, more accurate sources.`,
          ],
          saveKey: `identity_responses_fs_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixth Future Skills lesson done. You now know what AI actually does well and poorly, the five patterns of effective use (co-worker not replacement, specific, iterate, verify, edge of competence), the common failure modes (outsourcing thinking, unverified trust, ignoring context limits), the cone-of-competence framing, and how to spot viral AI productivity hype. You can navigate AI use with calibrated trust most adults haven't developed. Real sources: Ethan Mollick at Wharton, official AI lab documentation, careful research. Next time we go into another huge meta-skill: problem solving. Top-down, bottom-up, hybrid—three real approaches with genuine tradeoffs. Argument Builder format. Let's go. — Byte`,
          badge: `ai-tool-user`,
          badgeName: `AI Tool User`,
          xpEarned: 75,
          competencies: [
            `Articulates what AI does well vs poorly; knows the line shifts over time`,
            `Knows hallucination, cone of competence, outsourcing thinking as concepts`,
            `Applies the five patterns of effective AI use`,
            `Recognizes viral AI productivity hype patterns (dramatic claims, dating advice, monetization, survivor bias)`,
            `Can navigate AI use with calibrated trust and verification habits`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Problem Solving`,
            hook: `Top-down (first principles), bottom-up (empirical), hybrid (iterative). Three real approaches. Real tradeoffs. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L06 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
