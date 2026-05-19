// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L08 — El Tiempo (Weather and Seasons)
// Age band : explorers (6–8)   Guide: luna
// ─────────────────────────────────────────────────────────────────────────────

const SP_L08 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-08`,
      title:     `El Tiempo — Weather and Seasons`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l08`,
      badgeName: `Weather Watcher`,

      screens: [

        {
          id: `sp08-welcome`,
          type: `welcome`,
          guideText: `¡Hola, {name}! Today we learn the weather in Spanish! Sunny, rainy, cold — every kind of day has a Spanish word! ¡Vamos!`,
          headline: `El Tiempo`,
          subtitle: `Weather and seasons in Spanish`,
          visual: `/explorer-assets/languages/sp08-welcome.png`,
        },

        {
          id: `sp08-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 3,
          headline: `Hot and Cold Days`,
          paragraphs: [
            `Let's start with how the day feels, {name}! HACE SOL — AH-seh SOHL — means "it is sunny." HACE FRÍO — AH-seh FREE-oh — "it is cold."`,
            `HACE CALOR — AH-seh kah-LOHR — "it is hot." All start with "hace" — that means "it is." Easy pattern!`,
          ],
          image: `/explorer-assets/languages/sp08-mag-1.png`,
          imageCaption: `A sunny day, a snowy day, a hot summer day.`,
          vocab: [
            {
              word: `sol`,
              definition: `Sun — SOHL.`,
              audioPrompt: `Sol, {name}. Say it like SOHL. It means sun! Bright and warm. Try it: sol!`,
            },
            {
              word: `frío`,
              definition: `Cold — FREE-oh.`,
              audioPrompt: `Frío, {name}. Say it like FREE-oh. It means cold! Brrr! Try it: frío!`,
            },
            {
              word: `calor`,
              definition: `Hot — kah-LOHR.`,
              audioPrompt: `Calor, {name}. Say it like kah-LOHR. It means hot! Summer days! Try it: calor!`,
            },
          ],
        },

        {
          id: `sp08-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 3,
          headline: `Rain and Wind`,
          paragraphs: [
            `Rainy days now, {name}! LLUEVE — YWEH-veh — means "it is raining." NIEVE — nee-EH-veh — means "snow!"`,
            `And VIENTO — bee-EHN-toh — means "wind." Spanish has a word for every kind of weather!`,
          ],
          image: `/explorer-assets/languages/sp08-mag-2.png`,
          imageCaption: `Rain falling, snow on a tree, and wind blowing leaves.`,
          vocab: [
            {
              word: `lluvia`,
              definition: `Rain — YOO-bee-ah.`,
              audioPrompt: `Lluvia, {name}. Say it like YOO-bee-ah. The LL sounds like Y! It means rain. Try it: lluvia!`,
            },
            {
              word: `nieve`,
              definition: `Snow — nee-EH-veh.`,
              audioPrompt: `Nieve, {name}. Say it like nee-EH-veh. It means snow! Cold and white. Try it: nieve!`,
            },
            {
              word: `viento`,
              definition: `Wind — bee-EHN-toh.`,
              audioPrompt: `Viento, {name}. Say it like bee-EHN-toh. It means wind! Whoosh! Try it: viento!`,
            },
          ],
        },

        {
          id: `sp08-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 3,
          headline: `The 4 Seasons`,
          paragraphs: [
            `Now the seasons, {name}! PRIMAVERA — pree-mah-BEH-rah — spring. VERANO — beh-RAH-noh — summer.`,
            `OTOÑO — oh-TOH-nyoh — fall. INVIERNO — een-bee-EHR-noh — winter. All four seasons!`,
          ],
          image: `/explorer-assets/languages/sp08-mag-3.png`,
          imageCaption: `Four seasons in one picture: spring flowers, summer sun, fall leaves, winter snow.`,
          vocab: [
            {
              word: `primavera`,
              definition: `Spring — pree-mah-BEH-rah.`,
              audioPrompt: `Primavera, {name}. Say it like pree-mah-BEH-rah. It means spring! Flowers bloom. Try it: primavera!`,
            },
            {
              word: `verano`,
              definition: `Summer — beh-RAH-noh.`,
              audioPrompt: `Verano, {name}. Say it like beh-RAH-noh. It means summer! Hot and sunny. Try it: verano!`,
            },
            {
              word: `invierno`,
              definition: `Winter — een-bee-EHR-noh.`,
              audioPrompt: `Invierno, {name}. Say it like een-bee-EHR-noh. It means winter! Cold and snowy. Try it: invierno!`,
            },
          ],
        },

        {
          id: `sp08-game`,
          type: `interactive`,
          guideText: `Match each weather word to what it means, {name}!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { id: `sp08-i1`, label: `sol`,       correctMatch: `sun` },
            { id: `sp08-i2`, label: `lluvia`,    correctMatch: `rain` },
            { id: `sp08-i3`, label: `nieve`,     correctMatch: `snow` },
            { id: `sp08-i4`, label: `verano`,    correctMatch: `summer` },
          ],
          buckets: [
            { id: `sun`,    label: `sun`,    color: `#FBBF24` },
            { id: `rain`,   label: `rain`,   color: `#60A5FA` },
            { id: `snow`,   label: `snow`,   color: `#A78BFA` },
            { id: `summer`, label: `summer`, color: `#F87171` },
          ],
        },

        {
          id: `sp08-quiz`,
          type: `quiz`,
          guideText: `¡Vamos, {name}!`,
          questions: [
            {
              id: `sp08-q1`,
              format: `multiple-choice`,
              question: `What does "sol" mean?`,
              options: [`rain`, `sun`, `snow`, `wind`],
              correctIndex: 1,
              explanation: `Sol means sun! Bright and warm.`,
            },
            {
              id: `sp08-q2`,
              format: `multiple-choice`,
              question: `Which word means "cold"?`,
              options: [`calor`, `frío`, `sol`, `viento`],
              correctIndex: 1,
              explanation: `Frío means cold! Brrr!`,
            },
            {
              id: `sp08-q3`,
              format: `multiple-choice`,
              question: `"Verano" is what season?`,
              options: [`spring`, `summer`, `fall`, `winter`],
              correctIndex: 1,
              explanation: `Verano is summer! Hot days at the beach!`,
            },
            {
              id: `sp08-q4`,
              format: `true-false`,
              question: `"Nieve" means snow in Spanish.`,
              correctAnswer: true,
              explanation: `True! Nieve means snow. Say it like nee-EH-veh.`,
            },
            {
              id: `sp08-q5`,
              format: `multiple-choice`,
              question: `What's "invierno"?`,
              options: [`summer`, `spring`, `winter`, `fall`],
              correctIndex: 2,
              explanation: `Invierno is winter! Cold and snowy season.`,
            },
            {
              id: `sp08-q6`,
              format: `fill-blank`,
              question: `Rain in Spanish is ___.`,
              options: [`lluvia`, `viento`, `sol`, `nieve`],
              correctIndex: 0,
              explanation: `Lluvia means rain! Remember LL sounds like Y!`,
            },
          ],
        },

        {
          id: `sp08-realworld`,
          type: `real-world`,
          guideText: `Look outside, {name}! What's the weather? Say it in Spanish today! Hace sol? Hace frío? Llueve?`,
          familyAdventure: `Tonight, check tomorrow's weather. Say it in Spanish! "Mañana hace sol" = "Tomorrow is sunny." Try every day this week!`,
          creativePrompt: `Draw four pictures — one for each season in Spanish! Label each: primavera, verano, otoño, invierno!`,
        },

        {
          id: `sp08-celebration`,
          type: `celebration`,
          message: `¡Excelente, {name}! You know weather and seasons in Spanish! Sol, frío, calor, lluvia, nieve, viento, and all 4 seasons! You can talk about any day in Spanish now! ¡Hasta la próxima!`,
          badge: `languages-l08`,
          badgeName: `Weather Watcher`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SP_L08;

