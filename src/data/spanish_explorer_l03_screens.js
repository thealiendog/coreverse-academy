// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 3
// "¡Los Colores! Colors in Spanish"
// Ages 6–8 | Guide: Luna the Parrot
// ============================================================

const spanish_explorer_l03_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-03',
      title:     `¡Los Colores! Colors in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'color-painter',
      badgeName: `Color Painter`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today you learn COLORS in Spanish — los colores! Point to something RED in your room. ROJO! Now something BLUE. AZUL! Spanish kids see the same colors you do — just with different names. ¿Listo? ¡Vamos!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `¡Rojo y Azul!`,
          paragraphs: [
            `ROJO means RED! Like a fire truck or a strawberry. AZUL means BLUE! Like the sky or the ocean.`,
            `Point to something ROJO in your room! Now something AZUL! Say them: ¡ROJO! ¡AZUL!`,
          ],
          image:        '/explorer-assets/languages/l03-s1-rojo-azul.png',
          imageCaption: `¡Rojo! Red. ¡Azul! Blue.`,
          vocab: [
            { word: 'rojo', definition: `Red in Spanish.`,                                 audioPrompt: `Rojo. Rojo means red. Point to something rojo!` },
            { word: 'azul', definition: `Blue in Spanish.`,                               audioPrompt: `Azul. Azul means blue. Point to something azul!` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `¡Amarillo y Verde!`,
          paragraphs: [
            `AMARILLO means YELLOW! Like the sun or a banana. VERDE means GREEN! Like grass or a frog.`,
            `Point to something amarillo! Now something verde! Say them: ¡AMARILLO! ¡VERDE!`,
          ],
          image:        '/explorer-assets/languages/l03-s2-amarillo-verde.png',
          imageCaption: `¡Amarillo! Yellow. ¡Verde! Green.`,
          vocab: [
            { word: 'amarillo', definition: `Yellow in Spanish.`,                  audioPrompt: `Amarillo. Amarillo means yellow. Like the sun!` },
            { word: 'verde',    definition: `Green in Spanish.`,                          audioPrompt: `Verde. Verde means green. Like grass!` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `¡Negro y Blanco!`,
          paragraphs: [
            `NEGRO means BLACK! Like the night sky or a panther. BLANCO means WHITE! Like snow or a cloud.`,
            `Find something negro near you. Now something blanco! ¡NEGRO! ¡BLANCO!`,
          ],
          image:        '/explorer-assets/languages/l03-s3-negro-blanco.png',
          imageCaption: `¡Negro! Black. ¡Blanco! White.`,
          vocab: [
            { word: 'negro',  definition: `Black in Spanish.`,                            audioPrompt: `Negro. Negro means black. Like the night!` },
            { word: 'blanco', definition: `White in Spanish.`,                           audioPrompt: `Blanco. Blanco means white. Like a cloud!` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Mix and Match!`,
          paragraphs: [
            `Spanish kids love describing things by COLOR. "Una manzana ROJA" means a RED APPLE. "Un cielo AZUL" means a BLUE SKY.`,
            `Try it! Look at things around you. What color are they? Say it in Spanish! ¡ROJO! ¡AZUL! ¡VERDE!`,
          ],
          image:        '/explorer-assets/languages/l03-s4-things.png',
          imageCaption: `Spanish colors describe everything around you!`,
          vocab: [
            { word: 'manzana', definition: `Apple in Spanish!`,                      audioPrompt: `Manzana. Manzana means apple. Una manzana roja is a red apple!` },
            { word: 'cielo',   definition: `Sky in Spanish!`,                            audioPrompt: `Cielo. Cielo means sky. El cielo azul is the blue sky!` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Color Hunt!`,
          paragraphs: [
            `Let's do a COLOR HUNT! Look around the room you're in right now.`,
            `Can you find something ROJO? AZUL? AMARILLO? VERDE? NEGRO? BLANCO? Point to each one as you find it!`,
          ],
          image:        '/explorer-assets/languages/l03-s5-hunt.png',
          imageCaption: `Hunt for colors all around you!`,
          vocab: [
            { word: 'hunt',  definition: `To search for something — to look around for it.`,                    audioPrompt: `Hunt — to search for something. Let's hunt for colors!` },
            { word: 'find',  definition: `To see something you were looking for.`,                              audioPrompt: `Find — to see something you were looking for. Find something rojo!` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Luna's Color Chant!`,
          paragraphs: [
            `Time to CHANT! Touch something of each color as you say the word!`,
            `¡ROJO! ¡AZUL! ¡AMARILLO! ¡VERDE! ¡NEGRO! ¡BLANCO! ¡ROJO! ¡AZUL! ¡AMARILLO! ¡VERDE! ¡NEGRO! ¡BLANCO! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l03-s6-chant.png',
          imageCaption: `Chant the colors with Luna!`,
          vocab: [
            { word: 'color',  definition: `What something looks like — red, blue, green, etc.`,                 audioPrompt: `Color — what something looks like. Let's chant! Rojo, azul, amarillo, verde, negro, blanco! Rojo, azul, amarillo, verde, negro, blanco! Olé!` },
            { word: 'touch',  definition: `To put your hand on something.`,                                     audioPrompt: `Touch — to put your hand on something. Touch a color as you say it!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish color to the right English color!`,
          guideText:     `Tap a Spanish color, then tap what it means. ¡Vamos!`,
          columnHeaders: [`Spanish Color`, `English Color`],
          items: [
            { image: 'l03-game-rojo.png',     label: `Rojo`,     correctMatch: 'red',    objectPosition: 'center 50%', matchPhrase: `¡Sí! Rojo means RED — like a fire truck!` },
            { image: 'l03-game-azul.png',     label: `Azul`,     correctMatch: 'blue',   objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Azul means BLUE — like the sky!` },
            { image: 'l03-game-amarillo.png', label: `Amarillo`, correctMatch: 'yellow', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Amarillo means YELLOW — like the sun!` },
            { image: 'l03-game-verde.png',    label: `Verde`,    correctMatch: 'green',  objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Verde means GREEN — like grass!` },
          ],
          buckets: [
            { id: 'red',    label: `Red`,    color: '#EF4444' },
            { id: 'blue',   label: `Blue`,   color: '#3B82F6' },
            { id: 'yellow', label: `Yellow`, color: '#FBBF24' },
            { id: 'green',  label: `Green`,  color: '#10B981' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Answer all 6 questions to earn your Color Painter badge!`,
          questions: [
            { format: 'multiple-choice', question: `What color is "rojo"?`,
              options: [`Blue`, `Red`, `Green`, `Yellow`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `What color is "azul"?`,
              options: [`Black`, `White`, `Blue`, `Red`],
              correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish color means YELLOW?`,
              options: [`Verde`, `Amarillo`, `Negro`, `Blanco`],
              correctIndex: 1 },
            { format: 'true-false', question: `"Verde" means GREEN in Spanish.`,
              correctAnswer: true },
            { format: 'fill-blank', question: `Snow is ___ in Spanish!`,
              options: [`blanco`, `negro`, `rojo`, `azul`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `The night sky is...`,
              options: [`Rojo`, `Negro`, `Blanco`, `Verde`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Now let's bring colors into real life!`,
          familyAdventure: `Play "Yo veo" (I see) with your family! Say "Yo veo algo ROJO!" (I see something red!) Then they have to guess what you see. Take turns. Use all your new colors!`,
          creativePrompt:  `Make a "Rainbow in Spanish" picture. Draw a rainbow with 6 colors. Under each color, write the Spanish name: ROJO, AMARILLO, VERDE, AZUL, NEGRO, BLANCO. Decorate it with stars!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'color-painter',
          badgeName: `Color Painter`,
          message:   `¡EXCELENTE, {name}! You learned 6 colors in Spanish! Now the whole world looks more colorful — and you can describe it in TWO languages! Luna is so proud. ¡Hasta luego, mi amigo!`,
        },
      ],
    },
  ],
};

(() => {
  const l    = spanish_explorer_l03_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-SPANISH-L03] Loaded: "Colores" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/languages/l03-s1-rojo-azul.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l03-s2-amarillo-verde.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l03-s3-negro-blanco.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l03-s4-things.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l03-s5-hunt.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l03-s6-chant.png',           { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L03] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-SPANISH-L03] Could not verify image assets — network check failed');
  });
})();

export default spanish_explorer_l03_screens;
