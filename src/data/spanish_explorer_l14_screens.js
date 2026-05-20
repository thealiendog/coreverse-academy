// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 14
// "¡Pasatiempos! Hobbies in Spanish"
// ============================================================

const spanish_explorer_l14_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-14',
      title:     `¡Pasatiempos! Hobbies in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'hobby-hero',
      badgeName: `Hobby Hero`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: HOBBIES — things you LOVE to do! ¡Pasatiempos! Reading, drawing, playing, sports — every kid has favorites. What are yours? ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Leer! (Say: leh-EHR)`,
          paragraphs: [
            `LEER means TO READ! Hold up an invisible book!`,
            `Pretend to read: ¡LEER! ¡LEER! "Me gusta leer" means "I like to read!"`,
          ],
          image:        '/explorer-assets/languages/l14-s1-leer.png',
          imageCaption: `¡Leer! Read!`,
          vocab: [
            { word: 'leer',     definition: `To read in Spanish. Say: leh-EHR.`,                              audioPrompt: `Leer — say it like leh-EHR. Leer means to read!` },
            { word: 'me gusta', definition: `I like in Spanish. Say: meh GOOS-tah.`,                          audioPrompt: `Me gusta — say it like meh GOOS-tah. Me gusta means I like!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Dibujar! (Say: dee-boo-HAR)`,
          paragraphs: [
            `DIBUJAR means TO DRAW! Pretend to draw in the air!`,
            `Try it: ¡DIBUJAR! ¡DIBUJAR! "Me gusta dibujar" means "I like to draw!"`,
          ],
          image:        '/explorer-assets/languages/l14-s2-dibujar.png',
          imageCaption: `¡Dibujar! Draw!`,
          vocab: [
            { word: 'dibujar', definition: `To draw in Spanish. Say: dee-boo-HAR.`,                           audioPrompt: `Dibujar — say it like dee-boo-HAR. Dibujar means to draw!` },
            { word: 'dibujo',  definition: `Drawing (the picture) in Spanish! Say: dee-BOO-ho.`,             audioPrompt: `Dibujo — say it like dee-BOO-ho. Dibujo means a drawing!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Jugar! (Say: hoo-GAR)`,
          paragraphs: [
            `JUGAR means TO PLAY! The BEST verb of all!`,
            `Jump around: ¡JUGAR! "Me gusta jugar" means "I like to play!" Every kid loves to jugar!`,
          ],
          image:        '/explorer-assets/languages/l14-s3-jugar.png',
          imageCaption: `¡Jugar! Play!`,
          vocab: [
            { word: 'jugar',  definition: `To play in Spanish. Say: hoo-GAR.`,                                audioPrompt: `Jugar — say it like hoo-GAR. Jugar means to play!` },
            { word: 'juego',  definition: `A game in Spanish! Say: HWEH-go.`,                                 audioPrompt: `Juego — say it like HWEH-go. Juego means a game!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Deporte! (Say: deh-POR-teh)`,
          paragraphs: [
            `DEPORTE means SPORT! Like soccer, basketball, swimming!`,
            `Pretend to kick a ball: ¡DEPORTE! "Mi deporte favorito es el fútbol!" "My favorite sport is soccer!"`,
          ],
          image:        '/explorer-assets/languages/l14-s4-deporte.png',
          imageCaption: `¡Deporte! Sport!`,
          vocab: [
            { word: 'deporte', definition: `Sport in Spanish. Say: deh-POR-teh.`,                             audioPrompt: `Deporte — say it like deh-POR-teh. Deporte means sport!` },
            { word: 'fútbol',  definition: `Soccer in Spanish! Say: FOOT-bol.`,                                audioPrompt: `Fútbol — say it like FOOT-bol. Fútbol means soccer — the favorite sport in many Spanish countries!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Música! (Say: MOO-see-kah)`,
          paragraphs: [
            `MÚSICA means MUSIC! Wave your hands like a conductor!`,
            `Try it: ¡MÚSICA! "Me gusta la música" means "I like music!" What kind of música do you like?`,
          ],
          image:        '/explorer-assets/languages/l14-s5-musica.png',
          imageCaption: `¡Música! Music!`,
          vocab: [
            { word: 'música', definition: `Music in Spanish. Say: MOO-see-kah.`,                              audioPrompt: `Música — say it like MOO-see-kah. Música means music!` },
            { word: 'bailar', definition: `To dance in Spanish — with música!`,                               audioPrompt: `Bailar — to dance! Música and bailar go together!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Hobby Chant!`,
          paragraphs: [
            `Time to CHANT your hobbies! Do the action for each!`,
            `¡LEER! ¡DIBUJAR! ¡JUGAR! ¡DEPORTE! ¡MÚSICA! ¡ME GUSTA! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l14-s6-chant.png',
          imageCaption: `Chant your favorite hobbies!`,
          vocab: [
            { word: 'hobby',    definition: `Something fun you love to do!`,                                  audioPrompt: `Hobby — something fun you love. Chant! Leer! Dibujar! Jugar! Deporte! Música! Me gusta! Olé!` },
            { word: 'favorito', definition: `Your favorite — the one you love the most!`,                     audioPrompt: `Favorito — your favorite! Your hobby favorito!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish hobby to the right English hobby!`,
          guideText:     `Tap a Spanish hobby, then tap what it is!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l14-game-leer.png',    label: `Leer`,    correctMatch: 'read',  objectPosition: 'center 50%', matchPhrase: `¡Sí! Leer means TO READ!` },
            { image: 'l14-game-dibujar.png', label: `Dibujar`, correctMatch: 'draw',  objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Dibujar means TO DRAW!` },
            { image: 'l14-game-jugar.png',   label: `Jugar`,   correctMatch: 'play',  objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Jugar means TO PLAY!` },
            { image: 'l14-game-musica.png',  label: `Música`,  correctMatch: 'music', objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Música means MUSIC!` },
          ],
          buckets: [
            { id: 'read',  label: `Read`,  color: '#FBBF24' },
            { id: 'draw',  label: `Draw`,  color: '#A78BFA' },
            { id: 'play',  label: `Play`,  color: '#34D399' },
            { id: 'music', label: `Music`, color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Hobby Hero badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "leer" mean?`,                                                     options: [`To draw`, `To read`, `To play`, `To dance`],         correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "dibujar" mean?`,                                                  options: [`To read`, `To sing`, `To draw`, `To eat`],            correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means TO PLAY?`,                                          options: [`Leer`, `Jugar`, `Música`, `Deporte`],                correctIndex: 1 },
            { format: 'true-false', question: `"Música" means MUSIC in Spanish.`,                                                correctAnswer: true },
            { format: 'fill-blank', question: `When you LIKE something, you say "___ gusta..."`,                                 options: [`me`, `te`, `yo`, `tú`],                              correctIndex: 0 },
            { format: 'multiple-choice', question: `What does "deporte" mean?`,                                                  options: [`Game`, `Music`, `Sport`, `Hobby`],                    correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Tell people your hobbies in Spanish!`,
          familyAdventure: `Tell each person in your family ONE thing you like to do — in Spanish! "ME GUSTA LEER!" or "ME GUSTA JUGAR!" Then ask them: "¿Y tú?" (And you?) See what they say!`,
          creativePrompt:  `Make a "Me Gusta" poster! Draw 5 hobbies you love. Under each one write "ME GUSTA ___" in Spanish (leer, dibujar, jugar, música, deporte). Hang it on your wall!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'hobby-hero',
          badgeName: `Hobby Hero`,
          message:   `¡EXCELENTE, {name}! Now you can tell anyone what you love to do — in Spanish! "ME GUSTA" is the magic phrase. Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L14] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l14-s1-leer.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l14-s2-dibujar.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l14-s3-jugar.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l14-s4-deporte.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l14-s5-musica.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l14-s6-chant.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L14] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l14_screens;
