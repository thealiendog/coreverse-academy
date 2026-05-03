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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What's Changing and Why`,
          paragraphs: [
            `Three forces are reshaping work at the same time. Automation is replacing repetitive physical tasks — machines now handle manufacturing, packaging, sorting, and logistics work that once required thousands of human workers. AI is replacing repetitive mental tasks — software now handles data entry, basic analysis, document processing, and routine customer service. And globalization means work can move to wherever it can be done best and most cost-effectively, regardless of country.`,
            `Jobs involving predictable, routine tasks — whether physical or mental — are at high risk. If a task can be broken down into clear steps and done the same way every time, a machine can almost certainly be trained to do it. Jobs requiring unpredictable judgment, creative thinking, complex human interaction, and contextual understanding are much harder to automate. The question isn't "will my job be replaced?" but "which parts of my job involve things only humans can do?"`,
            `This kind of transformation has happened before. The industrial revolution automated farm labor and forced millions of workers to develop new skills for factories. The computer revolution automated many factory and office jobs. Each time, new categories of work appeared that couldn't have been imagined beforehand. The transformation happening now is faster than previous ones — but the pattern is the same: old routines are automated, new human capabilities become the most valuable thing in the economy.`,
          ],
          image:        '/explorer-assets/future-skills/l12-magazine-whats-changing.png',
          imageCaption: `What's changing and why — automation, AI, and globalization are reshaping work faster than any previous transformation in history`,
          vocab: [
            { word: `automation`,    definition: `When machines or software take over tasks that humans used to do — especially repetitive, predictable physical or mental work.`,                                                                audioPrompt: `Automation — when machines or software take over tasks that humans used to do. Especially repetitive, predictable physical or mental work.` },
            { word: `globalization`, definition: `The process by which work, trade, and information flow freely across national borders — meaning jobs can now be done by anyone with an internet connection, anywhere in the world.`,          audioPrompt: `Globalization — the process by which work, trade, and information flow freely across national borders. Jobs can now be done by anyone with an internet connection, anywhere in the world.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Jobs That Are Growing`,
          paragraphs: [
            `Some fields are growing faster than almost anything else. AI and machine learning — building, training, and maintaining AI systems — is one of the most in-demand skill sets on the planet. Cybersecurity — protecting networks, devices, and data from attacks — is a field where demand consistently outpaces the number of trained professionals available. Renewable energy — designing and building solar, wind, and battery systems — is expanding rapidly as the world transitions away from fossil fuels.`,
            `Other fast-growing areas include mental health care (therapists, counselors, and coaches — human connection is one of the things technology can't replicate), content creation (video, writing, design, and podcasting at a professional level), data analysis (turning raw data into useful insights), and anything combining technical knowledge with human-facing skills. Healthcare technology, education technology, and climate technology are also generating entirely new types of roles that barely existed five years ago.`,
            `The common thread across growing fields: they all require some combination of technical knowledge and genuinely human capabilities — creativity, judgment, empathy, or communication. The jobs being automated out of existence tend to be one or the other: purely mechanical, or purely data-processing. The jobs being created combine human and machine strengths in ways that neither could achieve alone. The most future-proof careers sit at exactly that intersection.`,
          ],
          image:        '/explorer-assets/future-skills/l12-magazine-jobs-growing.png',
          imageCaption: `Jobs that are growing — cybersecurity, AI, renewable energy, mental health, and any field combining technical skill with human judgment`,
          vocab: [
            { word: `cybersecurity`,   definition: `The practice of protecting computers, networks, and data from attacks, unauthorized access, and damage — one of the fastest-growing career fields in technology.`,                            audioPrompt: `Cybersecurity — the practice of protecting computers, networks, and data from attacks, unauthorized access, and damage. One of the fastest-growing career fields in technology.` },
            { word: `renewable energy`, definition: `Energy from sources that replenish naturally — like sunlight, wind, and water — as opposed to fossil fuels that take millions of years to form and release carbon when burned.`,            audioPrompt: `Renewable energy — energy from sources that replenish naturally, like sunlight, wind, and water. As opposed to fossil fuels that take millions of years to form and release carbon when burned.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `The Skills That Will Always Matter`,
          paragraphs: [
            `Regardless of what specific jobs exist in twenty years, certain abilities will remain valuable. Critical thinking: evaluating information carefully, identifying assumptions, and making well-reasoned decisions. Creativity: generating new ideas and solutions beyond recombining what already exists. Communication: explaining ideas clearly and persuasively to different audiences. Collaboration: working effectively with others toward shared goals. Adaptability: learning new skills as situations demand. Emotional intelligence: understanding and working well with people.`,
            `These skills are hard to automate because they require the kind of contextual, flexible judgment that comes from lived experience. A machine can recognize patterns in data, but it can't sit across from a frightened person and know exactly what they need to hear. It can generate many possible solutions, but it can't feel the weight of a decision that affects real human lives. The uniquely human capacities — empathy, moral judgment, genuine creativity — grow in value precisely because machines are getting better at everything else.`,
            `The good news: you're building these skills right now in every class, every conversation, every project, every disagreement you work through. School that feels unrelated to technology is often building the exact skills that will complement it most powerfully. Reading builds communication. Group projects build collaboration. Debate builds critical thinking. The subjects that seem least "techy" are often the ones creating the most future-proof capabilities — because they develop the human side of the human+machine combination.`,
          ],
          image:        '/explorer-assets/future-skills/l12-magazine-skills-matter.png',
          imageCaption: `The skills that always matter — critical thinking, creativity, communication, collaboration, adaptability, and emotional intelligence`,
          vocab: [
            { word: `critical thinking`,    definition: `The ability to evaluate information carefully, identify assumptions, weigh evidence, and reach well-reasoned conclusions — one of the skills AI finds hardest to replicate.`,             audioPrompt: `Critical thinking — the ability to evaluate information carefully, identify assumptions, weigh evidence, and reach well-reasoned conclusions. One of the skills AI finds hardest to replicate.` },
            { word: `emotional intelligence`, definition: `The ability to understand and manage your own emotions, and to work effectively with other people's emotions — a uniquely human skill that grows in value as machines take over routine work.`, audioPrompt: `Emotional intelligence — the ability to understand and manage your own emotions and work effectively with other people's emotions. A uniquely human skill that grows in value as machines take over routine work.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `The Portfolio Career`,
          paragraphs: [
            `The idea of working at one company for forty years, receiving a gold watch, and retiring comfortably is already a relic of the past. The future of work looks different: multiple careers over a lifetime, a mix of freelance and contract work alongside any permanent positions, constantly evolving skills, and for many people, running some form of their own business or independent practice. Loyalty to one employer is less common; building a set of valuable, transferable skills is more important than ever.`,
            `The concept of the T-shaped professional describes what the most valuable workers look like: deep expertise in one specific area (the vertical bar of the T, going down into real mastery) combined with broad knowledge across many other fields (the horizontal bar, giving context and connection). A data scientist who also understands communication and design is more valuable than one who only knows data. A product designer who understands engineering and marketing makes better decisions. Depth plus breadth is the combination that creates genuinely exceptional work.`,
            `The portfolio career also means that your education never stops. The skills most in demand five years from now don't all exist yet as formal courses. Staying current will mean learning from online resources, peer communities, and hands-on experimentation as much as from formal education. The people who thrive will be those who approach their own learning the way a growth mindset person approaches every challenge: as an ongoing, never-finished process that gets more rewarding the longer you stay with it.`,
          ],
          image:        '/explorer-assets/future-skills/l12-magazine-portfolio-career.png',
          imageCaption: `The portfolio career — T-shaped skills, lifelong learning, and multiple roles over a lifetime replace the single-employer model`,
          vocab: [
            { word: `portfolio career`, definition: `A career path built from multiple skills, experiences, and often different types of work — rather than spending an entire career at one company doing one thing.`,                             audioPrompt: `Portfolio career — a career path built from multiple skills, experiences, and often different types of work, rather than spending an entire career at one company doing one thing.` },
            { word: `T-shaped skills`,  definition: `Deep expertise in one specific area — the vertical bar of the T — combined with broad useful knowledge across many other fields — the horizontal bar.`,                                    audioPrompt: `T-shaped skills — deep expertise in one specific area, the vertical bar of the T, combined with broad useful knowledge across many other fields, the horizontal bar.` },
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
    fetch('/explorer-assets/future-skills/l12-magazine-whats-changing.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l12-magazine-jobs-growing.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l12-magazine-skills-matter.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l12-magazine-portfolio-career.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L12] whats-changing: ${r1.ok}, jobs-growing: ${r2.ok}, skills-matter: ${r3.ok}, portfolio-career: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L12] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l12_screens;
