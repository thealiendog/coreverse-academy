// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 9
// "What Is Meditation and Why Does It Work?"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l09_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-09',
      title:     `What Is Meditation and Why Does It Work?`,
      duration:  15,
      xpReward:  50,
      badge:     'still-explorer',
      badgeName: `Still Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}! Today we're going to demystify one of the oldest and most powerful practices in human history — meditation. You might have heard of it, but today you'll understand exactly why it works and try it for yourself. Ready to train your mind?`,
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `What Meditation Actually Is`,
          paragraphs: [
            `Meditation is simply the practice of training your attention. It's not about emptying your mind or sitting perfectly still — and it's not religious.`,
            `Think of it like push-ups for your brain's attention system. You pick something to focus on, your mind wanders (this is completely normal!), and you gently bring it back.`,
            `That's it. The whole practice is in that cycle — focus, wander, return. Every single time you return, you're making your attention stronger.`,
          ],
          image:        '/explorer-assets/inner-world/l09-attention-training.png',
          imageCaption: `Meditation is attention training — focus, wander, return`,
          vocab: [
            { word: 'meditation', definition: `The practice of training your attention — choosing something to focus on, noticing when your mind wanders, and gently returning.`,       audioPrompt: `Meditation — the practice of training your attention, choosing something to focus on, noticing when your mind wanders, and gently returning.` },
            { word: 'attention',  definition: `The ability to focus your mind on one thing at a time — meditation is like exercise that makes this ability stronger.`,                  audioPrompt: `Attention — the ability to focus your mind on one thing at a time. Meditation is like exercise that makes this ability stronger.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `What Meditation Does to Your Brain`,
          paragraphs: [
            `Neuroscientists have used brain scanners to study meditators, and the results are extraordinary. Even after just 8 weeks of regular practice, people show measurable changes in brain structure.`,
            `The prefrontal cortex — the part of the brain responsible for thinking, decision-making, and focus — actually gets thicker. It grows stronger, like a muscle being trained.`,
            `The amygdala — your brain's alarm system that fires when you feel stressed or scared — becomes less reactive. Meditation literally calms your inner alarm.`,
          ],
          image:        '/explorer-assets/inner-world/l09-brain-changes.png',
          imageCaption: `8 weeks of meditation — the prefrontal cortex grows, the amygdala calms`,
          vocab: [
            { word: 'prefrontal cortex', definition: `The front part of the brain responsible for thinking, decision-making, and focus — it gets physically thicker with regular meditation.`,  audioPrompt: `Prefrontal cortex — the front part of the brain responsible for thinking, decision-making, and focus. It gets physically thicker with regular meditation.` },
            { word: 'amygdala',          definition: `Your brain's alarm system — it fires when you sense danger or stress. Meditation makes it less reactive over time.`,                       audioPrompt: `Amygdala — your brain's alarm system that fires when you sense danger or stress. Meditation makes it less reactive over time.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `How to Meditate: The Anchor Breath`,
          paragraphs: [
            `One of the most studied forms is mindfulness meditation, where you focus on the sensations of breathing — the air coming in, the slight pause, the air going out. Your breath is your anchor.`,
            `When your mind wanders to thoughts, plans, or worries — and it will, that's completely normal — you simply notice it has wandered and gently return to the breath. Each time you return, you're doing a mental "rep." Your attention muscle gets stronger.`,
            `Research shows regular meditation improves focus, reduces anxiety, improves sleep, and even strengthens the immune system. Apps, schools, and sports teams around the world now teach it. This is not an ancient mystery — it's proven science.`,
          ],
          image:        '/explorer-assets/inner-world/l09-anchor-breath.png',
          imageCaption: `Your breath is your anchor — return to it whenever your mind wanders`,
          vocab: [
            { word: 'mindfulness', definition: `Paying full attention to what's happening right now — noticing thoughts, feelings, and sensations without judging them.`,                    audioPrompt: `Mindfulness — paying full attention to what's happening right now, noticing thoughts, feelings, and sensations without judging them.` },
            { word: 'mental rep',  definition: `Each time you notice your mind has wandered and return your attention — just like a physical rep in exercise, it builds your focus muscle.`, audioPrompt: `Mental rep — each time you notice your mind has wandered and return your attention. Just like a physical rep in exercise, it builds your focus muscle.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap a card, then tap whether it's a myth or a fact about meditation!`,
          guideText:     `There are lots of myths about meditation — let's bust them! Each card says something about meditation. Tap the card, then sort it: is it a myth (not true) or a fact (really true)?`,
          columnHeaders: [`The Statement`, `Myth or Fact?`],
          items: [
            { image: 'l09-game-emptymind.png',    label: `You have to empty your mind to meditate.`,           correctMatch: 'myth', objectPosition: 'center 50%', matchPhrase: `That's a myth! Mind-wandering is completely normal in meditation — the practice is returning, not emptying.` },
            { image: 'l09-game-religious.png',    label: `Meditation is a religious practice.`,                correctMatch: 'myth', objectPosition: 'center 50%', matchPhrase: `Myth! Meditation is mental exercise — like push-ups for your attention. Scientists study it in labs worldwide.` },
            { image: 'l09-game-brainchanges.png', label: `Regular meditation changes your brain structure.`,  correctMatch: 'fact', objectPosition: 'center 50%', matchPhrase: `Fact! After just 8 weeks, brain scans show the prefrontal cortex gets thicker. Your brain literally grows!` },
            { image: 'l09-game-wanderok.png',     label: `Your mind wandering during meditation is normal and okay.`, correctMatch: 'fact', objectPosition: 'center 50%', matchPhrase: `Fact! Every time you notice your mind has wandered and return — that's a mental rep. That's the whole practice!` },
          ],
          buckets: [
            { id: 'myth', label: `❌ Myth`, color: '#EF4444' },
            { id: 'fact', label: `✅ Fact`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about meditation. Answer all 6 questions to earn your Still Explorer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is meditation, in simple terms?`,
              options:      [`Emptying your mind of all thoughts`, `Training your attention by focusing, noticing when your mind wanders, and gently returning`, `Sleeping while sitting up`, `A religious practice only`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What happens in the brain after 8 weeks of regular meditation?`,
              options:      [`Nothing measurable`, `The brain shrinks slightly`, `The prefrontal cortex thickens and the amygdala becomes less reactive`, `Only dreams change`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `When your mind wanders during meditation, it means you're doing it wrong.`,
              correctAnswer: false,
            },
            {
              format:       'multiple-choice',
              question:     `What does the prefrontal cortex control?`,
              options:      [`Automatic reflexes only`, `Thinking, decision-making, and focus`, `Only memories`, `Just emotions`],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     `In meditation, each time you gently return your wandering attention is called a mental ___.`,
              options:      [`rep`, `break`, `step`, `pause`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What does mindfulness meditation typically focus on?`,
              options:      [`Counting to 100`, `The sensations of breathing`, `Imagining a peaceful place`, `Listening to music`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Incredible, {name}! You just meditated — and now you know the science behind why it works. Every single breath you return your attention to is making your mind stronger and calmer. Try this with your family tonight!`,
          familyAdventure: `Do a one-minute family meditation together: sit quietly, close your eyes, and just focus on your breath. Afterwards, share what you noticed — what did your mind wander to? How did it feel to return?`,
          creativePrompt:  `Let's meditate for two minutes right now. Sit comfortably, close your eyes or look softly at the floor. Focus on your breath — notice the air coming in through your nose, filling your belly, and flowing back out. When your mind wanders, gently come back. Don't judge the wandering — just return.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'still-explorer',
          badgeName: `Still Explorer`,
          message:   `Incredible, {name}! You just meditated — and now you know the science behind why it works. Every single breath you return your attention to is making your mind stronger and calmer. Sage is so proud of your courage to sit quietly with yourself!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l09_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L9] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l09-attention-training.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l09-brain-changes.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l09-anchor-breath.png',      { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L9] attention-training: ${r1.ok}, brain-changes: ${r2.ok}, anchor-breath: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L9] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l09_screens;
