// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L18 — Punctuation and Capitalization Rules
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.L.2-3.2
// REWRITE v2 (May 2026): Grade 1 accessible, PERIOD/QUESTION/EXCLAMATION
// 3-bucket end-punctuation identification game (cleanest pedagogical test)
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L18 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-18`,
      title:     `Punctuation and Capitalization Rules`,
      duration:  12,
      xpReward:  50,
      badge:     `punctuation-explorer`,
      badgeName: `Punctuation Explorer`,

      screens: [

        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Today's lesson is about the little MARKS that make writing clear — PUNCTUATION! Periods. Commas. Question marks. Exclamation points. They're tiny, but without them, writing would be a confusing mess. They're like TRAFFIC SIGNS for readers!`,
          headline: `Punctuation and Capitalization Rules`,
          subtitle: `The little marks and big letters that make writing clear`,
          visual: `/explorer-assets/ela/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Traffic Signs for Readers`,
          paragraphs: [
            `Imagine driving with NO traffic signs. No stop signs. No traffic lights. Chaos, right?`,
            `Punctuation is to writing what traffic signs are to roads! Periods say STOP. Commas say SLOW DOWN. Question marks say RAISE YOUR VOICE. Exclamation points say GET EXCITED! Without these signs, readers wouldn't know how to navigate sentences. Punctuation is the silent guide of all good writing!`,
          ],
          image: `/explorer-assets/ela/l18-s1-traffic-signs.webp`,
          imageCaption: `Punctuation = traffic signs for readers!`,
          vocab: [
            { word: `punctuation`,  definition: `The marks that guide readers.`,
              audioPrompt: `Punctuation is marks like periods, commas, and question marks that guide readers through sentences. Tiny marks. Huge job. They tell readers where to pause, where to stop, where to get excited!` },
            { word: `traffic sign`, definition: `A sign that tells drivers what to do.`,
              audioPrompt: `A traffic sign tells drivers what to do — stop, slow down, yield. Punctuation is like traffic signs for readers. It tells them — stop here, pause here, raise your voice here!` },
            { word: `silent guide`, definition: `Something that helps without speaking.`,
              audioPrompt: `A silent guide is something that helps without speaking. Punctuation is the silent guide of writing. Good punctuation is invisible. Bad punctuation is loud and confusing!` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The PERIOD: Full Stop`,
          paragraphs: [
            `The most common punctuation mark is the PERIOD ( . )!`,
            `A period says: "This thought is COMPLETE. Stop here!" Every complete sentence ends with a period (unless it ends with a question mark or exclamation point). "I love books." (Period.) "The sun is bright." (Period.) When you read aloud, periods are when you take a breath!`,
          ],
          image: `/explorer-assets/ela/l18-s2-period.webp`,
          imageCaption: `Period — full stop. Marks the end of a sentence!`,
          vocab: [
            { word: `period`,   definition: `A dot ( . ) that ends a sentence. Means STOP.`,
              audioPrompt: `A period is a dot at the end of a sentence. It means STOP. Every complete sentence ends with a period — unless it ends with a question mark or exclamation point. Most common punctuation!` },
            { word: `complete`, definition: `Having all the parts.`,
              audioPrompt: `Complete means having all the parts. A complete sentence has a noun, a verb, and a full thought. It ends with a period. Periods belong on complete thoughts!` },
            { word: `breath`,   definition: `Air in and out.`,
              audioPrompt: `A breath is air in and out. Periods give readers a breath between thoughts. When you read aloud, you naturally pause at periods. That breath helps your brain absorb the thought!` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The COMMA: Brief Pause`,
          paragraphs: [
            `The COMMA ( , ) is shorter than a period! It says: "Slow down, but don't stop yet."`,
            `Commas separate ITEMS in a list: "I love apples, bananas, and grapes!" Commas come before names when talking TO someone: "Hi, Maya!" Commas come after introductory words: "Suddenly, the door opened!" Commas are gentle pauses. Used right, they make sentences smooth!`,
          ],
          image: `/explorer-assets/ela/l18-s3-comma.webp`,
          imageCaption: `Comma — slow down, but don't stop!`,
          vocab: [
            { word: `comma`, definition: `A small mark ( , ) — brief pause.`,
              audioPrompt: `A comma is a small mark that means a brief pause — not a full stop. Looks like a tiny tail at the bottom. Commas separate items in lists, come before names, and follow intro words!` },
            { word: `list`,  definition: `A series of things.`,
              audioPrompt: `A list is a series of things. Commas separate items in a list. "I love apples, bananas, and grapes." Each comma separates one item from the next!` },
            { word: `pause`, definition: `A short break.`,
              audioPrompt: `A pause is a short break. Commas signal a pause — not a full stop. Just a moment of breath. Without commas, sentences feel awkward. With them, sentences flow!` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Question Marks & Exclamation Points`,
          paragraphs: [
            `Some sentences end with SPECIAL marks instead of periods!`,
            `QUESTION MARK ( ? ) at the end of a question. "Are you hungry?" "What time is it?" Your voice goes UP at the end! EXCLAMATION POINT ( ! ) at the end of an exciting sentence. "I won!" "Look out!" Your voice gets LOUDER! Use them for the right moments — not all the time!`,
          ],
          image: `/explorer-assets/ela/l18-s4-question-exclaim.webp`,
          imageCaption: `Question mark = raise voice. Exclamation = get excited!`,
          vocab: [
            { word: `question mark`,     definition: `A mark ( ? ) at the end of a question.`,
              audioPrompt: `A question mark is a mark at the end of a question. Looks like a curvy thing with a dot. "Are you ready?" Your voice goes UP at the end. Tells readers — this sentence is asking!` },
            { word: `exclamation point`, definition: `A mark ( ! ) showing excitement or strong feeling.`,
              audioPrompt: `An exclamation point shows excitement, surprise, or strong feeling. "I won!" "Watch out!" The mark looks like a straight line with a dot under it. Use for strong moments!` },
            { word: `right moments`,     definition: `The correct times.`,
              audioPrompt: `Right moments means the correct times. Use exclamation points for the right moments — not all the time. If every sentence has one, none of them feel exciting. Save them for when they really matter!` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Quotation Marks: Someone Speaks`,
          paragraphs: [
            `QUOTATION MARKS ( " " ) go around the EXACT words someone says!`,
            `"I love books," said Quill. (Quill's exact words go in quotation marks.) "What's for dinner?" asked Maya. (Even questions go in quotation marks if someone said them aloud!) Quotation marks come in PAIRS — one at the start, one at the end. They tell readers: someone is speaking!`,
          ],
          image: `/explorer-assets/ela/l18-s5-quotation.webp`,
          imageCaption: `Quotation marks wrap around someone's exact words!`,
          vocab: [
            { word: `quotation marks`, definition: `Marks ( " " ) around someone's exact words.`,
              audioPrompt: `Quotation marks go around someone's exact spoken words. They look like little curvy commas at the top. They come in pairs — one before the speaking, one after!` },
            { word: `exact words`,     definition: `The words spoken, not summarized.`,
              audioPrompt: `Exact words means the words spoken, not summarized. Quotation marks contain exact words. If you change the words even a little, you don't use quotation marks!` },
            { word: `pairs`,           definition: `Two things that go together.`,
              audioPrompt: `Pairs means two things that go together. Quotation marks come in pairs. One at the start of the quote, one at the end. Like brackets around the speaking!` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Capital Letters: When They Belong`,
          paragraphs: [
            `Now for CAPITALIZATION. When do you use capital letters?`,
            `One — at the START of every sentence. "The dog ran fast." (Capital T!) Two — for PROPER NOUNS — names of specific people, places, days. Maya, New York, Tuesday, July! Three — for the word "I" — ALWAYS capital, even in the middle of a sentence! "My friend and I went home." Use capitals for these — not for random words!`,
          ],
          image: `/explorer-assets/ela/l18-s6-capital.webp`,
          imageCaption: `Capitals: sentence start, proper nouns, the word "I"!`,
          vocab: [
            { word: `capitalization`, definition: `Using capital letters in the right places.`,
              audioPrompt: `Capitalization is using capital letters in the right places. The start of sentences. Names of people and places. The word "I." Each has a specific job. Random capitals look strange!` },
            { word: `proper noun`,    definition: `A noun naming a SPECIFIC person, place, or thing.`,
              audioPrompt: `A proper noun is a noun naming a specific person, place, or thing. Maya. Quill. New York. Tuesday. July. All proper nouns. All capitalized — always!` },
            { word: `the word I`,     definition: `Always capitalized.`,
              audioPrompt: `The word "I" — when you talk about yourself — is ALWAYS capitalized. Anywhere in a sentence! "My friend and I went to the park." Always a capital I!` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sentences. Drag each one to the correct ending — period, question mark, or exclamation point!`,
          buckets: [
            { id: `period`,   label: `🛑 PERIOD (.)`,             color: `#FBBF24` },
            { id: `question`, label: `❓ QUESTION MARK (?)`,       color: `#34D399` },
            { id: `exclaim`,  label: `❗ EXCLAMATION POINT (!)`,    color: `#F87171` },
          ],
          items: [
            { id: `l18-g1`, image: `l18-game-1.webp`, label: `The sun is shining today`,
              matchPhrase: `Yes! That's a statement — it needs a PERIOD. A regular sentence ends with a period!`,
              correctMatch: `period` },
            { id: `l18-g2`, image: `l18-game-2.webp`, label: `What time is dinner`,
              matchPhrase: `Great! That's asking something — it needs a QUESTION MARK! Your voice goes up at the end!`,
              correctMatch: `question` },
            { id: `l18-g3`, image: `l18-game-3.webp`, label: `Watch out for that puddle`,
              matchPhrase: `Yes! That's a warning shout — it needs an EXCLAMATION POINT! Strong feeling!`,
              correctMatch: `exclaim` },
            { id: `l18-g4`, image: `l18-game-4.webp`, label: `My favorite color is blue`,
              matchPhrase: `Perfect! Another regular statement — needs a PERIOD!`,
              correctMatch: `period` },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What does a PERIOD do?`,
              options: [`Asks a question`, `Marks the end of a complete sentence — full stop`, `Shows excitement`, `Wraps around words`],
              correctIndex: 1,
              explanation: `A period marks the end of a complete sentence. It tells readers — STOP. This thought is done!` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `What is a COMMA used for?`,
              options: [`Ending sentences`, `Separating items in a list, before names, or after intro words — a brief pause`, `Shouting`, `Wrapping around quotes`],
              correctIndex: 1,
              explanation: `Commas separate items in lists, come before names ("Hi, Maya!"), and after intro words ("Suddenly, ..."). Brief pauses!` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `When do you use a QUESTION MARK?`,
              options: [`At the end of a question`, `At the start of every sentence`, `In the middle of a word`, `Never`],
              correctIndex: 0,
              explanation: `Question marks go at the END of questions! "Are you ready?" Your voice goes UP at the end!` },
            { id: `l18-q4`, format: `true-false`,
              question: `Quotation marks ( " " ) wrap around the EXACT words someone says.`,
              correctAnswer: true,
              explanation: `True! Quotation marks contain exact spoken words. They come in pairs — one before, one after!` },
            { id: `l18-q5`, format: `fill-blank`,
              question: `The word ___ is always capitalized, even in the middle of a sentence.`,
              options: [`I`, `dog`, `house`, `tree`],
              correctIndex: 0,
              explanation: `The word "I" is always capitalized! "My friend and I went to the park." Special rule just for "I"!` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `Which of these gets a CAPITAL letter?`,
              options: [`dog`, `Maya (a person's name)`, `apple`, `running`],
              correctIndex: 1,
              explanation: `Maya gets a capital — it's a proper noun (a specific person's name). General words like "dog" or "apple" don't get capitals unless they start a sentence!` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Punctuation can completely change what a sentence means! "Let's eat, Grandma!" (Inviting grandma to eat.) "Let's eat Grandma!" (Trying to eat grandma! Very different!) A single comma changes everything! People who care about punctuation care about being UNDERSTOOD!`,
          familyAdventure: `Find a kid-friendly book. Open to any page. Together, find each kind of punctuation: a period, a comma, a question mark, an exclamation point, quotation marks. Talk about what each is doing in that sentence. Every mark has a specific job!`,
          creativePrompt: `Write a SHORT story (4-6 sentences) and include ALL of these: a period, a comma, a question mark, an exclamation point, and quotation marks (someone speaks). Circle each one. Show how punctuation makes your story clearer!`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know the basics of PUNCTUATION and CAPITALIZATION! Periods stop. Commas pause. Question marks raise voices. Exclamation points get excited. Quotation marks wrap around speech. Capitals start sentences and mark proper nouns. Small marks, BIG differences! Quill is so proud!`,
          badge: `punctuation-explorer`,
          badgeName: `Punctuation Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L18;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L18.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L18] Loaded: "Punctuation" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
