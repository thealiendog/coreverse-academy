// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L10 — Evaluating Sources: Bias, Credibility, and Relevance
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RI.4.8 / RI.5.8 — Author's reasoning and evidence
//            CCSS W.4.8 / W.5.8 — Gather information from multiple sources
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what bias is, evaluating credibility, relevance to your
//        question, cross-checking across sources
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-10`,
      title: `Evaluating Sources: Bias, Credibility, and Relevance`,
      duration: 18,
      xpReward: 75,
      badge: `source-evaluator`,
      badgeName: `Source Evaluator`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. Last lesson, we learned how to find sources. Today, we go deeper. Not every source that LOOKS credible actually is. A glossy website can publish nonsense. A famous expert can have a hidden reason to bend the truth. Today you'll learn to spot bias even when it's well-hidden, evaluate credibility past first impressions, and cross-check sources against each other to catch the lies. This is the skill that protects you from misinformation for the rest of your life. Let's go.`,
          headline: `Evaluating Sources`,
          subtitle: `Spotting bias, fake credibility, and how to cross-check the truth`,
          visual: `/ue-assets/ela/l10-welcome.webp`,
        },

        // ── SECTION 1 — WHAT BIAS REALLY IS ───────────────────────────────────
        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Bias Really Is`,
          paragraphs: [
            `Bias is a slant toward one side. EVERY source has some bias. The author had experiences, beliefs, and goals before they sat down to write. The question isn't "is this biased?" The answer is always yes. The real question is HOW MUCH bias, and WHAT KIND.`,
            `Some bias is small and honest. A scientist passionate about climate change might emphasize the strongest evidence first. That's still credible work. Other bias is big and dishonest. A car company publishing a "study" showing their own car is the safest is selling you something. Both pieces are biased. One you can still learn from. The other you should treat with extra suspicion. Knowing the difference is the skill.`,
          ],
          image: `/ue-assets/ela/l10-s1-bias.webp`,
          imageCaption: `Every source has bias. The question is how much, and what kind.`,
          vocab: [
            { word: `bias`,
              definition: `A slant toward one perspective in a source, which can range from mild and honest to severe and misleading.`,
              audioPrompt: `Bias is a slant toward one side, {name}. Every author writes from a perspective, so every source has some bias. The question isn't whether bias exists. It's how much, and whether the bias makes the information untrustworthy. A scientist excited about their work has mild bias. A company writing about their own product has heavy bias. Spotting the type and size of the bias is what trained readers do automatically.` },
            { word: `perspective`,
              definition: `The viewpoint or standpoint from which a source is written, shaped by the author's experiences, beliefs, and goals.`,
              audioPrompt: `Perspective is the viewpoint a source is written from, {name}. Every author has one. Their background, beliefs, experiences, and goals all shape how they present information. Recognizing a source's perspective doesn't mean dismissing it. It means reading it knowing where the author is standing. A business perspective, a scientific perspective, and a personal perspective on the same event will all look different.` },
          ],
        },

        // ── SECTION 2 — CREDIBILITY GOES DEEPER THAN APPEARANCE ───────────────
        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Credibility Goes Deeper Than the Surface`,
          paragraphs: [
            `Real credibility comes from FIVE things. An identifiable, qualified AUTHOR. A reputable PUBLISHER. EVIDENCE for the claims (not just confident statements). CITED SOURCES. And being reasonably CURRENT for the topic. A source missing several of these probably isn't credible, even if the website looks professional.`,
            `Here's the trap. Modern fake sources are designed to LOOK credible. Nice logos. Professional fonts. Names that sound official. The opposite is also true: a poorly designed website might actually be a top-tier scholar's personal page. Don't judge by appearance. Check the substance. Who wrote this? What's their qualification? What evidence is behind the claims? Where did they get their information?`,
          ],
          image: `/ue-assets/ela/l10-s2-credibility-deeper.webp`,
          imageCaption: `Look past the design. Check the substance.`,
          vocab: [
            { word: `authority`,
              definition: `The qualifications and trustworthiness of an author or organization on a specific topic.`,
              audioPrompt: `Authority is the qualifications and trustworthiness of an author, {name}. A cardiologist has authority on heart health. A celebrity probably doesn't, even if they're famous. Authority is topic-specific. Someone can have huge authority in one area and almost none in another. The question isn't "is this person famous?" The question is "do they have real qualifications on THIS specific topic?"` },
            { word: `publisher`,
              definition: `The organization or platform that releases a source. A reputable publisher is one sign of a credible source.`,
              audioPrompt: `The publisher is the organization or platform that puts a source out into the world, {name}. A major medical journal is a reputable publisher. A personal blog with no affiliation is not. Publishers matter because credible publishers have editorial standards — they review content before it goes out. That doesn't make every published piece perfect, but it raises the bar. Always check who published something, not just who wrote it.` },
          ],
        },

        // ── SECTION 3 — RELEVANCE TO YOUR QUESTION ────────────────────────────
        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Relevance: Does It Even Answer Your Question?`,
          paragraphs: [
            `A source can be credible AND unbiased AND still useless to you. If your research question is about earthquakes and you find a brilliant article about volcanoes, congratulations, but it doesn't matter. Brilliant doesn't equal relevant. Strong researchers ask one question before using a source: does this actually help answer what I'm researching?`,
            `Irrelevant information weakens your work. It distracts. It bloats your writing. It makes the actual answer harder to see. The discipline to walk away from interesting but irrelevant sources is one of the hardest skills in research, and it separates good researchers from great ones. Stay focused. Save the unrelated stuff for next time.`,
          ],
          image: `/ue-assets/ela/l10-s3-relevance.webp`,
          imageCaption: `If it doesn't help answer your question, walk away.`,
          vocab: [
            { word: `relevance`,
              definition: `How closely a source actually relates to your specific research question.`,
              audioPrompt: `Relevance is how closely a source connects to your specific question, {name}. A great article about volcanoes is irrelevant if your question is about earthquakes. Relevance is one of the easiest CRAAP-test categories to forget, because impressive sources feel useful even when they don't fit. Discipline yourself. Ask: does this source actually answer what I'm asking? If not, set it aside and move on.` },
            { word: `scope`,
              definition: `The defined boundaries of a research project — what it covers and what falls outside it.`,
              audioPrompt: `Scope is the boundary of a research project, {name}. It defines what's inside your research and what's out. A project about how sleep affects memory has a specific scope. Information about sleep disorders might be interesting but outside the scope. Knowing your scope helps you decide whether a source is relevant. If it falls outside the boundary, set it aside, even if it's fascinating.` },
          ],
        },

        // ── SECTION 4 — CROSS-CHECKING ────────────────────────────────────────
        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Cross-Checking: The Strongest Move`,
          paragraphs: [
            `Of all the source-evaluation skills, CROSS-CHECKING is the most powerful. Cross-checking means asking: does this same information show up in OTHER independent sources? If three credible, independent sources report the same fact, it's almost certainly accurate. If a claim only appears in one source and nobody else mentions it, treat it with serious caution.`,
            `This is exactly how fact-checkers, journalists, scientists, and judges work. They don't trust one source. They check it against others. The internet makes this easy. Found a surprising claim? Search for it. See who else is reporting it. Check what their sources are. If the claim only traces back to one original or to obviously biased outlets, you've found a weak claim. Cross-checking is the discipline that protects you from believing things that aren't true.`,
          ],
          image: `/ue-assets/ela/l10-s4-cross-check.webp`,
          imageCaption: `If only one source has it, doubt it. If many independent sources agree, trust it.`,
          vocab: [
            { word: `cross-check`,
              definition: `To verify a piece of information by checking whether other independent, credible sources report the same thing.`,
              audioPrompt: `Cross-checking is verifying a claim by checking other independent sources, {name}. If three credible sources report the same fact independently, it's probably true. If a claim only appears in one place, doubt it. This is exactly how journalists, scientists, and fact-checkers work. Cross-checking is the single most powerful skill you can build to protect yourself from misinformation, and it works for the rest of your life.` },
            { word: `fact-checking`,
              definition: `The practice of verifying whether claims are accurate by consulting multiple independent, credible sources.`,
              audioPrompt: `Fact-checking is the practice of verifying whether a claim is actually true, {name}. Journalists do it before publishing. Scientists do it in peer review. Judges do it in courtrooms. Fact-checking means not just accepting what one source says — it means searching for other credible, independent sources that confirm or contradict the claim. It's what cross-checking looks like as a professional habit.` },
          ],
        },

        // ── INTERACTIVE GAME — Source Evaluation Lab ──────────────────────────
        {
          id: `l10-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Lab time, {name}. You're researching "Does music help kids focus while studying?" Four sources show up. For each one, decide whether it's BIASED BUT USEFUL (worth reading with caution), CREDIBLE AND CLEAN (great source), or UNRELIABLE (skip it).\n\nOne is the sneakiest pattern in modern media. Watch for it.`,
          options: [
            { id: `credible-clean`, label: `Credible and Clean`, color: `#34D399`, description: `Real expert, real evidence, no obvious agenda. Use confidently.` },
            { id: `biased-useful`,  label: `Biased but Useful`, color: `#FBBF24`, description: `Has a slant but solid info. Use with caution and balance with other sources.` },
            { id: `unreliable`,     label: `Unreliable`,         color: `#F87171`, description: `Fails credibility tests. Vague, fake authority, hidden purpose. Skip.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Source #1`,
              clues: [
                { text: `Title: "Why studying with music actually works."` },
                { text: `Published on a website that sells study playlists by subscription.` },
                { text: `Author is not named. Cites no studies. Lots of testimonials from "happy students."` },
              ],
              correctAnswer: `unreliable`,
              realWorldExample: `Classic pattern: a company writing about why you need to buy their product.`,
              explanation: `No author. No real evidence. Sells a product. Uses testimonials instead of studies. This isn't a research source. It's a sales pitch dressed up as information. Skip.`,
            },
            {
              id: `case-2`,
              caseTitle: `Source #2`,
              clues: [
                { text: `A 2021 paper in a major psychology journal, by a researcher from a respected university.` },
                { text: `Cites dozens of past studies. Acknowledges where the evidence is still uncertain.` },
                { text: `No products being sold. No obvious agenda. Author admits limitations of their own study.` },
              ],
              correctAnswer: `credible-clean`,
              realWorldExample: `What top-tier academic research looks like.`,
              explanation: `Named expert. Major journal. Cites lots of evidence. Acknowledges uncertainty (a huge sign of honesty). No product to sell. This is what credible looks like.`,
            },
            {
              id: `case-3`,
              caseTitle: `Source #3`,
              clues: [
                { text: `A blog post by a music teacher with 25 years of classroom experience.` },
                { text: `She clearly LOVES music and thinks it helps kids in nearly every way.` },
                { text: `She cites real studies but only the ones that support her view. She doesn't mention the studies that disagree.` },
              ],
              correctAnswer: `biased-useful`,
              realWorldExample: `An expert writing with a strong perspective. Still useful but needs balancing.`,
              explanation: `Real expertise (25 years teaching, real studies cited). But she only includes evidence on one side. That's bias. Doesn't mean she's wrong, just incomplete. Read her, but balance her with sources that include the counter-evidence too.`,
            },
            {
              id: `case-4`,
              caseTitle: `Source #4 — The Sneakiest One`,
              clues: [
                { text: `A "news article" with a clean, professional layout. Looks like a respected newspaper.` },
                { text: `Headline: "Scientists confirm music boosts memory by 47%."` },
                { text: `Look closer: the website domain is unfamiliar. The "study" cited links back to the same site. Tiny logo at the bottom reads "Sponsored content by Maestro Headphones."` },
              ],
              correctAnswer: `unreliable`,
              realWorldExample: `Sponsored content disguised as news. Very common online.`,
              explanation: `LOOKS like a news article. Acts like a news article. But it's a paid ad designed to LOOK like one. The unfamiliar domain, the circular study link, and the tiny "sponsored content" label give it away. This pattern is everywhere online now. Always check who actually published a piece, not just what it looks like. This kind of disguised marketing is the modern researcher's biggest enemy.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `Which of these is true about BIAS?`,
              options: [
                `Only bad writers have bias`,
                `Every source has some bias; the real questions are how much and what kind`,
                `Bias doesn't exist in published sources`,
                `Bias is the same as lying`,
              ],
              correctIndex: 1,
              explanation: `Every author has experiences and beliefs that shape their writing. Some bias is mild and honest. Some is huge and dishonest. Skilled readers spot the type and size of the bias and adjust how cautiously they read.` },

            { id: `l10-q2`, format: `multiple-choice`,
              question: `What makes a source actually CREDIBLE?`,
              options: [
                `A professional-looking website`,
                `Qualified author, reputable publisher, real evidence, cited sources, and current information`,
                `A famous social media account`,
                `Confidence in tone`,
              ],
              correctIndex: 1,
              explanation: `Appearance can be faked. Substance is what matters: author qualifications, publisher reputation, real evidence, cited sources, current information. Always look past how a source LOOKS to what it actually IS.` },

            { id: `l10-q3`, format: `multiple-choice`,
              question: `What does CROSS-CHECKING mean?`,
              options: [
                `Reading the same source twice`,
                `Verifying a claim by checking whether other independent, credible sources report the same thing`,
                `Checking for spelling errors`,
                `Asking the author if they're honest`,
              ],
              correctIndex: 1,
              explanation: `Cross-checking is the most powerful source-evaluation skill. If multiple independent sources agree, the claim is probably true. If only one source has it, doubt it.` },

            { id: `l10-q4`, format: `multiple-choice`,
              question: `Why might a CREDIBLE source still not be the right one to use?`,
              options: [
                `It can't happen`,
                `It might not be RELEVANT to your specific research question`,
                `Credible sources are always relevant`,
                `Only old sources are irrelevant`,
              ],
              correctIndex: 1,
              explanation: `Credibility and relevance are different. A perfect article about volcanoes is useless if your question is about earthquakes. Strong researchers walk away from impressive but irrelevant sources.` },

            { id: `l10-q5`, format: `true-false`,
              question: `True or false: A website with a professional layout and clean design is automatically more credible than one that looks plain.`,
              correctAnswer: false,
              explanation: `False. Design is easy to fake. Substance is harder. A plain-looking site by a top scholar can be far more credible than a slick-looking site selling a product. Always check substance, not appearance.` },

            { id: `l10-q6`, format: `multiple-choice`,
              question: `A music teacher with 25 years of experience writes a blog about music. She cites real studies but only the ones that agree with her view. What kind of source is she?`,
              options: [
                `Completely unreliable`,
                `Completely credible and unbiased`,
                `Biased but useful: real expertise with a strong slant. Read her, but balance with sources that include the counter-evidence`,
                `The same as a paid advertisement`,
              ],
              correctIndex: 2,
              explanation: `Real expertise doesn't erase bias. She knows her topic, but she's only telling one side. Use her, but make sure you also read sources that show the studies she left out.` },

            { id: `l10-q7`, format: `multiple-choice`,
              question: `You find a "news article" claiming a product boosts memory by 47%. At the bottom in tiny letters, it says "Sponsored content by the company that makes the product." What is this?`,
              options: [
                `Independent journalism`,
                `Sponsored content disguised as news. It's a paid ad designed to look like a real news article. Skip it.`,
                `A primary source`,
                `Highly credible because it has a percentage in the headline`,
              ],
              correctIndex: 1,
              explanation: `This pattern is everywhere online. Companies pay to have ads that look like news articles. The tiny "sponsored content" label is the only clue. Once you start looking, you'll see this pattern constantly.` },

            { id: `l10-q8`, format: `multiple-choice`,
              question: `Why is cross-checking considered the strongest source-evaluation skill of all?`,
              options: [
                `It's the easiest`,
                `Because no single source can be trusted alone, and agreement across independent sources is the most reliable way to verify a claim`,
                `Because teachers require it`,
                `Because it makes papers longer`,
              ],
              correctIndex: 1,
              explanation: `Every other test (currency, authority, etc.) can be faked or imitated by a single bad source. Cross-checking is the one test a fake source can't easily beat, because it requires multiple INDEPENDENT sources to all report the same thing.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a topic where you've noticed sources you trust have a clear bias? How do you handle that?` },
            { id: `r2`, text: `Have you ever clicked something thinking it was a real news article, only to realize it was an ad? How did you figure it out?` },
            { id: `r3`, text: `When was the last time you cross-checked something before believing it? What did you find?` },
            { id: `r4`, text: `Why do you think disguised marketing (sponsored content, fake news articles) has gotten so common online?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Source evaluation is one of the highest-value skills a person can have in the 21st century. The internet has made it easier than ever to access information AND easier than ever to be deceived. People who can't tell credible from fake fall for scams, vote on bad information, make health decisions on rumors, and waste money on products that don't work. People who CAN tell credible from fake save themselves enormous trouble. This skill compounds for the rest of your life.`,
          familyAdventure: `Sponsored Content Spotting. Open a news website, scroll through, and as a family try to spot one piece of sponsored content disguised as a news article. Once you find one, talk about what tipped you off. The tiny "sponsored" label. The unusual website name. The product link at the bottom. Once you've trained your eye, you'll see this pattern everywhere.`,
          creativePrompt: {
            intro: `Pick a controversial topic (something where smart people disagree). Find two sources on it. Evaluate each for bias.`,
            floor: `Write at least 5 sentences. Name both sources. For each one, identify the bias direction and one piece of evidence that reveals it.`,
            stretch: `Write 8 to 10 sentences. Cover bias, credibility, relevance, and cross-checking for both sources. Recommend which one a reader should trust more, and why.`,
            open: `Write as much as you want. Build a full source-evaluation report that shows you can read both sources critically, identify their slants, and synthesize the most accurate possible picture.`,
            frames: [
              `My topic is ___.`,
              `Source 1's bias leans toward ___ because ___.`,
              `Source 2's bias leans toward ___ because ___.`,
              `If I cross-check, the claim both agree on is ___.`,
              `If I had to trust one more, I'd pick ___ because ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now spot bias even when it's well-hidden, evaluate credibility past first impressions, judge relevance to your question, and cross-check claims across independent sources. Next lesson: once you've found sources, how do you actually capture the information without copying or forgetting? Notes and paraphrasing. See you there. — Quill.`,
          badge: `source-evaluator`,
          badgeName: `Source Evaluator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L10;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L10.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L10 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
