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

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `The Amygdala Hijack`,
          paragraphs: [
            `When something triggers a strong emotion — an insult, a fright, a frustration — your amygdala fires first, before your thinking brain has time to process. The amygdala is the brain's alarm system, and it's very fast.`,
            `This is called an "amygdala hijack" — a term coined by psychologist Daniel Goleman. The emotional brain takes over for a few seconds before the rational brain can weigh in. It's not a character flaw. It's biology.`,
            `For most of human history, this fast emotional reaction kept us safe from danger. But in modern life — when the "threat" is an argument or an unfair comment — the hijack can fire when we don't need it. Understanding it is the first step to working with it.`,
          ],
          image:        '/explorer-assets/inner-world/l17-amygdala-hijack.png',
          imageCaption: `The amygdala fires first — an emotional hijack before the thinking brain can respond`,
          vocab: [
            { word: 'amygdala',        definition: `A small, almond-shaped region in the brain that acts as the emotional alarm system — it fires fast when a threat or strong emotion is detected.`,                         audioPrompt: `Amygdala — a small, almond-shaped region in the brain that acts as the emotional alarm system. It fires fast when a threat or strong emotion is detected.` },
            { word: 'amygdala hijack', definition: `A term coined by Daniel Goleman for when the amygdala fires so quickly that it takes over before the thinking brain can respond — triggering a reaction rather than a response.`, audioPrompt: `Amygdala hijack — a term coined by Daniel Goleman for when the amygdala fires so quickly that it takes over before the thinking brain can respond, triggering a reaction rather than a response.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `The Six-Second Window`,
          paragraphs: [
            `A reaction happens during those first seconds, before the thinking brain is involved. Reactions can feel satisfying in the moment but often lead to regret — they're powered by habit and emotion, not by choice.`,
            `A response happens after the amygdala hijack passes — when you've allowed the thinking brain, called the prefrontal cortex, to catch up. The prefrontal cortex is where reasoning, empathy, and wise decision-making live.`,
            `Research shows the amygdala hijack typically lasts about six seconds. This is why "count to ten" is actually grounded in neuroscience — six seconds of breathing gives your prefrontal cortex time to come online and help you choose what to do next.`,
          ],
          image:        '/explorer-assets/inner-world/l17-six-seconds.png',
          imageCaption: `Six seconds of pause — enough time for the prefrontal cortex to catch up`,
          vocab: [
            { word: 'reaction',          definition: `A behaviour that happens during the amygdala hijack — fast, habit-powered, often regretted — before the thinking brain has had a chance to weigh in.`,                        audioPrompt: `Reaction — a behaviour that happens during the amygdala hijack, fast and habit-powered, often regretted, before the thinking brain has had a chance to weigh in.` },
            { word: 'prefrontal cortex', definition: `The part of the brain behind your forehead responsible for reasoning, empathy, and wise decision-making — it needs a few seconds to catch up after an amygdala hijack.`, audioPrompt: `Prefrontal cortex — the part of the brain behind your forehead responsible for reasoning, empathy, and wise decision-making. It needs a few seconds to catch up after an amygdala hijack.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `Building the Pause Muscle`,
          paragraphs: [
            `Practising the pause gets easier over time. Mindfulness, breathing exercises, and emotional awareness all shorten the gap between trigger and wise response. The more you practice, the faster the prefrontal cortex comes online.`,
            `Athletes and performers train this exact skill — learning to stay mentally composed even under pressure. A sprinter who panics off the blocks. A musician who freezes on stage. A student who blanks in a test. The pause muscle is what steadies them.`,
            `Think of something that reliably triggers a fast reaction from you. Now design your personal pause plan: what will you do in those first six seconds? Take two slow breaths. Count to six quietly. Press your feet into the floor and feel grounded. Choose your strategy — and practice it before you need it.`,
          ],
          image:        '/explorer-assets/inner-world/l17-pause-power.png',
          imageCaption: `The pause muscle is trainable — every time you use it, it gets stronger`,
          vocab: [
            { word: 'pause muscle',       definition: `The ability to pause between a trigger and a response — built through practice so that, over time, the thinking brain comes online faster and more reliably.`,             audioPrompt: `Pause muscle — the ability to pause between a trigger and a response, built through practice so that over time the thinking brain comes online faster and more reliably.` },
            { word: 'personal pause plan', definition: `Your own chosen strategy for those first six seconds of a hijack — like taking two breaths, counting to six, or pressing your feet into the floor — practiced before you need it.`, audioPrompt: `Personal pause plan — your own chosen strategy for those first six seconds of a hijack, like taking two breaths, counting to six, or pressing your feet into the floor, practiced before you need it.` },
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
    fetch('/explorer-assets/inner-world/l17-amygdala-hijack.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l17-six-seconds.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l17-pause-power.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L17] amygdala-hijack: ${r1.ok}, six-seconds: ${r2.ok}, pause-power: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L17] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l17_screens;
