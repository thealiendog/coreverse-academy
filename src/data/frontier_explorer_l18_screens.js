// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 18
// "Why Is There Something Rather Than Nothing?"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l18_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-18',
      title:     `Why Is There Something Rather Than Nothing?`,
      duration:  12,
      xpReward:  50,
      badge:     'cosmic-wonderer',
      badgeName: `Cosmic Wonderer`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: maybe the BIGGEST question ever asked — why is there ANYTHING at all? Why are there stars, trees, people, ice cream — instead of NOTHING? It sounds simple but it might be the deepest question in the whole universe. Ready to become a Cosmic Wonderer?`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Stop and Look Around`,
          paragraphs: [
            `Look around you right now. There's stuff EVERYWHERE. Your hands. The chair. Walls. Air. Trees outside. Stars in space.`,
            `Now imagine — what if NONE of this existed? Not the chair. Not you. Not space. Just empty NOTHING. Wild, right?`,
          ],
          image:        '/explorer-assets/frontier/l18-s1-look-around.png',
          imageCaption: `Look around — why is all this here?`,
          vocab: [
            { word: 'exist',    definition: `To BE — to be here in the world in some way.`,                                    audioPrompt: `Exist — to be, to be here in the world in some way.` },
            { word: 'around',   definition: `In every direction near you.`,                                                    audioPrompt: `Around — in every direction near you.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `The Idea of Nothing`,
          paragraphs: [
            `NOTHING is really hard to imagine. Try it — close your eyes and picture absolute nothing. No space, no time, no air. Most people can't really do it!`,
            `That's because our minds are built to think about SOMETHING. Nothing is so strange, our brains slip away from it.`,
          ],
          image:        '/explorer-assets/frontier/l18-s2-nothing.png',
          imageCaption: `Nothing — the strangest idea our minds can try to hold`,
          vocab: [
            { word: 'nothing',  definition: `Not anything at all — empty of everything.`,                                       audioPrompt: `Nothing — not anything at all, empty of everything.` },
            { word: 'imagine',  definition: `To picture something in your mind.`,                                              audioPrompt: `Imagine — to picture something in your mind.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Big Bang`,
          paragraphs: [
            `Scientists discovered the universe had a BEGINNING — about 13.8 BILLION years ago. They call it the Big Bang. Everything started from a tiny dot, then BURST outward into stars, planets, and us.`,
            `So we know HOW the universe began. But the question stays — WHY did it begin? Why did the dot start? Nobody knows for sure.`,
          ],
          image:        '/explorer-assets/frontier/l18-s3-big-bang.png',
          imageCaption: `The Big Bang — how everything began`,
          vocab: [
            { word: 'universe', definition: `Everything that exists — all of space, planets, stars, and us.`,                  audioPrompt: `Universe — everything that exists, all of space, planets, stars, and us.` },
            { word: 'Big Bang', definition: `The huge burst that started the universe long, long ago.`,                        audioPrompt: `Big Bang — the huge burst that started the universe long, long ago.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Different Ideas`,
          paragraphs: [
            `People have different ideas about WHY there's something. Some believe a creator made the universe with love. Some believe it just happened naturally. Some think there are many universes, not just one.`,
            `Nobody knows the final answer. That's what makes it the biggest mystery of all.`,
          ],
          image:        '/explorer-assets/frontier/l18-s4-ideas.png',
          imageCaption: `Many beautiful ideas — no one knows for sure`,
          vocab: [
            { word: 'creator', definition: `Someone or something that made things — a maker.`,                                 audioPrompt: `Creator — someone or something that made things, a maker.` },
            { word: 'mystery', definition: `Something nobody fully understands yet — a deep puzzle.`,                          audioPrompt: `Mystery — something nobody fully understands yet, a deep puzzle.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `It's Okay Not to Know`,
          paragraphs: [
            `Here's a beautiful truth — it's OKAY not to know everything. The biggest, deepest questions stay puzzles. Even the smartest grown-ups can't fully answer them.`,
            `What matters isn't having all the answers. What matters is WONDERING. Asking. Looking up at the stars and feeling amazed.`,
          ],
          image:        '/explorer-assets/frontier/l18-s5-okay.png',
          imageCaption: `It's okay not to know — wondering is what matters`,
          vocab: [
            { word: 'wonder', definition: `The feeling of being amazed and curious about something huge.`,                     audioPrompt: `Wonder — the feeling of being amazed and curious about something huge.` },
            { word: 'amazed', definition: `Feeling WOW about something so big or beautiful it stops you.`,                     audioPrompt: `Amazed — feeling wow about something so big or beautiful it stops you.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `You Are Part of It`,
          paragraphs: [
            `Here's the most amazing thing — out of all the maybe-nothing, the universe chose to make SOMETHING. And out of all that something, it made YOU.`,
            `You're not random. You're part of something huge and beautiful. The whole universe is in you — every star, every atom. Pretty wild, right?`,
          ],
          image:        '/explorer-assets/frontier/l18-s6-part.png',
          imageCaption: `You're part of it all — the whole universe is in you`,
          vocab: [
            { word: 'part',  definition: `A piece of something bigger.`,                                                       audioPrompt: `Part — a piece of something bigger.` },
            { word: 'atom',  definition: `The tiniest building block — what everything is made of.`,                          audioPrompt: `Atom — the tiniest building block, what everything is made of.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some things exist. Some things don't. Some things might exist somewhere. Sort them!`,
          guideText:     `Let's think about existence, {name}! Tap each thing, then decide — does it exist, definitely not, or maybe?`,
          columnHeaders: [`The Thing`, `Exists?`],
          items: [
            { image: 'l18-game-stars.png',     label: `Stars in the sky.`,                                                  correctMatch: 'yes',  objectPosition: 'center 50%', matchPhrase: `Yes! Billions of stars exist — we see them every night.` },
            { image: 'l18-game-unicorn.png',   label: `A unicorn with a real, magical horn.`,                                correctMatch: 'no',   objectPosition: 'center 50%', matchPhrase: `No! Unicorns are imaginary — fun stories, but not real animals.` },
            { image: 'l18-game-aliens.png',    label: `Other living beings somewhere else in space.`,                        correctMatch: 'maybe', objectPosition: 'center 50%', matchPhrase: `Maybe! Scientists don't know yet — they're still searching. Big mystery!` },
            { image: 'l18-game-you.png',       label: `YOU, sitting here, reading this lesson.`,                             correctMatch: 'yes',  objectPosition: 'center 50%', matchPhrase: `Yes! You definitely exist. Part of the great mystery of why anything exists.` },
          ],
          buckets: [
            { id: 'yes',   label: `✓ Yes — exists`,    color: '#34D399' },
            { id: 'no',    label: `✗ No — not real`,   color: '#F87171' },
            { id: 'maybe', label: `❔ Maybe — unknown`, color: '#A78BFA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Cosmic Wonderer badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is the BIG question of this lesson?`,
              options: [`What's for lunch`, `Why is there something rather than nothing`, `Who is taller`, `How to count to 10`],
              correctIndex: 1 },
            { format: 'true-false', question: `Scientists think the universe began with something called the Big Bang.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Why is "nothing" hard to imagine?`,
              options: [`It's a long word`, `Our minds are built to think about something`, `It's noisy`, `It's brightly colored`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `The biggest, deepest questions are also called ___.`,
              options: [`mysteries`, `colors`, `lunches`, `shoes`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `How long ago did the universe begin?`,
              options: [`Last year`, `About 13.8 billion years ago`, `100 years ago`, `Yesterday`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Is it okay not to know everything?`,
              options: [`No`, `Yes — wondering is what matters most`, `Only adults can not-know`, `Only kids can not-know`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful work, {name}! Now let's bring this cosmic wondering into your real life. The universe is RIGHT THERE — just look up!`,
          familyAdventure: `On a clear night, go outside and look at the stars with your family. Just look — quietly. Ask: "Why do you think all THIS exists?" Listen to each person's answer. No right answers, just wonder.`,
          creativePrompt:  `Draw a picture of "The Universe." Include stars, planets, swirly galaxies, and YOU somewhere in there. Around your drawing, write three questions you wonder about the universe. There are no wrong questions!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'cosmic-wonderer',
          badgeName: `Cosmic Wonderer`,
          message:   `Brilliant, {name}! You wrestled with maybe the biggest question ever asked. You learned that the universe began long ago — but WHY there's anything at all stays a mystery. And you learned it's okay not to know. You're a Cosmic Wonderer now. The whole universe is curious — through you. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l18_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L18] Loaded: "Why Is There Something?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l18-s1-look-around.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l18-s2-nothing.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l18-s3-big-bang.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l18-s4-ideas.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l18-s5-okay.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l18-s6-part.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L18] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L18] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l18_screens;
