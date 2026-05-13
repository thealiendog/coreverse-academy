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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Confidence Comes After`,
          paragraphs: [
            `Confidence is not a feeling that arrives before you act — it's a feeling that grows because you acted. Most people think they should wait until they feel ready.`,
            `But that day rarely comes. The truth is the opposite: action comes first, the confidence follows.`,
          ],
          image:        '/explorer-assets/inner-world/l11-s1-step-forward.png',
          imageCaption: `Action comes first — the confidence follows`,
          vocab: [
            { word: 'confidence', definition: `A quiet trust in yourself that grows every time you do something hard. Confidence is built, not born.`,                               audioPrompt: `Confidence — a quiet trust in yourself that grows every time you do something hard. Confidence is built, not born.` },
            { word: 'action',     definition: `Doing something even when you don't feel fully ready — action is the very first step that starts building confidence.`,              audioPrompt: `Action — doing something even when you don't feel fully ready. Action is the very first step that starts building confidence.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Real Confidence Is Built`,
          paragraphs: [
            `Real confidence is built by doing things while you're still scared or unsure. The feeling of being unsure doesn't disappear before you start.`,
            `Every time you do something that felt hard — even something tiny — your brain registers it: "I did that. I can do hard things."`,
          ],
          image:        '/explorer-assets/inner-world/l11-s2-built-by-doing.png',
          imageCaption: `Every small brave action becomes evidence — proof you can do hard things`,
          vocab: [
            { word: 'evidence', definition: `Proof of something that's true. Your own actions become evidence — proof to your brain that you really can do hard things.`,           audioPrompt: `Evidence — proof of something that's true. Your own actions become evidence, proof to your brain that you really can do hard things.` },
            { word: 'brave',    definition: `Doing something even when it feels scary or hard — bravery isn't the absence of fear, it's acting despite the fear.`,                 audioPrompt: `Brave — doing something even when it feels scary or hard. Bravery isn't the absence of fear, it's acting despite the fear.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Tiny Steps Forward`,
          paragraphs: [
            `Psychologists call this approach "successive approximation" — breaking a big, scary goal into tiny steps and doing them one at a time.`,
            `Each small step you complete adds more evidence to a new belief: "I can do hard things." That belief becomes your foundation.`,
          ],
          image:        '/explorer-assets/inner-world/l11-s3-tiny-steps.png',
          imageCaption: `Tiny steps add up — each one is a small triumph`,
          vocab: [
            { word: 'successive approximation', definition: `A fancy way of saying: break a big goal into tiny steps and do them one at a time. Each step gets you closer.`,         audioPrompt: `Successive approximation — a fancy way of saying: break a big goal into tiny steps and do them one at a time. Each step gets you closer.` },
            { word: 'foundation',               definition: `The solid base you build by collecting evidence. Every small brave action adds another brick to your confidence foundation.`, audioPrompt: `Foundation — the solid base you build by collecting evidence. Every small brave action adds another brick to your confidence foundation.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Evidence Journal`,
          paragraphs: [
            `An evidence journal supercharges this. Write down hard things you've done and challenges you've overcome.`,
            `When fear says "you can't do this," open your journal. Your brain can't argue with what it already knows you've done.`,
          ],
          image:        '/explorer-assets/inner-world/l11-s4-evidence-journal.png',
          imageCaption: `Your journal holds the proof — your brain can't argue with what it already did`,
          vocab: [
            { word: 'evidence journal', definition: `A notebook where you write down hard things you've done and challenges you've overcome — proof for your brain when fear tries to tell you that you can't.`, audioPrompt: `Evidence journal — a notebook where you write down hard things you've done and challenges you've overcome. It's proof for your brain when fear tries to tell you that you can't.` },
            { word: 'fear',             definition: `A feeling that tries to stop you from acting — but your evidence journal gives your brain proof that fear has been wrong before.`,                         audioPrompt: `Fear — a feeling that tries to stop you from acting. Your evidence journal gives your brain proof that fear has been wrong before.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Reframe the Flutter`,
          paragraphs: [
            `When you face a new challenge, your heart beats faster and your palms might sweat. For years, scientists called this anxiety to overcome.`,
            `But newer research shows: naming this sensation "excitement" instead of "nervousness" actually improves performance. The body feels the same — only the label changes.`,
          ],
          image:        '/explorer-assets/inner-world/l11-s5-reframe-flutter.png',
          imageCaption: `Same flutter — different label. The label changes how you perform.`,
          vocab: [
            { word: 'reframe',         definition: `To change the way you look at something — like swapping the label "nervous" for "excited" when your body feels the flutter.`,  audioPrompt: `Reframe — to change the way you look at something. Like swapping the label nervous for excited when your body feels the flutter.` },
            { word: 'stress response', definition: `Your body's automatic reaction to a challenge — racing heart, sweaty palms — that prepares you to act. You can label it as excitement.`, audioPrompt: `Stress response — your body's automatic reaction to a challenge, like a racing heart or sweaty palms. It prepares you to act, and you can label it as excitement.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Try Saying It`,
          paragraphs: [
            `Next time you feel that flutter before something big, try saying: "I'm excited."`,
            `You're not lying — your body IS ready for action. You're just choosing the label that helps you perform at your best.`,
          ],
          image:        '/explorer-assets/inner-world/l11-s6-try-saying.png',
          imageCaption: `"I'm excited" — choose the label that helps you show up at your best`,
          vocab: [
            { word: 'label',      definition: `The word you choose to describe a feeling — changing a label from "nervous" to "excited" can actually change how you perform.`,    audioPrompt: `Label — the word you choose to describe a feeling. Changing a label from nervous to excited can actually change how you perform.` },
            { word: 'excitement', definition: `A feeling of energy and readiness — the same physical sensation as nervousness, but with a label that helps you perform better.`,   audioPrompt: `Excitement — a feeling of energy and readiness. It's the same physical sensation as nervousness, but with a label that helps you perform better.` },
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
    fetch('/explorer-assets/inner-world/l11-s1-step-forward.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l11-s2-built-by-doing.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l11-s3-tiny-steps.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l11-s4-evidence-journal.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l11-s5-reframe-flutter.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l11-s6-try-saying.png',      { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L11] step-forward: ${r1.ok}, built-by-doing: ${r2.ok}, tiny-steps: ${r3.ok}, evidence-journal: ${r4.ok}, reframe-flutter: ${r5.ok}, try-saying: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L11] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l11_screens;
