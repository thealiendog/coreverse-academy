// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L19 — Spelling Strategies and Word Study
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.L.2-3.2 (spelling sub-strand)
// REWRITE v2 (May 2026): Grade 1 accessible, -AT/-ING/-IGHT word family
// 3-bucket identification game (concrete pattern recognition)
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L19 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-19`,
      title:     `Spelling Strategies and Word Study`,
      duration:  12,
      xpReward:  50,
      badge:     `spelling-explorer`,
      badgeName: `Spelling Explorer`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Today's lesson is about SPELLING. Spelling is figuring out the RIGHT LETTERS for each word. Don't worry — there are STRATEGIES that make spelling easier! Patterns. Sounds. Word families. Let's go!`,
          headline: `Spelling Strategies and Word Study`,
          subtitle: `Smart ways to spell words`,
          visual: `/explorer-assets/ela/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Spelling Has Strategies`,
          paragraphs: [
            `Some kids think spelling is about MEMORIZING every single word. It's not!`,
            `Spelling has STRATEGIES — smart tricks for figuring out words! You sound them out. You spot patterns. You compare to words you already know! Real spellers don't memorize every word in the dictionary. They use STRATEGIES to figure out new words. Today, you'll learn those strategies!`,
          ],
          image: `/explorer-assets/ela/l19-s1-spelling-power.webp`,
          imageCaption: `Spelling has strategies. Smart tricks. Not just memorizing!`,
          vocab: [
            { word: `spelling`, definition: `Figuring out the right letters for each word.`,
              audioPrompt: `Spelling is figuring out the right letters for each word. The more you read, the easier spelling gets. It's not about being perfect — it's about getting closer and closer to right!` },
            { word: `strategy`, definition: `A smart way of doing something.`,
              audioPrompt: `A strategy is a smart way of doing something. Spelling has strategies. Sound it out. Look for patterns. Use word families. Remember tricky words. Each strategy is a tool!` },
            { word: `tool`,     definition: `Something that helps you do a job.`,
              audioPrompt: `A tool is something that helps you do a job. Spelling strategies are tools. Each one helps with a different kind of word. The more tools you have, the more words you can spell!` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Strategy 1: Sound It Out`,
          paragraphs: [
            `The first strategy is SOUND IT OUT! Say the word slowly. Listen to each sound.`,
            `"Cat." C... A... T. Three sounds! Write the letter for each one. C-A-T. Done! "Pond." P... O... N... D. Four sounds! P-O-N-D. Sound-it-out is the FOUNDATION of spelling. It works perfectly for short words. Always start by listening to the sounds!`,
          ],
          image: `/explorer-assets/ela/l19-s2-sounds.webp`,
          imageCaption: `Sound it out. Say slowly. Listen to each sound!`,
          vocab: [
            { word: `sound out`, definition: `To say a word slowly and listen.`,
              audioPrompt: `To sound out is to say a word slowly and listen to each sound. The first spelling strategy! For "cat," you hear C-A-T. Three separate sounds. Write a letter for each!` },
            { word: `slowly`,    definition: `Not fast.`,
              audioPrompt: `Slowly means not fast. Say words slowly to hear all the sounds. Fast-spoken words blend together — you miss sounds. Slow them down to hear each piece!` },
            { word: `letter`,    definition: `One symbol for a sound.`,
              audioPrompt: `A letter is one symbol that stands for a sound. When you sound out a word, for each sound, you write a letter. That's how sounding out becomes spelling!` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Strategy 2: Word Families`,
          paragraphs: [
            `WORD FAMILIES are groups of words that share the same ENDING!`,
            `Look at this family: CAT, HAT, BAT, RAT, MAT, SAT! All end in -AT. If you can spell ONE, you can spell ALL — just change the first letter! Another family: -ING. RING, SING, KING, BRING! Another: -IGHT. NIGHT, LIGHT, BRIGHT, FIGHT! Word families are POWERFUL. Spot the family — spell ALL its words!`,
          ],
          image: `/explorer-assets/ela/l19-s3-word-families.webp`,
          imageCaption: `Word families share endings. -at, -ing, -ight families!`,
          vocab: [
            { word: `word family`,     definition: `Words sharing the same ending pattern.`,
              audioPrompt: `A word family is a group of words sharing the same ending pattern. Cat, hat, bat — all in the -AT family. Ring, sing, king — all in the -ING family!` },
            { word: `pattern`,         definition: `A repeating shape or order.`,
              audioPrompt: `A pattern is a repeating shape or order. Spelling has patterns. The -AT pattern. The -ING pattern. Once you spot a pattern, you can use it to spell many words!` },
            { word: `change the front`, definition: `Swap the beginning letters.`,
              audioPrompt: `Change the front means swap the beginning letters. Once you know -AT, you can make CAT, BAT, HAT, MAT! The ending stays the same. The front changes. That's how word families work!` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Strategy 3: Sight Words`,
          paragraphs: [
            `Some words don't sound out easily. Like THE, WAS, SAID, YOU, ARE, HAVE!`,
            `These are called SIGHT WORDS. You learn to recognize them by SIGHT — not by sounding them out. They show up SO often in reading that you just remember them! The. Was. You. Said. By second or third grade, you'll know hundreds of sight words automatically. Like familiar faces!`,
          ],
          image: `/explorer-assets/ela/l19-s4-sight-words.webp`,
          imageCaption: `Sight words = common words you recognize instantly!`,
          vocab: [
            { word: `sight word`, definition: `A common word recognized by SIGHT.`,
              audioPrompt: `A sight word is a common word recognized by sight — instantly, without sounding out. The. Was. Said. You. They show up SO often your brain just knows them!` },
            { word: `recognize`,  definition: `To know something when you see it.`,
              audioPrompt: `To recognize is to know something when you see it. You recognize sight words instantly. You don't need to sound them out. Your brain just knows. That speeds up reading!` },
            { word: `automatic`,  definition: `Happening without thinking.`,
              audioPrompt: `Automatic means happening without thinking. With practice, sight words become automatic. You see "the" — your brain reads "the" before you even think about it!` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Strategy 4: Tricky Words`,
          paragraphs: [
            `Some words are just TRICKY! They have silent letters. Or weird spellings.`,
            `KNEE has a silent K! WRITE has a silent W! ISLAND has a silent S! THROUGH has letters you don't really hear! These tricky words don't follow normal patterns. You just learn them ONE at a time. Use a SPELLING JOURNAL. Practice them. Every speller has to learn tricky words!`,
          ],
          image: `/explorer-assets/ela/l19-s5-tricky-words.webp`,
          imageCaption: `Tricky words. Silent letters. Learn one at a time!`,
          vocab: [
            { word: `tricky word`,   definition: `A word with unusual spelling.`,
              audioPrompt: `A tricky word has unusual spelling that doesn't follow normal rules. Knee with silent K. Write with silent W. English has lots of tricky words — they're just part of learning!` },
            { word: `silent letter`, definition: `A letter you DON'T pronounce.`,
              audioPrompt: `A silent letter is a letter you don't pronounce. KNEE has a silent K — you don't say "kuh-nee." But the K is there in writing!` },
            { word: `practice`,      definition: `Doing something over and over.`,
              audioPrompt: `Practice is doing something over and over. Practice tricky words to learn them. Write them. Use them in sentences. See them in books. Each time, they get more familiar!` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Be a BRAVE Speller`,
          paragraphs: [
            `Here's the most important spelling skill of all — BRAVERY!`,
            `Don't be afraid to TRY a word, even if you're not sure! Use your strategies. Make your best guess. You can always fix it later! Kids who only write words they KNOW have small writing. Kids who TRY new words grow MUCH faster! Mistakes aren't failure — they're how you LEARN. Be a brave speller!`,
          ],
          image: `/explorer-assets/ela/l19-s6-keep-trying.webp`,
          imageCaption: `Brave spellers try. Mistakes are how you learn!`,
          vocab: [
            { word: `brave`,    definition: `Willing to try.`,
              audioPrompt: `Brave means willing to try even when you're not sure. Be a brave speller. Don't only use words you know perfectly. Try new ones. Brave spellers grow fast!` },
            { word: `try`,      definition: `Make an attempt.`,
              audioPrompt: `To try is to make an attempt. Try spelling new words — even hard ones. Use your sounds. Use your patterns. Make your best guess. Trying is how you learn!` },
            { word: `mistakes`, definition: `Errors. How we LEARN.`,
              audioPrompt: `Mistakes are errors — getting something wrong. Big truth: mistakes are how we LEARN. Not failure! Every great speller made thousands of mistakes growing up. Welcome them!` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 words. Drag each one into its WORD FAMILY — -AT, -ING, or -IGHT!`,
          buckets: [
            { id: `at_family`,   label: `🎯 -AT family`,   color: `#FBBF24` },
            { id: `ing_family`,  label: `💍 -ING family`,  color: `#34D399` },
            { id: `ight_family`, label: `🌟 -IGHT family`, color: `#A78BFA` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `bat`,
              matchPhrase: `Yes! "Bat" ends in -AT — same family as cat, hat, mat, rat!`,
              correctMatch: `at_family` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `sing`,
              matchPhrase: `Great! "Sing" ends in -ING — same family as ring, king, bring!`,
              correctMatch: `ing_family` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `light`,
              matchPhrase: `Yes! "Light" ends in -IGHT — same family as night, bright, fight!`,
              correctMatch: `ight_family` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `hat`,
              matchPhrase: `Perfect! "Hat" ends in -AT — another one in the -AT family!`,
              correctMatch: `at_family` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What is SOUND IT OUT?`,
              options: [`Yelling`, `Saying a word slowly and listening to each sound to spell it`, `Singing the word`, `Whispering`],
              correctIndex: 1,
              explanation: `Sounding it out means saying a word slowly and listening to each sound. For each sound, you write a letter. The first spelling strategy!` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `What is a WORD FAMILY?`,
              options: [`A book about a family`, `A group of words sharing the same ENDING pattern`, `Random words mixed together`, `A type of cookie`],
              correctIndex: 1,
              explanation: `A word family is a group of words sharing the same ending. CAT, HAT, BAT — all -AT family. Spot one, spell all!` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `What are SIGHT WORDS?`,
              options: [`Common words you recognize INSTANTLY, without sounding out`, `Words about eyesight`, `Long, fancy words`, `Words that are blurry`],
              correctIndex: 0,
              explanation: `Sight words are common words you recognize instantly — the, was, said, you. They show up so often you just know them by sight!` },
            { id: `l19-q4`, format: `true-false`,
              question: `Mistakes are part of learning to spell — every great speller made thousands growing up.`,
              correctAnswer: true,
              explanation: `True! Mistakes aren't failure — they're how you learn. Be brave. Try new words. Fix as you go!` },
            { id: `l19-q5`, format: `fill-blank`,
              question: `Words with silent letters or unusual spellings are called ___ words.`,
              options: [`tricky`, `simple`, `boring`, `huge`],
              correctIndex: 0,
              explanation: `Tricky! Tricky words don't follow normal rules. KNEE with silent K. WRITE with silent W. Learn them one at a time!` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `What should you do if you're unsure how to spell a word?`,
              options: [`Give up`, `Try your best using strategies — sound it out, look for patterns, brave guess`, `Cry`, `Quit reading`],
              correctIndex: 1,
              explanation: `Try your best using strategies. Sound it out. Look for patterns. Use word families. Be brave. Better to try than not try at all!` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Spell-checkers exist on phones and computers. Adults use them. They help! BUT — they don't catch everything. Sometimes "their" gets used instead of "there." So even with technology, knowing how to spell matters. Strong spellers are clear communicators — always!`,
          familyAdventure: `Make a SPELLING JOURNAL together! Get a small notebook. When anyone in the family finds a tricky word — write it in the journal. Practice it. Use it in a sentence. Add new tricky words every week. Over months, build a collection!`,
          creativePrompt: `Pick FIVE words you find tricky. Practice them: 1) Write the word three times. 2) Use each in a SENTENCE. 3) Read your sentences out loud! Come back tomorrow and try spelling them from memory. See if they're easier!`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now have SPELLING STRATEGIES — sounding out, word families, sight words, tricky words! You know mistakes are part of learning. You know to be a brave speller. The more you read and write, the more your spelling grows! Quill is so proud!`,
          badge: `spelling-explorer`,
          badgeName: `Spelling Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L19.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L19] Loaded: "Spelling" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
