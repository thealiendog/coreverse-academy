// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 16
// "¡Las Tradiciones! Spanish Culture & Traditions"
// ============================================================

const spanish_explorer_l16_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-16',
      title:     `¡Las Tradiciones! Culture & Traditions`,
      duration:  12,
      xpReward:  50,
      badge:     'culture-keeper',
      badgeName: `Culture Keeper`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: TRADITIONS — special celebrations Spanish families love! Piñatas, fiestas, special holidays. So much fun! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Fiesta!`,
          paragraphs: [
            `FIESTA means PARTY! Spanish kids LOVE fiestas — for birthdays, holidays, anything!`,
            `Dance and say: ¡FIESTA! ¡FIESTA! Throw your hands up: ¡FIESTA!`,
          ],
          image:        '/explorer-assets/languages/l16-s1-fiesta.png',
          imageCaption: `¡Fiesta! Party time!`,
          vocab: [
            { word: 'fiesta', definition: `Party in Spanish.`,                              audioPrompt: `Fiesta. Fiesta means party!` },
            { word: 'celebrar', definition: `To celebrate in Spanish!`,                    audioPrompt: `Celebrar. Celebrar means to celebrate!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Piñata!`,
          paragraphs: [
            `PIÑATA is a colorful paper toy filled with CANDY! Kids hit it with a stick — and candy falls out!`,
            `Pretend to swing a stick: ¡PIÑATA! ¡PIÑATA! Spanish kids LOVE breaking piñatas at birthday fiestas!`,
          ],
          image:        '/explorer-assets/languages/l16-s2-pinata.png',
          imageCaption: `¡Piñata! Hit it for candy!`,
          vocab: [
            { word: 'piñata',  definition: `A paper toy filled with candy that you hit at parties!`,         audioPrompt: `Piñata — a paper toy filled with candy! You hit it and candy falls out!` },
            { word: 'dulces',  definition: `Candy in Spanish!`,                                audioPrompt: `Dulces. Dulces means candy!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Cumpleaños!`,
          paragraphs: [
            `CUMPLEAÑOS means BIRTHDAY! Spanish kids sing "Las Mañanitas" (their version of "Happy Birthday")!`,
            `Try it: ¡CUMPLEAÑOS! Don't forget the piñata for a real Spanish birthday party!`,
          ],
          image:        '/explorer-assets/languages/l16-s3-cumpleanos.png',
          imageCaption: `¡Feliz cumpleaños! Happy birthday!`,
          vocab: [
            { word: 'cumpleaños',     definition: `Birthday in Spanish.`,            audioPrompt: `Cumpleaños. Cumpleaños means birthday!` },
            { word: 'feliz cumpleaños', definition: `Happy birthday in Spanish!`,                             audioPrompt: `Feliz cumpleaños — happy birthday in Spanish!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Día de los Muertos!`,
          paragraphs: [
            `DÍA DE LOS MUERTOS means DAY OF THE DEAD! It's a Mexican tradition to REMEMBER loved ones with flowers, candles, and pictures.`,
            `It's not scary — it's beautiful! Families put up "altares" with photos. ¡Tradición especial!`,
          ],
          image:        '/explorer-assets/languages/l16-s4-dia-muertos.png',
          imageCaption: `Día de los Muertos — remembering loved ones.`,
          vocab: [
            { word: 'tradición', definition: `A tradition — something special that families do!`,            audioPrompt: `Tradición. Tradición means tradition!` },
            { word: 'flores',    definition: `Flowers in Spanish!`,                            audioPrompt: `Flores. Flores means flowers!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Carnaval!`,
          paragraphs: [
            `CARNAVAL means CARNIVAL! In Colombia, Brazil, and Spain, there are HUGE Carnival parades with costumes, dancing, and música!`,
            `Pretend to dance in a parade: ¡CARNAVAL! ¡CARNAVAL! Everyone dresses up and celebrates!`,
          ],
          image:        '/explorer-assets/languages/l16-s5-carnaval.png',
          imageCaption: `¡Carnaval! Costumes and dancing!`,
          vocab: [
            { word: 'carnaval', definition: `A huge dancing parade festival!`,                                audioPrompt: `Carnaval — a huge dancing parade festival! Costumes and música!` },
            { word: 'disfraz',  definition: `Costume in Spanish!`,                            audioPrompt: `Disfraz. Disfraz means costume!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Tradition Chant!`,
          paragraphs: [
            `Time to CHANT the traditions! Dance with each word!`,
            `¡FIESTA! ¡PIÑATA! ¡CUMPLEAÑOS! ¡CARNAVAL! ¡TRADICIÓN! ¡CELEBRAR! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l16-s6-chant.png',
          imageCaption: `Chant and celebrate Spanish traditions!`,
          vocab: [
            { word: 'culture',     definition: `Special things a group of people do together!`,               audioPrompt: `Culture — special things people do together. Chant! Fiesta! Piñata! Cumpleaños! Carnaval! Tradición! Celebrar! Olé!` },
            { word: 'celebrate',   definition: `To do something fun and special for an event!`,               audioPrompt: `Celebrate — to do something fun and special!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish tradition to what it is!`,
          guideText:     `Tap a tradition, then tap what it means!`,
          columnHeaders: [`Spanish`, `What is it?`],
          items: [
            { image: 'l16-game-fiesta.png',     label: `Fiesta`,     correctMatch: 'party',    objectPosition: 'center 50%', matchPhrase: `¡Sí! Fiesta is PARTY! Let's celebrate!` },
            { image: 'l16-game-pinata.png',    label: `Piñata`,     correctMatch: 'candy-toy', objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Piñata is the CANDY TOY!` },
            { image: 'l16-game-cumple.png',    label: `Cumpleaños`, correctMatch: 'birthday',  objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Cumpleaños is BIRTHDAY!` },
            { image: 'l16-game-carnaval.png',  label: `Carnaval`,   correctMatch: 'parade',    objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Carnaval is the big PARADE festival!` },
          ],
          buckets: [
            { id: 'party',     label: `Party`,     color: '#F472B6' },
            { id: 'candy-toy', label: `Candy Toy`, color: '#FBBF24' },
            { id: 'birthday',  label: `Birthday`,  color: '#A78BFA' },
            { id: 'parade',    label: `Parade`,    color: '#34D399' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Culture Keeper badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "fiesta" mean?`,                                                    options: [`Birthday`, `Party`, `Parade`, `Costume`],            correctIndex: 1 },
            { format: 'multiple-choice', question: `What is a "piñata"?`,                                                         options: [`A dance`, `A song`, `A toy filled with candy`, `A holiday`], correctIndex: 2 },
            { format: 'multiple-choice', question: `Which means BIRTHDAY?`,                                                       options: [`Fiesta`, `Cumpleaños`, `Carnaval`, `Tradición`],     correctIndex: 1 },
            { format: 'true-false', question: `Día de los Muertos remembers loved ones with flowers and photos.`,                 correctAnswer: true },
            { format: 'fill-blank', question: `A costume for Carnaval is called a "___" in Spanish.`,                             options: [`disfraz`, `dulces`, `flores`, `juego`],             correctIndex: 0 },
            { format: 'multiple-choice', question: `Which word means "to celebrate"?`,                                            options: [`Cantar`, `Bailar`, `Celebrar`, `Comer`],             correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Bring Spanish traditions to YOUR life!`,
          familyAdventure: `Ask your family about YOUR traditions! What does your family celebrate? Birthdays? Holidays? Tell them the Spanish names: FIESTA, CUMPLEAÑOS, TRADICIÓN. Maybe try making a piñata for your next party!`,
          creativePrompt:  `Design YOUR own piñata! Draw what shape it would be (a star, an animal, a planet?). Color it bright with rojo, azul, amarillo, verde! Add candy spilling out!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'culture-keeper',
          badgeName: `Culture Keeper`,
          message:   `¡EXCELENTE, {name}! Now you know how Spanish-speaking families celebrate! Traditions make us special and connected. Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L16] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l16-s1-fiesta.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l16-s2-pinata.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l16-s3-cumpleanos.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l16-s4-dia-muertos.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/languages/l16-s5-carnaval.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l16-s6-chant.png',      { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L16] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l16_screens;
