// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 8
// "¡Los Días! Days of the Week in Spanish"
// ============================================================

const spanish_explorer_l08_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-08',
      title:     `¡Los Días! Days of the Week`,
      duration:  12,
      xpReward:  50,
      badge:     'week-walker',
      badgeName: `Week Walker`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: DAYS of the week in Spanish! Lunes, martes, miércoles... Spanish kids start their week with LUNES (Monday), not Sunday like in English calendars! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Lunes y Martes!`,
          paragraphs: [
            `LUNES means MONDAY — first day of the week in Spanish! MARTES means TUESDAY.`,
            `Spanish kids start their school week on LUNES! Try them: ¡LUNES! ¡MARTES! Clap each one!`,
          ],
          image:        '/explorer-assets/languages/l08-s1-lunes-martes.png',
          imageCaption: `¡Lunes! Monday. ¡Martes! Tuesday.`,
          vocab: [
            { word: 'lunes',  definition: `Monday in Spanish.`,                       audioPrompt: `Lunes. Lunes means Monday!` },
            { word: 'martes', definition: `Tuesday in Spanish.`,                      audioPrompt: `Martes. Martes means Tuesday!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Miércoles y Jueves!`,
          paragraphs: [
            `MIÉRCOLES means WEDNESDAY! It's a long word — say it slowly: mee-EHR-ko-lehs.`,
            `JUEVES means THURSDAY! Try them: ¡MIÉRCOLES! ¡JUEVES! Halfway through the week!`,
          ],
          image:        '/explorer-assets/languages/l08-s2-miercoles-jueves.png',
          imageCaption: `¡Miércoles! Wednesday. ¡Jueves! Thursday.`,
          vocab: [
            { word: 'miércoles', definition: `Wednesday in Spanish.`,         audioPrompt: `Miércoles. Miércoles means Wednesday!` },
            { word: 'jueves',    definition: `Thursday in Spanish.`,                 audioPrompt: `Jueves. Jueves means Thursday!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Viernes!`,
          paragraphs: [
            `VIERNES means FRIDAY! The BEST day! Almost the weekend!`,
            `Cheer with Luna: ¡VIERNES! ¡VIERNES! ¡VIERNES! Spanish kids LOVE viernes — like you!`,
          ],
          image:        '/explorer-assets/languages/l08-s3-viernes.png',
          imageCaption: `¡Viernes! Friday! Almost weekend!`,
          vocab: [
            { word: 'viernes', definition: `Friday in Spanish.`,                  audioPrompt: `Viernes. Viernes means Friday! The best day!` },
            { word: 'cheer',   definition: `To shout happily for something!`,                                 audioPrompt: `Cheer — to shout happily. Cheer for viernes!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Sábado y Domingo!`,
          paragraphs: [
            `SÁBADO means SATURDAY! DOMINGO means SUNDAY! THE WEEKEND! ¡El fin de semana!`,
            `Dance and say: ¡SÁBADO! ¡DOMINGO! Time for play, family, and fun!`,
          ],
          image:        '/explorer-assets/languages/l08-s4-sabado-domingo.png',
          imageCaption: `¡Sábado! Saturday. ¡Domingo! Sunday. WEEKEND!`,
          vocab: [
            { word: 'sábado',  definition: `Saturday in Spanish.`,                 audioPrompt: `Sábado. Sábado means Saturday!` },
            { word: 'domingo', definition: `Sunday in Spanish.`,                    audioPrompt: `Domingo. Domingo means Sunday!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¿Qué día es hoy?`,
          paragraphs: [
            `¿QUÉ DÍA ES HOY? means "What day is today?" Ask your family!`,
            `Answer: "Hoy es ___" (Today is ___). Like "Hoy es LUNES!" Try it for today: "Hoy es..."!`,
          ],
          image:        '/explorer-assets/languages/l08-s5-que-dia.png',
          imageCaption: `What day is it today? ¿Qué día es hoy?`,
          vocab: [
            { word: 'hoy', definition: `Today in Spanish.`,                                  audioPrompt: `Hoy. Hoy means today!` },
            { word: 'día', definition: `Day in Spanish.`,                                audioPrompt: `Día. Día means day!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Week Chant!`,
          paragraphs: [
            `Time to CHANT the days! Hold up a finger for each one!`,
            `¡LUNES! ¡MARTES! ¡MIÉRCOLES! ¡JUEVES! ¡VIERNES! ¡SÁBADO! ¡DOMINGO! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l08-s6-chant.png',
          imageCaption: `Chant all 7 days of the week!`,
          vocab: [
            { word: 'week',  definition: `Seven days together!`,                                              audioPrompt: `Week — seven days together. Chant the week! Lunes! Martes! Miércoles! Jueves! Viernes! Sábado! Domingo! Olé!` },
            { word: 'seven', definition: `The number 7 — how many days are in a week!`,                       audioPrompt: `Seven — the number seven. Seven days in a week!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish day to the right English day!`,
          guideText:     `Tap a Spanish day, then tap what day it is!`,
          columnHeaders: [`Spanish Day`, `English Day`],
          items: [
            { image: 'l08-game-lunes.png',    label: `Lunes`,    correctMatch: 'monday',   objectPosition: 'center 50%', matchPhrase: `¡Sí! Lunes is MONDAY! First day!` },
            { image: 'l08-game-viernes.png',  label: `Viernes`,  correctMatch: 'friday',   objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Viernes is FRIDAY! Best day!` },
            { image: 'l08-game-sabado.png',   label: `Sábado`,   correctMatch: 'saturday', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Sábado is SATURDAY! Weekend!` },
            { image: 'l08-game-domingo.png',  label: `Domingo`,  correctMatch: 'sunday',   objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Domingo is SUNDAY!` },
          ],
          buckets: [
            { id: 'monday',   label: `Monday`,   color: '#60A5FA' },
            { id: 'friday',   label: `Friday`,   color: '#FBBF24' },
            { id: 'saturday', label: `Saturday`, color: '#F472B6' },
            { id: 'sunday',   label: `Sunday`,   color: '#A78BFA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Week Walker badge!`,
          questions: [
            { format: 'multiple-choice', question: `What day is "lunes"?`,                                                     options: [`Sunday`, `Monday`, `Tuesday`, `Friday`],          correctIndex: 1 },
            { format: 'multiple-choice', question: `What day is "viernes"?`,                                                   options: [`Tuesday`, `Wednesday`, `Friday`, `Saturday`],     correctIndex: 2 },
            { format: 'multiple-choice', question: `Which day is SATURDAY in Spanish?`,                                        options: [`Domingo`, `Sábado`, `Jueves`, `Martes`],          correctIndex: 1 },
            { format: 'true-false', question: `"Domingo" means SUNDAY in Spanish.`,                                            correctAnswer: true },
            { format: 'fill-blank', question: `What day is today? "___ es..."`,                                                options: [`Hoy`, `Mañana`, `Ayer`, `Esta`],                 correctIndex: 0 },
            { format: 'multiple-choice', question: `Which day starts the Spanish week?`,                                       options: [`Domingo`, `Lunes`, `Viernes`, `Miércoles`],       correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Now use the days in real life!`,
          familyAdventure: `Every morning this week, ask your family: "¿Qué día es hoy?" (What day is today?) Then say "Hoy es ___!" in Spanish. By Sunday you'll know all 7 days by heart!`,
          creativePrompt:  `Make a "Spanish Week Calendar" for your wall. Draw 7 boxes in a row. Label each one: LUNES, MARTES, MIÉRCOLES, JUEVES, VIERNES, SÁBADO, DOMINGO. Add a fun activity drawing for each day!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'week-walker',
          badgeName: `Week Walker`,
          message:   `¡EXCELENTE, {name}! You learned all 7 days of the week in Spanish! Now you can plan your whole week in TWO languages. Luna is so proud! ¡Hasta luego, mi amigo!`,
        },
      ],
    },
  ],
};

(() => {
  const l = spanish_explorer_l08_screens.lessons[0];
  console.log(`[LESSON-SPANISH-L08] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l08-s1-lunes-martes.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l08-s2-miercoles-jueves.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l08-s3-viernes.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l08-s4-sabado-domingo.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l08-s5-que-dia.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l08-s6-chant.png',             { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L08] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l08_screens;
