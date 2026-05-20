// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L13 — Writing Paragraphs: Topic, Details, and Conclusion
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.1-3.1, W.1-3.2 — paragraph composition
// REWRITE v2 (May 2026): reading level lowered for 6yo accessibility,
// audio prompts shortened to ~30-40 words, identification game replaces
// fact/myth, linking words added per CCSS, two-tier creative prompt
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
          guideText: `Welcome, {name}! Big news today. For 12 lessons, you have been a READER. Today, you become a WRITER too! Every writer starts with one thing — a paragraph. Today we learn how to build one. Ready? Let's go!`,
          headline: `Writing Paragraphs: Topic, Details, and Conclusion`,
          subtitle: `The building block of writing — and how to build one yourself`,
          visual: `/explorer-assets/ela/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Turn to Write`,
          paragraphs: [
            `For 12 lessons, you have been a READER. You read stories. You found main ideas. You learned about characters and themes.`,
            `Today, something new! You become a WRITER. Every great writer started with one thing — a PARAGRAPH. A paragraph is a group of sentences all about ONE topic. Once you can write a strong paragraph, you can write stories, reports, even books one day. Let's build one together!`,
          ],
          image: `/explorer-assets/ela/l13-s1-writers-turn.webp`,
          imageCaption: `Your turn to write. Every writer started here — with one paragraph.`,
          vocab: [
            { word: `paragraph`,      definition: `A group of sentences all about ONE topic.`,
              audioPrompt: `A paragraph is a group of sentences all about ONE topic. A paragraph about dogs has sentences ALL about dogs. That's a paragraph!` },
            { word: `writer`,         definition: `A person who writes. Today, that's you.`,
              audioPrompt: `A writer is a person who writes. When YOU write a paragraph, you're a writer too! No book needed. Just words on a page.` },
            { word: `building block`, definition: `A small piece you use to make something bigger.`,
              audioPrompt: `A building block is a small piece you use to make something bigger. Bricks build houses. Paragraphs build stories and books!` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Sandwich Shape`,
          paragraphs: [
            `A good paragraph has a SHAPE. It looks like a SANDWICH!`,
            `TOP BREAD is the TOPIC SENTENCE — the first sentence. It tells what the paragraph is about. FILLING is the DETAILS — the middle sentences. They give facts and reasons. BOTTOM BREAD is the CONCLUSION — the last sentence. It wraps things up. Top + middle + bottom = a whole sandwich. A whole paragraph!`,
          ],
          image: `/explorer-assets/ela/l13-s2-sandwich.webp`,
          imageCaption: `A paragraph is a sandwich. Top bread = topic. Filling = details. Bottom bread = conclusion.`,
          vocab: [
            { word: `sandwich`,       definition: `A food with bread, filling, and bread. A paragraph has the same shape.`,
              audioPrompt: `A sandwich has bread on top, filling in the middle, and bread on the bottom. A paragraph is shaped just like one!` },
            { word: `shape`,          definition: `The form something has. Paragraphs have a sandwich shape.`,
              audioPrompt: `Shape is the form something has. Paragraphs have a sandwich shape — top, middle, and bottom!` },
            { word: `whole`,          definition: `Having all the parts. A whole paragraph has topic + details + conclusion.`,
              audioPrompt: `Whole means having ALL the parts. A whole paragraph has a topic, details, AND a conclusion. All three together!` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Part 1: TOPIC SENTENCE`,
          paragraphs: [
            `The FIRST sentence of a paragraph is the TOPIC SENTENCE. It tells the reader what the paragraph is about.`,
            `Here's an example: "Dogs make wonderful pets." That's a topic sentence! It tells you the paragraph will be about dogs being great pets. Topic sentences are short and clear. They open the door. Then the rest of the paragraph tells you more!`,
          ],
          image: `/explorer-assets/ela/l13-s3-topic-sentence.webp`,
          imageCaption: `Topic sentence — the first sentence. Tells what the paragraph is about. Short and clear.`,
          vocab: [
            { word: `topic sentence`, definition: `The first sentence of a paragraph. Tells what the paragraph is about.`,
              audioPrompt: `A topic sentence is the FIRST sentence of a paragraph. It tells the reader what the paragraph is about. Like a sign that says here comes the topic!` },
            { word: `announce`,       definition: `To tell people something is coming.`,
              audioPrompt: `To announce means to tell people something is coming. Topic sentences announce what the paragraph is about!` },
            { word: `promise`,        definition: `Something you say you'll do. A topic sentence makes a promise the paragraph keeps.`,
              audioPrompt: `A promise is something you say you'll do. A topic sentence promises what the paragraph will be about. The rest of the paragraph has to keep that promise!` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Part 2: SUPPORTING DETAILS`,
          paragraphs: [
            `The MIDDLE of the paragraph is the SUPPORTING DETAILS. They give reasons for the topic sentence.`,
            `If your topic sentence is "Dogs make wonderful pets," your details could be: "They are loyal and stay by your side." "They love to play and have fun." "They cheer you up when you're sad." Each detail SUPPORTS the topic. Good writers use LINKING WORDS like BECAUSE, ALSO, FIRST, and NEXT to connect their details. Linking words make the paragraph flow!`,
          ],
          image: `/explorer-assets/ela/l13-s4-supporting-details.webp`,
          imageCaption: `Supporting details — the middle. Each one supports the topic. Connect them with linking words.`,
          vocab: [
            { word: `supporting detail`, definition: `A sentence that backs up the topic sentence with a reason or example.`,
              audioPrompt: `A supporting detail is a sentence that gives a reason or example for the topic. Details prove the topic is true!` },
            { word: `prove`,          definition: `To show something is true.`,
              audioPrompt: `To prove means to show something is true. Supporting details prove the topic sentence with reasons and examples!` },
            { word: `linking words`,  definition: `Words that connect ideas. Like BECAUSE, ALSO, FIRST, and NEXT.`,
              audioPrompt: `Linking words connect your ideas. Words like BECAUSE, ALSO, FIRST, and NEXT help your sentences flow together. They make your paragraph easier to read!` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Part 3: CONCLUSION`,
          paragraphs: [
            `The LAST sentence is the CONCLUSION. It wraps everything up.`,
            `A conclusion doesn't add new information. It says the main idea again in fresh words. Example: "If you want a loyal friend, a dog might be the perfect pet for you!" See how it goes back to the topic? That wraps up the sandwich. Without a conclusion, the paragraph feels unfinished!`,
          ],
          image: `/explorer-assets/ela/l13-s5-conclusion.webp`,
          imageCaption: `Conclusion — the last sentence. Loops back to the topic. Makes the paragraph feel finished.`,
          vocab: [
            { word: `conclusion`,     definition: `The last sentence of a paragraph. Wraps everything up.`,
              audioPrompt: `A conclusion is the LAST sentence of a paragraph. It wraps everything up. Like the bottom of the sandwich!` },
            { word: `wrap up`,        definition: `To finish neatly. The conclusion wraps up the paragraph.`,
              audioPrompt: `To wrap up means to finish neatly. The conclusion wraps up the paragraph so it feels complete!` },
            { word: `loop back`,      definition: `To come back to where you started. Good conclusions loop back to the topic.`,
              audioPrompt: `Loop back means to come back to where you started. Good conclusions loop back to the topic — but in fresh words!` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Putting It All Together`,
          paragraphs: [
            `Here's a whole paragraph using all THREE parts!`,
            `TOPIC: "Recess is my favorite part of the day." DETAILS: "First, I get to run with my friends. Also, I can play soccer or make up new games. Next, the fresh air wakes me up for class." CONCLUSION: "Recess makes me happy — it's why I look forward to it every morning!" Topic + details + conclusion = a strong paragraph. That's the recipe!`,
          ],
          image: `/explorer-assets/ela/l13-s6-paragraph-power.webp`,
          imageCaption: `Topic + details + conclusion = a strong paragraph. The writing recipe!`,
          vocab: [
            { word: `recipe`,         definition: `A pattern that works every time. Paragraphs have a recipe.`,
              audioPrompt: `A recipe is a pattern that works every time. Topic + details + conclusion is the paragraph recipe!` },
            { word: `strong`,         definition: `Well-made and powerful. A whole paragraph is strong writing.`,
              audioPrompt: `Strong means well-made and powerful. A whole paragraph is strong writing — readers can follow it easily!` },
            { word: `everything`,     definition: `All things. Use the paragraph recipe for everything you write.`,
              audioPrompt: `Everything means all things. Use the paragraph recipe for EVERYTHING you write — stories, letters, reports, all of it!` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sentences from a paragraph about dogs. Drag each one to its correct part of the sandwich!`,
          buckets: [
            { id: `topic`,      label: `🥪 TOP — Topic Sentence`,      color: `#FBBF24` },
            { id: `detail`,     label: `🥬 FILLING — Supporting Detail`, color: `#34D399` },
            { id: `conclusion`, label: `🥪 BOTTOM — Conclusion`,         color: `#A78BFA` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `Dogs make wonderful pets.`,
              matchPhrase: `Yes! "Dogs make wonderful pets" is the TOPIC SENTENCE. It tells what the paragraph is about — dogs and why they're great!`,
              correctMatch: `topic` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `They are loyal and stay by your side.`,
              matchPhrase: `Great! That's a SUPPORTING DETAIL. It tells WHY dogs are wonderful — because they're loyal!`,
              correctMatch: `detail` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `They love to play games and have fun.`,
              matchPhrase: `Yes! That's another SUPPORTING DETAIL. It gives another reason dogs are wonderful — they're playful!`,
              correctMatch: `detail` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `If you want a loyal friend, get a dog!`,
              matchPhrase: `Perfect! That's the CONCLUSION. It wraps up the paragraph and reminds us of the main idea!`,
              correctMatch: `conclusion` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What are the THREE parts of a whole paragraph?`,
              options: [`Beginning, middle, end`, `Topic sentence, supporting details, conclusion`, `Title, picture, author`, `Bread, cheese, lettuce`],
              correctIndex: 1,
              explanation: `Topic sentence, supporting details, conclusion. That's the paragraph recipe! Topic opens. Details support. Conclusion wraps up.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What does a TOPIC SENTENCE do?`,
              options: [`Tells the reader what the paragraph is about`, `Ends the paragraph`, `Has only one letter`, `Is at the bottom`],
              correctIndex: 0,
              explanation: `The topic sentence tells the reader what the paragraph is about. It's the opener — the top bread of the sandwich!` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `What do SUPPORTING DETAILS do?`,
              options: [`They have nothing to do with the topic`, `They support the topic sentence with reasons or examples`, `They distract the reader`, `They are decoration`],
              correctIndex: 1,
              explanation: `Supporting details support the topic sentence with reasons or examples. They're the proof. They're the filling of the sandwich!` },
            { id: `l13-q4`, format: `true-false`,
              question: `The conclusion is the LAST sentence and wraps the paragraph up.`,
              correctAnswer: true,
              explanation: `True! The conclusion is the final sentence. It loops back to the topic and wraps things up — like the bottom bread!` },
            { id: `l13-q5`, format: `multiple-choice`,
              question: `Which of these is a LINKING WORD that connects ideas?`,
              options: [`Pizza`, `Mountain`, `Because`, `Banana`],
              correctIndex: 2,
              explanation: `Because! Linking words like BECAUSE, ALSO, FIRST, and NEXT connect your ideas and help your paragraph flow.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `If your topic sentence is "Dogs make wonderful pets," what should the details be about?`,
              options: [`Pizza`, `Cars`, `Reasons dogs are wonderful — loyal, playful, comforting`, `The weather`],
              correctIndex: 2,
              explanation: `The details should give reasons why dogs are wonderful pets. All sentences in a paragraph must stay on the SAME topic!` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The paragraph recipe doesn't stop with kids. GROWN-UPS use it too! Writers, teachers, doctors — even the emails your parents send today probably use topic + details + conclusion. It works because our brains LIKE this pattern. Tell us what's coming. Back it up. Wrap it up. Once you learn the recipe, you'll use it your whole life!`,
          familyAdventure: `Tonight at dinner, play the PARAGRAPH GAME! One person picks a topic — like "my favorite snack" or "the best day ever." Then they say a TOPIC SENTENCE out loud, then THREE supporting details, then a CONCLUSION. Other family members listen and clap when they hear each part. Take turns. Notice how easy it is to organize your thoughts this way!`,
          creativePrompt: `Write your VERY FIRST paragraph! Pick a topic you love — your pet, your favorite food, a place you like to go.

JUST STARTING? Write 3 sentences. ONE topic sentence + ONE detail + ONE conclusion.

READY FOR MORE? Write 5 sentences. ONE topic + THREE details + ONE conclusion.

Use these starters if you want: "My favorite ___ is ___." "First, ___." "Also, ___." "That's why I love ___!"

Read your paragraph out loud. Save it — it's the first of MANY!`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You are officially a WRITER! You learned the paragraph recipe — topic sentence, supporting details, conclusion. This recipe works for stories, for facts, AND for opinions. You'll use it in every writing lesson coming up. This is the foundation of ALL writing. Quill is so proud of you!`,
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
  console.log(`[LESSON-ELA-L13] Loaded: "Writing Paragraphs" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
