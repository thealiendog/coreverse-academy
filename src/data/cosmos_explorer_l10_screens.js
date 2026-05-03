// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 10
// "The Human Body: Amazing Systems"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l10_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-10',
      title:     `The Human Body: Amazing Systems`,
      duration:  12,
      xpReward:  50,
      badge:     'body-explorer',
      badgeName: `Body Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Right now, without you doing anything consciously, your heart is pumping, your lungs are breathing, your kidneys are filtering, your immune system is fighting, and your nervous system is processing millions of signals. You are an incredibly complex and beautiful machine — and you didn't have to install any of it.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `The Circulatory System: Your Transport Network`,
          paragraphs: [
            `Your heart is a muscle about the size of your fist, and it never stops working. It pumps blood through a network of blood vessels — arteries, veins, and capillaries — that reaches every single cell in your body. Blood delivers oxygen and nutrients to cells and carries carbon dioxide and waste products away.`,
            `Your heart beats about 100,000 times per day — roughly 3 billion times over a lifetime. If you stretched out all the blood vessels in one human body end to end, they would circle the Earth about 2.5 times. That's over 60,000 miles of tubes inside you right now.`,
            `Arteries carry blood away from the heart. Veins carry it back. Capillaries are the smallest vessels — thinner than a human hair — where the actual exchange of oxygen and nutrients with cells happens. The entire circuit takes about one minute.`,
          ],
          image:        '/explorer-assets/cosmos/l10-magazine-circulatory.png',
          imageCaption: `The circulatory system — heart and blood vessels delivering oxygen to every cell in your body`,
          vocab: [
            { word: 'circulatory system', definition: `The body system that pumps blood through a network of vessels — it delivers oxygen and nutrients to every cell and removes carbon dioxide and waste.`, audioPrompt: `Circulatory system — the body system that pumps blood through a network of vessels. It delivers oxygen and nutrients to every cell and removes carbon dioxide and waste.` },
            { word: 'capillaries',        definition: `The smallest blood vessels in the body — thinner than a human hair — where oxygen and nutrients pass from blood into cells, and waste passes back into blood.`,  audioPrompt: `Capillaries — the smallest blood vessels in the body, thinner than a human hair, where oxygen and nutrients pass from blood into cells and waste passes back into blood.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Respiratory System: Your Breathing Engine`,
          paragraphs: [
            `When you breathe in, a dome-shaped muscle called the diaphragm contracts and pulls downward, expanding your chest cavity and drawing air into your lungs. Inside your lungs, oxygen passes through thin walls into the bloodstream. Carbon dioxide — a waste gas your cells produce — passes from the blood into the lungs and is breathed out.`,
            `You breathe about 20,000 times per day without thinking about it. Your lungs contain about 300 million tiny air sacs called alveoli. If you unfolded all the alveoli in both lungs and laid them flat, they'd cover an area roughly the size of a tennis court — all packed into your chest.`,
            `Breathing is so automatic that it continues while you sleep, during exercise, and in moments of stress. Your brainstem monitors carbon dioxide levels in your blood and adjusts your breathing rate constantly to keep the balance exactly right.`,
          ],
          image:        '/explorer-assets/cosmos/l10-magazine-respiratory.png',
          imageCaption: `The respiratory system — lungs, diaphragm, and 300 million alveoli exchanging oxygen for carbon dioxide`,
          vocab: [
            { word: 'respiratory system', definition: `The body system that brings oxygen into the body and removes carbon dioxide — it includes the lungs, diaphragm, and airways.`,                                                          audioPrompt: `Respiratory system — the body system that brings oxygen into the body and removes carbon dioxide. It includes the lungs, diaphragm, and airways.` },
            { word: 'alveoli',            definition: `Tiny air sacs in the lungs where oxygen passes into the bloodstream and carbon dioxide passes out — 300 million of them give your lungs the surface area of a tennis court.`, audioPrompt: `Alveoli — tiny air sacs in the lungs where oxygen passes into the bloodstream and carbon dioxide passes out. 300 million of them give your lungs the surface area of a tennis court.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `The Nervous System: Your Command Centre`,
          paragraphs: [
            `Your brain, spinal cord, and a vast network of nerves make up the nervous system. It controls everything — voluntary movements like walking and talking, involuntary functions like digestion and heartbeat, your senses, your emotions, your memory, and your thoughts.`,
            `Your brain contains about 86 billion neurons — nerve cells that send electrical signals to each other. Nerve signals travel at up to 268 miles per hour. When you touch something hot, the signal travels from your fingertip to your brain and back out to your muscles almost instantly.`,
            `Here's a remarkable fact: your brain uses about 20% of all the energy your body needs, even though it accounts for only about 2% of your body weight. The brain never truly rests — even while you sleep, it's processing memories, regulating your body, and consolidating everything you learned during the day.`,
          ],
          image:        '/explorer-assets/cosmos/l10-magazine-nervous.png',
          imageCaption: `The nervous system — 86 billion neurons sending signals at 268 mph through brain, spine, and nerves`,
          vocab: [
            { word: 'nervous system', definition: `The body system made up of the brain, spinal cord, and nerves — it controls every function of the body, from conscious movement to automatic processes like heartbeat.`, audioPrompt: `Nervous system — the body system made up of the brain, spinal cord, and nerves. It controls every function of the body, from conscious movement to automatic processes like heartbeat.` },
            { word: 'neuron',         definition: `A nerve cell that sends and receives electrical signals — your brain contains about 86 billion neurons, forming a network more complex than any computer ever built.`,       audioPrompt: `Neuron — a nerve cell that sends and receives electrical signals. Your brain contains about 86 billion neurons, forming a network more complex than any computer ever built.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Your Body's Other Systems`,
          paragraphs: [
            `Your body runs many systems in parallel, all the time. The digestive system breaks food into nutrients your cells can use — a journey that takes about 24 to 72 hours from mouth to exit. The skeletal system gives your body structure and protects your organs — you have 206 bones, and they're living tissue that constantly renews itself.`,
            `The muscular system moves your body using over 600 muscles. Some are under your conscious control, like the ones in your arms. Others, like your heart and the muscles lining your digestive tract, work automatically. The immune system is your body's defence force — identifying and destroying invaders like bacteria and viruses.`,
            `The endocrine system uses chemical messengers called hormones to communicate between organs — regulating growth, metabolism, mood, sleep, and more. All these systems work simultaneously, constantly adjusting to each other, keeping you alive and well without you having to think about any of it.`,
          ],
          image:        '/explorer-assets/cosmos/l10-magazine-other-systems.png',
          imageCaption: `Digestive, skeletal, muscular, immune, and endocrine systems — all working together, all the time`,
          vocab: [
            { word: 'digestive system',  definition: `The body system that breaks food down into nutrients the body can use — a process that takes between 24 and 72 hours from the moment food enters your mouth.`,                              audioPrompt: `Digestive system — the body system that breaks food down into nutrients the body can use. A process that takes between 24 and 72 hours from the moment food enters your mouth.` },
            { word: 'endocrine system',  definition: `The body system that uses hormones to send chemical messages between organs — regulating growth, metabolism, sleep, mood, and many other essential functions.`, audioPrompt: `Endocrine system — the body system that uses hormones to send chemical messages between organs, regulating growth, metabolism, sleep, mood, and many other essential functions.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which body system it describes!`,
          guideText:     `Your body runs four major systems at the same time — the circulatory, respiratory, nervous, and digestive systems. Each has its own specific job. Can you match each description to the right system?`,
          columnHeaders: [`What's Happening?`, `Body System`],
          items: [
            { image: 'l10-game-heart.png',   label: `Your heart pumping blood through arteries to deliver oxygen to every cell in your body.`,              correctMatch: 'circulatory', objectPosition: 'center 50%', matchPhrase: `Circulatory system! Your heart beats 100,000 times per day, pushing blood through 60,000 miles of blood vessels to reach every single cell. Blood delivers oxygen and nutrients and carries waste products away — a continuous delivery service running every second of your life.` },
            { image: 'l10-game-lungs.png',   label: `Oxygen crossing from your lungs into your bloodstream as you breathe in.`,                            correctMatch: 'respiratory', objectPosition: 'center 50%', matchPhrase: `Respiratory system! Every breath you take pulls oxygen through your airways into 300 million tiny alveoli, where it crosses into your blood. At the same time, carbon dioxide — the waste gas from your cells — passes the other way and gets breathed out. 20,000 times per day.` },
            { image: 'l10-game-brain.png',   label: `Your brain sending nerve signals at 268 miles per hour to control your movements.`,                   correctMatch: 'nervous',     objectPosition: 'center 50%', matchPhrase: `Nervous system! Your brain is the command centre — 86 billion neurons firing signals at 268 miles per hour, controlling every movement, sensation, thought, and automatic body function. It uses 20% of your body's energy while weighing only 2% of your body weight.` },
            { image: 'l10-game-stomach.png', label: `Your stomach breaking down food into nutrients that your cells can absorb and use for energy.`,        correctMatch: 'digestive',   objectPosition: 'center 50%', matchPhrase: `Digestive system! From the moment food enters your mouth, a 24–72 hour journey begins — stomach acids break it down, the small intestine absorbs nutrients into the bloodstream, and the large intestine handles what's left. Your digestive system extracts everything useful from everything you eat.` },
          ],
          buckets: [
            { id: 'circulatory', label: `❤️ Circulatory`, color: '#F59E0B' },
            { id: 'respiratory', label: `🫁 Respiratory`, color: '#60A5FA' },
            { id: 'nervous',     label: `🧠 Nervous`,     color: '#818CF8' },
            { id: 'digestive',   label: `🍽️ Digestive`,  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about the human body. Answer all 6 questions to earn your Body Explorer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What does the circulatory system do?`,
              options:      [`Breaks down food into nutrients`, `Controls movement and thought`, `Pumps blood to deliver oxygen and nutrients to cells and remove waste`, `Produces hormones that control the body`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `How many times does your heart beat approximately per day?`,
              options:      [`About 1,000 times`, `About 10,000 times`, `About 100,000 times`, `About 1,000,000 times`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What percentage of your body's energy does the brain use?`,
              options:      [`About 2%`, `About 5%`, `About 20%`, `About 50%`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Your lungs have a surface area roughly the size of a tennis court.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Your lungs contain about 300 million tiny air sacs called ___.`,
              options:      [`alveoli`, `neurons`, `capillaries`, `valves`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which body system uses hormones to send messages between organs?`,
              options:      [`Circulatory`, `Nervous`, `Endocrine`, `Digestive`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Find your pulse and count your heartbeats for 15 seconds — then do 20 jumping jacks and count again!`,
          familyAdventure: `Do a family body systems challenge: each person picks one body system and does 5 minutes of research. Then everyone teaches the others what they learned. Bonus: find one surprising fact about your system that nobody else knew. Make it a competition for the most mind-blowing fact.`,
          creativePrompt:  `Find your pulse by pressing two fingers on the inside of your wrist or on your neck. Count beats for 15 seconds, then multiply by 4 to get your resting heart rate per minute. Now do 30 jumping jacks. Count again immediately. How much did it change? Why did your heart speed up? What does that tell you about what your body needs during exercise?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'body-explorer',
          badgeName: `Body Explorer`,
          message:   `Brilliant work, {name}! You now know that right now, without thinking about it, your body is carrying out millions of processes — pumping, breathing, filtering, signalling, defending. You are the most extraordinary machine in the known universe. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l10_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L10] Loaded: "The Human Body: Amazing Systems" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l10-magazine-circulatory.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l10-magazine-respiratory.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l10-magazine-nervous.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l10-magazine-other-systems.png',{ method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L10] circulatory: ${r1.ok}, respiratory: ${r2.ok}, nervous: ${r3.ok}, other-systems: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L10] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l10_screens;
