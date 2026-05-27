// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L17 — Vocabulary: Greek and Latin Roots
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS L.4.4 / L.5.4 — Use Greek and Latin affixes and roots
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what root words are, common prefixes, common suffixes,
//        decoding unfamiliar words using root knowledge
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-17`,
      title: `Vocabulary: Greek and Latin Roots`,
      duration: 18,
      xpReward: 75,
      badge: `word-decoder`,
      badgeName: `Word Decoder`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. Here's a magic trick that isn't magic. If you learn maybe 30 Greek and Latin roots, you can guess the meaning of HUNDREDS of English words you've never seen before. "Bio" means life. "Logy" means study. "Biology" means the study of life. "Geo" means earth. "Geology" means the study of earth. Same trick, different word. Today you'll learn the most useful roots, prefixes, and suffixes, and start decoding unfamiliar words like a pro. Let's go.`,
          headline: `Greek and Latin Roots`,
          subtitle: `Decode hundreds of English words by learning a few small parts`,
          visual: `/ue-assets/ela/l17-welcome.webp`,
        },

        // ── SECTION 1 — WHAT IS A ROOT WORD ───────────────────────────────────
        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What a Root Word Is`,
          paragraphs: [
            `A ROOT is the core part of a word that carries its main meaning. Many English roots come from ancient Greek or Latin. "Aud" means hear. So "audible" (can be heard), "audio" (sound), "audience" (people listening), and "auditorium" (place for listening) all share the same root. Once you know that "aud" means hear, you can guess what dozens of words mean even if you've never seen them before.`,
            `That's the trick. English isn't a random pile of words. It's a system where the same root parts get reused in different combinations. Doctors, scientists, lawyers, and engineers all use words built from these roots. Learning 30 of the most common roots unlocks hundreds of words across every subject. It's one of the highest-leverage vocabulary moves you can make.`,
          ],
          image: `/ue-assets/ela/l17-s1-root-words.webp`,
          imageCaption: `A root is the core meaning. Learn it once, recognize it everywhere.`,
          vocab: [
            { word: `root`,
              definition: `The core part of a word that carries its main meaning. Many English roots come from Greek or Latin.`,
              audioPrompt: `A root is the core part of a word, {name}. It carries the main meaning. Many English roots come from ancient Greek or Latin. "Bio" means life. "Geo" means earth. "Aqua" means water. Once you know a root, you can guess the meaning of any word that contains it. Roots are the building blocks of half of all English vocabulary.` },
            { word: `etymology`,
              definition: `The history and origin of a word — where it came from and how its meaning evolved over time.`,
              audioPrompt: `Etymology is the study of where words come from, {name}. Knowing that "bio" came from Greek and means life, or that "aqua" came from Latin and means water, is etymology. Understanding a word's origin helps you remember its meaning and recognize related words. Dictionaries often include etymology in brackets after a word's definition.` },
          ],
        },

        // ── SECTION 2 — PREFIXES ──────────────────────────────────────────────
        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Prefixes: The Beginning Changes the Meaning`,
          paragraphs: [
            `A PREFIX is a piece added to the BEGINNING of a word that changes the meaning. "UN-" means not (unhappy = not happy). "RE-" means again (rewrite = write again). "PRE-" means before (preview = view before). "DIS-" means apart or away (disappear = stop appearing). Prefixes are small but mighty. They can flip a word's meaning completely.`,
            `Once you know the common prefixes, you can crack words like "unconditional" (not + conditional = without conditions) or "reload" (load + again) just by breaking them apart. Prefixes don't change the root's meaning. They modify it. The root carries the heart. The prefix tells you what's being done to it.`,
          ],
          image: `/ue-assets/ela/l17-s2-prefixes.webp`,
          imageCaption: `Un-, re-, pre-, dis-. Add them to the front, change the meaning.`,
          vocab: [
            { word: `prefix`,
              definition: `A small piece added to the BEGINNING of a word that changes the word's meaning. Examples: un-, re-, pre-, dis-.`,
              audioPrompt: `A prefix is a piece added to the start of a word that changes its meaning, {name}. "Un-" means not. "Re-" means again. "Pre-" means before. "Dis-" means apart or away. Add "un" to "happy" and you get "unhappy." Add "re" to "build" and you get "rebuild." Prefixes are small but they flip meaning fast.` },
            { word: `affix`,
              definition: `A catch-all term for any piece added to a root word to change its meaning — either a prefix (beginning) or a suffix (end).`,
              audioPrompt: `An affix is any piece attached to a root word to change its meaning, {name}. Prefixes go at the beginning. Suffixes go at the end. Both are affixes. "Un-" in "unhappy" is a prefix affix. "-ness" in "kindness" is a suffix affix. Knowing that prefixes and suffixes are both called affixes helps you see the full system of how English builds words from parts.` },
          ],
        },

        // ── SECTION 3 — SUFFIXES ──────────────────────────────────────────────
        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Suffixes: The Ending Changes the Job`,
          paragraphs: [
            `A SUFFIX is a piece added to the END of a word. Suffixes don't just change meaning. They often change the word's JOB (its part of speech). Add "-ER" to "teach" and you get "teacher" (the person who does it). Add "-LY" to "quick" and you get "quickly" (an adverb describing how). Add "-NESS" to "kind" and you get "kindness" (the quality of being kind). The suffix tells you how the word is being used in a sentence.`,
            `Some common suffixes worth knowing: "-OLOGY" means the study of (biology, geology, psychology). "-TION" turns a verb into a noun (act → action, react → reaction). "-FUL" means full of (helpful, careful). Suffixes are the labels that tell readers WHAT the word does, not just what it means.`,
          ],
          image: `/ue-assets/ela/l17-s3-suffixes.webp`,
          imageCaption: `Suffixes change the job: noun, verb, adjective, adverb.`,
          vocab: [
            { word: `suffix`,
              definition: `A piece added to the END of a word that changes its meaning or its part of speech. Examples: -er, -ly, -ness, -ology, -tion.`,
              audioPrompt: `A suffix is a piece added to the end of a word, {name}. It changes meaning AND often the word's job. "-Er" makes a person ("teacher"). "-Ly" makes an adverb ("quickly"). "-Ness" makes a quality ("kindness"). "-Ology" means the study of something ("biology"). Suffixes are the labels that tell you what role the word plays in a sentence.` },
            { word: `part of speech`,
              definition: `The grammatical category a word belongs to — noun, verb, adjective, adverb, etc. Suffixes often change a word's part of speech.`,
              audioPrompt: `Part of speech is the category a word belongs to, {name}. Nouns name things. Verbs show action. Adjectives describe. Adverbs modify verbs. Suffixes often change the part of speech. Add "-ness" to "kind" (adjective) and you get "kindness" (noun). Add "-ly" to "quick" (adjective) and you get "quickly" (adverb). Recognizing how suffixes shift parts of speech helps you use words correctly in sentences.` },
          ],
        },

        // ── SECTION 4 — DECODING NEW WORDS ────────────────────────────────────
        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Decoding Words You've Never Seen`,
          paragraphs: [
            `Here's the real payoff. With a few roots, prefixes, and suffixes, you can decode unfamiliar words on the fly. "AUTOBIOGRAPHY" looks scary. Break it down: AUTO (self) + BIO (life) + GRAPHY (writing). "Self + life + writing." It's a story someone writes about their own life. You just decoded it without a dictionary.`,
            `Real readers do this constantly. They hit a word they've never seen, break it into pieces, and figure out what it probably means. Strong vocabulary isn't memorizing thousands of words. It's recognizing patterns and decoding new ones from known parts. This single skill makes reading way less intimidating, especially for science, history, and academic texts.`,
          ],
          image: `/ue-assets/ela/l17-s4-decoding.webp`,
          imageCaption: `Break the word apart. Identify the pieces. Add the meanings.`,
          vocab: [
            { word: `decode`,
              definition: `To figure out the meaning of an unfamiliar word by breaking it into its root, prefix, and suffix parts.`,
              audioPrompt: `To decode a word is to break it into its parts and figure out the meaning, {name}. "Autobiography" looks hard, but auto means self, bio means life, graphy means writing. Self plus life plus writing equals a story about your own life. You just decoded a long word in seconds without a dictionary. Strong readers do this constantly. It's a skill, not a talent.` },
            { word: `word analysis`,
              definition: `The process of breaking a word into its parts (root, prefix, suffix) to understand its meaning and how it is built.`,
              audioPrompt: `Word analysis is the process of breaking a word into its parts to understand it, {name}. You look at the root, the prefix, and the suffix. Each part contributes meaning. When you do word analysis on "autobiography," you find auto (self), bio (life), and graphy (writing). Put them together and you know the meaning. This is the skill that makes strong readers fearless with long or unfamiliar words.` },
          ],
        },

        // ── INTERACTIVE GAME — Word Decoding Investigation ────────────────────
        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Decoder time, {name}. Four unfamiliar words. For each one, break it into pieces using what you know about roots, prefixes, and suffixes. Then decide what the word MOST LIKELY means: HEAR-related, EARTH-related, or LIFE-related?\n\nQuick reference: aud = hear, geo = earth, bio = life, auto = self, graphy = writing.\n\nOne is trickier than it looks.`,
          options: [
            { id: `hear-related`,  label: `Hear-related`,   color: `#A78BFA`, description: `Contains "aud" (hear). Word probably has to do with hearing or sound.` },
            { id: `earth-related`, label: `Earth-related`,  color: `#FBBF24`, description: `Contains "geo" (earth). Word probably has to do with the planet, land, or rocks.` },
            { id: `life-related`,  label: `Life-related`,   color: `#34D399`, description: `Contains "bio" (life). Word probably has to do with living things.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Word #1: "Geology"`,
              clues: [
                { text: `Breaks into: GEO + LOGY.` },
                { text: `Geo = earth. Logy = the study of.` },
                { text: `Earth + study of = ?` },
              ],
              correctAnswer: `earth-related`,
              realWorldExample: `Geology is the science of earth and rocks.`,
              explanation: `Earth (geo) plus study of (logy) equals the study of the earth. Geology is exactly that: the science of rocks, the planet, and how earth works. Decoded cleanly.`,
            },
            {
              id: `case-2`,
              caseTitle: `Word #2: "Audible"`,
              clues: [
                { text: `Breaks into: AUD + IBLE.` },
                { text: `Aud = hear. -Ible means "able to be."` },
                { text: `Hear + able to be = ?` },
              ],
              correctAnswer: `hear-related`,
              realWorldExample: `If something is audible, you can hear it.`,
              explanation: `Hear (aud) plus able to be (-ible) equals "able to be heard." Audible is anything you can hear. Same root as audience, auditorium, audio, and audition.`,
            },
            {
              id: `case-3`,
              caseTitle: `Word #3: "Biography"`,
              clues: [
                { text: `Breaks into: BIO + GRAPHY.` },
                { text: `Bio = life. Graphy = writing.` },
                { text: `Life + writing = ?` },
              ],
              correctAnswer: `life-related`,
              realWorldExample: `A biography is the written story of a person's life.`,
              explanation: `Life (bio) plus writing (graphy) equals writing about a life. A biography is a book about someone's life. An autobiography (auto = self) is a biography someone writes about themselves.`,
            },
            {
              id: `case-4`,
              caseTitle: `Word #4: "Geographic" — The Tricky One`,
              clues: [
                { text: `Breaks into: GEO + GRAPHIC.` },
                { text: `Geo = earth. Graphic relates to "writing" or "describing."` },
                { text: `Earth + describing = ?` },
              ],
              correctAnswer: `earth-related`,
              realWorldExample: `Geographic relates to the study of earth and its features.`,
              explanation: `Looks like it could be about writing because of "graphic," but the dominant root is GEO (earth). Geographic is anything related to earth's surface, locations, and features. The lesson: when a word has multiple roots, the FIRST root usually carries the dominant meaning. Geo is in the front, so this word is earth-related, not writing-related.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is a ROOT word?`,
              options: [
                `The shortest word in a sentence`,
                `The core part of a word that carries its main meaning`,
                `Only the first letter`,
                `A word that's hard to spell`,
              ],
              correctIndex: 1,
              explanation: `Roots are the building blocks. They carry the main meaning. Many English roots come from ancient Greek or Latin and show up in dozens of related words.` },

            { id: `l17-q2`, format: `multiple-choice`,
              question: `What does the prefix "UN-" usually mean?`,
              options: [
                `Many`,
                `Not (unhappy = not happy)`,
                `Before`,
                `After`,
              ],
              correctIndex: 1,
              explanation: `"Un-" means not. Unhappy = not happy. Unfair = not fair. Unfinished = not finished. One of the most common prefixes in English.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `If "BIO" means life and "GRAPHY" means writing, what's a BIOGRAPHY?`,
              options: [
                `A book about plants`,
                `Writing about a life — the story of someone's life`,
                `A photo album`,
                `A graph or chart`,
              ],
              correctIndex: 1,
              explanation: `Life (bio) + writing (graphy) = writing about a life. A biography is the written story of someone's life. Same root in autobiography, biology, biome, and biography.` },

            { id: `l17-q4`, format: `multiple-choice`,
              question: `What does the suffix "-OLOGY" mean?`,
              options: [
                `The study of something`,
                `An old version`,
                `A small thing`,
                `Past tense`,
              ],
              correctIndex: 0,
              explanation: `"-Ology" means the study of. Biology = study of life. Geology = study of the earth. Psychology = study of the mind. One of the most useful suffixes to memorize.` },

            { id: `l17-q5`, format: `true-false`,
              question: `True or false: You need to memorize thousands of words to have a strong vocabulary.`,
              correctAnswer: false,
              explanation: `False. The smartest move is learning patterns. About 30 common roots, prefixes, and suffixes unlock hundreds of English words. That's a much better return on time than rote memorization.` },

            { id: `l17-q6`, format: `multiple-choice`,
              question: `If "AQUA" means water, which word most likely involves water?`,
              options: [
                `Aquarium`,
                `Anatomy`,
                `Autumn`,
                `Average`,
              ],
              correctIndex: 0,
              explanation: `Aquarium contains "aqua" (water). An aquarium is a tank of water for fish. Same root in aquatic, aqueduct, and aquamarine.` },

            { id: `l17-q7`, format: `multiple-choice`,
              question: `Break down "AUTOBIOGRAPHY." What does it mean?`,
              options: [
                `A car book`,
                `Self + life + writing = a story someone writes about their own life`,
                `A short biography`,
                `An automatic writing tool`,
              ],
              correctIndex: 1,
              explanation: `Auto = self. Bio = life. Graphy = writing. Self-life-writing = a story you write about your own life. Decoding by parts works even on long words.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `Why is learning Greek and Latin roots one of the best vocabulary moves?`,
              options: [
                `It impresses teachers`,
                `A small number of roots unlocks hundreds of words across science, history, law, and academic subjects`,
                `It's required for tests`,
                `Roots make spelling easier`,
              ],
              correctIndex: 1,
              explanation: `Roots are everywhere. Learning 30 of the most common ones lets you decode hundreds of words you've never seen before. It's the highest-leverage vocabulary skill you can build.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a long word you've struggled with that you could now break down into roots, prefixes, or suffixes?` },
            { id: `r2`, text: `Which root from today (aud, geo, bio, aqua, etc.) feels most useful for words you actually see in real life?` },
            { id: `r3`, text: `Why do you think doctors and scientists use so many words built from Greek and Latin roots?` },
            { id: `r4`, text: `If you had to teach someone one root that would unlock the most words, which would you teach and why?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Greek and Latin roots aren't a school trick. They're the actual structure of most scientific, medical, and legal vocabulary. When you go to the doctor and hear "cardiology" or "dermatology," those are root words at work (cardio = heart, derma = skin). When you read a law article and see "jurisdiction" (jur = law, dic = speak), the same roots are doing the work. The people who can decode unfamiliar words on the fly have a real advantage in school AND in every professional field that uses technical vocabulary.`,
          familyAdventure: `Family Word Detective. Each person picks one long word they've seen in a textbook, news article, or sign. As a group, break it down into its parts. Identify any roots, prefixes, or suffixes. Guess the meaning before looking it up. Then check. You'll be surprised how often the decoding gets close to the real meaning.`,
          creativePrompt: {
            intro: `Pick five words from any subject (science, social studies, math, anywhere) that you can decode using roots, prefixes, or suffixes.`,
            floor: `Write at least 5 sentences. For each of five words, break it into parts and explain the meaning each part contributes.`,
            stretch: `Write 8 to 10 sentences. Pick five words, decode each one fully, AND use each one correctly in a sentence of your own.`,
            open: `Write as much as you want. Build a personal root-and-prefix glossary with 10+ words you've decoded, organized by which root they share.`,
            frames: [
              `My first word is ___.`,
              `It breaks into ___ + ___ + ___.`,
              `Each part means ___.`,
              `So the whole word means ___.`,
              `A sentence using it: ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now break unfamiliar words into roots, prefixes, and suffixes, decode their meanings without a dictionary, and recognize how the same root parts show up across science, history, and everyday English. Next lesson: a different kind of vocabulary. ACADEMIC vocabulary, the words that show up in every subject from math to social studies to science. See you there. — Quill.`,
          badge: `word-decoder`,
          badgeName: `Word Decoder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L17;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L17.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L17 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
