// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 10
// "What Makes Something Beautiful? The Magic of Beauty"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l10_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-10',
      title:     `What Makes Something Beautiful? The Magic of Beauty`,
      duration:  12,
      xpReward:  50,
      badge:     'beauty-spotter',
      badgeName: `Beauty Spotter`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a question that makes the world more magical — WHAT MAKES SOMETHING BEAUTIFUL? Is it colors? Music? Kindness? A sunset? A friend's laugh? Beauty is everywhere — but what IS it really? Time to become a Beauty Spotter!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Beauty?`,
          paragraphs: [
            `BEAUTY is when something makes you stop and notice. It can be a sunset that takes your breath away. A song that gives you chills. A puppy that makes your heart melt.`,
            `Beauty isn't just "pretty." It's anything that makes you feel WOW inside.`,
          ],
          image:        '/explorer-assets/frontier/l10-s1-beauty.png',
          imageCaption: `Beauty — when something makes you feel "WOW"`,
          vocab: [
            { word: 'beauty', definition: `When something is so amazing, it makes you stop and notice.`,                       audioPrompt: `Beauty — when something is so amazing, it makes you stop and notice.` },
            { word: 'notice', definition: `To pay attention to something — to really see it.`,                                  audioPrompt: `Notice — to pay attention to something, to really see it.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Beauty Is Everywhere`,
          paragraphs: [
            `Beauty isn't only in museums or fancy places. Beauty is the way light hits leaves. The way bubbles float. The way your grandma's hands look when she's cooking.`,
            `Once you start looking for beauty, you find it in surprising places. The world is FULL of it — if you have eyes to see.`,
          ],
          image:        '/explorer-assets/frontier/l10-s2-everywhere.png',
          imageCaption: `Beauty is everywhere — when you really look`,
          vocab: [
            { word: 'surprise', definition: `Something unexpected — something that catches you happy off guard.`,              audioPrompt: `Surprise — something unexpected, something that catches you happy off guard.` },
            { word: 'looking',  definition: `Paying careful attention with your eyes.`,                                        audioPrompt: `Looking — paying careful attention with your eyes.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Different Kinds of Beauty`,
          paragraphs: [
            `There are MANY kinds of beauty. Visual beauty — what you see (paintings, sunsets, faces). Music beauty — what you hear (a beautiful song).`,
            `There's also INSIDE beauty — kindness, courage, honesty. People can be beautiful because of who they ARE — not just how they look.`,
          ],
          image:        '/explorer-assets/frontier/l10-s3-kinds.png',
          imageCaption: `Many kinds of beauty — outside AND inside`,
          vocab: [
            { word: 'visual', definition: `Something you see with your eyes.`,                                                 audioPrompt: `Visual — something you see with your eyes.` },
            { word: 'inside beauty', definition: `Beauty that comes from kindness, courage, and how you treat people.`,        audioPrompt: `Inside beauty — beauty that comes from kindness, courage, and how you treat people.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Everyone Sees It Differently`,
          paragraphs: [
            `Here's the cool part — people see beauty in DIFFERENT THINGS. Someone might love rainy days. Someone else loves sunny days. Both are right!`,
            `That's why we say "beauty is in the eye of the beholder." Each person has their own beauty. That's what makes the world rich.`,
          ],
          image:        '/explorer-assets/frontier/l10-s4-different-eyes.png',
          imageCaption: `Different people see beauty in different things`,
          vocab: [
            { word: 'beholder', definition: `The person who is looking at something — the one seeing it.`,                     audioPrompt: `Beholder — the person who is looking at something, the one seeing it.` },
            { word: 'unique',   definition: `One of a kind — not like anyone or anything else.`,                                audioPrompt: `Unique — one of a kind, not like anyone or anything else.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Why Does Beauty Matter?`,
          paragraphs: [
            `Beauty matters because it WAKES YOU UP. It reminds you that the world is full of wonders. It makes life worth living.`,
            `Without beauty, days would feel grey. With beauty, even ordinary moments shine. Looking for beauty is a way to be HAPPIER.`,
          ],
          image:        '/explorer-assets/frontier/l10-s5-matters.png',
          imageCaption: `Beauty wakes us up to the world`,
          vocab: [
            { word: 'wake up',   definition: `To start paying attention, to really notice life.`,                              audioPrompt: `Wake up — to start paying attention, to really notice life.` },
            { word: 'ordinary',  definition: `Normal — regular — what you see every day.`,                                     audioPrompt: `Ordinary — normal, regular, what you see every day.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Make Beauty Too`,
          paragraphs: [
            `You're not just a beauty SPOTTER — you can be a beauty MAKER. Draw something. Sing. Plant flowers. Smile at someone who needs it. Make the world more beautiful.`,
            `Every kind person, every artist, every gardener, every singer — they're adding beauty to the world. So can YOU.`,
          ],
          image:        '/explorer-assets/frontier/l10-s6-make-beauty.png',
          imageCaption: `You can make beauty too — in your own way`,
          vocab: [
            { word: 'create', definition: `To make something new — bring something into being.`,                                audioPrompt: `Create — to make something new, bring something into being.` },
            { word: 'add',    definition: `To put more in — to give more.`,                                                    audioPrompt: `Add — to put more in, to give more.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Different things show different kinds of beauty. Match each one to its kind!`,
          guideText:     `Time to spot kinds of beauty, {name}! Tap each example, then tap what kind of beauty it shows.`,
          columnHeaders: [`The Beautiful Thing`, `Kind of Beauty`],
          items: [
            { image: 'l10-game-sunset.png',  label: `A bright pink and orange sunset over the ocean.`,                    correctMatch: 'visual',  objectPosition: 'center 50%', matchPhrase: `Visual beauty! Something amazing to SEE — that's visual beauty.` },
            { image: 'l10-game-song.png',    label: `A song that makes you feel happy and warm inside.`,                   correctMatch: 'music',   objectPosition: 'center 50%', matchPhrase: `Music beauty! Sound that moves you — that's music beauty.` },
            { image: 'l10-game-helping.png', label: `Someone helping an elderly person carry groceries.`,                  correctMatch: 'inside',  objectPosition: 'center 50%', matchPhrase: `Inside beauty! Kindness is beautiful — that's inside beauty.` },
            { image: 'l10-game-rainbow.png', label: `A rainbow appearing right after a rainstorm.`,                        correctMatch: 'visual',  objectPosition: 'center 50%', matchPhrase: `Visual beauty! Colors that take your breath away — visual beauty.` },
          ],
          buckets: [
            { id: 'visual', label: `👁️ Visual Beauty`,   color: '#FBBF24' },
            { id: 'music',  label: `🎵 Music Beauty`,    color: '#A78BFA' },
            { id: 'inside', label: `💛 Inside Beauty`,   color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Beauty Spotter badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is beauty?`,
              options: [`Only fancy paintings`, `When something makes you stop and notice`, `Anything expensive`, `Only sunsets`],
              correctIndex: 1 },
            { format: 'true-false', question: `Different people can see beauty in different things.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `What is "inside beauty"?`,
              options: [`Hiding`, `Beauty that comes from kindness and good character`, `A type of song`, `Indoor decorations`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `Beauty is in the eye of the ___.`,
              options: [`beholder`, `bee`, `bear`, `ball`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Why does beauty matter?`,
              options: [`It doesn't matter`, `It wakes us up and makes life shine`, `It's expensive`, `Only artists need it`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Can YOU make the world more beautiful?`,
              options: [`No, only artists can`, `Only adults can`, `Yes — through art, kindness, and what you create`, `Beauty makes itself`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! Now let's bring beauty into your real life. Beauty hunters find more — because they're LOOKING.`,
          familyAdventure: `Tonight, go on a "Beauty Hunt" with your family. Each person finds ONE beautiful thing — anywhere in your home or outside. Share what you found. You'll see your home with new eyes.`,
          creativePrompt:  `Make something BEAUTIFUL today. Draw a picture. Write a poem. Build something with blocks. Plant a seed. Even arrange flowers in a glass. Anything you create with care adds beauty to the world.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'beauty-spotter',
          badgeName: `Beauty Spotter`,
          message:   `Brilliant, {name}! You learned that beauty isn't just one thing — it's everywhere, in many forms. Visual, music, inside beauty. You learned that different people see beauty differently. And you learned that YOU can make beauty too. The world shines a little brighter because of Beauty Spotters like you. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l10_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L10] Loaded: "What Makes Something Beautiful?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l10-s1-beauty.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l10-s2-everywhere.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l10-s3-kinds.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l10-s4-different-eyes.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l10-s5-matters.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l10-s6-make-beauty.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L10] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L10] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l10_screens;
