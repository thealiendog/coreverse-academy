// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L04 — Context Clues: Figuring Out Unknown Words
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.L.1-3.4
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L04 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-04`,
      title:     `Context Clues: Figuring Out Unknown Words`,
      duration:  12,
      xpReward:  50,
      badge:     `context-explorer`,
      badgeName: `Context Explorer`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Every reader — even me — sometimes hits a word they don't know. It happens. Today's lesson is about what to do when you hit one. Spoiler: you DON'T need to stop reading. You DON'T need a giant dictionary. You can use CONTEXT CLUES — the words AROUND the tricky word — to figure out what it means. Let me show you how.`,
          headline: `Context Clues: Figuring Out Unknown Words`,
          subtitle: `Using the words around a tricky word to figure out what it means`,
          visual: `/explorer-assets/ela/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Unknown Word`,
          paragraphs: [
            `Picture this. You're reading along. Words flow smoothly. Then — bam — there's a word you've never seen before.`,
            `Your eyes stop. Your brain goes "huh?" That's totally NORMAL. Even great readers hit unfamiliar words. Even ME. But here's the thing: you don't have to PANIC. You don't have to stop reading. You can use CONTEXT to figure out what the word probably means. Reading keeps moving. Let me show you how.`,
          ],
          image: `/explorer-assets/ela/l04-s1-unknown-word.webp`,
          imageCaption: `Every reader hits unknown words. The trick is what you do next.`,
          vocab: [
            { word: `unknown`,      definition: `Not known. A word you've never seen or don't remember.`,
              audioPrompt: `Unknown means not known, {name}. An unknown word is one you've never seen before, or one you don't remember. Everyone has unknown words. As a 6-year-old, you have MORE unknown words than an 8-year-old.` },
            { word: `context`,      definition: `The words and sentences AROUND a tricky word. Context gives clues.`,
              audioPrompt: `Context, {name}, means the words and sentences AROUND a tricky word. Context is a magic word in reading. Because it's where the clues live. The word you don't know is sitting in a sentence — and that sentence has OTHER words.` },
            { word: `panic`,        definition: `To get really upset or scared. You DON'T have to panic when you see an unknown word.`,
              audioPrompt: `To panic means to get really upset or scared, {name}. When kids see an unknown word, sometimes they PANIC. They think 'oh no, I don't know that word, I can't read! ' But that's not true.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Neighbor Words Help`,
          paragraphs: [
            `Words have NEIGHBORS — the other words around them in a sentence.`,
            `And neighbor words love to HELP. They give hints. They explain. They give examples. Sometimes they even define the tricky word for you. The way to find context clues is simple: read the WHOLE sentence — even the parts before and after the tricky word. The neighbors usually tell you what's going on.`,
          ],
          image: `/explorer-assets/ela/l04-s2-neighbors-help.webp`,
          imageCaption: `Neighbor words help. Read the WHOLE sentence — even the parts after the tricky word.`,
          vocab: [
            { word: `neighbor`,     definition: `Someone who lives near you. Words have neighbors too — the words next to them.`,
              audioPrompt: `A neighbor is someone who lives near you, {name}. Words have neighbors too — the words right next to them in a sentence. Just like real neighbors help each other, word neighbors help readers. They give context. They explain.` },
            { word: `hint`,         definition: `A small clue. Neighbor words give HINTS about what tricky words mean.`,
              audioPrompt: `A hint is a small clue, {name}. Sometimes a clear one. Sometimes a sneaky one. Neighbor words give hints about what tricky words mean. They might use similar words. They might give examples. They might use opposite words. Watch for the hints. They're there to help you.` },
            { word: `whole`,        definition: `All of it. Read the WHOLE sentence to find clues — not just one part.`,
              audioPrompt: `Whole means all of it, {name}. Read the WHOLE sentence — beginning, middle, and end — to find context clues. Many kids hit a tricky word and STOP. But the clue might be in the NEXT few words.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Clue Type 1: The Definition`,
          paragraphs: [
            `Sometimes authors give you the meaning RIGHT in the sentence. That's a DEFINITION CLUE.`,
            `Example: "The astronomer — a person who studies stars — looked through the telescope." Did you know what an astronomer was? Maybe not. But the author tells you right there: "a person who studies stars." That little phrase is the definition clue. Authors do this on purpose. They WANT you to keep reading.`,
          ],
          image: `/explorer-assets/ela/l04-s3-definition-clue.webp`,
          imageCaption: `Definition clue — the meaning is right in the sentence, often after a comma or in parentheses.`,
          vocab: [
            { word: `definition`,   definition: `What a word means. Authors sometimes give definitions right in the sentence.`,
              audioPrompt: `A definition is what a word means, {name}. Like in a dictionary. Sometimes authors put a definition RIGHT in the sentence, especially when they use a fancy or technical word.` },
            { word: `astronomer`,   definition: `A person who studies stars and space. Cool word, right?`,
              audioPrompt: `An astronomer is a person who studies stars and space, {name}. It's a wonderful word. The 'astro' part comes from a Greek word meaning star. The 'nomer' part is from a Greek word for one who names or arranges.` },
            { word: `purpose`,      definition: `A reason for doing something. Authors give definitions ON PURPOSE — to help you.`,
              audioPrompt: `Purpose means a reason for doing something, {name}. Authors put definition clues in their sentences ON PURPOSE. They know readers might not know all their words. They want you to keep reading. So they help. Knowing that authors are on your side is a great thing to remember.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Clue Type 2: Examples`,
          paragraphs: [
            `Another clue type uses EXAMPLES. Sometimes the author gives you specific things that show what the tricky word means.`,
            `Example: "She loved CITRUS fruits, like oranges, lemons, and limes." Did you know what citrus was? Maybe not. But the EXAMPLES tell you. Oranges. Lemons. Limes. Now you can infer: citrus must be a type of tangy, juicy fruit. The examples taught you. That's an example clue.`,
          ],
          image: `/explorer-assets/ela/l04-s4-example-clue.webp`,
          imageCaption: `Example clue — specific things that show what the word means. "Like" and "such as" are big signal words.`,
          vocab: [
            { word: `example`,      definition: `A specific thing that shows what something is like. Examples teach you what tricky words mean.`,
              audioPrompt: `An example is a specific thing that shows what something is like, {name}. Examples are super useful in writing. They turn abstract ideas into concrete pictures.` },
            { word: `citrus`,       definition: `A type of tangy, juicy fruit — oranges, lemons, limes, grapefruits.`,
              audioPrompt: `Citrus is a type of tangy, juicy fruit, {name}. Oranges. Lemons. Limes. Grapefruits. Tangerines. All citrus.` },
            { word: `signal`,       definition: `A sign or hint. Words like 'such as' and 'for example' SIGNAL that examples are coming.`,
              audioPrompt: `A signal is a sign or hint, {name}. Some words SIGNAL that examples are coming. 'Such as. ' 'Like. ' 'For example. ' 'Including. ' When you see these signal words, get ready — examples are about to help you understand.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Clue Type 3: Opposites`,
          paragraphs: [
            `Sometimes the clue is an OPPOSITE word. That's tricky but powerful.`,
            `Example: "The kitten was tiny, but its mother was ENORMOUS." Did you know enormous? If not — you can see the word "tiny" right next to it, and the word "but." That "but" tells you enormous is the OPPOSITE of tiny. So enormous must mean VERY BIG. The opposite word gave you the meaning. Cool, right?`,
          ],
          image: `/explorer-assets/ela/l04-s5-opposite-clue.webp`,
          imageCaption: `Opposite clue — words like "but" and "however" signal an opposite is coming. Use the opposite to figure out the meaning.`,
          vocab: [
            { word: `opposite`,     definition: `Completely different. Hot and cold are opposites. Big and tiny are opposites.`,
              audioPrompt: `Opposite means completely different, {name}. Hot and cold are opposites. Big and tiny are opposites. Up and down. Fast and slow. Sad and happy. When a sentence puts two opposites near each other, that's a clue. If you know one of the opposites, you can figure out the other.` },
            { word: `enormous`,     definition: `Very, very big. Bigger than huge. Almost overwhelming in size.`,
              audioPrompt: `Enormous means very, very big, {name}. Bigger than huge. Like elephant-big. Whale-big. Mountain-big. It comes from old Latin words meaning 'out of the normal' — so big it's beyond normal. Enormous is a great word to know. You'll see it a lot in books.` },
            { word: `but`,          definition: `A signal word that means a change or opposite is coming.`,
              audioPrompt: `'But' is a signal word, {name}. It means a change or opposite is coming. 'I like cookies, BUT not raisin cookies. ' That 'but' tells you the next part is different from the first.` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your Context Toolkit`,
          paragraphs: [
            `Now you have a CONTEXT DETECTIVE TOOLKIT. Here's how to use it:`,
            `One — DON'T STOP at the unknown word. Two — READ the rest of the sentence. Three — LOOK for clues: definitions, examples, opposites. Four — MAKE a smart guess about what the word means. Five — KEEP READING. Sometimes more clues come later. Skilled readers use context clues all the time. You will too.`,
          ],
          image: `/explorer-assets/ela/l04-s6-detective-toolkit.webp`,
          imageCaption: `Your context toolkit. Don't stop. Look for clues. Make smart guesses. Keep reading.`,
          vocab: [
            { word: `toolkit`,      definition: `A set of tools you carry. Now you have a context toolkit.`,
              audioPrompt: `A toolkit is a set of tools you carry for a job, {name}. A plumber's toolkit has wrenches and pipes. A reader's toolkit has strategies — like context clues. You now have one. The more strategies you collect, the better reader you become. Keep building your toolkit, lesson by lesson.` },
            { word: `strategy`,     definition: `A smart plan. Context clues are a STRATEGY for figuring out unknown words.`,
              audioPrompt: `A strategy is a smart plan, {name}. Context clues are a strategy. Inferring is a strategy. Summarizing is a strategy. As you grow as a reader, you collect more strategies. Each one helps you tackle different reading challenges. Strategies are what separate okay readers from great ones.` },
            { word: `keep going`,   definition: `Don't stop. When you hit an unknown word, KEEP GOING — clues might be ahead.`,
              audioPrompt: `'Keep going' means don't stop, {name}. When you hit an unknown word, the worst thing to do is stop completely. Often the very next words or sentences will help you understand. Make a smart guess. Keep reading.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `The words AROUND a tricky word can help you figure out what it means.`,
              matchPhrase: `Yes! That's exactly what context clues are. Neighbor words give you hints, definitions, examples, and opposites. They're full of help.`,
              correctMatch: `fact` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `Authors often put helpful hints right in the sentence to help readers.`,
              matchPhrase: `True! Authors WANT you to understand. They include definitions, examples, and signal words on purpose. They're on your team.`,
              correctMatch: `fact` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `When you see one unfamiliar word, you should immediately throw the book away.`,
              matchPhrase: `Definitely not! Every reader hits unfamiliar words. The trick is using context clues to keep going — not giving up.`,
              correctMatch: `myth` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `You need to look up every single unfamiliar word in a giant dictionary before you can keep reading.`,
              matchPhrase: `Not at all! Looking up every single unknown word would make reading impossibly slow. Context clues work for MOST tricky words — use a dictionary only when you really need to.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What are CONTEXT CLUES?`,
              options: [`Words about cars`, `The words AROUND a tricky word that help you figure out its meaning`, `Magic spells`, `Things you eat for breakfast`],
              correctIndex: 1,
              explanation: `Context clues are the words AROUND a tricky word that help you figure out what it means. They include definitions, examples, opposites, and more. Authors put them in to help readers.` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `In this sentence — "Lila loved her FELINE, a fluffy orange cat named Whiskers" — what kind of context clue helps you understand FELINE?`,
              options: [`A definition clue ("a fluffy orange cat")`, `A math clue`, `A weather clue`, `No clue at all`],
              correctIndex: 0,
              explanation: `A definition clue! The phrase "a fluffy orange cat named Whiskers" tells you exactly what a feline is. The author put the definition right there in the sentence.` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `In this sentence — "She enjoyed BEVERAGES like water, juice, and milk" — what kind of context clue helps you understand BEVERAGES?`,
              options: [`An example clue (water, juice, milk are examples)`, `An opposite clue`, `A noise clue`, `A color clue`],
              correctIndex: 0,
              explanation: `An example clue! Water, juice, and milk are examples of beverages. From the examples, you can figure out beverages must mean drinks. Signal words like "like" often introduce example clues.` },
            { id: `l04-q4`, format: `true-false`,
              question: `When you see an unknown word, the best thing to do is read the rest of the sentence to look for clues.`,
              correctAnswer: true,
              explanation: `True! Don't stop at the unknown word. Read the WHOLE sentence — and even the next one. Context clues are usually nearby. Smart readers keep going to find the clues.` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `Words like "but" and "however" signal that an ___ might be coming.`,
              options: [`opposite`, `sandwich`, `rainbow`, `dinosaur`],
              correctIndex: 0,
              explanation: `Opposite! When you see "but" or "however," a contrasting or opposite idea is often coming. That's a huge clue for figuring out tricky words.` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `Do you need to know EVERY single word to be a good reader?`,
              options: [`Yes, you must know every single word ever invented`, `No — even great readers hit unknown words. They use context clues to figure them out`, `Only if you're famous`, `Only on Sundays`],
              correctIndex: 1,
              explanation: `No way! Even great readers hit unknown words. The skill is having strategies — like context clues — to figure out what they mean. That's what makes a smart reader, not memorizing the dictionary.` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Scientists have studied how kids learn new words. Most words you'll ever know — thousands and thousands — you'll learn from CONTEXT, not from someone teaching you directly. By reading lots of books, you'll meet new words in their natural environment. The more you read, the bigger your vocabulary grows — without you even trying. Reading is how vocabulary grows. Quietly. Steadily. For your whole life.`,
          familyAdventure: `Play the CONTEXT CLUE GAME. Find a book and pick a paragraph. Have a family member READ it aloud — but they replace ONE word with the word "BANANA." Other family members listen, then guess what word "banana" was hiding. The clues come from context. ("I picked up the heavy BANANA and read for an hour." That banana = book.) Switch turns. Laugh a lot.`,
          creativePrompt: `Invent a NEW WORD. Make up a silly word that doesn't exist — like "blorpit" or "snizzle." Now write a sentence using your new word — and include CONTEXT CLUES so a reader can figure out what it means. For example: "I love eating blorpits, like apples, pears, and bananas." That sentence tells the reader blorpits are fruits. Make your own. Share it.`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now have a CONTEXT DETECTIVE TOOLKIT. You know how to use neighbor words. You know definitions, examples, and opposite clues. You know not to panic. You know to keep going. This skill will help you read books that grow MORE challenging every year. Every fluent reader uses this. Now so do you. I'm proud of you. Thank you for journeying with me.`,
          badge: `context-explorer`,
          badgeName: `Context Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L04.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L04] Loaded: "Context Clues: Figuring Out Unknown Words" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
