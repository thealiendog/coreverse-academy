// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 6
// "¡Los Animales! Animals in Spanish"
// ============================================================

const spanish_explorer_l06_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-06',
      title:     `¡Los Animales! Animals in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'animal-amigo',
      badgeName: `Animal Amigo`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: ANIMALS in Spanish! ¡Los animales! Cats — gatos! Dogs — perros! Birds — pájaros! Make the animal sounds with Luna! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Gato y Perro! (Say: GAH-toh and PEH-rro)`,
          paragraphs: [
            `GATO means CAT! Make a cat sound: "Meow!" PERRO means DOG! Make a dog sound: "¡Guau guau!"`,
            `In Spanish, dogs say "¡Guau guau!" not "Woof woof!" Try it: ¡GATO! ¡PERRO! Meow! ¡Guau guau!`,
          ],
          image:        '/explorer-assets/languages/l06-s1-gato-perro.png',
          imageCaption: `¡Gato! Cat. ¡Perro! Dog.`,
          vocab: [
            { word: 'gato',  definition: `Cat in Spanish. Say it like: GAH-toh.`,  audioPrompt: `Gato — say it like GAH-toh. Gato means cat. Meow!` },
            { word: 'perro', definition: `Dog in Spanish. Say it like: PEH-rro.`,  audioPrompt: `Perro — say it like PEH-rro. Perro means dog. Guau guau!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Pájaro y Pez! (Say: PAH-hah-roh and PEZ)`,
          paragraphs: [
            `PÁJARO means BIRD! Flap your arms like wings! PEZ means FISH! Pucker your lips like a fish.`,
            `Say them: ¡PÁJARO! ¡PEZ! Tweet tweet, swim swim!`,
          ],
          image:        '/explorer-assets/languages/l06-s2-pajaro-pez.png',
          imageCaption: `¡Pájaro! Bird. ¡Pez! Fish.`,
          vocab: [
            { word: 'pájaro', definition: `Bird in Spanish. Say it like: PAH-hah-roh.`, audioPrompt: `Pájaro — say it like PAH-hah-roh. Pájaro means bird. Flap your wings!` },
            { word: 'pez',    definition: `Fish in Spanish. Say it like: PEZ.`,         audioPrompt: `Pez — say it like PEZ. Pez means fish!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Vaca y Caballo! (Say: VAH-kah and kah-BAH-yo)`,
          paragraphs: [
            `VACA means COW! Make a moo sound. CABALLO means HORSE! Make a neigh sound.`,
            `Spanish cows say "¡MUU!" Spanish horses say "¡IIIIIII!" Try them: ¡VACA! ¡CABALLO!`,
          ],
          image:        '/explorer-assets/languages/l06-s3-vaca-caballo.png',
          imageCaption: `¡Vaca! Cow. ¡Caballo! Horse.`,
          vocab: [
            { word: 'vaca',    definition: `Cow in Spanish. Say it like: VAH-kah.`,         audioPrompt: `Vaca — say it like VAH-kah. Vaca means cow. Muu!` },
            { word: 'caballo', definition: `Horse in Spanish. Say it like: kah-BAH-yo.`,    audioPrompt: `Caballo — say it like kah-BAH-yo. Caballo means horse!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `Animal Sounds in Spanish!`,
          paragraphs: [
            `Spanish animals make different sounds! Dogs say "¡Guau guau!" Cats say "¡Miau!" Cows say "¡Muu!"`,
            `Try all the sounds: GATO ¡miau! PERRO ¡guau guau! VACA ¡muu! Animals are bilingual too!`,
          ],
          image:        '/explorer-assets/languages/l06-s4-sounds.png',
          imageCaption: `Animal sounds in Spanish!`,
          vocab: [
            { word: 'sound', definition: `What you hear — like a moo, a bark, a meow.`,                      audioPrompt: `Sound — what you hear. Animal sounds in Spanish! Guau guau! Miau! Muu!` },
            { word: 'bilingual', definition: `Speaking TWO languages! Just like you're learning!`,           audioPrompt: `Bilingual — speaking two languages. You're becoming bilingual!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `My Favorite Animal!`,
          paragraphs: [
            `What's YOUR favorite animal? In Spanish, you say "Mi animal favorito es..." (My favorite animal is...).`,
            `Try it! "Mi animal favorito es el GATO!" Or "Mi animal favorito es el PERRO!" Your turn!`,
          ],
          image:        '/explorer-assets/languages/l06-s5-favorito.png',
          imageCaption: `Mi animal favorito es... what?`,
          vocab: [
            { word: 'favorito', definition: `Favorite in Spanish. Say it like: fah-vo-REE-toh.`,            audioPrompt: `Favorito — say it like fah-vo-REE-toh. Favorito means favorite!` },
            { word: 'animal',   definition: `Animal in Spanish — same word, just different sound!`,         audioPrompt: `Animal — same word in Spanish, just pronounced ah-nee-MAHL!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Animal Chant!`,
          paragraphs: [
            `Time to CHANT animals! Make each animal's sound after you say it!`,
            `¡GATO! miau! ¡PERRO! guau! ¡PÁJARO! tweet! ¡PEZ! splash! ¡VACA! muu! ¡CABALLO! neigh! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l06-s6-chant.png',
          imageCaption: `Chant and make animal sounds!`,
          vocab: [
            { word: 'zoo',     definition: `A place where you see many animals!`,                          audioPrompt: `Zoo — a place where you see many animals. Let's chant! Gato miau! Perro guau! Pájaro tweet! Pez splash! Vaca muu! Caballo neigh! Olé!` },
            { word: 'noise',   definition: `A loud sound!`,                                                audioPrompt: `Noise — a loud sound. Make animal noises!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish animal word to the right English word!`,
          guideText:     `Tap a Spanish animal, then tap what it is in English!`,
          columnHeaders: [`Spanish Animal`, `English Animal`],
          items: [
            { image: 'l06-game-gato.png',    label: `Gato`,    correctMatch: 'cat',   objectPosition: 'center 50%', matchPhrase: `¡Sí! Gato is CAT! Meow!` },
            { image: 'l06-game-perro.png',   label: `Perro`,   correctMatch: 'dog',   objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Perro is DOG! Guau guau!` },
            { image: 'l06-game-pajaro.png',  label: `Pájaro`,  correctMatch: 'bird',  objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Pájaro is BIRD! Flap flap!` },
            { image: 'l06-game-vaca.png',    label: `Vaca`,    correctMatch: 'cow',   objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Vaca is COW! Muu!` },
          ],
          buckets: [
            { id: 'cat',  label: `Cat`,  color: '#FBBF24' },
            { id: 'dog',  label: `Dog`,  color: '#A78BFA' },
            { id: 'bird', label: `Bird`, color: '#60A5FA' },
            { id: 'cow',  label: `Cow`,  color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Answer all 6 questions to earn your Animal Amigo badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "gato" mean?`,                                                     options: [`Dog`, `Cat`, `Bird`, `Fish`],            correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "perro" mean?`,                                                    options: [`Cow`, `Horse`, `Dog`, `Fish`],            correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means BIRD?`,                                             options: [`Vaca`, `Pájaro`, `Caballo`, `Pez`],      correctIndex: 1 },
            { format: 'true-false', question: `In Spanish, dogs say "¡Guau guau!"`,                                              correctAnswer: true },
            { format: 'fill-blank', question: `My favorite animal is... "Mi animal ___ es el gato."`,                            options: [`favorito`, `grande`, `pequeño`, `rojo`],  correctIndex: 0 },
            { format: 'multiple-choice', question: `Which animal says "¡muu!"?`,                                                 options: [`Pez`, `Pájaro`, `Vaca`, `Gato`],          correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Now let's bring animals into Spanish life!`,
          familyAdventure: `On a walk or at home, point to every animal you see (or in a book!) and say it in Spanish. Make the sound! ¡PERRO! Guau guau! ¡GATO! Miau! See how many animals you can name today!`,
          creativePrompt:  `Draw a "Spanish Zoo" picture! Draw 6 animals from this lesson — gato, perro, pájaro, pez, vaca, caballo. Label each one in Spanish. Add their sounds in speech bubbles!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'animal-amigo',
          badgeName: `Animal Amigo`,
          message:   `¡EXCELENTE, {name}! You learned 6 animals in Spanish — AND their Spanish sounds! Now every animal you see can be your Spanish friend. Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  const l = spanish_explorer_l06_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  console.log(`[LESSON-SPANISH-L06] Loaded with ${mags} magazine sections`);
  Promise.all([
    fetch('/explorer-assets/languages/l06-s1-gato-perro.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l06-s2-pajaro-pez.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l06-s3-vaca-caballo.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l06-s4-sounds.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l06-s5-favorito.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l06-s6-chant.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L06] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l06_screens;
