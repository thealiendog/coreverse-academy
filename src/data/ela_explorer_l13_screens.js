// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L13 — Writing Paragraphs: Topic, Details, and Conclusion
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.1-3
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L13 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-13`,
      title:     `Writing Paragraphs: Topic, Details, and Conclusion`,
      duration:  12,
      xpReward:  50,
      badge:     `paragraph-explorer`,
      badgeName: `Paragraph Explorer`,

      screens: [

        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. Big moment. For 12 lessons, we've been READING. Today — you become a WRITER. The building block of all writing is the PARAGRAPH. Master the paragraph, and you can write anything. Stories. Reports. Letters. Speeches. Books one day, maybe. It all starts here. The paragraph. Let's build one together.`,
          headline: `Writing Paragraphs: Topic, Details, and Conclusion`,
          subtitle: `The building block of all writing — and how to build one yourself`,
          visual: `/explorer-assets/ela/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Turn to Write`,
          paragraphs: [
            `For all our lessons so far, you've been a READER. Today you become a WRITER too.`,
            `Don't worry — every great writer started exactly where you are. With one paragraph. The PARAGRAPH is the building block of all writing. Once you can build a strong one, you can build long stories, big reports, even whole books one day. Paragraphs are how thoughts get organized on paper. Today, we'll build one together.`,
          ],
          image: `/explorer-assets/ela/l13-s1-writers-turn.webp`,
          imageCaption: `Your turn to write. Every great writer started where you are — with one paragraph.`,
          vocab: [
            { word: `paragraph`,      definition: `A group of sentences all about ONE topic. The building block of writing.`,
              audioPrompt: `A paragraph, {name}, is a group of sentences all about one topic. The building block of writing. A paragraph usually starts with an indented line — meaning it's pushed in a little from the left margin. All the sentences inside the paragraph work together. They all relate to the same idea. Master paragraphs, and you can write anything.` },
            { word: `writer`,         definition: `A person who writes. You're becoming a writer today.`,
              audioPrompt: `A writer, {name}, is a person who writes. Today, you're becoming a writer. Anyone who writes a paragraph is a writer. You don't have to write a book to be one. You don't have to be published. If you put words on a page, you're a writer. Welcome to the club.` },
            { word: `building block`, definition: `A basic unit you use to build something bigger. Paragraphs are writing's BUILDING BLOCKS.`,
              audioPrompt: `A building block, {name}, is a basic unit you use to build something bigger. Bricks build houses. Cells build bodies. Paragraphs build essays, stories, and books. The paragraph is the writing world's most important building block. Get good at the block, and you can build anything.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Sandwich Shape`,
          paragraphs: [
            `A good paragraph has a SHAPE. Think of it as a SANDWICH.`,
            `TOP BREAD = the TOPIC SENTENCE. The first sentence. It says what the paragraph is about. FILLING = the SUPPORTING DETAILS. The middle sentences. They give facts, examples, or reasons. BOTTOM BREAD = the CONCLUSION. The last sentence. It wraps things up. Top + filling + bottom = a complete sandwich. A complete paragraph. Three parts. Each one matters.`,
          ],
          image: `/explorer-assets/ela/l13-s2-sandwich.webp`,
          imageCaption: `A paragraph is a sandwich. Top bread = topic. Filling = details. Bottom bread = conclusion.`,
          vocab: [
            { word: `sandwich`,       definition: `A food with bread, filling, and bread. A paragraph is shaped like one.`,
              audioPrompt: `A sandwich, {name}, is a food with bread on top, filling in the middle, and bread on the bottom. A paragraph is shaped the same way. Top bread = topic sentence. Filling = supporting details. Bottom bread = conclusion. This is one of the easiest ways to picture how a paragraph works.` },
            { word: `shape`,          definition: `The form something has. Paragraphs have a SHAPE — sandwich shape.`,
              audioPrompt: `Shape, {name}, is the form something has. Paragraphs have a shape — sandwich shape. Top, middle, bottom. Every part has a purpose. When you build a paragraph, you build that shape. Skip the topic sentence — you have no top. Skip the conclusion — you have no bottom. Sandwich needs all three.` },
            { word: `complete`,       definition: `Having all the parts. A complete paragraph has topic + details + conclusion.`,
              audioPrompt: `Complete, {name}, means having all the parts. A complete paragraph has a topic sentence, supporting details, and a conclusion. Missing any of those — incomplete. Like a sandwich missing the bread. Complete paragraphs are satisfying to read. Readers know where they're going and how it wraps up.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Part 1: TOPIC SENTENCE`,
          paragraphs: [
            `The first sentence of a paragraph is the TOPIC SENTENCE. It tells the reader what's coming.`,
            `Example: "Dogs make wonderful pets." That's a topic sentence. It announces — this paragraph is going to be about dogs being wonderful pets. Topic sentences are usually CLEAR and SHORT. They don't try to say everything — they just open the door. The rest of the paragraph keeps the promise. Good topic sentences make readers want to keep reading.`,
          ],
          image: `/explorer-assets/ela/l13-s3-topic-sentence.webp`,
          imageCaption: `Topic sentence — the first sentence. Announces what the paragraph is about. Clear and short.`,
          vocab: [
            { word: `topic sentence`, definition: `The first sentence of a paragraph. Announces what the paragraph is about.`,
              audioPrompt: `A topic sentence, {name}, is the first sentence of a paragraph. It announces what the paragraph is about. Like a headline for the paragraph. 'Dogs make wonderful pets.' 'Recess is my favorite time of day.' 'Volcanoes are powerful natural events.' All clear topic sentences. They tell the reader exactly what's coming.` },
            { word: `announce`,       definition: `To tell people something is coming. Topic sentences ANNOUNCE the paragraph's idea.`,
              audioPrompt: `To announce, {name}, is to tell people something is coming. Topic sentences announce the paragraph's idea. They're like a teacher saying 'today we're going to learn about volcanoes.' Now the listeners know what to expect. A good topic sentence makes the reader's job easier — they know what's coming.` },
            { word: `promise`,        definition: `Something you say you'll do. Topic sentences make a PROMISE the paragraph must keep.`,
              audioPrompt: `A promise, {name}, is something you say you'll do. Topic sentences make a promise. If your topic sentence says 'dogs are great pets,' the rest of the paragraph has to be ABOUT dogs being great pets. Not about cats. Not about pizza. The paragraph has to KEEP the promise the topic sentence made. That's how good writing works.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Part 2: SUPPORTING DETAILS`,
          paragraphs: [
            `The MIDDLE of the paragraph is the SUPPORTING DETAILS. These prove the topic sentence.`,
            `If your topic sentence is "Dogs make wonderful pets," supporting details might be: "They are loyal and stick by your side." "They love to play and keep you active." "They sense when you're sad and try to comfort you." Each detail SUPPORTS the topic sentence. Each one is a reason or example. Usually 2-4 supporting details is just right. They're the heart of the paragraph.`,
          ],
          image: `/explorer-assets/ela/l13-s4-supporting-details.webp`,
          imageCaption: `Supporting details — the middle of the paragraph. Each one supports the topic. Usually 2-4 details.`,
          vocab: [
            { word: `supporting detail`, definition: `A sentence that backs up the topic sentence with a fact, reason, or example.`,
              audioPrompt: `A supporting detail, {name}, is a sentence that backs up the topic sentence with a fact, reason, or example. Supporting details are the PROOF that the topic sentence is true. They're the meat of the sandwich. Without supporting details, the topic sentence is just a claim. With them, it becomes convincing.` },
            { word: `prove`,          definition: `To show something is true. Supporting details PROVE the topic sentence.`,
              audioPrompt: `To prove, {name}, is to show something is true. Supporting details prove the topic sentence. The topic sentence makes a claim. The details give evidence. Together, they make the paragraph believable. Without proof, claims don't hold up. With proof, they become powerful.` },
            { word: `reason`,         definition: `Why something is true. Supporting details give REASONS.`,
              audioPrompt: `A reason, {name}, is why something is true. Supporting details give reasons. 'Dogs are great pets — because they're loyal, because they're playful, because they sense your moods.' Each 'because' is a reason. The more good reasons you have, the stronger your paragraph. Reasons are the muscle of writing.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Part 3: CONCLUSION`,
          paragraphs: [
            `The LAST sentence is the CONCLUSION. It wraps things up.`,
            `A conclusion sentence doesn't add new info. It REPEATS the main idea in a fresh way. It might also leave the reader with a thought. Example: "If you want a loyal friend, a dog might be the perfect pet for you." See how it loops back to the topic? It wraps up the sandwich. Without a conclusion, paragraphs feel like they just STOP. With one, they feel finished.`,
          ],
          image: `/explorer-assets/ela/l13-s5-conclusion.webp`,
          imageCaption: `Conclusion — the last sentence. Loops back to the topic. Wraps things up. Makes the paragraph feel finished.`,
          vocab: [
            { word: `conclusion`,     definition: `The last sentence of a paragraph. Wraps everything up.`,
              audioPrompt: `A conclusion, {name}, is the last sentence of a paragraph. It wraps everything up. It might repeat the main idea in fresh words. It might leave the reader thinking. What it doesn't do is introduce brand new information. The conclusion's job is to CLOSE the paragraph, not open new ones.` },
            { word: `wrap up`,        definition: `To finish neatly. The conclusion WRAPS UP the paragraph.`,
              audioPrompt: `To wrap up, {name}, is to finish neatly. The conclusion wraps up the paragraph. Like tying a bow on a present. A wrapped-up paragraph feels complete. Readers know they're done. Without wrapping up, paragraphs feel like a thought left hanging. The conclusion is the tidy ending.` },
            { word: `loop back`,      definition: `To return to where you started. Good conclusions LOOP BACK to the topic sentence.`,
              audioPrompt: `Loop back, {name}, means to return to where you started. Good conclusions loop back to the topic sentence. They remind the reader of the main idea — but in fresh words. It's like coming home after a journey. You ended where you started, but you've learned something along the way.` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Putting It All Together`,
          paragraphs: [
            `Here's a complete paragraph using all THREE parts.`,
            `TOPIC: "Recess is the best part of my school day." DETAILS: "I get to run around with my friends. I can play soccer or invent new games. The fresh air wakes me up for the rest of class." CONCLUSION: "Recess gives me energy and joy — it's why I look forward to lunchtime every morning." Topic + details + conclusion = a strong paragraph. That's the formula. Use it for everything you write.`,
          ],
          image: `/explorer-assets/ela/l13-s6-paragraph-power.webp`,
          imageCaption: `Topic + details + conclusion = a strong paragraph. The formula for writing power.`,
          vocab: [
            { word: `formula`,        definition: `A pattern that works every time. Topic + details + conclusion is the paragraph FORMULA.`,
              audioPrompt: `A formula, {name}, is a pattern that works every time. Topic sentence + supporting details + conclusion is the paragraph formula. It works for any topic. It works at any age. Adults use this same formula in work writing. Authors use it in books. It's that fundamental. Learn it now. Use it forever.` },
            { word: `strong`,         definition: `Powerful and well-built. A complete paragraph is STRONG writing.`,
              audioPrompt: `Strong, {name}, means powerful and well-built. A complete paragraph is strong writing. It says something. It backs it up. It wraps up cleanly. Readers trust strong writing. They follow strong writing easily. Building strong paragraphs is one of the most important writing skills you'll ever learn.` },
            { word: `everything`,     definition: `All things. Use the paragraph formula for EVERYTHING you write.`,
              audioPrompt: `Everything, {name}, means all things. Use the paragraph formula for everything you write. Reports. Stories. Letters. Emails one day. Even text messages can use it. The formula doesn't go away as you grow up. It just gets used in bigger and bigger ways. Master it now.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `The topic sentence is the FIRST sentence and announces what the paragraph is about.`,
              matchPhrase: `Yes! Topic sentence = the opener. It tells readers what's coming. Clear and short. Like a headline for the paragraph.`,
              correctMatch: `fact` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `Supporting details SUPPORT the topic sentence with facts, reasons, or examples.`,
              matchPhrase: `True! Supporting details are the proof. They back up the topic sentence with facts, reasons, examples. Usually 2-4 details is just right.`,
              correctMatch: `fact` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `A paragraph is just ONE single sentence — no need for more.`,
              matchPhrase: `Not at all! A paragraph has multiple sentences working together. Topic sentence + supporting details + conclusion = the formula.`,
              correctMatch: `myth` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `It's fine to stuff a paragraph with random sentences about pizza, dinosaurs, and weather all together.`,
              matchPhrase: `Definitely not! All sentences in a paragraph should be about the SAME topic. Random unrelated sentences confuse readers.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What are the THREE parts of a complete paragraph?`,
              options: [`Beginning, middle, end`, `Topic sentence, supporting details, conclusion`, `Title, picture, author`, `Bread, cheese, lettuce`],
              correctIndex: 1,
              explanation: `Topic sentence, supporting details, conclusion. That's the paragraph formula. Topic announces. Details support. Conclusion wraps up.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What does a TOPIC SENTENCE do?`,
              options: [`Tells the reader what the paragraph is about`, `Ends the paragraph`, `Has only one letter`, `Has nothing to do with anything`],
              correctIndex: 0,
              explanation: `The topic sentence tells the reader what the paragraph is about. It's the opener. The announcement. The headline for the paragraph.` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `What do SUPPORTING DETAILS do?`,
              options: [`They distract from the topic`, `They support the topic sentence with facts, reasons, or examples`, `They have nothing to do with the topic`, `They're decoration`],
              correctIndex: 1,
              explanation: `Supporting details support the topic sentence with facts, reasons, or examples. They're the proof. They make the paragraph believable.` },
            { id: `l13-q4`, format: `true-false`,
              question: `The conclusion is the LAST sentence and wraps the paragraph up.`,
              correctAnswer: true,
              explanation: `True! The conclusion is the final sentence. It loops back to the topic and wraps things up. Makes the paragraph feel finished.` },
            { id: `l13-q5`, format: `fill-blank`,
              question: `A paragraph is the ___ block of all writing.`,
              options: [`building`, `swimming`, `pizza`, `sleeping`],
              correctIndex: 0,
              explanation: `Building! The paragraph is the building block of all writing. Master paragraphs, and you can build stories, reports, essays, and books.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `If your topic sentence is "Dogs make wonderful pets," what should the supporting details be about?`,
              options: [`Pizza`, `Cars`, `Reasons why dogs make wonderful pets — loyal, playful, comforting`, `The weather`],
              correctIndex: 2,
              explanation: `The supporting details should be reasons why dogs make wonderful pets — like they're loyal, playful, and comforting. All details must support the topic sentence.` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The paragraph formula doesn't stop in elementary school. PROFESSIONAL WRITERS use it. Journalists. Lawyers. Scientists. Business writers. Even the email your parents wrote to your teacher this morning probably uses topic sentence + details + conclusion. The reason it works is simple — it matches how human brains take in information. Lead. Back up. Wrap up. Once learned, never forgotten.`,
          familyAdventure: `Tonight at dinner, play PARAGRAPH GAME. One person picks a topic — "my favorite snack" or "the best day ever." Then they speak a TOPIC SENTENCE out loud, then THREE supporting details, then a CONCLUSION. Other family members listen and clap when they hear each part. Take turns. Notice how easy it is to organize thoughts this way.`,
          creativePrompt: `Write your VERY FIRST paragraph. Pick a topic you love — your pet, your favorite food, a fun place. Write ONE topic sentence. Write THREE supporting details. Write ONE conclusion that loops back. That's 5 sentences total. Read your paragraph aloud. Notice how complete it feels. Save it — it's the first of many.`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You are now officially a WRITER. You know the paragraph formula — topic sentence, supporting details, conclusion. The same formula adults use for everything from emails to reports to articles. This is the foundation of all writing. From here on, every writing skill builds on this. I'm proud of you. Thank you for journeying with me.`,
          badge: `paragraph-explorer`,
          badgeName: `Paragraph Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L13;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L13.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L13] Loaded: "Writing Paragraphs: Topic, Details, and Conclusion" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
