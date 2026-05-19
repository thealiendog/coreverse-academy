// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 8
// "What Is Friendship Really? The Heart of Being Together"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l08_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-08',
      title:     `What Is Friendship Really? The Heart of Being Together`,
      duration:  12,
      xpReward:  50,
      badge:     'true-friend',
      badgeName: `True Friend`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a BIG question that even adults still wonder about — WHAT MAKES A REAL FRIEND? Some people you call friends just for fun. Some friends are with you forever. What's the difference? Today we figure it out together. Time to become a True Friend!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `More Than Just Knowing`,
          paragraphs: [
            `Lots of people are nice. Lots of people say hi. But FRIENDSHIP is something deeper. A real friend SEES you — the real you.`,
            `It's not just who you sit with at lunch. It's who would notice if you were sad — even when you're smiling.`,
          ],
          image:        '/explorer-assets/frontier/l08-s1-real-friend.png',
          imageCaption: `A real friend sees the real you`,
          vocab: [
            { word: 'friendship', definition: `A deep, caring connection between people who really know each other.`,         audioPrompt: `Friendship — a deep, caring connection between people who really know each other.` },
            { word: 'see',        definition: `To really notice someone — pay attention to who they truly are.`,               audioPrompt: `See — to really notice someone, pay attention to who they truly are.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `What Aristotle Said`,
          paragraphs: [
            `2,300 years ago, a philosopher named ARISTOTLE thought hard about friendship. He said there are three kinds of friends.`,
            `Fun friends — people you play with. Helpful friends — people who help each other. And TRUE friends — people who care about each other deep down.`,
          ],
          image:        '/explorer-assets/frontier/l08-s2-aristotle.png',
          imageCaption: `Aristotle thought about friendship 2,300 years ago`,
          vocab: [
            { word: 'Aristotle', definition: `A famous philosopher from ancient Greece who taught about friendship and life.`, audioPrompt: `Aristotle — a famous philosopher from ancient Greece who taught about friendship and life.` },
            { word: 'kinds',     definition: `Different types or groups of something.`,                                        audioPrompt: `Kinds — different types or groups of something.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Fun Friends`,
          paragraphs: [
            `FUN FRIENDS are who you have a good time with. You play together. You laugh. You enjoy each other.`,
            `Fun friends are great! Not every friend has to be deep. Some friendships are just about JOY — and that's okay.`,
          ],
          image:        '/explorer-assets/frontier/l08-s3-fun-friends.png',
          imageCaption: `Fun friends — playing and laughing together`,
          vocab: [
            { word: 'enjoy', definition: `To have a good time with someone or something.`,                                     audioPrompt: `Enjoy — to have a good time with someone or something.` },
            { word: 'joy',   definition: `A bright, happy feeling that fills you up.`,                                          audioPrompt: `Joy — a bright, happy feeling that fills you up.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Helpful Friends`,
          paragraphs: [
            `HELPFUL FRIENDS are people who do things for each other. You share homework. You watch each other's pets. You're useful to each other.`,
            `Helpful friends matter a lot! But sometimes when the helping stops, the friendship stops too. That's okay — those friendships still help us learn.`,
          ],
          image:        '/explorer-assets/frontier/l08-s4-helpful.png',
          imageCaption: `Helpful friends — doing things for each other`,
          vocab: [
            { word: 'helpful', definition: `Useful — doing things that make someone's life easier or better.`,                  audioPrompt: `Helpful — useful, doing things that make someone's life easier or better.` },
            { word: 'share',   definition: `To divide something so other people can have some too.`,                            audioPrompt: `Share — to divide something so other people can have some too.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `True Friends`,
          paragraphs: [
            `TRUE FRIENDS are the rare and precious ones. They love who YOU are — not what you give or what you do. They stay when things get hard.`,
            `Aristotle said true friendship is when two people genuinely WANT THE BEST for each other. They're not in it for fun or favors — they care about each other's hearts.`,
          ],
          image:        '/explorer-assets/frontier/l08-s5-true-friends.png',
          imageCaption: `True friends — they want the best for each other`,
          vocab: [
            { word: 'true',  definition: `Real — not fake, not just for show.`,                                                audioPrompt: `True — real, not fake, not just for show.` },
            { word: 'care',  definition: `When someone matters to you — when you want good things for them.`,                  audioPrompt: `Care — when someone matters to you, when you want good things for them.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Being a Good Friend`,
          paragraphs: [
            `Want true friends? BE one first. Listen when they talk. Be honest. Be kind. Remember what they care about. Show up when it counts.`,
            `True friendship isn't something you find by chance. It's something you BUILD — one kind act at a time. The best friendships take time and care.`,
          ],
          image:        '/explorer-assets/frontier/l08-s6-being-friend.png',
          imageCaption: `Building friendship — one kind act at a time`,
          vocab: [
            { word: 'build', definition: `To slowly make something strong, piece by piece.`,                                   audioPrompt: `Build — to slowly make something strong, piece by piece.` },
            { word: 'show up', definition: `To be there when someone needs you — really be present.`,                           audioPrompt: `Show up — to be there when someone needs you, really be present.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Aristotle described three kinds of friends. Match each friend example to the right kind!`,
          guideText:     `Let's spot Aristotle's three kinds of friends, {name}! Tap a friendship, then tap what kind of friend it shows.`,
          columnHeaders: [`The Friendship`, `Kind of Friend`],
          items: [
            { image: 'l08-game-soccer.png',  label: `Two kids who LOVE playing soccer together at recess.`,                  correctMatch: 'fun',     objectPosition: 'center 50%', matchPhrase: `Fun Friends! They have a great time together — and that's wonderful.` },
            { image: 'l08-game-homework.png', label: `Two classmates who help each other with homework every week.`,         correctMatch: 'helpful', objectPosition: 'center 50%', matchPhrase: `Helpful Friends! They make each other's lives easier — that's valuable.` },
            { image: 'l08-game-secret.png',  label: `Two friends who know each other's deepest fears AND best dreams.`,      correctMatch: 'true',    objectPosition: 'center 50%', matchPhrase: `True Friends! They know each other's hearts — the rare and precious kind.` },
            { image: 'l08-game-sad-day.png', label: `A friend who sits with you when you're sad — for no reason but love.`,  correctMatch: 'true',    objectPosition: 'center 50%', matchPhrase: `True Friends! They show up when it counts — that's true friendship.` },
          ],
          buckets: [
            { id: 'fun',     label: `🎉 Fun Friend`,      color: '#FBBF24' },
            { id: 'helpful', label: `🤝 Helpful Friend`,  color: '#34D399' },
            { id: 'true',    label: `💛 True Friend`,     color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your True Friend badge!`,
          questions: [
            { format: 'multiple-choice', question: `According to Aristotle, how many kinds of friends are there?`,
              options: [`One`, `Three`, `Ten`, `A hundred`],
              correctIndex: 1 },
            { format: 'true-false', question: `Not every friend has to be a "true" friend — fun friends matter too.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Who was Aristotle?`,
              options: [`A modern singer`, `An ancient philosopher who studied friendship`, `A planet`, `A type of food`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `True friends want the ___ for each other.`,
              options: [`best`, `worst`, `loudest`, `shortest`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `What's the difference between a fun friend and a true friend?`,
              options: [`Nothing`, `True friends know your heart, fun friends play with you`, `Fun friends are taller`, `True friends are louder`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `How do you GET true friends?`,
              options: [`Wait for them`, `Buy them gifts`, `Be a true friend yourself first`, `Avoid people`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! Now let's bring friendship into your real life. Friendship gets stronger when you USE what you learn.`,
          familyAdventure: `At dinner, ask each family member: "Who's a true friend in your life and why?" Listen to their stories. You'll learn about the people who matter to your family — and what makes a real friend.`,
          creativePrompt:  `Make a "Friend Map." Draw yourself in the middle. Around you, draw your fun friends, helpful friends, and true friends. They can be in more than one circle! Then write one kind thing you can do for each of them this week.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'true-friend',
          badgeName: `True Friend`,
          message:   `Brilliant, {name}! You learned the three kinds of friends — fun, helpful, and true. You learned that true friends WANT THE BEST for each other. And you learned the secret: be the friend you want to have. The world has more love in it because of friends like you. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l08_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L08] Loaded: "What Is Friendship Really?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l08-s1-real-friend.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l08-s2-aristotle.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l08-s3-fun-friends.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l08-s4-helpful.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l08-s5-true-friends.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l08-s6-being-friend.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L08] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L08] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l08_screens;
