// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 16
// "The Nature of Time: A Strange, Wonderful Thing"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l16_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-16',
      title:     `The Nature of Time: A Strange, Wonderful Thing`,
      duration:  12,
      xpReward:  50,
      badge:     'time-traveler',
      badgeName: `Time Traveler`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a WILD topic — TIME. You can't see it. You can't touch it. But you can FEEL it every day. Time flies when you're having fun. Time crawls in math class. Why? Today we explore the strange wonderful thing called time. Become a Time Traveler!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Time?`,
          paragraphs: [
            `TIME is the way we measure change. Yesterday is past. Today is now. Tomorrow is future.`,
            `We measure time with seconds, minutes, hours, days, years. But here's the puzzle — time can't be held in your hand. It's invisible. Yet it's everywhere.`,
          ],
          image:        '/explorer-assets/frontier/l16-s1-time.png',
          imageCaption: `Time — invisible but everywhere`,
          vocab: [
            { word: 'time',    definition: `How we measure change — past, now, future.`,                                       audioPrompt: `Time — how we measure change, past, now, future.` },
            { word: 'measure', definition: `To figure out how much there is — like with a ruler or clock.`,                    audioPrompt: `Measure — to figure out how much there is, like with a ruler or clock.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Past, Present, Future`,
          paragraphs: [
            `Time has three big parts. The PAST is everything that already happened — yesterday, last year, when dinosaurs lived.`,
            `The PRESENT is RIGHT NOW. The FUTURE is everything that hasn't happened yet — tonight, tomorrow, next year.`,
          ],
          image:        '/explorer-assets/frontier/l16-s2-three-parts.png',
          imageCaption: `Past, Present, Future — three parts of time`,
          vocab: [
            { word: 'past',    definition: `Time that's already happened — over and done.`,                                    audioPrompt: `Past — time that's already happened, over and done.` },
            { word: 'present', definition: `Right now — this very moment.`,                                                    audioPrompt: `Present — right now, this very moment.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Time Plays Tricks`,
          paragraphs: [
            `Have you noticed time feels DIFFERENT in different situations? When you're having fun — time FLIES. When you're bored — time CRAWLS slowly.`,
            `That's weird, right? The clock ticks the same speed all the time. But how time FEELS depends on what you're doing.`,
          ],
          image:        '/explorer-assets/frontier/l16-s3-tricks.png',
          imageCaption: `Time feels different depending on what we're doing`,
          vocab: [
            { word: 'flies',   definition: `Goes by really fast — feels short.`,                                               audioPrompt: `Flies — goes by really fast, feels short.` },
            { word: 'crawls',  definition: `Moves super slowly — feels long and stretched out.`,                               audioPrompt: `Crawls — moves super slowly, feels long and stretched out.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `One Direction Only`,
          paragraphs: [
            `Here's a weird thing about time — it only goes ONE WAY. Forward. Always forward. We can't rewind to yesterday.`,
            `We can REMEMBER the past. We can IMAGINE the future. But we can only LIVE in the present. That's the only place time lets us actually be.`,
          ],
          image:        '/explorer-assets/frontier/l16-s4-forward.png',
          imageCaption: `Time only goes forward — one direction only`,
          vocab: [
            { word: 'forward', definition: `Going ahead — moving toward the future.`,                                          audioPrompt: `Forward — going ahead, moving toward the future.` },
            { word: 'rewind',  definition: `To go back — like rewinding a video.`,                                              audioPrompt: `Rewind — to go back, like rewinding a video.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Einstein's Mind-Bending Idea`,
          paragraphs: [
            `A scientist named Albert Einstein discovered something WILD. Time doesn't always move the same speed everywhere!`,
            `Near a black hole or moving really fast in a rocket, time actually moves SLOWER. Weird, right? Even time bends. The universe is stranger than we thought.`,
          ],
          image:        '/explorer-assets/frontier/l16-s5-einstein.png',
          imageCaption: `Einstein showed time can bend — really!`,
          vocab: [
            { word: 'Einstein', definition: `A famous scientist who discovered amazing things about time and space.`,          audioPrompt: `Einstein — a famous scientist who discovered amazing things about time and space.` },
            { word: 'speed',    definition: `How fast something moves.`,                                                       audioPrompt: `Speed — how fast something moves.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Use Your Time Well`,
          paragraphs: [
            `Time is the most precious thing we have. Once a moment passes, it's gone forever. Spending time is the same as spending your LIFE.`,
            `Use your time on things that matter. Love. Learning. Helping. Playing. Resting. Because time keeps moving — and so should you, in the ways YOU choose.`,
          ],
          image:        '/explorer-assets/frontier/l16-s6-use.png',
          imageCaption: `Time is precious — use it on things that matter`,
          vocab: [
            { word: 'precious', definition: `Very, very valuable — worth taking great care of.`,                              audioPrompt: `Precious — very valuable, worth taking great care of.` },
            { word: 'spend',    definition: `To use time on something — choosing what to do with it.`,                          audioPrompt: `Spend — to use time on something, choosing what to do with it.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Sort each thing into when it happens — past, present, or future!`,
          guideText:     `Time to sort time, {name}! Tap each event, then tap if it's in the past, present, or future.`,
          columnHeaders: [`The Event`, `When?`],
          items: [
            { image: 'l16-game-dinos.png',     label: `Dinosaurs walked the Earth.`,                                          correctMatch: 'past',    objectPosition: 'center 50%', matchPhrase: `Past! Dinosaurs lived millions of years ago — long, long past.` },
            { image: 'l16-game-now.png',       label: `You are reading this right now.`,                                       correctMatch: 'present', objectPosition: 'center 50%', matchPhrase: `Present! This moment, RIGHT NOW. The only time you can actually live in.` },
            { image: 'l16-game-bday.png',      label: `Your next birthday celebration.`,                                       correctMatch: 'future',  objectPosition: 'center 50%', matchPhrase: `Future! Hasn't happened yet — but it's coming!` },
            { image: 'l16-game-yesterday.png', label: `What you ate for dinner last night.`,                                   correctMatch: 'past',    objectPosition: 'center 50%', matchPhrase: `Past! Yesterday is already gone — only memory now.` },
          ],
          buckets: [
            { id: 'past',    label: `🕰️ Past`,    color: '#A78BFA' },
            { id: 'present', label: `⏰ Present`, color: '#FBBF24' },
            { id: 'future',  label: `🚀 Future`,  color: '#34D399' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Time Traveler badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is time?`,
              options: [`A type of fruit`, `How we measure change`, `A type of shape`, `An animal`],
              correctIndex: 1 },
            { format: 'true-false', question: `Time can only go in one direction — forward.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Which is the PRESENT?`,
              options: [`Yesterday`, `Right now`, `Tomorrow`, `Last year`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `Time flies when you're having ___.`,
              options: [`fun`, `socks`, `dinner`, `breakfast`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Who was Einstein?`,
              options: [`A type of food`, `A scientist who discovered amazing things about time`, `A small dog`, `A toy maker`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Why should we use our time well?`,
              options: [`We shouldn't`, `Time is precious and once gone, it's gone forever`, `Time is unlimited`, `Adults said so`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful work, {name}! Now let's bring time-thinking into your real life. Time is your most precious thing.`,
          familyAdventure: `Tonight, ask your family: "What's one of YOUR favorite memories from the past?" Listen to each story. The past lives on in stories we share. Make a memory tonight too — by listening with love.`,
          creativePrompt:  `Make a "Time Map" of your life. Draw three boxes: PAST (something that happened to you), PRESENT (something you're doing today), FUTURE (something you're excited about). Fill each box with drawings or words. That's YOUR time map!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'time-traveler',
          badgeName: `Time Traveler`,
          message:   `Brilliant, {name}! You learned that time is strange — invisible but real. Always moving forward. Bending near black holes! And precious. You're a Time Traveler now. Use your time on what matters most. Orion is so proud to share this moment with you.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l16_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L16] Loaded: "The Nature of Time" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l16-s1-time.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l16-s2-three-parts.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l16-s3-tricks.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l16-s4-forward.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l16-s5-einstein.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l16-s6-use.png',          { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L16] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L16] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l16_screens;
