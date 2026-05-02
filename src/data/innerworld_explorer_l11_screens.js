// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 11
// "Building Confidence One Step at a Time"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l11_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-11',
      title:     `Building Confidence One Step at a Time`,
      duration:  14,
      xpReward:  50,
      badge:     'courage-builder',
      badgeName: `Courage Builder`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}! Today we're tackling a big question: where does confidence actually come from? You might think some people are just born confident — but the truth is so much more exciting than that. Confidence is built, one small step at a time. Ready to find out how?`,
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `Confidence Comes After the Action`,
          paragraphs: [
            `Confidence is not a feeling that arrives before you act — it's a feeling that grows because you acted. Most people think "I'll start when I feel confident enough." But that day never comes.`,
            `Real confidence is built by doing things while you're still scared or unsure. The action comes first. The confidence follows.`,
            `Every time you do something that felt hard — even something tiny — your brain registers it as evidence: "I did that. I can do hard things." And that evidence is what confidence is actually made of.`,
          ],
          image:        '/explorer-assets/inner-world/l11-action-first.png',
          imageCaption: `Action first, confidence second — that's how it really works`,
          vocab: [
            { word: 'confidence', definition: `A belief in your own ability to handle challenges — it's built by taking action, not by waiting until you feel ready.`,              audioPrompt: `Confidence — a belief in your own ability to handle challenges. It's built by taking action, not by waiting until you feel ready.` },
            { word: 'evidence',   definition: `Proof that something is true — in confidence-building, evidence is the record of hard things you've already done.`,                 audioPrompt: `Evidence — proof that something is true. In confidence-building, evidence is the record of hard things you've already done.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `Tiny Steps Build Big Courage`,
          paragraphs: [
            `Psychologists call this approach "successive approximation" — breaking a big, scary goal into tiny steps and doing them one at a time. Each small step you complete adds more evidence to a new belief: "I can do hard things."`,
            `This evidence is more powerful than any pep talk. Because it's not an opinion — it's your own lived experience. Your brain can't argue with what it already knows you've done.`,
            `An evidence journal supercharges this. Write down hard things you've done and challenges you've overcome. When fear says "you can't do this," open your journal and remind your brain of all the times it was wrong. Confidence has a memory — you just have to keep feeding it.`,
          ],
          image:        '/explorer-assets/inner-world/l11-tiny-steps.png',
          imageCaption: `Tiny steps + evidence journal — the formula for unshakable confidence`,
          vocab: [
            { word: 'successive approximation', definition: `Breaking a big, scary goal into tiny, manageable steps and completing them one at a time to build confidence gradually.`,  audioPrompt: `Successive approximation — breaking a big, scary goal into tiny, manageable steps and completing them one at a time to build confidence gradually.` },
            { word: 'evidence journal',          definition: `A record of hard things you've done and challenges you've overcome — proof for your brain when fear tries to tell you that you can't.`, audioPrompt: `Evidence journal — a record of hard things you've done and challenges you've overcome, proof for your brain when fear tries to tell you that you can't.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `Nervous or Excited? You Decide.`,
          paragraphs: [
            `When you face a new challenge, your brain triggers a stress response — heart beats faster, palms might sweat. For a long time, scientists thought this was just anxiety to overcome.`,
            `But newer research shows something remarkable: naming this sensation "excitement" instead of "nervousness" actually improves performance. The physical sensation is identical — only the label changes.`,
            `So next time you feel that flutter before something big, try saying: "I'm excited." You're not lying — your body is ready for action. You're just choosing the label that helps you perform at your best.`,
          ],
          image:        '/explorer-assets/inner-world/l11-excitement-reframe.png',
          imageCaption: `Same feeling, different label — "I'm excited" unlocks better performance`,
          vocab: [
            { word: 'stress response', definition: `Your body's automatic reaction to a challenge — racing heart, sweaty palms — that prepares you for action. It can be labelled as excitement instead of fear.`, audioPrompt: `Stress response — your body's automatic reaction to a challenge, like a racing heart or sweaty palms. It prepares you for action and can be labelled as excitement.` },
            { word: 'reframe',         definition: `To look at the same thing in a new way — like calling nervousness "excitement" to help your brain perform better.`,                                          audioPrompt: `Reframe — to look at the same thing in a new way, like calling nervousness excitement to help your brain perform better.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap a card, then tap whether it builds or blocks confidence!`,
          guideText:     `Each card shows a thought or action. Some things build confidence — and some things block it. Tap the card, then sort it. Remember: confidence comes from doing, not waiting!`,
          columnHeaders: [`The Thought or Action`, `Builder or Blocker?`],
          items: [
            { image: 'l11-game-waitready.png', label: `I'll try it when I feel ready.`,            correctMatch: 'blocker', objectPosition: 'center 50%', matchPhrase: `That's a confidence blocker! Waiting for readiness means waiting forever — confidence comes from doing, not waiting.` },
            { image: 'l11-game-tooscary.png',  label: `This is too scary — I give up.`,            correctMatch: 'blocker', objectPosition: 'center 50%', matchPhrase: `Confidence blocker! Break it into a tinier step. Even one tiny action builds evidence your brain can use.` },
            { image: 'l11-game-tinystep.png',  label: `I'll do just one small step today.`,        correctMatch: 'builder', objectPosition: 'center 50%', matchPhrase: `Confidence builder! One small step is all it takes to start. That step adds evidence: "I can do hard things!"` },
            { image: 'l11-game-journal.png',   label: `I wrote down a hard thing I did today.`,    correctMatch: 'builder', objectPosition: 'center 50%', matchPhrase: `Perfect confidence builder! Your evidence journal is your brain's proof — and proof beats fear every time!` },
          ],
          buckets: [
            { id: 'blocker', label: `🚧 Confidence Blocker`, color: '#EF4444' },
            { id: 'builder', label: `🌟 Confidence Builder`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about building confidence. Answer all 6 questions to earn your Courage Builder badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Where does real confidence come from?`,
              options:      [`Being born naturally confident`, `Waiting until you feel ready`, `Acting even when you're scared, and building evidence over time`, `Watching confident people on television`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is "successive approximation"?`,
              options:      [`Being approximately confident`, `Breaking a big goal into tiny, manageable steps`, `Only doing things you're already good at`, `Comparing yourself to others`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Confidence is built by doing things, even when you feel scared.`,
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     `What does newer research say about the stress response before a challenge?`,
              options:      [`It always means danger`, `Calling it "excitement" instead of "nervousness" can actually improve performance`, `You should eliminate it completely`, `It only helps adults`],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     `An evidence journal helps confidence by keeping a record of hard things you've ___.`,
              options:      [`done`, `avoided`, `feared`, `forgotten`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is the most important thing about step one when building toward a big goal?`,
              options:      [`It should be impressive enough to show others`, `It should be so small it feels almost easy to start`, `It should be the hardest step`, `It should require someone else's help`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `You did it, {name}! You've just understood the real secret of confidence — it's built by doing, not by waiting. Every small step you take from now on is adding to your foundation. Try this with your family tonight!`,
          familyAdventure: `Each person shares one small brave thing they could do this week. At the end of the week, share what happened — celebrate the attempt, no matter the outcome. The trying is what builds confidence, not the result.`,
          creativePrompt:  `Think of something you want to do but feel nervous about. Break it into three tiny steps — so small that the first one feels almost easy. Write them down. Now circle step one and commit to doing just that. Small wins are the building blocks of unshakable confidence.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'courage-builder',
          badgeName: `Courage Builder`,
          message:   `You did it, {name}! You've just understood the real secret of confidence — it's built by doing, not by waiting. Every small step you take from now on is adding to your foundation. Sage is so proud of your bravery!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l11_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L11] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l11-action-first.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l11-tiny-steps.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l11-excitement-reframe.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L11] action-first: ${r1.ok}, tiny-steps: ${r2.ok}, excitement-reframe: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L11] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l11_screens;
