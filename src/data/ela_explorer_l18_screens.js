// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L18 — Punctuation and Capitalization Rules
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.L.2-3.2
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
          guideText: `Welcome, {name}. Today's lesson is about the little MARKS that make writing clear — punctuation. Periods. Commas. Question marks. Exclamation points. Quotation marks. They're tiny. But without them, writing would be a confusing mess. They're like TRAFFIC SIGNS for readers. Today, you'll learn the basics. Let's go.`,
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
            `Imagine driving with NO traffic signs. No stop signs. No yield signs. No traffic lights.`,
            `Chaos, right? Punctuation is to writing what traffic signs are to roads. Periods say STOP. Commas say SLOW DOWN. Question marks say RAISE YOUR VOICE. Exclamation points say GET EXCITED. Without these signs, readers wouldn't know how to navigate sentences. Punctuation is the silent guide of all good writing.`,
          ],
          image: `/explorer-assets/ela/l18-s1-traffic-signs.webp`,
          imageCaption: `Punctuation = traffic signs for readers. Without them, writing is chaos. With them, it's clear.`,
          vocab: [
            { word: `punctuation`,    definition: `The marks like periods, commas, and question marks that guide readers.`,
              audioPrompt: `Punctuation, {name}, is the marks like periods, commas, and question marks that guide readers through sentences. Tiny marks. Huge job. They tell readers where to pause, where to stop, where to get excited, where someone is speaking. Without punctuation, sentences are confusing. With it, they're clear.` },
            { word: `traffic sign`,   definition: `A sign that tells drivers what to do. Punctuation is LIKE traffic signs.`,
              audioPrompt: `A traffic sign, {name}, tells drivers what to do — stop, slow down, yield. Punctuation is like traffic signs for readers. It tells them what to do — stop here, pause here, raise your voice here. Imagine roads with no traffic signs. Total chaos. Imagine writing with no punctuation. Same chaos.` },
            { word: `silent guide`,   definition: `Something that helps without speaking. Punctuation is the SILENT GUIDE of writing.`,
              audioPrompt: `A silent guide, {name}, is something that helps without speaking. Punctuation is the silent guide of writing. Readers don't even notice it most of the time. But it's quietly doing its job — pausing them, stopping them, raising their voices. Good punctuation is invisible. Bad punctuation is loud and confusing.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The PERIOD: Full Stop`,
          paragraphs: [
            `The most common punctuation mark is the PERIOD ( . )`,
            `A period says: "This thought is COMPLETE. Stop here." Every complete sentence ends with a period (unless it ends with a question mark or exclamation point). "I love books." (Period.) "The sun is bright." (Period.) When you read aloud, periods are when you take a breath. They give your reader space to absorb the thought.`,
          ],
          image: `/explorer-assets/ela/l18-s2-period.webp`,
          imageCaption: `Period — full stop. Marks the end of a complete sentence. Readers take a breath here.`,
          vocab: [
            { word: `period`,         definition: `A dot ( . ) that ends a complete sentence. Means STOP.`,
              audioPrompt: `A period, {name}, is a dot at the end of a sentence. It means STOP. Every complete sentence ends with a period — unless it ends with a question mark or exclamation point. The period is the most common punctuation mark.` },
            { word: `complete`,       definition: `Having all the parts. A COMPLETE sentence needs a period.`,
              audioPrompt: `Complete, {name}, means having all the parts. A complete sentence has a noun, a verb, and a full thought. It ends with a period. Incomplete sentences are called fragments — pieces of sentences that aren't whole. Periods belong on complete thoughts.` },
            { word: `breath`,         definition: `Air in and out. Periods give readers a BREATH between thoughts.`,
              audioPrompt: `A breath, {name}, is air in and out. Periods give readers a breath between thoughts. When you read aloud, you naturally pause and breathe at periods. That little breath is when your brain absorbs the thought you just read — before moving to the next one.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The COMMA: Brief Pause`,
          paragraphs: [
            `The COMMA ( , ) is shorter than a period. It says: "Slow down, but don't stop yet."`,
            `Commas separate ITEMS in a list: "I love apples, bananas, and grapes." Commas come before names when you're talking TO someone: "Hi, Maya!" Commas come after introductory words: "Suddenly, the door opened." Commas are gentle pauses. Used right, they make sentences smooth. Used wrong, they confuse.`,
          ],
          image: `/explorer-assets/ela/l18-s3-comma.webp`,
          imageCaption: `Comma — slow down, but don't stop. Separates lists, comes before names, after intro words.`,
          vocab: [
            { word: `comma`,          definition: `A small mark ( , ) that means a brief pause — not a full stop.`,
              audioPrompt: `A comma, {name}, is a small mark that means a brief pause — not a full stop. It looks like a tiny tail at the bottom of the line. Commas separate items in lists.` },
            { word: `list`,           definition: `A series of things. Commas separate items in a LIST.`,
              audioPrompt: `A list, {name}, is a series of things. Commas separate items in a list. 'I love apples, bananas, and grapes.' Each comma separates one item from the next. The last item usually has 'and' before it. Lists make writing clearer when you have multiple things to mention.` },
            { word: `pause`,          definition: `A short break. Commas signal a PAUSE in the sentence.`,
              audioPrompt: `A pause, {name}, is a short break. Commas signal a pause in the sentence. Not a full stop — just a moment of breath. Try reading 'I love apples bananas and grapes' without commas. Awkward, right? Now with commas: 'I love apples, bananas, and grapes.' Much smoother. Commas make sentences flow.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `QUESTION MARKS & EXCLAMATION POINTS`,
          paragraphs: [
            `Some sentences end with SPECIAL marks instead of periods.`,
            `QUESTION MARK ( ? ) at the end of a question. "Are you hungry?" "What time is it?" When you read aloud, your voice goes UP at the end. EXCLAMATION POINT ( ! ) at the end of an exciting sentence. "I won!" "Look out!" When you read aloud, your voice gets LOUDER. These marks tell readers: this isn't just a regular sentence. Use them for the right moments — not all the time!`,
          ],
          image: `/explorer-assets/ela/l18-s4-question-exclaim.webp`,
          imageCaption: `Question mark = raise voice ("?"). Exclamation point = get excited ("!"). Special endings.`,
          vocab: [
            { word: `question mark`,  definition: `A mark ( ? ) at the end of a question. Tells readers to raise their voice.`,
              audioPrompt: `A question mark, {name}, is a mark at the end of a question. It looks like a curvy thing with a dot. 'Are you ready?' That's a question. Your voice goes UP at the end when you read it. Question marks tell readers — this sentence is asking something, not telling.` },
            { word: `exclamation point`, definition: `A mark ( ! ) showing excitement, surprise, or strong feeling.`,
              audioPrompt: `An exclamation point, {name} — also called an exclamation mark — shows excitement, surprise, or strong feeling. 'I won! ' 'Watch out! ' The mark looks like a straight line with a dot under it. Use exclamation points for moments that really feel strong.` },
            { word: `right moments`,  definition: `The correct times. Use special marks for the RIGHT MOMENTS — not all the time.`,
              audioPrompt: `Right moments, {name}, means the correct times. Use exclamation points and question marks for the right moments — not all the time. If every sentence ends with an exclamation point, none of them feel exciting. Save them for when they really matter. That's how to keep their power.` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `QUOTATION MARKS: Someone Speaks`,
          paragraphs: [
            `QUOTATION MARKS ( " " ) go around the EXACT words someone says.`,
            `"I love books," said Quill. (The exact words "I love books" go in quotation marks.) "What's for dinner?" asked Maya. (Even questions go in quotation marks if someone said them out loud.) Quotation marks come in PAIRS — one at the start, one at the end. They tell readers: these are the EXACT words. Someone is speaking.`,
          ],
          image: `/explorer-assets/ela/l18-s5-quotation.webp`,
          imageCaption: `Quotation marks ( " " ) wrap around someone's exact words. Come in pairs. Show speaking.`,
          vocab: [
            { word: `quotation marks`, definition: `Marks ( " " ) that go around someone's exact spoken words.`,
              audioPrompt: `Quotation marks, {name}, are marks that go around someone's exact spoken words. They look like little curvy commas — one pair at the top of the line. They come in pairs: one before the speaking starts, one after it ends. They tell readers: these are the exact words someone said.` },
            { word: `exact words`,    definition: `The words spoken, not summarized. Quotation marks contain EXACT WORDS.`,
              audioPrompt: `Exact words, {name}, means the words spoken, not summarized. Quotation marks contain exact words. If Quill said 'I love books,' you'd write — Quill said, 'I love books.' If you change his words even a little, you don't use quotation marks. They're reserved for what was actually said.` },
            { word: `pairs`,          definition: `Two things that go together. Quotation marks come in PAIRS.`,
              audioPrompt: `Pairs, {name}, means two things that go together. Quotation marks come in pairs. One at the start of the quote, one at the end. Like brackets around the speaking. Without both, the reader doesn't know where the speaking begins and ends. Always remember to close your quotation marks.` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `CAPITAL LETTERS: When They Belong`,
          paragraphs: [
            `Now for CAPITALIZATION. When do you use capital letters?`,
            `One — at the START of every sentence. "The dog ran fast." (Capital T.) Two — for PROPER NOUNS — names of specific people, places, days. Maya, New York, Tuesday, July. (All capital.) Three — for the word "I" — always capital, even in the middle of a sentence. "My friend and I went home." Four — for the FIRST WORD inside quotation marks. "She said, 'Hello there!'" Use capitals for these — not for random words. Capital letters have a job too.`,
          ],
          image: `/explorer-assets/ela/l18-s6-capital.webp`,
          imageCaption: `Capitals: start of sentence, proper nouns, the word "I," first word in quotes. Specific jobs only.`,
          vocab: [
            { word: `capitalization`, definition: `Using capital letters in the right places.`,
              audioPrompt: `Capitalization, {name}, is using capital letters in the right places. Not just anywhere — the right places. The start of sentences. Names of people and places. The word 'I.' Capital letters at the start of quotes. Each has a specific job. Random capitals look strange.` },
            { word: `proper noun`,    definition: `A noun naming a SPECIFIC person, place, or thing. Always capitalized.`,
              audioPrompt: `A proper noun, {name}, is a noun naming a specific person, place, or thing. Maya. Quill. New York. Coreverse Academy. Tuesday. July. The Atlantic Ocean. All proper nouns. All capitalized — always. Different from regular nouns like 'dog' or 'city' or 'day' that aren't capitalized.` },
            { word: `the word I`,     definition: `When you talk about yourself. ALWAYS capitalized, anywhere in a sentence.`,
              audioPrompt: `The word 'I,' {name} — when you talk about yourself — is ALWAYS capitalized. Anywhere in a sentence. 'I went to the park. ' (Start of sentence — makes sense to be capital. ) 'My friend and I went to the park.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l18-g1`, image: `l18-game-1.webp`, label: `Punctuation marks are like TRAFFIC SIGNS — they guide readers through sentences.`,
              matchPhrase: `Yes! Periods say stop. Commas say pause. Question marks raise voice. Exclamation points show excitement. Each one is a signal for readers.`,
              correctMatch: `fact` },
            { id: `l18-g2`, image: `l18-game-2.webp`, label: `Names of people and places (proper nouns) always get CAPITAL letters.`,
              matchPhrase: `True! Maya, Quill, New York, Tuesday — all proper nouns, all capitalized. Specific names get capitals. Generic words like "city" or "day" don't.`,
              correctMatch: `fact` },
            { id: `l18-g3`, image: `l18-game-3.webp`, label: `Writing is clearer with NO punctuation at all.`,
              matchPhrase: `Definitely not! Writing without punctuation is confusing chaos. Readers can't tell where thoughts start and end. Punctuation makes writing clear.`,
              correctMatch: `myth` },
            { id: `l18-g4`, image: `l18-game-4.webp`, label: `EVERY WORD IN EVERY SENTENCE SHOULD BE IN ALL CAPITAL LETTERS.`,
              matchPhrase: `No way! All capitals is SHOUTING. Capitals have specific jobs — starts of sentences, proper nouns, the word "I." Not for everything.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What does a PERIOD do?`,
              options: [`Asks a question`, `Marks the end of a complete sentence — full stop`, `Shows excitement`, `Wraps around words`],
              correctIndex: 1,
              explanation: `A period marks the end of a complete sentence. It tells readers — STOP. This thought is done. Most sentences end with a period.` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `What is a COMMA used for?`,
              options: [`Ending complete sentences`, `Separating items in a list, before names, or after intro words — a brief pause`, `Shouting`, `Wrapping around quotes`],
              correctIndex: 1,
              explanation: `Commas separate items in lists ("apples, bananas, grapes"), come before names ("Hi, Maya!"), and after intro words ("Suddenly, ..."). They're brief pauses.` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `When do you use a QUESTION MARK?`,
              options: [`At the end of a question`, `At the start of every sentence`, `In the middle of a word`, `Never`],
              correctIndex: 0,
              explanation: `Question marks go at the END of questions. "Are you ready?" Your voice goes UP at the end when you read it aloud. They tell readers the sentence is asking something.` },
            { id: `l18-q4`, format: `true-false`,
              question: `Quotation marks ( " " ) wrap around the EXACT words someone says.`,
              correctAnswer: true,
              explanation: `True! Quotation marks contain exact spoken words. They come in pairs — one before the speech, one after. They tell readers: someone is speaking, and these are their exact words.` },
            { id: `l18-q5`, format: `fill-blank`,
              question: `The word ___ is always capitalized, even in the middle of a sentence.`,
              options: [`I`, `dog`, `house`, `tree`],
              correctIndex: 0,
              explanation: `The word "I" is always capitalized — even in the middle of a sentence. "My friend and I went to the park." It's a special rule just for "I."` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `Which of these gets a CAPITAL letter?`,
              options: [`dog`, `Maya (a person's name)`, `apple`, `running`],
              correctIndex: 1,
              explanation: `Maya gets a capital — it's a proper noun (a specific person's name). The other words are general — "dog" or "apple" or "running" don't get capitals unless they're at the start of a sentence.` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Punctuation can completely change what a sentence means. "Let's eat, Grandma!" (Inviting grandma to eat.) "Let's eat Grandma!" (Trying to eat grandma! Very different.) A single comma changes everything. People who care about punctuation are people who care about being UNDERSTOOD. Adults who write well — teachers, lawyers, doctors, scientists — all use punctuation carefully. It's that important.`,
          familyAdventure: `Find a kid-friendly book. Open to any page. Together, find each kind of punctuation mark: a period, a comma, a question mark, an exclamation point, quotation marks. Talk about what each one is doing in that sentence. Notice how every punctuation mark has a specific job. They're never random.`,
          creativePrompt: `Write a SHORT story (4-6 sentences) and include ALL of these: a period, a comma, a question mark, an exclamation point, and quotation marks (someone speaks). Underline or circle each one. Show how punctuation makes your story clearer to read.`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know the basics of PUNCTUATION and CAPITALIZATION. Periods stop. Commas pause. Question marks raise voices. Exclamation points get excited. Quotation marks wrap around speech. Capitals start sentences and mark proper nouns and the word "I." These are the small marks that make BIG differences. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L18] Loaded: "Punctuation and Capitalization Rules" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
