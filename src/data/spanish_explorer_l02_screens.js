// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L02 — Números y Colores (Numbers and Colors)
// Age band : explorers (6–8)   Guide: luna
// REWRITTEN for age-appropriate Explorer band
// ─────────────────────────────────────────────────────────────────────────────

const SP_L02 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-02`,
      title:     `Números y Colores — Numbers and Colors`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l02`,
      badgeName: `Color Counter`,

      screens: [

        {
          id: `sp02-welcome`,
          type: `welcome`,
          guideText: `¡Hola otra vez, {name}! Today we count and learn colors in Spanish! Uno, dos, tres! Rojo, azul, verde! Ready? ¡Vamos!`,
          headline: `Números y Colores`,
          subtitle: `Numbers and colors in Spanish`,
          visual: `/explorer-assets/languages/sp02-welcome.png`,
        },

        // ─── MAGAZINE 1 — NUMBERS 1-5 ─────────────────────────────────────
        {
          id: `sp02-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 3,
          headline: `Numbers 1 to 5`,
          paragraphs: [
            `Let's count, {name}! UNO — OO-noh — that's one. DOS — DOHS — that's two. TRES — TREHS — three!`,
            `Keep going: CUATRO — KWAH-troh — four. CINCO — SEEN-koh — five. Now you can count to five in Spanish!`,
          ],
          image: `/explorer-assets/languages/sp02-mag-1.png`,
          imageCaption: `Five fingers up, counting from 1 to 5.`,
          vocab: [
            {
              word: `uno`,
              definition: `One — OO-noh.`,
              audioPrompt: `Uno, {name}. Say it like OO-noh. It means one! Hold up one finger. Try it: uno!`,
            },
            {
              word: `dos`,
              definition: `Two — DOHS.`,
              audioPrompt: `Dos, {name}. Say it like DOHS. It means two! Hold up two fingers. Try it: dos!`,
            },
            {
              word: `tres`,
              definition: `Three — TREHS.`,
              audioPrompt: `Tres, {name}. Say it like TREHS. It means three! Roll the R a tiny bit. Try it: tres!`,
            },
          ],
        },

        // ─── MAGAZINE 2 — NUMBERS 6-10 ────────────────────────────────────
        {
          id: `sp02-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 3,
          headline: `Numbers 6 to 10`,
          paragraphs: [
            `Now the higher numbers, {name}! SEIS — SAYS — six. SIETE — see-EH-teh — seven. OCHO — OH-choh — eight.`,
            `Almost done! NUEVE — noo-EH-veh — nine. DIEZ — dee-EHS — ten! You can count to TEN in Spanish now!`,
          ],
          image: `/explorer-assets/languages/sp02-mag-2.png`,
          imageCaption: `Ten fingers up. Two hands counting together.`,
          vocab: [
            {
              word: `cinco`,
              definition: `Five — SEEN-koh.`,
              audioPrompt: `Cinco, {name}. Say it like SEEN-koh. It means five! High five! Try it: cinco!`,
            },
            {
              word: `ocho`,
              definition: `Eight — OH-choh.`,
              audioPrompt: `Ocho, {name}. Say it like OH-choh. It means eight! The CH sounds like in "cheese." Try it: ocho!`,
            },
            {
              word: `diez`,
              definition: `Ten — dee-EHS.`,
              audioPrompt: `Diez, {name}. Say it like dee-EHS. It means ten! All ten fingers up. Try it: diez!`,
            },
          ],
        },

        // ─── MAGAZINE 3 — COLORS ──────────────────────────────────────────
        {
          id: `sp02-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 3,
          headline: `Colors`,
          paragraphs: [
            `Now colors, {name}! ROJO — ROH-hoh — red. AZUL — ah-SOOL — blue. AMARILLO — ah-mah-REE-yoh — yellow.`,
            `More colors: VERDE — VEHR-deh — green. NEGRO — NEH-groh — black. BLANCO — BLAHN-koh — white. Six new colors!`,
          ],
          image: `/explorer-assets/languages/sp02-mag-3.png`,
          imageCaption: `A rainbow with colors labeled in Spanish: rojo, azul, amarillo, verde.`,
          vocab: [
            {
              word: `rojo`,
              definition: `Red — ROH-hoh.`,
              audioPrompt: `Rojo, {name}. Say it like ROH-hoh. It means red! The J sounds like H. Try it: rojo!`,
            },
            {
              word: `azul`,
              definition: `Blue — ah-SOOL.`,
              audioPrompt: `Azul, {name}. Say it like ah-SOOL. It means blue! Like the sky and the sea. Try it: azul!`,
            },
            {
              word: `verde`,
              definition: `Green — VEHR-deh.`,
              audioPrompt: `Verde, {name}. Say it like VEHR-deh. It means green! Like grass and leaves. Try it: verde!`,
            },
          ],
        },

        // ─── INTERACTIVE GAME ─────────────────────────────────────────────
        {
          id: `sp02-game`,
          type: `interactive`,
          guideText: `Match the Spanish word to the English meaning, {name}!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { id: `sp02-i1`, label: `tres`,  correctMatch: `three` },
            { id: `sp02-i2`, label: `diez`,  correctMatch: `ten` },
            { id: `sp02-i3`, label: `rojo`,  correctMatch: `red` },
            { id: `sp02-i4`, label: `azul`,  correctMatch: `blue` },
          ],
          buckets: [
            { id: `three`, label: `three`, color: `#FBBF24` },
            { id: `ten`,   label: `ten`,   color: `#A78BFA` },
            { id: `red`,   label: `red`,   color: `#F87171` },
            { id: `blue`,  label: `blue`,  color: `#60A5FA` },
          ],
        },

        // ─── QUIZ ─────────────────────────────────────────────────────────
        {
          id: `sp02-quiz`,
          type: `quiz`,
          guideText: `¡Vamos, {name}!`,
          questions: [
            {
              id: `sp02-q1`,
              format: `multiple-choice`,
              question: `How do you say "one" in Spanish?`,
              options: [`dos`, `uno`, `tres`, `cinco`],
              correctIndex: 1,
              explanation: `Uno means one! Say it like OO-noh.`,
            },
            {
              id: `sp02-q2`,
              format: `multiple-choice`,
              question: `What number is "cinco"?`,
              options: [`3`, `5`, `7`, `10`],
              correctIndex: 1,
              explanation: `Cinco is five! Like a high five.`,
            },
            {
              id: `sp02-q3`,
              format: `multiple-choice`,
              question: `Which Spanish word means "red"?`,
              options: [`azul`, `verde`, `rojo`, `amarillo`],
              correctIndex: 2,
              explanation: `Rojo means red! Say it like ROH-hoh.`,
            },
            {
              id: `sp02-q4`,
              format: `true-false`,
              question: `"Diez" means ten in Spanish.`,
              correctAnswer: true,
              explanation: `True! Diez means ten. Say it like dee-EHS.`,
            },
            {
              id: `sp02-q5`,
              format: `multiple-choice`,
              question: `What color is "verde"?`,
              options: [`yellow`, `blue`, `green`, `white`],
              correctIndex: 2,
              explanation: `Verde is green — like grass and leaves!`,
            },
            {
              id: `sp02-q6`,
              format: `fill-blank`,
              question: `The Spanish word for blue is ___.`,
              options: [`azul`, `rojo`, `verde`, `negro`],
              correctIndex: 0,
              explanation: `Azul means blue! Like the sky.`,
            },
          ],
        },

        // ─── REAL WORLD ───────────────────────────────────────────────────
        {
          id: `sp02-realworld`,
          type: `real-world`,
          guideText: `Practice today, {name}! Look around. Count things in Spanish. Name colors in Spanish. Easy!`,
          familyAdventure: `Tonight, count things together in Spanish! Count toys: uno, dos, tres! Name the colors of your clothes in Spanish too!`,
          creativePrompt: `Draw a rainbow! Label each color in Spanish: rojo, naranja, amarillo, verde, azul. A Spanish rainbow!`,
        },

        // ─── CELEBRATION ──────────────────────────────────────────────────
        {
          id: `sp02-celebration`,
          type: `celebration`,
          message: `¡Excelente, {name}! You can count to TEN in Spanish AND name colors! Uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez! Rojo, azul, verde — colorful! ¡Hasta la próxima!`,
          badge: `languages-l02`,
          badgeName: `Color Counter`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SP_L02;

