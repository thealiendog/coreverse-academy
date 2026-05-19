// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 14
// "What Is Happiness? The Secret Inside"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l14_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-14',
      title:     `What Is Happiness? The Secret Inside`,
      duration:  12,
      xpReward:  50,
      badge:     'joy-finder',
      badgeName: `Joy Finder`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a question philosophers have asked FOREVER — what is HAPPINESS? Is it getting cool stuff? Is it ice cream? Is it being loved? Today we hunt for the real meaning of happiness. Time to become a Joy Finder!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Happiness?`,
          paragraphs: [
            `HAPPINESS is when you feel really GOOD inside. Light. Warm. Glowing. Like everything is okay.`,
            `Sometimes happiness is loud — like laughing with friends. Sometimes it's quiet — like reading a great book on a rainy day.`,
          ],
          image:        '/explorer-assets/frontier/l14-s1-happiness.png',
          imageCaption: `Happiness — when you feel really good inside`,
          vocab: [
            { word: 'happiness', definition: `A really good feeling inside — light, warm, joyful.`,                            audioPrompt: `Happiness — a really good feeling inside, light, warm, joyful.` },
            { word: 'joy',       definition: `A bright burst of happiness — a quick wave of feeling great.`,                    audioPrompt: `Joy — a bright burst of happiness, a quick wave of feeling great.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Quick Happy vs Deep Happy`,
          paragraphs: [
            `Philosophers say there are TWO kinds of happy. QUICK HAPPY — like eating candy or buying a new toy. Fun, but it doesn't last.`,
            `DEEP HAPPY is different. It comes from things like love, learning, helping others. It lasts way longer — sometimes a whole lifetime.`,
          ],
          image:        '/explorer-assets/frontier/l14-s2-two-kinds.png',
          imageCaption: `Two kinds of happy — quick and deep`,
          vocab: [
            { word: 'last', definition: `To keep going — to stay around for a long time.`,                                     audioPrompt: `Last — to keep going, to stay around for a long time.` },
            { word: 'deep', definition: `Going far down — not just on the surface, but inside.`,                                audioPrompt: `Deep — going far down, not just on the surface, but inside.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Stuff Trick`,
          paragraphs: [
            `Lots of people think "if I just get more STUFF, I'll be happy." More toys! More candy! More things!`,
            `But here's the truth — stuff makes you happy for a little while. Then you want NEW stuff. It's a trick. Stuff doesn't fill the deep happy.`,
          ],
          image:        '/explorer-assets/frontier/l14-s3-stuff.png',
          imageCaption: `Stuff brings quick happy — but not deep happy`,
          vocab: [
            { word: 'stuff', definition: `Things you can buy or own — toys, clothes, gadgets.`,                                audioPrompt: `Stuff — things you can buy or own, toys, clothes, gadgets.` },
            { word: 'trick', definition: `Something that seems true but really isn't — fooling you.`,                          audioPrompt: `Trick — something that seems true but really isn't, fooling you.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Where Real Happy Comes From`,
          paragraphs: [
            `Studies show deep happiness comes from these things: LOVE (friends, family, pets). LEARNING (using your brain in new ways). HELPING (doing good for others).`,
            `Also: gratitude (noticing what you have). Movement (running, dancing, playing). Time in nature. Quiet rest.`,
          ],
          image:        '/explorer-assets/frontier/l14-s4-real-happy.png',
          imageCaption: `Real happy comes from love, learning, and helping`,
          vocab: [
            { word: 'gratitude', definition: `Feeling thankful for the good things you have.`,                                 audioPrompt: `Gratitude — feeling thankful for the good things you have.` },
            { word: 'helping',   definition: `Doing something good for someone else.`,                                          audioPrompt: `Helping — doing something good for someone else.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Sad Is Okay Too`,
          paragraphs: [
            `Here's a secret — you don't have to be happy ALL the time. Nobody is. Feeling sad, mad, or scared sometimes is normal and OKAY.`,
            `Trying to be happy every second is exhausting. Real happiness includes feeling all your feelings — not pretending only happy is allowed.`,
          ],
          image:        '/explorer-assets/frontier/l14-s5-sad-ok.png',
          imageCaption: `All feelings are okay — not just happy ones`,
          vocab: [
            { word: 'feelings', definition: `Inside experiences like happy, sad, mad, scared, excited.`,                       audioPrompt: `Feelings — inside experiences like happy, sad, mad, scared, excited.` },
            { word: 'normal',   definition: `Common — what most people experience.`,                                            audioPrompt: `Normal — common, what most people experience.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Happy On Purpose`,
          paragraphs: [
            `Here's the most amazing thing — happiness is a SKILL you can practice. Like reading or riding a bike. You can get better at it!`,
            `Notice good things. Be kind. Hug your people. Try new stuff. Be grateful. Each one builds your happy muscles.`,
          ],
          image:        '/explorer-assets/frontier/l14-s6-practice.png',
          imageCaption: `Happiness is a skill — practice it`,
          vocab: [
            { word: 'practice', definition: `Doing something over and over to get better at it.`,                              audioPrompt: `Practice — doing something over and over to get better at it.` },
            { word: 'skill',    definition: `Something you can learn to do well with practice.`,                                audioPrompt: `Skill — something you can learn to do well with practice.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some things give you QUICK happy. Others give DEEP happy. Sort them!`,
          guideText:     `Time to spot the two kinds of happy, {name}! Tap each thing, then decide — is it quick happy or deep happy?`,
          columnHeaders: [`The Thing`, `Quick or Deep Happy?`],
          items: [
            { image: 'l14-game-candy.png',  label: `Eating a piece of candy.`,                                            correctMatch: 'quick', objectPosition: 'center 50%', matchPhrase: `Quick happy! It's sweet for a second — then it's gone. Not bad — just doesn't last.` },
            { image: 'l14-game-hug.png',    label: `Hugging your grandparent who loves you deeply.`,                      correctMatch: 'deep',  objectPosition: 'center 50%', matchPhrase: `Deep happy! Real love. That warm feeling stays with you for hours, even days.` },
            { image: 'l14-game-toy.png',    label: `Getting a brand new toy you've wanted.`,                              correctMatch: 'quick', objectPosition: 'center 50%', matchPhrase: `Quick happy! Fun for a while, but then you'll want a new toy. It fades.` },
            { image: 'l14-game-help.png',   label: `Helping someone who really needed it.`,                                correctMatch: 'deep',  objectPosition: 'center 50%', matchPhrase: `Deep happy! Kindness gives back. You'll remember helping for a long time.` },
          ],
          buckets: [
            { id: 'quick', label: `⚡ Quick Happy`, color: '#FBBF24' },
            { id: 'deep',  label: `💛 Deep Happy`,  color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Joy Finder badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is happiness?`,
              options: [`A new toy`, `A really good feeling inside`, `A type of food`, `Loud noises`],
              correctIndex: 1 },
            { format: 'true-false', question: `Stuff brings quick happy, but not deep happy.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Where does DEEP happy come from?`,
              options: [`More stuff`, `Love, learning, helping others`, `Yelling`, `Being alone forever`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `Happiness is a ___ you can practice.`,
              options: [`skill`, `bird`, `secret`, `weather`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Is it okay to feel sad sometimes?`,
              options: [`No, never`, `Yes — all feelings are normal`, `Only on weekends`, `Only adults can feel sad`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Which adds to deep happiness?`,
              options: [`Buying everything you want`, `Being grateful and kind`, `Watching TV all day`, `Avoiding people`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! Now let's bring happiness into your real life. The more you notice it, the more it grows.`,
          familyAdventure: `Tonight, do a "Gratitude Round" with your family. Each person shares ONE thing they're grateful for today. Anything counts — small or big. This builds deep happy.`,
          creativePrompt:  `Make a "Joy Jar." Find a jar or box. Each day this week, write or draw one moment that made you happy on a small paper. Put it in. By Sunday, you'll have a treasure box of happy moments to look back on.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'joy-finder',
          badgeName: `Joy Finder`,
          message:   `Brilliant, {name}! You learned the difference between quick happy and deep happy. You learned where real happiness comes from — love, helping, gratitude. And you learned that happiness is a SKILL you can practice. You're a Joy Finder now. The world has more joy because of you. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l14_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L14] Loaded: "What Is Happiness?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l14-s1-happiness.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l14-s2-two-kinds.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l14-s3-stuff.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l14-s4-real-happy.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l14-s5-sad-ok.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l14-s6-practice.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L14] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L14] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l14_screens;
