// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 5
// "Rights and Responsibilities: Two Sides of One Coin"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l05_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-05',
      title:     `Rights and Responsibilities: Two Sides of One Coin`,
      duration:  12,
      xpReward:  50,
      badge:     'kind-keeper',
      badgeName: `Kind Keeper`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hi {name}! Today we learn about something HUGE — your RIGHTS. You have them. Every kid does. And they come with something called RESPONSIBILITIES. The two go together like wings on a phoenix — you need both to fly. Ready to find your Kind Keeper?`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Are Rights?`,
          paragraphs: [
            `RIGHTS are things every person deserves — just for being a person. You don't have to earn them. You just have them.`,
            `Adults have rights. Kids have rights. People in every country have rights. It's a big idea that we ALL share.`,
          ],
          image:        '/explorer-assets/frontier/l05-s1-rights.png',
          imageCaption: `Rights — things every person deserves`,
          vocab: [
            { word: 'rights',  definition: `Things every person deserves just for being a person.`,                              audioPrompt: `Rights — things every person deserves just for being a person.` },
            { word: 'deserve', definition: `When you should have something because it's right.`,                                  audioPrompt: `Deserve — when you should have something because it's right.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Kids Have Rights Too`,
          paragraphs: [
            `Here's the cool part — KIDS have rights too. The right to be SAFE. The right to be HEARD. The right to learn, play, and be loved.`,
            `A long time ago, countries all over the world agreed: every kid in the world deserves these things. They wrote it down in something called the Rights of the Child.`,
          ],
          image:        '/explorer-assets/frontier/l05-s2-kids-rights.png',
          imageCaption: `Kids have rights — to be safe, heard, loved, and to play`,
          vocab: [
            { word: 'safe',    definition: `Free from harm — protected from things that could hurt you.`,                        audioPrompt: `Safe — free from harm, protected from things that could hurt you.` },
            { word: 'heard',   definition: `When other people listen to what you say.`,                                          audioPrompt: `Heard — when other people listen to what you say.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `What Are Responsibilities?`,
          paragraphs: [
            `RESPONSIBILITIES are things you DO so others can have their rights too. They're the OTHER side of rights.`,
            `Like this — you have the right to be heard, so you have the RESPONSIBILITY to listen to others. Rights and responsibilities go together.`,
          ],
          image:        '/explorer-assets/frontier/l05-s3-responsibilities.png',
          imageCaption: `Responsibilities — things you DO so others get their rights too`,
          vocab: [
            { word: 'responsibility', definition: `Something you DO to make sure others get their rights too.`,                  audioPrompt: `Responsibility — something you do to make sure others get their rights too.` },
            { word: 'listen',         definition: `To pay careful attention when someone is speaking.`,                          audioPrompt: `Listen — to pay careful attention when someone is speaking.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Two Sides of One Coin`,
          paragraphs: [
            `Every right comes with a responsibility. They're like two sides of one coin — you can't have one without the other.`,
            `You have the right to be treated kindly — and the responsibility to BE kind to others. You have the right to play — and the responsibility to play fairly.`,
          ],
          image:        '/explorer-assets/frontier/l05-s4-coin.png',
          imageCaption: `Rights and responsibilities — two sides of one coin`,
          vocab: [
            { word: 'respect', definition: `Treating people kindly and giving them what they deserve.`,                          audioPrompt: `Respect — treating people kindly and giving them what they deserve.` },
            { word: 'fairly',  definition: `In a way that's right and equal for everyone.`,                                      audioPrompt: `Fairly — in a way that's right and equal for everyone.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Why It Works`,
          paragraphs: [
            `Imagine a world where everyone wanted their RIGHTS but no one did their RESPONSIBILITIES. Nobody would listen. Nobody would share. Nobody would be kind.`,
            `That world would be chaos. So we ALL agree to do our part. You do yours, I do mine. Together, we make a fair world.`,
          ],
          image:        '/explorer-assets/frontier/l05-s5-together.png',
          imageCaption: `Together, we make the world work`,
          vocab: [
            { word: 'together',  definition: `When people do things WITH each other, side by side.`,                             audioPrompt: `Together — when people do things with each other, side by side.` },
            { word: 'community', definition: `A group of people who live, learn, or work near each other.`,                     audioPrompt: `Community — a group of people who live, learn, or work near each other.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `What Adults Forget`,
          paragraphs: [
            `Even adults forget this sometimes. They want their rights but skip their responsibilities. That's when problems happen.`,
            `Doing BOTH — that's the real magic. Kids who learn this early grow up to be the brave change-makers the world needs.`,
          ],
          image:        '/explorer-assets/frontier/l05-s6-change-makers.png',
          imageCaption: `Doing both — that's how change-makers are born`,
          vocab: [
            { word: 'protect',     definition: `To keep someone or something safe from harm.`,                                   audioPrompt: `Protect — to keep someone or something safe from harm.` },
            { word: 'change-maker', definition: `Someone brave who works to make the world more fair for everyone.`,              audioPrompt: `Change-maker — someone brave who works to make the world more fair for everyone.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Each right has a matching responsibility. Tap a right, then tap the responsibility that goes with it!`,
          guideText:     `Let's match rights with their matching responsibilities, {name}! Every right has a partner — find them all!`,
          columnHeaders: [`Your Right`, `Your Responsibility`],
          items: [
            { image: 'l05-game-speaking.png', label: `You have the right to BE HEARD.`,                  correctMatch: 'listen',  objectPosition: 'center 50%', matchPhrase: `Yes! You want to be heard — so you LISTEN when others speak. Two sides, one coin.` },
            { image: 'l05-game-play.png',     label: `You have the right to PLAY.`,                       correctMatch: 'share',   objectPosition: 'center 50%', matchPhrase: `Right! You play freely — so you SHARE play with others. Everyone gets a turn.` },
            { image: 'l05-game-safe.png',     label: `You have the right to be SAFE.`,                    correctMatch: 'careful', objectPosition: 'center 50%', matchPhrase: `Got it! You stay safe — so you don't HURT others. Safety is for everyone.` },
            { image: 'l05-game-kindness.png', label: `You have the right to be treated KINDLY.`,         correctMatch: 'kind',    objectPosition: 'center 50%', matchPhrase: `Yes! Kindness comes to you — so you GIVE it to others too. Kindness multiplies.` },
          ],
          buckets: [
            { id: 'listen',  label: `🎧 Listen to others`,    color: '#60A5FA' },
            { id: 'share',   label: `🤝 Share with others`,   color: '#34D399' },
            { id: 'careful', label: `🛡️ Don't hurt others`,   color: '#F472B6' },
            { id: 'kind',    label: `💛 Be kind to others`,   color: '#FBBF24' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Kind Keeper badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is a "right"?`,
              options: [`A direction`, `Something every person deserves`, `A type of toy`, `A school rule`],
              correctIndex: 1 },
            { format: 'true-false', question: `Every right comes with a responsibility.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Which is a kid's right?`,
              options: [`The right to be safe`, `The right to never sleep`, `The right to be mean`, `The right to never share`],
              correctIndex: 0 },
            { format: 'fill-blank', question: `Rights and responsibilities are two ___ of the same coin.`,
              options: [`sides`, `colors`, `rooms`, `shapes`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `If you have the right to be heard, what's your responsibility?`,
              options: [`Shout louder than others`, `Listen when others speak`, `Never let others talk`, `Walk away`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Why do rights and responsibilities go together?`,
              options: [`Because adults said so`, `To make a fair world for everyone`, `For no reason`, `To be confusing`],
              correctIndex: 1 },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Beautiful, {name}! Now let's bring rights and responsibilities into your real life. You can practice both today!`,
          familyAdventure: `Sit with your family and ask: "What's one right we have, and what's one responsibility that comes with it?" Make a list together. You might be surprised what your family thinks of!`,
          creativePrompt:  `Make your own "My Rights and My Responsibilities" poster. Fold a paper in half. On one side, draw or list 3 rights you have. On the other side, draw 3 responsibilities you'll do. Put it on your wall — that's your promise to the world.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'kind-keeper',
          badgeName: `Kind Keeper`,
          message:   `Wonderful work, {name}! You learned that you have RIGHTS — and that they come with RESPONSIBILITIES. You're a Kind Keeper now — someone who makes sure both sides happen. The world is better because of people like you. Orion is so glad we got to think together today.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = frontier_explorer_l05_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L05] Loaded: "Rights and Responsibilities" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l05-s1-rights.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l05-s2-kids-rights.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l05-s3-responsibilities.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l05-s4-coin.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l05-s5-together.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l05-s6-change-makers.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L05] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L05] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l05_screens;
