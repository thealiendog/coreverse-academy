// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 20
// "¡La Gran Aventura! The Big Spanish Adventure"
// CAPSTONE — Putting it all together!
// ============================================================

const spanish_explorer_l20_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-20',
      title:     `¡La Gran Aventura! The Big Spanish Adventure`,
      duration:  12,
      xpReward:  100,
      badge:     'spanish-master',
      badgeName: `Spanish Adventurer`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, mi amigo {name}! Today is BIG — your CAPSTONE lesson! You've learned SO much Spanish. Today, we PUT IT ALL TOGETHER in one big adventure! ¡VAMOS!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Buenos Días, Amigo!`,
          paragraphs: [
            `Imagine you wake up in COLOMBIA! Your Spanish day begins! "¡BUENOS DÍAS!" (Good morning!) you say to your familia.`,
            `Stretch your arms: ¡BUENOS DÍAS! ¡MAMÁ! ¡PAPÁ! "Hoy es LUNES — what day is it today? — Hoy es lunes!"`,
          ],
          image:        '/explorer-assets/languages/l20-s1-buenos-dias.png',
          imageCaption: `¡Buenos días! Good morning, familia!`,
          vocab: [
            { word: 'buenos días', definition: `Good morning in Spanish!`,                                    audioPrompt: `Buenos días — good morning! Say it to your family!` },
            { word: 'familia',     definition: `Family in Spanish — your favorite people!`,                  audioPrompt: `Familia — family! Mamá, papá, hermanos, abuelos!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Tengo Hambre!`,
          paragraphs: [
            `It's breakfast time! Rub your tummy: "¡TENGO HAMBRE!" Mamá brings PAN and LECHE and a MANZANA.`,
            `You say: "¡GRACIAS, MAMÁ!" Take a bite: "¡ESTÁ RICO!" That's a real Spanish breakfast conversation!`,
          ],
          image:        '/explorer-assets/languages/l20-s2-desayuno.png',
          imageCaption: `Spanish breakfast! ¡Pan, leche, manzana!`,
          vocab: [
            { word: 'desayuno', definition: `Breakfast in Spanish! Say: deh-sah-YOO-no.`,                    audioPrompt: `Desayuno — say it like deh-sah-YOO-no. Desayuno means breakfast!` },
            { word: 'tengo hambre', definition: `I'm hungry in Spanish!`,                                     audioPrompt: `Tengo hambre — I'm hungry! Rub your tummy!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Vamos a la Escuela!`,
          paragraphs: [
            `Now ESCUELA time! You put on your CAMISA, PANTALONES, ZAPATOS, and grab your LIBRO and LÁPIZ.`,
            `At school, you say "¡HOLA!" to your MAESTRO and your AMIGOS. ¡QUÉ DIVERTIDO! How fun!`,
          ],
          image:        '/explorer-assets/languages/l20-s3-escuela.png',
          imageCaption: `Off to la escuela!`,
          vocab: [
            { word: 'vamos', definition: `Let's go in Spanish! Say: VAH-mos.`,                                 audioPrompt: `Vamos — say it like VAH-mos. Vamos means let's go!` },
            { word: 'divertido', definition: `Fun in Spanish! Say: dee-vehr-TEE-doh.`,                          audioPrompt: `Divertido — say it like dee-vehr-TEE-doh. Divertido means fun!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡A la Tienda!`,
          paragraphs: [
            `After school, MAMÁ takes you to the TIENDA. You see GALLETAS! "QUIERO una galleta, POR FAVOR!" you say.`,
            `Mamá asks "¿CUÁNTO CUESTA?" The shopkeeper says the price. You say "GRACIAS!" — they say "DE NADA!"`,
          ],
          image:        '/explorer-assets/languages/l20-s4-tienda.png',
          imageCaption: `¡A la tienda! To the store!`,
          vocab: [
            { word: 'cuánto cuesta', definition: `How much does it cost in Spanish!`,                          audioPrompt: `Cuánto cuesta — how much does it cost? Ask at the tienda!` },
            { word: 'comprar',       definition: `To buy in Spanish!`,                                         audioPrompt: `Comprar — to buy! We comprar at the tienda!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Buenas Noches!`,
          paragraphs: [
            `It's almost time to DORMIR. You hug your familia: "¡BUENAS NOCHES, MAMÁ! ¡BUENAS NOCHES, PAPÁ!"`,
            `Get in your CAMA. You think: "¡FUE UN DÍA INCREÍBLE!" (What an incredible day!) ¡Buenas noches!`,
          ],
          image:        '/explorer-assets/languages/l20-s5-buenas-noches.png',
          imageCaption: `¡Buenas noches! Good night!`,
          vocab: [
            { word: 'buenas noches', definition: `Good night in Spanish!`,                                    audioPrompt: `Buenas noches — good night! Say it before bed!` },
            { word: 'increíble',     definition: `Incredible in Spanish! Say: in-kreh-EE-bleh.`,             audioPrompt: `Increíble — say it like in-kreh-EE-bleh. Increíble means incredible!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's BIG Final Chant!`,
          paragraphs: [
            `THE BIGGEST CHANT! All your favorite Spanish words! Get ready to be LOUD!`,
            `¡HOLA! ¡ADIÓS! ¡GRACIAS! ¡POR FAVOR! ¡MI FAMILIA! ¡TE QUIERO! ¡QUIERO! ¡ESTÁ RICO! ¡VAMOS! ¡OLÉ OLÉ OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l20-s6-chant.png',
          imageCaption: `THE BIG FINAL CHANT!`,
          vocab: [
            { word: 'master',     definition: `Someone who learned a LOT — like YOU with Spanish!`,           audioPrompt: `Master — someone who learned a lot! You're becoming a Spanish master! Hola! Adiós! Gracias! Por favor! Mi familia! Te quiero! Quiero! Está rico! Vamos! Olé olé olé!` },
            { word: 'adventure',  definition: `A big exciting journey — like learning Spanish!`,             audioPrompt: `Adventure — a big exciting journey. Spanish is your adventure!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `BIG REVIEW! Match each Spanish word to what it means!`,
          guideText:     `Final challenge! Show what you know!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l20-game-hola.png',    label: `¡Hola!`,       correctMatch: 'hello',  objectPosition: 'center 50%', matchPhrase: `¡Sí! Hola means HELLO!` },
            { image: 'l20-game-familia.png', label: `Mi familia`,   correctMatch: 'family', objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Mi familia means MY FAMILY!` },
            { image: 'l20-game-quiero.png',  label: `¡Quiero!`,     correctMatch: 'i-want', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Quiero means I WANT!` },
            { image: 'l20-game-vamos.png',   label: `¡Vamos!`,      correctMatch: 'lets-go',objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Vamos means LET'S GO!` },
          ],
          buckets: [
            { id: 'hello',   label: `Hello`,     color: '#FBBF24' },
            { id: 'family',  label: `Family`,    color: '#F472B6' },
            { id: 'i-want',  label: `I want`,    color: '#A78BFA' },
            { id: 'lets-go', label: `Let's go!`, color: '#34D399' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡FINAL QUIZ, {name}! Show everything you know! Earn your Spanish Adventurer badge!`,
          questions: [
            { format: 'multiple-choice', question: `How do you say GOOD MORNING in Spanish?`,                                     options: [`Buenas noches`, `Buenos días`, `Hola`, `Adiós`],     correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "tengo hambre" mean?`,                                              options: [`I'm thirsty`, `I'm tired`, `I'm hungry`, `I'm happy`], correctIndex: 2 },
            { format: 'multiple-choice', question: `What's a piñata?`,                                                            options: [`A song`, `A candy-filled toy`, `A dance`, `A food`], correctIndex: 1 },
            { format: 'true-false', question: `"Te quiero" means I LOVE YOU.`,                                                    correctAnswer: true },
            { format: 'fill-blank', question: `Let's go! In Spanish: "¡___!"`,                                                    options: [`Vamos`, `Hola`, `Sí`, `Olé`],                       correctIndex: 0 },
            { format: 'multiple-choice', question: `Which means GOOD NIGHT?`,                                                     options: [`Buenos días`, `Hola`, `Buenas noches`, `Mucho gusto`], correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! You did it — you're an Explorer-level Spanish speaker!`,
          familyAdventure: `Tonight, have a FULL SPANISH dinner! Greet everyone with "¡HOLA!" When food comes: "¡TENGO HAMBRE!" Eat: "¡ESTÁ RICO!" Say "¡GRACIAS!" to the chef. Tell your family "¡TE QUIERO!" before bed. Make EVERY MOMENT Spanish!`,
          creativePrompt:  `Make a "MY SPANISH JOURNEY" scrapbook page! Draw your favorite Spanish word, your favorite chant, your favorite topic from the 20 lessons. Sign it: ¡Soy un EXPLORADOR de español!`,
        },
        {
          type:      'celebration',
          xpEarned:  100,
          badge:     'spanish-master',
          badgeName: `Spanish Adventurer`,
          message:   `¡FELICIDADES, {name}! ¡LO HICISTE! You finished 20 Spanish lessons! You learned greetings, numbers, colors, family, body, animals, food, days, weather, verbs, school, home, clothes, hobbies, countries, traditions, shopping, asking for help, and how to talk about yourself. You are an INCREDIBLE Spanish ADVENTURER! Luna is SO PROUD of you! ¡Eres mi amigo para siempre! You are my friend forever! ¡HASTA LUEGO, AMIGO!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L20] CAPSTONE Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l20-s1-buenos-dias.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l20-s2-desayuno.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l20-s3-escuela.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l20-s4-tienda.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l20-s5-buenas-noches.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l20-s6-chant.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L20] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l20_screens;
