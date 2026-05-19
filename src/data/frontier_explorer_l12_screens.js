// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 12
// "Future Worlds: What Should Earth Look Like?"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l12_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-12',
      title:     `Future Worlds: What Should Earth Look Like?`,
      duration:  12,
      xpReward:  50,
      badge:     'future-dreamer',
      badgeName: `Future Dreamer`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today we IMAGINE. Imagine Earth 50 years from now — when you're a grown-up. What COULD it look like? What SHOULD it look like? Today we dream big about the future. Time to become a Future Dreamer!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Future Is Coming`,
          paragraphs: [
            `The FUTURE is the time that hasn't happened yet. In one year. In ten years. In fifty years. The future is on its way.`,
            `Here's the secret — the future doesn't just HAPPEN. People CREATE it. The choices we make now decide what the future looks like.`,
          ],
          image:        '/explorer-assets/frontier/l12-s1-future.png',
          imageCaption: `The future — coming soon, and we shape it`,
          vocab: [
            { word: 'future',  definition: `Time that hasn't happened yet — what's coming.`,                                    audioPrompt: `Future — time that hasn't happened yet, what's coming.` },
            { word: 'choice',  definition: `When you decide between two or more things you could do.`,                          audioPrompt: `Choice — when you decide between two or more things you could do.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Imagine Bravely`,
          paragraphs: [
            `Philosophers and dreamers IMAGINE the future. What if cars flew? What if cities had food gardens on every roof? What if no one was hungry?`,
            `Imagining isn't just for fun. It's how every cool thing got invented. Someone IMAGINED it first.`,
          ],
          image:        '/explorer-assets/frontier/l12-s2-imagine.png',
          imageCaption: `Imagining — how the future gets invented`,
          vocab: [
            { word: 'imagine', definition: `To picture something in your mind that isn't real yet — to dream it up.`,           audioPrompt: `Imagine — to picture something in your mind that isn't real yet, to dream it up.` },
            { word: 'invent',  definition: `To make something brand new that didn't exist before.`,                            audioPrompt: `Invent — to make something brand new that didn't exist before.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Future Tech`,
          paragraphs: [
            `In the future, technology might do AMAZING things. Robots that help people who can't move easily. Trees that clean polluted air faster. Cars that run on sunlight instead of gas.`,
            `These aren't impossible — scientists are working on them right now!`,
          ],
          image:        '/explorer-assets/frontier/l12-s3-tech.png',
          imageCaption: `Future technology — solving big problems`,
          vocab: [
            { word: 'technology', definition: `Tools and machines people invent to do new things.`,                            audioPrompt: `Technology — tools and machines people invent to do new things.` },
            { word: 'solve',      definition: `To figure out how to fix a problem.`,                                            audioPrompt: `Solve — to figure out how to fix a problem.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Future Kindness`,
          paragraphs: [
            `But the future isn't just about cool tech. It's also about HOW we treat each other.`,
            `Imagine a future where no kid is bullied. Where everyone has food. Where neighbors know each other. That kind of future starts with kindness — and YOU can plant those seeds today.`,
          ],
          image:        '/explorer-assets/frontier/l12-s4-kindness.png',
          imageCaption: `A future built on kindness — we start that today`,
          vocab: [
            { word: 'kindness', definition: `Treating others with care, gentleness, and warmth.`,                              audioPrompt: `Kindness — treating others with care, gentleness, and warmth.` },
            { word: 'neighbor', definition: `Someone who lives near you.`,                                                     audioPrompt: `Neighbor — someone who lives near you.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `What COULD Go Wrong?`,
          paragraphs: [
            `Philosophers think about hard things too. What if the future gets WORSE? Hotter? With more pollution? Less kind?`,
            `That's not to scare you. It's to remind us — the future depends on choices we make NOW. The better choices today, the better the future for everyone.`,
          ],
          image:        '/explorer-assets/frontier/l12-s5-careful.png',
          imageCaption: `Be careful — choices now shape the future`,
          vocab: [
            { word: 'worse',    definition: `Less good — when something gets harder, sadder, or more dangerous.`,              audioPrompt: `Worse — less good, when something gets harder, sadder, or more dangerous.` },
            { word: 'depend',   definition: `When something rests on something else — what comes next is based on it.`,        audioPrompt: `Depend — when something rests on something else, what comes next is based on it.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `You Are the Future`,
          paragraphs: [
            `Here's the biggest truth — YOU are the future. The kids alive today will grow up to be the scientists, leaders, artists, and parents of tomorrow.`,
            `The world you imagine? You'll help build it. Dream big. Be kind. Keep wondering. The future is in your hands.`,
          ],
          image:        '/explorer-assets/frontier/l12-s6-you.png',
          imageCaption: `You are the future — what will you build?`,
          vocab: [
            { word: 'build', definition: `To slowly make something strong, piece by piece.`,                                   audioPrompt: `Build — to slowly make something strong, piece by piece.` },
            { word: 'dream', definition: `To imagine something amazing you want to make real one day.`,                        audioPrompt: `Dream — to imagine something amazing you want to make real one day.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some future ideas would make the world BETTER. Others would make it WORSE. Sort them!`,
          guideText:     `Time to dream and decide, {name}! Tap each future idea, then choose — would it make Earth better or worse?`,
          columnHeaders: [`The Future Idea`, `Better or Worse?`],
          items: [
            { image: 'l12-game-clean-air.png', label: `Cars that clean the air instead of polluting it.`,                    correctMatch: 'better', objectPosition: 'center 50%', matchPhrase: `Better Future! Imagine cars helping Earth instead of hurting it — beautiful idea!` },
            { image: 'l12-game-bullying.png',  label: `A world where bullying is even more common in schools.`,              correctMatch: 'worse',  objectPosition: 'center 50%', matchPhrase: `Worse Future! More cruelty makes life harder for everyone. We want kindness.` },
            { image: 'l12-game-food.png',      label: `Every neighborhood has gardens where free food grows.`,               correctMatch: 'better', objectPosition: 'center 50%', matchPhrase: `Better Future! No one hungry — that's a future worth building.` },
            { image: 'l12-game-trees.png',     label: `All the forests are cut down for buildings.`,                         correctMatch: 'worse',  objectPosition: 'center 50%', matchPhrase: `Worse Future! Trees clean our air and give animals homes. We need them.` },
          ],
          buckets: [
            { id: 'better', label: `✨ Better Future`, color: '#34D399' },
            { id: 'worse',  label: `⚠️ Worse Future`,  color: '#F87171' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Future Dreamer badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is the future?`,
              options: [`Yesterday`, `Time that hasn't happened yet`, `A faraway country`, `A type of food`],
              correctIndex: 1 },
            { format: 'true-false', question: `The choices we make today shape the future.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Why is imagining important?`,
              options: [`It isn't`, `Every cool invention started as an idea someone imagined`, `It makes you sleepy`, `It hurts your eyes`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `The future depends on choices we make ___.`,
              options: [`now`, `never`, `tomorrow only`, `secretly`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Who will help build the future?`,
              options: [`Only adults`, `Only scientists`, `YOU — and every kid alive today`, `Robots only`],
              correctIndex: 2 },
            { format: 'multiple-choice', question: `Which is part of a BETTER future?`,
              options: [`More pollution`, `Less kindness`, `Cars that clean the air`, `Cutting down all forests`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! Now let's bring future-dreaming into your real life. Big dreams start with small thoughts.`,
          familyAdventure: `At dinner, ask everyone: "What's ONE thing you wish the future had?" Listen to every answer. You'll learn what your family dreams about — and maybe find some ideas you all share.`,
          creativePrompt:  `Draw a picture of "Earth in 50 Years." Make it the future YOU want to see. Flying cars? Floating gardens? Friendly robots? Mountains of recycling? Show what you'd love the world to look like.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'future-dreamer',
          badgeName: `Future Dreamer`,
          message:   `Brilliant, {name}! You learned that the future doesn't just happen — people BUILD it. You imagined what could go right. And you learned that YOU are the future. Dream big. Be kind. Keep wondering. Orion is so proud to think about tomorrow with you.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l12_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L12] Loaded: "Future Worlds" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l12-s1-future.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l12-s2-imagine.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l12-s3-tech.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l12-s4-kindness.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l12-s5-careful.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l12-s6-you.png',      { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L12] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L12] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l12_screens;
