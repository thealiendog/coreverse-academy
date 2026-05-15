// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 6
// "Digital Safety: Protecting Yourself Online"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l06_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-06',
      title:     `Digital Safety: Protecting Yourself Online`,
      duration:  12,
      xpReward:  50,
      badge:     'digital-guardian',
      badgeName: `Digital Guardian`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Online, you can't always tell who you're actually talking to. Someone who says they're a 12-year-old kid might not be. A website that looks trustworthy might be fake. A message from your 'bank' might be a scam. The internet is amazing — and it requires real smarts to navigate safely.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'What to Keep Private',
          paragraphs: [
            'Some things stay private online. Your full name, home address, school name, phone number, passwords.',
            'Photos that show where you are. Information that could help a stranger find or contact you. Protecting these is digital safety rule #1.',
          ],
          image:        '/explorer-assets/future-skills/l06-s1-locked-safe.png',
          imageCaption: 'Name, address, school, phone, passwords, location photos — these stay locked up. Always.',
          vocab: [
            { word: 'personal information', definition: 'Data that can identify or locate you — name, address, school, phone number, passwords, location photos.', audioPrompt: 'Personal information — data that can identify or locate you: name, address, school, phone number, passwords, location photos.' },
            { word: 'private',              definition: 'Kept to yourself or to people you genuinely trust. Not shared with strangers — especially online strangers.', audioPrompt: 'Private — kept to yourself or to people you genuinely trust. Not shared with strangers, especially online strangers.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Once It\'s Out, It\'s Out',
          paragraphs: [
            'Here\'s the most important thing about sharing online: once it\'s out, you can\'t take it back.',
            'A photo can be copied. A message can be forwarded. A post can be screenshot. There is no undo button on the internet.',
          ],
          image:        '/explorer-assets/future-skills/l06-s2-permanent-spread.png',
          imageCaption: 'Before you post anything, assume it\'s permanent. Because it usually is.',
          vocab: [
            { word: 'digital footprint', definition: 'The trail of data you leave online — every post, photo, message, and search. It can persist for years.', audioPrompt: 'Digital footprint — the trail of data you leave online: every post, photo, message, and search. It can persist for years.' },
            { word: 'screenshot',        definition: 'A captured image of what\'s on a screen. Anything online can be screenshot and saved forever — including "private" messages.', audioPrompt: 'Screenshot — a captured image of what\'s on a screen. Anything online can be screenshot and saved forever, including "private" messages.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Strong Passphrases',
          paragraphs: [
            'Weak passwords ("password123," your birthday, your pet\'s name) are the first things attackers try.',
            'A strong passphrase uses four random unrelated words: "purple-rocket-banana-cloud." Easy to remember. Very hard to crack.',
          ],
          image:        '/explorer-assets/future-skills/l06-s3-passphrase-stars.png',
          imageCaption: 'Four random words beat a short complex password every time. Easy for you, hard for attackers.',
          vocab: [
            { word: 'password',   definition: 'A secret code that protects an account. The lock on every digital door you have.', audioPrompt: 'Password — a secret code that protects an account. The lock on every digital door you have.' },
            { word: 'passphrase', definition: 'A strong password made of four or more random unrelated words. Easier to remember, much harder to crack than short complex passwords.', audioPrompt: 'Passphrase — a strong password made of four or more random unrelated words. Easier to remember, much harder to crack than short complex passwords.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'One Password, One Account',
          paragraphs: [
            'Never use the same password for more than one account.',
            'If one site gets hacked and your password leaks, attackers will try it everywhere else. One password per account = one breach can\'t take everything.',
          ],
          image:        '/explorer-assets/future-skills/l06-s4-unique-locks.png',
          imageCaption: 'Reuse a password, and one breach unlocks every door. Unique passwords contain the damage.',
          vocab: [
            { word: 'password manager', definition: 'A tool that stores a unique password for every account so you only memorize one master password.', audioPrompt: 'Password manager — a tool that stores a unique password for every account so you only memorize one master password.' },
            { word: 'breach',           definition: 'When an attacker gets into a system and steals data — including passwords. Reused passwords turn one breach into many.', audioPrompt: 'Breach — when an attacker gets into a system and steals data, including passwords. Reused passwords turn one breach into many.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Spotting Phishing',
          paragraphs: [
            'Phishing is when someone pretends to be trustworthy — your bank, a game, even a friend — to trick you into clicking or sharing.',
            'Red flags: urgent language ("act now!"), strange links, slight misspellings. The safest move? Don\'t click. Go to the real site directly.',
          ],
          image:        '/explorer-assets/future-skills/l06-s5-phishing-hook.png',
          imageCaption: 'Urgent + scary + click this link = phishing. Real companies don\'t threaten you by email.',
          vocab: [
            { word: 'phishing', definition: 'A scam where someone pretends to be trustworthy to trick you into clicking dangerous links or sharing personal info.', audioPrompt: 'Phishing — a scam where someone pretends to be trustworthy to trick you into clicking dangerous links or sharing personal info.' },
            { word: 'red flag', definition: 'A warning sign. Urgent language, strange links, and misspellings in messages are red flags — pause and check.', audioPrompt: 'Red flag — a warning sign. Urgent language, strange links, and misspellings in messages are red flags. Pause and check.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Talking to People Online',
          paragraphs: [
            'Anyone online can pretend to be someone they\'re not. Never share personal info with people you only know online.',
            'If anyone online makes you feel uncomfortable, tell a trusted adult immediately — even if you\'ve talked for a long time. That feeling is the signal.',
          ],
          image:        '/explorer-assets/future-skills/l06-s6-trusted-adult.png',
          imageCaption: 'A real friend respects your boundaries. Someone with bad intentions doesn\'t. Tell a trusted adult — always.',
          vocab: [
            { word: 'stranger',      definition: 'Someone you don\'t know in real life. People you\'ve only met online are strangers, no matter how friendly they seem.', audioPrompt: 'Stranger — someone you don\'t know in real life. People you\'ve only met online are strangers, no matter how friendly they seem.' },
            { word: 'trusted adult', definition: 'A grown-up you can rely on for help. Parents, teachers, family. They\'re there to help, not get you in trouble.', audioPrompt: 'Trusted adult — a grown-up you can rely on for help. Parents, teachers, family. They\'re there to help, not get you in trouble.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a safe or unsafe online behavior!`,
          guideText:     `Being smart online means knowing which behaviors protect you and which put you at risk. Some choices seem small but can have real consequences. Can you sort these four situations into safe and unsafe?`,
          columnHeaders: [`The Situation`, `Safe or Unsafe?`],
          items: [
            { image: 'l06-game-address.png',       label: `Sharing your home address and phone number with a new friend you met in an online game.`,                                                              correctMatch: 'unsafe', objectPosition: 'center 50%', matchPhrase: `Unsafe online behavior! Your home address and phone number are among the most sensitive pieces of personal information you have. Sharing them with someone you only know from an online game — where you can't verify who they actually are — puts you at serious risk. People online can present themselves as anyone. This information, once shared, cannot be unshared. The rule is simple: never share location information or contact details with online strangers.` },
            { image: 'l06-game-passphrase.png',    label: `Using a passphrase of four random unrelated words plus a number and symbol for each of your accounts.`,                                              correctMatch: 'safe',   objectPosition: 'center 50%', matchPhrase: `Safe online behavior! A passphrase made of four or more random unrelated words is one of the strongest and most practical password strategies available. It's far harder for an attacker to crack than a short complex password, and far easier for you to remember. Adding numbers and symbols makes it stronger still. Creating a different passphrase for each account means that if one account is ever compromised, all the others remain safe.` },
            { image: 'l06-game-phishing-link.png', label: `Clicking a link in an urgent email saying your account will be deleted if you don't act right away.`,                                             correctMatch: 'unsafe', objectPosition: 'center 50%', matchPhrase: `Unsafe online behavior! This is a classic phishing technique. The urgent language — "act immediately," "account will be deleted" — is designed to make you panic and click without thinking. Legitimate organisations almost never threaten to delete your account via email. The safest response to any urgent-sounding message: ignore the link entirely, and go directly to the website yourself by typing the address into your browser. If there's a real problem, you'll see it when you log in.` },
            { image: 'l06-game-tell-adult.png',    label: `Telling a trusted adult when someone online makes you uncomfortable, even if you've talked to them for a long time.`,                              correctMatch: 'safe',   objectPosition: 'center 50%', matchPhrase: `Safe online behavior — and one of the most important skills in digital safety. If someone online makes you feel uncomfortable, afraid, or pressured to keep secrets, telling a trusted adult immediately is always the right choice. It doesn't matter how long you've talked to this person or how much you think you know them. A real friend respects your feelings and boundaries. Someone with bad intentions pushes against them. Trusted adults are there to help, not to get you in trouble.` },
          ],
          buckets: [
            { id: 'safe',   label: `✅ Safe Online Behavior`,   color: '#34D399' },
            { id: 'unsafe', label: `⚠️ Unsafe Online Behavior`, color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about staying safe online. Answer all 6 questions to earn your Digital Guardian badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is personal information you should keep private online?`,
              options:      [`Your favorite color and food`, `Your full name, address, school, phone number, passwords, and identifying photos`, `Your opinions about movies`, `Your first name only`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is phishing?`,
              options:      [`A type of online game`, `Searching for information on the internet`, `When someone pretends to be trustworthy to trick you into giving information or clicking dangerous links`, `Sharing photos online`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What should you do if someone online makes you uncomfortable?`,
              options:      [`Block them and say nothing`, `Try to handle it yourself`, `Tell a trusted adult immediately`, `Stop using the internet`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Creating a strong passphrase using four or more random unrelated words is one of the most effective password strategies available.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Tricking someone into revealing personal information by pretending to be a trusted source is called ___.`,
              options:      [`phishing`, `hacking`, `spamming`, `browsing`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why is using the same password for multiple accounts dangerous?`,
              options:      [`It makes your password easier to forget`, `If one account is compromised, every account using that password is also at risk`, `Password managers don't work with repeated passwords`, `It slows down websites when you log in`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Look at the passwords you currently use for any accounts — would they pass the test you just learned? A passphrase of four random words is both easy to remember and dramatically stronger than most passwords people use.`,
          familyAdventure: `Do a family digital safety audit. Check: does everyone have strong, unique passwords for important accounts? Is two-factor authentication turned on for email? Are privacy settings reviewed on social media accounts? Look up haveibeenpwned.com and check if any family email addresses have been in a data breach. Fix anything you find.`,
          creativePrompt:  `Rate these passwords from weakest to strongest: 'password', 'Jake2015', 'J@k3_2015!', 'purple-rocket-banana-cloud-42'. Discuss why each is stronger or weaker than the others. Then create your own strong passphrase — four random words plus a number and symbol. Write it down somewhere safe (not on a device).`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'digital-guardian',
          badgeName: `Digital Guardian`,
          message:   `Brilliant work, {name}! You now know how to protect your personal information, recognise a phishing attempt, and make smart choices about what you share online. The smartest internet users aren't the fastest — they're the most careful. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l06_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L06] Loaded: "Digital Safety: Protecting Yourself Online" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l06-s1-locked-safe.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l06-s2-permanent-spread.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l06-s3-passphrase-stars.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l06-s4-unique-locks.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l06-s5-phishing-hook.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l06-s6-trusted-adult.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L06] locked-safe: ${r1.ok}, permanent-spread: ${r2.ok}, passphrase-stars: ${r3.ok}, unique-locks: ${r4.ok}, phishing-hook: ${r5.ok}, trusted-adult: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L06] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l06_screens;
