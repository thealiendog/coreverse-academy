// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 19
// "The Scientific Method: How We Know Things"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l19_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-19',
      title:     `The Scientific Method: How We Know Things`,
      duration:  12,
      xpReward:  50,
      badge:     'scientific-thinker',
      badgeName: `Scientific Thinker`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `How do we know that the Earth orbits the Sun? That vaccines work? That the universe is 13.8 billion years old? Not by guessing, not by authority, not by tradition — but by a method. The scientific method is the most reliable process humans have ever invented for finding out what's actually true about the world.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `How Do We Know Things?`,
          paragraphs: [
            `How do we know the Earth orbits the Sun? That vaccines work? Not by guessing — by a method.`,
            `The scientific method is the most reliable process humans have ever invented for finding out what's actually true about the world.`,
          ],
          image:        '/explorer-assets/cosmos/l19-s1-inquiry.png',
          imageCaption: `Science is the most reliable way humans have ever found to learn what's true`,
          vocab: [
            { word: 'scientific method', definition: `A step-by-step process for testing ideas and finding out what's true about the world. It's how every science gets done.`, audioPrompt: `Scientific method — a step-by-step process for testing ideas and finding out what's true about the world. It's how every science gets done.` },
            { word: 'evidence',          definition: `Facts or observations that support or disprove a claim. Strong evidence is what makes a scientific finding trustworthy.`, audioPrompt: `Evidence — facts or observations that support or disprove a claim. Strong evidence is what makes a scientific finding trustworthy.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `The Six Steps`,
          paragraphs: [
            `It starts with observation — noticing something. Then research — finding out what's already known. Then a hypothesis — a testable prediction.`,
            `Then the experiment — a careful test. Then data analysis — examining the results. Then a conclusion — did the results support the hypothesis?`,
          ],
          image:        '/explorer-assets/cosmos/l19-s2-six-steps.png',
          imageCaption: `Six steps: observe, research, hypothesise, experiment, analyse, conclude`,
          vocab: [
            { word: 'hypothesis', definition: `An informed, testable prediction about what you expect to happen — and why. A good hypothesis can be supported OR disproved.`, audioPrompt: `Hypothesis — an informed, testable prediction about what you expect to happen, and why. A good hypothesis can be supported or disproved.` },
            { word: 'experiment', definition: `A careful test designed to check whether a hypothesis is true. Experiments must be repeatable — anyone should be able to run them.`, audioPrompt: `Experiment — a careful test designed to check whether a hypothesis is true. Experiments must be repeatable. Anyone should be able to run them.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Variables`,
          paragraphs: [
            `A good experiment changes exactly one thing at a time. The thing you change is the independent variable.`,
            `The thing you measure is the dependent variable. Everything else stays the same — those are the controlled variables. Only change one thing.`,
          ],
          image:        '/explorer-assets/cosmos/l19-s3-variables.png',
          imageCaption: `Change one thing. Measure one thing. Keep everything else exactly the same.`,
          vocab: [
            { word: 'independent variable', definition: `The one thing a scientist deliberately changes in an experiment to test its effect.`, audioPrompt: `Independent variable — the one thing a scientist deliberately changes in an experiment to test its effect.` },
            { word: 'dependent variable',   definition: `The thing you measure in an experiment — it might change depending on what you do to the independent variable.`, audioPrompt: `Dependent variable — the thing you measure in an experiment. It might change depending on what you do to the independent variable.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Control Group`,
          paragraphs: [
            `Imagine testing if a fertiliser helps plants grow. Grow 20 plants — 10 with fertiliser, 10 without. The 10 without are the control group.`,
            `Both groups get the same soil, water, and light. If the fertiliser group grows taller, you know the fertiliser caused it.`,
          ],
          image:        '/explorer-assets/cosmos/l19-s4-control-group.png',
          imageCaption: `The control group gets no treatment — it's what you compare your results against`,
          vocab: [
            { word: 'control group', definition: `A group in an experiment that gets no treatment. Used as a comparison — so you can tell what your treatment actually did.`, audioPrompt: `Control group — a group in an experiment that gets no treatment. Used as a comparison so you can tell what your treatment actually did.` },
            { word: 'fair test',     definition: `An experiment where only one variable is changed at a time — so you can tell exactly what caused the result.`, audioPrompt: `Fair test — an experiment where only one variable is changed at a time, so you can tell exactly what caused the result.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Peer Review and Consensus`,
          paragraphs: [
            `Before scientific findings are accepted, they go through peer review — examination by other experts who check the methods and results.`,
            `When many independent experiments by different scientists all point to the same conclusion, scientific consensus forms. That's how we know smoking causes cancer.`,
          ],
          image:        '/explorer-assets/cosmos/l19-s5-peer-review.png',
          imageCaption: `Real science is checked by other scientists — and confirmed by many experiments, not just one`,
          vocab: [
            { word: 'peer review', definition: `When other experts examine a scientist's work before it's accepted — checking methods, analysis, and conclusions for errors.`, audioPrompt: `Peer review — when other experts examine a scientist's work before it's accepted, checking methods, analysis, and conclusions for errors.` },
            { word: 'consensus',   definition: `Agreement among experts based on the weight of evidence — not because they vote, but because many experiments point the same way.`, audioPrompt: `Consensus — agreement among experts based on the weight of evidence. Not because they vote, but because many experiments point the same way.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `What Science Is For`,
          paragraphs: [
            `Science can answer questions about the natural world — things you can test and measure. Does this drug work? How old is the universe?`,
            `But science can't answer questions of value or taste. Is this fair? Is this beautiful? Those questions matter — but they live outside science's reach.`,
          ],
          image:        '/explorer-assets/cosmos/l19-s6-science-domain.png',
          imageCaption: `Science answers what IS. Other ways of thinking answer what OUGHT to be.`,
          vocab: [
            { word: 'empirical',   definition: `Based on observation, measurement, and experiment — rather than on opinion, authority, or guessing.`, audioPrompt: `Empirical — based on observation, measurement, and experiment, rather than on opinion, authority, or guessing.` },
            { word: 'replication', definition: `Repeating an experiment to make sure the results hold up. A finding that's only been seen once is not yet trusted science.`, audioPrompt: `Replication — repeating an experiment to make sure the results hold up. A finding that's only been seen once is not yet trusted science.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which step of the scientific method it describes!`,
          guideText:     `The scientific method moves through key stages — from making a prediction, to testing it, to recording results, to drawing a conclusion. Each of these four scenarios shows one step in action. Can you match them to the right stage?`,
          columnHeaders: [`What's Happening?`, `Scientific Method Step`],
          items: [
            { image: 'l19-game-hypothesis.png',  label: `A student predicts: "If plants get more sunlight, then they will grow taller, because sunlight powers photosynthesis."`,                      correctMatch: 'hypothesis',     objectPosition: 'center 50%', matchPhrase: `Hypothesis! This prediction is a hypothesis — it's specific, testable, and gives a reason (sunlight powers photosynthesis). A good hypothesis follows an if-then structure and must be measurable. It's not a guess — it's an informed prediction based on what the student already knows about plants and light.` },
            { image: 'l19-game-experiment.png',  label: `A scientist grows 20 identical plants — 10 in bright light, 10 in dim light — measuring and recording their height every day for 4 weeks.`,  correctMatch: 'experiment',     objectPosition: 'center 50%', matchPhrase: `Experiment! This is the controlled test — the scientist changed one thing (light level), kept everything else the same, and measured the result. The two groups (bright and dim light) are the experimental and control conditions. Running the test the same way every day is what makes the results reliable.` },
            { image: 'l19-game-data.png',        label: `After 4 weeks, the scientist calculates average heights for each group, creates charts, and looks for patterns in the numbers.`,            correctMatch: 'data-analysis',  objectPosition: 'center 50%', matchPhrase: `Data analysis! After gathering measurements, the scientist examines them for patterns. Do the bright-light plants consistently grow taller? By how much? Are the results consistent across all 10 plants, or just a few? Analysing data carefully — looking for real patterns rather than random noise — is what turns raw measurements into meaningful findings.` },
            { image: 'l19-game-conclusion.png',  label: `The scientist writes: "Plants with more sunlight grew 40% taller on average, supporting the hypothesis. The experiment should be repeated."`, correctMatch: 'conclusion',      objectPosition: 'center 50%', matchPhrase: `Conclusion! The conclusion connects the results to the hypothesis — did the evidence support or refute it? Notice that the scientist says "supporting" not "proving" — science rarely claims absolute proof. And recommending repetition matters: one experiment is a start. Many replications build real scientific confidence.` },
          ],
          buckets: [
            { id: 'hypothesis',    label: `💡 Hypothesis`,    color: '#818CF8' },
            { id: 'experiment',    label: `🔬 Experiment`,    color: '#60A5FA' },
            { id: 'data-analysis', label: `📊 Data Analysis`, color: '#F59E0B' },
            { id: 'conclusion',    label: `✅ Conclusion`,    color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about the scientific method. Answer all 6 questions to earn your Scientific Thinker badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is a hypothesis?`,
              options:      [`A proven scientific fact accepted by all researchers`, `The final result written at the end of an experiment`, `An informed, testable prediction about what you expect to happen and why`, `A list of materials and equipment needed for an experiment`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is the independent variable in an experiment?`,
              options:      [`The result you measure at the end of the experiment`, `The variable you keep the same in both groups throughout`, `The variable you deliberately change to test its effect`, `The equipment you use to measure the results`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Why is peer review important in science?`,
              options:      [`It allows scientists to publish their findings faster`, `It gives scientists awards and recognition for their work`, `It allows other experts to check methods and results for errors before findings are accepted`, `It helps scientists secure funding for future experiments`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `A hypothesis must be testable — it must make a specific, measurable prediction that can be supported or disproved by evidence from an experiment.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `In an experiment, the ___ variable is the one the scientist deliberately changes to test its effect.`,
              options:      [`independent`, `dependent`, `control`, `constant`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is a control group in an experiment?`,
              options:      [`The group that receives the largest amount of the variable being tested`, `A group that receives no treatment — kept identical to the experimental group so results can be compared`, `The scientist who oversees and manages the whole experiment`, `The group that happens to produce the most interesting or surprising results`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Next time you try something new and wonder if it works, think about how you'd test it — you're already thinking like a scientist.`,
          familyAdventure: `Design a simple home experiment together. Pick a question — "Does warm water dissolve sugar faster than cold water?" or "Do plants grow better near a window or away from it?" or "Does background music affect how fast you can do a puzzle?" Write a hypothesis, design a fair test, collect data for a week, and discuss the results. Did the results match your prediction? What would you change if you ran it again?`,
          creativePrompt:  `Write a one-page "experiment proposal" for a question you're curious about. It must include: your question, your hypothesis (if-then format), how you would test it, what you would measure, how long the test would run, what your control group would be, and what result would support or refute your hypothesis. Swap proposals with a family member or friend and check each other's: Is the hypothesis testable? Is the test fair? Is there a control?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'scientific-thinker',
          badgeName: `Scientific Thinker`,
          message:   `Brilliant work, {name}! You now know how humanity actually learns true things about the universe — not by guessing or believing, but by testing, measuring, and being willing to be wrong. Science is the most powerful tool our species has ever built. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l19_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L19] Loaded: "The Scientific Method: How We Know Things" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l19-s1-inquiry.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l19-s2-six-steps.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l19-s3-variables.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l19-s4-control-group.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l19-s5-peer-review.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l19-s6-science-domain.png',{ method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L19] inquiry: ${r1.ok}, six-steps: ${r2.ok}, variables: ${r3.ok}, control-group: ${r4.ok}, peer-review: ${r5.ok}, science-domain: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L19] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l19_screens;
