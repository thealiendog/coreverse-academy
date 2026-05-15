// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 9
// "Creative Thinking: The Six Thinking Hats"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l09_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-09',
      title:     `Creative Thinking: The Six Thinking Hats`,
      duration:  12,
      xpReward:  50,
      badge:     'creative-thinker',
      badgeName: `Creative Thinker`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Most people think there's one right way to think about a problem. But what if you could put on different thinking hats and deliberately look at the same problem from six completely different angles? This technique — developed by psychologist Edward de Bono — is used by corporations, governments, and research teams around the world. It works. And you can use it starting today.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'One Way Isn\'t Enough',
          paragraphs: [
            'Most people default to one way of thinking — usually either focusing on risks or focusing on possibilities. Both are useful. Both are incomplete.',
            'The best decisions come from combining multiple kinds of thinking on purpose. Psychologist Edward de Bono created the Six Thinking Hats to make this possible.',
          ],
          image:        '/explorer-assets/future-skills/l09-s1-brain-modes.png',
          imageCaption: 'Different problems need different kinds of thinking. The trick is choosing the right mode on purpose, not by accident.',
          vocab: [
            { word: 'perspective',      definition: 'A point of view or way of looking at something. Different perspectives reveal different parts of the same problem.', audioPrompt: 'Perspective — a point of view or way of looking at something. Different perspectives reveal different parts of the same problem.' },
            { word: 'lateral thinking', definition: 'Solving problems through indirect, creative approaches. Term coined by Edward de Bono.', audioPrompt: 'Lateral thinking — solving problems through indirect, creative approaches. Term coined by Edward de Bono.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Meet the Six Hats',
          paragraphs: [
            'Six hats. Six modes of thinking. Each one isolates one type of thought.',
            'White (facts). Red (feelings). Black (risks). Yellow (benefits). Green (creativity). Blue (process). Put on a hat — and that\'s the only way you think for a minute.',
          ],
          image:        '/explorer-assets/future-skills/l09-s2-six-hats-row.png',
          imageCaption: 'Six hats. Six modes. Every important decision deserves a turn under each one.',
          vocab: [
            { word: 'Six Thinking Hats', definition: 'A method by Edward de Bono for deliberately switching between six different modes of thinking on the same problem.', audioPrompt: 'Six Thinking Hats — a method by Edward de Bono for deliberately switching between six different modes of thinking on the same problem.' },
            { word: 'parallel thinking', definition: 'When everyone in a group focuses on the same mode of thinking at the same time. Prevents arguments and ensures every angle gets attention.', audioPrompt: 'Parallel thinking — when everyone in a group focuses on the same mode of thinking at the same time. Prevents arguments and ensures every angle gets attention.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'White & Black — Facts and Risks',
          paragraphs: [
            'White Hat: only facts. What do we know? What don\'t we know? No guesses, no opinions.',
            'Black Hat: only risks. What could go wrong? What dangers haven\'t we considered? Logical caution — not pessimism.',
          ],
          image:        '/explorer-assets/future-skills/l09-s3-white-black-hats.png',
          imageCaption: 'White Hat asks "what\'s true?" Black Hat asks "what could go wrong?" Every plan needs both before it moves forward.',
          vocab: [
            { word: 'White Hat', definition: 'Facts-only thinking. What\'s verified, what\'s unknown, what\'s an assumption. No opinions allowed.', audioPrompt: 'White Hat — facts-only thinking. What\'s verified, what\'s unknown, what\'s an assumption. No opinions allowed.' },
            { word: 'Black Hat', definition: 'Risk-focused thinking. What could go wrong, what are the weaknesses, what dangers should we watch for. Logical caution.', audioPrompt: 'Black Hat — risk-focused thinking. What could go wrong, what are the weaknesses, what dangers should we watch for. Logical caution.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Yellow & Green — Benefits and Creativity',
          paragraphs: [
            'Yellow Hat: only benefits. What\'s good about this? What\'s the best possible outcome if it works?',
            'Green Hat: only new ideas. What else could we try? What\'s the wildest approach? In Green Hat time, no idea is too strange.',
          ],
          image:        '/explorer-assets/future-skills/l09-s4-yellow-green-hats.png',
          imageCaption: 'Yellow Hat asks "what\'s the upside?" Green Hat asks "what haven\'t we tried?" Together they reveal options.',
          vocab: [
            { word: 'Yellow Hat', definition: 'Benefits-focused thinking. What\'s positive, what could work, what value could this create.', audioPrompt: 'Yellow Hat — benefits-focused thinking. What\'s positive, what could work, what value could this create.' },
            { word: 'Green Hat',  definition: 'Creativity-focused thinking. New ideas, wild alternatives, approaches no one has tried. Strange ideas are welcome.', audioPrompt: 'Green Hat — creativity-focused thinking. New ideas, wild alternatives, approaches no one has tried. Strange ideas are welcome.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Red & Blue — Feelings and Process',
          paragraphs: [
            'Red Hat: only feelings. How does this feel? What\'s your gut saying? No need to justify — just name the feeling.',
            'Blue Hat: only process. How are we thinking? Which hat do we need next? The Blue Hat manages the others.',
          ],
          image:        '/explorer-assets/future-skills/l09-s5-red-blue-hats.png',
          imageCaption: 'Red Hat asks "what does my gut say?" Blue Hat asks "what hat do we need next?" One feels. One conducts.',
          vocab: [
            { word: 'Red Hat',  definition: 'Feelings-focused thinking. Gut reactions, emotions, instincts. No explanations needed — just honest feelings.', audioPrompt: 'Red Hat — feelings-focused thinking. Gut reactions, emotions, instincts. No explanations needed; just honest feelings.' },
            { word: 'Blue Hat', definition: 'Process-focused thinking. Managing how the group thinks — what hat to wear next, when to move on, when to decide.', audioPrompt: 'Blue Hat — process-focused thinking. Managing how the group thinks: what hat to wear next, when to move on, when to decide.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Creativity Is a Skill',
          paragraphs: [
            'Creativity isn\'t something you\'re born with. It\'s a skill that grows with practice — like any other.',
            'The trick: separate generating from judging. When ideas are flowing, don\'t critique. Critique later. Judgment kills creativity in the moment.',
          ],
          image:        '/explorer-assets/future-skills/l09-s6-creativity-grows.png',
          imageCaption: 'Generate first. Judge later. The most creative people don\'t have a different brain — they have a different process.',
          vocab: [
            { word: 'brainstorming',            definition: 'Generating as many ideas as possible without judging any of them. Quantity first; quality comes from sifting later.', audioPrompt: 'Brainstorming — generating as many ideas as possible without judging any of them. Quantity first; quality comes from sifting later.' },
            { word: 'generation vs evaluation', definition: 'A core creativity principle: produce ideas freely first (generation), then evaluate them afterward. Doing both at once kills creativity.', audioPrompt: 'Generation versus evaluation — a core creativity principle: produce ideas freely first, then evaluate them afterward. Doing both at once kills creativity.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each thinking statement, then match it to the hat it belongs to!`,
          guideText:     `Remember: White Hat = facts only. Black Hat = risks and caution. Yellow Hat = optimism and benefits. Green Hat = creativity and new ideas. Can you match each statement to the hat it represents?`,
          columnHeaders: [`The Thinking Statement`, `Which Hat?`],
          items: [
            { image: 'l09-game-white.png',  label: `Listing every fact we know about the problem before anyone suggests a single solution.`,                                                                correctMatch: 'white',  objectPosition: 'center 50%', matchPhrase: `White Hat! White Hat thinking is about facts and information only — no opinions, no guesses, no feelings. Before the group decides anything, White Hat thinking asks: what do we actually know? What's verified? What's still unknown? Starting with White Hat thinking grounds the whole session in reality and prevents the group from making decisions based on assumptions rather than facts.` },
            { image: 'l09-game-black.png',  label: `If we test it without checking for safety problems first, someone might get hurt.`,                                                                    correctMatch: 'black',  objectPosition: 'center 50%', matchPhrase: `Black Hat! Black Hat thinking looks for risks, weaknesses, and caution signals — what could go wrong, what might fail, what dangers haven't been considered. This is one of the most valuable hats because it catches problems before they happen. The key is that Black Hat thinking is logical and specific — it's not pessimism, it's risk assessment. Every team needs a moment of focused Black Hat thinking before acting on any significant decision.` },
            { image: 'l09-game-yellow.png', label: `This plan could save the team hours every week and help everyone feel much less stressed.`,                                                              correctMatch: 'yellow', objectPosition: 'center 50%', matchPhrase: `Yellow Hat! Yellow Hat thinking looks for the positive — what's good about this idea, what benefits could it bring, what's the best possible outcome if it works? Yellow Hat thinking isn't about ignoring problems; it's about making sure the real value of an idea gets examined just as carefully as the risks. A team that only wears Black Hat misses opportunities. Yellow Hat thinking ensures the group sees the upside clearly.` },
            { image: 'l09-game-green.png',  label: `What if we completely flipped the schedule and tried the opposite of what we've always done?`,                                                         correctMatch: 'green',  objectPosition: 'center 50%', matchPhrase: `Green Hat! Green Hat thinking is about creativity and new possibilities — what alternatives haven't been considered, what would happen if we tried something completely different, what new approaches could solve this? Green Hat time is when wild ideas are welcome. During Green Hat thinking, no idea is too unusual to say out loud. Some of the best solutions start as ideas that seemed too strange to take seriously — until someone followed them further.` },
            { image: 'l09-game-white2.png', label: `Checking how many people are affected by the problem and what resources are actually available to solve it.`,                                           correctMatch: 'white',  objectPosition: 'center 50%', matchPhrase: `White Hat again! Gathering information — counting how many people are involved, what resources exist, what the timeline looks like — is always White Hat thinking. White Hat focuses on verifiable facts: numbers, data, confirmed reports, and identified gaps in knowledge. When the group needs to know what they're working with before deciding anything, it's time for the White Hat.` },
          ],
          buckets: [
            { id: 'white',  label: `⬜ White Hat (Facts)`,      color: '#94A3B8' },
            { id: 'black',  label: `🖤 Black Hat (Risks)`,      color: '#6B7280' },
            { id: 'yellow', label: `💛 Yellow Hat (Benefits)`,  color: '#F59E0B' },
            { id: 'green',  label: `💚 Green Hat (Creativity)`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about creative thinking and the Six Hats. Answer all 6 questions to earn your Creative Thinker badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the purpose of the Six Thinking Hats technique?`,
              options:      [`To make meetings more fun`, `To deliberately look at a problem from six different perspectives for more complete thinking`, `To give everyone a role in a group project`, `To decide which person is the best thinker`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does the Black Hat represent?`,
              options:      [`Sadness and negativity`, `Facts and information`, `Caution and risks — what could go wrong`, `Creative and new ideas`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Is creativity something you're born with, or a skill you can develop?`,
              options:      [`Something you're born with — you either have it or you don't`, `A skill you can develop through deliberate practice`, `It depends entirely on your IQ`, `Only artists and musicians can be truly creative`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `The Six Thinking Hats technique works by having everyone in a group focus on the same type of thinking at the same time — so each perspective gets full, undivided attention.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The hat that represents creativity and new ideas — 'what else could we try?' — is the ___ hat.`,
              options:      [`Green`, `Blue`, `Yellow`, `Red`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What does the White Hat represent in the Six Thinking Hats technique?`,
              options:      [`Emotions and gut feelings`, `Caution and risks`, `Facts and information only`, `Creative new ideas`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for "Six Thinking Hats examples" — there are great case studies showing how teams used the technique for real decisions. Look for an example where the Black Hat or Green Hat thinking changed the outcome. The technique looks simple but the results are often surprising.`,
          familyAdventure: `Use the Six Thinking Hats for a real family decision — planning an outing, deciding on a new routine, or solving a household challenge. Have everyone wear the same hat at the same time. Go through at least four hats together. Does it lead to better ideas or a more complete picture than your usual discussions? Notice which hat felt most natural — and which was hardest.`,
          creativePrompt:  `Pick a problem you've been stuck on — at school, with a hobby, or with a friendship. Work through all six hats on your own: White (what are the facts?), Red (how do I feel about it?), Black (what could go wrong with each solution?), Yellow (what's the best outcome I can imagine?), Green (what ideas haven't I tried yet?), Blue (what's my plan?). Write a few sentences for each hat. Does a solution emerge that you hadn't seen before?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'creative-thinker',
          badgeName: `Creative Thinker`,
          message:   `Brilliant work, {name}! You now know that creative thinking is a deliberate skill — and the Six Hats technique lets you look at any problem from six angles no single perspective could cover alone. Facts, feelings, risks, benefits, creativity, and process — all in sequence, all together. The most powerful thinkers switch hats on purpose. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l09_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L09] Loaded: "Creative Thinking: The Six Thinking Hats" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l09-s1-brain-modes.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l09-s2-six-hats-row.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l09-s3-white-black-hats.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l09-s4-yellow-green-hats.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l09-s5-red-blue-hats.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l09-s6-creativity-grows.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L09] brain-modes: ${r1.ok}, six-hats-row: ${r2.ok}, white-black-hats: ${r3.ok}, yellow-green-hats: ${r4.ok}, red-blue-hats: ${r5.ok}, creativity-grows: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L09] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l09_screens;
