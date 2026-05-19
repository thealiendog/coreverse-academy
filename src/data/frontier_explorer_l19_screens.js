// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 19
// "What Is Love? The Greatest Force"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l19_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-19',
      title:     `What Is Love? The Greatest Force`,
      duration:  12,
      xpReward:  50,
      badge:     'love-knower',
      badgeName: `Love Knower`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a HUGE word — LOVE. You can't see it. You can't hold it. But it might be the strongest force in the whole universe. Songs are written about it. Wars are stopped by it. Today we figure out what love really is. Time to become a Love Knower!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Love Is Everywhere`,
          paragraphs: [
            `Love is one of the most common feelings in the world. You love your family. You love your friends. You love your pet. You love your favorite food.`,
            `Love comes in so many flavors. Big love, small love, soft love, fierce love. All of it is love.`,
          ],
          image:        '/explorer-assets/frontier/l19-s1-everywhere.png',
          imageCaption: `Love — everywhere, in so many flavors`,
          vocab: [
            { word: 'love',    definition: `Deep care for someone or something — wanting good for them.`,                      audioPrompt: `Love — deep care for someone or something, wanting good for them.` },
            { word: 'feeling', definition: `An inside experience like happy, sad, excited, or loving.`,                        audioPrompt: `Feeling — an inside experience like happy, sad, excited, or loving.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Family Love`,
          paragraphs: [
            `FAMILY LOVE is one of the first loves you ever feel. Parents, siblings, grandparents, cousins. People who've known you forever.`,
            `Family love is strong — like roots of a tree. It holds you up when you need it. It usually lasts your whole life.`,
          ],
          image:        '/explorer-assets/frontier/l19-s2-family.png',
          imageCaption: `Family love — strong as tree roots`,
          vocab: [
            { word: 'family',  definition: `The people who care for you and love you most — by birth or by choice.`,           audioPrompt: `Family — the people who care for you and love you most, by birth or by choice.` },
            { word: 'roots',   definition: `The strong parts deep underground that hold a tree up.`,                           audioPrompt: `Roots — the strong parts deep underground that hold a tree up.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Friend Love`,
          paragraphs: [
            `FRIEND LOVE is special too. You CHOOSE your friends. They choose you back. That's a kind of magic — being picked because you're YOU.`,
            `True friends love you when you're funny AND when you're sad. They stick with you. They make you feel seen.`,
          ],
          image:        '/explorer-assets/frontier/l19-s3-friends.png',
          imageCaption: `Friend love — chosen, magical, and strong`,
          vocab: [
            { word: 'choose', definition: `To pick something or someone on purpose.`,                                          audioPrompt: `Choose — to pick something or someone on purpose.` },
            { word: 'seen',   definition: `When someone really notices and appreciates you for who you are.`,                  audioPrompt: `Seen — when someone really notices and appreciates you for who you are.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Loving Yourself`,
          paragraphs: [
            `Here's a love that's just as important — SELF-LOVE. Loving yourself means being KIND to you. Telling yourself "I did my best." Forgiving your mistakes.`,
            `It's NOT being silly or thinking you're better than others. It's just treating yourself the way you'd treat a good friend.`,
          ],
          image:        '/explorer-assets/frontier/l19-s4-self.png',
          imageCaption: `Self-love — being kind to yourself`,
          vocab: [
            { word: 'self-love', definition: `Being kind and gentle to YOU — treating yourself well.`,                         audioPrompt: `Self-love — being kind and gentle to YOU, treating yourself well.` },
            { word: 'forgive',   definition: `To let go of being mad about a mistake — your own or someone else's.`,           audioPrompt: `Forgive — to let go of being mad about a mistake, your own or someone else's.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Love in Action`,
          paragraphs: [
            `Love isn't just a feeling — it's something you DO. Hugs. Help. Listening. Sharing. Showing up when someone needs you.`,
            `You can FEEL love and not show it. But love grows BIGGER when you show it. Love is a verb — an action word.`,
          ],
          image:        '/explorer-assets/frontier/l19-s5-action.png',
          imageCaption: `Love is an action — a verb`,
          vocab: [
            { word: 'action', definition: `Something you DO — not just think or feel.`,                                       audioPrompt: `Action — something you do, not just think or feel.` },
            { word: 'verb',   definition: `An action word — a word that means doing something.`,                                audioPrompt: `Verb — an action word, a word that means doing something.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Love Is the Answer`,
          paragraphs: [
            `Philosophers and wise people across history have all noticed something — love seems to be the BIGGEST thing. Bigger than money. Bigger than fame. Bigger than fear.`,
            `Love is what makes life worth living. It heals what's broken. It connects us all. Loving and being loved — that might be the whole point of being alive.`,
          ],
          image:        '/explorer-assets/frontier/l19-s6-answer.png',
          imageCaption: `Love — maybe the answer to all the questions`,
          vocab: [
            { word: 'biggest', definition: `The most important — what matters most.`,                                          audioPrompt: `Biggest — the most important, what matters most.` },
            { word: 'connect', definition: `To bring together — to join hearts or minds.`,                                      audioPrompt: `Connect — to bring together, to join hearts or minds.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Different kinds of love show up in different ways. Match each situation to its kind!`,
          guideText:     `Time to spot kinds of love, {name}! Tap each example, then tap which kind of love it is.`,
          columnHeaders: [`The Moment`, `Kind of Love`],
          items: [
            { image: 'l19-game-hug.png',     label: `Hugging your grandma after she made you cookies.`,                     correctMatch: 'family',  objectPosition: 'center 50%', matchPhrase: `Family love! Roots love — deep and steady, lasting all your life.` },
            { image: 'l19-game-bestfriend.png', label: `Laughing with your best friend on the playground.`,                correctMatch: 'friend',  objectPosition: 'center 50%', matchPhrase: `Friend love! The magic of being chosen. Chosen love is special.` },
            { image: 'l19-game-mirror.png',  label: `Telling yourself "I did my best!" after a hard test.`,                  correctMatch: 'self',    objectPosition: 'center 50%', matchPhrase: `Self-love! Being kind to YOU is just as important as being kind to others.` },
            { image: 'l19-game-action.png',  label: `Helping someone carry heavy bags without being asked.`,                 correctMatch: 'action',  objectPosition: 'center 50%', matchPhrase: `Love in action! Love isn't just felt — it's DONE. Beautiful.` },
          ],
          buckets: [
            { id: 'family', label: `👨‍👩‍👧 Family Love`,  color: '#FBBF24' },
            { id: 'friend', label: `🤝 Friend Love`,    color: '#34D399' },
            { id: 'self',   label: `💛 Self-Love`,      color: '#F472B6' },
            { id: 'action', label: `✨ Love in Action`, color: '#A78BFA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Love Knower badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is love?`,
              options: [`A type of food`, `Deep care for someone — wanting good for them`, `A color`, `A toy`],
              correctIndex: 1 },
            { format: 'true-false', question: `Love is both a feeling AND an action.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `What is self-love?`,
              options: [`Being silly`, `Being kind to yourself`, `Liking only yourself`, `Eating cake`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `Friend love is special because friends ___ you.`,
              options: [`choose`, `forget`, `ignore`, `avoid`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `What makes love grow bigger?`,
              options: [`Hiding it`, `Showing it through actions`, `Forgetting it`, `Buying things`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `According to wise people across history, what's the BIGGEST thing?`,
              options: [`Money`, `Fame`, `Love`, `Fear`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! Now let's bring love into your real life. Showing love is what makes love grow.`,
          familyAdventure: `Tonight, tell THREE people you love them in a real way. Could be saying it. Could be a hug. Could be writing a small note. Pick three — and make their day brighter.`,
          creativePrompt:  `Make a "Love Map" of your life. Draw yourself in the middle. Around you, draw the people, pets, and things you love. Add little hearts. Then add ONE thing you can do this week to show that love.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'love-knower',
          badgeName: `Love Knower`,
          message:   `Beautiful work, {name}! You learned that love is everywhere — family love, friend love, self-love, love in action. You learned love is both felt AND done. And you learned it might just be the biggest thing in the universe. You're a Love Knower now. The world has more love because of you. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l19_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L19] Loaded: "What Is Love?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l19-s1-everywhere.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l19-s2-family.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l19-s3-friends.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l19-s4-self.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l19-s5-action.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l19-s6-answer.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L19] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L19] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l19_screens;
