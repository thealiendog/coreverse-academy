// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L05 — Los Animales (Animals)
// Age band : explorers (6–8)   Guide: luna
// REWRITTEN for age-appropriate Explorer band
// ─────────────────────────────────────────────────────────────────────────────

const SP_L05 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-05`,
      title:     `Los Animales — Animals`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l05`,
      badgeName: `Animal Explorer`,

      screens: [

        {
          id: `sp05-welcome`,
          type: `welcome`,
          guideText: `¡Hola, {name}! Today we meet ANIMALS in Spanish! Dogs, cats, birds, fish — and a parrot like me! ¡Vamos!`,
          headline: `Los Animales`,
          subtitle: `Animals in Spanish`,
          visual: `/explorer-assets/languages/sp05-welcome.png`,
        },

        // ─── MAGAZINE 1 — PETS ────────────────────────────────────────────
        {
          id: `sp05-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 3,
          headline: `Pets at Home`,
          paragraphs: [
            `Pets first, {name}! PERRO — PEH-rroh — means dog. GATO — GAH-toh — means cat.`,
            `Roll the R a tiny bit in perro — it makes the word sound like a dog! Try it: perrrro!`,
          ],
          image: `/explorer-assets/languages/sp05-mag-1.png`,
          imageCaption: `A dog and a cat sitting together on a rug.`,
          vocab: [
            {
              word: `perro`,
              definition: `Dog — PEH-rroh.`,
              audioPrompt: `Perro, {name}. Say it like PEH-rroh. Roll the R a little! It means dog. Try it: perrrro!`,
            },
            {
              word: `gato`,
              definition: `Cat — GAH-toh.`,
              audioPrompt: `Gato, {name}. Say it like GAH-toh. It means cat! Soft and easy. Try it: gato!`,
            },
            {
              word: `pez`,
              definition: `Fish — PEHS.`,
              audioPrompt: `Pez, {name}. Say it like PEHS. It means fish! Just one syllable. Try it: pez!`,
            },
          ],
        },

        // ─── MAGAZINE 2 — BIRDS AND FARM ──────────────────────────────────
        {
          id: `sp05-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 3,
          headline: `Birds and Farm`,
          paragraphs: [
            `Now birds and farm animals! PÁJARO — PAH-hah-roh — means bird. CABALLO — kah-BAH-yoh — means horse.`,
            `And VACA — BAH-kah — means cow. Moo! Lots of animals to meet, {name}!`,
          ],
          image: `/explorer-assets/languages/sp05-mag-2.png`,
          imageCaption: `A bird flying, a horse, and a cow in a field.`,
          vocab: [
            {
              word: `pájaro`,
              definition: `Bird — PAH-hah-roh.`,
              audioPrompt: `Pájaro, {name}. Say it like PAH-hah-roh. It means bird! Like me, Luna — I'm a pájaro too! Try it: pájaro!`,
            },
            {
              word: `caballo`,
              definition: `Horse — kah-BAH-yoh.`,
              audioPrompt: `Caballo, {name}. Say it like kah-BAH-yoh. The LL sounds like Y in Spanish! It means horse. Try it: caballo!`,
            },
            {
              word: `vaca`,
              definition: `Cow — BAH-kah.`,
              audioPrompt: `Vaca, {name}. Say it like BAH-kah. It means cow! Moo! Try it: vaca!`,
            },
          ],
        },

        // ─── MAGAZINE 3 — WILD ANIMALS ────────────────────────────────────
        {
          id: `sp05-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 3,
          headline: `Wild Animals`,
          paragraphs: [
            `Wild ones now, {name}! LEÓN — leh-OHN — means lion. ELEFANTE — eh-leh-FAHN-teh — means elephant.`,
            `And MONO — MOH-noh — means monkey! Roar like a león! Stomp like an elefante!`,
          ],
          image: `/explorer-assets/languages/sp05-mag-3.png`,
          imageCaption: `A lion, an elephant, and a monkey in the wild.`,
          vocab: [
            {
              word: `león`,
              definition: `Lion — leh-OHN.`,
              audioPrompt: `León, {name}. Say it like leh-OHN. It means lion! Roar! Try it: león!`,
            },
            {
              word: `elefante`,
              definition: `Elephant — eh-leh-FAHN-teh.`,
              audioPrompt: `Elefante, {name}. Say it like eh-leh-FAHN-teh. It means elephant! Big and gentle. Try it: elefante!`,
            },
            {
              word: `mono`,
              definition: `Monkey — MOH-noh.`,
              audioPrompt: `Mono, {name}. Say it like MOH-noh. It means monkey! Silly and fun. Try it: mono!`,
            },
          ],
        },

        // ─── INTERACTIVE GAME ─────────────────────────────────────────────
        {
          id: `sp05-game`,
          type: `interactive`,
          guideText: `Match each Spanish animal to what it means, {name}!`,
          columnHeaders: [`Spanish`, `Animal`],
          items: [
            { id: `sp05-i1`, label: `perro`,    correctMatch: `dog` },
            { id: `sp05-i2`, label: `gato`,     correctMatch: `cat` },
            { id: `sp05-i3`, label: `caballo`,  correctMatch: `horse` },
            { id: `sp05-i4`, label: `león`,     correctMatch: `lion` },
          ],
          buckets: [
            { id: `dog`,   label: `dog`,   color: `#FBBF24` },
            { id: `cat`,   label: `cat`,   color: `#F87171` },
            { id: `horse`, label: `horse`, color: `#34D399` },
            { id: `lion`,  label: `lion`,  color: `#A78BFA` },
          ],
        },

        // ─── QUIZ ─────────────────────────────────────────────────────────
        {
          id: `sp05-quiz`,
          type: `quiz`,
          guideText: `¡Vamos, {name}!`,
          questions: [
            {
              id: `sp05-q1`,
              format: `multiple-choice`,
              question: `How do you say "dog" in Spanish?`,
              options: [`gato`, `perro`, `pez`, `vaca`],
              correctIndex: 1,
              explanation: `Perro means dog! Say it like PEH-rroh — roll the R!`,
            },
            {
              id: `sp05-q2`,
              format: `multiple-choice`,
              question: `What does "gato" mean?`,
              options: [`dog`, `bird`, `cat`, `fish`],
              correctIndex: 2,
              explanation: `Gato means cat! Say it like GAH-toh.`,
            },
            {
              id: `sp05-q3`,
              format: `multiple-choice`,
              question: `Which word means "horse"?`,
              options: [`vaca`, `mono`, `caballo`, `pez`],
              correctIndex: 2,
              explanation: `Caballo means horse! The LL sounds like Y — kah-BAH-yoh.`,
            },
            {
              id: `sp05-q4`,
              format: `true-false`,
              question: `"Vaca" means cow in Spanish.`,
              correctAnswer: true,
              explanation: `True! Vaca means cow. Moo! Say it like BAH-kah.`,
            },
            {
              id: `sp05-q5`,
              format: `multiple-choice`,
              question: `What's a "león"?`,
              options: [`monkey`, `lion`, `elephant`, `bird`],
              correctIndex: 1,
              explanation: `León is a lion! Big and strong. Roar!`,
            },
            {
              id: `sp05-q6`,
              format: `fill-blank`,
              question: `Bird in Spanish is ___.`,
              options: [`pájaro`, `gato`, `mono`, `pez`],
              correctIndex: 0,
              explanation: `Pájaro means bird! Like me — Luna the parrot is a pájaro!`,
            },
          ],
        },

        // ─── REAL WORLD ───────────────────────────────────────────────────
        {
          id: `sp05-realworld`,
          type: `real-world`,
          guideText: `Look for animals today, {name}! Name them in Spanish. Perro outside? Gato on a fence? Pájaro in a tree? Spot them all!`,
          familyAdventure: `Tonight, go on an animal hunt at home or in a book! Name every animal you see in Spanish. How many can you find?`,
          creativePrompt: `Draw your favorite animal! Label it in Spanish. Is it a perro? A gato? A león? Make it as silly or as real as you want!`,
        },

        // ─── CELEBRATION ──────────────────────────────────────────────────
        {
          id: `sp05-celebration`,
          type: `celebration`,
          message: `¡Excelente, {name}! Nine new animals in Spanish! Perro, gato, pez, pájaro, caballo, vaca, león, elefante, mono. A whole zoo of words! ¡Hasta la próxima!`,
          badge: `languages-l05`,
          badgeName: `Animal Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SP_L05;

