// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L04 — El Cuerpo (The Body)
// Age band : explorers (6–8)   Guide: luna
// REWRITTEN for age-appropriate Explorer band
// ─────────────────────────────────────────────────────────────────────────────

const SP_L04 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-04`,
      title:     `El Cuerpo — The Body`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l04`,
      badgeName: `Body Mapper`,

      screens: [

        {
          id: `sp04-welcome`,
          type: `welcome`,
          guideText: `¡Hola, {name}! Today we learn BODY PARTS in Spanish. Head, eyes, hands, feet — point and say! ¡Vamos!`,
          headline: `El Cuerpo`,
          subtitle: `Body parts in Spanish`,
          visual: `/explorer-assets/languages/sp04-welcome.png`,
        },

        // ─── MAGAZINE 1 — HEAD ───────────────────────────────────────────
        {
          id: `sp04-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 3,
          headline: `Your Head`,
          paragraphs: [
            `Start at the top, {name}! CABEZA — kah-BEH-sah — means head. Touch yours and say it!`,
            `OJOS — OH-hohs — means eyes. BOCA — BOH-kah — means mouth. Point to each one as you say it!`,
          ],
          image: `/explorer-assets/languages/sp04-mag-1.png`,
          imageCaption: `A child's face with labels: cabeza, ojos, boca.`,
          vocab: [
            {
              word: `cabeza`,
              definition: `Head — kah-BEH-sah.`,
              audioPrompt: `Cabeza, {name}. Say it like kah-BEH-sah. It means head! Touch the top of your head. Try it: cabeza!`,
            },
            {
              word: `ojos`,
              definition: `Eyes — OH-hohs.`,
              audioPrompt: `Ojos, {name}. Say it like OH-hohs. It means eyes! Point to your eyes. Try it: ojos!`,
            },
            {
              word: `boca`,
              definition: `Mouth — BOH-kah.`,
              audioPrompt: `Boca, {name}. Say it like BOH-kah. It means mouth! Open your boca and say boca!`,
            },
          ],
        },

        // ─── MAGAZINE 2 — ARMS AND HANDS ─────────────────────────────────
        {
          id: `sp04-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 3,
          headline: `Arms and Hands`,
          paragraphs: [
            `Now your arms, {name}! BRAZO — BRAH-soh — means arm. MANO — MAH-noh — means hand.`,
            `Wave your manos! Hold up your brazos! Move your body as you learn. Your body remembers better that way.`,
          ],
          image: `/explorer-assets/languages/sp04-mag-2.png`,
          imageCaption: `A child raising both arms with hands open wide.`,
          vocab: [
            {
              word: `brazo`,
              definition: `Arm — BRAH-soh.`,
              audioPrompt: `Brazo, {name}. Say it like BRAH-soh. It means arm! Wave your brazo. Try it: brazo!`,
            },
            {
              word: `mano`,
              definition: `Hand — MAH-noh.`,
              audioPrompt: `Mano, {name}. Say it like MAH-noh. It means hand! Wiggle your mano. Try it: mano!`,
            },
            {
              word: `dedo`,
              definition: `Finger — DEH-doh.`,
              audioPrompt: `Dedo, {name}. Say it like DEH-doh. It means finger! You have ten dedos. Try it: dedo!`,
            },
          ],
        },

        // ─── MAGAZINE 3 — LEGS AND FEET ───────────────────────────────────
        {
          id: `sp04-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 3,
          headline: `Legs and Feet`,
          paragraphs: [
            `Down to your legs, {name}! PIERNA — pee-EHR-nah — means leg. PIE — pee-EH — means foot.`,
            `Stand up and stomp your pies! Jump on your piernas! Your cuerpo is amazing!`,
          ],
          image: `/explorer-assets/languages/sp04-mag-3.png`,
          imageCaption: `A child jumping with both feet off the ground.`,
          vocab: [
            {
              word: `pierna`,
              definition: `Leg — pee-EHR-nah.`,
              audioPrompt: `Pierna, {name}. Say it like pee-EHR-nah. It means leg! Touch your pierna. Try it: pierna!`,
            },
            {
              word: `pie`,
              definition: `Foot — pee-EH.`,
              audioPrompt: `Pie, {name}. Say it like pee-EH. It means foot! Stomp your pie! Try it: pie!`,
            },
            {
              word: `cuerpo`,
              definition: `Body — KWEHR-poh.`,
              audioPrompt: `Cuerpo, {name}. Say it like KWEHR-poh. It means body! Your whole cuerpo. Try it: cuerpo!`,
            },
          ],
        },

        // ─── INTERACTIVE GAME ─────────────────────────────────────────────
        {
          id: `sp04-game`,
          type: `interactive`,
          guideText: `Match each body part to what it means, {name}!`,
          columnHeaders: [`Spanish`, `Body part`],
          items: [
            { id: `sp04-i1`, label: `cabeza`, correctMatch: `head` },
            { id: `sp04-i2`, label: `mano`,   correctMatch: `hand` },
            { id: `sp04-i3`, label: `ojos`,   correctMatch: `eyes` },
            { id: `sp04-i4`, label: `pie`,    correctMatch: `foot` },
          ],
          buckets: [
            { id: `head`, label: `head`, color: `#F472B6` },
            { id: `hand`, label: `hand`, color: `#FBBF24` },
            { id: `eyes`, label: `eyes`, color: `#60A5FA` },
            { id: `foot`, label: `foot`, color: `#34D399` },
          ],
        },

        // ─── QUIZ ─────────────────────────────────────────────────────────
        {
          id: `sp04-quiz`,
          type: `quiz`,
          guideText: `¡Vamos, {name}!`,
          questions: [
            {
              id: `sp04-q1`,
              format: `multiple-choice`,
              question: `What does "cabeza" mean?`,
              options: [`hand`, `head`, `foot`, `eye`],
              correctIndex: 1,
              explanation: `Cabeza means head! Touch the top of your head.`,
            },
            {
              id: `sp04-q2`,
              format: `multiple-choice`,
              question: `Which Spanish word means "hand"?`,
              options: [`mano`, `pie`, `boca`, `dedo`],
              correctIndex: 0,
              explanation: `Mano means hand! Wave your mano in the air.`,
            },
            {
              id: `sp04-q3`,
              format: `multiple-choice`,
              question: `"Ojos" means:`,
              options: [`ears`, `eyes`, `nose`, `mouth`],
              correctIndex: 1,
              explanation: `Ojos means eyes! Say it like OH-hohs.`,
            },
            {
              id: `sp04-q4`,
              format: `true-false`,
              question: `"Pie" means foot in Spanish.`,
              correctAnswer: true,
              explanation: `True! Pie means foot. Say it like pee-EH. Stomp your pie!`,
            },
            {
              id: `sp04-q5`,
              format: `multiple-choice`,
              question: `What does "cuerpo" mean?`,
              options: [`face`, `body`, `arm`, `leg`],
              correctIndex: 1,
              explanation: `Cuerpo means body — your whole cuerpo!`,
            },
            {
              id: `sp04-q6`,
              format: `fill-blank`,
              question: `Finger in Spanish is ___.`,
              options: [`dedo`, `mano`, `brazo`, `pie`],
              correctIndex: 0,
              explanation: `Dedo means finger! You have ten dedos.`,
            },
          ],
        },

        // ─── REAL WORLD ───────────────────────────────────────────────────
        {
          id: `sp04-realworld`,
          type: `real-world`,
          guideText: `Touch and say, {name}! Point to your body parts and say them in Spanish. Your cuerpo will help you remember!`,
          familyAdventure: `Tonight, play "Simon Says" in Spanish! "Toca tu cabeza!" (Touch your head!) "Mueve tu mano!" (Move your hand!) Take turns!`,
          creativePrompt: `Draw a body and label all the parts in Spanish: cabeza, ojos, boca, brazo, mano, dedo, pierna, pie. A Spanish body map!`,
        },

        // ─── CELEBRATION ──────────────────────────────────────────────────
        {
          id: `sp04-celebration`,
          type: `celebration`,
          message: `¡Excelente, {name}! You know body parts in Spanish! Cabeza, ojos, boca, brazo, mano, dedo, pierna, pie, cuerpo. Your whole cuerpo speaks Spanish now! ¡Hasta la próxima!`,
          badge: `languages-l04`,
          badgeName: `Body Mapper`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SP_L04;

