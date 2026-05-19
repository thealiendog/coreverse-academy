// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 17
// "What Is a Soul? The Real You Inside"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l17_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-17',
      title:     `What Is a Soul? The Real You Inside`,
      duration:  12,
      xpReward:  50,
      badge:     'soul-seer',
      badgeName: `Soul Seer`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: one of the deepest questions ever asked — WHAT IS A SOUL? Is it the part of you that makes you YOU? The part that feels and loves? Different cultures call it different names. Today we explore the real you inside. Time to become a Soul Seer!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The "You" Inside You`,
          paragraphs: [
            `Think about it — your body changes all the time. You grow taller. Your hair gets longer. Cells in your body replace themselves.`,
            `But there's something INSIDE you that stays YOU. The way you laugh. What you love. Your kindness. That's the part many people call your SOUL.`,
          ],
          image:        '/explorer-assets/frontier/l17-s1-you-inside.png',
          imageCaption: `The "you" inside you — that stays YOU as you grow`,
          vocab: [
            { word: 'soul',  definition: `The deepest part of you — what makes you uniquely YOU.`,                              audioPrompt: `Soul — the deepest part of you, what makes you uniquely you.` },
            { word: 'inside', definition: `The part within — not the outside.`,                                                 audioPrompt: `Inside — the part within, not the outside.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Many Cultures, Many Names`,
          paragraphs: [
            `Different cultures around the world have different words for the soul. Some call it spirit. Some say "essence." Some say "atman" or "ruh" or "ba."`,
            `They all point to the same idea — there's something deep inside you that's MORE than just your body.`,
          ],
          image:        '/explorer-assets/frontier/l17-s2-names.png',
          imageCaption: `Many cultures, many names for the same idea`,
          vocab: [
            { word: 'spirit', definition: `Another word for soul — the deep, alive part of a person.`,                          audioPrompt: `Spirit — another word for soul, the deep, alive part of a person.` },
            { word: 'culture', definition: `The way a group of people live — their language, beliefs, and traditions.`,         audioPrompt: `Culture — the way a group of people live, their language, beliefs, and traditions.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `What Philosophers Say`,
          paragraphs: [
            `Some philosophers — like Plato — believed the soul is REAL. They said it lives inside the body and is the "real you."`,
            `Other thinkers say the soul might not be a "thing" — it might be the WHOLE of who you are. Your thoughts, your love, your stories. Both ideas are interesting!`,
          ],
          image:        '/explorer-assets/frontier/l17-s3-philosophers.png',
          imageCaption: `Philosophers wonder — is the soul a thing or a wholeness?`,
          vocab: [
            { word: 'real',     definition: `Something that actually exists — not made up.`,                                   audioPrompt: `Real — something that actually exists, not made up.` },
            { word: 'wholeness', definition: `Everything together — every part of who someone is.`,                            audioPrompt: `Wholeness — everything together, every part of who someone is.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Where Is It?`,
          paragraphs: [
            `Where does the soul live? You can't find it in a body scan. It's not in your stomach or brain or heart — at least not in a way doctors can see.`,
            `Some say it's everywhere in you. Some say it shines THROUGH you. Some say it's not in one place — it just IS, like a song that fills a room.`,
          ],
          image:        '/explorer-assets/frontier/l17-s4-where.png',
          imageCaption: `The soul — not in one place, but everywhere through you`,
          vocab: [
            { word: 'shine',  definition: `To give off light — to glow.`,                                                       audioPrompt: `Shine — to give off light, to glow.` },
            { word: 'through', definition: `Going across or in all of something — like wind through trees.`,                   audioPrompt: `Through — going across or in all of something, like wind through trees.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Your Soul Is YOURS`,
          paragraphs: [
            `Whatever the soul is — yours is YOURS. No one else has the exact mix of love, dreams, kindness, and quirks that you do. You're one-of-a-kind.`,
            `Your soul is what makes you DIFFERENT from every other person who has ever lived or will ever live. That's pretty amazing.`,
          ],
          image:        '/explorer-assets/frontier/l17-s5-yours.png',
          imageCaption: `Your soul is uniquely, beautifully yours`,
          vocab: [
            { word: 'unique',     definition: `One of a kind — not like anyone or anything else.`,                             audioPrompt: `Unique — one of a kind, not like anyone or anything else.` },
            { word: 'different',  definition: `Not the same — having your own way.`,                                           audioPrompt: `Different — not the same, having your own way.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Taking Care of Your Soul`,
          paragraphs: [
            `Just like your body needs healthy food, your soul needs CARE too. Soul food is: love, music, nature, kindness, quiet time, laughter, art.`,
            `When you spend time on these things, you feel more "you." When you ignore them — you feel a bit lost. Listen to your soul. It's wise.`,
          ],
          image:        '/explorer-assets/frontier/l17-s6-care.png',
          imageCaption: `Take care of your soul — feed it good things`,
          vocab: [
            { word: 'care',  definition: `To pay attention to and take good care of someone or something.`,                    audioPrompt: `Care — to pay attention to and take good care of someone or something.` },
            { word: 'listen', definition: `To pay attention with your ears or with your heart.`,                                audioPrompt: `Listen — to pay attention with your ears or with your heart.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some things feed your SOUL. Others just feed your body or wallet. Sort them!`,
          guideText:     `Time to think about soul food, {name}! Tap each activity, then decide — does it feed your soul or just something else?`,
          columnHeaders: [`The Activity`, `What Does It Feed?`],
          items: [
            { image: 'l17-game-music.png',  label: `Listening to music that makes you feel something.`,                   correctMatch: 'soul', objectPosition: 'center 50%', matchPhrase: `Feeds your soul! Music speaks to the deep part of you.` },
            { image: 'l17-game-pizza.png',  label: `Eating a slice of pizza when you're hungry.`,                          correctMatch: 'body', objectPosition: 'center 50%', matchPhrase: `Feeds your body! Food fills your tummy — important too, but different from soul food.` },
            { image: 'l17-game-helping.png', label: `Helping someone who really needed your help.`,                       correctMatch: 'soul', objectPosition: 'center 50%', matchPhrase: `Feeds your soul! Kindness fills you up from the inside.` },
            { image: 'l17-game-nature.png', label: `Sitting quietly outside watching the trees.`,                          correctMatch: 'soul', objectPosition: 'center 50%', matchPhrase: `Feeds your soul! Nature is one of the BEST soul foods there is.` },
          ],
          buckets: [
            { id: 'soul', label: `✨ Feeds Your Soul`, color: '#A78BFA' },
            { id: 'body', label: `🍎 Feeds Your Body`, color: '#FBBF24' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Soul Seer badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is a soul?`,
              options: [`A type of fish only`, `The deepest part of you that makes you YOU`, `A toy`, `Your shoes`],
              correctIndex: 1 },
            { format: 'true-false', question: `Different cultures have different names for the soul, but the idea is similar.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Which feeds your soul?`,
              options: [`Music, kindness, nature`, `Only food`, `Buying things`, `Yelling`],
              correctIndex: 0 },
            { format: 'fill-blank', question: `Your soul is ___ — one-of-a-kind.`,
              options: [`unique`, `boring`, `loud`, `tiny`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Who was Plato (mentioned earlier)?`,
              options: [`A modern singer`, `An ancient philosopher who taught about the soul`, `A type of food`, `A planet`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `How do you take care of your soul?`,
              options: [`You can't`, `Through love, music, nature, kindness, art, rest`, `By staying inside always`, `By being mean`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! Now let's bring soul-thinking into your real life. Your soul is always with you — listen to what it loves.`,
          familyAdventure: `Tonight, ask your family: "What's something that makes you feel really alive — like, your whole heart sings?" Listen to each answer. That's a peek at each person's soul.`,
          creativePrompt:  `Draw a picture of YOUR SOUL. There's no right way! Use shapes, colors, light, animals — anything that feels like the deep YOU. Add words around it like "kind," "curious," "funny" — whatever YOU are.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'soul-seer',
          badgeName: `Soul Seer`,
          message:   `Brilliant, {name}! You explored one of the deepest mysteries — what is the real YOU inside? You learned that many cultures believe in a soul or spirit. You learned to feed yours with love, music, nature, kindness. You're a Soul Seer now. Take care of that bright soul of yours. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l17_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L17] Loaded: "What Is a Soul?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l17-s1-you-inside.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l17-s2-names.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l17-s3-philosophers.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l17-s4-where.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l17-s5-yours.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l17-s6-care.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L17] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L17] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l17_screens;
