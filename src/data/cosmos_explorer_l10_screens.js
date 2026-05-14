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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Your Body Is a Machine`,
          paragraphs: [
            `Right now, without you thinking about it, your heart is pumping, your lungs are breathing, your brain is processing signals.`,
            `You are an incredibly complex machine running many systems at once — and you didn't have to install any of them.`,
          ],
          image:        '/explorer-assets/cosmos/l10-s1-body-machine.png',
          imageCaption: `Your body runs millions of processes automatically — without you thinking about any of them`,
          vocab: [
            { word: 'system',    definition: `A group of organs working together for one purpose — like the heart and blood vessels working as the circulatory system.`, audioPrompt: `System — a group of organs working together for one purpose, like the heart and blood vessels working as the circulatory system.` },
            { word: 'automatic', definition: `Happening on its own without you thinking about it. Your body's systems run automatically — even while you sleep.`, audioPrompt: `Automatic — happening on its own without you thinking about it. Your body's systems run automatically, even while you sleep.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Circulatory System`,
          paragraphs: [
            `Your heart is a muscle about the size of your fist, and it never stops. It beats 100,000 times every day.`,
            `It pumps blood through 60,000 miles of vessels — that's enough to circle Earth 2.5 times. Blood delivers oxygen to every cell in your body.`,
          ],
          image:        '/explorer-assets/cosmos/l10-s2-circulatory.png',
          imageCaption: `Your heart pumps blood through 60,000 miles of vessels — every cell gets oxygen`,
          vocab: [
            { word: 'circulatory system', definition: `The body system that pumps blood through a network of vessels — delivering oxygen and nutrients to every cell.`, audioPrompt: `Circulatory system — the body system that pumps blood through a network of vessels, delivering oxygen and nutrients to every cell.` },
            { word: 'blood vessel',       definition: `A tube that carries blood through your body. Arteries, veins, and capillaries are all blood vessels.`, audioPrompt: `Blood vessel — a tube that carries blood through your body. Arteries, veins, and capillaries are all blood vessels.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Respiratory System`,
          paragraphs: [
            `When you breathe in, a muscle called the diaphragm pulls down, drawing air into your lungs. You breathe about 20,000 times a day without thinking.`,
            `Your lungs contain 300 million tiny air sacs called alveoli. Spread out flat, they'd cover an area the size of a tennis court — all packed in your chest.`,
          ],
          image:        '/explorer-assets/cosmos/l10-s3-respiratory.png',
          imageCaption: `Your lungs have the surface area of a tennis court — 300 million tiny alveoli packed inside`,
          vocab: [
            { word: 'respiratory system', definition: `The body system that brings oxygen in and removes carbon dioxide. Lungs, diaphragm, and airways all work together.`, audioPrompt: `Respiratory system — the body system that brings oxygen in and removes carbon dioxide. Lungs, diaphragm, and airways all work together.` },
            { word: 'alveoli',            definition: `Tiny air sacs in your lungs — 300 million of them give your lungs a tennis court of surface area for breathing.`, audioPrompt: `Alveoli — tiny air sacs in your lungs. 300 million of them give your lungs a tennis court of surface area for breathing.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Nervous System`,
          paragraphs: [
            `Your brain contains about 86 billion neurons — nerve cells that send electrical signals at up to 268 miles per hour.`,
            `When you touch something hot, the signal races to your brain and back to your muscles almost instantly. Your brain controls everything.`,
          ],
          image:        '/explorer-assets/cosmos/l10-s4-nervous.png',
          imageCaption: `Your brain — 86 billion neurons firing signals at 268 mph, controlling everything`,
          vocab: [
            { word: 'nervous system', definition: `The body system made of brain, spinal cord, and nerves. It controls every movement, sensation, thought, and automatic function.`, audioPrompt: `Nervous system — the body system made of brain, spinal cord, and nerves. It controls every movement, sensation, thought, and automatic function.` },
            { word: 'neuron',         definition: `A nerve cell that sends electrical signals. Your brain contains about 86 billion of them — more than there are stars in our galaxy.`, audioPrompt: `Neuron — a nerve cell that sends electrical signals. Your brain contains about 86 billion of them, more than there are stars in our galaxy.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Digestive and Skeletal`,
          paragraphs: [
            `The digestive system breaks food into nutrients your cells can use — a journey that takes 24 to 72 hours from mouth to exit.`,
            `The skeletal system gives your body structure. You have 206 bones, and they're living tissue that constantly renews itself.`,
          ],
          image:        '/explorer-assets/cosmos/l10-s5-digestive-skeletal.png',
          imageCaption: `Your 206 bones aren't dead — they're living tissue that constantly renews`,
          vocab: [
            { word: 'digestive system', definition: `The body system that breaks food into nutrients your cells can use — a 24 to 72 hour journey from mouth to exit.`, audioPrompt: `Digestive system — the body system that breaks food into nutrients your cells can use. A 24 to 72 hour journey from mouth to exit.` },
            { word: 'skeletal system',  definition: `Your 206 bones — they give you structure, protect your organs, and are living tissue that constantly renews itself.`, audioPrompt: `Skeletal system — your 206 bones. They give you structure, protect your organs, and are living tissue that constantly renews itself.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `All Systems at Once`,
          paragraphs: [
            `Your body runs many systems in parallel, all the time. Muscles move you (over 600 of them). The immune system fights off invaders.`,
            `The endocrine system sends hormone messages between organs. All of this works automatically — you don't have to think about any of it.`,
          ],
          image:        '/explorer-assets/cosmos/l10-s6-all-systems.png',
          imageCaption: `Every body system runs in parallel — all the time, all working together`,
          vocab: [
            { word: 'immune system',    definition: `Your body's defense force. It identifies and destroys invaders like bacteria, viruses, and harmful things.`, audioPrompt: `Immune system — your body's defense force. It identifies and destroys invaders like bacteria, viruses, and harmful things.` },
            { word: 'endocrine system', definition: `The body system that uses hormones to send chemical messages between organs — regulating growth, mood, sleep, and more.`, audioPrompt: `Endocrine system — the body system that uses hormones to send chemical messages between organs, regulating growth, mood, sleep, and more.` },
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
    fetch('/explorer-assets/cosmos/l10-s1-body-machine.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l10-s2-circulatory.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l10-s3-respiratory.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l10-s4-nervous.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l10-s5-digestive-skeletal.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l10-s6-all-systems.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L10] body-machine: ${r1.ok}, circulatory: ${r2.ok}, respiratory: ${r3.ok}, nervous: ${r4.ok}, digestive-skeletal: ${r5.ok}, all-systems: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L10] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l10_screens;
