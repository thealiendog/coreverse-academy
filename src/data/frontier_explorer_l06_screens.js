// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 6
// "What Is Truth? Finding What's Really Real"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l06_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-06',
      title:     `What Is Truth? Finding What's Really Real`,
      duration:  12,
      xpReward:  50,
      badge:     'truth-seeker',
      badgeName: `Truth Seeker`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today we hunt for something powerful — TRUTH. Sometimes the truth is easy to see. Sometimes people argue about it. Sometimes it's hiding inside our own beliefs. Today we learn how philosophers FIND truth — and how you can too. Ready to be a Truth Seeker?`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Truth?`,
          paragraphs: [
            `TRUTH is what's REALLY real — not what we WISH was real, not what someone TOLD us was real. Truth is what actually IS.`,
            `Like this — the truth is that the sun is hot. You can wish it were cold, but the truth stays the truth.`,
          ],
          image:        '/explorer-assets/frontier/l06-s1-truth.png',
          imageCaption: `Truth — what's really real`,
          vocab: [
            { word: 'truth',  definition: `What is actually real — what's true no matter what anyone wishes or says.`,        audioPrompt: `Truth — what is actually real, what's true no matter what anyone wishes or says.` },
            { word: 'real',   definition: `Something that actually exists — not made up.`,                                     audioPrompt: `Real — something that actually exists, not made up.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Truth vs Opinion`,
          paragraphs: [
            `Some things are TRUE. Some things are just OPINIONS. They're different!`,
            `"Ice is cold" — that's TRUE. Everyone can check it. "Chocolate ice cream is the best" — that's an OPINION. Different people feel different ways.`,
          ],
          image:        '/explorer-assets/frontier/l06-s2-truth-opinion.png',
          imageCaption: `Truth vs opinion — different things`,
          vocab: [
            { word: 'opinion', definition: `What YOU think or feel — not the same as what's true for everyone.`,                audioPrompt: `Opinion — what you think or feel, not the same as what's true for everyone.` },
            { word: 'fact',    definition: `Something true that anyone can check.`,                                            audioPrompt: `Fact — something true that anyone can check.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `How Do We Know What's True?`,
          paragraphs: [
            `Philosophers ask: "How do we KNOW something is true?" Three big ways: we can SEE it. We can MEASURE it. Or many people CHECK it the same way.`,
            `If you look at a tree, you see it. If you measure water, you get a number. If thousands of scientists run the same test and get the same answer — that's truth.`,
          ],
          image:        '/explorer-assets/frontier/l06-s3-checking.png',
          imageCaption: `We find truth by seeing, measuring, and checking`,
          vocab: [
            { word: 'check', definition: `To look closely and make sure something is right.`,                                  audioPrompt: `Check — to look closely and make sure something is right.` },
            { word: 'evidence', definition: `Clues or proof that helps you figure out if something is true.`,                   audioPrompt: `Evidence — clues or proof that helps you figure out if something is true.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `When People Believe Wrong Things`,
          paragraphs: [
            `Sometimes people believe things that AREN'T true. Long ago, people thought the Earth was flat. Then explorers checked — and the truth was the Earth is round.`,
            `That's why CHECKING is so important. Believing something doesn't make it true. Looking closely does.`,
          ],
          image:        '/explorer-assets/frontier/l06-s4-flat-earth.png',
          imageCaption: `People used to think Earth was flat — until someone checked`,
          vocab: [
            { word: 'belief',   definition: `Something you THINK is true — even if you haven't checked yet.`,                  audioPrompt: `Belief — something you think is true, even if you haven't checked yet.` },
            { word: 'discover', definition: `To find out something new — to learn a truth you didn't know before.`,            audioPrompt: `Discover — to find out something new, to learn a truth you didn't know before.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Telling the Truth`,
          paragraphs: [
            `TELLING the truth means saying what really happened — even when it's hard. It's one of the bravest things a person can do.`,
            `When you tell the truth, people trust you. When you tell lies, trust breaks. Once broken, trust is hard to fix.`,
          ],
          image:        '/explorer-assets/frontier/l06-s5-telling-truth.png',
          imageCaption: `Telling the truth builds trust`,
          vocab: [
            { word: 'honest', definition: `Telling the truth — saying what really is, not what's easy.`,                       audioPrompt: `Honest — telling the truth, saying what really is, not what's easy.` },
            { word: 'trust',  definition: `Believing that someone will be honest and do the right thing.`,                     audioPrompt: `Trust — believing that someone will be honest and do the right thing.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Why Truth Matters`,
          paragraphs: [
            `Truth matters because without it, nothing makes sense. We couldn't trust each other. We couldn't learn. We couldn't be safe.`,
            `Truth Seekers — people who look for what's REALLY real — make the world better. Scientists, journalists, brave kids who tell the truth. The world needs them.`,
          ],
          image:        '/explorer-assets/frontier/l06-s6-seekers.png',
          imageCaption: `Truth Seekers make the world better`,
          vocab: [
            { word: 'truth-seeker', definition: `Someone who looks closely to find what's really true.`,                       audioPrompt: `Truth seeker — someone who looks closely to find what's really true.` },
            { word: 'matter',       definition: `To be important — to really count.`,                                          audioPrompt: `Matter — to be important, to really count.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some statements are TRUE. Others are just OPINIONS. Sort them!`,
          guideText:     `Time to be a Truth Seeker, {name}! Tap each statement, then decide — is it a truth or an opinion?`,
          columnHeaders: [`The Statement`, `Truth or Opinion?`],
          items: [
            { image: 'l06-game-icecream.png', label: `"Chocolate ice cream is the best flavor."`,                       correctMatch: 'opinion', objectPosition: 'center 50%', matchPhrase: `Opinion! Different people like different flavors. That's a feeling, not a fact.` },
            { image: 'l06-game-water.png',    label: `"Water is wet."`,                                                  correctMatch: 'truth',   objectPosition: 'center 50%', matchPhrase: `Truth! Anyone can check it. Water is always wet — that's a fact.` },
            { image: 'l06-game-friend.png',   label: `"Cats are better than dogs."`,                                     correctMatch: 'opinion', objectPosition: 'center 50%', matchPhrase: `Opinion! Some people love cats, some love dogs. That's a preference, not a truth.` },
            { image: 'l06-game-sun.png',      label: `"The sun is much bigger than the Earth."`,                         correctMatch: 'truth',   objectPosition: 'center 50%', matchPhrase: `Truth! Scientists have measured this. The sun really is huge — that's a fact.` },
          ],
          buckets: [
            { id: 'truth',   label: `✓ Truth (Fact)`,    color: '#34D399' },
            { id: 'opinion', label: `💭 Opinion`,         color: '#A78BFA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Truth Seeker badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is "truth"?`,
              options: [`What you wish was real`, `What is actually real`, `Whatever your friend says`, `A type of food`],
              correctIndex: 1 },
            { format: 'true-false', question: `Some things are TRUTHS and some things are OPINIONS — they're different.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Which of these is an OPINION?`,
              options: [`Fire is hot`, `Water is wet`, `Vanilla is the best ice cream`, `The sun is bigger than Earth`],
              correctIndex: 2 },
            { format: 'fill-blank', question: `If you want to know if something is true, you should ___.`,
              options: [`check`, `forget`, `ignore`, `argue`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `What happened when people checked if the Earth was flat?`,
              options: [`They proved it was flat`, `They discovered it was round`, `Nothing changed`, `They gave up`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Why is telling the truth important?`,
              options: [`It's not important`, `It builds trust between people`, `It makes you taller`, `It makes things confusing`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Beautiful work, {name}! Now let's practice being a Truth Seeker in real life. The world needs more of you!`,
          familyAdventure: `At dinner, ask your family: "What's something you BELIEVED was true, but later found out wasn't?" Listen to their stories. Truth changes when we learn more — that's how we grow!`,
          creativePrompt:  `Make a "Truth Detective" notebook. Fold paper into a small book. On the first page, write three things you KNOW are true (with evidence). On the next page, write three OPINIONS you have. See how different they are!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'truth-seeker',
          badgeName: `Truth Seeker`,
          message:   `Brilliant, {name}! You learned the difference between truth and opinion. You learned that we CHECK things to find truth. And you learned that telling the truth is brave. You're a Truth Seeker now. The world is better with more of you in it. Orion is proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l06_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L06] Loaded: "What Is Truth?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l06-s1-truth.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l06-s2-truth-opinion.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l06-s3-checking.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l06-s4-flat-earth.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l06-s5-telling-truth.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l06-s6-seekers.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L06] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L06] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l06_screens;
