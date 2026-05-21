// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L04 — Context Clues: Figuring Out Unknown Words
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.L.1-3.4
// REWRITE v2 (May 2026): Grade 1 accessible, DEFINITION/EXAMPLE/OPPOSITE
// CLUE identification game directly tests CCSS L.1-3.4 clue types
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
          guideText: `Welcome back, {name}! Every reader hits words they don't know. Even me! Today you learn what to do when that happens. You DON'T need to stop! You can use CONTEXT CLUES — the words around the tricky word — to figure it out. Let's go!`,
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
            `Picture this! You're reading along. Then BAM — a word you've never seen!`,
            `Your eyes stop. Your brain goes "huh?" That's totally NORMAL. Even great readers hit words they don't know. Even ME! But you don't have to PANIC. You don't have to stop. You can use CONTEXT to figure out what the word probably means. Reading keeps moving!`,
          ],
          image: `/explorer-assets/ela/l04-s1-unknown-word.webp`,
          imageCaption: `Every reader hits unknown words. The trick is what you do next!`,
          vocab: [
            { word: `unknown`, definition: `Not known. A word you've never seen.`,
              audioPrompt: `Unknown means not known. An unknown word is one you've never seen before. Everyone has unknown words. Even adults! That's totally normal!` },
            { word: `context`, definition: `The words AROUND a tricky word.`,
              audioPrompt: `Context means the words AROUND a tricky word. Context is magic in reading. The clues you need are usually right there in the sentence!` },
            { word: `panic`,   definition: `To get really upset. You DON'T need to panic!`,
              audioPrompt: `To panic means to get really upset. When kids see an unknown word, sometimes they panic. But that's not needed! There are clues all around!` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Neighbor Words Help`,
          paragraphs: [
            `Words have NEIGHBORS — the other words around them!`,
            `Neighbor words love to HELP. They give hints. They explain. They give examples. The trick is simple: read the WHOLE sentence — even the parts AFTER the tricky word. The neighbors usually tell you what's going on!`,
          ],
          image: `/explorer-assets/ela/l04-s2-neighbors-help.webp`,
          imageCaption: `Neighbor words help! Read the WHOLE sentence — even after the tricky word!`,
          vocab: [
            { word: `neighbor`, definition: `Someone who lives near you. Words have neighbors too!`,
              audioPrompt: `A neighbor is someone who lives near you. Words have neighbors too — the words right next to them. Just like real neighbors help, word neighbors help readers!` },
            { word: `hint`,     definition: `A small clue.`,
              audioPrompt: `A hint is a small clue. Neighbor words give hints about what tricky words mean. Sometimes clear. Sometimes sneaky. Watch for them!` },
            { word: `whole`,    definition: `All of it.`,
              audioPrompt: `Whole means all of it. Read the WHOLE sentence to find clues — not just one part. The clue might be in the NEXT few words after the tricky one!` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Clue Type 1: DEFINITION`,
          paragraphs: [
            `Sometimes authors give you the meaning RIGHT in the sentence! That's a DEFINITION CLUE!`,
            `Example: "The astronomer — a person who studies stars — looked through the telescope." Did you know what an astronomer was? Maybe not! But the author told you: "a person who studies stars." That's a DEFINITION CLUE. Authors do this on purpose to help you!`,
          ],
          image: `/explorer-assets/ela/l04-s3-definition-clue.webp`,
          imageCaption: `Definition clue — the meaning is right in the sentence, often after a comma.`,
          vocab: [
            { word: `definition`, definition: `What a word means.`,
              audioPrompt: `A definition is what a word means. Like in a dictionary! Sometimes authors put a definition RIGHT in the sentence — especially with fancy or hard words!` },
            { word: `astronomer`, definition: `A person who studies stars and space.`,
              audioPrompt: `An astronomer is a person who studies stars and space. Cool word! The "astro" part comes from a Greek word meaning star!` },
            { word: `purpose`,    definition: `A reason for doing something.`,
              audioPrompt: `Purpose means a reason for doing something. Authors give definition clues ON PURPOSE — to help you. Knowing authors are on your side feels good!` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Clue Type 2: EXAMPLES`,
          paragraphs: [
            `Another clue type uses EXAMPLES! The author gives you specific things that show what the word means.`,
            `Example: "She loved CITRUS fruits — like oranges, lemons, and limes!" Did you know citrus? Maybe not! But the EXAMPLES tell you. Oranges. Lemons. Limes. Now you can figure out: citrus is tangy, juicy fruit! Signal words like "such as" and "like" tell you examples are coming!`,
          ],
          image: `/explorer-assets/ela/l04-s4-example-clue.webp`,
          imageCaption: `Example clue — specific things that show what the word means.`,
          vocab: [
            { word: `example`, definition: `A specific thing that shows what something is.`,
              audioPrompt: `An example is a specific thing that shows what something is. Examples are super useful! They turn fuzzy ideas into clear pictures!` },
            { word: `citrus`,  definition: `Tangy, juicy fruits like oranges, lemons, and limes.`,
              audioPrompt: `Citrus is a type of tangy, juicy fruit. Oranges. Lemons. Limes. Grapefruits. All citrus! Now you know!` },
            { word: `signal`,  definition: `A sign that something is coming.`,
              audioPrompt: `A signal is a sign that something is coming. Words like "such as," "like," and "for example" SIGNAL that examples are coming. Watch for them!` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Clue Type 3: OPPOSITES`,
          paragraphs: [
            `Sometimes the clue is an OPPOSITE word! That's tricky but powerful!`,
            `Example: "The kitten was tiny, BUT its mother was ENORMOUS." Did you know "enormous"? You can see "tiny" next to it — and the word "BUT." That "but" tells you enormous is the OPPOSITE of tiny. So enormous must mean VERY BIG! The opposite word gave you the meaning!`,
          ],
          image: `/explorer-assets/ela/l04-s5-opposite-clue.webp`,
          imageCaption: `Opposite clue — words like "but" and "however" mean an opposite is coming!`,
          vocab: [
            { word: `opposite`, definition: `Completely different. Hot and cold are opposites.`,
              audioPrompt: `Opposite means completely different. Hot and cold are opposites. Big and tiny. Up and down. When opposites are near each other in a sentence, that's a clue!` },
            { word: `enormous`, definition: `Very, very big.`,
              audioPrompt: `Enormous means very, very big. Bigger than huge. Like elephant-big. Or mountain-big! It's a great word to know — you'll see it a lot in books!` },
            { word: `but`,      definition: `A signal word that means an opposite or change is coming.`,
              audioPrompt: `But is a signal word. It means a change or opposite is coming. "I like cookies BUT not raisin cookies." The "but" tells you the next part is different!` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your Context Toolkit`,
          paragraphs: [
            `Now you have a CONTEXT DETECTIVE TOOLKIT! Here's how to use it:`,
            `One — DON'T STOP at the unknown word. Two — READ the rest of the sentence. Three — LOOK for clues: definitions, examples, opposites. Four — MAKE a smart guess. Five — KEEP READING. Sometimes more clues come later! Skilled readers use this all the time!`,
          ],
          image: `/explorer-assets/ela/l04-s6-detective-toolkit.webp`,
          imageCaption: `Your toolkit. Don't stop. Look for clues. Make smart guesses. Keep reading!`,
          vocab: [
            { word: `toolkit`,   definition: `A set of tools you carry for a job.`,
              audioPrompt: `A toolkit is a set of tools. A plumber's toolkit has wrenches. A reader's toolkit has strategies — like context clues! Keep building yours!` },
            { word: `strategy`,  definition: `A smart plan.`,
              audioPrompt: `A strategy is a smart plan. Context clues are a strategy. Inferring is a strategy. As you grow, you collect more strategies. Each helps you read better!` },
            { word: `keep going`, definition: `Don't stop! Keep reading even past a tricky word.`,
              audioPrompt: `Keep going means don't stop! When you hit an unknown word, the worst thing is to give up. Make a smart guess. Keep reading. More clues may be coming!` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sentences with tricky words. Drag each into the right CLUE TYPE — definition, example, or opposite!`,
          buckets: [
            { id: `definition`, label: `📖 DEFINITION clue`, color: `#FBBF24` },
            { id: `example`,    label: `🔢 EXAMPLE clue`,    color: `#34D399` },
            { id: `opposite`,   label: `↔️ OPPOSITE clue`,   color: `#A78BFA` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `The astronomer, a person who studies stars, looked up.`,
              matchPhrase: `Yes! That's a DEFINITION CLUE — the meaning is right in the sentence!`,
              correctMatch: `definition` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `She loved citrus fruits like oranges, lemons, and limes.`,
              matchPhrase: `Great! That's an EXAMPLE CLUE — oranges, lemons, and limes show what citrus is!`,
              correctMatch: `example` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `The kitten was tiny, but its mother was enormous.`,
              matchPhrase: `Perfect! That's an OPPOSITE CLUE — "tiny" tells you "enormous" means the opposite!`,
              correctMatch: `opposite` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `Lila brought beverages such as water, juice, and milk.`,
              matchPhrase: `Yes! Another EXAMPLE CLUE — water, juice, and milk show what beverages are!`,
              correctMatch: `example` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What are CONTEXT CLUES?`,
              options: [`Words about cars`, `The words AROUND a tricky word that help you figure out its meaning`, `Magic spells`, `Breakfast foods`],
              correctIndex: 1,
              explanation: `Context clues are the words AROUND a tricky word that help you figure out its meaning!` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `"Lila loved her FELINE, a fluffy orange cat named Whiskers." What kind of clue helps you?`,
              options: [`Definition clue ("a fluffy orange cat")`, `Math clue`, `Weather clue`, `No clue`],
              correctIndex: 0,
              explanation: `A definition clue! The phrase "a fluffy orange cat" tells you exactly what a feline is!` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `"She enjoyed BEVERAGES like water, juice, and milk." What kind of clue is here?`,
              options: [`Example clue (water, juice, milk are examples)`, `Opposite clue`, `Noise clue`, `Color clue`],
              correctIndex: 0,
              explanation: `An example clue! Water, juice, and milk are examples of beverages — so beverages must mean drinks!` },
            { id: `l04-q4`, format: `true-false`,
              question: `When you see an unknown word, the best thing is to read the rest of the sentence for clues.`,
              correctAnswer: true,
              explanation: `True! Don't stop. Read the WHOLE sentence. Context clues are usually nearby!` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `Words like "but" and "however" signal that an ___ might be coming.`,
              options: [`opposite`, `sandwich`, `rainbow`, `dinosaur`],
              correctIndex: 0,
              explanation: `Opposite! "But" and "however" signal that a contrasting or opposite idea is coming!` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `Do you need to know EVERY word to be a good reader?`,
              options: [`Yes, every single word ever invented`, `No — great readers use context clues for unknown words`, `Only if you're famous`, `Only on Sundays`],
              correctIndex: 1,
              explanation: `No! Even great readers hit unknown words. The skill is using context clues. That's what makes a smart reader!` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Scientists found that most words you learn — thousands! — you learn from CONTEXT, not from someone teaching them. By reading lots of books, you meet new words in their natural place. The more you read, the bigger your vocabulary grows — quietly!`,
          familyAdventure: `Play the CONTEXT CLUE GAME! Pick a paragraph from a book. A family member reads it aloud — but they replace ONE word with "BANANA." Other family members listen, then guess what word "banana" was hiding! Use the clues!`,
          creativePrompt: `Invent a NEW WORD! Make up a silly word — like "blorpit" or "snizzle." Now write a sentence using your new word — with CONTEXT CLUES so a reader can figure out what it means! Example: "I love eating blorpits like apples and pears." That tells the reader blorpits are fruits!`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You have a CONTEXT DETECTIVE TOOLKIT! You know how to use neighbor words. You know definitions, examples, and opposite clues. You know not to panic. You know to keep going. Every fluent reader uses this. Now so do you! Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L04] Loaded: "Context Clues" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
