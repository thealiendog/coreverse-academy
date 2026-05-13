// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 17
// "The Difference Between Reacting and Responding"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l17_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-17',
      title:     `The Difference Between Reacting and Responding`,
      duration:  14,
      xpReward:  50,
      badge:     'wise-responder',
      badgeName: `Wise Responder`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hi, {name}! We touched on this idea in a previous lesson — the space between what happens and what you do. Today we're going much deeper: what actually happens in your brain during a reaction versus a response, and how to build the muscle of wise responding. Ready to look inside the brain?`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Alarm Fires First`,
          paragraphs: [
            `When something triggers a strong emotion — an insult, a fright, a frustration — your amygdala fires first. Before your thinking brain has time to process.`,
            `The amygdala is your brain's alarm system. And it's fast — way faster than your thinking brain.`,
          ],
          image:        '/explorer-assets/inner-world/l17-s1-alarm-fires.png',
          imageCaption: `The amygdala fires before the thinking brain even has time to process`,
          vocab: [
            { word: 'trigger',  definition: `Something that sets off a strong emotion — like a loud noise, an unkind word, or a sudden surprise.`, audioPrompt: `Trigger — something that sets off a strong emotion, like a loud noise, an unkind word, or a sudden surprise.` },
            { word: 'amygdala', definition: `The alarm part of your brain. It fires fast when something feels scary or upsetting — even before you can think.`, audioPrompt: `Amygdala — the alarm part of your brain. It fires fast when something feels scary or upsetting, even before you can think.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `The Amygdala Hijack`,
          paragraphs: [
            `Psychologist Daniel Goleman coined a name for this: an "amygdala hijack." The emotional brain takes over for a few seconds before the rational brain can weigh in.`,
            `It's not a character flaw. It's biology. Every human brain works this way.`,
          ],
          image:        '/explorer-assets/inner-world/l17-s2-amygdala-hijack.png',
          imageCaption: `An amygdala hijack — the emotional brain briefly takes over from the thinking brain`,
          vocab: [
            { word: 'amygdala hijack', definition: `When the emotional brain takes over for a few seconds before the thinking brain can help. Named by psychologist Daniel Goleman.`, audioPrompt: `Amygdala hijack — when the emotional brain takes over for a few seconds before the thinking brain can help. Named by psychologist Daniel Goleman.` },
            { word: 'biology',         definition: `The way your body and brain are naturally built. The amygdala hijack happens to everyone — it's biology, not a flaw.`, audioPrompt: `Biology — the way your body and brain are naturally built. The amygdala hijack happens to everyone. It's biology, not a flaw.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Reaction vs Response`,
          paragraphs: [
            `A reaction happens during those first seconds, before your thinking brain is involved. Reactions are powered by habit and emotion, not by choice.`,
            `A response happens after the hijack passes — when your thinking brain catches up. That's where wise decisions live.`,
          ],
          image:        '/explorer-assets/inner-world/l17-s3-reaction-vs-response.png',
          imageCaption: `A reaction is automatic. A response is chosen.`,
          vocab: [
            { word: 'reaction', definition: `An automatic action that happens fast, powered by habit and emotion — before your thinking brain has time to help.`, audioPrompt: `Reaction — an automatic action that happens fast, powered by habit and emotion, before your thinking brain has time to help.` },
            { word: 'response', definition: `A chosen action that happens after pausing — when your thinking brain has caught up and helped you decide wisely.`, audioPrompt: `Response — a chosen action that happens after pausing, when your thinking brain has caught up and helped you decide wisely.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Six Seconds`,
          paragraphs: [
            `Research shows the amygdala hijack typically lasts about six seconds. This is why "count to ten" is actually grounded in neuroscience.`,
            `Six seconds of breathing gives your thinking brain time to come online and help you choose what to do next.`,
          ],
          image:        '/explorer-assets/inner-world/l17-s4-six-seconds.png',
          imageCaption: `Six seconds — that's how long the hijack lasts. Long enough for "count to ten" to work.`,
          vocab: [
            { word: 'six seconds',   definition: `How long an amygdala hijack typically lasts. After six seconds, your thinking brain can come online and help.`, audioPrompt: `Six seconds — how long an amygdala hijack typically lasts. After six seconds, your thinking brain can come online and help.` },
            { word: 'thinking brain', definition: `The part of your brain that helps you choose wisely. It needs a few seconds to come online after a strong emotion fires.`, audioPrompt: `Thinking brain — the part of your brain that helps you choose wisely. It needs a few seconds to come online after a strong emotion fires.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Train the Pause`,
          paragraphs: [
            `Practising the pause gets easier over time. Mindfulness, breathing, and emotional awareness shorten the gap between trigger and wise response.`,
            `Athletes and performers train this exact skill — staying mentally composed even under pressure. The pause is what steadies them.`,
          ],
          image:        '/explorer-assets/inner-world/l17-s5-train-pause.png',
          imageCaption: `Athletes train the pause — it's what steadies them under pressure`,
          vocab: [
            { word: 'practice', definition: `Doing something on purpose to get better at it. Pausing is a skill — every practice makes the gap shorter.`, audioPrompt: `Practice — doing something on purpose to get better at it. Pausing is a skill. Every practice makes the gap shorter.` },
            { word: 'composed', definition: `Calm and steady even when things are intense. Athletes and performers train themselves to stay composed under pressure.`, audioPrompt: `Composed — calm and steady even when things are intense. Athletes and performers train themselves to stay composed under pressure.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Your Pause Plan`,
          paragraphs: [
            `Think of something that reliably triggers a fast reaction from you. Now design your personal pause plan.`,
            `What will you do in those first six seconds? Two slow breaths? Count to six? Feel your feet on the floor? Choose your strategy.`,
          ],
          image:        '/explorer-assets/inner-world/l17-s6-pause-plan.png',
          imageCaption: `Design your personal pause plan — and practice it before you need it`,
          vocab: [
            { word: 'pause plan', definition: `A strategy you choose ahead of time for what to do during those first six seconds — so the pause feels easier when you need it.`, audioPrompt: `Pause plan — a strategy you choose ahead of time for what to do during those first six seconds, so the pause feels easier when you need it.` },
            { word: 'strategy',   definition: `A plan for handling something. Your pause plan is your personal strategy for hard moments.`, audioPrompt: `Strategy — a plan for handling something. Your pause plan is your personal strategy for hard moments.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which brain region is driving that behaviour!`,
          guideText:     `In any triggered moment, one of two brain regions is in charge — the amygdala (fast and emotional) or the prefrontal cortex (thoughtful and wise). Tap each card and sort it: which brain is driving this behaviour?`,
          columnHeaders: [`The Behaviour`, `Which Brain?`],
          items: [
            { image: 'l17-game-shout.png',       label: `Immediately shouting back when someone says something hurtful.`,          correctMatch: 'amygdala', objectPosition: 'center 50%', matchPhrase: `Amygdala driving! That reaction happened in the first seconds — before the thinking brain could catch up. The hijack was in charge. Next time, six seconds of breathing can change everything.` },
            { image: 'l17-game-breathpause.png', label: `Taking two slow breaths before answering when you feel angry.`,           correctMatch: 'pfc',      objectPosition: 'center 50%', matchPhrase: `Prefrontal cortex! Those two breaths gave the thinking brain time to come online. The hijack passed — and a wiser response was waiting on the other side.` },
            { image: 'l17-game-slamdoor.png',    label: `Slamming the door the second you feel frustrated.`,                      correctMatch: 'amygdala', objectPosition: 'center 50%', matchPhrase: `Amygdala hijack! The emotional brain fired and acted before the thinking brain had a chance. That's not a character flaw — it's just brain science. The pause is the key.` },
            { image: 'l17-game-thinkfirst.png',  label: `Pausing to think about how your words will land before speaking.`,       correctMatch: 'pfc',      objectPosition: 'center 50%', matchPhrase: `Prefrontal cortex driving! That pause — even just a moment — is all it takes for the thinking brain to weigh in. That's the six-second window being used wisely.` },
          ],
          buckets: [
            { id: 'amygdala', label: `🔥 Amygdala Driving`,          color: '#F59E0B' },
            { id: 'pfc',      label: `🧠 Prefrontal Cortex Driving`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about the neuroscience of reacting and responding. Answer all 6 questions to earn your Wise Responder badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is an "amygdala hijack"?`,
              options:      [`When someone takes control of your amygdala`, `When the emotional brain fires so quickly it takes over before the thinking brain can respond`, `A condition that requires medical treatment`, `When the amygdala stops working`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Who coined the term "amygdala hijack"?`,
              options:      [`Dr. Jon Kabat-Zinn`, `Viktor Frankl`, `Daniel Goleman`, `Dr. Carol Dweck`],
              correctIndex: 2,
            },
            {
              format:       'fill-blank',
              question:     `Research shows the amygdala hijack typically lasts about ___ seconds.`,
              options:      [`six`, `two`, `thirty`, `sixty`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which part of the brain is responsible for thoughtful, wise responses?`,
              options:      [`The amygdala`, `The cerebellum`, `The prefrontal cortex`, `The brain stem`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `A brief pause during a trigger gives your prefrontal cortex time to catch up and help you choose a wise response.`,
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     `What builds the muscle of wise responding over time?`,
              options:      [`Suppressing all emotions`, `Practising mindfulness, breathing, and emotional awareness`, `Only reacting in low-stakes situations`, `Watching others react badly`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Excellent work, {name}! You now understand the neuroscience of reactions — and you have a personal pause plan to bridge the gap to a wiser response. Every time you use that pause, you're strengthening one of the most valuable skills a human being can have. Try this with your family tonight!`,
          familyAdventure: `Share a story of a time someone in the family reacted impulsively and another time they responded wisely. What made the difference? What could help in future moments? You might even share your personal pause plans with each other — and help each other practice them.`,
          creativePrompt:  `Think of one thing that reliably triggers a fast reaction from you. Now write your personal pause plan: what will you do in those first six seconds? (Ideas: two slow breaths, count to six in your head, press your feet into the floor.) Write it down and keep it somewhere you'll see it when it matters.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'wise-responder',
          badgeName: `Wise Responder`,
          message:   `Excellent work, {name}! You now understand the neuroscience of reactions — and you have a personal pause plan to bridge the gap to a wiser response. Every time you use that pause, you're strengthening one of the most valuable skills a human being can have. Sage is incredibly proud of you!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l17_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L17] Loaded: "The Difference Between Reacting and Responding" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l17-s1-alarm-fires.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l17-s2-amygdala-hijack.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l17-s3-reaction-vs-response.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l17-s4-six-seconds.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l17-s5-train-pause.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l17-s6-pause-plan.png',           { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L17] alarm-fires: ${r1.ok}, amygdala-hijack: ${r2.ok}, reaction-vs-response: ${r3.ok}, six-seconds: ${r4.ok}, train-pause: ${r5.ok}, pause-plan: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L17] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l17_screens;
