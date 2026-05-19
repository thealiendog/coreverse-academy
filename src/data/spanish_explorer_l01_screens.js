// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L01 — Hola y Adiós (Greetings)
// Age band : explorers (6–8)   Guide: luna
// REWRITTEN for age-appropriate Explorer band per SPANISH_CALIBRATION_SPEC
// ─────────────────────────────────────────────────────────────────────────────

const SP_L01 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-01`,
      title:     `Hola y Adiós — Greetings`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l01`,
      badgeName: `First Greeting`,

      screens: [

        // ─── WELCOME ──────────────────────────────────────────────────────
        {
          id: `sp01-welcome`,
          type: `welcome`,
          guideText: `¡Hola, {name}! I'm Luna. Today we learn to say HELLO in Spanish. Spanish is spoken by millions of people. By the end of today, you can say hello like they do! ¿Listos? Let's go!`,
          headline: `Hola y Adiós`,
          subtitle: `Hello and goodbye in Spanish`,
          visual: `/explorer-assets/languages/sp01-welcome.png`,
        },

        // ─── MAGAZINE 1 — HELLO ───────────────────────────────────────────
        {
          id: `sp01-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 3,
          headline: `Hola — Hello!`,
          paragraphs: [
            `In Spanish, we say HOLA — OH-lah. That means hello! It is the first word everyone learns.`,
            `Try it now, {name}. Say it: HOLA! In Spanish, the H is quiet. So we say "OH-lah" — not "HO-lah." Easy!`,
          ],
          image: `/explorer-assets/languages/sp01-mag-1.png`,
          imageCaption: `Two kids waving and saying "Hola!" to each other.`,
          vocab: [
            {
              word: `hola`,
              definition: `Hello — OH-lah.`,
              audioPrompt: `Hola, {name}! Say it like OH-lah. The H is quiet, like a whisper. Now you say it with me: hola!`,
            },
            {
              word: `¿cómo estás?`,
              definition: `How are you? — KOH-moh es-TAHS.`,
              audioPrompt: `¿Cómo estás?, {name}. Say it like KOH-moh es-TAHS. It means "how are you?" Spanish kids ask this all day. Try it: ¿cómo estás?`,
            },
            {
              word: `bien`,
              definition: `Good or fine — bee-EN.`,
              audioPrompt: `Bien, {name}. Say it like bee-EN. It means good or fine. When someone asks ¿cómo estás?, you say bien! That means "I'm good."`,
            },
          ],
        },

        // ─── MAGAZINE 2 — MORNING / AFTERNOON / NIGHT ─────────────────────
        {
          id: `sp01-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 3,
          headline: `Morning, Afternoon, Night`,
          paragraphs: [
            `In Spanish, we say good morning, good afternoon, and good night. Three different greetings for three times of day!`,
            `BUENOS DÍAS — good morning. BUENAS TARDES — good afternoon. BUENAS NOCHES — good night. Use the right one and people will smile!`,
          ],
          image: `/explorer-assets/languages/sp01-mag-2.png`,
          imageCaption: `Sun rising, sun in the sky, and stars at night — three times of day.`,
          vocab: [
            {
              word: `buenos días`,
              definition: `Good morning — BWAY-nos DEE-ahs.`,
              audioPrompt: `Buenos días, {name}! Say it like BWAY-nos DEE-ahs. It means good morning! Use it when you wake up. Try it: buenos días!`,
            },
            {
              word: `buenas tardes`,
              definition: `Good afternoon — BWAY-nas TAR-des.`,
              audioPrompt: `Buenas tardes, {name}. Say it like BWAY-nas TAR-des. It means good afternoon! Use it after lunch. Try it: buenas tardes!`,
            },
            {
              word: `buenas noches`,
              definition: `Good night — BWAY-nas NO-ches.`,
              audioPrompt: `Buenas noches, {name}. Say it like BWAY-nas NO-ches. It means good night! Use it before bed. Try it: buenas noches!`,
            },
          ],
        },

        // ─── MAGAZINE 3 — GOODBYE ─────────────────────────────────────────
        {
          id: `sp01-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 3,
          headline: `Adiós — Goodbye!`,
          paragraphs: [
            `When you leave, you say ADIÓS — ah-dee-OHS. That means goodbye!`,
            `You can also say HASTA LUEGO — see you later. Or just CHAO — bye! Pick your favorite, {name}. They all work!`,
          ],
          image: `/explorer-assets/languages/sp01-mag-3.png`,
          imageCaption: `A child waving goodbye to a friend.`,
          vocab: [
            {
              word: `adiós`,
              definition: `Goodbye — ah-dee-OHS.`,
              audioPrompt: `Adiós, {name}. Say it like ah-dee-OHS. It means goodbye! Wave your hand when you say it. Try it: adiós!`,
            },
            {
              word: `hasta luego`,
              definition: `See you later — AH-stah LWEH-goh.`,
              audioPrompt: `Hasta luego, {name}. Say it like AH-stah LWEH-goh. It means see you later! It's a happy goodbye. Try it: hasta luego!`,
            },
            {
              word: `chao`,
              definition: `Bye — CHOW.`,
              audioPrompt: `Chao, {name}. Say it like CHOW. It means bye! It's short and easy. Kids and friends use it. Try it: chao!`,
            },
          ],
        },

        // ─── INTERACTIVE GAME ─────────────────────────────────────────────
        {
          id: `sp01-game`,
          type: `interactive`,
          guideText: `Match the Spanish word to what it means, {name}!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { id: `sp01-i1`, label: `hola`,         correctMatch: `hello` },
            { id: `sp01-i2`, label: `adiós`,        correctMatch: `goodbye` },
            { id: `sp01-i3`, label: `buenos días`,  correctMatch: `good morning` },
            { id: `sp01-i4`, label: `buenas noches`,correctMatch: `good night` },
          ],
          buckets: [
            { id: `hello`,        label: `hello`,        color: `#60A5FA` },
            { id: `goodbye`,      label: `goodbye`,      color: `#F87171` },
            { id: `good morning`, label: `good morning`, color: `#FBBF24` },
            { id: `good night`,   label: `good night`,   color: `#34D399` },
          ],
        },

        // ─── QUIZ ─────────────────────────────────────────────────────────
        {
          id: `sp01-quiz`,
          type: `quiz`,
          guideText: `¡Vamos, {name}! Let's see what you remember!`,
          questions: [
            {
              id: `sp01-q1`,
              format: `multiple-choice`,
              question: `How do you say "hello" in Spanish?`,
              options: [`adiós`, `hola`, `bien`, `chao`],
              correctIndex: 1,
              explanation: `Hola means hello! Say it like OH-lah — with a quiet H.`,
            },
            {
              id: `sp01-q2`,
              format: `multiple-choice`,
              question: `What does "buenos días" mean?`,
              options: [`good night`, `goodbye`, `good morning`, `see you later`],
              correctIndex: 2,
              explanation: `Buenos días means good morning! Use it when you wake up.`,
            },
            {
              id: `sp01-q3`,
              format: `true-false`,
              question: `The "H" in "hola" is silent.`,
              correctAnswer: true,
              explanation: `True! In Spanish, the H is always quiet. Hola sounds like OH-lah.`,
            },
            {
              id: `sp01-q4`,
              format: `multiple-choice`,
              question: `Which word means "goodbye"?`,
              options: [`hola`, `bien`, `adiós`, `buenas noches`],
              correctIndex: 2,
              explanation: `Adiós means goodbye! Say it like ah-dee-OHS and wave your hand.`,
            },
            {
              id: `sp01-q5`,
              format: `multiple-choice`,
              question: `Someone asks "¿cómo estás?" What do you say back?`,
              options: [`adiós`, `bien`, `hola`, `chao`],
              correctIndex: 1,
              explanation: `Say bien! That means "I'm good." Easy answer to a friendly question.`,
            },
            {
              id: `sp01-q6`,
              format: `fill-blank`,
              question: `Before bed, say "buenas ___" for good night.`,
              options: [`noches`, `días`, `tardes`, `hola`],
              correctIndex: 0,
              explanation: `Buenas noches means good night! Noches means nights.`,
            },
          ],
        },

        // ─── REAL WORLD ───────────────────────────────────────────────────
        {
          id: `sp01-realworld`,
          type: `real-world`,
          guideText: `Try Spanish greetings TODAY, {name}! You don't have to wait. Just say "hola" to someone you love.`,
          familyAdventure: `For ONE day, try Spanish greetings at home! Say "buenos días" in the morning. Say "buenas noches" before bed. See if your family says it back!`,
          creativePrompt: `Draw a picture of YOU saying "¡Hola!" to a friend or pet. Write the word HOLA in big letters. Show off your new Spanish word!`,
        },

        // ─── CELEBRATION ──────────────────────────────────────────────────
        {
          id: `sp01-celebration`,
          type: `celebration`,
          message: `¡Excelente, {name}! You learned to say HELLO, GOODBYE, and times of day in Spanish! Hola, adiós, buenos días, buenas tardes, buenas noches. Nine new Spanish words — that's amazing! ¡Hasta la próxima!`,
          badge: `languages-l01`,
          badgeName: `First Greeting`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SP_L01;

