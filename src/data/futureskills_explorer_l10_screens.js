// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 10
// "Design Thinking: Solving Problems Like a Designer"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l10_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-10',
      title:     `Design Thinking: Solving Problems Like a Designer`,
      duration:  12,
      xpReward:  50,
      badge:     'design-thinker',
      badgeName: `Design Thinker`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `The designers at IDEO were asked to redesign a hospital experience to make it less frightening for sick children. Instead of sitting in a conference room guessing what kids wanted, they stayed in the hospital, rode in the beds, and experienced every step themselves. What they discovered changed everything. That approach — empathy first, then design — is called design thinking, and it's the most human-centered way to solve any problem.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Start With People',
          paragraphs: [
            'Most problem-solving starts with a solution and tries to make people want it. Design thinking flips that.',
            'Start with the people. Understand their real needs. Then design. The result: solutions people actually want and use.',
          ],
          image:        '/explorer-assets/future-skills/l10-s1-person-centered.png',
          imageCaption: 'Most "good ideas" fail because they were built without understanding who they\'s for. Design thinking fixes that.',
          vocab: [
            { word: 'design thinking', definition: 'A human-centered problem-solving approach that starts by deeply understanding people\'s real needs.', audioPrompt: 'Design thinking — a human-centered problem-solving approach that starts by deeply understanding people\'s real needs.' },
            { word: 'human-centered',  definition: 'Starting from real people\'s needs and experiences — not from technical requirements or assumptions.', audioPrompt: 'Human-centered — starting from real people\'s needs and experiences, not from technical requirements or assumptions.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'The Hospital Story',
          paragraphs: [
            'IDEO was asked to make hospitals less scary for sick kids. Instead of guessing in a conference room, they rode in the beds.',
            'They discovered the scariest moment wasn\'t the surgery. It was the long hallway ride staring at ceiling lights. No one would have guessed that.',
          ],
          image:        '/explorer-assets/future-skills/l10-s2-hospital-corridor.png',
          imageCaption: 'You\'d never know it from a meeting room. You only learn it by actually being there.',
          vocab: [
            { word: 'IDEO',    definition: 'A design firm that pioneered design thinking and helped spread it to schools, hospitals, and companies worldwide.', audioPrompt: 'IDEO — a design firm that pioneered design thinking and helped spread it to schools, hospitals, and companies worldwide.' },
            { word: 'insight', definition: 'A deep understanding of a real human need — usually discovered through observation, not from asking questions.', audioPrompt: 'Insight — a deep understanding of a real human need, usually discovered through observation, not from asking questions.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Empathize & Define',
          paragraphs: [
            'Empathize: observe people, interview them, experience their world. Don\'t ask what they want. Find what they actually need.',
            'Define: state the problem in one clear sentence based on what you learned — not what you assumed before you started.',
          ],
          image:        '/explorer-assets/future-skills/l10-s3-observe-and-define.png',
          imageCaption: 'Watch first. Define second. Most "obvious problems" turn out to be the wrong problem once you actually look.',
          vocab: [
            { word: 'empathize', definition: 'The design thinking stage where you deeply understand the people you\'re designing for through observation and interviews.', audioPrompt: 'Empathize — the design thinking stage where you deeply understand the people you\'re designing for through observation and interviews.' },
            { word: 'define',    definition: 'The design thinking stage where you state the real problem clearly in one sentence, based on what you actually learned.', audioPrompt: 'Define — the design thinking stage where you state the real problem clearly in one sentence, based on what you actually learned.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Ideate — Brainstorm Without Judgment',
          paragraphs: [
            'Ideate: brainstorm as many ideas as you can. No filtering. Wild ideas welcome.',
            'The best idea is rarely the first one. Quantity comes before quality. Judge later — generate now.',
          ],
          image:        '/explorer-assets/future-skills/l10-s4-ideate-whiteboard.png',
          imageCaption: 'Thirty mediocre ideas beats five careful ones every time. The wild ones often hide the best solutions.',
          vocab: [
            { word: 'ideate',     definition: 'The design thinking stage where you brainstorm many possible solutions without judging any of them.', audioPrompt: 'Ideate — the design thinking stage where you brainstorm many possible solutions without judging any of them.' },
            { word: 'brainstorm', definition: 'Generating ideas freely with no criticism allowed. Criticism comes later — during brainstorming, every idea goes on the board.', audioPrompt: 'Brainstorm — generating ideas freely with no criticism allowed. Criticism comes later; during brainstorming, every idea goes on the board.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Prototype & Test',
          paragraphs: [
            'Prototype: build a fast, cheap version of your idea. Cardboard, tape, paper — whatever works. Not meant to be perfect.',
            'Test it with real people. Watch how they use it. Listen. Improve. Repeat. A failed prototype teaches more than a flawless plan.',
          ],
          image:        '/explorer-assets/future-skills/l10-s5-cardboard-prototype.png',
          imageCaption: 'Build something ugly fast. Watch what happens. Learn. Improve. That loop is where real solutions come from.',
          vocab: [
            { word: 'prototype', definition: 'A rough, quick model built to test an idea with real people. Made to learn from — not to be perfect.', audioPrompt: 'Prototype — a rough, quick model built to test an idea with real people. Made to learn from, not to be perfect.' },
            { word: 'iterative', definition: 'A process that improves through repeated cycles of testing and learning. Not a straight line — a loop.', audioPrompt: 'Iterative — a process that improves through repeated cycles of testing and learning. Not a straight line; a loop.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Why It Works',
          paragraphs: [
            'Design thinking is used everywhere now — hospitals, schools, cities, aid organizations, product companies.',
            'It works because it answers the most important question first: "What do these specific people actually need?" Then it builds backwards from there.',
          ],
          image:        '/explorer-assets/future-skills/l10-s6-design-thinking-world.png',
          imageCaption: 'Schools, hospitals, cities, charities — anywhere solutions must fit real human needs, this is the approach that works.',
          vocab: [
            { word: 'user',                   definition: 'The actual person who will use a solution. Design thinking puts the user at the center of every decision.', audioPrompt: 'User — the actual person who will use a solution. Design thinking puts the user at the center of every decision.' },
            { word: 'minimum viable product', definition: 'The simplest version of a product that can be tested with real users. Learn fast, invest little.', audioPrompt: 'Minimum viable product — the simplest version of a product that can be tested with real users. Learn fast, invest little.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each action from the hospital redesign story, then match it to the design thinking stage it belongs to!`,
          guideText:     `The IDEO team redesigning the hospital experience for children went through every stage of design thinking. Each action below belongs to one stage: Empathize, Define, Ideate, or Prototype. Can you match them correctly?`,
          columnHeaders: [`The Action`, `Which Stage?`],
          items: [
            { image: 'l10-game-empathize.png',  label: `Riding in a hospital bed through the corridors and noticing how frightening the long hallway feels from a child's point of view.`,                                                correctMatch: 'empathize', objectPosition: 'center 50%', matchPhrase: `Empathize! Experiencing the hospital environment as a patient — riding the bed, seeing the ceiling lights, feeling the anxiety of the corridor — is empathy in action. This is how the team discovered the real problem: not the medical procedures, but the frightening ride to surgery. No interview or survey would have revealed this as vividly as living it. Empathy research finds what people truly experience, not just what they report when asked.` },
            { image: 'l10-game-define.png',     label: `Writing down: 'The kids feel scared on the way to their procedures — they need the trip to feel safe and fun instead.'`,                                                           correctMatch: 'define',    objectPosition: 'center 50%', matchPhrase: `Define! Translating what the team observed into a clear, human-centered problem statement is the Define stage. "The kids feel scared on the way to their procedures — they need the trip to feel safe and fun instead" captures the real need discovered through empathy. A good Define statement describes the problem from the user's perspective, not the organization's. It points toward a solution without prescribing one — it says what needs to change without dictating how.` },
            { image: 'l10-game-ideate.png',     label: `Filling a whiteboard with every possible way to make the hallway journey feel exciting rather than scary — no idea too wild to write down.`,                                       correctMatch: 'ideate',    objectPosition: 'center 50%', matchPhrase: `Ideate! Brainstorming every possible way to transform the corridor experience — from theme environments to interactive ceiling panels to storytelling — is the Ideate stage. Ideation works best when judgment is suspended: every idea goes on the board, including the ones that seem impractical. Wild ideas often contain the seeds of the best solutions, and volume matters. The team that generates thirty ideas is more likely to find an exceptional one than the team that evaluates five.` },
            { image: 'l10-game-prototype.png',  label: `Building a quick model of an adventure-themed ceiling out of cardboard to test whether kids enjoy looking up at it.`,                                                             correctMatch: 'prototype', objectPosition: 'center 50%', matchPhrase: `Prototype! Building a rough cardboard model of the adventure-themed ceiling before committing to a full installation is prototyping at its best. The prototype isn't beautiful or permanent — it's fast, cheap, and testable. By putting even a rough version in front of real children, the team could observe reactions, get feedback, and learn whether the concept worked before spending significant time and money on a full implementation. Build cheap. Learn fast. Improve.` },
            { image: 'l10-game-empathize2.png', label: `Interviewing five children about what they find most frightening at hospitals and watching how they react during check-in.`,                                                      correctMatch: 'empathize', objectPosition: 'center 50%', matchPhrase: `Empathize again! Interviewing children and observing their behavior during real hospital experiences is empathy research. The team isn't asking "what do you want us to build?" — they're asking "what is your experience like?" and watching carefully. Observation during real experiences reveals what people can't always put into words. A child saying "the lights are too bright" during check-in is a data point that no conference-room assumption would have predicted.` },
          ],
          buckets: [
            { id: 'empathize', label: `❤️ Empathize`, color: '#F87171' },
            { id: 'define',    label: `📌 Define`,    color: '#60A5FA' },
            { id: 'ideate',    label: `💡 Ideate`,    color: '#F59E0B' },
            { id: 'prototype', label: `🛠️ Prototype`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about design thinking. Answer all 6 questions to earn your Design Thinker badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What makes design thinking different from traditional problem solving?`,
              options:      [`It uses computers to generate solutions automatically`, `It starts with deeply understanding the people you're designing for before creating solutions`, `It focuses on making things look beautiful`, `It requires professional designers to work`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is a prototype?`,
              options:      [`The final perfect version of a product`, `A rough, quick model built to test a concept and learn from it`, `A detailed plan on paper`, `A computer simulation`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the most important stage of design thinking and why?`,
              options:      [`Ideation — because having many ideas is most important`, `Prototyping — because building things is the real work`, `Empathy — because understanding the real human need ensures you solve the right problem`, `Testing — because you can't know if it works until you try`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `In design thinking, building a rough prototype that fails is considered part of the process — because each failure teaches you what to improve in the next version.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The first stage of design thinking — where you observe, interview, and experience the world of the person you're designing for — is called ___.`,
              options:      [`Empathize`, `Define`, `Ideate`, `Prototype`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What does the 'Define' stage of design thinking involve?`,
              options:      [`Building a rough model of your best idea`, `Brainstorming as many solutions as possible`, `Clearly stating the problem based on what you learned from real users`, `Testing your prototype with real users`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for "IDEO hospital design thinking" — there are videos and articles about the project that redesigned the children's hospital experience. The full story of what the team discovered and what they built is one of the best examples of empathy-first design thinking in action.`,
          familyAdventure: `Pick a frustration in your home that affects the whole family — maybe the kitchen is disorganized, mornings are rushed, or a shared space is always cluttered. Do a mini design thinking sprint: spend five minutes each on Empathize (everyone shares their experience), Define (write the real problem in one sentence), Ideate (generate every possible solution), and Prototype (plan the simplest thing you could try this week). Implement it. Did it help?`,
          creativePrompt:  `Pick an everyday object that frustrates you — a bag with bad pockets, a tool that's hard to grip, a workspace that's always cluttered. Do the full five stages: Empathize (interview one person who uses it — what frustrates them?), Define (write the core problem in one sentence), Ideate (sketch five different redesign ideas), Prototype (make a rough model from paper, tape, or cardboard), Test (show it to someone and watch how they interact with it). What did the prototype teach you that the plan didn't?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'design-thinker',
          badgeName: `Design Thinker`,
          message:   `Brilliant work, {name}! You now know that design thinking starts with people — not solutions. Empathy first, then define, ideate, prototype, and test. The solutions that truly serve people are built this way. The next time you face a problem, ask: do I actually understand what the people involved really need? That question changes everything. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l10_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L10] Loaded: "Design Thinking: Solving Problems Like a Designer" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l10-s1-person-centered.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l10-s2-hospital-corridor.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l10-s3-observe-and-define.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l10-s4-ideate-whiteboard.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l10-s5-cardboard-prototype.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l10-s6-design-thinking-world.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L10] person-centered: ${r1.ok}, hospital-corridor: ${r2.ok}, observe-and-define: ${r3.ok}, ideate-whiteboard: ${r4.ok}, cardboard-prototype: ${r5.ok}, design-thinking-world: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L10] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l10_screens;
