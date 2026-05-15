// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 15
// "Digital Footprint: What You Leave Behind Online"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l15_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-15',
      title:     `Digital Footprint: What You Leave Behind Online`,
      duration:  12,
      xpReward:  50,
      badge:     'digital-footprint-manager',
      badgeName: `Digital Footprint Manager`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Imagine every comment you've ever made, every photo you've posted, every website you've visited, every purchase you've made online — all of it stored in a file with your name on it. That file exists. It's called your digital footprint, and it's already being read by colleges, employers, coaches, and advertisers — whether you know it or not. The good news: it's also something you can build intentionally.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Your Digital Footprint Exists',
          paragraphs: [
            'Every comment, photo, post, search, click, and purchase you\'ve made online is stored somewhere.',
            'That collected trail of data is called your digital footprint. It\'s already being read by colleges, employers, coaches, and advertisers.',
          ],
          image:        '/explorer-assets/future-skills/l15-s1-footprint-trail.png',
          imageCaption: 'You leave a trail behind every time you go online. That trail has a name — and an audience.',
          vocab: [
            { word: 'digital footprint', definition: 'The trail of data that exists about you online — what you post, what you click, where you go, what you buy.', audioPrompt: 'Digital footprint — the trail of data that exists about you online: what you post, what you click, where you go, what you buy.' },
            { word: 'data trail',        definition: 'The record left behind by everything you do online. Grows even when you\'re not actively posting anything.', audioPrompt: 'Data trail — the record left behind by everything you do online. Grows even when you\'re not actively posting anything.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Active vs Passive',
          paragraphs: [
            'Active footprint: things you deliberately post — photos, comments, profiles, videos. You chose to share these.',
            'Passive footprint: data collected automatically — locations, search history, time spent on apps. You didn\'t choose.',
          ],
          image:        '/explorer-assets/future-skills/l15-s2-active-vs-passive.png',
          imageCaption: 'Half your footprint is what you post. The other half is collected silently, whether you know it or not.',
          vocab: [
            { word: 'active footprint',  definition: 'The data you deliberately post — photos, comments, profiles, videos. The part of your footprint you author.', audioPrompt: 'Active footprint — the data you deliberately post: photos, comments, profiles, videos. The part of your footprint you author.' },
            { word: 'passive footprint', definition: 'Data collected automatically without you choosing — locations, searches, browsing history, time spent on apps.', audioPrompt: 'Passive footprint — data collected automatically without you choosing: locations, searches, browsing history, time spent on apps.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'It Lasts Forever',
          paragraphs: [
            'The internet has a very long memory. Even when you delete something, it doesn\'t always disappear.',
            'Screenshots. Server backups. Internet archives (the Wayback Machine saves billions of pages). A post deleted in five seconds can still exist 20 years later.',
          ],
          image:        '/explorer-assets/future-skills/l15-s3-deleted-but-saved.png',
          imageCaption: '"Deleted" doesn\'t always mean gone. Screenshots and archives keep copies you can never get back.',
          vocab: [
            { word: 'data permanence', definition: 'Digital information often lasts far longer than expected — even after deletion, it can persist in screenshots, backups, and archives.', audioPrompt: 'Data permanence — digital information often lasts far longer than expected. Even after deletion, it can persist in screenshots, backups, and archives.' },
            { word: 'Wayback Machine', definition: 'A service that automatically archives billions of web pages — including ones that have since been deleted from their original sites.', audioPrompt: 'Wayback Machine — a service that automatically archives billions of web pages, including ones that have since been deleted from their original sites.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Who\'s Looking',
          paragraphs: [
            'Colleges check applicants\' online presence. Employers Google candidates. Sports coaches scout social media.',
            'It\'s not about being watched all the time. It\'s that your online behavior is increasingly seen as a window into your character and judgment.',
          ],
          image:        '/explorer-assets/future-skills/l15-s4-whos-looking.png',
          imageCaption: 'Admissions officers, recruiters, scouts. Your online presence is part of how they evaluate you — whether you intend it or not.',
          vocab: [
            { word: 'background check', definition: 'When someone investigates your history — including your online presence — before making a decision about you.', audioPrompt: 'Background check — when someone investigates your history, including your online presence, before making a decision about you.' },
            { word: 'reputation',       definition: 'How others see you. Increasingly shaped by your online presence, especially the parts that anyone can search.', audioPrompt: 'Reputation — how others see you. Increasingly shaped by your online presence, especially the parts that anyone can search.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Build It On Purpose',
          paragraphs: [
            'The same permanence that can work against you can also work FOR you.',
            'Projects, writing, art, code, anything you publish thoughtfully becomes part of your record. Many young people have gotten scholarships, internships, and opportunities because someone found their work online.',
          ],
          image:        '/explorer-assets/future-skills/l15-s5-build-on-purpose.png',
          imageCaption: 'Permanence cuts both ways. A trail of genuine work follows you just as surely as a careless post does — and opens doors.',
          vocab: [
            { word: 'personal brand',      definition: 'The impression your online presence creates about who you are. Increasingly visible to colleges, employers, and others.', audioPrompt: 'Personal brand — the impression your online presence creates about who you are. Increasingly visible to colleges, employers, and others.' },
            { word: 'intentional posting', definition: 'Choosing what to share with awareness of how it represents you — not just what gets attention in the moment.', audioPrompt: 'Intentional posting — choosing what to share with awareness of how it represents you, not just what gets attention in the moment.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Privacy Settings and Your Rights',
          paragraphs: [
            'Most platforms let you control who sees your content — but only if you actually use the settings.',
            'In Europe, the "right to be forgotten" lets people request that companies delete their data. Other countries are catching up. The strongest protection: think before you post.',
          ],
          image:        '/explorer-assets/future-skills/l15-s6-privacy-rights.png',
          imageCaption: 'Settings help. Laws help. But the real protection is upstream: thoughtful choices about what to share in the first place.',
          vocab: [
            { word: 'privacy settings',      definition: 'Controls in apps that limit who can see your content. Only protect you if you actually turn them on and check them.', audioPrompt: 'Privacy settings — controls in apps that limit who can see your content. Only protect you if you actually turn them on and check them.' },
            { word: 'right to be forgotten', definition: 'A legal right in some countries (especially in the EU) to ask companies to delete personal data about you.', audioPrompt: 'Right to be forgotten — a legal right in some countries, especially in the EU, to ask companies to delete personal data about you.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each example, then decide: is it part of your active digital footprint or your passive digital footprint?`,
          guideText:     `Active footprint = things you deliberately post or share. Passive footprint = data collected about you automatically, without you actively choosing to share it. Can you sort them?`,
          columnHeaders: [`The Digital Trace`, `Active or Passive Footprint?`],
          items: [
            { image: 'l15-game-post.png',          label: `A photo and caption you shared showing a project you worked hard on.`,                                                               correctMatch: 'active',  objectPosition: 'center 50%', matchPhrase: `Active Footprint! You chose what to photograph, what to write, and when to share it — every decision was deliberate. Active footprint is the part of your digital presence that you author. It's also the part you have the most control over and the most opportunity to build intentionally. Every piece of genuine work you share, every thoughtful comment you write, every project you document — these are all active footprint entries that paint a picture of who you are and what you care about.` },
            { image: 'l15-game-location.png',      label: `The exact location where you were standing when you opened an app — recorded automatically without you choosing to share it.`,         correctMatch: 'passive', objectPosition: 'center 50%', matchPhrase: `Passive Footprint! Location data collected automatically — without you making any deliberate choice to share it — is a classic example of passive footprint. Many apps record your location every time you open them, even when location access isn't necessary for the app to function. This data builds a detailed map of where you go, how often, and at what times. It's collected silently, stored indefinitely, and often shared with third parties — unless you turn off location permissions in your settings.` },
            { image: 'l15-game-comment.png',       label: `A comment you wrote under someone else's post sharing your opinion on a topic.`,                                                      correctMatch: 'active',  objectPosition: 'center 50%', matchPhrase: `Active Footprint! Writing and posting a comment is a deliberate choice — you decided what to say and when to say it. Every comment you've ever written online is part of your active footprint, permanently associated with your identity (even under a "screen name" that can often be traced). Comments in particular are searchable and can be found by anyone looking at your account history. This is why the habit of asking "Does this represent who I want to be?" matters — not just for big posts, but for small comments too.` },
            { image: 'l15-game-browse-history.png', label: `Every website you visited this week — stored automatically by your browser and internet provider.`,                                  correctMatch: 'passive', objectPosition: 'center 50%', matchPhrase: `Passive Footprint! Browsing history is collected automatically without you making any choice to share it — it happens in the background every time you navigate online. Your browser stores it locally; your internet provider may store it too; and many websites use tracking technology to follow you as you move from site to site. This passive data can reveal a lot: your interests, concerns, research habits, and even things you searched for but didn't tell anyone about. Managing it means using private browsing modes and understanding what each platform collects.` },
          ],
          buckets: [
            { id: 'active',  label: `📢 Active Footprint`,  color: '#60A5FA' },
            { id: 'passive', label: `🔍 Passive Footprint`, color: '#F59E0B' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about digital footprints. Answer all 6 questions to earn your Digital Footprint Manager badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is a digital footprint?`,
              options:      [`Only the photos you've posted online`, `All the data that exists about you online, both what you post and what is collected about you`, `Your username and password for websites`, `The history of websites you've visited only`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why do deleted posts still sometimes exist online?`,
              options:      [`Deleted posts always disappear completely`, `Because companies are required by law to keep them`, `Because they can be saved in screenshots, server backups, and internet archive services`, `Because deletion takes 5–10 years to complete`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is a good question to ask before posting anything online?`,
              options:      [`Will this get a lot of likes?`, `Is this funny?`, `Does this represent the person I want to be?`, `Is this shorter than 280 characters?`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Your digital footprint includes both what you actively post and data collected about you automatically — like locations, search history, and websites visited.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The part of your digital footprint made up of things you deliberately post — photos, comments, and profiles — is called your ___ footprint.`,
              options:      [`active`, `hidden`, `deleted`, `passive`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What does building a positive digital footprint intentionally look like?`,
              options:      [`Deleting all your social media accounts`, `Only posting when required for school`, `Sharing work, projects, and interests that represent who you want to become`, `Keeping every account completely private`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search your own name online — with a parent's help if needed — and look at what comes up. Then search "how to build a positive digital footprint" for practical steps anyone can start taking right now.`,
          familyAdventure: `Do a family digital footprint review. Search each family member's name together (with permission). Look at what's publicly visible. Discuss: what does your family's combined online presence say about you? Is there anything to be proud of? Anything to adjust? Make a family agreement about how you'll approach digital posting going forward.`,
          creativePrompt:  `Design a Digital Identity Card for your future self at age 25. What would you want someone to find if they searched your name? What projects would be online? What would your posts and comments show about your values? Write it out in detail. Then ask: what would you need to start posting and creating now to build that identity over time?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'digital-footprint-manager',
          badgeName: `Digital Footprint Manager`,
          message:   `Brilliant work, {name}! You now know that your digital footprint is permanent, searchable, and already being seen by the world. But that also means it's something you can build intentionally — sharing work you're proud of, showing who you want to become. You're the author of your own online story. Choose the words carefully, and it can open doors for years to come. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l15_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L15] Loaded: "Digital Footprint: What You Leave Behind Online" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l15-s1-footprint-trail.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l15-s2-active-vs-passive.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l15-s3-deleted-but-saved.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l15-s4-whos-looking.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l15-s5-build-on-purpose.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l15-s6-privacy-rights.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L15] footprint-trail: ${r1.ok}, active-vs-passive: ${r2.ok}, deleted-but-saved: ${r3.ok}, whos-looking: ${r4.ok}, build-on-purpose: ${r5.ok}, privacy-rights: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L15] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l15_screens;
