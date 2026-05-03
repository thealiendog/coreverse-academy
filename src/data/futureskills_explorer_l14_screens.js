// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 14
// "Information Literacy: Is This True?"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l14_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-14',
      title:     `Information Literacy: Is This True?`,
      duration:  12,
      xpReward:  50,
      badge:     'truth-seeker',
      badgeName: `Truth Seeker`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `A photo of a shark swimming down a flooded highway. A quote from a famous person that they never said. A study that "proves" your favorite food is dangerous. The internet is full of misinformation — and it spreads faster than truth. Learning to evaluate information before believing or sharing it is one of the most important skills anyone can develop right now.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Why Misinformation Spreads`,
          paragraphs: [
            `False information spreads faster than true information — research has consistently demonstrated this. One major study found that false news stories reached people six times faster on social media than true ones, and spread to far more people. The reason isn't that people are foolish or gullible. It's that false stories tend to be more emotionally charged — more surprising, more outrageous, more frightening — than the comparatively boring truth. Strong emotions drive shares.`,
            `Social media platforms amplify this problem. Their algorithms are designed to maximize engagement — time spent on the platform, reactions, shares, comments. Content that triggers strong emotions (especially outrage, fear, or moral indignation) generates more engagement than calm, balanced reporting. So the algorithms promote it — not deliberately, but as a side effect of optimizing for engagement metrics. The result is a system that inadvertently rewards sensational, false, or misleading content over accurate but undramatic information.`,
            `There's a third factor: the internet has no mandatory gatekeeping. Traditional news organizations employed editors and fact-checkers whose job was to verify information before it was published. Anyone can now publish anything online — a website, a social media account, a video — with no verification required. The infrastructure that once filtered out the most obvious falsehoods before they reached readers has been bypassed almost entirely. This puts the responsibility for verification on the reader — on you.`,
          ],
          image:        '/explorer-assets/future-skills/l14-magazine-why-spreads.png',
          imageCaption: `Why misinformation spreads — emotional content drives shares, algorithms reward engagement, and anyone can publish without fact-checking`,
          vocab: [
            { word: `misinformation`, definition: `False or inaccurate information — whether spread deliberately or by accident. Misinformation spreads especially fast when it triggers strong emotions like outrage, fear, or excitement.`,         audioPrompt: `Misinformation — false or inaccurate information, whether spread deliberately or by accident. It spreads especially fast when it triggers strong emotions like outrage, fear, or excitement.` },
            { word: `algorithm`,      definition: `In this context, the software that decides what content to show users based on predicted engagement — inadvertently amplifying content that triggers the strongest reactions, including false stories.`, audioPrompt: `Algorithm — in this context, the software that decides what content to show users based on predicted engagement. Inadvertently amplifying content that triggers the strongest reactions, including false stories.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The SIFT Method`,
          paragraphs: [
            `SIFT is a practical four-step method for evaluating information before you believe or share it. Stop: when you encounter something surprising, emotional, or that makes you want to immediately share it — pause. Don't let the emotional momentum override your thinking. The moment you feel the urge to react immediately is exactly when you most need to slow down. Investigate the source: who wrote or published this? What's their expertise and track record? Do they have an obvious agenda or financial interest in this claim being believed?`,
            `Find better coverage: search for the same claim from other independent sources. If something important actually happened, multiple credible outlets will be reporting it. If you can only find the claim on one website, or only on sites that consistently share similar content, that's a signal. Trace claims: if a specific statistic, quote, or study is cited, try to find the original source. Statistics often get distorted as they travel — a "study" cited by a viral post may turn out to be misrepresented, incomplete, or from a source with a clear agenda.`,
            `The SIFT method works because it builds a habit of investigation before reaction. It doesn't require you to be an expert — it just requires you to pause and look before you leap. Most misinformation relies on the fact that people don't check. A false claim that takes thirty seconds to verify often falls apart the moment someone bothers to look it up. The single most powerful thing you can do to fight misinformation is to refuse to share anything you haven't verified.`,
          ],
          image:        '/explorer-assets/future-skills/l14-magazine-sift.png',
          imageCaption: `The SIFT method — Stop, Investigate the source, Find better coverage, Trace claims — a practical four-step verification habit`,
          vocab: [
            { word: `SIFT`,   definition: `A four-step method for evaluating online information: Stop, Investigate the source, Find better coverage, Trace claims to their origin.`,                                                              audioPrompt: `SIFT — a four-step method for evaluating online information. Stop, Investigate the source, Find better coverage, Trace claims to their origin.` },
            { word: `source`, definition: `The person, organization, or publication that produced a piece of information — evaluating a source's expertise, credibility, and potential bias is the foundation of information literacy.`,          audioPrompt: `Source — the person, organization, or publication that produced a piece of information. Evaluating a source's expertise, credibility, and potential bias is the foundation of information literacy.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Red Flags for Misinformation`,
          paragraphs: [
            `Certain patterns are reliable warning signs that something might be false or misleading. Extreme emotional language: headlines designed to outrage, frighten, or shock you are more likely to be misleading than headlines that inform calmly. No author named, no sources cited: credible reporting identifies who wrote it and where the information came from. Anonymous claims are impossible to verify. Headlines that don't match the article: some sites use misleading headlines to get clicks, then bury much more nuanced (or contradictory) information in the text.`,
            `Suspicious web addresses: a site whose URL closely mimics a well-known outlet's name — but adds extra words, numbers, or unusual domain endings — is almost certainly fake. For example, a made-up address like "breakingnews-daily.co" or "worldnews-report.net" might be designed to look like a real news organization to someone who glances quickly. Check the full URL carefully before trusting a site you don't recognize. Legitimate, established outlets have straightforward, well-known web addresses.`,
            `Photos and videos without context are another major red flag. Real events often get documented — but old photos get recycled to illustrate new false claims, and genuine images get paired with invented captions. A photo of a real flood might be labeled as a recent event that never happened. A real video from one country gets shared as if it's from another. Before believing or sharing an image, consider: is this showing what the caption claims? A reverse image search takes ten seconds and can reveal the real origin of a photo.`,
          ],
          image:        '/explorer-assets/future-skills/l14-magazine-red-flags.png',
          imageCaption: `Red flags for misinformation — extreme emotional language, no sources, suspicious URLs, and images used without accurate context`,
          vocab: [
            { word: `confirmation bias`, definition: `The tendency to search for and believe information that confirms what you already think, while dismissing information that challenges it — one of the biggest obstacles to accurate thinking.`, audioPrompt: `Confirmation bias — the tendency to search for and believe information that confirms what you already think, while dismissing information that challenges it. One of the biggest obstacles to accurate thinking.` },
            { word: `clickbait`,         definition: `Content designed primarily to attract attention and provoke clicks through misleading or exaggerated headlines — often at the expense of accuracy and depth.`,                               audioPrompt: `Clickbait — content designed primarily to attract attention and provoke clicks through misleading or exaggerated headlines. Often at the expense of accuracy and depth.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Where to Find Reliable Information`,
          paragraphs: [
            `Not all sources are created equal, and that's not a matter of opinion — it's a function of standards. Peer-reviewed scientific journals publish research that has been independently evaluated by other experts in the field before publication. This process doesn't guarantee the research is right, but it filters out the most obvious errors. Major established news organizations — like AP, Reuters, and the BBC — employ professional journalists who follow editorial standards: verifying information with multiple sources, naming their sources, and issuing corrections when they're wrong.`,
            `Official sources — government health agencies, universities, scientific institutions in their area of expertise — are generally more reliable than anonymous websites or social media posts. The key word is "in their area of expertise." A climate scientist's opinion on climate science is much more reliable than a celebrity's. A cardiologist's opinion on heart health is more reliable than an actor's. Expertise is domain-specific: being famous or wealthy does not make someone's claims about science, medicine, or law more reliable.`,
            `The most insidious threat to good thinking is confirmation bias — the tendency to believe information that agrees with what you already think and dismiss information that doesn't. It feels like critical thinking, but it's actually the opposite. The most reliable thinkers actively seek out high-quality information that challenges their current views, because they know that's the only way to update beliefs toward accuracy. If all the information you read confirms what you already believed, that's often a sign that you're filtering too aggressively.`,
          ],
          image:        '/explorer-assets/future-skills/l14-magazine-reliable-sources.png',
          imageCaption: `Where to find reliable information — peer review, editorial standards, domain expertise, and deliberately seeking out challenging perspectives`,
          vocab: [
            { word: `peer review`,       definition: `A process where scientific research is evaluated by independent experts in the same field before publication — the standard quality-control process for scientific knowledge.`,              audioPrompt: `Peer review — a process where scientific research is evaluated by independent experts in the same field before publication. The standard quality-control process for scientific knowledge.` },
            { word: `editorial standards`, definition: `The professional rules and practices a news organization follows to verify information before publishing — including using named sources, checking facts, and issuing corrections when wrong.`, audioPrompt: `Editorial standards — the professional rules and practices a news organization follows to verify information before publishing. Including using named sources, checking facts, and issuing corrections when wrong.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each description, then decide: is it a reliable signal or a red flag for misinformation?`,
          guideText:     `Some signals tell you a source is trustworthy — named authors, multiple corroborating outlets, original research. Others are warning signs that something might be false. Can you sort them correctly?`,
          columnHeaders: [`The Signal`, `Reliable or Red Flag?`],
          items: [
            { image: 'l14-game-sourced-article.png', label: `An article that names its author, links to the original research it's based on, and is reported the same way by several independent outlets.`,       correctMatch: 'reliable', objectPosition: 'center 50%', matchPhrase: `Reliable Signal! Multiple independent sources reporting the same finding in the same way is one of the strongest indicators of credibility. Real events and genuine research get covered by multiple outlets that don't coordinate with each other — so independent agreement is meaningful. An article that names its author, links to primary sources, and is corroborated elsewhere has been through several layers of verification before reaching you. That doesn't make it infallible, but it's a very different category from anonymous claims with no sources.` },
            { image: 'l14-game-no-source.png',       label: `A post with no author, no sources, and a headline written to make you feel outraged or afraid right now.`,                                          correctMatch: 'redflag',  objectPosition: 'center 50%', matchPhrase: `Red Flag! Anonymity, no sources, and emotional manipulation are three of the most reliable warning signs that content isn't credible. Anonymous content can't be verified or challenged. Content with no cited sources can't be traced to any original claim. And headlines designed to trigger outrage or fear are optimized for sharing, not for accuracy. Legitimate reporting aims to inform; misinformation aims to provoke. The combination of all three patterns here is about as clear a warning sign as exists online.` },
            { image: 'l14-game-fake-url.png',         label: `A website whose web address closely copies a well-known outlet's name but adds extra words or unusual domain suffixes.`,                          correctMatch: 'redflag',  objectPosition: 'center 50%', matchPhrase: `Red Flag! Fake URLs that mimic real news organizations are a classic misinformation tactic. A site with an address like "breakingnews-daily.co" or "worldnewsreport.net" might look official at a glance but has no connection to any real newsroom. Always check the full URL of an unfamiliar site before trusting its content — and look it up separately to see if it has a credible reputation. Established outlets have well-known, straightforward web addresses that don't need to borrow credibility from anyone else.` },
            { image: 'l14-game-expert-study.png',     label: `A finding backed by a peer-reviewed study from a university, confirmed by an independent expert in that specific field.`,                         correctMatch: 'reliable', objectPosition: 'center 50%', matchPhrase: `Reliable Signal! Peer-reviewed research evaluated by independent experts is the gold standard for scientific knowledge. "Peer-reviewed" means other experts in the same field reviewed the methods, data, and conclusions before publication — catching errors and catching unsupported claims. Combined with confirmation from an independent domain expert, this is about as strong a signal of reliability as you can find. It doesn't mean the research is certainly correct — science corrects itself over time — but it's been through rigorous quality control that anonymous online content has not.` },
          ],
          buckets: [
            { id: 'reliable', label: `✅ Reliable Signal`, color: '#34D399' },
            { id: 'redflag',  label: `🚩 Red Flag`,        color: '#F87171' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about information literacy. Answer all 6 questions to earn your Truth Seeker badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Why does false information spread faster than true information?`,
              options:      [`Because true information is too complicated`, `Because false stories are often more emotional and sensational, which gets more reactions on social media`, `Because people prefer to believe falsehoods`, `Because algorithms are programmed to spread lies`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does the "I" in SIFT stand for?`,
              options:      [`Identify the author`, `Investigate the source`, `Ignore emotional reactions`, `Include all perspectives`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is confirmation bias?`,
              options:      [`When you confirm a source is reliable`, `The tendency to believe and seek out information that confirms what you already think`, `A type of fact-checking method`, `When two sources agree on the same fact`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Research has shown that false stories spread faster on social media than true ones, partly because they tend to trigger stronger emotional reactions.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `When you see a surprising claim online, the first step before sharing it is to ___.`,
              options:      [`stop`, `share`, `like`, `scroll`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which of the following is a red flag that information might be false?`,
              options:      [`The article names its author and links to its sources`, `The same story appears across multiple trusted outlets`, `The headline uses extreme emotional language and provides no sources`, `A university-based expert is quoted explaining the finding`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for "SIFT method information literacy" — there are interactive practice sites where you can test real examples right now. Then run SIFT on one surprising claim you've actually heard recently and see what you find.`,
          familyAdventure: `Do a family Real or Fake challenge. Each person finds one surprising story or claim online. Share it with the family and use SIFT together to evaluate it. You can also check Snopes.com or FactCheck.org to verify your conclusions. Discuss: how easy was it to fool each other, and what does that reveal about how misinformation works?`,
          creativePrompt:  `Find three things people commonly believe that are actually false — these are called myths. Write a short explanation of each: what the myth says, why people believe it, and what the actual evidence shows. Include a reliable source for each one. What makes a myth hard to correct even when the facts are clear?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'truth-seeker',
          badgeName: `Truth Seeker`,
          message:   `Brilliant work, {name}! You now know that false information spreads faster than truth — and that the SIFT method gives you a reliable way to stop, investigate, and verify before believing or sharing anything. In a world where anyone can publish anything, knowing how to check before you share is a genuine superpower. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l14_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L14] Loaded: "Information Literacy: Is This True?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l14-magazine-why-spreads.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l14-magazine-sift.png',             { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l14-magazine-red-flags.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l14-magazine-reliable-sources.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L14] why-spreads: ${r1.ok}, sift: ${r2.ok}, red-flags: ${r3.ok}, reliable-sources: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L14] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l14_screens;
