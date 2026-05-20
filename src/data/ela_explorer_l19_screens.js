// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L19 — Spelling Strategies and Word Study
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.L.2-3.2 (spelling sub-strand)
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
          guideText: `Hello, {name}. Today's lesson is about SPELLING. Spelling is figuring out the RIGHT LETTERS for each word. Don't worry — there are STRATEGIES that make spelling easier. Patterns to spot. Sounds to use. Word families to find. Today, I'll share the smart ways skilled spellers tackle words — even ones they've never seen before. Let's go.`,
          headline: `Spelling Strategies and Word Study`,
          subtitle: `Smart ways to spell words — even ones you've never seen before`,
          visual: `/explorer-assets/ela/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Spelling Has Strategies`,
          paragraphs: [
            `Some kids think spelling is about MEMORIZING every single word. It's not.`,
            `Spelling has STRATEGIES — smart tricks for figuring out words. You sound them out. You spot patterns. You compare to words you already know. Real spellers don't memorize every word in the dictionary. They use strategies to FIGURE OUT new words. Today, you'll learn those strategies. Spelling becomes MUCH easier when you have tools.`,
          ],
          image: `/explorer-assets/ela/l19-s1-spelling-power.webp`,
          imageCaption: `Spelling has strategies. Smart tricks. Patterns. Not just memorization.`,
          vocab: [
            { word: `spelling`,       definition: `Figuring out the right letters for each word.`,
              audioPrompt: `Spelling, {name}, is figuring out the right letters for each word. It's a skill that grows as you read more. The more you see words, the easier they are to spell. Spelling isn't about being perfect — it's about using smart strategies to get closer and closer to right.` },
            { word: `strategy`,       definition: `A smart way of doing something. Spelling has STRATEGIES.`,
              audioPrompt: `A strategy, {name}, is a smart way of doing something. Spelling has strategies. Sound it out. Look for patterns. Use word families. Remember tricky words. Each strategy is a tool. The more tools you have, the more words you can spell. Strategies make hard things easier.` },
            { word: `tool`,           definition: `Something that helps you do a job. Spelling strategies are TOOLS.`,
              audioPrompt: `A tool, {name}, is something that helps you do a job. Spelling strategies are tools. Each one helps with a different kind of word. Phonics (sounding out) is a tool. Word families are a tool.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Strategy 1: Sound It Out`,
          paragraphs: [
            `The first strategy is SOUND IT OUT. Say the word slowly. Listen to each sound.`,
            `"Cat." C... A... T. Three sounds. Write the letter for each one. C-A-T. Done. "Pond." P... O... N... D. Four sounds. P-O-N-D. Sound-it-out is the FOUNDATION of spelling. It works perfectly for short words. For longer words, it's a starting point. Always start by listening to the sounds. Then write what you hear.`,
          ],
          image: `/explorer-assets/ela/l19-s2-sounds.webp`,
          imageCaption: `Sound it out. Say slowly. Listen to each sound. Write the letter for each.`,
          vocab: [
            { word: `sound out`,      definition: `To say a word slowly and listen to each sound. The first spelling strategy.`,
              audioPrompt: `To sound out, {name}, is to say a word slowly and listen to each sound. The first spelling strategy. For 'cat,' you hear C-A-T. Three separate sounds. For each sound, you write a letter. For short, simple words, this strategy works almost perfectly. It's the foundation of spelling.` },
            { word: `slowly`,         definition: `Not fast. Say words SLOWLY to hear all the sounds.`,
              audioPrompt: `Slowly, {name}, means not fast. Say words slowly to hear all the sounds. Fast-spoken words blend together — you miss sounds. Slow-spoken words let you hear each piece. C... A... T. Slow your voice down when you're sounding out. It's a smart spelling habit.` },
            { word: `letter`,         definition: `One symbol that stands for a sound. For each sound, write a LETTER.`,
              audioPrompt: `A letter, {name}, is one symbol that stands for a sound. When you sound out a word, for each sound, you write a letter. The sound 'k' might be written 'c' or 'k.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Strategy 2: Word Families`,
          paragraphs: [
            `WORD FAMILIES are groups of words that share the same ENDING.`,
            `Look at this family: CAT, HAT, BAT, RAT, MAT, SAT, FAT. All end in -AT. If you can spell ONE of these, you can spell ALL of them — just change the first letter. Another family: -ING. RING, SING, KING, BRING, THING. Another: -IGHT. NIGHT, LIGHT, BRIGHT, FIGHT, MIGHT. Word families are POWERFUL. Spot the family, and you can spell ALL its words.`,
          ],
          image: `/explorer-assets/ela/l19-s3-word-families.webp`,
          imageCaption: `Word families share endings. -at family. -ing family. -ight family. Spot one, spell all.`,
          vocab: [
            { word: `word family`,    definition: `A group of words sharing the same ending pattern.`,
              audioPrompt: `A word family, {name}, is a group of words sharing the same ending pattern. Cat, hat, bat — all in the -AT family. Ring, sing, king — all in the -ING family.` },
            { word: `pattern`,        definition: `A repeating shape or order. Spelling has PATTERNS — like word families.`,
              audioPrompt: `A pattern, {name}, is a repeating shape or order. Spelling has patterns. The -AT pattern. The -ING pattern. The -IGHT pattern. Patterns are everywhere. Once you spot a pattern, you can use it to spell many words. Spelling becomes pattern recognition, not memorization.` },
            { word: `change the front`, definition: `Swap the beginning letters. CHANGE THE FRONT to make new words in the same family.`,
              audioPrompt: `Change the front, {name}, means swap the beginning letters. Once you know -AT, you can make CAT (change to C), BAT (change to B), HAT (change to H), MAT (change to M). The ending stays the same. The front changes. That's how word families let you spell so many words.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Strategy 3: Sight Words`,
          paragraphs: [
            `Some words don't sound out easily. Like THE, WAS, SAID, YOU, ARE, HAVE.`,
            `These are called SIGHT WORDS. You learn to recognize them by SIGHT — not by sounding them out. They show up SO often in reading that you just remember them. The. Was. You. Said. By second or third grade, you'll know hundreds of sight words automatically. Sight words are like familiar faces — you see them, you know them instantly.`,
          ],
          image: `/explorer-assets/ela/l19-s4-sight-words.webp`,
          imageCaption: `Sight words = common words you recognize instantly. The. Was. Said. You. Learn by sight, not by sounding out.`,
          vocab: [
            { word: `sight word`,     definition: `A common word recognized by SIGHT — instantly, without sounding out.`,
              audioPrompt: `A sight word, {name}, is a common word recognized by sight — instantly, without sounding out. The. Was. Said. You. Are. Have. These show up SO often that your brain just knows them.` },
            { word: `recognize`,      definition: `To know something when you see it. You RECOGNIZE sight words instantly.`,
              audioPrompt: `To recognize, {name}, is to know something when you see it. You recognize sight words instantly. You don't need to sound them out. Your brain just knows. 'The.' That's THE. 'Said.' That's SAID. Recognition is faster than sounding out. That's why sight words help your reading speed up.` },
            { word: `automatic`,      definition: `Happening without thinking. With practice, sight words become AUTOMATIC.`,
              audioPrompt: `Automatic, {name}, means happening without thinking. With practice, sight words become automatic. You don't have to work at them. You see 'the' — your brain reads 'the' before you even register it. Automatic recognition is what frees your brain to focus on the harder parts of reading.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Strategy 4: Tricky Words`,
          paragraphs: [
            `Some words are just TRICKY. They have silent letters. Or weird spellings.`,
            `KNEE has a silent K. WRITE has a silent W. ISLAND has a silent S. THROUGH has letters you don't really hear. These tricky words don't follow normal patterns. You just have to learn them ONE at a time. Use a SPELLING JOURNAL. Write tricky words. Practice them. Don't worry — every speller has to learn tricky words. They become familiar with practice.`,
          ],
          image: `/explorer-assets/ela/l19-s5-tricky-words.webp`,
          imageCaption: `Tricky words. Silent letters. Weird spellings. Knee, write, island, through. Learn one at a time.`,
          vocab: [
            { word: `tricky word`,    definition: `A word with unusual spelling that doesn't follow normal rules.`,
              audioPrompt: `A tricky word, {name}, is a word with unusual spelling that doesn't follow normal rules. Knee with a silent K. Write with a silent W. Through with letters you don't really hear. English has lots of tricky words.` },
            { word: `silent letter`,  definition: `A letter you DON'T pronounce. Many tricky words have silent letters.`,
              audioPrompt: `A silent letter, {name}, is a letter you don't pronounce. KNEE has a silent K. You don't say 'kuh-nee' — you just say 'nee. ' But the K is there in writing. WRITE has a silent W.` },
            { word: `practice`,       definition: `Doing something over and over. PRACTICE tricky words to learn them.`,
              audioPrompt: `Practice, {name}, is doing something over and over. Practice tricky words to learn them. Write them out. Use them in sentences. See them in books. Each time you encounter a tricky word, it gets a little more familiar. Practice is how tricky words eventually become easy.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Brave Spellers`,
          paragraphs: [
            `Here's the most important spelling skill of all — BRAVERY.`,
            `Don't be afraid to TRY a word, even if you're not sure how to spell it. Use your strategies. Make your best guess. You can always fix it later. Kids who only write words they KNOW have small writing. Kids who TRY new words grow MUCH faster. Spelling improves through trying. Mistakes aren't failure — they're how you LEARN. Be a brave speller. Write the word you want.`,
          ],
          image: `/explorer-assets/ela/l19-s6-keep-trying.webp`,
          imageCaption: `Brave spellers try. Mistakes are how you learn. Use your strategies. Take chances.`,
          vocab: [
            { word: `brave`,          definition: `Willing to try even when you're not sure. Be a BRAVE speller.`,
              audioPrompt: `Brave, {name}, means willing to try even when you're not sure. Be a brave speller. Don't only use words you know perfectly. Try new ones. Use strategies. Take your best shot. Brave spellers grow fast. Timid spellers stay stuck with the same small set of words.` },
            { word: `try`,            definition: `Make an attempt. Try spelling new words — even hard ones.`,
              audioPrompt: `To try, {name}, is to make an attempt. Try spelling new words — even hard ones. Use your sounds. Use your patterns. Compare to words you know. Make your best guess. Trying is how you learn. Not trying means staying small.` },
            { word: `mistakes`,       definition: `Errors. MISTAKES are how we learn — they're not failure.`,
              audioPrompt: `Mistakes, {name}, are errors — getting something wrong. Important truth: mistakes are how we LEARN. They're not failure. They show you where you need to grow. Every great speller made thousands of spelling mistakes growing up. So did every great writer. Mistakes are part of getting better. Welcome them.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about spelling, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `Sounding out a word — saying it slowly and listening — is a good spelling strategy.`,
              matchPhrase: `Yes! Sound it out. Say slowly. Listen to each sound. Write a letter for each. The foundation of spelling. Works best for shorter words.`,
              correctMatch: `fact` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `Word families and patterns make spelling many words easier.`,
              matchPhrase: `True! Spot the pattern. -at family, -ing family, -ight family. Know one word — change the front — and you can spell many more.`,
              correctMatch: `fact` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `Every word must be spelled perfectly on the FIRST try, with no mistakes ever.`,
              matchPhrase: `Not at all! Mistakes are how we learn. Every great speller made thousands of mistakes growing up. Be brave. Try. Fix later.`,
              correctMatch: `myth` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `The best spelling strategy is to close your eyes and guess random letters.`,
              matchPhrase: `Definitely not! Spelling has STRATEGIES — sounding out, word families, sight words, tricky words. Use them. Don't just guess randomly.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What is SOUND IT OUT?`,
              options: [`Yelling`, `Saying a word slowly and listening to each sound to spell it`, `Singing the word`, `Whispering`],
              correctIndex: 1,
              explanation: `Sounding it out means saying a word slowly and listening to each sound. For each sound, you write a letter. The first spelling strategy. Works great for short words.` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `What is a WORD FAMILY?`,
              options: [`A book about a family`, `A group of words that share the same ENDING pattern`, `Random words mixed together`, `A type of cookie`],
              correctIndex: 1,
              explanation: `A word family is a group of words sharing the same ending. CAT, HAT, BAT, MAT — all -AT family. Spot one, spell all.` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `What are SIGHT WORDS?`,
              options: [`Common words you recognize INSTANTLY, without sounding out`, `Words about eyesight`, `Long, fancy words`, `Words that are blurry`],
              correctIndex: 0,
              explanation: `Sight words are common words you recognize instantly — the, was, said, you, are. They show up so often you just know them by sight.` },
            { id: `l19-q4`, format: `true-false`,
              question: `Mistakes are part of learning to spell — every great speller made thousands of mistakes growing up.`,
              correctAnswer: true,
              explanation: `True! Mistakes aren't failure — they're how you learn. Every speller you admire made many mistakes. Be brave. Try new words. Fix as you go.` },
            { id: `l19-q5`, format: `fill-blank`,
              question: `Words with silent letters or unusual spellings are called ___ words.`,
              options: [`tricky`, `simple`, `boring`, `huge`],
              correctIndex: 0,
              explanation: `Tricky! Tricky words don't follow normal rules. KNEE with silent K. WRITE with silent W. THROUGH with weird letters. Learn them one at a time.` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `What should you do if you're unsure how to spell a word?`,
              options: [`Give up and not write it`, `Try your best using strategies — sound it out, look for patterns, brave guess`, `Cry`, `Quit reading forever`],
              correctIndex: 1,
              explanation: `Try your best using strategies. Sound it out. Look for patterns. Use word families. Be brave. Better to try and fix later than not try at all.` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Spell-checkers exist on phones and computers. Adults use them. They help. BUT — they don't catch everything. Sometimes "their" gets used instead of "there." Sometimes "to" instead of "too." Spell-check can't always tell. So even with technology, knowing how to spell matters. Plus — when you handwrite (cards, letters, notes), there's no spell-check. Strong spellers are clear communicators. Always.`,
          familyAdventure: `Make a SPELLING JOURNAL together. Get a small notebook. When anyone in the family finds a tricky word — write it in the journal. Practice it. Use it in a sentence. Add new tricky words every week. Over months, you'll build a personal collection of words your family is mastering together.`,
          creativePrompt: `Pick FIVE words you find tricky. Practice them: 1) Write the word three times. 2) Use each in a SENTENCE. 3) Read your sentences out loud. Then come back tomorrow and try spelling them from memory. See if they're easier. That's the power of practice.`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now have SPELLING STRATEGIES — sounding out, word families, sight words, tricky words. You know that mistakes are part of learning. You know to be a brave speller. The more you read and write, the more your spelling grows. It happens slowly but surely. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L19] Loaded: "Spelling Strategies and Word Study" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
