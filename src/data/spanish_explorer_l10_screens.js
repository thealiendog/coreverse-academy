// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 10
// "¡Acciones! Action Verbs in Spanish"
// ============================================================

const spanish_explorer_l10_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-10',
      title:     `¡Acciones! Action Verbs in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'action-hero',
      badgeName: `Action Hero`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: ACTION WORDS in Spanish! Run, jump, sing, dance, sleep, eat. Get ready to MOVE — this is the most fun lesson! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Correr y Saltar!`,
          paragraphs: [
            `CORRER means TO RUN! SALTAR means TO JUMP!`,
            `Run in place: ¡CORRER! Now jump up: ¡SALTAR! ¡CORRER! ¡SALTAR!`,
          ],
          image:        '/explorer-assets/languages/l10-s1-correr-saltar.png',
          imageCaption: `¡Correr! Run. ¡Saltar! Jump.`,
          vocab: [
            { word: 'correr', definition: `To run in Spanish.`,                                audioPrompt: `Correr. Correr means to run! Run in place!` },
            { word: 'saltar', definition: `To jump in Spanish.`,                               audioPrompt: `Saltar. Saltar means to jump! Jump up!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Cantar y Bailar!`,
          paragraphs: [
            `CANTAR means TO SING! BAILAR means TO DANCE!`,
            `Sing "la la la": ¡CANTAR! Now dance: ¡BAILAR! Spanish is so FUN!`,
          ],
          image:        '/explorer-assets/languages/l10-s2-cantar-bailar.png',
          imageCaption: `¡Cantar! Sing. ¡Bailar! Dance.`,
          vocab: [
            { word: 'cantar', definition: `To sing in Spanish.`,                                audioPrompt: `Cantar. Cantar means to sing! La la la!` },
            { word: 'bailar', definition: `To dance in Spanish.`,                               audioPrompt: `Bailar. Bailar means to dance! Let's bailar!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Comer y Dormir!`,
          paragraphs: [
            `COMER means TO EAT! DORMIR means TO SLEEP!`,
            `Pretend to chew: ¡COMER! Pretend to sleep (hands under cheek): ¡DORMIR!`,
          ],
          image:        '/explorer-assets/languages/l10-s3-comer-dormir.png',
          imageCaption: `¡Comer! Eat. ¡Dormir! Sleep.`,
          vocab: [
            { word: 'comer',  definition: `To eat in Spanish.`,                                  audioPrompt: `Comer. Comer means to eat! Chew!` },
            { word: 'dormir', definition: `To sleep in Spanish.`,                               audioPrompt: `Dormir. Dormir means to sleep! Zzz!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Simón Dice!`,
          paragraphs: [
            `Simón Dice — Spanish Simon Says with our new verbs!`,
            `Listen and DO: "Simón dice ¡CORRER!" Run! "Simón dice ¡SALTAR!" Jump! "Simón dice ¡CANTAR!" Sing!`,
          ],
          image:        '/explorer-assets/languages/l10-s4-simon-dice.png',
          imageCaption: `Simón Dice — do what Luna says!`,
          vocab: [
            { word: 'simón dice', definition: `Simon says in Spanish — the fun action game!`,                   audioPrompt: `Simón dice — Simon says! Simón dice correr! Simón dice saltar! Simón dice cantar!` },
            { word: 'do',         definition: `To make an action happen — like running or jumping.`,            audioPrompt: `Do — to make an action happen. Do what Simón says!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Yo Puedo!`,
          paragraphs: [
            `YO PUEDO means "I CAN!" Use it to show off what you can do!`,
            `Try it! "Yo puedo CORRER!" "Yo puedo BAILAR!" "Yo puedo CANTAR!" You can do anything!`,
          ],
          image:        '/explorer-assets/languages/l10-s5-yo-puedo.png',
          imageCaption: `¡Yo puedo! I can do it!`,
          vocab: [
            { word: 'yo puedo', definition: `I can in Spanish.`,                              audioPrompt: `Yo puedo. Yo puedo means I can!` },
            { word: 'fuerte',   definition: `Strong in Spanish.`,                                audioPrompt: `Fuerte. Fuerte means strong! You are fuerte!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Action Chant!`,
          paragraphs: [
            `Time to CHANT and MOVE! Do each action as you say it!`,
            `¡CORRER! ¡SALTAR! ¡CANTAR! ¡BAILAR! ¡COMER! ¡DORMIR! ¡YO PUEDO! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l10-s6-chant.png',
          imageCaption: `Chant and move with each word!`,
          vocab: [
            { word: 'action', definition: `Something you DO — like running, jumping, dancing!`,                audioPrompt: `Action — something you do. Chant! Correr! Saltar! Cantar! Bailar! Comer! Dormir! Yo puedo! Olé!` },
            { word: 'energy', definition: `The power inside you that lets you move!`,                          audioPrompt: `Energy — the power inside you. Show your energy!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish action to the right English action!`,
          guideText:     `Tap a Spanish verb, then tap what it means!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l10-game-correr.png', label: `Correr`, correctMatch: 'run',   objectPosition: 'center 50%', matchPhrase: `¡Sí! Correr means TO RUN!` },
            { image: 'l10-game-saltar.png', label: `Saltar`, correctMatch: 'jump',  objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Saltar means TO JUMP!` },
            { image: 'l10-game-cantar.png', label: `Cantar`, correctMatch: 'sing',  objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Cantar means TO SING!` },
            { image: 'l10-game-dormir.png', label: `Dormir`, correctMatch: 'sleep', objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Dormir means TO SLEEP! Zzz!` },
          ],
          buckets: [
            { id: 'run',   label: `Run`,   color: '#EF4444' },
            { id: 'jump',  label: `Jump`,  color: '#FBBF24' },
            { id: 'sing',  label: `Sing`,  color: '#F472B6' },
            { id: 'sleep', label: `Sleep`, color: '#A78BFA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Action Hero badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "correr" mean?`,                                                  options: [`Walk`, `Run`, `Jump`, `Dance`],                  correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "bailar" mean?`,                                                  options: [`Eat`, `Sleep`, `Dance`, `Sing`],                  correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means TO JUMP?`,                                         options: [`Cantar`, `Saltar`, `Dormir`, `Comer`],            correctIndex: 1 },
            { format: 'true-false', question: `"Yo puedo" means I CAN!`,                                                        correctAnswer: true },
            { format: 'fill-blank', question: `When you're tired and want to sleep: "Yo quiero ___"`,                           options: [`dormir`, `cantar`, `correr`, `bailar`],          correctIndex: 0 },
            { format: 'multiple-choice', question: `Which verb is for eating?`,                                                 options: [`Saltar`, `Cantar`, `Comer`, `Dormir`],           correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Use your verbs all day!`,
          familyAdventure: `Play "Spanish Simon Says" with your family! Take turns being Simón. Say "Simón dice CORRER!" or "Simón dice BAILAR!" Get everyone moving!`,
          creativePrompt:  `Draw 6 stick figures doing each action: CORRER (running), SALTAR (jumping), CANTAR (singing), BAILAR (dancing), COMER (eating), DORMIR (sleeping). Label each one!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'action-hero',
          badgeName: `Action Hero`,
          message:   `¡EXCELENTE, {name}! You learned 6 action verbs in Spanish! Now you can describe everything you DO. Luna is so proud! ¡Hasta luego, Action Hero!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L10] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l10-s1-correr-saltar.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l10-s2-cantar-bailar.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l10-s3-comer-dormir.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l10-s4-simon-dice.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l10-s5-yo-puedo.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l10-s6-chant.png',           { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L10] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l10_screens;
