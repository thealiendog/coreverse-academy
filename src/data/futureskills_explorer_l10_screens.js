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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Design Thinking?`,
          paragraphs: [
            `Design thinking is a problem-solving approach used by innovators around the world. It flips traditional problem solving: instead of starting with a solution and seeing if people want it, you start with people and understand their needs deeply before designing anything. The result is solutions that people actually want and use — not solutions that look good on paper but fail in real life.`,
            `The approach was developed and popularized by the design firm IDEO and spread through institutions like Stanford's d.school, where it became a core framework for teaching innovation. What makes design thinking different isn't just the steps — it's the underlying attitude. Design thinkers start from a position of genuine curiosity and humility: "I don't know what people need yet. I need to find out before I can solve anything."`,
            `Design thinking is now used far beyond product design. Hospitals use it to redesign patient experiences. Schools use it to redesign how learning happens. Cities use it to redesign public spaces. Aid organizations use it to design programs that actually serve the communities they're meant to help. Any time a solution must fit real human needs — rather than what someone in a conference room assumes those needs are — design thinking is the right approach.`,
          ],
          image:        '/explorer-assets/future-skills/l10-magazine-what-is-design-thinking.png',
          imageCaption: `What is design thinking — a human-centered approach that starts with deep empathy for real people before creating any solution`,
          vocab: [
            { word: `design thinking`, definition: `A human-centered approach to problem solving that starts with deeply understanding the people you're designing for — their needs, frustrations, and experiences — before creating any solution.`,   audioPrompt: `Design thinking — a human-centered approach to problem solving that starts with deeply understanding the people you're designing for — their needs, frustrations, and experiences — before creating any solution.` },
            { word: `human-centered`,  definition: `An approach that puts the needs, experiences, and perspectives of real people at the center of every decision — rather than starting from technical requirements or business goals.`,             audioPrompt: `Human-centered — an approach that puts the needs, experiences, and perspectives of real people at the center of every decision, rather than starting from technical requirements or business goals.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Five Stages`,
          paragraphs: [
            `Design thinking has five stages that form a cycle rather than a straight line. Empathize: understand the people you're designing for — observe them in their environment, interview them about their experiences, and if possible, experience their world yourself. Define: clearly state the problem you're solving based on what you actually learned — not what you assumed before you started. The Define stage is where you translate human insight into a clear challenge.`,
            `Ideate: brainstorm as many solutions as possible — quantity over quality at first. The goal is to get every idea out of your head and onto paper, including the wild ones. The best idea is rarely the first one. Prototype: build a simple, rough version of your best idea quickly and cheaply. The goal of a prototype isn't to be perfect — it's to be testable. Test: try your prototype with real users, observe how they interact with it, listen to their feedback, and use what you learn to improve.`,
            `The five stages aren't meant to be followed in strict sequence — they're meant to be looped. After testing, you might discover that you defined the problem wrong, so you go back to the Define stage. After prototyping, you might have new ideas, so you go back to Ideate. This iterative, non-linear approach is what allows design thinking to produce solutions that genuinely fit the real complexity of human needs. The willingness to go back and revise is a feature, not a weakness.`,
          ],
          image:        '/explorer-assets/future-skills/l10-magazine-five-stages.png',
          imageCaption: `The five stages of design thinking — Empathize, Define, Ideate, Prototype, Test — a cycle rather than a straight line`,
          vocab: [
            { word: `ideate`,    definition: `The design thinking stage where you brainstorm as many possible solutions as you can — without judging any of them. The goal is to generate a wide range of options before selecting the most promising ones.`,   audioPrompt: `Ideate — the design thinking stage where you brainstorm as many possible solutions as you can, without judging any of them. The goal is to generate a wide range of options before selecting the most promising ones.` },
            { word: `iterative`, definition: `A process that repeats and improves in cycles — rather than moving forward in a straight line, iterative design circles back to earlier stages when new information reveals that something needs to change.`,       audioPrompt: `Iterative — a process that repeats and improves in cycles. Rather than moving forward in a straight line, iterative design circles back to earlier stages when new information reveals that something needs to change.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Empathy: The Most Important Step`,
          paragraphs: [
            `The empathy stage is what makes design thinking different from every other problem-solving approach. Before designing anything, you try to deeply understand the person who will use it. You observe them in their environment, interview them about their experiences, and if possible, experience the problem yourself. You're not looking for what they say they want — you're looking for what they actually need, which is often something different.`,
            `The hospital redesign team that stayed in the beds discovered that the most frightening moment for children wasn't the medical procedures — it was the long ride through the corridor to surgery, staring up at fluorescent ceiling lights. No one in a conference room would have guessed that. So the team redesigned the ride as an adventure, with theme environments along the route and something interesting to look at on the ceiling. The children's fear decreased dramatically — because the solution addressed the real problem, not the assumed one.`,
            `Empathy research produces insight — a deep understanding of the gap between how things are and how they could be for the people involved. A good insight statement captures not just what the problem is but why it matters to a specific person. "Elderly patients feel isolated in hospital rooms because the TV remote is too complicated to use independently" is an insight that points directly toward a solution. "Hospitals should have better technology" is not — it's a solution looking for a problem, not an insight from empathy.`,
          ],
          image:        '/explorer-assets/future-skills/l10-magazine-empathy.png',
          imageCaption: `Empathy — observing, interviewing, and experiencing the world of the people you're designing for, to find what they truly need`,
          vocab: [
            { word: `empathy`,  definition: `The ability to understand and share the feelings and experiences of another person — in design thinking, empathy means immersing yourself in users' worlds to discover their real needs before designing anything.`, audioPrompt: `Empathy — the ability to understand and share the feelings and experiences of another person. In design thinking, empathy means immersing yourself in users' worlds to discover their real needs before designing anything.` },
            { word: `insight`,  definition: `A deep understanding of a human need or problem, discovered through empathy research — a good insight explains not just what the problem is but why it matters, and points toward meaningful solutions.`,             audioPrompt: `Insight — a deep understanding of a human need or problem, discovered through empathy research. A good insight explains not just what the problem is but why it matters, and points toward meaningful solutions.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Prototyping: Build Fast and Cheap`,
          paragraphs: [
            `A prototype is a rough, quick model of your idea built to test a concept — not to be perfect. The first prototypes of famous products were not polished: early airplane prototypes were built from bicycle parts, wood, and fabric. Early computing prototypes were built from salvaged electronic components. The point of a prototype isn't beauty or completeness — it's learning. A cheap model that fails quickly teaches you more than a perfect plan that's never tested.`,
            `Prototyping forces you to make your abstract idea concrete. As long as a solution stays in your head or on paper, it can seem to work perfectly. The moment you try to build even a rough version, you discover the gaps, the contradictions, and the assumptions you didn't realize you were making. This is why design thinkers build prototypes early and often — not to finish, but to learn. Every failed prototype is a step closer to a solution that actually works.`,
            `The mindset behind prototyping — build fast, test early, learn and improve — has spread well beyond product design. Software engineers use it in the form of minimum viable products: release a basic version to real users, get feedback, and improve rapidly. Scientists use it in the form of small-scale experiments before large studies. Entrepreneurs use it to test business ideas before investing heavily. The underlying principle is the same: real learning comes from real-world feedback, not planning alone.`,
          ],
          image:        '/explorer-assets/future-skills/l10-magazine-prototyping.png',
          imageCaption: `Prototyping — build fast and cheap to test your idea in the real world; a prototype that fails teaches you more than a perfect plan`,
          vocab: [
            { word: `prototype`,              definition: `A rough, quick model of an idea built to test a concept with real users — not meant to be perfect or final. Prototypes let you learn what works before investing in a complete solution.`,   audioPrompt: `Prototype — a rough, quick model of an idea built to test a concept with real users. Not meant to be perfect or final. Prototypes let you learn what works before investing in a complete solution.` },
            { word: `minimum viable product`, definition: `The simplest version of a product that can be tested with real users — a prototype scaled to real use. The goal is to learn as much as possible with as little investment as possible.`,          audioPrompt: `Minimum viable product — the simplest version of a product that can be tested with real users. A prototype scaled to real use. The goal is to learn as much as possible with as little investment as possible.` },
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
            { image: 'l10-game-empathize.png', label: `Riding in a hospital bed through the corridors and noticing how frightening the long hallway feels from a child's point of view.`,                                                correctMatch: 'empathize', objectPosition: 'center 50%', matchPhrase: `Empathize! Experiencing the hospital environment as a patient — riding the bed, seeing the ceiling lights, feeling the anxiety of the corridor — is empathy in action. This is how the team discovered the real problem: not the medical procedures, but the frightening ride to surgery. No interview or survey would have revealed this as vividly as living it. Empathy research finds what people truly experience, not just what they report when asked.` },
            { image: 'l10-game-define.png',    label: `Writing down: 'The kids feel scared on the way to their procedures — they need the trip to feel safe and fun instead.'`,                                                           correctMatch: 'define',    objectPosition: 'center 50%', matchPhrase: `Define! Translating what the team observed into a clear, human-centered problem statement is the Define stage. "The kids feel scared on the way to their procedures — they need the trip to feel safe and fun instead" captures the real need discovered through empathy. A good Define statement describes the problem from the user's perspective, not the organization's. It points toward a solution without prescribing one — it says what needs to change without dictating how.` },
            { image: 'l10-game-ideate.png',    label: `Filling a whiteboard with every possible way to make the hallway journey feel exciting rather than scary — no idea too wild to write down.`,                                       correctMatch: 'ideate',    objectPosition: 'center 50%', matchPhrase: `Ideate! Brainstorming every possible way to transform the corridor experience — from theme environments to interactive ceiling panels to storytelling — is the Ideate stage. Ideation works best when judgment is suspended: every idea goes on the board, including the ones that seem impractical. Wild ideas often contain the seeds of the best solutions, and volume matters. The team that generates thirty ideas is more likely to find an exceptional one than the team that evaluates five.` },
            { image: 'l10-game-prototype.png', label: `Building a quick model of an adventure-themed ceiling out of cardboard to test whether kids enjoy looking up at it.`,                                                             correctMatch: 'prototype', objectPosition: 'center 50%', matchPhrase: `Prototype! Building a rough cardboard model of the adventure-themed ceiling before committing to a full installation is prototyping at its best. The prototype isn't beautiful or permanent — it's fast, cheap, and testable. By putting even a rough version in front of real children, the team could observe reactions, get feedback, and learn whether the concept worked before spending significant time and money on a full implementation. Build cheap. Learn fast. Improve.` },
            { image: 'l10-game-empathize2.png',label: `Interviewing five children about what they find most frightening at hospitals and watching how they react during check-in.`,                                                      correctMatch: 'empathize', objectPosition: 'center 50%', matchPhrase: `Empathize again! Interviewing children and observing their behavior during real hospital experiences is empathy research. The team isn't asking "what do you want us to build?" — they're asking "what is your experience like?" and watching carefully. Observation during real experiences reveals what people can't always put into words. A child saying "the lights are too bright" during check-in is a data point that no conference-room assumption would have predicted.` },
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
    fetch('/explorer-assets/future-skills/l10-magazine-what-is-design-thinking.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l10-magazine-five-stages.png',             { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l10-magazine-empathy.png',                 { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l10-magazine-prototyping.png',             { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L10] what-is-design-thinking: ${r1.ok}, five-stages: ${r2.ok}, empathy: ${r3.ok}, prototyping: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L10] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l10_screens;
