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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Digital Footprint?`,
          paragraphs: [
            `Your digital footprint is all the data that exists about you online. It has two parts. Your active footprint is everything you deliberately post or share: photos, comments, profiles, status updates, videos, and any content you publish. Your passive footprint is data collected about you automatically, without you actively choosing to share it: websites visited, location data, search history, time spent on different apps, and the patterns of your online behavior.`,
            `Together, these create a detailed portrait of who you are, what you believe, where you go, what you buy, what you're interested in, and how you spend your time. Most people are surprised by how complete this picture is when they see it laid out. Every platform you use is adding to it — some visibly, some invisibly. And because it accumulates over time, a footprint that starts small at age eight can be quite substantial by age eighteen.`,
            `Your digital footprint is also cross-referenced. Advertisers, data brokers, and analytics companies piece together information from many different sources — your browsing history, your social media activity, your purchase records, your location patterns — to build profiles that are often more detailed than what any single app holds. Understanding this helps explain why advertisements sometimes seem to know what you were just thinking about: they're drawing from a combined picture assembled from many separate data streams.`,
          ],
          image:        '/explorer-assets/future-skills/l15-magazine-what-is-footprint.png',
          imageCaption: `What is a digital footprint — active data you post deliberately, plus passive data collected about you automatically, building over time`,
          vocab: [
            { word: `digital footprint`, definition: `The trail of data that exists about you online — including what you actively post and what is automatically collected, such as locations visited, searches made, and websites browsed.`,        audioPrompt: `Digital footprint — the trail of data that exists about you online. Including what you actively post and what is automatically collected, such as locations visited, searches made, and websites browsed.` },
            { word: `active footprint`,  definition: `The part of your digital footprint you create deliberately — photos you share, comments you write, profiles you set up, and any content you publish online.`,                               audioPrompt: `Active footprint — the part of your digital footprint you create deliberately. Photos you share, comments you write, profiles you set up, and any content you publish online.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Long It Lasts`,
          paragraphs: [
            `The internet has a very long memory. Even when you delete something, it doesn't always disappear. Screenshots can be taken and saved before deletion. Server backups may hold copies. Other people may have already downloaded or shared what you removed. The Wayback Machine — a website that automatically archives billions of web pages — may have captured a version that persists indefinitely. Digital content that is published, even briefly, can resurface years or decades later.`,
            `This permanence has real consequences. A photo posted carelessly at age twelve can still be found at age twenty-five. A comment made in frustration can be seen by people who were never meant to see it. An opinion expressed online during one phase of your life can follow you into another where your views have completely changed. The gap between "I posted this and forgot about it" and "this is still publicly accessible and searchable" is one of the most misunderstood aspects of digital life.`,
            `Many employers, college admissions teams, and even sports coaches now look at people's online presence as part of evaluating them — what they see can really help or hurt their decisions. This isn't about surveillance for its own sake — it's that online behavior has become a window into character and judgment. Posts that show genuine curiosity, creativity, and integrity make a strong positive impression. Posts that show poor judgment, cruelty, or dishonesty make the opposite impression. The digital record speaks, whether you intend it to or not.`,
          ],
          image:        '/explorer-assets/future-skills/l15-magazine-how-long-lasts.png',
          imageCaption: `How long it lasts — deleted posts can persist in screenshots, backups, and archives, and online presence is increasingly evaluated by others`,
          vocab: [
            { word: `passive footprint`, definition: `The part of your digital footprint collected about you without you actively choosing to share it — like your location, search history, browsing habits, and time spent on different apps.`,    audioPrompt: `Passive footprint — the part of your digital footprint collected about you without you actively choosing to share it. Like your location, search history, browsing habits, and time spent on different apps.` },
            { word: `data permanence`,   definition: `The reality that digital information often persists far longer than expected — even after deletion, data can exist in screenshots, server backups, and internet archives.`,                  audioPrompt: `Data permanence — the reality that digital information often persists far longer than expected. Even after deletion, data can exist in screenshots, server backups, and internet archives.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Building a Positive Digital Footprint`,
          paragraphs: [
            `Your digital footprint isn't just something to manage carefully — it's something you can build intentionally. The same permanence that can work against you can also work for you. Work you share that shows genuine skill, curiosity, and creative thinking can remain visible and searchable for years. Projects, writing, art, code, or any other meaningful output that you publish thoughtfully becomes part of the record of who you are and what you can do.`,
            `Many young people have received college scholarships, internship offers, and unexpected opportunities because someone found their online presence and was impressed by what they saw. A portfolio of genuine work — even informal work done out of interest — can speak more loudly than a resume or application. Young coders who shared projects, young writers who published their writing, young designers who documented their process: all found that a thoughtful digital presence opened doors that wouldn't otherwise have been open.`,
            `The key question to ask before posting anything: "Does this represent the person I want to be?" Not "Will this get likes?" or "Will this be funny?" but "Is this consistent with my values and who I'm building myself into?" It doesn't require that everything you post be serious or impressive. It does require a moment of reflection about whether what you're sharing serves you or undermines you. That habit of intentional posting — developed early — pays dividends for the rest of your life.`,
          ],
          image:        '/explorer-assets/future-skills/l15-magazine-positive-footprint.png',
          imageCaption: `Building a positive footprint — sharing genuine work and thinking intentionally about what you publish can open real doors over time`,
          vocab: [
            { word: `personal brand`,      definition: `The impression your online presence creates about who you are — shaped by everything you post, share, and comment on, and increasingly visible to colleges, employers, and others.`,       audioPrompt: `Personal brand — the impression your online presence creates about who you are. Shaped by everything you post, share, and comment on, and increasingly visible to colleges, employers, and others.` },
            { word: `intentional posting`, definition: `The practice of choosing what to share online with awareness of how it represents you — asking whether content reflects the person you want to be, not just what feels good in the moment.`, audioPrompt: `Intentional posting — the practice of choosing what to share online with awareness of how it represents you. Asking whether content reflects the person you want to be, not just what feels good in the moment.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Privacy Settings and Data Rights`,
          paragraphs: [
            `Most platforms include privacy settings that let you control who can see your content — but they only protect you if you actually use them. A public account means anyone in the world can access everything you post, now and in the future. Private settings limit who can see your posts, but they don't prevent the people who can see them from saving or sharing them. And even with the strictest privacy settings, the platform itself still holds all your data and may share it with third parties according to its terms of service.`,
            `In some parts of the world — particularly in the European Union — people have legal rights around their digital data that go beyond what platforms voluntarily offer. The "right to be forgotten" allows EU citizens to request that companies delete personal data about them in certain circumstances. These laws reflect a growing recognition that personal data has real value and that individuals should have meaningful control over how it's used. In the United States, these legal protections are less comprehensive, though they are expanding in various states.`,
            `Regardless of legal frameworks, the most reliable protection for your digital footprint is thoughtful behavior from the start. Privacy settings are a layer of protection, not a guarantee. Legal rights are useful when things go wrong, not a substitute for being careful. The most powerful tool you have is judgment: thinking before you share, knowing what you're agreeing to when you sign up for a service, and treating your digital presence as a long-term asset to be built rather than a disposable stream of moments that disappear. They don't always disappear.`,
          ],
          image:        '/explorer-assets/future-skills/l15-magazine-privacy-settings.png',
          imageCaption: `Privacy settings and data rights — controls exist but don't guarantee protection; thoughtful behavior from the start is the most reliable strategy`,
          vocab: [
            { word: `privacy settings`,     definition: `Controls built into apps and platforms that limit who can see your content — only effective if actively used. Even with strong privacy settings, the platform itself still holds your data.`, audioPrompt: `Privacy settings — controls built into apps and platforms that limit who can see your content. Only effective if actively used. Even with strong privacy settings, the platform itself still holds your data.` },
            { word: `right to be forgotten`, definition: `A legal right in some countries allowing people to request that companies delete their personal data — reflecting growing recognition of data privacy as a fundamental right.`,            audioPrompt: `Right to be forgotten — a legal right in some countries allowing people to request that companies delete their personal data. Reflecting growing recognition of data privacy as a fundamental right.` },
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
    fetch('/explorer-assets/future-skills/l15-magazine-what-is-footprint.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l15-magazine-how-long-lasts.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l15-magazine-positive-footprint.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l15-magazine-privacy-settings.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L15] what-is-footprint: ${r1.ok}, how-long-lasts: ${r2.ok}, positive-footprint: ${r3.ok}, privacy-settings: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L15] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l15_screens;
