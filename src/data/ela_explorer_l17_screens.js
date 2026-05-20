// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L17 — Grammar: Nouns, Verbs, Adjectives, and Adverbs
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.L.2-3.1
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
          guideText: `Hello, {name}. Today's lesson is about GRAMMAR — the way words work. Every word has a JOB in a sentence. Some name things. Some show action. Some describe. Some tell HOW. Today, you'll meet the four most important kinds of words — nouns, verbs, adjectives, and adverbs. Knowing these makes you a SHARPER writer and a SMARTER reader. Let's go.`,
          headline: `Grammar: Nouns, Verbs, Adjectives, and Adverbs`,
          subtitle: `The four most important kinds of words — and what each one does`,
          visual: `/explorer-assets/ela/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Words Have Jobs`,
          paragraphs: [
            `Every word in a sentence has a JOB.`,
            `Some words name people, places, or things. Some words show action. Some describe what things look like. Some tell HOW something is done. These different jobs are called PARTS OF SPEECH. Just like a team has different positions, sentences have different word jobs. Today, you'll meet the four most important ones.`,
          ],
          image: `/explorer-assets/ela/l17-s1-word-jobs.webp`,
          imageCaption: `Every word has a job. Different jobs for different words. Parts of speech.`,
          vocab: [
            { word: `grammar`,        definition: `The rules of how words work together in sentences.`,
              audioPrompt: `Grammar, {name}, is the rules of how words work together in sentences. Every language has grammar. English grammar tells us word order, which words do which jobs, and how to put words together so they make sense. Grammar isn't about being fancy. It's about being CLEAR.` },
            { word: `parts of speech`, definition: `The different jobs words can do. Noun, verb, adjective, adverb are parts of speech.`,
              audioPrompt: `Parts of speech, {name}, are the different jobs words can do in a sentence. Some name things. Some show action. Some describe. Knowing the parts of speech is like knowing the positions on a sports team. Each one has its own role.` },
            { word: `job`,            definition: `What something does. Every word has a JOB in a sentence.`,
              audioPrompt: `A job, {name}, is what something does. Every word has a job in a sentence. The word 'dog' has the job of NAMING the animal. The word 'ran' has the job of showing ACTION. Knowing each word's job helps you understand sentences — and write them better.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `NOUNS: People, Places, Things`,
          paragraphs: [
            `The first part of speech is NOUNS. A noun names a PERSON, PLACE, or THING.`,
            `PERSON: Maya, doctor, brother. PLACE: school, beach, kitchen. THING: book, dog, rainbow. Even IDEAS can be nouns — like love, freedom, friendship. If you can put "the" or "a" in front of it, it's probably a noun. THE dog. A house. THE feeling. Nouns are everywhere. They're the building blocks of most sentences.`,
          ],
          image: `/explorer-assets/ela/l17-s2-nouns.webp`,
          imageCaption: `Nouns name PERSON, PLACE, or THING. Maya, school, book, dog. The building blocks of sentences.`,
          vocab: [
            { word: `noun`,           definition: `A word that names a person, place, thing, or idea.`,
              audioPrompt: `A noun, {name}, is a word that names a person, place, thing, or idea. Maya, school, book, love — all nouns. Nouns are usually the FIRST kind of word kids learn to recognize. Most sentences have at least one noun.` },
            { word: `person`,         definition: `A human. People's names and roles are nouns.`,
              audioPrompt: `A person, {name}, is a human. People's names — Maya, Sam, Quill — are nouns. People's roles — doctor, teacher, mom, friend — are also nouns. Anything that names a human counts as a noun.` },
            { word: `thing`,          definition: `An object or idea. Toys, books, dreams — all things, all nouns.`,
              audioPrompt: `A thing, {name}, is an object or idea. Toys, books, dreams, ideas, feelings — all things. All nouns. Some things you can touch (toys, books). Some you can't (dreams, ideas, love). Both kinds are nouns. They name something — concrete or abstract.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `VERBS: The Action Words`,
          paragraphs: [
            `VERBS are ACTION words. They tell what someone DOES.`,
            `Run. Jump. Read. Eat. Sing. Cry. Sleep. Build. Climb. All verbs. Verbs are what give sentences MOVEMENT. Without a verb, nothing happens. "The dog." (Not a complete sentence — no verb.) "The dog BARKED." (Now it's a sentence — barked is the verb.) Verbs make sentences MOVE.`,
          ],
          image: `/explorer-assets/ela/l17-s3-verbs.webp`,
          imageCaption: `Verbs = action words. Run. Jump. Read. Eat. What someone DOES. The engine of every sentence.`,
          vocab: [
            { word: `verb`,           definition: `A word that shows action or being. The engine of every sentence.`,
              audioPrompt: `A verb, {name}, is a word that shows action or being. Run, jump, eat, read — all verbs. Verbs make sentences MOVE. Without a verb, there's no real sentence — just a fragment. Every complete sentence needs at least one verb. Verbs are the engine of every sentence.` },
            { word: `action`,         definition: `Something happening. Most verbs show ACTION.`,
              audioPrompt: `Action, {name}, means something happening. Most verbs show action. Running is action. Reading is action. Even quiet things like thinking and dreaming are action — they're things happening inside your head. Verbs show what's HAPPENING.` },
            { word: `complete sentence`, definition: `A sentence that has all the parts — including a verb.`,
              audioPrompt: `A complete sentence, {name}, has all the parts — including a verb. 'The dog' is NOT a complete sentence. 'The dog barked' IS. The verb 'barked' completes it. Every complete sentence needs at least one verb. Without one, it's a fragment, not a sentence.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `ADJECTIVES: Describing Words`,
          paragraphs: [
            `ADJECTIVES describe NOUNS. They add COLOR and DETAIL.`,
            `"A dog." (Just a noun.) "A FLUFFY dog." (Adjective + noun — now we see it.) "A FLUFFY, BROWN, FRIENDLY dog." (Multiple adjectives — now we see it even better.) Adjectives turn flat sentences into VIVID ones. Big. Small. Red. Quiet. Brave. Cold. Soft. All adjectives. They describe how nouns LOOK, FEEL, SOUND, or are.`,
          ],
          image: `/explorer-assets/ela/l17-s4-adjectives.webp`,
          imageCaption: `Adjectives describe nouns. Add color and detail. Big, small, red, soft, brave. Make sentences vivid.`,
          vocab: [
            { word: `adjective`,      definition: `A word that describes a noun. Adds color and detail.`,
              audioPrompt: `An adjective, {name}, is a word that describes a noun. Fluffy. Brown. Loud. Tiny. Brave. All adjectives. They tell us what a noun is LIKE — how it looks, sounds, feels, or is. Without adjectives, sentences would be boring. With them, sentences come alive.` },
            { word: `describe`,       definition: `To tell what something is like. Adjectives DESCRIBE nouns.`,
              audioPrompt: `To describe, {name}, is to tell what something is like. Adjectives describe nouns. 'The dog' tells you there's a dog. 'The fluffy, brown, gentle dog' tells you SO much more. Description is what brings writing to life. Adjectives are description's main tools.` },
            { word: `vivid`,          definition: `Bright and clear. Adjectives make sentences VIVID — easy to picture.`,
              audioPrompt: `Vivid, {name}, means bright and clear. Adjectives make sentences vivid — easy to picture in your mind. The more vivid your writing, the better your reader can SEE what you mean. Use adjectives — but not too many. A few well-chosen ones are stronger than ten random ones.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `ADVERBS: The HOW Words`,
          paragraphs: [
            `ADVERBS describe VERBS. They tell HOW an action is done.`,
            `"She ran." (Just a verb.) "She ran QUICKLY." (Adverb — tells how she ran.) "She ran quickly, GRACEFULLY, and CONFIDENTLY." Adverbs often (not always) end in -LY. Quickly. Slowly. Carefully. Happily. Loudly. Some don't — like FAST, WELL, OFTEN. Adverbs make actions more SPECIFIC. They paint how things happen.`,
          ],
          image: `/explorer-assets/ela/l17-s5-adverbs.webp`,
          imageCaption: `Adverbs describe verbs. Tell HOW an action is done. Often end in -LY. Quickly, slowly, gracefully.`,
          vocab: [
            { word: `adverb`,         definition: `A word that describes a verb. Tells HOW the action is done.`,
              audioPrompt: `An adverb, {name}, is a word that describes a verb. Adverbs tell HOW an action is done. Quickly. Slowly. Carefully. Happily. They add detail to actions. 'She walked' tells you there was walking. 'She walked slowly' tells you HOW. Adverbs make actions more specific.` },
            { word: `how`,            definition: `In what way. Adverbs answer the question HOW something is done.`,
              audioPrompt: `How, {name}, means in what way. Adverbs answer the question 'how?' How did she run? Quickly. How did he speak? Softly. How did they laugh? Loudly. Whenever you want to show HOW something was done, reach for an adverb.` },
            { word: `-ly`,            definition: `An ending many adverbs have. Quickly, slowly, happily — all end in -LY.`,
              audioPrompt: `-LY, {name}, is the ending many adverbs have. Quickly. Slowly. Happily. Carefully. Loudly. The -LY at the end is a big clue: this word is probably an adverb. Not every adverb ends in -LY — some don't, like 'fast' or 'well.' But many do. It's a helpful pattern.` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `All Four Together`,
          paragraphs: [
            `Here's a sentence with all four parts of speech working TOGETHER.`,
            `"The HAPPY DOG ran QUICKLY through the GREEN PARK." Let's break it down. DOG, PARK = nouns. RAN = verb. HAPPY, GREEN = adjectives describing the nouns. QUICKLY = adverb describing the verb. All four working together. That's how sentences come alive. Nouns name. Verbs move. Adjectives describe. Adverbs show how. Together = magic.`,
          ],
          image: `/explorer-assets/ela/l17-s6-all-together.webp`,
          imageCaption: `All four parts work together. Nouns name. Verbs move. Adjectives describe. Adverbs show how. Together = magic.`,
          vocab: [
            { word: `together`,       definition: `Working as one. All four parts of speech work TOGETHER in sentences.`,
              audioPrompt: `Together, {name}, means working as one. All four parts of speech work together in sentences. Nouns name what's there. Verbs make it move. Adjectives add color. Adverbs show how. Each one is necessary. Each one has a job. Together they create meaning.` },
            { word: `break it down`,  definition: `To look at something in parts. You can BREAK DOWN sentences to find each part of speech.`,
              audioPrompt: `Break it down, {name}, means to look at something in parts. You can break down sentences to find each part of speech. Look at each word. Ask — what's its job? Is it a noun? A verb? An adjective? An adverb? Breaking it down helps you understand how sentences work.` },
            { word: `magic`,          definition: `Something amazing. Words working together is a kind of MAGIC.`,
              audioPrompt: `Magic, {name}, means something amazing. Words working together is a kind of magic. Each word is just a few letters. But put them in the right order, with the right jobs — and they create meaning. They make pictures. They make feelings. They make stories. That's word magic.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l17-g1`, image: `l17-game-1.webp`, label: `Verbs are ACTION words like run, jump, read, and eat.`,
              matchPhrase: `Yes! Verbs show what someone DOES. They're the engine of every sentence. Without a verb, you don't have a complete sentence.`,
              correctMatch: `fact` },
            { id: `l17-g2`, image: `l17-game-2.webp`, label: `Adjectives DESCRIBE nouns — adding color, size, feeling.`,
              matchPhrase: `True! Adjectives like fluffy, brown, brave, cold all describe nouns. They turn plain sentences into vivid ones. Use them to paint pictures.`,
              correctMatch: `fact` },
            { id: `l17-g3`, image: `l17-game-3.webp`, label: `Every word in every sentence does the exact same job.`,
              matchPhrase: `Not at all! Different words do different jobs. Nouns name. Verbs move. Adjectives describe. Adverbs show how. They each have their own role.`,
              correctMatch: `myth` },
            { id: `l17-g4`, image: `l17-game-4.webp`, label: `The word "red" is actually a person walking around named Red, not a describing word.`,
              matchPhrase: `Definitely not! "Red" is usually an ADJECTIVE — a describing word. A red apple. A red shirt. Only sometimes is "Red" a nickname for a person, and then it would be a noun.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is a NOUN?`,
              options: [`An action word`, `A word that names a person, place, thing, or idea`, `A word that describes`, `A type of cookie`],
              correctIndex: 1,
              explanation: `A noun names a person, place, thing, or idea. Maya, school, dog, love — all nouns. The building blocks of most sentences.` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `What is a VERB?`,
              options: [`A naming word`, `An ACTION word — shows what someone does`, `A describing word`, `A type of fruit`],
              correctIndex: 1,
              explanation: `A verb is an action word. Run, jump, eat, read, sing — all verbs. They make sentences move. Every complete sentence needs at least one.` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `What does an ADJECTIVE do?`,
              options: [`Describes a noun — adds color and detail`, `Names a person`, `Shows action`, `Is a punctuation mark`],
              correctIndex: 0,
              explanation: `Adjectives describe nouns. Fluffy, brown, big, brave — all adjectives. They turn flat sentences into vivid ones.` },
            { id: `l17-q4`, format: `true-false`,
              question: `Adverbs often end in -LY, like "quickly," "slowly," and "happily."`,
              correctAnswer: true,
              explanation: `True! Many adverbs end in -LY. Quickly, slowly, happily, carefully. Not all adverbs end in -LY (fast, well, often don't), but many do — and it's a useful clue.` },
            { id: `l17-q5`, format: `fill-blank`,
              question: `In the sentence "The fluffy cat ran quickly," the word "quickly" is an ___.`,
              options: [`adverb`, `astronaut`, `apple`, `airport`],
              correctIndex: 0,
              explanation: `Adverb! "Quickly" describes HOW the cat ran. Adverbs describe verbs and tell us how an action is done.` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `In the sentence "The HAPPY dog barked LOUDLY," which word is the ADJECTIVE?`,
              options: [`Dog`, `Barked`, `Happy`, `Loudly`],
              correctIndex: 2,
              explanation: `"Happy" is the adjective — it describes the noun "dog." "Loudly" is the adverb describing "barked." Different jobs, different words.` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Grammar isn't just school stuff. The clearer your grammar, the clearer your IDEAS come across. People who write and speak well — with good grammar — get listened to more. Their thoughts spread further. It's not about being fancy. It's about being UNDERSTOOD. Grammar is the difference between someone GETTING what you mean and someone MISSING what you mean. That's why it matters.`,
          familyAdventure: `Play the PARTS OF SPEECH game. One person says a NOUN. The next person adds a VERB. The next adds an ADJECTIVE. The next adds an ADVERB. Build a silly sentence together. "Dog... ran... happy... quickly." Then put them in order: "The HAPPY dog ran QUICKLY." Take turns. Get sillier each time. Notice how each word does its job.`,
          creativePrompt: `Pick a noun (a person, place, or thing). On paper, write ONE sentence using that noun PLUS a verb PLUS an adjective PLUS an adverb. Underline each part of speech in a different color. Notice how the four work together. Example: "The TINY ant marched PROUDLY through the kitchen." (Adjective tiny + noun ant + verb marched + adverb proudly + noun kitchen.)`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know four parts of speech — nouns, verbs, adjectives, and adverbs. You know each one's job. You know how to spot them in sentences. You know how to use them in your own writing. This is the grammar foundation that everything else builds on. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L17] Loaded: "Grammar: Nouns, Verbs, Adjectives, and Adverbs" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
