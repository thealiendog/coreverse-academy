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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Meditation?`,
          paragraphs: [
            `Meditation is simply the practice of training your attention. It's not about emptying your mind or sitting perfectly still.`,
            `It's not religious either — anyone can do it, no matter what they believe. Meditation is a brain skill, like any other one you can learn.`,
          ],
          image:        '/explorer-assets/inner-world/l09-s1-what-is-meditation.png',
          imageCaption: `Meditation is a skill anyone can practice — it trains your attention`,
          vocab: [
            { word: 'meditation', definition: `A practice of training your attention by focusing on one thing — like your breath — and gently coming back when your mind wanders.`, audioPrompt: `Meditation — a practice of training your attention by focusing on one thing, like your breath, and gently coming back when your mind wanders.` },
            { word: 'attention',  definition: `What your mind chooses to focus on at any moment. Attention is like a muscle — you can train it stronger.`,                          audioPrompt: `Attention — what your mind chooses to focus on at any moment. Attention is like a muscle. You can train it stronger.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Push-Ups for Your Brain`,
          paragraphs: [
            `Think of meditation like push-ups for your brain's attention system. You pick something to focus on — like your breath.`,
            `Your mind wanders (this is completely normal!), and you gently bring it back. Focus, wander, return. Every time you return, your attention gets stronger.`,
          ],
          image:        '/explorer-assets/inner-world/l09-s2-brain-pushups.png',
          imageCaption: `Focus, wander, return — that's the whole practice`,
          vocab: [
            { word: 'focus',      definition: `To pay close, steady attention to one thing — like the feeling of your breath going in and out.`,                                            audioPrompt: `Focus — to pay close, steady attention to one thing, like the feeling of your breath going in and out.` },
            { word: 'mental rep', definition: `Each time you notice your mind has wandered and gently return — just like a physical rep in exercise, it builds your attention muscle.`,    audioPrompt: `Mental rep — each time you notice your mind has wandered and gently return. Just like a physical rep in exercise, it builds your attention muscle.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Your Brain Actually Changes`,
          paragraphs: [
            `Neuroscientists have used brain scanners to study meditators. After just 8 weeks of practice, people show real changes in brain structure.`,
            `Eight weeks is enough to rewire how your brain works. The changes are visible on a scan, not just felt inside.`,
          ],
          image:        '/explorer-assets/inner-world/l09-s3-brain-changes.png',
          imageCaption: `After just 8 weeks of practice, the brain actually changes shape`,
          vocab: [
            { word: 'neuroscientist', definition: `A scientist who studies the brain and how it works — neuroscientists discovered that meditation changes brain structure.`,        audioPrompt: `Neuroscientist — a scientist who studies the brain and how it works. Neuroscientists discovered that meditation changes brain structure.` },
            { word: 'brain structure', definition: `The physical shape and organisation of the brain — regular meditation can make certain parts of the brain grow larger and stronger.`, audioPrompt: `Brain structure — the physical shape and organisation of the brain. Regular meditation can make certain parts of the brain grow larger and stronger.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Two Parts That Change`,
          paragraphs: [
            `The prefrontal cortex — the part of your brain that helps you think, make decisions, and focus — actually gets thicker. It grows stronger, like a muscle.`,
            `The amygdala — your brain's alarm system that fires when you feel stressed or scared — becomes less reactive. Meditation literally calms your inner alarm.`,
          ],
          image:        '/explorer-assets/inner-world/l09-s4-two-parts.png',
          imageCaption: `The thinking brain grows stronger, the alarm brain grows calmer`,
          vocab: [
            { word: 'prefrontal cortex', definition: `The part of your brain right behind your forehead. It helps you think, plan, and make good choices.`,                                audioPrompt: `Prefrontal cortex — the part of your brain right behind your forehead. It helps you think, plan, and make good choices.` },
            { word: 'amygdala',          definition: `The alarm part of your brain. Meditation makes it less reactive, so you feel calmer when stressful things happen.`,                  audioPrompt: `Amygdala — the alarm part of your brain. Meditation makes it less reactive, so you feel calmer when stressful things happen.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `How to Meditate`,
          paragraphs: [
            `The most studied form is mindfulness meditation. You focus on the sensations of breathing — the air coming in, the air going out.`,
            `When your mind wanders to thoughts, plans, or worries — and it WILL — you simply notice it has wandered and gently return to the breath.`,
          ],
          image:        '/explorer-assets/inner-world/l09-s5-breath-anchor.png',
          imageCaption: `Your breath is the anchor — you can always come back to it`,
          vocab: [
            { word: 'mindfulness meditation', definition: `The most studied kind of meditation. You focus on your breath and gently return whenever your mind wanders.`,          audioPrompt: `Mindfulness meditation — the most studied kind of meditation. You focus on your breath and gently return whenever your mind wanders.` },
            { word: 'anchor',                  definition: `Something you return to whenever your mind wanders — in meditation, your breath is your anchor.`,                        audioPrompt: `Anchor — something you return to whenever your mind wanders. In meditation, your breath is your anchor.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `It's Proven Science`,
          paragraphs: [
            `Research shows regular meditation improves focus, reduces anxiety, improves sleep, and even strengthens the immune system.`,
            `Apps, schools, and sports teams around the world now teach it. This isn't an ancient mystery — it's proven science.`,
          ],
          image:        '/explorer-assets/inner-world/l09-s6-proven-science.png',
          imageCaption: `Meditation is proven science — not an ancient mystery`,
          vocab: [
            { word: 'anxiety',        definition: `A feeling of worry or nervousness — regular meditation is one of the most effective tools for reducing anxiety.`,           audioPrompt: `Anxiety — a feeling of worry or nervousness. Regular meditation is one of the most effective tools for reducing anxiety.` },
            { word: 'immune system',  definition: `Your body's defence against illness and infection — research shows meditation can strengthen it over time.`,                  audioPrompt: `Immune system — your body's defence against illness and infection. Research shows meditation can strengthen it over time.` },
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
    fetch('/explorer-assets/inner-world/l09-s1-what-is-meditation.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l09-s2-brain-pushups.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l09-s3-brain-changes.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l09-s4-two-parts.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l09-s5-breath-anchor.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l09-s6-proven-science.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L9] what-is-meditation: ${r1.ok}, brain-pushups: ${r2.ok}, brain-changes: ${r3.ok}, two-parts: ${r4.ok}, breath-anchor: ${r5.ok}, proven-science: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L9] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l09_screens;
