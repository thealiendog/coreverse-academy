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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Truth Travels Slower Than Lies',
          paragraphs: [
            'Research has consistently shown that false news travels faster than true news.',
            'One major study found false stories spread to people 6 TIMES faster on social media than true ones. The pattern is real and reliable.',
          ],
          image:        '/explorer-assets/future-skills/l14-s1-truth-vs-lies.png',
          imageCaption: 'False stories don\'t just spread. They spread MUCH faster than true ones. That\'s not opinion — it\'s measured fact.',
          vocab: [
            { word: 'misinformation', definition: 'False or inaccurate information — whether spread on purpose or by accident.', audioPrompt: 'Misinformation — false or inaccurate information, whether spread on purpose or by accident.' },
            { word: 'viral',          definition: 'Spreading very rapidly through sharing. Misinformation often goes viral faster than true content because it provokes stronger reactions.', audioPrompt: 'Viral — spreading very rapidly through sharing. Misinformation often goes viral faster than true content because it provokes stronger reactions.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Why Misinformation Wins',
          paragraphs: [
            'Three reasons. First: false stories are usually more emotional — shocking, frightening, outrageous. Strong emotions drive shares.',
            'Second: social media algorithms reward engagement, so outrage gets boosted. Third: anyone can publish anything online — no fact-checkers required.',
          ],
          image:        '/explorer-assets/future-skills/l14-s2-amplified-misinfo.png',
          imageCaption: 'Emotion + algorithm + no gatekeeper = misinformation\'s perfect storm. None of these three are accidents.',
          vocab: [
            { word: 'engagement',  definition: 'The time, clicks, and reactions an audience gives content. Algorithms reward it — even when the engaging content is false.', audioPrompt: 'Engagement — the time, clicks, and reactions an audience gives content. Algorithms reward it, even when the engaging content is false.' },
            { word: 'gatekeeping', definition: 'The editorial process that verifies information before it\'s published. Old media had it; the internet largely doesn\'t.', audioPrompt: 'Gatekeeping — the editorial process that verifies information before it\'s published. Old media had it; the internet largely doesn\'t.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'The SIFT Method',
          paragraphs: [
            'SIFT is a four-step habit for checking information before you believe or share it.',
            'Stop. Investigate the source (who wrote it?). Find better coverage (do others confirm?). Trace claims (where did this stat or quote come from?).',
          ],
          image:        '/explorer-assets/future-skills/l14-s3-sift-method.png',
          imageCaption: 'Four steps. Sixty seconds. SIFT catches most misinformation before it spreads any further through you.',
          vocab: [
            { word: 'SIFT',   definition: 'Stop, Investigate the source, Find better coverage, Trace claims. A four-step method for evaluating online information.', audioPrompt: 'SIFT — Stop, Investigate the source, Find better coverage, Trace claims. A four-step method for evaluating online information.' },
            { word: 'verify', definition: 'Check that information is actually true before believing or sharing it. The single most powerful habit for fighting misinformation.', audioPrompt: 'Verify — check that information is actually true before believing or sharing it. The single most powerful habit for fighting misinformation.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Red Flags',
          paragraphs: [
            'Watch for these warning signs: extreme emotional language. No author named. No sources cited. Headlines that don\'t match the article.',
            'Suspicious URLs that mimic real outlets ("breakingnews-daily.co"). Photos with no context — real images often get paired with false captions.',
          ],
          image:        '/explorer-assets/future-skills/l14-s4-red-flags.png',
          imageCaption: 'Outrage + no source + sketchy URL + dramatic photo = almost certainly not what you should be sharing.',
          vocab: [
            { word: 'red flag',  definition: 'A warning sign that something might be misinformation. Examples: emotional headlines, missing sources, fake-looking URLs.', audioPrompt: 'Red flag — a warning sign that something might be misinformation. Examples: emotional headlines, missing sources, fake-looking URLs.' },
            { word: 'clickbait', definition: 'Content designed to grab attention through misleading or exaggerated headlines. Often at the expense of accuracy.', audioPrompt: 'Clickbait — content designed to grab attention through misleading or exaggerated headlines. Often at the expense of accuracy.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Where Reliable Info Lives',
          paragraphs: [
            'Peer-reviewed scientific journals: research checked by independent experts before publication.',
            'Established news organizations (AP, Reuters, BBC): named authors, multiple sources, corrections issued. Expertise matters — and it\'s domain-specific. A famous person isn\'t a science expert.',
          ],
          image:        '/explorer-assets/future-skills/l14-s5-reliable-sources.png',
          imageCaption: 'Reliable sources have something in common: standards, named authors, expertise, and a process for correcting mistakes.',
          vocab: [
            { word: 'peer review',      definition: 'Research checked by independent experts in the same field before publication. The standard quality-control process for scientific knowledge.', audioPrompt: 'Peer review — research checked by independent experts in the same field before publication. The standard quality-control process for scientific knowledge.' },
            { word: 'domain expertise', definition: 'Real knowledge in one specific field. A cardiologist on heart health is credible. A celebrity on heart health is not.', audioPrompt: 'Domain expertise — real knowledge in one specific field. A cardiologist on heart health is credible. A celebrity on heart health is not.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Confirmation Bias',
          paragraphs: [
            'The biggest trap isn\'t out there. It\'s in your own brain.',
            'Confirmation bias = believing things that match what you already think, dismissing things that don\'t. If everything you read confirms your views, you\'re filtering too hard.',
          ],
          image:        '/explorer-assets/future-skills/l14-s6-confirmation-bias.png',
          imageCaption: 'Your brain wants to be right. That\'s the problem. Real thinking means seeking out info that might prove you wrong.',
          vocab: [
            { word: 'confirmation bias', definition: 'Believing what agrees with your existing views and dismissing what doesn\'t. The biggest obstacle to accurate thinking.', audioPrompt: 'Confirmation bias — believing what agrees with your existing views and dismissing what doesn\'t. The biggest obstacle to accurate thinking.' },
            { word: 'critical thinking', definition: 'Carefully evaluating information — including information you\'d LIKE to believe. Especially that information.', audioPrompt: 'Critical thinking — carefully evaluating information, including information you\'d like to believe. Especially that information.' },
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
    fetch('/explorer-assets/future-skills/l14-s1-truth-vs-lies.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l14-s2-amplified-misinfo.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l14-s3-sift-method.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l14-s4-red-flags.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l14-s5-reliable-sources.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l14-s6-confirmation-bias.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L14] truth-vs-lies: ${r1.ok}, amplified-misinfo: ${r2.ok}, sift-method: ${r3.ok}, red-flags: ${r4.ok}, reliable-sources: ${r5.ok}, confirmation-bias: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L14] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l14_screens;
