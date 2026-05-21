// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L17 — Grammar: Nouns, Verbs, Adjectives, and Adverbs
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.L.2-3.1
// REWRITE v2 (May 2026): Grade 1 accessible, NOUN/VERB/ADJECTIVE/ADVERB
// 4-bucket identification game tests the four parts of speech directly
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L17 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-17`,
      title:     `Grammar: Nouns, Verbs, Adjectives, and Adverbs`,
      duration:  12,
      xpReward:  50,
      badge:     `grammar-explorer`,
      badgeName: `Grammar Explorer`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Today's lesson is about GRAMMAR — the way words work! Every word has a JOB in a sentence. Some name things. Some show action. Some describe. Some tell HOW. Let's meet the FOUR most important kinds of words!`,
          headline: `Grammar: Nouns, Verbs, Adjectives, and Adverbs`,
          subtitle: `The four most important kinds of words`,
          visual: `/explorer-assets/ela/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Words Have Jobs`,
          paragraphs: [
            `Every word in a sentence has a JOB!`,
            `Some words name people, places, or things. Some words show action. Some describe what things look like. Some tell HOW something is done. These different jobs are called PARTS OF SPEECH! Just like a team has different positions, sentences have different word jobs. Today, you'll meet the four most important ones!`,
          ],
          image: `/explorer-assets/ela/l17-s1-word-jobs.webp`,
          imageCaption: `Every word has a job. Parts of speech!`,
          vocab: [
            { word: `grammar`,         definition: `The rules of how words work together.`,
              audioPrompt: `Grammar is the rules of how words work together in sentences. Every language has grammar. English grammar tells us which words do which jobs. It's not about being fancy — it's about being CLEAR!` },
            { word: `parts of speech`, definition: `The different jobs words can do.`,
              audioPrompt: `Parts of speech are the different jobs words can do in a sentence. Some name things. Some show action. Some describe. Knowing the parts of speech is like knowing the positions on a sports team!` },
            { word: `job`,             definition: `What something does.`,
              audioPrompt: `A job is what something does. Every word has a job in a sentence. "Dog" has the job of NAMING. "Ran" has the job of showing ACTION. Knowing each word's job helps you understand sentences!` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Part 1: NOUNS`,
          paragraphs: [
            `The first part of speech is NOUNS. A noun names a PERSON, PLACE, or THING!`,
            `PERSON: Maya, doctor, brother. PLACE: school, beach, kitchen. THING: book, dog, rainbow! Even IDEAS can be nouns — like love and friendship. If you can put "the" or "a" in front, it's probably a noun. THE dog. A house. Nouns are everywhere — the building blocks of sentences!`,
          ],
          image: `/explorer-assets/ela/l17-s2-nouns.webp`,
          imageCaption: `Nouns name PERSON, PLACE, or THING!`,
          vocab: [
            { word: `noun`,   definition: `A word that names a person, place, thing, or idea.`,
              audioPrompt: `A noun is a word that names a person, place, thing, or idea. Maya, school, book, love — all nouns. Most sentences have at least one noun. The building blocks of sentences!` },
            { word: `person`, definition: `A human.`,
              audioPrompt: `A person is a human. People's names — Maya, Sam, Quill — are nouns. People's roles — doctor, teacher, mom — are also nouns. Anything naming a human counts!` },
            { word: `thing`,  definition: `An object or idea.`,
              audioPrompt: `A thing is an object or idea. Toys, books, dreams, feelings — all things. All nouns. Some you can touch. Some you can't. Both kinds are nouns!` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Part 2: VERBS`,
          paragraphs: [
            `VERBS are ACTION words! They tell what someone DOES.`,
            `Run. Jump. Read. Eat. Sing. Cry. Sleep. Build. Climb! All verbs. Verbs give sentences MOVEMENT. Without a verb, nothing happens! "The dog" is not a sentence. "The dog BARKED!" — now it's a sentence! BARKED is the verb. Verbs make sentences MOVE!`,
          ],
          image: `/explorer-assets/ela/l17-s3-verbs.webp`,
          imageCaption: `Verbs = action words. The engine of every sentence!`,
          vocab: [
            { word: `verb`,              definition: `A word that shows action.`,
              audioPrompt: `A verb is a word that shows action. Run, jump, eat, read — all verbs. Verbs make sentences MOVE. Without a verb, there's no complete sentence. Verbs are the engine!` },
            { word: `action`,            definition: `Something happening.`,
              audioPrompt: `Action means something happening. Most verbs show action. Running is action. Reading is action. Even thinking is action — happening inside your head!` },
            { word: `complete sentence`, definition: `A sentence that has all the parts.`,
              audioPrompt: `A complete sentence has all the parts — including a verb. "The dog" is NOT complete. "The dog barked" IS. The verb "barked" completes it!` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Part 3: ADJECTIVES`,
          paragraphs: [
            `ADJECTIVES describe NOUNS! They add COLOR and DETAIL.`,
            `"A dog." (Just a noun.) "A FLUFFY dog." (Adjective + noun — now we see it!) "A FLUFFY, BROWN, FRIENDLY dog!" (Multiple adjectives — even better!) Adjectives turn flat sentences into VIVID ones! Big. Small. Red. Quiet. Brave. Cold. Soft. All adjectives — they describe how nouns LOOK, FEEL, or are!`,
          ],
          image: `/explorer-assets/ela/l17-s4-adjectives.webp`,
          imageCaption: `Adjectives describe nouns. Add color and detail!`,
          vocab: [
            { word: `adjective`, definition: `A word that describes a noun.`,
              audioPrompt: `An adjective is a word that describes a noun. Fluffy. Brown. Loud. Tiny. Brave. They tell us what a noun is LIKE — how it looks, sounds, or feels!` },
            { word: `describe`,  definition: `To tell what something is like.`,
              audioPrompt: `To describe is to tell what something is like. Adjectives describe nouns. "The dog" tells you there's a dog. "The fluffy, brown, gentle dog" tells you SO much more!` },
            { word: `vivid`,     definition: `Bright and clear.`,
              audioPrompt: `Vivid means bright and clear. Adjectives make sentences vivid — easy to picture in your mind. Use them — but not too many. A few strong ones beat ten random ones!` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Part 4: ADVERBS`,
          paragraphs: [
            `ADVERBS describe VERBS! They tell HOW an action is done.`,
            `"She ran." (Just a verb.) "She ran QUICKLY!" (Adverb — tells how she ran!) Adverbs often (not always) end in -LY. Quickly. Slowly. Carefully. Happily. Loudly. Some don't — like FAST, WELL, OFTEN. Adverbs make actions more SPECIFIC. They paint HOW things happen!`,
          ],
          image: `/explorer-assets/ela/l17-s5-adverbs.webp`,
          imageCaption: `Adverbs describe verbs. Tell HOW. Often end in -LY!`,
          vocab: [
            { word: `adverb`, definition: `A word that describes a verb.`,
              audioPrompt: `An adverb is a word that describes a verb. Adverbs tell HOW an action is done. Quickly. Slowly. Carefully. Happily. They make actions more specific!` },
            { word: `how`,    definition: `In what way.`,
              audioPrompt: `How means in what way. Adverbs answer the question "how?" How did she run? Quickly. How did he speak? Softly. When you want to show HOW, reach for an adverb!` },
            { word: `-ly`,    definition: `An ending many adverbs have.`,
              audioPrompt: `Many adverbs end in -LY! Quickly. Slowly. Happily. Carefully. Loudly. The -LY is a big clue: this word is probably an adverb. Not all adverbs end in -LY — but many do!` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `All Four Together`,
          paragraphs: [
            `Here's a sentence with all four parts working TOGETHER!`,
            `"The HAPPY DOG ran QUICKLY through the GREEN PARK!" Let's break it down. DOG, PARK = nouns. RAN = verb. HAPPY, GREEN = adjectives describing the nouns. QUICKLY = adverb describing the verb. All four working together! Nouns name. Verbs move. Adjectives describe. Adverbs show how. Together = MAGIC!`,
          ],
          image: `/explorer-assets/ela/l17-s6-all-together.webp`,
          imageCaption: `All four parts work together. Together = magic!`,
          vocab: [
            { word: `together`,      definition: `Working as one.`,
              audioPrompt: `Together means working as one. All four parts of speech work together. Nouns name what's there. Verbs make it move. Adjectives add color. Adverbs show how. Each one needed!` },
            { word: `break it down`, definition: `To look at something in parts.`,
              audioPrompt: `Break it down means to look at something in parts. You can break down sentences to find each part of speech. Look at each word. Ask — what's its job? That's grammar thinking!` },
            { word: `magic`,         definition: `Something amazing.`,
              audioPrompt: `Magic means something amazing. Words working together is WORD MAGIC! Each word is just letters. But put them in the right order with the right jobs — and they create meaning. Pictures. Feelings. Stories!` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 words. Drag each one into its part of speech — noun, verb, adjective, or adverb!`,
          buckets: [
            { id: `noun`,      label: `🏷️ NOUN (name)`,        color: `#FBBF24` },
            { id: `verb`,      label: `🏃 VERB (action)`,      color: `#34D399` },
            { id: `adjective`, label: `🎨 ADJECTIVE (describe)`, color: `#F87171` },
            { id: `adverb`,    label: `⚡ ADVERB (how)`,        color: `#A78BFA` },
          ],
          items: [
            { id: `l17-g1`, image: `l17-game-1.webp`, label: `dog`,
              matchPhrase: `Yes! "Dog" is a NOUN — it names a thing (an animal)!`,
              correctMatch: `noun` },
            { id: `l17-g2`, image: `l17-game-2.webp`, label: `jump`,
              matchPhrase: `Great! "Jump" is a VERB — it shows action!`,
              correctMatch: `verb` },
            { id: `l17-g3`, image: `l17-game-3.webp`, label: `fluffy`,
              matchPhrase: `Yes! "Fluffy" is an ADJECTIVE — it describes a noun!`,
              correctMatch: `adjective` },
            { id: `l17-g4`, image: `l17-game-4.webp`, label: `quickly`,
              matchPhrase: `Perfect! "Quickly" is an ADVERB — it tells HOW. The -LY ending is the clue!`,
              correctMatch: `adverb` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is a NOUN?`,
              options: [`An action word`, `A word that names a person, place, thing, or idea`, `A describing word`, `A type of cookie`],
              correctIndex: 1,
              explanation: `A noun names a person, place, thing, or idea. Maya, school, dog, love — all nouns!` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `What is a VERB?`,
              options: [`A naming word`, `An ACTION word — shows what someone does`, `A describing word`, `A type of fruit`],
              correctIndex: 1,
              explanation: `A verb is an action word. Run, jump, eat, read — all verbs. They make sentences move!` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `What does an ADJECTIVE do?`,
              options: [`Describes a noun — adds color and detail`, `Names a person`, `Shows action`, `Is a punctuation mark`],
              correctIndex: 0,
              explanation: `Adjectives describe nouns. Fluffy, brown, big, brave — all adjectives. They turn flat sentences into vivid ones!` },
            { id: `l17-q4`, format: `true-false`,
              question: `Adverbs often end in -LY, like "quickly," "slowly," and "happily."`,
              correctAnswer: true,
              explanation: `True! Many adverbs end in -LY. Quickly, slowly, happily, carefully. A useful clue — but not all adverbs end in -LY!` },
            { id: `l17-q5`, format: `fill-blank`,
              question: `In "The fluffy cat ran quickly," the word "quickly" is an ___.`,
              options: [`adverb`, `astronaut`, `apple`, `airport`],
              correctIndex: 0,
              explanation: `Adverb! "Quickly" describes HOW the cat ran. Adverbs describe verbs!` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `In "The HAPPY dog barked LOUDLY," which word is the ADJECTIVE?`,
              options: [`Dog`, `Barked`, `Happy`, `Loudly`],
              correctIndex: 2,
              explanation: `"Happy" is the adjective — it describes the noun "dog." "Loudly" is the adverb describing "barked"!` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Grammar isn't just school stuff. The clearer your grammar, the clearer your IDEAS come across! People who write and speak well get listened to MORE. It's not about being fancy. It's about being UNDERSTOOD!`,
          familyAdventure: `Play the PARTS OF SPEECH game! One person says a NOUN. The next adds a VERB. The next adds an ADJECTIVE. The next adds an ADVERB! Build a silly sentence: "Dog... ran... happy... quickly!" Then put them in order: "The HAPPY dog ran QUICKLY!" Get sillier each time!`,
          creativePrompt: `Pick a noun (a person, place, or thing). Write ONE sentence using that noun PLUS a verb, adjective, and adverb! Underline each part of speech in a different color. Example: "The TINY ant marched PROUDLY through the kitchen!"`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know FOUR parts of speech — nouns, verbs, adjectives, and adverbs! You know each one's job. You can spot them in sentences. You can use them in your own writing. This is the grammar foundation that everything builds on! Quill is so proud!`,
          badge: `grammar-explorer`,
          badgeName: `Grammar Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L17.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L17] Loaded: "Grammar" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
