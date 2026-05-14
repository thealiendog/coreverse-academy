// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 19
// "Visualization: Seeing My Success"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l19_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-19',
      title:     `Visualization: Seeing My Success`,
      duration:  14,
      xpReward:  50,
      badge:     'dream-builder',
      badgeName: `Dream Builder`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hi, {name}! Today we're exploring a tool used by Olympic athletes, concert pianists, and astronauts — visualization. It's the practice of imagining your success in vivid detail before it happens. Have you ever imagined something going wrong over and over — and then felt nervous? That's accidental negative visualization. Today we're going to do the opposite on purpose. Ready?`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Visualization?`,
          paragraphs: [
            `Visualization is the deliberate practice of imagining a future event going well — in detail, using all your senses.`,
            `Olympic athletes have used this technique for decades. Skiers visualize their entire run before they push off. Gymnasts rehearse every movement before they touch the mat.`,
          ],
          image:        '/explorer-assets/inner-world/l19-s1-mental-rehearsal.png',
          imageCaption: `Visualization is mental rehearsal — imagining the success before it happens`,
          vocab: [
            { word: 'visualization', definition: `Deliberately imagining a future event going well — in detail, with all your senses. It's mental rehearsal.`, audioPrompt: `Visualization — deliberately imagining a future event going well, in detail, with all your senses. It's mental rehearsal.` },
            { word: 'rehearse',      definition: `To practice something in advance, so you're ready when it's time to do it for real. Visualization is mental rehearsal.`, audioPrompt: `Rehearse — to practice something in advance, so you're ready when it's time to do it for real. Visualization is mental rehearsal.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `We All Do It (Wrong)`,
          paragraphs: [
            `Most people do the opposite without realising it — replaying worst-case scenarios and feeling the anxiety that follows.`,
            `Visualization flips that pattern deliberately. Instead of accidentally training your brain for failure, you intentionally train it for success.`,
          ],
          image:        '/explorer-assets/inner-world/l19-s2-two-paths.png',
          imageCaption: `Worst-case visualization trains you for failure. Success visualization trains you for success.`,
          vocab: [
            { word: 'worst-case', definition: `The most unwanted version of what might happen. Most people accidentally visualize the worst-case — visualization flips this on purpose.`, audioPrompt: `Worst-case — the most unwanted version of what might happen. Most people accidentally visualize the worst-case. Visualization flips this on purpose.` },
            { word: 'deliberate', definition: `Done on purpose, with intention — different from accidental. Visualization is deliberate; worst-case thinking is usually accidental.`, audioPrompt: `Deliberate — done on purpose, with intention. Different from accidental. Visualization is deliberate; worst-case thinking is usually accidental.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Your Brain Doesn't Know the Difference`,
          paragraphs: [
            `When you vividly imagine performing an action, your brain activates many of the same neural pathways it would use if you were actually doing it.`,
            `The brain responds to vivid imagination almost as if the event were real. Imagination is real training.`,
          ],
          image:        '/explorer-assets/inner-world/l19-s3-brain-imagined.png',
          imageCaption: `Your brain fires the same pathways for vivid imagination as it does for real action`,
          vocab: [
            { word: 'vivid',       definition: `Clear, bright, full of sensory detail. Vivid imagination feels almost real — and that's why it trains the brain.`, audioPrompt: `Vivid — clear, bright, full of sensory detail. Vivid imagination feels almost real, and that's why it trains the brain.` },
            { word: 'imagination', definition: `Your mind's ability to create scenes that aren't happening right now. Vivid imagination can actually train your brain like real practice.`, audioPrompt: `Imagination — your mind's ability to create scenes that aren't happening right now. Vivid imagination can actually train your brain like real practice.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Piano Study`,
          paragraphs: [
            `In one famous study, participants who only visualized playing piano scales — never touching a piano — showed measurable improvement in skill.`,
            `Their improvement was almost equal to the group that physically practiced. Imagination, done vividly enough, trains the brain.`,
          ],
          image:        '/explorer-assets/inner-world/l19-s4-piano-study.png',
          imageCaption: `A famous study showed visualization alone improves skill — almost as much as real practice`,
          vocab: [
            { word: 'study',       definition: `A careful test scientists run to learn what's true. The piano study showed visualization improves real skill.`, audioPrompt: `Study — a careful test scientists run to learn what's true. The piano study showed visualization improves real skill.` },
            { word: 'improvement', definition: `Getting better at something. Visualization can cause real improvement — even without physical practice.`, audioPrompt: `Improvement — getting better at something. Visualization can cause real improvement, even without physical practice.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Specific and Sensory`,
          paragraphs: [
            `Effective visualization is specific and sensory. Imagine the room, the sounds, the feel of your breath, your posture, the exact movements.`,
            `Include a moment when something goes slightly wrong — and see yourself recovering with grace. This prepares you for reality.`,
          ],
          image:        '/explorer-assets/inner-world/l19-s5-sensory-detail.png',
          imageCaption: `The more sensory detail you include, the more powerfully visualization trains your brain`,
          vocab: [
            { word: 'sensory',  definition: `Using your senses — sight, sound, smell, touch, taste. Sensory visualization is the most powerful kind.`, audioPrompt: `Sensory — using your senses: sight, sound, smell, touch, taste. Sensory visualization is the most powerful kind.` },
            { word: 'recovery', definition: `Bouncing back when something doesn't go perfectly. Include recovery in your visualization — it prepares you for real life.`, audioPrompt: `Recovery — bouncing back when something doesn't go perfectly. Include recovery in your visualization. It prepares you for real life.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Try It Now`,
          paragraphs: [
            `Think of something coming up — a test, a game, a presentation. Close your eyes.`,
            `Spend two minutes seeing yourself handling it calmly and well. Hear the sounds, feel the breath. See yourself succeed.`,
          ],
          image:        '/explorer-assets/inner-world/l19-s6-eyes-closed.png',
          imageCaption: `Close your eyes. Spend two minutes seeing yourself succeed.`,
          vocab: [
            { word: 'success',   definition: `Doing well at something you set out to do. Visualization helps your brain rehearse for success in advance.`, audioPrompt: `Success — doing well at something you set out to do. Visualization helps your brain rehearse for success in advance.` },
            { word: 'rehearsal', definition: `Practicing something in advance — like an actor preparing for a play. Visualization is mental rehearsal.`, audioPrompt: `Rehearsal — practicing something in advance, like an actor preparing for a play. Visualization is mental rehearsal.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it shows strong or weak visualization!`,
          guideText:     `Not all visualization is created equal. Strong visualization is specific, sensory, and paired with real effort. Weak visualization is vague, negative, or used as a shortcut instead of practice. Tap each card and sort it!`,
          columnHeaders: [`The Approach`, `Strong or Weak?`],
          items: [
            { image: 'l19-game-vivid.png',    label: `Imagining every detail: the room, the sounds, my breathing, and exactly how my hands will move.`,     correctMatch: 'strong', objectPosition: 'center 50%', matchPhrase: `That's powerful visualization! Specific, sensory, and process-focused. When you imagine the details vividly, your brain activates the same neural pathways as the real thing. That's genuine mental rehearsal.` },
            { image: 'l19-game-vague.png',    label: `Just thinking "I hope it goes well" without picturing any details.`,                                    correctMatch: 'weak',   objectPosition: 'center 50%', matchPhrase: `That's weak visualization — vague hoping doesn't train the brain. To make it powerful, get specific: the room, the sounds, your breath, your movements. Detail is everything.` },
            { image: 'l19-game-recovery.png', label: `Imagining one moment where something goes slightly wrong — and seeing myself handle it calmly.`,        correctMatch: 'strong', objectPosition: 'center 50%', matchPhrase: `Excellent technique! Imagining a small setback and recovering gracefully actually prepares you for reality better than imagining everything going perfectly. You're training your brain for what's real.` },
            { image: 'l19-game-skipit.png',   label: `Deciding to only visualize and skip actual practice entirely.`,                                         correctMatch: 'weak',   objectPosition: 'center 50%', matchPhrase: `Visualization enhances real practice — it doesn't replace it. Olympic athletes who visualize also put in thousands of hours of real training. Both together is the winning combination.` },
          ],
          buckets: [
            { id: 'weak',   label: `💭 Weak Visualization`,   color: '#F59E0B' },
            { id: 'strong', label: `🌟 Strong Visualization`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about visualization. Answer all 6 questions to earn your Dream Builder badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What happens in the brain during vivid visualization of an action?`,
              options:      [`Nothing measurable occurs`, `Many of the same neural pathways activate as during the actual action`, `Only memories are affected`, `Visualization weakens the brain's response to real actions`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What did the famous piano practice study show?`,
              options:      [`Visualization is always better than physical practice`, `Participants who only visualized playing showed almost equal improvement to those who physically practiced`, `Visualization had no effect on piano skill`, `Only professional musicians can benefit from visualization`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What makes visualization most effective?`,
              options:      [`Making it as vague and general as possible`, `Focusing only on everything going perfectly with no challenges`, `Making it specific, sensory, and including moments of recovery from small setbacks`, `Visualizing for hours at a time`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is the key difference between accidental negative visualization and intentional positive visualization?`,
              options:      [`Negative visualization is harmless`, `Intentional positive visualization is done deliberately and in detail, building neural confidence`, `They have the same effect on the brain`, `Accidental visualization is more powerful`],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     `Many performers visualize right before they step out — as a final mental ___ that primes the body and mind.`,
              options:      [`rehearsal`, `routine`, `relaxation`, `reward`],
              correctIndex: 0,
            },
            {
              format:        'true-false',
              question:      `Visualization works best when paired with real practice, not as a replacement for it.`,
              correctAnswer: true,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Phenomenal work, {name}! You've just learned to use your imagination as a training ground for your future. Every time you visualize your success with detail and feeling, your brain gets just a little more ready for the real thing. Try this with your family tonight!`,
          familyAdventure: `Before a challenge this week — a test, a performance, a difficult conversation — each family member takes two minutes to visualize themselves handling it well. Afterwards, share what you imagined and how it felt. Notice whether the visualization affected your confidence going in.`,
          creativePrompt:  `Think of something coming up that you feel nervous about. Close your eyes and spend two minutes visualizing it going well. See the setting in vivid detail. Feel yourself calm and capable. Imagine one small challenge — and see yourself handling it with grace. Open your eyes and write down three details you noticed in your visualization.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'dream-builder',
          badgeName: `Dream Builder`,
          message:   `Phenomenal work, {name}! You've just learned to use your imagination as a training ground for your future. Every time you visualize your success with detail and feeling, your brain gets just a little more ready for the real thing. Sage can't wait to see what you build!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l19_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L19] Loaded: "Visualization: Seeing My Success" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l19-s1-mental-rehearsal.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l19-s2-two-paths.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l19-s3-brain-imagined.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l19-s4-piano-study.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l19-s5-sensory-detail.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l19-s6-eyes-closed.png',      { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L19] mental-rehearsal: ${r1.ok}, two-paths: ${r2.ok}, brain-imagined: ${r3.ok}, piano-study: ${r4.ok}, sensory-detail: ${r5.ok}, eyes-closed: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L19] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l19_screens;
