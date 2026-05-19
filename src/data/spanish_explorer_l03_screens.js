// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L03 — Mi Familia (My Family)
// Age band : explorers (6–8)   Guide: luna
// REWRITTEN for age-appropriate Explorer band
// ─────────────────────────────────────────────────────────────────────────────

const SP_L03 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-03`,
      title:     `Mi Familia — My Family`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l03`,
      badgeName: `Family Storyteller`,

      screens: [

        {
          id: `sp03-welcome`,
          type: `welcome`,
          guideText: `¡Hola, {name}! Today we meet FAMILY in Spanish. Mom, dad, brother, sister, grandma, grandpa — all the people we love! ¡Vamos!`,
          headline: `Mi Familia`,
          subtitle: `Family words in Spanish`,
          visual: `/explorer-assets/languages/sp03-welcome.png`,
        },

        // ─── MAGAZINE 1 — MAMÁ Y PAPÁ ────────────────────────────────────
        {
          id: `sp03-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 3,
          headline: `Mamá and Papá`,
          paragraphs: [
            `Start with the most important, {name}! MAMÁ — mah-MAH — means mom! PAPÁ — pah-PAH — means dad!`,
            `In Spanish, the second part is loudest: mah-MAH and pah-PAH. So fun to say. Try it!`,
          ],
          image: `/explorer-assets/languages/sp03-mag-1.png`,
          imageCaption: `A mom and dad hugging their child.`,
          vocab: [
            {
              word: `mamá`,
              definition: `Mom — mah-MAH.`,
              audioPrompt: `Mamá, {name}. Say it like mah-MAH. The second part is louder. It means mom! Try it: mamá!`,
            },
            {
              word: `papá`,
              definition: `Dad — pah-PAH.`,
              audioPrompt: `Papá, {name}. Say it like pah-PAH. The second part is louder. It means dad! Try it: papá!`,
            },
            {
              word: `mi familia`,
              definition: `My family — mee fah-MEE-lee-ah.`,
              audioPrompt: `Mi familia, {name}. Say it like mee fah-MEE-lee-ah. It means my family! Mi means my. Try it: mi familia!`,
            },
          ],
        },

        // ─── MAGAZINE 2 — HERMANOS ───────────────────────────────────────
        {
          id: `sp03-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 3,
          headline: `Brothers and Sisters`,
          paragraphs: [
            `Brothers and sisters now, {name}! HERMANO — ehr-MAH-noh — means brother. HERMANA — ehr-MAH-nah — means sister.`,
            `One letter changes — O for boy, A for girl. Spanish does this a lot! Try both: hermano, hermana.`,
          ],
          image: `/explorer-assets/languages/sp03-mag-2.png`,
          imageCaption: `A brother and a sister playing together.`,
          vocab: [
            {
              word: `hermano`,
              definition: `Brother — ehr-MAH-noh.`,
              audioPrompt: `Hermano, {name}. Say it like ehr-MAH-noh. Remember, the H is quiet! It means brother. Try it: hermano!`,
            },
            {
              word: `hermana`,
              definition: `Sister — ehr-MAH-nah.`,
              audioPrompt: `Hermana, {name}. Say it like ehr-MAH-nah. It means sister! Just change the O to A. Try it: hermana!`,
            },
            {
              word: `bebé`,
              definition: `Baby — beh-BEH.`,
              audioPrompt: `Bebé, {name}. Say it like beh-BEH. It means baby! Easy and cute. Try it: bebé!`,
            },
          ],
        },

        // ─── MAGAZINE 3 — ABUELOS ─────────────────────────────────────────
        {
          id: `sp03-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 3,
          headline: `Grandma and Grandpa`,
          paragraphs: [
            `Grandparents are special, {name}! ABUELA — ah-BWAY-lah — means grandma. ABUELO — ah-BWAY-loh — means grandpa.`,
            `Many Spanish kids call them ABUELA and ABUELO, or sometimes ABUELITA and ABUELITO — that's grandma and grandpa with EXTRA love!`,
          ],
          image: `/explorer-assets/languages/sp03-mag-3.png`,
          imageCaption: `A grandma and grandpa with their grandchild.`,
          vocab: [
            {
              word: `abuela`,
              definition: `Grandma — ah-BWAY-lah.`,
              audioPrompt: `Abuela, {name}. Say it like ah-BWAY-lah. It means grandma! Some kids say abuelita — that's grandma with extra love. Try it: abuela!`,
            },
            {
              word: `abuelo`,
              definition: `Grandpa — ah-BWAY-loh.`,
              audioPrompt: `Abuelo, {name}. Say it like ah-BWAY-loh. It means grandpa! Try it: abuelo!`,
            },
            {
              word: `amor`,
              definition: `Love — ah-MOR.`,
              audioPrompt: `Amor, {name}. Say it like ah-MOR. It means love! Family is all about amor. Try it: amor!`,
            },
          ],
        },

        // ─── INTERACTIVE GAME ─────────────────────────────────────────────
        {
          id: `sp03-game`,
          type: `interactive`,
          guideText: `Match each family word to who they are, {name}!`,
          columnHeaders: [`Spanish`, `Family member`],
          items: [
            { id: `sp03-i1`, label: `mamá`,    correctMatch: `mom` },
            { id: `sp03-i2`, label: `papá`,    correctMatch: `dad` },
            { id: `sp03-i3`, label: `hermana`, correctMatch: `sister` },
            { id: `sp03-i4`, label: `abuelo`,  correctMatch: `grandpa` },
          ],
          buckets: [
            { id: `mom`,     label: `mom`,     color: `#F472B6` },
            { id: `dad`,     label: `dad`,     color: `#60A5FA` },
            { id: `sister`,  label: `sister`,  color: `#FBBF24` },
            { id: `grandpa`, label: `grandpa`, color: `#34D399` },
          ],
        },

        // ─── QUIZ ─────────────────────────────────────────────────────────
        {
          id: `sp03-quiz`,
          type: `quiz`,
          guideText: `¡Vamos, {name}!`,
          questions: [
            {
              id: `sp03-q1`,
              format: `multiple-choice`,
              question: `How do you say "mom" in Spanish?`,
              options: [`papá`, `mamá`, `bebé`, `abuela`],
              correctIndex: 1,
              explanation: `Mamá means mom! Say it like mah-MAH.`,
            },
            {
              id: `sp03-q2`,
              format: `multiple-choice`,
              question: `What does "hermano" mean?`,
              options: [`sister`, `mom`, `brother`, `grandpa`],
              correctIndex: 2,
              explanation: `Hermano means brother! Say it like ehr-MAH-noh.`,
            },
            {
              id: `sp03-q3`,
              format: `multiple-choice`,
              question: `Which word means "sister"?`,
              options: [`hermano`, `hermana`, `mamá`, `bebé`],
              correctIndex: 1,
              explanation: `Hermana means sister! It ends in A. Brother ends in O.`,
            },
            {
              id: `sp03-q4`,
              format: `true-false`,
              question: `"Abuela" means grandma in Spanish.`,
              correctAnswer: true,
              explanation: `True! Abuela means grandma. Some kids say abuelita — grandma with extra love!`,
            },
            {
              id: `sp03-q5`,
              format: `multiple-choice`,
              question: `In Spanish, "mi familia" means:`,
              options: [`my friends`, `my family`, `my home`, `my pet`],
              correctIndex: 1,
              explanation: `Mi familia means my family! Mi means my, familia means family.`,
            },
            {
              id: `sp03-q6`,
              format: `fill-blank`,
              question: `In Spanish, "love" is ___.`,
              options: [`amor`, `bebé`, `papá`, `casa`],
              correctIndex: 0,
              explanation: `Amor means love! Family is full of amor.`,
            },
          ],
        },

        // ─── REAL WORLD ───────────────────────────────────────────────────
        {
          id: `sp03-realworld`,
          type: `real-world`,
          guideText: `Try Spanish family words TODAY, {name}! Call out "mamá!" or "papá!" — they'll smile big!`,
          familyAdventure: `Tonight, say each family member's Spanish name out loud! Mamá! Papá! Hermano! Hermana! Give everyone a hug.`,
          creativePrompt: `Draw your family! Label each person in Spanish: mamá, papá, hermano, hermana, abuela, abuelo. Your Spanish family tree!`,
        },

        // ─── CELEBRATION ──────────────────────────────────────────────────
        {
          id: `sp03-celebration`,
          type: `celebration`,
          message: `¡Excelente, {name}! You learned Spanish names for all your favorite people! Mamá, papá, hermano, hermana, abuela, abuelo, bebé, mi familia, amor. So much love! ¡Hasta la próxima!`,
          badge: `languages-l03`,
          badgeName: `Family Storyteller`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SP_L03;

