// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 20
// "Who Am I Beyond My Thoughts?"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// FINAL LESSON — Inner World subject complete 20/20
// ============================================================

const innerworld_explorer_l20_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-20',
      title:     `Who Am I Beyond My Thoughts?`,
      duration:  16,
      xpReward:  50,
      badge:     'inner-explorer',
      badgeName: `Inner Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}. We've come to the last and deepest lesson in the Inner World. Today we ask the biggest question of all: who are you, really? Not your name, not your age, not your thoughts — but the you that is aware of all those things. When you watch your thoughts, who is doing the watching? Have you ever wondered about that? Today, we find out.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Question`,
          paragraphs: [
            `All through this journey, we've been watching thoughts and feelings come and go. But here's a question we haven't asked yet: who is the watcher?`,
            `When you notice "I'm having an angry thought," there is a "you" that noticed it. Someone is doing the noticing.`,
          ],
          image:        '/explorer-assets/inner-world/l20-s1-the-watcher.png',
          imageCaption: `Who is the watcher? Someone in you is always doing the noticing.`,
          vocab: [
            { word: 'watcher',  definition: `The part of you that notices what you're thinking and feeling — the one who is always there, observing.`, audioPrompt: `Watcher — the part of you that notices what you're thinking and feeling. The one who is always there, observing.` },
            { word: 'noticing', definition: `Paying attention to something — like watching a thought arise, without becoming it.`, audioPrompt: `Noticing — paying attention to something, like watching a thought arise, without becoming it.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `The Observer Within`,
          paragraphs: [
            `That observer — that witnessing awareness — is always there. Always calm. Always present.`,
            `Ancient wisdom traditions call this the "witness self" or pure awareness. Modern psychologists call it the observer self. Same idea, different names.`,
          ],
          image:        '/explorer-assets/inner-world/l20-s2-observer-within.png',
          imageCaption: `Ancient wisdom and modern science meet here — the observer within you`,
          vocab: [
            { word: 'observer',  definition: `The part of you that watches your thoughts and feelings without being them. Always calm. Always there.`, audioPrompt: `Observer — the part of you that watches your thoughts and feelings without being them. Always calm. Always there.` },
            { word: 'awareness', definition: `The steady, alert part of you that knows what's happening inside — the witness behind every thought and feeling.`, audioPrompt: `Awareness — the steady, alert part of you that knows what's happening inside. The witness behind every thought and feeling.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `You Have Thoughts. You Are Not Thoughts.`,
          paragraphs: [
            `Here is the most important thing to understand: you HAVE thoughts, but you ARE NOT your thoughts.`,
            `You HAVE feelings, but you ARE NOT your feelings. These things move through you — they don't define you.`,
          ],
          image:        '/explorer-assets/inner-world/l20-s3-having-not-being.png',
          imageCaption: `You have thoughts and feelings — but they don't define who you are`,
          vocab: [
            { word: 'having',   definition: `Experiencing a thought or feeling without being it. You're HAVING anger, not BEING angry. The difference matters.`, audioPrompt: `Having — experiencing a thought or feeling without being it. You're having anger, not being angry. The difference matters.` },
            { word: 'identity', definition: `Who you are inside — separate from any thought or feeling. Your identity is bigger than what passes through you.`, audioPrompt: `Identity — who you are inside, separate from any thought or feeling. Your identity is bigger than what passes through you.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `You Are the Sky`,
          paragraphs: [
            `Thoughts and feelings move through you like weather moving through the sky. The sky doesn't become the storm.`,
            `When dark clouds arrive, the sky holds them but isn't changed by them. When they pass, the sky is still there. You are the sky.`,
          ],
          image:        '/explorer-assets/inner-world/l20-s4-sky-and-weather.png',
          imageCaption: `You are the sky. Thoughts and feelings are the weather passing through.`,
          vocab: [
            { word: 'weather', definition: `Changes in the sky — clouds, storms, sunshine — that come and go. Your thoughts and feelings are like weather.`, audioPrompt: `Weather — changes in the sky, clouds, storms, sunshine, that come and go. Your thoughts and feelings are like weather.` },
            { word: 'sky',     definition: `The vast, unchanging space that holds all weather. You are the sky — you hold thoughts and feelings without becoming them.`, audioPrompt: `Sky — the vast, unchanging space that holds all weather. You are the sky. You hold thoughts and feelings without becoming them.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Your Deepest Home`,
          paragraphs: [
            `This understanding is both humbling and liberating. No single thought or feeling defines you — you are so much bigger than any one of them.`,
            `No matter what storm passes through, the awareness that watches is always there. It was never damaged. It never left.`,
          ],
          image:        '/explorer-assets/inner-world/l20-s5-vast-and-free.png',
          imageCaption: `No matter what passes through, the watching awareness in you is always home`,
          vocab: [
            { word: 'humbling',   definition: `Feeling small in a beautiful way. Realizing you are bigger than any single thought is humbling — and freeing.`, audioPrompt: `Humbling — feeling small in a beautiful way. Realizing you are bigger than any single thought is humbling, and freeing.` },
            { word: 'liberating', definition: `Setting you free. Knowing no thought or feeling defines you is liberating — you don't have to carry them as identity.`, audioPrompt: `Liberating — setting you free. Knowing no thought or feeling defines you is liberating. You don't have to carry them as identity.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Try It Now`,
          paragraphs: [
            `Sit quietly for a moment. Notice a thought that appears. Then ask: who is noticing this thought?`,
            `Don't answer with another thought. Just rest in the awareness that is noticing. Stay there for thirty seconds. This is you — the witness.`,
          ],
          image:        '/explorer-assets/inner-world/l20-s6-resting-in-awareness.png',
          imageCaption: `Just rest in the awareness that is noticing. This is you — the witness.`,
          vocab: [
            { word: 'rest',     definition: `To stop trying and just be. In this practice, rest in awareness — don't grasp for an answer, just notice.`, audioPrompt: `Rest — to stop trying and just be. In this practice, rest in awareness. Don't grasp for an answer, just notice.` },
            { word: 'presence', definition: `Simply being here, aware, without doing anything. Presence is what you find when you rest in awareness.`, audioPrompt: `Presence — simply being here, aware, without doing anything. Presence is what you find when you rest in awareness.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's something passing through you — or the witness itself!`,
          guideText:     `Remember: you are the sky, not the weather. Some things pass through you — thoughts, feelings, experiences. And some things ARE you — the quiet witnessing awareness that holds it all. Tap each card and sort it!`,
          columnHeaders: [`What Is It?`, `Sky or Weather?`],
          items: [
            { image: 'l20-game-anger.png',    label: `A wave of anger that comes and then slowly fades away.`,             correctMatch: 'passing', objectPosition: 'center 50%', matchPhrase: `Anger is weather — it moves through you like a cloud through the sky. You feel it, you hold it, but you are not it. The part of you that noticed the anger is the witness — and it's always calm.` },
            { image: 'l20-game-noticing.png', label: `The part of you that notices when you're feeling angry.`,            correctMatch: 'witness', objectPosition: 'center 50%', matchPhrase: `That's the witness! The part that notices your anger isn't angry itself — it's the calm sky holding the weather. That witnessing awareness is always there, always present, always you.` },
            { image: 'l20-game-worry.png',    label: `A worried thought that keeps replaying in your head.`,              correctMatch: 'passing', objectPosition: 'center 50%', matchPhrase: `Thoughts are weather too — they come, they replay, they fade. The witness doesn't worry. It just notices. You are not the worried thought — you are the one who can see it.` },
            { image: 'l20-game-stillness.png', label: `The quiet awareness that is always watching, even right now.`,     correctMatch: 'witness', objectPosition: 'center 50%', matchPhrase: `That's it — the witness, the observer self, your deepest home. It was here before this lesson began and it will be here long after. Always calm. Always you. This is what you've been building toward all 20 lessons.` },
          ],
          buckets: [
            { id: 'passing', label: `☁️ Passing Through`, color: '#F59E0B' },
            { id: 'witness', label: `🌤 The Witness`,     color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! This is the final quiz of the Inner World. Answer all 6 questions to earn your Inner Explorer badge — and complete the full journey!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the "observer self" or "witness self"?`,
              options:      [`The loudest thought in your head`, `The unchanging awareness beneath all thoughts and feelings — the part of you that notices everything`, `A character in a story`, `A part of the brain scientists can see on a scan`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does "you have thoughts but you are not your thoughts" mean?`,
              options:      [`Thoughts don't matter at all`, `Your identity is not defined by any single thought — you are the awareness that holds them`, `You should ignore your thoughts completely`, `Only bad thoughts are part of you`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the sky metaphor meant to illustrate?`,
              options:      [`You should spend more time outdoors`, `Just as the sky holds weather without becoming it, you hold experiences without being defined by them`, `Clouds are like happy thoughts`, `Weather is unpredictable, like feelings`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why is understanding the observer self described as liberating?`,
              options:      [`It means you never have to feel difficult emotions`, `It means that no matter what passes through — any thought or feeling — the calm, aware part of you is always there`, `It makes you feel superior to others`, `It removes all anxiety permanently`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `No matter how difficult a thought or feeling is, the witnessing part of you remains calm and present.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `In ancient wisdom traditions, the observing part of you is called the "___ self" or pure awareness.`,
              options:      [`witness`, `thinking`, `feeling`, `dreaming`],
              correctIndex: 0,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `You've done it, {name} — all 20 lessons of the Inner World. You now carry within you one of the deepest understandings a person can have: that beneath every thought, every feeling, every storm — there is a quiet, aware, unshakeable you. Sage has been so honoured to walk this path with you. Try this final adventure with your family tonight!`,
          familyAdventure: `Sit together in silence for two minutes. Afterwards, each person shares: "I noticed I was thinking about..." Then discuss: who was it that was doing the noticing? See if you can find the witness together — the quiet awareness underneath the thoughts.`,
          creativePrompt:  `Sit quietly for a moment. Notice a thought that appears. Then ask: who is noticing this thought? Don't try to answer with another thought — just rest in the awareness that is doing the noticing. Stay there for thirty seconds. Afterwards, write one sentence about what you noticed. This is you — the witness. The part that was here before lesson one, and will be here your whole life.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'inner-explorer',
          badgeName: `Inner Explorer`,
          message:   `You've done it, {name} — all 20 lessons of the Inner World. You now carry within you one of the deepest understandings a person can have: that beneath every thought, every feeling, every storm — there is a quiet, aware, unshakeable you. Sage has been so honoured to walk this path with you. You are extraordinary.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l20_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L20] Loaded: "Who Am I Beyond My Thoughts?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions — INNER WORLD COMPLETE 20/20`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l20-s1-the-watcher.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l20-s2-observer-within.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l20-s3-having-not-being.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l20-s4-sky-and-weather.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l20-s5-vast-and-free.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l20-s6-resting-in-awareness.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L20] the-watcher: ${r1.ok}, observer-within: ${r2.ok}, having-not-being: ${r3.ok}, sky-and-weather: ${r4.ok}, vast-and-free: ${r5.ok}, resting-in-awareness: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L20] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l20_screens;
