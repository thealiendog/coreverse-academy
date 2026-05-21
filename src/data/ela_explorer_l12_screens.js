// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L12 — Nonfiction Features and Text Structures
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.2-3.5 / RI.2-3.7
// REWRITE v2 (May 2026): Grade 1 accessible, HEADING/CAPTION/GLOSSARY
// 3-bucket identification game tests recognition of nonfiction features
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
          guideText: `Welcome back, {name}! Today we focus on NONFICTION — books about REAL things! Real animals. Real history. Real science. Nonfiction books have special TOOLS to help readers find what they need. Headings. Captions. Glossaries. Let's learn them!`,
          headline: `Nonfiction Features and Text Structures`,
          subtitle: `The tools that help you read real-world books smarter`,
          visual: `/explorer-assets/ela/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Real Things, Real Books`,
          paragraphs: [
            `Some books tell made-up stories. Those are FICTION. Other books tell about REAL things. Those are NONFICTION!`,
            `Nonfiction is about animals, history, planets, plants, science, art, people, places, how things work! The information in nonfiction is TRUE. Nonfiction is how you learn ABOUT the world. Whenever you want to find out something real, nonfiction is the place to go!`,
          ],
          image: `/explorer-assets/ela/l12-s1-nonfiction-real.webp`,
          imageCaption: `Nonfiction = books about real things. Information that's TRUE!`,
          vocab: [
            { word: `nonfiction`, definition: `Writing about REAL things.`,
              audioPrompt: `Nonfiction is writing about real things. True information. The opposite of fiction. Nonfiction books cover animals, history, science, sports — anything real in the world!` },
            { word: `fiction`,    definition: `Writing about made-up things.`,
              audioPrompt: `Fiction is writing about made-up things. Stories that aren't real. Characters someone invented. Harry Potter is fiction. Charlotte's Web is fiction. Opposite of nonfiction!` },
            { word: `real`,       definition: `Actually existing.`,
              audioPrompt: `Real means actually existing. Nonfiction is about real things — things that actually exist or happened. Real animals. Real planets. Real history!` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Feature 1: HEADINGS`,
          paragraphs: [
            `Nonfiction books have HEADINGS — bold titles at the start of each section!`,
            `Headings are like SIGNPOSTS. They tell you what's coming. A book about dogs might have headings like "What Dogs Eat," "How Dogs Communicate," "Famous Dogs in History." Just by reading the headings, you can find the part you want! Headings save TIME!`,
          ],
          image: `/explorer-assets/ela/l12-s2-headings.webp`,
          imageCaption: `Headings — bold titles at the start of each section!`,
          vocab: [
            { word: `heading`,  definition: `A bold title at the start of a section.`,
              audioPrompt: `A heading is a bold title at the start of a section. It tells you what's in that section. Like a sign at a store that says "TOYS" or "BOOKS!"` },
            { word: `section`,  definition: `A chunk of a book or article.`,
              audioPrompt: `A section is a chunk of a book or article. Nonfiction is divided into sections. Each section covers one part of the topic. Each often starts with a heading!` },
            { word: `signpost`, definition: `A sign that points the way.`,
              audioPrompt: `A signpost is a sign that points the way. You see them on roads. Headings are signposts inside books — guiding you to what you want to read!` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Feature 2: BOLD WORDS`,
          paragraphs: [
            `When important words appear in nonfiction, authors often make them BOLD!`,
            `Bold words look DARKER and THICKER than other words. They jump out at you! Authors bold KEY VOCABULARY for the topic. A volcano book might bold words like MAGMA, LAVA, and ERUPTION. The bold is a signal: "This word matters. Learn it!" Sometimes there's even a definition right nearby!`,
          ],
          image: `/explorer-assets/ela/l12-s3-bold-words.webp`,
          imageCaption: `Bold words = key vocabulary you should learn!`,
          vocab: [
            { word: `bold`,       definition: `Darker, thicker letters.`,
              audioPrompt: `Bold means darker, thicker letters. Authors use bold to make important words stand out. When a word is bold, the author is sending you a signal — pay attention!` },
            { word: `vocabulary`, definition: `The collection of words you know.`,
              audioPrompt: `Vocabulary is the collection of words you know. The more you know, the bigger your vocabulary. Bold words help you grow yours fast!` },
            { word: `definition`, definition: `The meaning of a word.`,
              audioPrompt: `A definition is the meaning of a word. Bold words often have definitions nearby — right in the sentence, in a special box, or in a glossary at the back!` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Feature 3: CAPTIONS`,
          paragraphs: [
            `Nonfiction is full of PICTURES — photos, drawings, illustrations!`,
            `Under each picture is usually a CAPTION — a short sentence telling you what the picture shows. "A blue-footed booby on the Galapagos Islands." Captions tell you what you're looking at AND give EXTRA INFORMATION. ALWAYS read captions! They have facts that might not be in the main text!`,
          ],
          image: `/explorer-assets/ela/l12-s4-pictures-captions.webp`,
          imageCaption: `Pictures and captions. Always read both!`,
          vocab: [
            { word: `picture`, definition: `A photo, drawing, or illustration.`,
              audioPrompt: `A picture is a photo, drawing, or illustration. Nonfiction is full of pictures. They help you SEE the topic, not just READ about it!` },
            { word: `caption`, definition: `A short sentence under a picture.`,
              audioPrompt: `A caption is a short sentence under a picture telling you what it shows. Captions are SUPER important. They often have facts not in the main text. Always read them!` },
            { word: `extra`,   definition: `More than the main text.`,
              audioPrompt: `Extra means more than the main text. Captions often have extra information you'd miss if you skipped them. Tiny treasure chests of facts!` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Feature 4: DIAGRAMS`,
          paragraphs: [
            `Sometimes nonfiction uses DIAGRAMS — drawings with LABELS pointing to each part!`,
            `A diagram of a flower might label the petals, stem, leaves, and roots. A diagram of the eye might label the pupil, iris, and lens! Diagrams pack TONS of information into ONE picture. Whenever you see a diagram, slow down. Read every LABEL. They have lots to teach!`,
          ],
          image: `/explorer-assets/ela/l12-s5-diagrams.webp`,
          imageCaption: `Diagrams pack big information into one picture!`,
          vocab: [
            { word: `diagram`, definition: `A drawing with labels pointing to different parts.`,
              audioPrompt: `A diagram is a drawing with labels pointing to different parts. Like a map of a thing. Diagrams help you understand how something is built or works!` },
            { word: `label`,   definition: `A small word pointing to a part.`,
              audioPrompt: `A label is a small word pointing to a part. Diagrams use labels to name each piece. The label points to it with an arrow or line!` },
            { word: `slow down`, definition: `Read more carefully.`,
              audioPrompt: `Slow down — reading diagrams takes a slower pace. Don't rush past them. Take time to look at the whole picture, then read each label!` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Feature 5: GLOSSARY (and more!)`,
          paragraphs: [
            `Nonfiction also has tools that help you FIND information FAST!`,
            `TABLE OF CONTENTS — at the FRONT, lists chapters. INDEX — at the BACK, lists topics alphabetically with page numbers. GLOSSARY — at the BACK, lists important words with definitions. With these tools, you don't have to read the whole book to find ONE fact. You can JUMP to exactly what you need!`,
          ],
          image: `/explorer-assets/ela/l12-s6-finding-info.webp`,
          imageCaption: `Table of contents, index, glossary. Tools to find info FAST!`,
          vocab: [
            { word: `contents`, definition: `A list at the FRONT showing chapters.`,
              audioPrompt: `Contents — short for table of contents — is a list at the front of a book showing what's in each chapter. Helps you see the whole book at a glance!` },
            { word: `index`,    definition: `A list at the BACK with topics in alphabetical order.`,
              audioPrompt: `An index is a list at the back of a book showing topics in alphabetical order with page numbers. Want to find penguins in an animal book? Check the index!` },
            { word: `glossary`, definition: `A list of important words with their definitions.`,
              audioPrompt: `A glossary is a list of important words and their definitions, usually at the back. Like a mini dictionary just for that book. Forgot a bold word? Check the glossary!` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 things you might see in a nonfiction book. Drag each — is it a HEADING, a CAPTION, or a GLOSSARY?`,
          buckets: [
            { id: `heading`,  label: `📌 HEADING (section title)`,    color: `#FBBF24` },
            { id: `caption`,  label: `🖼️ CAPTION (under a picture)`,  color: `#34D399` },
            { id: `glossary`, label: `📚 GLOSSARY (word definitions)`, color: `#A78BFA` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `What Penguins Eat`,
              matchPhrase: `Yes! That's a HEADING — a bold title at the start of a section!`,
              correctMatch: `heading` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `A penguin mother feeding her chick a small fish.`,
              matchPhrase: `Great! That's a CAPTION — a sentence telling you what a picture shows!`,
              correctMatch: `caption` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `Migration: when animals travel long distances at certain times of year.`,
              matchPhrase: `Yes! That's from a GLOSSARY — a word and its definition!`,
              correctMatch: `glossary` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `How Penguins Stay Warm`,
              matchPhrase: `Perfect! Another HEADING — a bold title for a new section!`,
              correctMatch: `heading` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is NONFICTION?`,
              options: [`Made-up stories`, `Writing about REAL things — true information`, `Only poems`, `Books with pictures only`],
              correctIndex: 1,
              explanation: `Nonfiction is writing about real things — true information. Opposite of fiction!` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is a HEADING in nonfiction?`,
              options: [`A bold title at the start of a section`, `The author's name`, `A type of cookie`, `The last sentence`],
              correctIndex: 0,
              explanation: `A heading is a bold title at the start of a section. Like a signpost guiding you!` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `Why do authors make some words BOLD?`,
              options: [`To make it fancy`, `To show which words are key vocabulary — important to learn`, `Because they made a mistake`, `For no reason`],
              correctIndex: 1,
              explanation: `Bold = key vocabulary. The author is saying "this word matters!"` },
            { id: `l12-q4`, format: `true-false`,
              question: `Captions under pictures often have information that's NOT in the main text.`,
              correctAnswer: true,
              explanation: `True! Captions are treasure chests of facts. Always read them!` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `A list at the BACK of a book showing topics alphabetically with page numbers is called an ___.`,
              options: [`index`, `apple`, `igloo`, `elephant`],
              correctIndex: 0,
              explanation: `Index! Like a search bar for the book. Super useful for finding info fast!` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Do you have to read every word of a nonfiction book in order?`,
              options: [`Yes, always`, `No — use headings, contents, and index to find what you need`, `Only on weekends`, `Only if you finish your vegetables`],
              correctIndex: 1,
              explanation: `No! Nonfiction is built for jumping around. Use the tools to find exactly what you need!` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Adults use nonfiction skills CONSTANTLY! Reading the news. Looking up how to fix something. Following a recipe. Reading instructions! All of it uses the same skills you're learning — finding headings, reading captions, using indexes. The better you get now, the easier life gets later!`,
          familyAdventure: `Find a NONFICTION book at home — about animals, history, science, sports. Open it to the FRONT. Look at the TABLE OF CONTENTS together. What chapters? Then open to the BACK. Is there an INDEX? A GLOSSARY? Practice looking up a topic. Make it a game!`,
          creativePrompt: `Make your OWN tiny nonfiction page about something you know well — your pet, a hobby, your hometown! Include: a HEADING at the top, a few sentences, one BOLD word as key vocabulary, and a PICTURE with a CAPTION!`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know how NONFICTION works! Headings. Bold words. Captions. Diagrams. Table of contents. Index. Glossary. These tools help you read real-world books smarter and faster. Real-world reading just got easier! Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L12] Loaded: "Nonfiction Features" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
