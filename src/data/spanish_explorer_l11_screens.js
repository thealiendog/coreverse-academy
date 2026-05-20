// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 11
// "¡La Escuela! School in Spanish"
// ============================================================

const spanish_explorer_l11_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-11',
      title:     `¡La Escuela! School in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'school-star',
      badgeName: `School Star`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: SCHOOL words in Spanish! ¡La escuela! Book, pencil, teacher, friend. Spanish school is so much like yours! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Libro y Lápiz!`,
          paragraphs: [
            `LIBRO means BOOK! LÁPIZ means PENCIL!`,
            `Pretend to open a libro: ¡LIBRO! Pretend to write with a lápiz: ¡LÁPIZ!`,
          ],
          image:        '/explorer-assets/languages/l11-s1-libro-lapiz.png',
          imageCaption: `¡Libro! Book. ¡Lápiz! Pencil.`,
          vocab: [
            { word: 'libro', definition: `Book in Spanish.`,                                    audioPrompt: `Libro. Libro means book!` },
            { word: 'lápiz', definition: `Pencil in Spanish.`,                                  audioPrompt: `Lápiz. Lápiz means pencil!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Mesa y Silla!`,
          paragraphs: [
            `MESA means TABLE! SILLA means CHAIR!`,
            `Tap on your table: ¡MESA! Sit on your chair: ¡SILLA! ¡MESA! ¡SILLA!`,
          ],
          image:        '/explorer-assets/languages/l11-s2-mesa-silla.png',
          imageCaption: `¡Mesa! Table. ¡Silla! Chair.`,
          vocab: [
            { word: 'mesa',  definition: `Table in Spanish.`,                                   audioPrompt: `Mesa. Mesa means table!` },
            { word: 'silla', definition: `Chair in Spanish.`,                                   audioPrompt: `Silla. Silla means chair!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Maestro y Amigo!`,
          paragraphs: [
            `MAESTRO means TEACHER (or MAESTRA for a female teacher)! AMIGO means FRIEND (or AMIGA)!`,
            `Wave to your maestro: ¡MAESTRO! Hug your amigo: ¡AMIGO! Remember — O for boys, A for girls!`,
          ],
          image:        '/explorer-assets/languages/l11-s3-maestro-amigo.png',
          imageCaption: `¡Maestro! Teacher. ¡Amigo! Friend.`,
          vocab: [
            { word: 'maestro', definition: `Teacher in Spanish (male).`,                    audioPrompt: `Maestro. Maestro means teacher!` },
            { word: 'amigo',   definition: `Friend in Spanish (boy).`,                       audioPrompt: `Amigo. Amigo means friend!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Estudiar!`,
          paragraphs: [
            `ESTUDIAR means TO STUDY! It's what you do in la escuela!`,
            `Pretend to read a book carefully: ¡ESTUDIAR! ¡ESTUDIAR! Smart kids estudiar a lot!`,
          ],
          image:        '/explorer-assets/languages/l11-s4-estudiar.png',
          imageCaption: `¡Estudiar! Study! Smart kids do this!`,
          vocab: [
            { word: 'estudiar', definition: `To study in Spanish.`,                       audioPrompt: `Estudiar. Estudiar means to study!` },
            { word: 'aprender', definition: `To learn in Spanish!`,                         audioPrompt: `Aprender. Aprender means to learn!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Mi Escuela!`,
          paragraphs: [
            `ESCUELA means SCHOOL! "MI ESCUELA" means "my school!"`,
            `Spanish schools have classrooms, friends, and teachers — just like yours! Try it: ¡MI ESCUELA! Where you go to LEARN!`,
          ],
          image:        '/explorer-assets/languages/l11-s5-escuela.png',
          imageCaption: `¡Mi escuela! My school!`,
          vocab: [
            { word: 'escuela', definition: `School in Spanish.`,                            audioPrompt: `Escuela. Escuela means school!` },
            { word: 'clase',   definition: `Class in Spanish.`,                                 audioPrompt: `Clase. Clase means class!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's School Chant!`,
          paragraphs: [
            `Time to CHANT school words!`,
            `¡LIBRO! ¡LÁPIZ! ¡MESA! ¡SILLA! ¡MAESTRO! ¡AMIGO! ¡ESCUELA! ¡ESTUDIAR! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l11-s6-chant.png',
          imageCaption: `Chant your school words!`,
          vocab: [
            { word: 'school',  definition: `Where you go to learn — with friends and teachers!`,              audioPrompt: `School — where you go to learn. Chant! Libro! Lápiz! Mesa! Silla! Maestro! Amigo! Escuela! Estudiar! Olé!` },
            { word: 'learn',   definition: `To find out new things — like Spanish words!`,                    audioPrompt: `Learn — to find out new things. You're learning Spanish!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish school word to the right English word!`,
          guideText:     `Tap a Spanish school word, then tap what it is!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l11-game-libro.png',   label: `Libro`,   correctMatch: 'book',    objectPosition: 'center 50%', matchPhrase: `¡Sí! Libro is BOOK!` },
            { image: 'l11-game-lapiz.png',   label: `Lápiz`,   correctMatch: 'pencil',  objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Lápiz is PENCIL!` },
            { image: 'l11-game-maestro.png', label: `Maestro`, correctMatch: 'teacher', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Maestro is TEACHER!` },
            { image: 'l11-game-amigo.png',   label: `Amigo`,   correctMatch: 'friend',  objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Amigo is FRIEND!` },
          ],
          buckets: [
            { id: 'book',    label: `Book`,    color: '#FBBF24' },
            { id: 'pencil',  label: `Pencil`,  color: '#A78BFA' },
            { id: 'teacher', label: `Teacher`, color: '#60A5FA' },
            { id: 'friend',  label: `Friend`,  color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your School Star badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "libro" mean?`,                                                   options: [`Pencil`, `Book`, `Chair`, `Table`],          correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "amigo" mean?`,                                                   options: [`Teacher`, `Book`, `Friend`, `School`],        correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means TEACHER?`,                                         options: [`Amigo`, `Maestro`, `Lápiz`, `Mesa`],          correctIndex: 1 },
            { format: 'true-false', question: `"Escuela" means SCHOOL in Spanish.`,                                             correctAnswer: true },
            { format: 'fill-blank', question: `You write with a ___ in school.`,                                                options: [`lápiz`, `libro`, `silla`, `mesa`],            correctIndex: 0 },
            { format: 'multiple-choice', question: `What does ESTUDIAR mean?`,                                                  options: [`Play`, `Eat`, `Study`, `Sleep`],              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Use Spanish school words today!`,
          familyAdventure: `Look around your room. Find your LIBRO, LÁPIZ, MESA, SILLA. Tell your family what each one is called in Spanish! Then call your teacher MAESTRO/MAESTRA in your head — you'll never forget!`,
          creativePrompt:  `Draw your dream classroom in Spanish! Label everything: LIBRO, LÁPIZ, MESA, SILLA, MAESTRO, ESCUELA. Add your AMIGOS sitting at desks!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'school-star',
          badgeName: `School Star`,
          message:   `¡EXCELENTE, {name}! You can talk about school in Spanish! That's amazing for an Explorer. Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L11] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l11-s1-libro-lapiz.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l11-s2-mesa-silla.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l11-s3-maestro-amigo.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l11-s4-estudiar.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l11-s5-escuela.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l11-s6-chant.png',          { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L11] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l11_screens;
