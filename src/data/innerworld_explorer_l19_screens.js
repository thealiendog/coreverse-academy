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

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `What Visualization Is (and Why Athletes Use It)`,
          paragraphs: [
            `Visualization is the deliberate practice of imagining a future event going well — in detail, using all your senses. You picture yourself performing confidently, feeling capable, handling challenges gracefully. It's mental rehearsal.`,
            `Olympic athletes have used this technique for decades, and sports psychologists have documented its effects extensively. Skiers visualize their entire run before they push off. Gymnasts rehearse every movement in their minds before they touch the mat. Sprinters see themselves crossing the finish line.`,
            `Most people do the opposite without realising it — replaying worst-case scenarios and feeling the anxiety that follows. Visualization flips that pattern deliberately. Instead of accidentally training your brain for failure, you intentionally train it for success.`,
          ],
          image:        '/explorer-assets/inner-world/l19-mental-rehearsal.png',
          imageCaption: `Olympic athletes, pianists, astronauts — they all use visualization as mental rehearsal`,
          vocab: [
            { word: 'visualization',  definition: `The deliberate practice of imagining a future event going well — in detail, using all your senses — as a form of mental rehearsal that trains the brain.`,                audioPrompt: `Visualization — the deliberate practice of imagining a future event going well, in detail, using all your senses, as a form of mental rehearsal that trains the brain.` },
            { word: 'mental rehearsal', definition: `Practising a performance or event in your imagination — with the same detail, intention, and sensory richness as real practice — to prepare the brain for the actual event.`, audioPrompt: `Mental rehearsal — practising a performance or event in your imagination, with the same detail, intention, and sensory richness as real practice, to prepare the brain for the actual event.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `The Stunning Science: Your Brain Can't Tell the Difference`,
          paragraphs: [
            `Here's the remarkable science: when you vividly imagine performing an action, your brain activates many of the same neural pathways it would use if you were actually doing it. The brain responds to vivid imagination almost as if the event were real.`,
            `In one famous study, participants who only visualized playing piano scales — never touching a piano — showed measurable improvement in skill. Their improvement was almost equal to the group that physically practised. Imagination, done vividly enough, trains the brain.`,
            `This is why visualization isn't just wishful thinking. It's neurological training. Every detailed mental rehearsal strengthens the circuits your brain will call on when the real moment arrives. You're building neural confidence before you ever step onto the stage.`,
          ],
          image:        '/explorer-assets/inner-world/l19-process-vs-outcome.png',
          imageCaption: `The piano study: visualization alone produced almost equal improvement to physical practice`,
          vocab: [
            { word: 'neural pathway',  definition: `A connection between brain cells that gets stronger with use — vivid visualization activates many of the same neural pathways as actually performing the action.`,            audioPrompt: `Neural pathway — a connection between brain cells that gets stronger with use. Vivid visualization activates many of the same neural pathways as actually performing the action.` },
            { word: 'piano study',     definition: `A famous research study showing that participants who only visualized playing piano scales improved almost as much as those who physically practised — proof that imagination trains the brain.`, audioPrompt: `Piano study — a famous research study showing that participants who only visualized playing piano scales improved almost as much as those who physically practised, proving that imagination trains the brain.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `Make It Vivid, Specific, and Paired with Real Effort`,
          paragraphs: [
            `Effective visualization is specific and sensory. Don't just imagine "doing well." Imagine the room, the sounds, the feeling of your breath, your posture, the specific movements. The more detail you include, the more real it feels to your brain — and the more powerfully it trains.`,
            `Include a moment when something goes slightly wrong — and see yourself recovering with grace. This prepares you for reality more fully than imagining everything going perfectly. Real events have small hiccups; your visualization should too.`,
            `Visualization works best when paired with real practice — it enhances effort, it doesn't replace it. Many performers visualize right before they step out, as a final mental rehearsal that primes the body and mind. Try it now: think of something coming up, close your eyes, and spend two minutes seeing yourself handling it calmly and well.`,
          ],
          image:        '/explorer-assets/inner-world/l19-vivid-detail.png',
          imageCaption: `Specific, sensory, paired with real practice — the three ingredients of powerful visualization`,
          vocab: [
            { word: 'process visualization',    definition: `Imagining the specific steps, movements, and sensory details of a performance — rather than just the outcome — which trains the brain more effectively.`,                audioPrompt: `Process visualization — imagining the specific steps, movements, and sensory details of a performance, rather than just the outcome, which trains the brain more effectively.` },
            { word: 'intentional visualization', definition: `Deliberately choosing to imagine a future event going well — the opposite of accidentally replaying worst-case scenarios — to build neural confidence before the real moment.`, audioPrompt: `Intentional visualization — deliberately choosing to imagine a future event going well, the opposite of accidentally replaying worst-case scenarios, to build neural confidence before the real moment.` },
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
              options:      [`Visualization is always better than physical practice`, `Participants who only visualized playing showed almost equal improvement to those who physically practised`, `Visualization had no effect on piano skill`, `Only professional musicians can benefit from visualization`],
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
    fetch('/explorer-assets/inner-world/l19-mental-rehearsal.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l19-process-vs-outcome.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l19-vivid-detail.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L19] mental-rehearsal: ${r1.ok}, process-vs-outcome: ${r2.ok}, vivid-detail: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L19] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l19_screens;
