// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 20 (CAPSTONE)
// "If You Could Change One Thing About the World, What Would It Be?"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l20_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-20',
      title:     `If You Could Change One Thing About the World, What Would It Be?`,
      duration:  12,
      xpReward:  50,
      badge:     'world-changer',
      badgeName: `World Changer`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Welcome to our FINAL lesson together. You've come SO far. Today, the question is yours — IF YOU COULD CHANGE ONE THING about the world, what would it be? You'll be amazed what you've already learned to think about. Time to become a World Changer!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Look How Far You've Come`,
          paragraphs: [
            `You started this journey by becoming a Wonder Spark. You learned philosophy is about LOVING WISDOM and asking big questions.`,
            `Now look at all you've learned — fairness, friendship, truth, beauty, the soul, time, love. You've thought about EVERYTHING that matters most.`,
          ],
          image:        '/explorer-assets/frontier/l20-s1-journey.png',
          imageCaption: `Look how far you've come`,
          vocab: [
            { word: 'journey', definition: `A trip from one place to another — or growing from who you were to who you're becoming.`, audioPrompt: `Journey — a trip from one place to another, or growing from who you were to who you're becoming.` },
            { word: 'wisdom',  definition: `Knowing the deep, important things — not just facts.`,                             audioPrompt: `Wisdom — knowing the deep important things, not just facts.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Real World Changers`,
          paragraphs: [
            `Throughout history, people have changed the world. Rosa Parks. Martin Luther King Jr. Malala. Greta Thunberg. Each of them started just like YOU.`,
            `They saw something WRONG. They had an idea. They acted. The world is different — and better — because they did.`,
          ],
          image:        '/explorer-assets/frontier/l20-s2-changers.png',
          imageCaption: `Real world changers — they all started somewhere`,
          vocab: [
            { word: 'history',     definition: `Everything that has happened in the past — recorded and remembered.`,          audioPrompt: `History — everything that has happened in the past, recorded and remembered.` },
            { word: 'change-maker', definition: `Someone brave who works to make the world more fair for everyone.`,           audioPrompt: `Change-maker — someone brave who works to make the world more fair for everyone.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Big Change Starts Small`,
          paragraphs: [
            `World changers don't usually start by changing the world. They start by changing ONE thing in their own life. Or speaking up in their own town.`,
            `One kind act, then another. One brave word, then another. That's how change really happens — small, then bigger, then HUGE.`,
          ],
          image:        '/explorer-assets/frontier/l20-s3-small-big.png',
          imageCaption: `Big change always starts small`,
          vocab: [
            { word: 'change', definition: `When something becomes different than it was before.`,                              audioPrompt: `Change — when something becomes different than it was before.` },
            { word: 'small',  definition: `Little — not big at first.`,                                                        audioPrompt: `Small — little, not big at first.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Your Big Question`,
          paragraphs: [
            `So here's the question, just for YOU — if you could change ONE thing about the world, what would it be?`,
            `Maybe less bullying. More kindness. Cleaner oceans. Less war. More books for every kid. A pet for every lonely person. Your answer matters.`,
          ],
          image:        '/explorer-assets/frontier/l20-s4-question.png',
          imageCaption: `Your turn — what would YOU change?`,
          vocab: [
            { word: 'matter', definition: `To be important — to really count.`,                                                audioPrompt: `Matter — to be important, to really count.` },
            { word: 'idea',   definition: `A thought in your mind — something you imagine, believe, or wonder about.`,         audioPrompt: `Idea — a thought in your mind, something you imagine, believe, or wonder about.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `You Have Power`,
          paragraphs: [
            `Some kids think "I'm too small to change anything." That's a TRICK. Every adult who ever changed the world was once a kid your size.`,
            `Your voice matters. Your kindness matters. Your questions matter. You have more power than you think. Use it.`,
          ],
          image:        '/explorer-assets/frontier/l20-s5-power.png',
          imageCaption: `You have more power than you think`,
          vocab: [
            { word: 'power', definition: `The ability to make something happen — to make a difference.`,                       audioPrompt: `Power — the ability to make something happen, to make a difference.` },
            { word: 'voice', definition: `What you say — the words and ideas that come from you.`,                             audioPrompt: `Voice — what you say, the words and ideas that come from you.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Carry It Forward`,
          paragraphs: [
            `As we finish this journey, take with you everything you've learned. Philosophy. Fairness. Friendship. Kindness. Love. Curiosity. Wonder.`,
            `Keep asking big questions. Keep loving the people around you. Keep dreaming what could be. The world is waiting for what YOU will do. Go become it.`,
          ],
          image:        '/explorer-assets/frontier/l20-s6-forward.png',
          imageCaption: `Carry it forward — the world is waiting for you`,
          vocab: [
            { word: 'carry forward', definition: `To keep something with you as you go — bring it into your future.`,          audioPrompt: `Carry forward — to keep something with you as you go, bring it into your future.` },
            { word: 'become',        definition: `To grow into being something — to turn into.`,                                audioPrompt: `Become — to grow into being something, to turn into.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `World changers do different kinds of good. Match each person to what they did!`,
          guideText:     `Let's meet some real world changers, {name}! Tap each person, then match them to what they did.`,
          columnHeaders: [`The Changer`, `What They Did`],
          items: [
            { image: 'l20-game-rosa.png',    label: `Rosa Parks`,                                                            correctMatch: 'fairness',    objectPosition: 'center 50%', matchPhrase: `Yes! Rosa fought for fairness — refusing to give up her seat changed unfair rules.` },
            { image: 'l20-game-malala.png',  label: `Malala`,                                                                correctMatch: 'school',      objectPosition: 'center 50%', matchPhrase: `Yes! Malala fought for every kid's right to go to school — even when it was dangerous.` },
            { image: 'l20-game-greta.png',   label: `Greta Thunberg`,                                                        correctMatch: 'earth',       objectPosition: 'center 50%', matchPhrase: `Yes! Greta spoke up for the planet — she made millions pay attention.` },
            { image: 'l20-game-mlk.png',     label: `Martin Luther King Jr.`,                                                correctMatch: 'kindness',    objectPosition: 'center 50%', matchPhrase: `Yes! Dr. King led peaceful protests for kindness and equal treatment for all.` },
          ],
          buckets: [
            { id: 'fairness',  label: `⚖️ Fought for Fairness`,    color: '#34D399' },
            { id: 'school',    label: `📚 Right to School`,         color: '#FBBF24' },
            { id: 'earth',     label: `🌍 Spoke up for Earth`,      color: '#60A5FA' },
            { id: 'kindness',  label: `💛 Peaceful Kindness`,       color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Final quiz, {name}! Answer all 6 questions to earn your World Changer badge — the BIGGEST one!`,
          questions: [
            { format: 'multiple-choice', question: `Who can be a world changer?`,
              options: [`Only adults`, `Only famous people`, `Anyone — including YOU`, `Only people with money`],
              correctIndex: 2 },
            { format: 'true-false', question: `Big changes usually start as small actions.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Who refused to give up her seat to protest unfair rules?`,
              options: [`Rosa Parks`, `Greta Thunberg`, `Aristotle`, `Albert Einstein`],
              correctIndex: 0 },
            { format: 'fill-blank', question: `Your voice and kindness ___.`,
              options: [`matter`, `disappear`, `vanish`, `freeze`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Who was Malala?`,
              options: [`A pop star`, `A young person who fought for every kid's right to go to school`, `A planet`, `A scientist who built robots`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `What should you do with everything you've learned?`,
              options: [`Forget it`, `Hide it`, `Carry it forward and use it to make the world better`, `Trade it for candy`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `You did it, {name}! You finished the whole Frontier journey. Now let's bring all of it into your real life — for good.`,
          familyAdventure: `Tonight, gather your family and ask: "If we could each change ONE thing about the world, what would it be?" Listen to every answer. Then pick ONE thing your family can start doing together — even something tiny — toward making that real.`,
          creativePrompt:  `Make a "My Big Change" poster. At the top, write the ONE thing you'd change about the world. Below it, draw or write three SMALL actions you can do — starting this week — that move toward that change. Hang it somewhere you see every day.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'world-changer',
          badgeName: `World Changer`,
          message:   `You did it, {name}! You finished all 20 Frontier lessons. You're a Wonder Spark, a Truth Seeker, a Kind Keeper, a Joy Finder, a Cosmic Wonderer, a Love Knower — and now a World Changer. Carry every one of those badges with you. The world is waiting for what YOU will do. Orion is so, so proud. Keep rising from questions. Keep wondering. The future is yours.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l20_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L20] Loaded: "Change One Thing" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l20-s1-journey.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l20-s2-changers.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l20-s3-small-big.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l20-s4-question.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l20-s5-power.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l20-s6-forward.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L20] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L20] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l20_screens;
