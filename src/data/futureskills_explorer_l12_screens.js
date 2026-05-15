// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 12
// "The Jobs of the Future"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l12_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-12',
      title:     `The Jobs of the Future`,
      duration:  12,
      xpReward:  50,
      badge:     'future-ready',
      badgeName: `Future Ready`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `The World Economic Forum has estimated that the vast majority of jobs that will exist in 2030 haven't been invented yet. The careers your parents have might look completely different by the time you graduate — or might not exist at all. But here's what's exciting: entirely new fields are being created right now, and the people who thrive won't be those who memorized the right skills. They'll be those who know how to keep learning.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Work Is Changing Fast',
          paragraphs: [
            'Three forces are reshaping work at the same time: automation (machines), AI (software), and globalization (work moves anywhere).',
            'This shift has happened before — farms to factories, factories to offices. The pattern is the same. The pace is faster.',
          ],
          image:        '/explorer-assets/future-skills/l12-s1-three-forces.png',
          imageCaption: 'Every generation, technology reshapes what work looks like. This time it\'s happening faster than ever before.',
          vocab: [
            { word: 'automation',    definition: 'Machines and software taking over tasks humans used to do — especially repetitive, predictable work.', audioPrompt: 'Automation — machines and software taking over tasks humans used to do, especially repetitive, predictable work.' },
            { word: 'globalization', definition: 'Work, trade, and information flowing freely across countries. Jobs can be done by anyone with an internet connection.', audioPrompt: 'Globalization — work, trade, and information flowing freely across countries. Jobs can be done by anyone with an internet connection.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Jobs Most At Risk',
          paragraphs: [
            'Jobs at high risk: repetitive, predictable tasks.',
            'If a job can be broken into the same exact steps every day, a machine can probably learn to do it. Data entry, basic sorting, routine customer service.',
          ],
          image:        '/explorer-assets/future-skills/l12-s2-repetitive-automation.png',
          imageCaption: 'Same steps + same outcome every time = a job a machine can learn. That\'s the rule of thumb.',
          vocab: [
            { word: 'repetitive', definition: 'Doing the same thing over and over with little or no variation. Repetitive tasks are the easiest to automate.', audioPrompt: 'Repetitive — doing the same thing over and over with little or no variation. Repetitive tasks are the easiest to automate.' },
            { word: 'routine',    definition: 'Predictable, day-after-day work with fixed steps. Routine tasks are the most likely to be replaced by automation.', audioPrompt: 'Routine — predictable, day-after-day work with fixed steps. Routine tasks are the most likely to be replaced by automation.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Jobs Most In Demand',
          paragraphs: [
            'Fastest-growing fields right now: AI and machine learning. Cybersecurity. Renewable energy. Mental health care. Content creation. Data analysis.',
            'All of them combine technical skill with something human — creativity, judgment, empathy, or communication. That combination is hardest to automate.',
          ],
          image:        '/explorer-assets/future-skills/l12-s3-growing-fields.png',
          imageCaption: 'These fields didn\'t exist (or barely existed) a generation ago. They\'re where the future is being built.',
          vocab: [
            { word: 'cybersecurity',    definition: 'Protecting computers, networks, and data from attacks. One of the fastest-growing career fields in technology.', audioPrompt: 'Cybersecurity — protecting computers, networks, and data from attacks. One of the fastest-growing career fields in technology.' },
            { word: 'renewable energy', definition: 'Power from sources that don\'t run out — sun, wind, water. The opposite of fossil fuels.', audioPrompt: 'Renewable energy — power from sources that don\'t run out: sun, wind, water. The opposite of fossil fuels.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Skills That Never Get Old',
          paragraphs: [
            'Some skills stay valuable no matter what tech exists: critical thinking, creativity, communication, collaboration, adaptability, emotional intelligence.',
            'These are hard to automate because they need the kind of flexible judgment that comes from real human experience. They get MORE valuable as machines do everything else.',
          ],
          image:        '/explorer-assets/future-skills/l12-s4-timeless-skills.png',
          imageCaption: 'Technology will keep changing. These six skills won\'t. The more AI grows, the more valuable they become.',
          vocab: [
            { word: 'critical thinking',     definition: 'Carefully evaluating information instead of just accepting it. One of the skills AI finds hardest to replicate.', audioPrompt: 'Critical thinking — carefully evaluating information instead of just accepting it. One of the skills AI finds hardest to replicate.' },
            { word: 'emotional intelligence', definition: 'Understanding your own and other people\'s emotions, and working well with both. Uniquely human.', audioPrompt: 'Emotional intelligence — understanding your own and other people\'s emotions, and working well with both. Uniquely human.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'T-Shaped Careers',
          paragraphs: [
            'The most valuable workers are T-shaped: deep expertise in ONE area (the vertical of the T), plus broad knowledge across many fields (the horizontal).',
            'A data scientist who also understands design. A designer who understands engineering. Depth plus breadth makes exceptional work.',
          ],
          image:        '/explorer-assets/future-skills/l12-s5-t-shaped.png',
          imageCaption: 'Be excellent at ONE thing. Be aware across many things. That combination is what creates rare, irreplaceable workers.',
          vocab: [
            { word: 'T-shaped',       definition: 'Deep expertise in one field plus broad knowledge across many others. The most valuable career shape today.', audioPrompt: 'T-shaped — deep expertise in one field plus broad knowledge across many others. The most valuable career shape today.' },
            { word: 'specialization', definition: 'Focused, deep expertise in one specific area. The vertical bar of the T-shaped career.', audioPrompt: 'Specialization — focused, deep expertise in one specific area. The vertical bar of the T-shaped career.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Lifelong Learning',
          paragraphs: [
            'The "work at one company for 40 years" model is over. Future work means multiple careers, side projects, and skills that keep evolving.',
            'Your education never stops. The skills most valuable in 10 years don\'t even exist as courses yet. Stay curious — that\'s the real career strategy.',
          ],
          image:        '/explorer-assets/future-skills/l12-s6-lifelong-path.png',
          imageCaption: 'One employer for life is out. Many careers, many skills, and continuous learning is the new normal.',
          vocab: [
            { word: 'portfolio career', definition: 'A career built from many skills, roles, and projects over time. Replaces the single-employer model.', audioPrompt: 'Portfolio career — a career built from many skills, roles, and projects over time. Replaces the single-employer model.' },
            { word: 'lifelong learning', definition: 'Continuing to learn throughout your entire life — not just while you\'re in school. The new career requirement.', audioPrompt: 'Lifelong learning — continuing to learn throughout your entire life, not just while you\'re in school. The new career requirement.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each job description, then decide: is it likely to be automated, or hard to automate?`,
          guideText:     `Jobs involving the same predictable steps every day are easiest to automate. Jobs requiring genuine human judgment, creativity, or emotional understanding are hardest. Can you tell the difference?`,
          columnHeaders: [`The Job Description`, `Likely to Be Automated or Hard to Automate?`],
          items: [
            { image: 'l12-game-data-entry.png',    label: `Reading the same form and entering the same fields into a database, hundreds of times every day with no variation.`,                         correctMatch: 'automate', objectPosition: 'center 50%', matchPhrase: `Likely to Be Automated! Repetitive data entry is exactly what software is built to do faster, cheaper, and with fewer errors than a human. The task has clear rules, no variation, and no judgment required. This type of work — processing structured information using fixed rules — is already being handled by software in most large organizations. The people who used to do this work are most valuable when they've shifted to tasks that require interpretation and decision-making rather than just data entry.` },
            { image: 'l12-game-counseling.png',    label: `Listening carefully to a person who is upset and helping them figure out what they're feeling and what to do next.`,                         correctMatch: 'human',    objectPosition: 'center 50%', matchPhrase: `Hard to Automate! Emotional support and counseling require genuine human empathy, contextual understanding, and the ability to respond to a unique person in a unique moment. AI can recognize patterns in text that suggest distress, but it can't feel alongside someone, read the subtle signals of a real conversation, or carry the moral weight of helping someone through a crisis. Human connection — especially in moments of vulnerability — remains deeply resistant to automation, and its value grows as everything else becomes more automated.` },
            { image: 'l12-game-conveyor.png',      label: `Sorting packages on a conveyor belt by size and destination according to a fixed set of rules that never change.`,                          correctMatch: 'automate', objectPosition: 'center 50%', matchPhrase: `Likely to Be Automated! Physical sorting tasks with clear, fixed rules — the same decision applied to the same types of objects, over and over — are among the most automatable tasks that exist. Robotic systems already handle exactly this kind of work in warehouses and logistics centers. The rule of thumb: if you can write a complete algorithm for a task — a fixed set of steps that covers every case — a machine can probably do it.` },
            { image: 'l12-game-creative-solve.png', label: `Coming up with a new solution to a problem nobody has ever seen before, using imagination and judgment.`,                                   correctMatch: 'human',    objectPosition: 'center 50%', matchPhrase: `Hard to Automate! Creative problem-solving for genuinely novel situations is one of the areas where human intelligence still far exceeds machines. AI can combine existing patterns in ways that look creative — but it can't originate ideas the way a human facing a new situation can. Especially when the problem involves real stakes, ethical considerations, and judgment about what matters: these remain fundamentally human. Original thinking applied to new problems is one of the most durable career assets you can develop.` },
          ],
          buckets: [
            { id: 'automate', label: `🤖 Likely to Be Automated`, color: '#60A5FA' },
            { id: 'human',    label: `🧠 Hard to Automate`,       color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about the jobs of the future. Answer all 6 questions to earn your Future Ready badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Why are so many jobs changing or disappearing?`,
              options:      [`Companies want to save money on office space`, `Automation and AI can now do many routine physical and mental tasks that humans used to do`, `People are choosing to work less`, `Globalization is making all jobs move overseas`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What types of jobs are hardest to automate?`,
              options:      [`Jobs that use computers heavily`, `Jobs requiring creativity, complex human interaction, and unpredictable problem-solving`, `Jobs in factories and warehouses`, `Jobs that pay the most money`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does "T-shaped" mean for future careers?`,
              options:      [`Having two separate careers at once`, `Being good at math and science`, `Deep expertise in one area plus broad knowledge across many fields`, `Being good at exactly two unrelated things`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Jobs that involve creativity, complex human interaction, and unpredictable problem-solving are harder for machines to automate than routine, predictable tasks.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A "T-shaped" worker has deep expertise in one area ___ broad knowledge across many fields.`,
              options:      [`plus`, `minus`, `or`, `without`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which of the following would most likely be automated first?`,
              options:      [`Teaching a classroom of students with different learning needs`, `Writing an original short story`, `Entering the same type of form data into a database hundreds of times a day`, `Counseling someone through a difficult personal decision`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for "jobs that didn't exist 10 years ago" — the lists will surprise you. Then search "jobs most at risk from automation" for the other side of the picture. Together they show exactly how fast the employment landscape is shifting.`,
          familyAdventure: `Interview a parent or family friend about how their job has changed in the last ten years due to technology. Ask: What tools do you use now that didn't exist when you started? What parts of your job have changed or been automated? What new skills did you have to learn? What do you think your work will look like in another ten years?`,
          creativePrompt:  `Invent a job that might exist in 2040 that doesn't exist today. Give it a name, describe what a person in that role actually does on a typical day, and list at least five skills it requires. Draw a "job card" for it. What problem in the future world does this job solve — and why couldn't AI do it alone?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'future-ready',
          badgeName: `Future Ready`,
          message:   `Brilliant work, {name}! You now know that the future of work isn't about memorizing one set of skills — it's about building the ability to keep learning, think creatively, and connect with people in ways machines can't. The most valuable thing you can develop isn't a specific tool. It's the capacity to master the next one. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l12_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L12] Loaded: "The Jobs of the Future" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l12-s1-three-forces.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l12-s2-repetitive-automation.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l12-s3-growing-fields.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l12-s4-timeless-skills.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l12-s5-t-shaped.png',             { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l12-s6-lifelong-path.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L12] three-forces: ${r1.ok}, repetitive-automation: ${r2.ok}, growing-fields: ${r3.ok}, timeless-skills: ${r4.ok}, t-shaped: ${r5.ok}, lifelong-path: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L12] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l12_screens;
