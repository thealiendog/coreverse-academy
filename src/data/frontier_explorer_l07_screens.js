// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 7
// "Do Animals Have Feelings? Looking Into Other Minds"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l07_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-07',
      title:     `Do Animals Have Feelings? Looking Into Other Minds`,
      duration:  12,
      xpReward:  50,
      badge:     'animal-friend',
      badgeName: `Animal Friend`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a question philosophers AND scientists are still figuring out — DO ANIMALS HAVE FEELINGS? Does your dog REALLY love you? Does a fish feel scared? What about a spider? Today we look closely and find out. Time to become an Animal Friend!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Big Question`,
          paragraphs: [
            `Look at a dog wagging its tail when you come home. Looks happy, right? But here's the puzzle — how do we KNOW it's happy and not just moving its tail?`,
            `That's the question. Animals can't tell us in words. So how do we figure out what they feel?`,
          ],
          image:        '/explorer-assets/frontier/l07-s1-dog-tail.png',
          imageCaption: `Is the dog happy — or just moving its tail?`,
          vocab: [
            { word: 'feeling', definition: `An inside experience like happy, sad, scared, or excited.`,                        audioPrompt: `Feeling — an inside experience like happy, sad, scared, or excited.` },
            { word: 'animal',  definition: `A living creature that isn't a plant or a person.`,                                audioPrompt: `Animal — a living creature that isn't a plant or a person.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `What Scientists Found`,
          paragraphs: [
            `Scientists have studied animal feelings for many years. They found that many animals SHOW the same signs we do when we feel things.`,
            `Dogs wag tails AND release the same happy chemicals our brains do. Elephants comfort each other when sad. Rats laugh when tickled. Real science!`,
          ],
          image:        '/explorer-assets/frontier/l07-s2-science.png',
          imageCaption: `Scientists have found animal feelings are real`,
          vocab: [
            { word: 'scientist', definition: `A person who studies the world carefully to learn how things work.`,             audioPrompt: `Scientist — a person who studies the world carefully to learn how things work.` },
            { word: 'study',     definition: `To look at something closely to understand it better.`,                          audioPrompt: `Study — to look at something closely to understand it better.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Smart Animals`,
          paragraphs: [
            `Some animals are SUPER smart. Dolphins recognize themselves in mirrors. Crows use tools. Octopuses solve puzzles to get food.`,
            `Smart animals seem to think, plan, and remember — just like us. They aren't simple. They have whole inner worlds.`,
          ],
          image:        '/explorer-assets/frontier/l07-s3-smart-animals.png',
          imageCaption: `Dolphins, crows, octopuses — surprisingly smart`,
          vocab: [
            { word: 'smart', definition: `Good at figuring things out and learning new things.`,                                audioPrompt: `Smart — good at figuring things out and learning new things.` },
            { word: 'remember', definition: `To keep something in your mind so you can think of it later.`,                    audioPrompt: `Remember — to keep something in your mind so you can think of it later.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Different Feelings`,
          paragraphs: [
            `Different animals probably feel different things. A dog feels close to its family. A fish probably feels fear. A bee feels nothing the way we do — but its body still works.`,
            `That doesn't make any animal less important. They're all living things with their own way of experiencing the world.`,
          ],
          image:        '/explorer-assets/frontier/l07-s4-different.png',
          imageCaption: `Different animals — different inner worlds`,
          vocab: [
            { word: 'experience', definition: `Something you go through and feel — what life is like for you.`,                audioPrompt: `Experience — something you go through and feel, what life is like for you.` },
            { word: 'living',     definition: `Alive — growing, breathing, moving on its own.`,                                audioPrompt: `Living — alive, growing, breathing, moving on its own.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Why It Matters`,
          paragraphs: [
            `If animals have feelings, then how we TREAT them matters. We should be kind. We should not hurt them for fun. We should give them safe places to live.`,
            `That's why people who love animals work hard to protect them. The kinder we are to animals, the kinder the world becomes.`,
          ],
          image:        '/explorer-assets/frontier/l07-s5-kindness.png',
          imageCaption: `Being kind to animals is being kind to all life`,
          vocab: [
            { word: 'protect', definition: `To keep someone or something safe from harm.`,                                     audioPrompt: `Protect — to keep someone or something safe from harm.` },
            { word: 'kindness', definition: `Treating others with care, gentleness, and warmth.`,                              audioPrompt: `Kindness — treating others with care, gentleness, and warmth.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Other Minds`,
          paragraphs: [
            `Philosophers call this the "Other Minds" question — how do we know what ANY mind besides our own is really like? We can't crawl inside another being to find out.`,
            `But we can WATCH carefully. We can LISTEN. We can RESPECT what we see. That's how we treat animals — and people too — with kindness.`,
          ],
          image:        '/explorer-assets/frontier/l07-s6-other-minds.png',
          imageCaption: `Other minds — we look carefully and respect what we see`,
          vocab: [
            { word: 'mind',   definition: `The part of you that thinks, feels, and imagines.`,                                 audioPrompt: `Mind — the part of you that thinks, feels, and imagines.` },
            { word: 'respect', definition: `Treating people and other beings kindly because they matter.`,                     audioPrompt: `Respect — treating people and other beings kindly because they matter.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each animal to a feeling scientists have observed in them!`,
          guideText:     `Let's look at what scientists have learned, {name}! Tap an animal, then tap a feeling they actually have.`,
          columnHeaders: [`The Animal`, `The Feeling`],
          items: [
            { image: 'l07-game-dog.png',      label: `A dog seeing their family come home.`,           correctMatch: 'joy',     objectPosition: 'center 50%', matchPhrase: `Joy! Dogs feel real happiness — their brains release the same chemicals ours do.` },
            { image: 'l07-game-elephant.png', label: `An elephant whose friend just passed away.`,     correctMatch: 'sadness', objectPosition: 'center 50%', matchPhrase: `Sadness! Elephants mourn — they really do feel deep sadness.` },
            { image: 'l07-game-rat.png',      label: `A rat being gently tickled by a scientist.`,     correctMatch: 'fun',     objectPosition: 'center 50%', matchPhrase: `Fun! Rats actually LAUGH (in tiny squeaks) when tickled. Real science!` },
            { image: 'l07-game-crow.png',     label: `A crow figuring out how to get a peanut.`,       correctMatch: 'thinking', objectPosition: 'center 50%', matchPhrase: `Thinking! Crows really plan and solve puzzles — they're brilliant.` },
          ],
          buckets: [
            { id: 'joy',      label: `😊 Joy`,       color: '#FBBF24' },
            { id: 'sadness',  label: `💧 Sadness`,   color: '#60A5FA' },
            { id: 'fun',      label: `🎉 Fun`,        color: '#F472B6' },
            { id: 'thinking', label: `💭 Thinking`,  color: '#A78BFA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Animal Friend badge!`,
          questions: [
            { format: 'multiple-choice', question: `Do scientists think animals have feelings?`,
              options: [`Definitely not`, `Yes — many do`, `Only fish do`, `Only humans do`],
              correctIndex: 1 },
            { format: 'true-false', question: `Rats actually laugh when they are tickled.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Which animals are known to be very smart?`,
              options: [`Dolphins, crows, and octopuses`, `Only dogs`, `Only cats`, `No animals are smart`],
              correctIndex: 0 },
            { format: 'fill-blank', question: `If animals have feelings, we should be ___ to them.`,
              options: [`kind`, `mean`, `loud`, `scary`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `What is the "Other Minds" question?`,
              options: [`How to grow bigger`, `How we can know what other minds feel`, `How to be quiet`, `How to win a game`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Why does it matter if animals have feelings?`,
              options: [`It doesn't matter`, `It changes how we should treat them`, `It changes the weather`, `It's just funny`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Beautiful work, {name}! Now let's bring this question into your real life. Animals are everywhere — and you can be their friend.`,
          familyAdventure: `Watch an animal today — a pet, a bird outside, a squirrel. What feelings do you think they're having? Tell your family what you noticed. Be a kind observer.`,
          creativePrompt:  `Draw your favorite animal. Around it, write or draw three feelings you think this animal might have. Then write one thing you can do to be kind to this animal — or animals like it.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'animal-friend',
          badgeName: `Animal Friend`,
          message:   `Wonderful, {name}! You thought about one of philosophy's most beautiful questions — what other beings feel inside. You learned that scientists agree: many animals DO feel. And you learned that being kind to them matters. You're an Animal Friend now. The world is kinder because of you. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l07_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L07] Loaded: "Do Animals Have Feelings?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l07-s1-dog-tail.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l07-s2-science.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l07-s3-smart-animals.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l07-s4-different.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l07-s5-kindness.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l07-s6-other-minds.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L07] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L07] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l07_screens;
