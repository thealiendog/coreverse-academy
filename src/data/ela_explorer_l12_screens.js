// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L12 — Nonfiction Features and Text Structures
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.2-3.5 / RI.2-3.7
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L12 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-12`,
      title:     `Nonfiction Features and Text Structures`,
      duration:  12,
      xpReward:  50,
      badge:     `nonfiction-explorer`,
      badgeName: `Nonfiction Explorer`,

      screens: [

        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Today we focus on a special kind of book — NONFICTION. Nonfiction is about REAL things. Real animals. Real history. Real science. Real people. Nonfiction books have special tools to help readers find what they need. Headings. Bold words. Captions. Diagrams. Knowing these tools makes you a SMARTER reader of all the real-world stuff out there.`,
          headline: `Nonfiction Features and Text Structures`,
          subtitle: `The tools that help you read real-world books smarter and faster`,
          visual: `/explorer-assets/ela/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Real Things, Real Books`,
          paragraphs: [
            `Some books tell made-up stories. Those are FICTION. Other books tell about REAL things. Those are NONFICTION.`,
            `Nonfiction is books about animals, history, planets, plants, science, art, people, places, how things work. The information in nonfiction is TRUE. Nonfiction is how you learn ABOUT the world. Whenever you want to find out something real, nonfiction is the place to go.`,
          ],
          image: `/explorer-assets/ela/l12-s1-nonfiction-real.webp`,
          imageCaption: `Nonfiction = books about real things. Animals, history, science, people. Information that's TRUE.`,
          vocab: [
            { word: `nonfiction`,     definition: `Writing about REAL things. True information.`,
              audioPrompt: `Nonfiction, {name}, is writing about real things. True information. The opposite of fiction (made-up stories). Nonfiction books cover everything in the real world — animals, planets, history, science, sports, cooking, music. When you want to LEARN something true, you read nonfiction.` },
            { word: `fiction`,        definition: `Writing about made-up things. Stories that aren't real.`,
              audioPrompt: `Fiction, {name}, is writing about made-up things. Stories that aren't real. Characters someone invented. Events someone imagined. Charlotte's Web is fiction. So is Harry Potter. Fiction can teach truth about life — but its stories themselves aren't true. Fiction is opposite of nonfiction.` },
            { word: `real`,           definition: `Actually existing. Nonfiction is about REAL things.`,
              audioPrompt: `Real, {name}, means actually existing. Nonfiction is about real things — things that actually exist or happened. Real animals. Real planets. Real history. Real people. When you read nonfiction, you're learning about the real world. That's why nonfiction is sometimes called 'informational text.' It informs you about reality.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Headings: The Signposts`,
          paragraphs: [
            `Nonfiction books have HEADINGS — bold titles at the start of each section.`,
            `Headings are like SIGNPOSTS. They tell you what's coming. A book about dogs might have headings like "What Dogs Eat," "How Dogs Communicate," "Famous Dogs in History." Just by reading the headings, you can find the part you want. Headings save TIME. They guide your reading. They make nonfiction much easier to navigate.`,
          ],
          image: `/explorer-assets/ela/l12-s2-headings.webp`,
          imageCaption: `Headings — bold titles that tell you what each section is about. Like signposts guiding your reading.`,
          vocab: [
            { word: `heading`,        definition: `A bold title at the start of a section. Tells you what's in that section.`,
              audioPrompt: `A heading, {name}, is a bold title at the start of a section. It tells you what's in that section. Like a sign at a store that says 'TOYS' or 'BOOKS.' Headings are usually in BIGGER or BOLDER print so they jump out at you. They're one of the best tools nonfiction has.` },
            { word: `section`,        definition: `A chunk of a book or article. Each section often has its own heading.`,
              audioPrompt: `A section, {name}, is a chunk of a book or article. Nonfiction books are usually divided into sections. Each section covers one part of the topic. Each section often starts with a heading. Sections help organize information — like rooms in a house. Each one holds its own thing.` },
            { word: `signpost`,       definition: `A sign that points the way. Headings are like signposts for readers.`,
              audioPrompt: `A signpost, {name}, is a sign that points the way. You see signposts on roads — 'this way to the park,' 'that way to the store.' Headings are signposts inside books. They tell you what's coming and help you find what you want. Without headings, nonfiction would be much harder to navigate.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Bold Words: Key Vocabulary`,
          paragraphs: [
            `When important words appear in nonfiction, authors often make them BOLD.`,
            `Bold words look DARKER and THICKER than other words. They jump out at you. Authors bold words that are KEY VOCABULARY for understanding the topic. A book about volcanoes might bold words like MAGMA, LAVA, and ERUPTION. The bold tells you: "This word matters. Learn it." Sometimes there's even a definition right nearby. Bold = important.`,
          ],
          image: `/explorer-assets/ela/l12-s3-bold-words.webp`,
          imageCaption: `Bold words = key vocabulary. The author is saying "learn this word — it matters."`,
          vocab: [
            { word: `bold`,           definition: `Darker, thicker letters. Authors use BOLD to make important words stand out.`,
              audioPrompt: `Bold, {name}, means darker, thicker letters. Authors use bold to make important words stand out. When a word is bold in a nonfiction book, the author is sending you a signal — 'this word matters. Pay attention. Learn it.' Bold is one of the easiest features to spot. Just look for words that look thicker than the others.` },
            { word: `vocabulary`,     definition: `The collection of words you know. Bold words help you learn new VOCABULARY.`,
              audioPrompt: `Vocabulary, {name}, is the collection of words you know. The more you know, the bigger your vocabulary. Bold words in nonfiction help you grow your vocabulary fast. They show you which new words are worth learning. Every bold word you understand is a new tool for your brain.` },
            { word: `definition`,     definition: `The meaning of a word. Bold words often have definitions nearby.`,
              audioPrompt: `A definition, {name}, is the meaning of a word. Bold words often have definitions nearby — either right in the sentence, or in a special box, or in a glossary at the back of the book. When you see a bold word, look for its definition. Authors put them there to help you.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Pictures and Captions`,
          paragraphs: [
            `Nonfiction is full of PICTURES — photos, drawings, illustrations.`,
            `Under each picture is usually a CAPTION — a short sentence telling you what the picture shows. "A blue-footed booby on the Galapagos Islands." Captions tell you what you're looking at AND give extra information. ALWAYS read the captions. They contain info that might not be in the main text. Pictures + captions = double learning.`,
          ],
          image: `/explorer-assets/ela/l12-s4-pictures-captions.webp`,
          imageCaption: `Pictures and captions. Always read both. The caption tells you what you're seeing — plus extra info.`,
          vocab: [
            { word: `picture`,        definition: `A photo, drawing, or illustration. Nonfiction is full of pictures.`,
              audioPrompt: `A picture, {name}, is a photo, drawing, or illustration. Nonfiction is full of pictures. Photos of real things. Drawings of things you can't easily photograph. Illustrations that show what something looks like. Pictures help you SEE the topic, not just READ about it. They make nonfiction richer.` },
            { word: `caption`,        definition: `A short sentence under a picture telling you what it shows.`,
              audioPrompt: `A caption, {name}, is a short sentence under a picture telling you what it shows. Captions are SUPER important. They often have facts that aren't in the main text. So if you skip the captions, you miss information. Always read the captions. They're tiny treasure chests of info.` },
            { word: `illustration`,   definition: `A drawing made to show something. Books use illustrations alongside photos.`,
              audioPrompt: `An illustration, {name}, is a drawing made to show something. Books use illustrations when a photo wouldn't work — like for showing inside a body, or what dinosaurs looked like, or how something works step by step. Illustrations are often more detailed than photos can be. They're another way nonfiction shares information.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Diagrams and Labels`,
          paragraphs: [
            `Sometimes nonfiction uses DIAGRAMS — drawings with LABELS pointing to each part.`,
            `A diagram of a flower might label the petals, stem, leaves, and roots. A diagram of the eye might label the pupil, iris, and lens. Diagrams pack TONS of information into one picture. Reading a diagram is like reading a paragraph — only faster. Whenever you see a diagram in a nonfiction book, slow down. Read every label.`,
          ],
          image: `/explorer-assets/ela/l12-s5-diagrams.webp`,
          imageCaption: `Diagrams pack big information into one picture. Always read every label.`,
          vocab: [
            { word: `diagram`,        definition: `A drawing with labels pointing to different parts. Used in nonfiction.`,
              audioPrompt: `A diagram, {name}, is a drawing with labels pointing to different parts. Like a map of a thing. Diagrams help you understand how something is built or how its parts work together. A bike diagram. A flower diagram. A body diagram. They pack lots of information into one picture. Worth slowing down for.` },
            { word: `label`,          definition: `A small word pointing to a part. Diagrams use LABELS to name each part.`,
              audioPrompt: `A label, {name}, is a small word pointing to a part. Diagrams use labels to name each part. The label might point to it with an arrow or a line. By reading all the labels, you learn what each part of the thing is called. It's like getting a tour with names attached.` },
            { word: `slow down`,      definition: `Read more carefully. SLOW DOWN when you see a diagram — take it in.`,
              audioPrompt: `Slow down, {name} — reading diagrams takes a slower pace. Don't rush past them. Take a moment to look at the whole picture. Then read each label. Then think about how the parts connect. Diagrams have a lot of information packed into them. Slowing down lets you actually absorb it.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Finding Information Fast`,
          paragraphs: [
            `Nonfiction books also have tools that help you FIND information FAST.`,
            `Table of CONTENTS — at the front, lists what's in the book by chapter. INDEX — at the back, lists topics alphabetically with page numbers. GLOSSARY — at the back, lists important words with definitions. Together, these tools mean you don't have to read the whole book to find one fact. You can JUMP to exactly what you need. Smart readers use these all the time.`,
          ],
          image: `/explorer-assets/ela/l12-s6-finding-info.webp`,
          imageCaption: `Table of contents, index, glossary. Tools that let you find info fast. Smart readers use them.`,
          vocab: [
            { word: `contents`,       definition: `A list at the front of a book showing what's in each chapter.`,
              audioPrompt: `Contents, {name} — short for 'table of contents' — is a list at the front of a book showing what's in each chapter. It helps you see the whole book at a glance. You can jump to the chapter you want. Most nonfiction books have one. Always check it first. It tells you what's in the book.` },
            { word: `index`,          definition: `A list at the back of a book showing topics in alphabetical order with page numbers.`,
              audioPrompt: `An index, {name}, is a list at the back of a book showing topics in alphabetical order with page numbers. Want to find info about 'penguins' in an animal book? Look up 'penguins' in the index — it tells you what page to flip to. The index is one of the most useful tools in nonfiction. Like a search bar for the book.` },
            { word: `glossary`,       definition: `A list of important words and their definitions, usually at the back of a book.`,
              audioPrompt: `A glossary, {name}, is a list of important words and their definitions, usually at the back of a book. Like a mini dictionary just for that book. If you forget what a bold word means, check the glossary. Glossaries are especially useful in nonfiction full of technical words.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `Headings are bold titles that tell you what each section is about.`,
              matchPhrase: `Yes! Headings are like signposts. They guide you through the book and help you find what you need fast.`,
              correctMatch: `fact` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `In nonfiction, you can SKIM headings and JUMP to the section you need.`,
              matchPhrase: `True! You don't have to read every word of every page. Nonfiction is designed for finding info fast. Use headings, contents, and index to jump around.`,
              correctMatch: `fact` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `You must read every single word of every page in alphabetical order to use a nonfiction book.`,
              matchPhrase: `Not at all! Nonfiction is built for skimming and jumping. Use the table of contents, the index, and headings to find exactly what you need.`,
              correctMatch: `myth` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `Smart readers ignore all pictures, captions, and diagrams in nonfiction.`,
              matchPhrase: `Definitely not! Pictures, captions, and diagrams pack tons of information. Skipping them means missing facts. Always read them.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is NONFICTION?`,
              options: [`Made-up stories`, `Writing about REAL things — true information`, `Only poems`, `Books with pictures only`],
              correctIndex: 1,
              explanation: `Nonfiction is writing about real things — true information. Animals, history, science, people, planets, anything real. Opposite of fiction (made-up stories).` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is a HEADING in nonfiction?`,
              options: [`A bold title at the start of a section`, `The name of the author`, `A type of cookie`, `The last sentence`],
              correctIndex: 0,
              explanation: `A heading is a bold title at the start of a section. It tells you what's in that section. Like a signpost guiding your reading.` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `Why do authors make some words BOLD?`,
              options: [`To make the book look fancy`, `To show which words are key vocabulary — important to learn`, `Because they made a mistake`, `For no reason`],
              correctIndex: 1,
              explanation: `Bold words = key vocabulary. The author is saying "this word matters. Learn it." Often there's a definition nearby.` },
            { id: `l12-q4`, format: `true-false`,
              question: `Captions under pictures often have extra information that's NOT in the main text.`,
              correctAnswer: true,
              explanation: `True! Captions are tiny treasure chests of facts. Skipping them means missing info. Always read captions.` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `A list at the BACK of a book showing topics alphabetically with page numbers is called an ___.`,
              options: [`index`, `apple`, `igloo`, `elephant`],
              correctIndex: 0,
              explanation: `Index! It lists topics alphabetically with page numbers. Like a search bar for the book. Super useful for finding specific information fast.` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Do you have to read every word of a nonfiction book from start to finish?`,
              options: [`Yes, always, in order`, `No — use headings, table of contents, and index to find what you need`, `Only on weekends`, `Only if you finish your vegetables`],
              correctIndex: 1,
              explanation: `No! Nonfiction is built for jumping around. Use the table of contents, index, and headings to find exactly what you need. That's how nonfiction is meant to be used.` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Adults use nonfiction skills CONSTANTLY. Reading the news. Looking up how to fix something. Researching for work. Following a recipe. Reading instructions for a new gadget. Looking up symptoms when feeling sick. All of these use the same skills you're learning — finding headings, skimming, using indexes, reading captions. The better you get now, the easier life will be later.`,
          familyAdventure: `Find a NONFICTION book at home — about animals, history, science, sports, anything. Open it to the front. Look at the TABLE OF CONTENTS together. What chapters does it have? Then open to the BACK. Is there an INDEX? A GLOSSARY? Practice looking up a topic. See how fast you can find specific information. Make it a game.`,
          creativePrompt: `Make your OWN tiny nonfiction page about something you know well — your pet, your favorite sport, a place you love. Include: a HEADING at the top, a few sentences in the middle, one BOLD word that's key vocabulary, and a picture (drawn) with a CAPTION. Show all the nonfiction features.`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how NONFICTION works. Headings. Bold words. Captions. Diagrams. Table of contents. Index. Glossary. These tools help you read real-world books smarter and faster. You're ready for anything — animal books, history books, science books, news, instructions. Real-world reading just got easier. I'm proud of you. Thank you for journeying with me.`,
          badge: `nonfiction-explorer`,
          badgeName: `Nonfiction Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L12.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L12] Loaded: "Nonfiction Features and Text Structures" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
