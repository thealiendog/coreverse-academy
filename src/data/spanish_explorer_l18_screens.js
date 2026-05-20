// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 18
// "¡Ayuda! Asking for Help"
// ============================================================

const spanish_explorer_l18_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-18',
      title:     `¡Ayuda! Asking for Help in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'helper-hero',
      badgeName: `Helper Hero`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: words to ASK FOR HELP in Spanish. Kids need help sometimes — and it's GREAT to ask! Let's learn the magic words. ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Ayuda! (Say: ah-YOO-dah)`,
          paragraphs: [
            `AYUDA means HELP! If you need help, just say it!`,
            `Reach out your hands: ¡AYUDA! ¡AYUDA! Strong kids ask for ayuda when they need it!`,
          ],
          image:        '/explorer-assets/languages/l18-s1-ayuda.png',
          imageCaption: `¡Ayuda! Help!`,
          vocab: [
            { word: 'ayuda', definition: `Help in Spanish. Say: ah-YOO-dah.`,                                 audioPrompt: `Ayuda — say it like ah-YOO-dah. Ayuda means help!` },
            { word: 'ayudar', definition: `To help in Spanish! Say: ah-yoo-DAR.`,                              audioPrompt: `Ayudar — say it like ah-yoo-DAR. Ayudar means to help!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡No entiendo! (Say: no en-tee-EN-do)`,
          paragraphs: [
            `NO ENTIENDO means "I DON'T UNDERSTAND!" Super useful when something is confusing!`,
            `Shrug your shoulders: ¡NO ENTIENDO! It's brave to admit you don't understand!`,
          ],
          image:        '/explorer-assets/languages/l18-s2-no-entiendo.png',
          imageCaption: `¡No entiendo! I don't understand!`,
          vocab: [
            { word: 'no entiendo', definition: `I don't understand in Spanish.`,                              audioPrompt: `No entiendo — I don't understand! Shrug and say no entiendo!` },
            { word: 'entiendo',    definition: `I understand in Spanish!`,                                    audioPrompt: `Entiendo — I understand! Nod your head!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¿Dónde está? (Say: DOHN-deh es-TAH)`,
          paragraphs: [
            `¿DÓNDE ESTÁ? means "WHERE IS IT?" Lost something? Ask this!`,
            `Hold up your hands like searching: ¿DÓNDE ESTÁ? "¿Dónde está mi libro?" "Where is my book?"`,
          ],
          image:        '/explorer-assets/languages/l18-s3-donde-esta.png',
          imageCaption: `¿Dónde está? Where is it?`,
          vocab: [
            { word: '¿dónde está?', definition: `Where is it? in Spanish.`,                                   audioPrompt: `Dónde está — where is it? Ask: ¿Dónde está?` },
            { word: 'aquí',         definition: `Here in Spanish! Say: ah-KEE.`,                              audioPrompt: `Aquí — say it like ah-KEE. Aquí means here!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Lo siento! (Say: lo see-EN-toh)`,
          paragraphs: [
            `LO SIENTO means I'M SORRY! When you make a mistake, this is the word!`,
            `Put your hand on your heart: ¡LO SIENTO! Brave kids say lo siento when they mess up!`,
          ],
          image:        '/explorer-assets/languages/l18-s4-lo-siento.png',
          imageCaption: `¡Lo siento! I'm sorry!`,
          vocab: [
            { word: 'lo siento', definition: `I'm sorry in Spanish. Say: lo see-EN-toh.`,                     audioPrompt: `Lo siento — say it like lo see-EN-toh. Lo siento means I'm sorry!` },
            { word: 'perdón',    definition: `Pardon me / sorry in Spanish! Say: pehr-DOHN.`,                 audioPrompt: `Perdón — say it like pehr-DOHN. Perdón means pardon me or sorry!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Más despacio! (Say: mahs des-PAH-see-oh)`,
          paragraphs: [
            `MÁS DESPACIO means SLOWER, PLEASE! Spanish speakers can talk FAST!`,
            `Wave your hands down slowly: ¡MÁS DESPACIO! "Por favor, MÁS DESPACIO!" Polite way to ask!`,
          ],
          image:        '/explorer-assets/languages/l18-s5-mas-despacio.png',
          imageCaption: `¡Más despacio! Slower, please!`,
          vocab: [
            { word: 'más despacio', definition: `Slower in Spanish. Say: mahs des-PAH-see-oh.`,              audioPrompt: `Más despacio — say it like mahs des-PAH-see-oh. Más despacio means slower!` },
            { word: 'repetir',      definition: `To repeat in Spanish! Say: reh-peh-TEER.`,                  audioPrompt: `Repetir — say it like reh-peh-TEER. Repetir means to repeat!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Help Chant!`,
          paragraphs: [
            `Time to CHANT! These are SUPERHERO words — for when you need help!`,
            `¡AYUDA! ¡NO ENTIENDO! ¿DÓNDE ESTÁ? ¡LO SIENTO! ¡MÁS DESPACIO! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l18-s6-chant.png',
          imageCaption: `Chant your helper words!`,
          vocab: [
            { word: 'brave',  definition: `Strong enough to ask for help when you need it!`,                  audioPrompt: `Brave — strong enough to ask for help. Chant! Ayuda! No entiendo! Dónde está? Lo siento! Más despacio! Olé!` },
            { word: 'kind',   definition: `Nice and helpful to others — like saying lo siento!`,              audioPrompt: `Kind — nice and helpful. Be kind! Say lo siento when you make a mistake!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish help phrase to what it means!`,
          guideText:     `Tap a Spanish phrase, then tap what it means in English!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l18-game-ayuda.png',     label: `Ayuda`,        correctMatch: 'help',         objectPosition: 'center 50%', matchPhrase: `¡Sí! Ayuda means HELP!` },
            { image: 'l18-game-no-entiendo.png', label: `No entiendo`, correctMatch: 'dont-understand', objectPosition: 'center 50%', matchPhrase: `¡Muy bien! No entiendo means I DON'T UNDERSTAND!` },
            { image: 'l18-game-donde.png',     label: `¿Dónde está?`, correctMatch: 'where',        objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Dónde está means WHERE IS IT?` },
            { image: 'l18-game-lo-siento.png', label: `Lo siento`,    correctMatch: 'sorry',        objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Lo siento means I'M SORRY!` },
          ],
          buckets: [
            { id: 'help',             label: `Help`,              color: '#EF4444' },
            { id: 'dont-understand',  label: `I don't understand`,color: '#A78BFA' },
            { id: 'where',            label: `Where is it?`,      color: '#FBBF24' },
            { id: 'sorry',            label: `I'm sorry`,         color: '#60A5FA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Helper Hero badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "ayuda" mean?`,                                                     options: [`Sorry`, `Help`, `Where`, `Slow`],                     correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "no entiendo" mean?`,                                               options: [`I understand`, `Where is it`, `I don't understand`, `Slower`], correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish phrase means "I'm sorry"?`,                                     options: [`Ayuda`, `Lo siento`, `Más despacio`, `Aquí`],         correctIndex: 1 },
            { format: 'true-false', question: `"¿Dónde está?" means WHERE IS IT?`,                                                correctAnswer: true },
            { format: 'fill-blank', question: `When someone talks too fast, you say "___ despacio!"`,                             options: [`Más`, `No`, `Muy`, `Sí`],                            correctIndex: 0 },
            { format: 'multiple-choice', question: `If you're lost and need ayuda, you should...`,                                options: [`Stay silent`, `Run away`, `Ask for help`, `Hide`],   correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Use these helper words when you really need them!`,
          familyAdventure: `Practice with your family! Pretend you're in a store and lost. Ask "¿DÓNDE ESTÁ?" Pretend you don't understand something — say "¡NO ENTIENDO!" If you bump into someone — "¡LO SIENTO!" Make them magic words!`,
          creativePrompt:  `Make an "Emergency Spanish" card! Get a small piece of paper. Write the 5 helper phrases big and bold: AYUDA, NO ENTIENDO, ¿DÓNDE ESTÁ?, LO SIENTO, MÁS DESPACIO. Keep it in your pocket!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'helper-hero',
          badgeName: `Helper Hero`,
          message:   `¡EXCELENTE, {name}! Now you can ask for help in Spanish — that's BRAVE! AYUDA is a superhero word. Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L18] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l18-s1-ayuda.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l18-s2-no-entiendo.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l18-s3-donde-esta.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l18-s4-lo-siento.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l18-s5-mas-despacio.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l18-s6-chant.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L18] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l18_screens;
