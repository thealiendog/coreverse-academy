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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Personal Information: What to Keep Private`,
          paragraphs: [
            `Personal information is any data that could identify you or locate you in the real world. It includes your full name, home address, school name, phone number, passwords, and any photos that show where you are or could help someone find you. This might seem like a short list, but in combination these pieces of information can be used to locate, contact, or harm you — which is why protecting them is taken seriously by every digital safety expert.`,
            `The most important thing to understand about sharing personal information online: once it's out, you lose control of it permanently. A photo posted publicly can be copied, stored, and shared by anyone who sees it — even if you delete it later. A message sent to someone you trust can be forwarded. Data shared with one platform can be sold to dozens of others. There is no undo button for information shared online.`,
            `Before sharing anything online — a photo, a post, any personal detail — pause and ask yourself: "Would I be comfortable if everyone I know could see this?" Not just your friends, but your teachers, your family, your future self years from now. If the answer is no, don't post it. This simple check, applied consistently, prevents most of the regrettable mistakes people make online.`,
          ],
          image:        '/explorer-assets/future-skills/l06-magazine-personal-info.png',
          imageCaption: `Personal information — once shared online it can't be taken back, so protecting it from the start matters most`,
          vocab: [
            { word: `personal information`, definition: `Any data that could identify you or reveal your location — including your name, address, school, phone number, passwords, and photos that show where you are. Protecting this information online is a foundational digital safety skill.`, audioPrompt: `Personal information — any data that could identify you or reveal your location. Including your name, address, school, phone number, passwords, and photos that show where you are. Protecting this information online is a foundational digital safety skill.` },
            { word: `digital footprint`,    definition: `The trail of data you leave behind every time you use the internet — every post, click, search, and message contributes to your digital footprint, which can persist online long after you've forgotten about it.`,                  audioPrompt: `Digital footprint — the trail of data you leave behind every time you use the internet. Every post, click, search, and message contributes to your digital footprint, which can persist online long after you've forgotten about it.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Strong Passwords`,
          paragraphs: [
            `A strong password is your first line of defense against people who want to access your accounts without permission. Bad passwords are extremely common: your name, "password123," your birthday, the name of a pet or sports team. These are the first things attackers try — not because they randomly guess, but because most people use predictable passwords. A weak password provides essentially no protection at all.`,
            `A strong password has at least 12 characters, uses a mix of letters, numbers, and symbols, and doesn't contain real dictionary words. An even better approach is a passphrase — four or more random unrelated words joined together, like "purple-rocket-banana-cloud." A passphrase is harder to crack than a short complex password and far easier to remember. Adding numbers and symbols makes it stronger still. The randomness and length are what matter most.`,
            `You should never use the same password for more than one account. If one site has a data breach and your password is exposed, attackers will immediately try that same password on every other service you use. A password manager is a tool that generates and remembers a unique strong password for every account so you only have to remember one master password. It's one of the highest-impact digital safety improvements anyone can make.`,
          ],
          image:        '/explorer-assets/future-skills/l06-magazine-passwords.png',
          imageCaption: `Strong passwords — passphrases of four random words are both memorable and far harder to crack than short complex passwords`,
          vocab: [
            { word: `passphrase`,      definition: `A strong password made from four or more random unrelated words — passphrases are both easier to remember and harder to crack than short complex passwords, making them one of the best password strategies available.`, audioPrompt: `Passphrase — a strong password made from four or more random unrelated words. Passphrases are both easier to remember and harder to crack than short complex passwords, making them one of the best password strategies available.` },
            { word: `password manager`, definition: `A tool that generates and stores a unique strong password for every account you have — with a password manager, you only need to remember one master password while every other account gets its own strong, unique one.`,            audioPrompt: `Password manager — a tool that generates and stores a unique strong password for every account you have. With a password manager, you only need to remember one master password while every other account gets its own strong, unique one.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Phishing and Scams`,
          paragraphs: [
            `Phishing is a type of online deception where someone pretends to be a trustworthy source — a bank, a game company, a streaming service, even a friend — in order to trick you into giving up personal information or clicking a dangerous link. The word "phishing" is spelled like fishing: the attacker casts a hook, hoping you'll bite. And these attacks are surprisingly effective, even on adults who know about them.`,
            `There are several warning signs to watch for. Urgent language — "Your account will be closed immediately!" or "Act now or lose access forever!" — is a classic tactic designed to make you panic and click before thinking. Spelling or grammar mistakes in official-looking messages are a red flag. The sender's email address looks almost right but has a small difference. And links in the message don't actually lead where they claim to when you look closely.`,
            `The golden rule for any suspicious message: don't click the link. Instead, go directly to the website yourself by typing the address into your browser. If your bank emails you about a problem, go to your bank's website directly — don't click anything in the email. If a message from a friend asks you to click something unusual, contact your friend through a different channel to verify it's actually them. When in doubt, don't click.`,
          ],
          image:        '/explorer-assets/future-skills/l06-magazine-phishing.png',
          imageCaption: `Phishing — fake urgent messages designed to trick you into clicking or sharing; the safest response is always to go directly to the site yourself`,
          vocab: [
            { word: `phishing`,              definition: `A scam where someone pretends to be a trustworthy source to trick you into sharing personal information or clicking dangerous links — phishing messages often use urgent language to make you act before you think.`, audioPrompt: `Phishing — a scam where someone pretends to be a trustworthy source to trick you into sharing personal information or clicking dangerous links. Phishing messages often use urgent language to make you act before you think.` },
            { word: `two-factor authentication`, definition: `An extra layer of account security that requires both your password and a second proof of identity — like a code sent to your phone. Even if a phishing attack gets your password, two-factor authentication blocks the attacker.`, audioPrompt: `Two-factor authentication — an extra layer of account security that requires both your password and a second proof of identity, like a code sent to your phone. Even if a phishing attack gets your password, two-factor authentication blocks the attacker.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Talking to Strangers Online`,
          paragraphs: [
            `The internet makes it easy for people to be whoever they want to be. Someone who presents themselves as a friendly person your age with the same interests might not be who they claim. This isn't meant to make you afraid of everyone online — most people are exactly who they say they are. But some are not, and the consequences of trusting the wrong person can be serious. The same common sense you use in the physical world applies online.`,
            `The rules for online strangers are clear and straightforward. Never share personal information — your real name, where you live, where you go to school — with someone you only know online. Never agree to meet someone you've only met online without telling a trusted adult first. And if anyone online ever makes you feel uncomfortable — no matter how long you've been talking, no matter how much you think you know them — tell a trusted adult immediately.`,
            `A real friend respects your boundaries and understands when you feel unsure. Someone with bad intentions pushes against those boundaries, insists on secrecy, and makes you feel like you can't tell anyone else. That feeling of "I shouldn't tell anyone about this" is the most important signal to recognize — and to act on. Tell anyway. Your safety matters more than any online relationship, and trusted adults are there to help you, not to get you in trouble.`,
          ],
          image:        '/explorer-assets/future-skills/l06-magazine-strangers.png',
          imageCaption: `Online strangers — people can be anyone online; real friends respect your boundaries, and trusted adults are always there to help`,
          vocab: [
            { word: `online safety`, definition: `The practice of protecting yourself from harm while using the internet — including keeping personal information private, recognising scams, and knowing when to tell a trusted adult.`, audioPrompt: `Online safety — the practice of protecting yourself from harm while using the internet. Including keeping personal information private, recognising scams, and knowing when to tell a trusted adult.` },
            { word: `boundary`,      definition: `A limit that protects your safety and wellbeing — in online safety, a boundary means knowing what information and contact is appropriate to share, and acting on your instincts when something feels wrong.`,  audioPrompt: `Boundary — a limit that protects your safety and wellbeing. In online safety, a boundary means knowing what information and contact is appropriate to share, and acting on your instincts when something feels wrong.` },
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
            { image: 'l06-game-address.png',      label: `Sharing your home address and phone number with a new friend you met in an online game.`,                                                              correctMatch: 'unsafe', objectPosition: 'center 50%', matchPhrase: `Unsafe online behavior! Your home address and phone number are among the most sensitive pieces of personal information you have. Sharing them with someone you only know from an online game — where you can't verify who they actually are — puts you at serious risk. People online can present themselves as anyone. This information, once shared, cannot be unshared. The rule is simple: never share location information or contact details with online strangers.` },
            { image: 'l06-game-passphrase.png',   label: `Using a passphrase of four random unrelated words plus a number and symbol for each of your accounts.`,                                              correctMatch: 'safe',   objectPosition: 'center 50%', matchPhrase: `Safe online behavior! A passphrase made of four or more random unrelated words is one of the strongest and most practical password strategies available. It's far harder for an attacker to crack than a short complex password, and far easier for you to remember. Adding numbers and symbols makes it stronger still. Creating a different passphrase for each account means that if one account is ever compromised, all the others remain safe.` },
            { image: 'l06-game-phishing-link.png', label: `Clicking a link in an urgent email saying your account will be deleted if you don't act right away.`,                                             correctMatch: 'unsafe', objectPosition: 'center 50%', matchPhrase: `Unsafe online behavior! This is a classic phishing technique. The urgent language — "act immediately," "account will be deleted" — is designed to make you panic and click without thinking. Legitimate organisations almost never threaten to delete your account via email. The safest response to any urgent-sounding message: ignore the link entirely, and go directly to the website yourself by typing the address into your browser. If there's a real problem, you'll see it when you log in.` },
            { image: 'l06-game-tell-adult.png',   label: `Telling a trusted adult when someone online makes you uncomfortable, even if you've talked to them for a long time.`,                              correctMatch: 'safe',   objectPosition: 'center 50%', matchPhrase: `Safe online behavior — and one of the most important skills in digital safety. If someone online makes you feel uncomfortable, afraid, or pressured to keep secrets, telling a trusted adult immediately is always the right choice. It doesn't matter how long you've talked to this person or how much you think you know them. A real friend respects your feelings and boundaries. Someone with bad intentions pushes against them. Trusted adults are there to help, not to get you in trouble.` },
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
    fetch('/explorer-assets/future-skills/l06-magazine-personal-info.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l06-magazine-passwords.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l06-magazine-phishing.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l06-magazine-strangers.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L06] personal-info: ${r1.ok}, passwords: ${r2.ok}, phishing: ${r3.ok}, strangers: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L06] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l06_screens;
