// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L18 — Career Paths in a Changing World
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Career Strategy, Economics
// CALIBRATED: Voyager spec v1.1 (May 2026) — honest about career uncertainty in AI era
// Interaction format: SOURCE EVALUATION (Cal Newport vs David Epstein vs viral career influencer)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l18-v1";

const FUTURESKILLS_VOYAGER_L18 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-18`,
      title: `Career Paths in a Changing World`,
      duration: 35,
      xpReward: 75,
      badge: `career-navigator`,
      badgeName: `Career Navigator`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a question that gets harder every year: how should you think about your career in a world where the rules keep changing? AI is reshaping which jobs exist. The "follow your passion" advice that boomers and millennials grew up with has been seriously critiqued. The expected trajectory of "pick a major, get a degree, get a job, climb a ladder" is less reliable than it was for previous generations. Different serious thinkers give very different advice. Today we look at three sources: Cal Newport's research-grounded "build career capital" framework, David Epstein's "stay generalist" argument, and a viral career influencer selling the dream. By the end you'll have working frameworks for thinking about your own path without locking yourself into outdated assumptions.`,
          headline: `Career Paths in a Changing World`,
          subtitle: `Real disagreements between credible thinkers about how to plan a career.`,
          visual: `/voyager-assets/future-skills/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Career Planning Is Different Now`,
          paragraphs: [
            `For most of the 20th century, mainstream career advice in the US was relatively stable. Pick a field you're interested in, get a degree in it, get a job, work your way up. Loyalty was rewarded with stability. Specific occupations had relatively predictable trajectories. The advice worked imperfectly even then (people switched fields, automation displaced some jobs, recessions hit), but it was a reasonable baseline.`,
            `Several things have changed. First: technological change has accelerated. Specific occupations get reshaped by automation, AI, and platform shifts faster than people can fully adapt. The "lifelong specialist in one occupation" path is less reliable than it was. Second: economic structures have shifted. The lifetime-employment-at-one-firm model that dominated some industries in the 1950s-1980s has largely disappeared. People typically change jobs 10+ times during their careers, sometimes across very different fields. Third: information about career paths is much more accessible (any kid can look up what professionals in a field actually do), but the volume of information also makes it harder to know what to trust.`,
            `Real labor economics research provides some grounding. David Autor's work on labor markets shows polarization between high-skill and low-skill jobs has continued for decades. Erik Brynjolfsson's research on AI productivity effects shows real but variable impacts across roles. The Bureau of Labor Statistics tracks occupations with significant growth and decline projections; these projections are imperfect but better than guessing. Real career planning incorporates this kind of data rather than treating careers as purely a matter of personal preference.`,
            `What hasn't changed. Most people still need to earn a living. Most people care about doing work that matters to them beyond just income. Most people benefit from accumulating skills and reputation over time. Most jobs still involve working with other people on shared problems. These constants persist underneath the shifting specifics. Career advice that ignores them in favor of pure "follow the latest trend" rarely produces good outcomes.`,
          ],
          image: `/voyager-assets/future-skills/l18-s1-changing.webp`,
          imageCaption: `Career planning genuinely different now. Faster change, more job switches, more information, real labor data available.`,
          vocab: [
            {
              word: `labor market polarization`,
              definition: `Pattern documented by David Autor and others (covered in L02): hollowing out of middle-skill jobs while both high-skill and low-skill jobs grow. Has shaped US labor markets since ~1980. Continues to affect what careers look like. Knowing this pattern helps you think about where the safer and riskier middle-skill paths are.`,
              audioPrompt: `Labor market polarization is the pattern documented by David Autor and other labor economists, which we covered in lesson two of this band, {name}. The hollowing out of middle-skill jobs while both high-skill and low-skill jobs grow. Has shaped US labor markets since around 1980. Continues to affect what careers look like. Knowing this pattern helps you think about where the safer and riskier middle-skill paths are. Some traditionally middle-skill jobs (routine clerical work, basic manufacturing) have largely declined. Other middle-skill jobs (skilled trades, certain healthcare roles) have grown. The polarization pattern doesn't fully explain everything; it's one of several major forces. But it's part of the honest backdrop for career planning at a level few teenagers are exposed to.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The "Follow Your Passion" Debate`,
          paragraphs: [
            `Cal Newport, a computer science professor at Georgetown, published "So Good They Can't Ignore You" in 2012. The book argued that "follow your passion" is actually bad career advice for most people. Newport's reasoning: most people don't have pre-existing passions clear enough to follow. The passions that DO emerge usually emerge from getting good at something, not from picking the right thing initially. The advice to "follow your passion" produces churning between fields rather than the deep skill development that creates meaningful careers.`,
            `Newport's alternative: "career capital theory." Build rare and valuable skills first. As you accumulate skills (career capital), you gain leverage to shape your work in directions you actually care about. The skills come first; the passion-shaped career follows from having the skills. This reverses the conventional advice. The argument is grounded in research on how people actually develop satisfying careers, not just in Newport's intuitions.`,
            `Newport's position has support from working career researchers and many successful professionals across fields. Anders Ericsson's research on deliberate practice suggests deep skill development matters more than initial interest. Studies of career satisfaction often find that satisfaction follows competence rather than preceding it. The "follow your passion" alternative has been less rigorously defended.`,
            `David Epstein's "Range" (2019) defends a different position. Epstein, a sports and science journalist, argued that broad exposure to many areas (generalist paths) often produces better outcomes than early specialization. His research drew on cognitive science, sports performance research, and historical analysis. Examples included Roger Federer (played many sports before specializing) and many scientists who switched fields. The argument: specialization too early can limit the cross-domain insights that produce real breakthroughs.`,
            `Newport and Epstein partly agree (both reject "follow your passion" naively, both emphasize building real skills) and partly disagree (Newport emphasizes depth in a chosen field once you start; Epstein emphasizes maintaining breadth longer). For a 12-year-old, the disagreement is genuine and worth taking seriously. Both views have empirical support; the right move depends on your specific situation.`,
          ],
          image: `/voyager-assets/future-skills/l18-s2-passion.webp`,
          imageCaption: `Newport: build career capital first, passion follows. Epstein: stay generalist, late specialization. Real disagreement between serious thinkers.`,
          vocab: [
            {
              word: `career capital (Newport)`,
              definition: `Term from Cal Newport's "So Good They Can't Ignore You" (2012). The accumulation of rare and valuable skills that give you leverage to shape your work over time. Newport's argument: build career capital first, then use it to negotiate the kind of work and lifestyle you want. Reverses the "follow your passion" framing by making passion downstream of skill rather than upstream.`,
              audioPrompt: `Career capital is a term from Cal Newport's 2012 book "So Good They Can't Ignore You," {name}. The accumulation of rare and valuable skills that give you leverage to shape your work over time. Newport's argument: build career capital first, then use it to negotiate the kind of work and lifestyle you want. This reverses the "follow your passion" framing. Instead of treating passion as the starting point that career planning should align with, Newport treats passion as something that follows from doing meaningful work well. The skills come first; the passion-shaped career follows from having the skills. The framework is grounded in research on how people actually develop satisfying careers. It's been influential but contested; David Epstein's "Range" argues for more generalist paths than Newport's framework typically suggests.`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What AI Actually Changes For Career Planning`,
          paragraphs: [
            `Connecting back to L02 (which covered AI and the labor market) and L06 (which covered working with AI as a tool), career planning in 2026 has to incorporate what AI is actually doing.`,
            `What we know with reasonable confidence. AI has produced real productivity gains in many knowledge-work roles. Some specific tasks have become substantially automatable; some specific entry-level roles have seen hiring slow. The full pattern is still developing. The most dramatic predictions from 2023-2024 (mass unemployment by 2025) didn't materialize; the dismissive predictions ("AI won't matter") also didn't materialize. The real pattern is more nuanced.`,
            `What this means for career planning. First: cognitive skills still matter, but the bar for human contribution shifts. Pure information processing is increasingly automated; cross-domain integration, judgment under uncertainty, and human relationship work remain valuable. Second: the cone of competence framing from L06 applies here. AI is most useful at the edge of what you can already do; building your competence still pays off, just differently than it used to. Third: specific occupations vary enormously in AI exposure; some are more affected than others. The Bureau of Labor Statistics, OpenAI's "GPTs are GPTs" paper, and Anthropic Economic Index data give specific estimates worth checking for any career you're considering.`,
            `What's still uncertain. The long-term trajectory of AI capabilities is genuinely unpredictable. The pace of AI advancement could continue, plateau, or accelerate further. Specific predictions about which jobs will exist in 20 years are mostly speculation; serious researchers don't make confident specific claims. The honest framing for career planning involves taking AI seriously without pretending to know more than anyone does about where it ends up.`,
            `One practical implication. Skills that combine multiple human capabilities tend to be more AI-resistant than skills that do one thing well. A great teacher integrates pedagogy, relationship, subject knowledge, social understanding, and adaptation. A great doctor integrates medical knowledge, patient relationship, judgment under uncertainty, and physical examination. These combinations are harder for AI to replicate than narrow technical work. Building toward integrated skills rather than narrow expertise is a defensible strategy for career resilience.`,
          ],
          image: `/voyager-assets/future-skills/l18-s3-ai.webp`,
          imageCaption: `AI changes career math in specific ways. Integrated multi-capability skills more AI-resistant than narrow expertise.`,
          vocab: [
            {
              word: `skill integration`,
              definition: `Combining multiple distinct capabilities into work that requires all of them. Teaching integrates pedagogy, relationship, subject knowledge, adaptation. Medicine integrates knowledge, examination, judgment, relationship. Skill-integration work tends to be more AI-resistant because AI is currently better at narrow specific tasks than at integration across many capabilities. Knowing this helps with career-resilience thinking.`,
              audioPrompt: `Skill integration is combining multiple distinct capabilities into work that requires all of them, {name}. Teaching, for example, integrates pedagogy (how to help people learn), relationship (connecting with specific students), subject knowledge (what you're teaching), social understanding (group dynamics), and adaptation (adjusting to specific student needs). A great teacher does all of these together in real time. Medicine integrates medical knowledge, physical examination, patient relationship, judgment under uncertainty. Many leadership roles integrate strategic thinking, relationship, communication, and adaptation. Skill-integration work tends to be more AI-resistant because AI is currently better at narrow specific tasks than at integration across many capabilities at once. Knowing this pattern helps with career-resilience thinking. Building toward integrated skills rather than narrow expertise is a defensible strategy.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Viral Career Content (The Pop Layer)`,
          paragraphs: [
            `Beyond serious career research, there's a large ecosystem of viral career content. LinkedIn thought leaders. Career-coach Instagrammers. YouTube career creators. The content varies in quality. Some of it is useful; most is, charitably, oversimplified marketing.`,
            `Several patterns recur. First: confident predictions about which careers are best. "The 5 careers that will dominate the next decade." "These jobs are AI-proof." Real labor economists don't make confident specific predictions because the data doesn't support that level of confidence. When you see lists like this, the confidence is the tell that someone isn't doing serious analysis.`,
            `Second: personal branding as substitute for real skill building. "Build your personal brand and the jobs will follow." Sometimes personal branding helps. Most of the time, the underlying skills matter much more, and personal branding without substantive skills produces a brittle career that depends on social media algorithms continuing to favor the creator. Real career capital is durable across platforms; personal branding alone usually isn't.`,
            `Third: monetized advice. Many viral career creators sell courses, coaching, resume services, or affiliate products. The advice is shaped by what sells courses, not by what produces good career outcomes. "How to make six figures in your first job" is a sellable course title; "develop real expertise over 5-10 years and accept that incomes will be modest for a while" is not. Recognize the structure.`,
            `Fourth: career-as-aesthetic. Some viral content treats specific career identities as primarily aesthetic choices (the "girlboss," the "creator economy entrepreneur," the "remote work nomad"). The aesthetics are real and sometimes correlated with real life patterns. But choosing a career mainly for its aesthetic produces shallow engagement. The underlying work matters more than how the work looks from outside.`,
            `Some viral creators are actually credible. Cal Newport has a blog and podcast. David Epstein engages publicly. Some working professionals share genuine insights from their fields. Distinguishing them from the broader viral ecosystem requires the source-evaluation framework from L11.`,
          ],
          image: `/voyager-assets/future-skills/l18-s4-viral.webp`,
          imageCaption: `Viral career content: confident predictions, branding-as-substitute, monetized advice, career-as-aesthetic.`,
          vocab: [
            {
              word: `aesthetic career identity`,
              definition: `Pattern where someone chooses or describes a career mainly based on how it looks from outside rather than what the work actually involves. Common in viral career content. Looks like "I'm a creator" or "I'm a girlboss" without much engagement with the specific work involved. Aesthetic identity can sometimes correlate with real life patterns but choosing based on aesthetics often produces shallow engagement.`,
              audioPrompt: `Aesthetic career identity is a pattern where someone chooses or describes a career mainly based on how it looks from outside rather than what the work actually involves, {name}. Common in viral career content. Looks like "I'm a creator," "I'm a girlboss," "I'm a remote-work nomad," "I'm a creator-economy entrepreneur." The aesthetic is real and sometimes correlated with real life patterns. But choosing a career mainly for its aesthetic produces shallow engagement with what the work actually involves. The day-to-day reality of "being a creator" often involves a lot of unglamorous work (administration, customer service, dealing with platform changes) that the aesthetic doesn't capture. The underlying work matters more than how the work looks from outside. Recognizing aesthetic identity as a pattern protects you from choosing paths based on appearance rather than substance.`,
            },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources offering different career frameworks. The first is Cal Newport's career-capital theory. The second is David Epstein's "Range" arguing for generalist paths. The third is a viral career influencer.`,
            `One framing to consider. Sources A (Newport) and B (Epstein) are both credible. They disagree about specific things (depth vs breadth, when to specialize, how to think about passion) but agree on the underlying critique of "follow your passion" naively. The exercise is calibrating between two credible sources, which is the L11 framework applied to this domain.`,
            `Another framing. The viral influencer in source C isn't a strawman; the content represents real patterns in the career-advice ecosystem. Some viral career creators offer some real value. The patterns to watch for (confident predictions, branding-as-substitute, monetization, aesthetic identity) appear across many specific creators.`,
            `One last framing. You're 12. The specific career path you'll be on at 30 is impossible to predict from here. The frameworks you build for thinking about careers are what compound. Internalizing Newport's career-capital concept, Epstein's range argument, and the skill of spotting viral career hype will serve you better than any specific career prediction.`,
          ],
          image: `/voyager-assets/future-skills/l18-s5-before.webp`,
          imageCaption: `Two credible thinkers disagreeing, plus viral content. The L11 framework applied to career planning.`,
          vocab: [
            {
              word: `career resilience`,
              definition: `Ability to navigate career changes over a long working life, including involuntary changes (industry shifts, automation, layoffs) and voluntary changes (interests evolving, life circumstances changing). Built through some combination of broad skills, deep expertise, strong relationships, financial stability, and adaptability. The frameworks in this lesson help build career resilience differently.`,
              audioPrompt: `Career resilience is the ability to navigate career changes over a long working life, {name}. Includes involuntary changes (industry shifts, automation, layoffs, recessions) and voluntary changes (interests evolving, life circumstances changing, learning opportunities). Built through some combination of broad skills, deep expertise, strong relationships, financial stability, and adaptability. Different frameworks emphasize different routes. Cal Newport's career capital emphasizes deep expertise. David Epstein's range emphasizes broad skills. Both can contribute to resilience. The right mix depends on your specific situation and what kinds of changes you're most likely to face. For your generation, the AI question is one of the most significant uncertainties; career resilience increasingly means being able to adapt to AI-driven changes in your field over decades.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l18-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Career Planning`,
          intro: `Three sources offer career frameworks. Two are credible thinkers who genuinely disagree; one is viral content. Rank them. Then see how a careful analyst would evaluate them.`,
          topic: `How should you think about your career path in a changing world?`,
          sources: [
            {
              id: `source-a`,
              name: `Cal Newport, "So Good They Can't Ignore You" (2012) — research-grounded career capital framework`,
              type: `Book by Cal Newport, computer science professor at Georgetown University, drawing on research on how people actually develop satisfying careers; argues for career capital theory`,
              claim: `"Follow your passion" is actually bad career advice for most people. Most people don't have pre-existing passions clear enough to follow. Passions that DO emerge usually emerge from getting good at something, not from picking the right thing initially. The alternative: build rare and valuable skills first ("career capital"). As you accumulate skills, you gain leverage to shape your work in directions you actually care about. Skills come first; the passion-shaped career follows from having the skills. The book engages with research on career satisfaction and Anders Ericsson's work on deliberate practice.`,
              evidence: `Author is an established academic (computer science professor at Georgetown) with substantial published work in his field, plus a popular career blog and books that engage seriously with career research. The book draws on real research about how people develop satisfying careers, not just on personal opinion. Engages with opposing views. Reverses conventional advice based on actual evidence. Has been influential in shifting career conversation away from "follow your passion" naively. Newport has commercial interests (book sales, courses) but the underlying work is grounded in research rather than purely sales-driven. Best available framework for the skills-first position.`,
            },
            {
              id: `source-b`,
              name: `David Epstein, "Range: Why Generalists Triumph in a Specialized World" (2019) — generalist career framework`,
              type: `Book by David Epstein, sports and science journalist with prior book on athletic performance ("The Sports Gene"), drawing on cognitive science, sports research, historical analysis to argue for generalist paths over early specialization`,
              claim: `Broad exposure to many areas often produces better long-term outcomes than early specialization. Examples include Roger Federer (played many sports before specializing in tennis) and many scientists who switched fields. The argument: specialization too early can limit cross-domain insights that produce real breakthroughs. People often benefit from "sampling" multiple areas before settling, and from maintaining breadth even after specializing. The argument is grounded in research but the conclusions are contrarian to typical career advice that emphasizes early specialization.`,
              evidence: `Epstein is a serious science journalist with previous well-regarded work. The book engages with real research and historical case studies. The argument has been taken seriously by other researchers and has shifted some career-advice conversation. Some academics have argued Epstein cherry-picks examples that support his thesis; the responses are technical and worth reading alongside the book. Epstein's writing is engaging and accessible. Like all popular books, should be read alongside academic critiques rather than treated as final word. Genuinely disagrees with Newport on some specifics (when to specialize, depth vs breadth) while sharing the critique of "follow your passion."`,
            },
            {
              id: `source-c`,
              name: `@CareerGoddessSecrets — Instagram account, 1.1M followers, sells $497 "Six-Figure Career Pivot Bootcamp"`,
              type: `Viral Instagram career-coaching account producing content with titles like "The 5 jobs that will dominate the next decade" and "How I went from $40K to $250K in 18 months," selling courses and one-on-one coaching`,
              claim: `"Most people are wasting their potential in jobs that will be obsolete in 5 years. I've identified the EXACT 5 careers that will explode in the AI era. My $497 Six-Figure Career Pivot Bootcamp has helped over 8,000 students transform their careers in just 90 days. Stop following outdated career advice. The window to position yourself before the AI tsunami hits is closing. Don't wait. Friday is the last day for early-bird pricing."`,
              evidence: `No credentials in labor economics, career research, or relevant fields. Specific predictions ("EXACT 5 careers that will explode") are confident in ways the actual data doesn't support; real labor economists don't make claims like this because predictions at that specificity are unreliable. Personal-anecdote-as-evidence ($40K to $250K) is unverified and uses survivor-bias-style framing. Urgency-based pricing structure. Course-and-coaching revenue shapes the content toward dramatic confident claims. Construct conflation throughout (career planning blended with AI literacy blended with personal branding blended with productivity advice).`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How did you handle two credible thinkers (Newport and Epstein) disagreeing? What does that change about your final ranking?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Sources A and B are both credible. Cal Newport is an established academic with substantial published work in his field plus a popular career blog and books grounded in real research. David Epstein is a serious science journalist with prior well-regarded work and engaging accessible writing. They disagree about specific things (depth vs breadth, when to specialize, how to think about generalist vs specialist paths) but agree on the underlying critique of "follow your passion" naively. Both views have empirical support; the disagreement is genuine and worth taking seriously rather than collapsing into one or the other.`,
              `The honest reading: Newport's career capital framework works particularly well in fields with clear skill-acquisition paths (programming, writing, design, traditional crafts) where you can measurably build expertise over time. Epstein's range framework works particularly well for cross-domain integration roles, creative work, and situations where you don't yet know what you want to specialize in. Both can be applied at different career stages. A 12-year-old probably benefits more from Epstein's range advice (sample widely; don't specialize too early). A 22-year-old who's identified a specific area probably benefits more from Newport's career capital advice (build skills deeply once you've chosen).`,
              `Source C is recognizable viral career content with all the typical patterns. No relevant credentials. Confident specific predictions that the actual data doesn't support. Personal-anecdote-as-evidence. Urgency-based pricing. Course-and-coaching revenue structure. The "exact 5 careers" framing is marketing, not analysis; real labor economists don't make confident specific predictions because the data doesn't support that level of confidence.`,
              `The deeper lesson. Career planning in 2026 involves real uncertainty about how AI and economic change will reshape work over the next decades. Confident specific predictions (especially monetized ones) usually outpace what anyone actually knows. Real frameworks like Newport's and Epstein's provide more durable guidance because they're about how to think about careers rather than what specific career to choose. The viral content offers the illusion of certainty about specific outcomes; the credible frameworks offer the harder but more useful skill of navigating uncertainty.`,
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
              question: `Why is career planning different now than 50 years ago?`,
              options: [
                `Random change`,
                `Technological change has accelerated (specific occupations get reshaped by automation/AI faster than people can adapt); economic structures have shifted (lifetime employment model largely disappeared); more job switches expected; more information accessible but harder to know what to trust`,
                `Schools are worse`,
                `People are different`,
              ],
              correctIndex: 1,
              explanation: `Underneath the shifting specifics, certain constants persist: most people still need to earn a living, care about meaningful work, benefit from accumulating skills and reputation over time, work with other people. Career advice that ignores these constants in favor of pure trend-following rarely produces good outcomes.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is Cal Newport's "career capital" theory?`,
              options: [
                `Money for careers`,
                `From "So Good They Can't Ignore You" (2012): "follow your passion" is bad advice; most people don't have clear pre-existing passions; passions that emerge usually do so from getting good at something; build rare and valuable skills first, then use that career capital to shape work toward what you care about`,
                `College degrees`,
                `Random skills`,
              ],
              correctIndex: 1,
              explanation: `Newport's framework reverses conventional advice. Skills come first; the passion-shaped career follows from having the skills. Grounded in research on how people actually develop satisfying careers. Has been influential in shifting career conversation.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does David Epstein's "Range" (2019) argue?`,
              options: [
                `Specialize early`,
                `Broad exposure to many areas often produces better long-term outcomes than early specialization; examples include Roger Federer (played many sports first) and scientists who switched fields; specialization too early can limit cross-domain insights; people often benefit from sampling multiple areas before settling`,
                `Random sampling`,
                `Stay broad forever`,
              ],
              correctIndex: 1,
              explanation: `Epstein's argument is contrarian to typical advice that emphasizes early specialization. Has been taken seriously by researchers and shifted some career-advice conversation. Some academics argue he cherry-picks examples; the responses are technical and worth reading.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Where do Newport and Epstein agree, and where do they disagree?`,
              options: [
                `Agree on everything`,
                `Agree: critique of "follow your passion" naively; both emphasize building real skills. Disagree: Newport emphasizes depth in a chosen field once you start; Epstein emphasizes maintaining breadth longer and late specialization; the disagreement is genuine and worth taking seriously`,
                `Disagree on everything`,
                `Agree only about money`,
              ],
              correctIndex: 1,
              explanation: `The honest reading: both views have empirical support. Newport's framework works well for fields with clear skill-acquisition paths. Epstein's framework works well for cross-domain integration roles and earlier career stages. Both can be applied at different stages.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "skill integration" and why does it matter for AI-era careers?`,
              options: [
                `Combining apps`,
                `Combining multiple distinct capabilities into work that requires all of them; teaching integrates pedagogy, relationship, subject knowledge, adaptation; medicine integrates knowledge, examination, judgment, relationship; skill-integration work tends to be more AI-resistant because AI is better at narrow tasks than at integration`,
                `Software integration`,
                `Random combining`,
              ],
              correctIndex: 1,
              explanation: `Knowing this pattern helps with career-resilience thinking. Building toward integrated skills rather than narrow expertise is a defensible strategy for navigating AI-driven changes over decades. Real integration is currently harder for AI to replicate than narrow technical work.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why do viral career creators make confident specific predictions when labor economists don't?`,
              options: [
                `Random difference`,
                `Real labor economists don't make confident specific predictions because the data doesn't support that level of confidence; viral creators do because confident drama drives engagement and sales; the confidence is the tell that someone isn't doing serious analysis`,
                `Economists are wrong`,
                `Creators know more`,
              ],
              correctIndex: 1,
              explanation: `"The EXACT 5 careers that will explode" is marketing, not analysis. Real labor economists like David Autor and Erik Brynjolfsson don't speak this way because the data doesn't support such confidence. Recognizing this protects you from acting on overconfident predictions.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "aesthetic career identity" and why is it a trap?`,
              options: [
                `Beautiful jobs`,
                `Pattern where someone chooses or describes a career mainly based on how it looks from outside rather than what the work actually involves; "I'm a creator" or "I'm a girlboss" without engagement with specific work; choosing based on aesthetics produces shallow engagement with the underlying work`,
                `Art careers`,
                `Random labels`,
              ],
              correctIndex: 1,
              explanation: `The day-to-day reality of "being a creator" often involves a lot of unglamorous work (administration, customer service, dealing with platform changes) that the aesthetic doesn't capture. The underlying work matters more than how the work looks from outside.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "career resilience"?`,
              options: [
                `Job security`,
                `Ability to navigate career changes over a long working life: involuntary changes (industry shifts, automation, layoffs) and voluntary changes (interests evolving, life circumstances changing); built through some combination of broad skills, deep expertise, strong relationships, financial stability, adaptability`,
                `Mental toughness`,
                `Random luck`,
              ],
              correctIndex: 1,
              explanation: `Different frameworks emphasize different routes. Newport's career capital emphasizes depth. Epstein's range emphasizes breadth. Both can contribute to resilience. The right mix depends on your specific situation and what kinds of changes you're most likely to face.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of Newport vs Epstein is clearly correct and the other is wrong.`,
              correctAnswer: false,
              explanation: `False. Both views have empirical support and apply differently across contexts. Newport's career capital works well in fields with clear skill-acquisition paths. Epstein's range works well for cross-domain integration and earlier career stages. The honest reading is calibrated between them rather than choosing one wholesale.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I saw on TikTok that becoming a 'prompt engineer' is going to be the highest-paying career in 5 years, so I'm focusing on that." Based on this lesson, what should you point out?`,
              options: [
                `"Good plan"`,
                `"Confident specific predictions about which careers will dominate aren't supported by real labor economics; nobody knows what specific roles will look like in 5 years, especially in fast-changing AI-adjacent areas. The 'prompt engineering' framing is already shifting as AI models become better at handling vague prompts. Real career frameworks (Cal Newport's career capital, David Epstein's range) suggest building durable skills you can apply across many contexts rather than betting on one specific predicted role. Working with AI well is a useful skill; building your whole career around being a 'prompt engineer' specifically is the kind of overspecific bet that depends on predictions nobody can reliably make."`,
                `"Bad plan, do nothing"`,
                `"Become a doctor"`,
              ],
              correctIndex: 1,
              explanation: `Real applied career literacy. Don't dismiss interest in AI-adjacent careers; identify the specific overconfident framing as the problem. Suggest durable skill development that applies across many possible futures. This is how the frameworks protect against career strategies based on predictions nobody can reliably make.`,
            },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you think about "follow your passion"? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Newport vs Epstein: which framework appeals more to you, and which appeals more to your friends? What does that reveal about your default thinking?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you build career resilience (integrated skills, durable frameworks, adaptability), what does that change about the kind of working life you can have over 40+ years?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one career area you're interested in. Apply both Newport's framework (what skills would build career capital?) and Epstein's framework (what range would help?). Which generates more useful thinking?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there career framings the lesson didn't cover? What about vocational paths, family business inheritance, geographic constraints, dependency-care obligations? How would the frameworks adapt?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read Newport's blog (calnewport.com) and one of Epstein's pieces or his book introduction. Notice how their writing differs from viral career content.` },
          ],
        },

        {
          id: `l18-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Career frameworks compound over a lifetime of decisions. Two paths.`,
          familyActivity: {
            title: `The Family Career Conversation`,
            duration: `45 minutes`,
            description: `Share the two credible frameworks. Then ask adults in your family about their own career paths. Did they follow their passion, build career capital, sample broadly, or some combination? In retrospect, what would they have done differently? Most adults have meaningful career stories at this depth. The conversation often surfaces patterns (regret about over-specialization, surprise at how careers unfolded, advice they wish they'd had) that compound for your own planning.`,
          },
          projectOption: {
            title: `Read Cal Newport's "So Good They Can't Ignore You" or David Epstein's "Range," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Newport's "So Good They Can't Ignore You" (2012) or Epstein's "Range" (2019). Both are accessible to a careful 12-year-old reader. Read carefully over 4 weeks. Apply concepts to your own current interests. Write 2,000 words on what you learned and how it changes your career thinking. Reading a real career book at 12 puts you ahead of most adults.`,
            offerToParent: `Parent: opt your kid into this project. Reading a serious career framework at 12 is genuinely transformative.`,
          },
          identityQuestion: `If you become someone who builds career capital (Newport) or range (Epstein) deliberately, with calibrated framing about AI and economic change, what does that mean for the working life you can build over 40+ years?`,
        },

        {
          id: `l18-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who builds skills first, then chooses career direction based on what I can offer.`,
            `A person who samples broadly before specializing.`,
            `Someone who can spot viral career hype and skip it in favor of durable frameworks.`,
          ],
          saveKey: `identity_responses_fs_11_12_18`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighteenth Future Skills lesson done. You now have two credible career frameworks (Cal Newport's career capital, David Epstein's range), know what AI actually changes for career planning, understand skill integration as an AI-resistant strategy, and can spot viral career hype for what it is. You can engage with career planning as an adult skill rather than as panic about which job will be highest-paid. Next time we go into one of the band's most directly practical lessons: what won't be automated? You'll sort nine specific kinds of work into three buckets. Investigation game format. Let's go. — Byte`,
          badge: `career-navigator`,
          badgeName: `Career Navigator`,
          xpEarned: 75,
          competencies: [
            `Articulates Cal Newport's career capital framework`,
            `Articulates David Epstein's range argument`,
            `Recognizes skill integration as AI-resistant strategy`,
            `Spots viral career content patterns (confident predictions, branding-as-substitute, monetization, aesthetic identity)`,
            `Holds calibrated uncertainty about specific career predictions in AI era`,
          ],
          nextLessonPreview: {
            title: `Lesson 19: What Won't Be Automated`,
            hook: `Sort 9 kinds of work into 3 buckets: high automation likelihood, partial automation, low automation. Investigation game.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L18;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L18.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L18 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
