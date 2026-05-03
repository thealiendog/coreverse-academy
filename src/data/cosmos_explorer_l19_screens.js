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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `The Six Steps of the Scientific Method`,
          paragraphs: [
            `The scientific method is a repeatable process for testing ideas about the world. It begins with observation — noticing something and asking a question about it. Then comes research — finding out what's already known. Then the hypothesis — a testable, informed prediction. Then the experiment — a controlled test of that prediction. Then data analysis — examining the results carefully. And finally, a conclusion — deciding whether the results support or refute the hypothesis.`,
            `A crucial feature of this process is that it's repeatable. Any scientist anywhere in the world should be able to follow the same steps and get the same results. If results can't be reproduced, they can't be trusted. Reproducibility is what separates scientific knowledge from opinion, rumour, or wishful thinking.`,
            `The method also explicitly allows for being wrong. If the experiment's results don't match the hypothesis, you revise the hypothesis and test again. Being wrong isn't failure — it's information. Every null result (an experiment that disproves a hypothesis) is genuine progress, because it eliminates one wrong idea and points toward a better one.`,
          ],
          image:        '/explorer-assets/cosmos/l19-magazine-six-steps.png',
          imageCaption: `The scientific method — six repeatable steps from observation and question through to conclusion`,
          vocab: [
            { word: 'hypothesis',    definition: `An informed, testable prediction about what you expect to happen and why — it must be specific and measurable, capable of being supported or disproved by evidence from an experiment.`, audioPrompt: `Hypothesis — an informed, testable prediction about what you expect to happen and why. It must be specific and measurable, capable of being supported or disproved by evidence from an experiment.` },
            { word: 'reproducibility', definition: `The ability of an experiment to produce the same results when repeated by different scientists — reproducibility is essential to scientific credibility and separates verified findings from coincidences.`, audioPrompt: `Reproducibility — the ability of an experiment to produce the same results when repeated by different scientists. Reproducibility is essential to scientific credibility and separates verified findings from coincidences.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Variables and Controls`,
          paragraphs: [
            `A well-designed experiment changes exactly one thing at a time. The thing you deliberately change is called the independent variable. The thing you measure in response is the dependent variable. Everything else — temperature, light levels, the amount of water, the container size, the time of day — is kept the same. These constant conditions are called the controlled variables.`,
            `A control group is a group in the experiment that receives no treatment at all — it's kept exactly as it was before the experiment started. The control group gives you something to compare against. Without it, you can't know whether a change in your results was caused by your independent variable or by some other factor you didn't account for.`,
            `Imagine testing whether a new fertiliser helps plants grow. You grow 20 plants: 10 with the fertiliser (the experimental group) and 10 without it (the control group). Both groups get the same soil, water, light, and temperature. If the fertiliser group grows taller, you can be confident the fertiliser caused it — because everything else was the same.`,
          ],
          image:        '/explorer-assets/cosmos/l19-magazine-variables.png',
          imageCaption: `Variables and controls — independent, dependent, and controlled variables; control groups for comparison`,
          vocab: [
            { word: 'independent variable', definition: `The variable in an experiment that the scientist deliberately changes to test its effect — only one variable should be changed at a time so results can be attributed to it.`,        audioPrompt: `Independent variable — the variable in an experiment that the scientist deliberately changes to test its effect. Only one variable should be changed at a time so results can be attributed to it.` },
            { word: 'control group',        definition: `A group in an experiment that receives no treatment — kept identical to the experimental group in all other conditions, so results can be compared to determine the effect of the variable.`, audioPrompt: `Control group — a group in an experiment that receives no treatment. Kept identical to the experimental group in all other conditions, so results can be compared to determine the effect of the variable.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Science Is Self-Correcting`,
          paragraphs: [
            `Before scientific findings are published, they go through peer review — examination by other experts in the same field. Reviewers check whether the methods were sound, the analysis was correct, and the conclusions are supported by the data. Peer review is imperfect, but it's the best filter humanity has developed for separating reliable findings from flawed ones.`,
            `When many independent experiments in different labs by different scientists all point to the same conclusion, scientific consensus forms. Consensus doesn't mean unanimous certainty — it means the weight of evidence strongly points in one direction. That's how we know smoking causes cancer, that DNA carries genetic information, and that the universe is expanding.`,
            `Science is self-correcting — when new evidence contradicts an established idea, the idea changes, not the evidence. This has happened many times. For centuries, scientists believed in a substance called "phlogiston" that was released during burning. When oxygen was discovered, the phlogiston theory collapsed — and scientists updated their understanding. Science changes when evidence demands it. That's a feature, not a weakness.`,
          ],
          image:        '/explorer-assets/cosmos/l19-magazine-peer-review.png',
          imageCaption: `Peer review and consensus — science self-corrects when new evidence demands it, building reliable knowledge`,
          vocab: [
            { word: 'peer review',         definition: `The process of having a scientist's work examined by other experts before publication — it checks methods, analysis, and conclusions to filter out errors and improve reliability.`,      audioPrompt: `Peer review — the process of having a scientist's work examined by other experts before publication. It checks methods, analysis, and conclusions to filter out errors and improve reliability.` },
            { word: 'scientific consensus', definition: `The collective agreement of experts in a field based on the accumulated weight of evidence — not unanimous certainty, but the strongest supported conclusion given all available data.`, audioPrompt: `Scientific consensus — the collective agreement of experts in a field based on the accumulated weight of evidence. Not unanimous certainty, but the strongest supported conclusion given all available data.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `What Science Can and Can't Do`,
          paragraphs: [
            `Science is the most powerful tool humanity has for answering questions about the natural world — questions that can be tested, measured, and observed. Is this drug effective? How hot will Earth be in 2100? What is the mass of the Sun? These are scientific questions. The scientific method can investigate them and produce reliable, evidence-based answers.`,
            `But science doesn't answer all questions. Questions of value — Is this fair? Should we do this? What makes a life meaningful? — aren't scientific questions because they can't be settled by measurement or experiment. Questions of taste — Is this beautiful? Is this music good? — similarly lie outside science's reach. Science tells us what is; other ways of thinking must address what ought to be.`,
            `Understanding what science is — and what it isn't — matters enormously in everyday life. When someone says "studies show," it's worth asking: Were the studies peer-reviewed? Has the finding been replicated? Is there scientific consensus? A single study proving anything is almost meaningless. What matters is the accumulated weight of evidence from many independent investigations. That's what scientific knowledge actually looks like.`,
          ],
          image:        '/explorer-assets/cosmos/l19-magazine-what-science-does.png',
          imageCaption: `What science can and can't do — testable natural questions yes, questions of value or taste no`,
          vocab: [
            { word: 'empirical',  definition: `Based on observation, measurement, and experiment — empirical evidence is gathered directly from the world rather than from logic, authority, or tradition alone.`,                               audioPrompt: `Empirical — based on observation, measurement, and experiment. Empirical evidence is gathered directly from the world rather than from logic, authority, or tradition alone.` },
            { word: 'replication', definition: `Repeating an experiment independently to verify its results — a finding that has been replicated many times by different researchers is far more reliable than one that has been done only once.`, audioPrompt: `Replication — repeating an experiment independently to verify its results. A finding that has been replicated many times by different researchers is far more reliable than one that has been done only once.` },
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
    fetch('/explorer-assets/cosmos/l19-magazine-six-steps.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l19-magazine-variables.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l19-magazine-peer-review.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l19-magazine-what-science-does.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L19] six-steps: ${r1.ok}, variables: ${r2.ok}, peer-review: ${r3.ok}, what-science-does: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L19] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l19_screens;
