// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 15
// "What Happens After Life Ends? Big Questions About Endings"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l15_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-15',
      title:     `What Happens After Life Ends? Big Questions About Endings`,
      duration:  12,
      xpReward:  50,
      badge:     'gentle-explorer',
      badgeName: `Gentle Explorer`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a BIG question that everyone wonders about — what happens when a life ends? It's one of the oldest questions humans ask. There are many beautiful ideas, and it's okay to wonder. I'll go gently with you today. Ready to be a Gentle Explorer?`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Everything Has Cycles`,
          paragraphs: [
            `Life has CYCLES. Day turns into night, then back to day. Spring becomes summer, fall, winter, then spring again.`,
            `Everything that LIVES is part of a cycle. Plants. Animals. People. Beginning, middle, and ending — that's the pattern of every life.`,
          ],
          image:        '/explorer-assets/frontier/l15-s1-cycles.png',
          imageCaption: `Life has cycles — beginnings, middles, and endings`,
          vocab: [
            { word: 'cycle',     definition: `A pattern that repeats — like seasons or day and night.`,                        audioPrompt: `Cycle — a pattern that repeats, like seasons or day and night.` },
            { word: 'beginning', definition: `The start of something — where it begins.`,                                       audioPrompt: `Beginning — the start of something, where it begins.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Endings Are Real`,
          paragraphs: [
            `Every living thing — plants, animals, people — eventually reaches an ending. Their body stops working.`,
            `This is hard to think about. It's normal to feel sad about it. Endings are real and they matter. The people we lose mean a lot to us — that's why it's hard.`,
          ],
          image:        '/explorer-assets/frontier/l15-s2-endings.png',
          imageCaption: `Endings are real — and it's okay to feel sad about them`,
          vocab: [
            { word: 'ending',  definition: `When something comes to its finish.`,                                              audioPrompt: `Ending — when something comes to its finish.` },
            { word: 'sad',     definition: `A feeling of being heavy-hearted, often because we miss someone or something.`,    audioPrompt: `Sad — a feeling of being heavy-hearted, often because we miss someone or something.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `What People Believe`,
          paragraphs: [
            `For thousands of years, people have had different beliefs about what happens after a life ends.`,
            `Some people believe in a beautiful place called Heaven. Some believe in being born again as a new life. Some believe people become stars or part of nature. Some believe we don't know — and that's okay.`,
          ],
          image:        '/explorer-assets/frontier/l15-s3-beliefs.png',
          imageCaption: `Many different beautiful ideas — across cultures and times`,
          vocab: [
            { word: 'belief',   definition: `Something a person thinks is true — what they hold in their heart.`,              audioPrompt: `Belief — something a person thinks is true, what they hold in their heart.` },
            { word: 'heaven',   definition: `A beautiful place that some people believe loved ones go after they pass.`,        audioPrompt: `Heaven — a beautiful place that some people believe loved ones go after they pass.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Memories Are Forever`,
          paragraphs: [
            `Here's one thing we know for sure — when someone we love passes, our MEMORIES of them stay with us forever.`,
            `The way they made you laugh. The songs they sang. The things they taught you. All that lives ON, inside the people who knew them.`,
          ],
          image:        '/explorer-assets/frontier/l15-s4-memories.png',
          imageCaption: `Memories carry love forward — always`,
          vocab: [
            { word: 'memory', definition: `A picture or feeling about something that happened — kept in your mind.`,           audioPrompt: `Memory — a picture or feeling about something that happened, kept in your mind.` },
            { word: 'love',   definition: `Deep care that doesn't go away — even after someone is gone.`,                       audioPrompt: `Love — deep care that doesn't go away, even after someone is gone.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Talking About It`,
          paragraphs: [
            `When something hard happens, the most important thing is to TALK about your feelings. With your family. A trusted grown-up. Even a pet.`,
            `Crying is okay. Sad feelings are okay. Talking helps. You don't have to figure it all out alone.`,
          ],
          image:        '/explorer-assets/frontier/l15-s5-talking.png',
          imageCaption: `Talking about hard feelings makes them easier to carry`,
          vocab: [
            { word: 'feelings',  definition: `Inside experiences like happy, sad, scared, or comforted.`,                      audioPrompt: `Feelings — inside experiences like happy, sad, scared, or comforted.` },
            { word: 'trusted',   definition: `Safe — someone who really listens and cares.`,                                    audioPrompt: `Trusted — safe, someone who really listens and cares.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Living Now`,
          paragraphs: [
            `Thinking about endings can actually help us LOVE the now. Hug your people. Tell them what they mean. Notice today.`,
            `Every moment matters because every moment is alive. That's the secret. You're alive right NOW — and that's wonderful.`,
          ],
          image:        '/explorer-assets/frontier/l15-s6-now.png',
          imageCaption: `Live now, love now, notice now`,
          vocab: [
            { word: 'now',      definition: `This very moment — the only time that's happening.`,                              audioPrompt: `Now — this very moment, the only time that's happening.` },
            { word: 'alive',    definition: `Living — breathing, growing, feeling, here.`,                                      audioPrompt: `Alive — living, breathing, growing, feeling, here.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Different cultures have beautiful different beliefs. Match each belief to its idea!`,
          guideText:     `Let's explore what people believe, {name}! Tap each belief, then match it to its description. All are kind and beautiful ideas.`,
          columnHeaders: [`The Belief`, `What It Means`],
          items: [
            { image: 'l15-game-heaven.png',   label: `Heaven`,                                                              correctMatch: 'place',    objectPosition: 'center 50%', matchPhrase: `A beautiful place! Many cultures believe loved ones go to a wonderful place.` },
            { image: 'l15-game-reborn.png',   label: `Being born again as something new`,                                   correctMatch: 'newlife',  objectPosition: 'center 50%', matchPhrase: `A new life! Some cultures believe life continues as a new being.` },
            { image: 'l15-game-stars.png',    label: `Becoming part of the stars or nature`,                                correctMatch: 'nature',   objectPosition: 'center 50%', matchPhrase: `Part of nature! Some believe loved ones become part of the world around us.` },
            { image: 'l15-game-memory.png',   label: `Living on in memories and hearts`,                                     correctMatch: 'memory',   objectPosition: 'center 50%', matchPhrase: `In memory! Everyone agrees — love stays alive in the people who remember.` },
          ],
          buckets: [
            { id: 'place',   label: `🏞️ A beautiful place`,    color: '#FBBF24' },
            { id: 'newlife', label: `🌱 A new life`,            color: '#34D399' },
            { id: 'nature',  label: `⭐ Part of nature`,        color: '#A78BFA' },
            { id: 'memory',  label: `💛 In memories`,           color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Gentle Explorer badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is a "cycle"?`,
              options: [`A type of bike only`, `A pattern that repeats — like seasons`, `A type of test`, `A new word for "circle"`],
              correctIndex: 1 },
            { format: 'true-false', question: `Different cultures have different beautiful ideas about what happens after life ends.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `What do memories do when someone we love passes?`,
              options: [`Disappear`, `Stay with us forever`, `Get sold`, `Turn into other things`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `When you have hard feelings, the best thing to do is ___ to a trusted person.`,
              options: [`talk`, `hide`, `run`, `forget`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Is it okay to feel sad about endings?`,
              options: [`No`, `Yes — completely normal and okay`, `Only on Mondays`, `Only adults can`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `What's a good way to honor someone you love?`,
              options: [`Forget them quickly`, `Hug them and tell them what they mean to you while they're here`, `Stay quiet`, `Be alone`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Brave work, {name}! These are deep questions. Now let's bring this thinking into your real life — gently.`,
          familyAdventure: `Tonight, tell ONE person in your family what they mean to you. A hug. A drawing. The words "I love you." That's what life is for — saying what matters while we're together.`,
          creativePrompt:  `Draw a "Memory Garden." In the middle, draw a flower or tree. Around it, draw or write things you LOVE about a special person in your life — alive now, or someone you've lost. Their kindness, their laugh, their silly jokes. That garden grows in your heart.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'gentle-explorer',
          badgeName: `Gentle Explorer`,
          message:   `You did something brave today, {name}. You thought about one of the deepest questions there is — gently, kindly. You learned that endings are real but love stays. That memories carry forward. That talking helps. You're a Gentle Explorer now. Orion is so proud of you.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l15_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L15] Loaded: "What Happens After Life Ends?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l15-s1-cycles.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l15-s2-endings.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l15-s3-beliefs.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l15-s4-memories.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l15-s5-talking.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l15-s6-now.png',      { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L15] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L15] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l15_screens;
