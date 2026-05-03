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

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `Who Is the Watcher?`,
          paragraphs: [
            `All through this curriculum, we've been practising watching thoughts and feelings come and go. But here's the question we haven't asked yet: who is the watcher? When you notice "I'm having an angry thought," there is a "you" that noticed it. That observer — that witnessing awareness — is always there, always calm, always present.`,
            `Philosophers and scientists have explored this idea for thousands of years. In ancient wisdom traditions, this observer is called the "witness self" or pure awareness — the unchanging part of you beneath all your changing thoughts, feelings, and experiences.`,
            `Psychologists also recognise this observer self as a key element of psychological flexibility — the ability to hold difficult experiences without being overwhelmed by them. Ancient wisdom and modern science arrive at the same place: there is something in you that watches without being swept away.`,
          ],
          image:        '/explorer-assets/inner-world/l20-the-witness.png',
          imageCaption: `The witness self — the quiet, unchanging awareness beneath every thought and feeling`,
          vocab: [
            { word: 'witness self',  definition: `The part of you that observes your thoughts and feelings without becoming them — always calm, always present, the unchanging awareness beneath all experiences.`,                         audioPrompt: `Witness self — the part of you that observes your thoughts and feelings without becoming them. Always calm, always present, the unchanging awareness beneath all experiences.` },
            { word: 'observer self', definition: `Another name for the witness self — used in psychology to describe the stable, aware part of you that can hold difficult experiences without being overwhelmed by them.`,               audioPrompt: `Observer self — another name for the witness self, used in psychology to describe the stable, aware part of you that can hold difficult experiences without being overwhelmed by them.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `You Are the Sky, Not the Storm`,
          paragraphs: [
            `Here is the most important thing to understand: you have thoughts, but you are not your thoughts. You have feelings, but you are not your feelings. These things move through you — like weather moving through the sky.`,
            `The sky doesn't become the storm. When dark clouds arrive, the sky holds them — but it isn't changed by them. When they pass, the sky is still there, exactly as it was. The storm was never the sky.`,
            `You are the sky. You are the awareness that holds all experiences — joy, sadness, excitement, fear, confusion, peace. They all pass through. The awareness that holds them is you — steady, spacious, and always there.`,
          ],
          image:        '/explorer-assets/inner-world/l20-sky-and-clouds.png',
          imageCaption: `The sky holds every storm without becoming one — and so do you`,
          vocab: [
            { word: 'pure awareness',          definition: `The open, witnessing consciousness that holds all thoughts and feelings without being defined by any of them — like the sky that holds all weather without becoming it.`, audioPrompt: `Pure awareness — the open, witnessing consciousness that holds all thoughts and feelings without being defined by any of them, like the sky that holds all weather without becoming it.` },
            { word: 'psychological flexibility', definition: `The ability to hold difficult thoughts and feelings without being overwhelmed by them — supported by the observer self, which stays calm even during hard experiences.`,   audioPrompt: `Psychological flexibility — the ability to hold difficult thoughts and feelings without being overwhelmed by them, supported by the observer self, which stays calm even during hard experiences.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `Your Deepest Home`,
          paragraphs: [
            `This understanding is both humbling and liberating. Humbling, because it means no single thought or feeling defines you — you are so much bigger than any of them. Liberating, because no matter what storm passes through, the aware and watching part of you is always there. It was never damaged. It never left.`,
            `It is your deepest home. The one place that is always safe, always still, always you — no matter what is happening on the surface.`,
            `Try this now: sit quietly for a moment. Notice a thought that appears. Then ask — who is noticing this thought? Don't try to answer with another thought. Just rest in the awareness that is noticing. Stay there for thirty seconds. This is you — the witness. The part that was here before this lesson started, and will be here long after.`,
          ],
          image:        '/explorer-assets/inner-world/l20-i-am-presence.png',
          imageCaption: `Beneath every thought and every storm — the witness is always home`,
          vocab: [
            { word: 'the sky metaphor', definition: `The idea that you are like the sky — vast, steady, and unchanged by the weather (thoughts and feelings) that passes through you.`,                                                      audioPrompt: `The sky metaphor — the idea that you are like the sky, vast, steady, and unchanged by the weather of thoughts and feelings that passes through you.` },
            { word: 'deepest home',     definition: `A way of describing the witness self — the part of you that is always calm and present, no matter what is happening, the most stable and safe part of who you are.`,               audioPrompt: `Deepest home — a way of describing the witness self, the part of you that is always calm and present, no matter what is happening, the most stable and safe part of who you are.` },
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
    fetch('/explorer-assets/inner-world/l20-the-witness.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l20-sky-and-clouds.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l20-i-am-presence.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L20] the-witness: ${r1.ok}, sky-and-clouds: ${r2.ok}, i-am-presence: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L20] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l20_screens;
