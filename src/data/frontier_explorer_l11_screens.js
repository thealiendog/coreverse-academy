// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 11
// "The Environment: Do We Have Responsibility?"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l11_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-11',
      title:     `The Environment: Do We Have Responsibility?`,
      duration:  12,
      xpReward:  50,
      badge:     'earth-keeper',
      badgeName: `Earth Keeper`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a really BIG question — do we have to take care of the Earth? Or can we use it however we want? The Earth is our HOME. But it's also home to billions of plants, animals, and people. Today we think about what we OWE to our planet. Ready to be an Earth Keeper?`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Our One Home`,
          paragraphs: [
            `The Earth is the ONLY planet we know of that has life. No other planet has water you can drink, air you can breathe, or trees, animals, and oceans.`,
            `Earth is our HOME — and we share it with everyone alive. There's nowhere else to go.`,
          ],
          image:        '/explorer-assets/frontier/l11-s1-earth-home.png',
          imageCaption: `Earth — our one and only home`,
          vocab: [
            { word: 'environment', definition: `Everything around us — air, water, land, plants, and animals.`,                audioPrompt: `Environment — everything around us, air, water, land, plants, and animals.` },
            { word: 'home',        definition: `The place where you live — where you feel safe and belong.`,                   audioPrompt: `Home — the place where you live, where you feel safe and belong.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `What Earth Gives Us`,
          paragraphs: [
            `Earth gives us EVERYTHING. Air to breathe. Water to drink. Food to eat. Trees to make our homes. Materials for everything we use.`,
            `For free. Every day. Without us doing anything. The Earth is generous beyond imagination.`,
          ],
          image:        '/explorer-assets/frontier/l11-s2-gives.png',
          imageCaption: `Earth gives us everything we need`,
          vocab: [
            { word: 'generous', definition: `Giving freely and gladly — without expecting anything back.`,                     audioPrompt: `Generous — giving freely and gladly, without expecting anything back.` },
            { word: 'need',     definition: `Something you really require — not just want.`,                                   audioPrompt: `Need — something you really require, not just want.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `What's Happening Now`,
          paragraphs: [
            `Right now, the Earth is struggling. People put plastic in oceans. Cars and factories make the air dirty. Forests get cut down too fast. Animals lose their homes.`,
            `Earth is in trouble. And we're causing some of it. That's the truth — not to scare you, but to help you understand.`,
          ],
          image:        '/explorer-assets/frontier/l11-s3-trouble.png',
          imageCaption: `Earth is in trouble — and we can help`,
          vocab: [
            { word: 'pollution', definition: `When dirt, plastic, or chemicals damage air, water, or land.`,                   audioPrompt: `Pollution — when dirt, plastic, or chemicals damage air, water, or land.` },
            { word: 'damage',    definition: `When something gets broken or hurt.`,                                            audioPrompt: `Damage — when something gets broken or hurt.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Do We Have a Responsibility?`,
          paragraphs: [
            `Philosophers ask: "If we LIVE on Earth, do we have a RESPONSIBILITY to take care of it?"`,
            `Most say YES. If your friend let you stay at their house, you'd take care of it. Earth lets us live here. So we should care for it too.`,
          ],
          image:        '/explorer-assets/frontier/l11-s4-responsibility.png',
          imageCaption: `Yes — we have a responsibility to care for our home`,
          vocab: [
            { word: 'responsibility', definition: `Something you should DO because it's right.`,                              audioPrompt: `Responsibility — something you should do because it's right.` },
            { word: 'care for',       definition: `To take good care of something — protect it, keep it safe.`,                audioPrompt: `Care for — to take good care of something, protect it, keep it safe.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Even Kids Can Help`,
          paragraphs: [
            `You don't have to be a scientist or president to help Earth. Tiny actions add up. Save water by turning off the tap. Reuse stuff instead of throwing it out. Plant a flower.`,
            `One kid named Greta Thunberg started speaking up about the Earth when she was a teenager. Now millions of people listen. Small kids, big effects.`,
          ],
          image:        '/explorer-assets/frontier/l11-s5-kids-helping.png',
          imageCaption: `Even kids can make big changes for Earth`,
          vocab: [
            { word: 'reuse',     definition: `To use something again instead of throwing it out.`,                             audioPrompt: `Reuse — to use something again instead of throwing it out.` },
            { word: 'recycle',   definition: `To turn used stuff into new stuff so it doesn't become trash.`,                  audioPrompt: `Recycle — to turn used stuff into new stuff so it doesn't become trash.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Future Generations`,
          paragraphs: [
            `Here's a big thought — the choices we make today decide what Earth will look like for kids born 50 years from now. Their air. Their oceans. Their forests.`,
            `We owe them an Earth that's still beautiful. Being an Earth Keeper isn't just for now. It's for everyone who comes after us.`,
          ],
          image:        '/explorer-assets/frontier/l11-s6-future.png',
          imageCaption: `What we do today shapes Earth for tomorrow's kids`,
          vocab: [
            { word: 'future',     definition: `Time that hasn't happened yet — what's coming.`,                                audioPrompt: `Future — time that hasn't happened yet, what's coming.` },
            { word: 'generation', definition: `A group of people born around the same time.`,                                  audioPrompt: `Generation — a group of people born around the same time.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some actions HELP Earth. Others HURT it. Sort them!`,
          guideText:     `Time to be an Earth Keeper, {name}! Tap each action, then decide — does it help or hurt our planet?`,
          columnHeaders: [`The Action`, `Help or Hurt?`],
          items: [
            { image: 'l11-game-recycle.png',  label: `Putting a plastic bottle in the recycling bin.`,                       correctMatch: 'help', objectPosition: 'center 50%', matchPhrase: `Helps Earth! Recycling lets that plastic become something new instead of trash.` },
            { image: 'l11-game-litter.png',   label: `Throwing trash on the ground instead of in a bin.`,                    correctMatch: 'hurt', objectPosition: 'center 50%', matchPhrase: `Hurts Earth! Litter ends up in oceans and harms animals. Always use bins.` },
            { image: 'l11-game-plant.png',    label: `Planting a tree or a flower in your yard.`,                            correctMatch: 'help', objectPosition: 'center 50%', matchPhrase: `Helps Earth! Plants clean our air and feed bees and butterflies.` },
            { image: 'l11-game-water-on.png', label: `Leaving the water running while you brush your teeth.`,                correctMatch: 'hurt', objectPosition: 'center 50%', matchPhrase: `Hurts Earth! Wastes precious water. Turn it off when not using it.` },
          ],
          buckets: [
            { id: 'help', label: `🌍 Helps Earth`, color: '#34D399' },
            { id: 'hurt', label: `⚠️ Hurts Earth`, color: '#F87171' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Earth Keeper badge!`,
          questions: [
            { format: 'multiple-choice', question: `Why does Earth matter?`,
              options: [`It's our only home`, `It's the biggest planet`, `It's far away`, `It doesn't matter`],
              correctIndex: 0 },
            { format: 'true-false', question: `Even small actions like reusing things can help Earth.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Which is HURTING Earth?`,
              options: [`Planting a tree`, `Throwing trash on the ground`, `Recycling`, `Saving water`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `Most philosophers say we have a ___ to take care of Earth.`,
              options: [`responsibility`, `puzzle`, `secret`, `feeling`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Who is Greta Thunberg?`,
              options: [`A teacher`, `A young person who spoke up about caring for Earth`, `A scientist who invented plastic`, `A president`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Why do our choices about Earth matter for the FUTURE?`,
              options: [`They don't`, `Future kids will live on the Earth we leave them`, `Earth lasts forever no matter what`, `Future kids will move to Mars`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! Now let's bring Earth Keeping into your real life. The planet needs YOU.`,
          familyAdventure: `As a family, pick ONE thing to do this week to help Earth. Use less water? Recycle more? Pick up litter in your neighborhood? Choose together — then DO it. Small actions, real change.`,
          creativePrompt:  `Make an "I am an Earth Keeper" pledge poster. Write 3 things you'll do to help Earth. Decorate it with trees, oceans, animals — whatever you love about the planet. Hang it where you can see it every day.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'earth-keeper',
          badgeName: `Earth Keeper`,
          message:   `Brilliant, {name}! You learned that Earth is our one home — and that taking care of it is our responsibility. You learned that even small actions matter. You're an Earth Keeper now. Future kids — and every animal and tree — thank you. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l11_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L11] Loaded: "The Environment" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l11-s1-earth-home.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l11-s2-gives.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l11-s3-trouble.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l11-s4-responsibility.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l11-s5-kids-helping.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l11-s6-future.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L11] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L11] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l11_screens;
