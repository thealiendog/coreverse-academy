// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 8
// "Gratitude Practice — The Science of Thankfulness"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l08_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-08',
      title:     `Gratitude Practice — The Science of Thankfulness`,
      duration:  13,
      xpReward:  50,
      badge:     'gratitude-keeper',
      badgeName: `Gratitude Keeper`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}! Today we're going to discover something that sounds almost too simple to be true — but science proves it really works. Just noticing and appreciating the good things in your life can actually change how your brain works. This is the magic of gratitude. Ready to find out how?`,
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `What Gratitude Does to Your Brain`,
          paragraphs: [
            `Gratitude is the practice of noticing and appreciating the good things in your life — big and small. Researchers at UC Davis, led by Dr. Robert Emmons, found that people who regularly practise gratitude have better sleep, feel more positive emotions, and even have stronger immune systems.`,
            `Your brain has something called a negativity bias. Because our ancient ancestors had to watch for danger constantly, our brains are wired to notice bad things more than good things.`,
            `Gratitude practice is a way of gently retraining your brain to also notice what is good, safe, and beautiful. You're not ignoring problems — you're teaching your brain to see the full picture.`,
          ],
          image:        '/explorer-assets/inner-world/l08-negativity-bias.png',
          imageCaption: `Your brain is wired for danger — gratitude teaches it to notice the good too`,
          vocab: [
            { word: 'gratitude',       definition: `The practice of noticing and appreciating the good things in your life — it's a skill you can get better at.`,              audioPrompt: `Gratitude — the practice of noticing and appreciating the good things in your life. It's a skill you can get better at.` },
            { word: 'negativity bias', definition: `Your brain's tendency to notice bad things more than good ones — a survival trait from ancient times that gratitude helps balance out.`, audioPrompt: `Negativity bias — your brain's tendency to notice bad things more than good ones, a survival trait from ancient times that gratitude helps balance out.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `The Gratitude Journal: Your Brain's Reward System`,
          paragraphs: [
            `Gratitude journaling is one of the most studied happiness practices. Writing down three specific things you're grateful for each day activates the reward system of your brain and releases dopamine — a feel-good chemical.`,
            `The key word is specific. Not just "my family" — but "the way my mum laughed at breakfast today." Not just "my home" — but "the warm blanket I had this morning."`,
            `Specific details make your brain pay real attention. That's when the dopamine kicks in. The more vivid and real your gratitude, the stronger the effect.`,
          ],
          image:        '/explorer-assets/inner-world/l08-gratitude-rewires.png',
          imageCaption: `Specific gratitude activates your brain's reward system — dopamine is released`,
          vocab: [
            { word: 'gratitude journaling', definition: `Writing down specific things you're grateful for each day — one of the most researched happiness practices in science.`,        audioPrompt: `Gratitude journaling — writing down specific things you're grateful for each day. It's one of the most researched happiness practices in science.` },
            { word: 'dopamine',             definition: `A chemical in your brain that creates feelings of pleasure and reward — released when you do or notice something good.`,         audioPrompt: `Dopamine — a chemical in your brain that creates feelings of pleasure and reward, released when you do or notice something good.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `Gratitude Isn't Pretending Everything is Fine`,
          paragraphs: [
            `Gratitude is not about pretending bad things don't exist. You can acknowledge that something is hard and still find something to be thankful for — those two things can both be true at once.`,
            `Research shows that even people going through very difficult times benefit from gratitude practice. It's not about forced positivity. It's about balance — seeing both the hard and the good.`,
            `Think of it like this: gratitude doesn't cancel out pain. It sits alongside it, and reminds you that even on hard days, there is something — however small — that is still good.`,
          ],
          image:        '/explorer-assets/inner-world/l08-three-gifts.png',
          imageCaption: `Gratitude and hard feelings can exist at the same time — that's balance`,
          vocab: [
            { word: 'acknowledge', definition: `To accept and recognise that something is real or true — gratitude doesn't mean ignoring hard things, it means seeing them clearly and still finding good.`, audioPrompt: `Acknowledge — to accept and recognise that something is real or true. Gratitude doesn't mean ignoring hard things, it means seeing them clearly and still finding good.` },
            { word: 'balance',     definition: `Holding two things at once — like recognising that something is hard and still finding something to be grateful for.`,                               audioPrompt: `Balance — holding two things at once, like recognising that something is hard and still finding something to be grateful for.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap a gratitude card, then tap whether it's vague or specific!`,
          guideText:     `The secret to gratitude journaling is specificity! Each card shows something someone is grateful for. Tap the card, then sort it — is it vague (general) or specific (a real detail)? Specific is what makes your brain light up!`,
          columnHeaders: ['The Gratitude', `Vague or Specific?`],
          items: [
            { image: 'l08-game-myfamily.png', label: `I'm grateful for my family.`,                                  correctMatch: 'vague',    objectPosition: 'center 50%', matchPhrase: `That's a lovely thought — but making it specific is what activates your brain's reward system!` },
            { image: 'l08-game-myfood.png',   label: `I'm grateful for food.`,                                       correctMatch: 'vague',    objectPosition: 'center 50%', matchPhrase: `Getting warmer! Try adding a specific detail — what was the most delicious bite you had today?` },
            { image: 'l08-game-momlaugh.png', label: `I'm grateful for the way Mum laughed at breakfast.`,           correctMatch: 'specific', objectPosition: 'center 50%', matchPhrase: `Yes! That's specific gratitude — your brain's reward system lights up when you notice details like this!` },
            { image: 'l08-game-sunlight.png', label: `I'm grateful for the sunlight coming through my window.`,      correctMatch: 'specific', objectPosition: 'center 50%', matchPhrase: `Perfect! A tiny, specific detail — that's exactly what gratitude journaling is all about. Your brain loves it!` },
          ],
          buckets: [
            { id: 'vague',    label: `💭 Vague`,    color: '#F59E0B' },
            { id: 'specific', label: `✨ Specific`,  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about gratitude. Answer all 6 questions to earn your Gratitude Keeper badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the negativity bias?`,
              options:      [`The habit of complaining about everything`, `The brain's tendency to notice bad things more than good ones, inherited from our ancestors`, `Feeling negative all the time`, `A disease that causes sadness`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What did Dr. Robert Emmons' research on gratitude find?`,
              options:      [`Gratitude makes no difference to wellbeing`, `Grateful people have better sleep and feel more positive emotions`, `Only adults benefit from gratitude`, `Gratitude is harmful if practised too often`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Gratitude can help even when life feels hard.`,
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     `What brain chemical is released when you practise gratitude?`,
              options:      [`Adrenaline`, `Cortisol`, `Dopamine`, `Melatonin`],
              correctIndex: 2,
            },
            {
              format:       'fill-blank',
              question:     `Writing down ___ specific things you're grateful for each day is a proven happiness practice.`,
              options:      [`three`, `ten`, `one`, `seven`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why is it better to be specific in your gratitude journal?`,
              options:      [`Specific things are easier to write`, `Specific gratitude activates the brain's reward system more effectively`, `Vague gratitude is wrong`, `Being specific takes less time`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Wonderful work, {name}! You've just learned one of the most science-backed happiness practices in the world. Gratitude is a skill — and like all skills, it grows stronger with practice. Try this with your family tonight!`,
          familyAdventure: `Start a family gratitude jar — everyone writes one thing they're grateful for on a slip of paper each day. Read them aloud together at the end of the week. See who can be the most specific!`,
          creativePrompt:  `Take a slow breath and look around you. Find three things you're genuinely grateful for right now — they can be tiny: a warm room, a favourite colour you notice, the fact that you can read these words. Write them down as specifically as you can.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'gratitude-keeper',
          badgeName: `Gratitude Keeper`,
          message:   `Wonderful work, {name}! You've just learned one of the most science-backed happiness practices in the world. Gratitude is a skill — and like all skills, it grows stronger with practice. Sage is so grateful to be learning alongside you!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l08_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L8] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l08-negativity-bias.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l08-gratitude-rewires.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l08-three-gifts.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L8] negativity-bias: ${r1.ok}, gratitude-rewires: ${r2.ok}, three-gifts: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L8] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l08_screens;
