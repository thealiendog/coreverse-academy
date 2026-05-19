// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L07 — Días y Meses (Days and Months)
// Age band : explorers (6–8)   Guide: luna
// NEW LESSON — per curriculum map
// ─────────────────────────────────────────────────────────────────────────────

const SP_L07 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-07`,
      title:     `Días y Meses — Days and Months`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l07`,
      badgeName: `Calendar Keeper`,

      screens: [

        {
          id: `sp07-welcome`,
          type: `welcome`,
          guideText: `¡Hola, {name}! Today we learn days and months in Spanish! When is your birthday? What day is school? Let's find out! ¡Vamos!`,
          headline: `Días y Meses`,
          subtitle: `Days and months in Spanish`,
          visual: `/explorer-assets/languages/sp07-welcome.png`,
        },

        // ─── MAGAZINE 1 — WEEKDAYS ───────────────────────────────────────
        {
          id: `sp07-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 3,
          headline: `Days of the Week`,
          paragraphs: [
            `Let's start with weekdays, {name}! LUNES — LOO-nes — is Monday. MARTES — MAR-tes — is Tuesday. MIÉRCOLES — mee-EHR-koh-les — is Wednesday.`,
            `Keep going! JUEVES — HWEH-ves — is Thursday. VIERNES — bee-EHR-nes — is Friday. Five weekdays in Spanish!`,
          ],
          image: `/explorer-assets/languages/sp07-mag-1.png`,
          imageCaption: `A calendar showing 5 weekdays in Spanish.`,
          vocab: [
            {
              word: `lunes`,
              definition: `Monday — LOO-nes.`,
              audioPrompt: `Lunes, {name}. Say it like LOO-nes. It means Monday — the start of the week! Try it: lunes!`,
            },
            {
              word: `miércoles`,
              definition: `Wednesday — mee-EHR-koh-les.`,
              audioPrompt: `Miércoles, {name}. Say it like mee-EHR-koh-les. It means Wednesday. The hardest day to say! Try it: miércoles!`,
            },
            {
              word: `viernes`,
              definition: `Friday — bee-EHR-nes.`,
              audioPrompt: `Viernes, {name}. Say it like bee-EHR-nes. It means Friday! Almost weekend! Try it: viernes!`,
            },
          ],
        },

        // ─── MAGAZINE 2 — WEEKEND ─────────────────────────────────────────
        {
          id: `sp07-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 3,
          headline: `The Weekend`,
          paragraphs: [
            `Weekend time, {name}! SÁBADO — SAH-bah-doh — is Saturday. DOMINGO — doh-MEEN-goh — is Sunday.`,
            `So all 7 days: lunes, martes, miércoles, jueves, viernes, sábado, domingo. Try to say them in order!`,
          ],
          image: `/explorer-assets/languages/sp07-mag-2.png`,
          imageCaption: `Saturday and Sunday on a colorful calendar — weekend!`,
          vocab: [
            {
              word: `sábado`,
              definition: `Saturday — SAH-bah-doh.`,
              audioPrompt: `Sábado, {name}. Say it like SAH-bah-doh. It means Saturday! Weekend! Try it: sábado!`,
            },
            {
              word: `domingo`,
              definition: `Sunday — doh-MEEN-goh.`,
              audioPrompt: `Domingo, {name}. Say it like doh-MEEN-goh. It means Sunday — family day! Try it: domingo!`,
            },
            {
              word: `hoy`,
              definition: `Today — OY.`,
              audioPrompt: `Hoy, {name}. Say it like OY. It means today! "Hoy es lunes" means "Today is Monday." Try it: hoy!`,
            },
          ],
        },

        // ─── MAGAZINE 3 — MONTHS ──────────────────────────────────────────
        {
          id: `sp07-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 3,
          headline: `Months`,
          paragraphs: [
            `Now months, {name}! ENERO — eh-NEH-roh — January. JULIO — HOO-lee-oh — July. DICIEMBRE — dee-see-EHM-breh — December.`,
            `Many months sound like English: SEPTIEMBRE, OCTUBRE, NOVIEMBRE. Easy to remember!`,
          ],
          image: `/explorer-assets/languages/sp07-mag-3.png`,
          imageCaption: `A calendar showing the 12 months in Spanish.`,
          vocab: [
            {
              word: `enero`,
              definition: `January — eh-NEH-roh.`,
              audioPrompt: `Enero, {name}. Say it like eh-NEH-roh. It means January — the first month! Try it: enero!`,
            },
            {
              word: `julio`,
              definition: `July — HOO-lee-oh.`,
              audioPrompt: `Julio, {name}. Say it like HOO-lee-oh. It means July! Summer fun! Try it: julio!`,
            },
            {
              word: `diciembre`,
              definition: `December — dee-see-EHM-breh.`,
              audioPrompt: `Diciembre, {name}. Say it like dee-see-EHM-breh. It means December — the last month! Try it: diciembre!`,
            },
          ],
        },

        {
          id: `sp07-game`,
          type: `interactive`,
          guideText: `Match each Spanish word to the English meaning, {name}!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { id: `sp07-i1`, label: `lunes`,    correctMatch: `monday` },
            { id: `sp07-i2`, label: `sábado`,   correctMatch: `saturday` },
            { id: `sp07-i3`, label: `enero`,    correctMatch: `january` },
            { id: `sp07-i4`, label: `diciembre`,correctMatch: `december` },
          ],
          buckets: [
            { id: `monday`,    label: `monday`,    color: `#60A5FA` },
            { id: `saturday`,  label: `saturday`,  color: `#34D399` },
            { id: `january`,   label: `january`,   color: `#A78BFA` },
            { id: `december`,  label: `december`,  color: `#F472B6` },
          ],
        },

        {
          id: `sp07-quiz`,
          type: `quiz`,
          guideText: `¡Vamos, {name}!`,
          questions: [
            {
              id: `sp07-q1`,
              format: `multiple-choice`,
              question: `What day is "lunes"?`,
              options: [`Sunday`, `Monday`, `Friday`, `Saturday`],
              correctIndex: 1,
              explanation: `Lunes is Monday! The first day of the school week.`,
            },
            {
              id: `sp07-q2`,
              format: `multiple-choice`,
              question: `Which day is "viernes"?`,
              options: [`Wednesday`, `Thursday`, `Friday`, `Sunday`],
              correctIndex: 2,
              explanation: `Viernes is Friday! Almost weekend!`,
            },
            {
              id: `sp07-q3`,
              format: `multiple-choice`,
              question: `"Sábado" means:`,
              options: [`Monday`, `Friday`, `Saturday`, `Sunday`],
              correctIndex: 2,
              explanation: `Sábado is Saturday! Weekend day!`,
            },
            {
              id: `sp07-q4`,
              format: `true-false`,
              question: `"Hoy" means "today" in Spanish.`,
              correctAnswer: true,
              explanation: `True! Hoy means today. "Hoy es lunes" = "Today is Monday."`,
            },
            {
              id: `sp07-q5`,
              format: `multiple-choice`,
              question: `What month is "julio"?`,
              options: [`June`, `July`, `August`, `January`],
              correctIndex: 1,
              explanation: `Julio is July! Summer fun!`,
            },
            {
              id: `sp07-q6`,
              format: `fill-blank`,
              question: `December in Spanish is ___.`,
              options: [`diciembre`, `enero`, `julio`, `marzo`],
              correctIndex: 0,
              explanation: `Diciembre! The last month of the year.`,
            },
          ],
        },

        {
          id: `sp07-realworld`,
          type: `real-world`,
          guideText: `Use Spanish days TODAY, {name}! Look at the calendar. Say what day it is in Spanish: "Hoy es ___!"`,
          familyAdventure: `Tonight, ask your family: "¿Qué día es hoy?" (What day is today?) Then say it in Spanish! Do it tomorrow too!`,
          creativePrompt: `Make a Spanish calendar for the week! Draw 7 boxes. Label each with the Spanish day. Decorate your favorite day!`,
        },

        {
          id: `sp07-celebration`,
          type: `celebration`,
          message: `¡Excelente, {name}! You know days and months in Spanish! Lunes, martes, miércoles, jueves, viernes, sábado, domingo. Enero, julio, diciembre. You can plan a whole year now! ¡Hasta la próxima!`,
          badge: `languages-l07`,
          badgeName: `Calendar Keeper`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SP_L07;

