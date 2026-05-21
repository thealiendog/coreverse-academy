// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L20 — Research Skills: Finding and Using Sources
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.7-8
// REWRITE v2 (May 2026): Grade 1 accessible, RELIABLE/UNRELIABLE source
// evaluation game (binary skill), final lesson of ELA Explorer band
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L20 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-20`,
      title:     `Research Skills: Finding and Using Sources`,
      duration:  12,
      xpReward:  75,
      badge:     `ela-master`,
      badgeName: `ELA Master`,

      screens: [

        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! This is our LAST lesson together in ELA Explorer. We've come a long way! Today we end with something that ties EVERYTHING together — RESEARCH! Once you can research, you can learn anything. You become a LIFELONG LEARNER. Let's finish strong!`,
          headline: `Research Skills: Finding and Using Sources`,
          subtitle: `How to find answers about anything`,
          visual: `/explorer-assets/ela/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Curiosity Is a Superpower`,
          paragraphs: [
            `Some kids stop asking questions when they get older. They think they should already KNOW everything.`,
            `Don't be one of those kids! CURIOSITY is the most important superpower you can have! The people who change the world — scientists, inventors, doctors, artists — never stop asking questions. They wonder. They explore. They research! Stay curious your whole life. Today you'll learn how!`,
          ],
          image: `/explorer-assets/ela/l20-s1-curious-mind.webp`,
          imageCaption: `Curiosity is a superpower. Stay curious your whole life!`,
          vocab: [
            { word: `curiosity`,        definition: `Wanting to know about things.`,
              audioPrompt: `Curiosity is wanting to know about things. It's the engine of every discovery in history. Without curiosity, no one would have wondered why apples fall or how birds fly. Stay curious!` },
            { word: `superpower`,       definition: `An incredible ability.`,
              audioPrompt: `A superpower is an incredible ability. Curiosity is a real-life superpower. Curious people learn more, do more, and create more than people who aren't. It opens doors!` },
            { word: `lifelong learner`, definition: `Someone who keeps learning their whole life.`,
              audioPrompt: `A lifelong learner is someone who keeps learning their whole life. They never decide they already know enough. Research skills make lifelong learning possible — you can learn ANYTHING at ANY age!` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: Ask a QUESTION`,
          paragraphs: [
            `Research starts with a QUESTION! What do you want to know?`,
            `"How do plants grow?" "Why do whales sing?" "What was Ancient Egypt like?" "How do volcanoes form?" Good research questions are SPECIFIC! Not just "tell me about the ocean" — but "what lives in the deepest part of the ocean?" Specific questions lead to specific answers. Write it down — that's your STARTING POINT!`,
          ],
          image: `/explorer-assets/ela/l20-s2-ask-question.webp`,
          imageCaption: `Research starts with a question. The more SPECIFIC, the better!`,
          vocab: [
            { word: `question`,       definition: `Something you want to know.`,
              audioPrompt: `A question is something you want to know. Research starts with a question. Without one, you're just wandering. With one, you have direction!` },
            { word: `specific`,       definition: `Detailed and focused.`,
              audioPrompt: `Specific means detailed and focused. Specific questions lead to better answers. "Tell me about animals" is too broad. "How do owls hunt at night?" is specific. Easier to research!` },
            { word: `starting point`, definition: `Where you BEGIN.`,
              audioPrompt: `A starting point is where you begin. Your question is your research starting point. From there, you find sources, take notes, build understanding. It all starts with the question!` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: FIND Sources`,
          paragraphs: [
            `Once you have your question, you need SOURCES — places to find answers!`,
            `LIBRARIES have books on almost every topic. The LIBRARIAN can help! MUSEUMS have real artifacts and experts. KID-FRIENDLY WEBSITES (with a grown-up's help) can answer many questions! ENCYCLOPEDIAS are great starting points. EXPERTS — teachers, doctors, scientists — know lots in their field! Don't just use ONE source. Use SEVERAL!`,
          ],
          image: `/explorer-assets/ela/l20-s3-find-sources.webp`,
          imageCaption: `Sources = places to find answers. Use SEVERAL!`,
          vocab: [
            { word: `source`,  definition: `A place you get information.`,
              audioPrompt: `A source is a place you get information. Libraries are sources. Books are sources. Websites are sources. Experts are sources. The world is full of sources — researchers find the right ones!` },
            { word: `library`, definition: `A place full of books.`,
              audioPrompt: `A library is a place full of books, often free to use. Libraries are research treasure houses. Public libraries have thousands of books AND a librarian who helps you find the right one!` },
            { word: `several`, definition: `More than one.`,
              audioPrompt: `Several means more than one. Use several sources for good research. Why? Because one source can be wrong. By checking several, you confirm what's true!` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: TRUST the Right Sources`,
          paragraphs: [
            `Not every source is RELIABLE. Some sources have WRONG information!`,
            `RELIABLE sources: library books, encyclopedia articles, museum websites, science websites, expert authors! LESS RELIABLE: random blogs, social media posts, websites anyone can edit, made-up rumors. ALWAYS ASK A TRUSTED ADULT if you're not sure! Reliable sources have facts you can TRUST. That's the foundation of good research!`,
          ],
          image: `/explorer-assets/ela/l20-s4-trust-sources.webp`,
          imageCaption: `Reliable sources have trustworthy facts!`,
          vocab: [
            { word: `reliable`,      definition: `Trustworthy.`,
              audioPrompt: `Reliable means trustworthy. Reliable sources have correct information. Library books are reliable. Museum websites are reliable. They've been checked by experts!` },
            { word: `wrong`,         definition: `Not correct.`,
              audioPrompt: `Wrong means not correct. Some sources have wrong information. That's why we check several sources — to catch errors. Never trust just one source completely!` },
            { word: `trusted adult`, definition: `A grown-up you rely on.`,
              audioPrompt: `A trusted adult is a grown-up you rely on. Parents. Teachers. Grandparents. Librarians. If you're not sure if a source is reliable, ask them. They can spot suspicious sources fast!` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 4: Take Notes (In Your OWN Words)`,
          paragraphs: [
            `As you find answers, TAKE NOTES! But write them in your OWN WORDS — not exactly as the source says!`,
            `Copying word-for-word and pretending it's yours is called PLAGIARISM. That's not okay! Real researchers READ a source, UNDERSTAND it, then write the information in their own words! Like this: source says "Dolphins are highly intelligent marine mammals." Your notes say: "Dolphins are really smart ocean animals." Same idea — YOUR words!`,
          ],
          image: `/explorer-assets/ela/l20-s5-take-notes.webp`,
          imageCaption: `Take notes in your OWN words. Copying is plagiarism!`,
          vocab: [
            { word: `take notes`, definition: `Write down important facts.`,
              audioPrompt: `To take notes is to write down important facts from sources. Notes help you remember. They become the raw material for your final writing. Good researchers always take notes!` },
            { word: `own words`,  definition: `Words you write yourself.`,
              audioPrompt: `Your own words are words you write yourself. Always put notes in your own words. Read the source. Understand it. Then write the idea in your own way. That shows you really understand!` },
            { word: `plagiarism`, definition: `Copying and pretending it's yours.`,
              audioPrompt: `Plagiarism is copying someone else's words and pretending they're yours. It's NOT okay. Authors and scientists who plagiarize get in serious trouble. Always use your own words!` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You're a Lifelong Learner Now!`,
          paragraphs: [
            `Look at you, {name}. Twenty lessons ago, you started this journey. Now look how far you've come!`,
            `You can read fluently. You find main ideas, themes, and inferences. You analyze stories! You can write narratives, informational pieces, and opinions. You know grammar, punctuation, spelling. AND — now you can RESEARCH anything! That means you can learn ANYTHING. For the rest of your life! You are a LIFELONG LEARNER. The whole world of knowledge is yours. Go!`,
          ],
          image: `/explorer-assets/ela/l20-s6-lifelong-learner.webp`,
          imageCaption: `You're a lifelong learner now. The whole world is yours!`,
          vocab: [
            { word: `journey`,     definition: `A long trip.`,
              audioPrompt: `A journey is a long trip. You've completed a learning journey through ELA Explorer. Twenty lessons. Every lesson built on the ones before. Now you can read, write, and research!` },
            { word: `whole world`, definition: `Everything that exists to learn.`,
              audioPrompt: `The whole world means everything that exists to learn. The whole world of knowledge is yours to explore. Every book ever written. Every science ever discovered. All of it!` },
            { word: `go`,          definition: `Move forward.`,
              audioPrompt: `Go means move forward. Use what you've learned. Don't stop here. Read books. Write stories. Research questions that bug you. Stay curious! The lessons end here — but YOUR learning is just beginning!` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Last game of ELA Explorer, {name}! Here are 4 sources. Drag each — is it RELIABLE or UNRELIABLE?`,
          buckets: [
            { id: `reliable`,   label: `✅ RELIABLE (trustworthy)`,    color: `#34D399` },
            { id: `unreliable`, label: `⚠️ UNRELIABLE (be careful)`,  color: `#F87171` },
          ],
          items: [
            { id: `l20-g1`, image: `l20-game-1.webp`, label: `A library book about whales`,
              matchPhrase: `Yes! Library books are RELIABLE — they've been checked by editors and librarians!`,
              correctMatch: `reliable` },
            { id: `l20-g2`, image: `l20-game-2.webp`, label: `A rumor a friend heard at recess`,
              matchPhrase: `Great! Rumors are UNRELIABLE — no one checked if they're true!`,
              correctMatch: `unreliable` },
            { id: `l20-g3`, image: `l20-game-3.webp`, label: `A museum website about dinosaurs`,
              matchPhrase: `Yes! Museum websites are RELIABLE — written by scientists and experts!`,
              correctMatch: `reliable` },
            { id: `l20-g4`, image: `l20-game-4.webp`, label: `A random video where someone makes up facts`,
              matchPhrase: `Perfect! That's UNRELIABLE — anyone can post a video without checking facts!`,
              correctMatch: `unreliable` },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Last quiz of ELA Explorer, {name}!`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What's the FIRST step in research?`,
              options: [`Buy a notebook`, `Ask a specific question — what do you want to know?`, `Take a nap`, `Run around`],
              correctIndex: 1,
              explanation: `Ask a specific question! That's your starting point. The better your question, the better your research!` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `Which of these is a RELIABLE source?`,
              options: [`A library book`, `Random social media posts`, `Rumors at school`, `Made-up stories`],
              correctIndex: 0,
              explanation: `Library books are reliable. Written, edited, and selected by professionals. Random social media and rumors? Less so!` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `Why use SEVERAL sources?`,
              options: [`To make research take longer`, `Because one source can be wrong — multiple sources verify the facts`, `Because it's the law`, `Just for fun`],
              correctIndex: 1,
              explanation: `Multiple sources verify facts and show different angles. One source can have errors. Several together give a fuller picture!` },
            { id: `l20-q4`, format: `true-false`,
              question: `When taking notes, you should write information in your OWN words.`,
              correctAnswer: true,
              explanation: `True! Always rewrite in your own words. That shows you actually understand. Copying word-for-word is plagiarism!` },
            { id: `l20-q5`, format: `fill-blank`,
              question: `Copying someone else's words and pretending they're yours is called ___.`,
              options: [`plagiarism`, `pizza`, `painting`, `puzzle`],
              correctIndex: 0,
              explanation: `Plagiarism! Real researchers either rewrite in their own words or use quotation marks and credit the author!` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `Why is CURIOSITY one of the most important traits?`,
              options: [`It's not important`, `Because curious people learn more, discover more, and grow more their whole lives`, `Only on weekends`, `Just because`],
              correctIndex: 1,
              explanation: `Curious people learn more, discover more, and grow more — their whole lives. Stay curious. It's your superpower!` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The greatest minds in history were RESEARCHERS at heart. Einstein researched physics for decades. Marie Curie researched radioactivity. Jane Goodall researched chimpanzees! Today, scientists research every single day. The skills you learned today are the SAME skills they use. You're joining a long line of curious humans who change the world!`,
          familyAdventure: `Pick a QUESTION your family has wondered about! Maybe "how do rainbows form?" or "where did pasta come from?" Research it TOGETHER. Find at least TWO sources — a library book, a kid-friendly website. Take notes in your own words. Share what you learned at dinner!`,
          creativePrompt: `Make a "I want to know..." LIST! Write 5-10 questions you've always wondered about. Big ones (why is the sky blue?) or small ones (how do worms see?). Keep the list. Whenever you have time, pick one and research it! Your list is the start of a learning lifetime!`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `WONDERFUL, {name}! You did it! All TWENTY lessons of ELA Explorer — COMPLETE! You can read fluently. You find main ideas, themes, inferences. You write narratives, informational pieces, and opinions. You know grammar, punctuation, spelling. And now you can research ANYTHING! You're a reader, a writer, and a LIFELONG LEARNER. The whole world of words is open to you. Stay curious. Read widely. Write often. Keep going. Quill is SO proud of you. This is goodbye for ELA Explorer — but the beginning of your life as a lifelong learner. Go!`,
          badge: `ela-master`,
          badgeName: `ELA Master`,
          xpEarned: 75,
        },

      ],
    },
  ],
};

export default ELA_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L20.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L20] Loaded: "Research Skills" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
