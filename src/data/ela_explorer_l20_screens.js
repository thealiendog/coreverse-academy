// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L20 — Research Skills: Finding and Using Sources
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.7-8
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
          guideText: `Hello, {name}. This is our LAST lesson together in ELA Explorer. We've come a long way. Today we end with something that ties EVERYTHING together — RESEARCH. Research is how you find answers about anything in the world. Once you can research, you can learn anything. You can answer your own questions. You become a LIFELONG LEARNER. Let's finish strong.`,
          headline: `Research Skills: Finding and Using Sources`,
          subtitle: `How to find answers about anything — and become a lifelong learner`,
          visual: `/explorer-assets/ela/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Curiosity Is a Superpower`,
          paragraphs: [
            `Some kids stop asking questions when they get older. They think they should already KNOW everything.`,
            `Don't be one of those kids. CURIOSITY is the most important superpower you can have. The people who change the world — scientists, inventors, doctors, artists, leaders — never stop asking questions. They wonder. They explore. They research. They look stuff up. Stay curious your whole life. Today, you'll learn how to feed that curiosity through RESEARCH.`,
          ],
          image: `/explorer-assets/ela/l20-s1-curious-mind.webp`,
          imageCaption: `Curiosity is a superpower. Stay curious your whole life. World-changers always do.`,
          vocab: [
            { word: `curiosity`,      definition: `Wanting to know about things. CURIOSITY is one of the most important traits a person can have.`,
              audioPrompt: `Curiosity, {name}, is wanting to know about things. It's the engine of every discovery in human history. Without curiosity, no one would have wondered why apples fall, or how birds fly, or what stars are made of. Stay curious. Ask 'why?' often. The world rewards curious people.` },
            { word: `superpower`,     definition: `An incredible ability. Curiosity is a real-life SUPERPOWER.`,
              audioPrompt: `A superpower, {name}, is an incredible ability. Curiosity is a real-life superpower. People who stay curious learn more, do more, and create more than people who don't. They discover things. They invent. They write. They build. Curiosity opens doors that closed-mindedness keeps shut.` },
            { word: `lifelong learner`, definition: `Someone who keeps learning their whole life. Research skills make you a LIFELONG LEARNER.`,
              audioPrompt: `A lifelong learner, {name}, is someone who keeps learning their whole life. They never decide they already know enough. They keep asking questions. They keep researching. They keep growing. Research skills are what make lifelong learning possible. Once you have them, you can learn ANYTHING at ANY age.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: Ask a QUESTION`,
          paragraphs: [
            `Research starts with a QUESTION. What do you want to know?`,
            `"How do plants grow?" "Why do whales sing?" "What was life like in Ancient Egypt?" "How do volcanoes form?" Good research questions are SPECIFIC. Not just "tell me about the ocean" — but "what lives at the bottom of the deepest ocean?" Specific questions lead to specific answers. Write down your question. That's your STARTING POINT. Everything else flows from there.`,
          ],
          image: `/explorer-assets/ela/l20-s2-ask-question.webp`,
          imageCaption: `Research starts with a question. The more SPECIFIC, the better. Write it down.`,
          vocab: [
            { word: `question`,       definition: `Something you want to know. Research starts with a QUESTION.`,
              audioPrompt: `A question, {name}, is something you want to know. Research starts with a question. Without a question, you're just wandering. With a question, you have direction. The better your question, the better your research. Always start by writing down what you really want to know.` },
            { word: `specific`,       definition: `Detailed and focused. SPECIFIC questions lead to better answers than vague ones.`,
              audioPrompt: `Specific, {name}, means detailed and focused. Specific questions lead to better answers. Tell me about animals is too broad. How do owls hunt at night? is specific. Specific questions are easier to research. They give you a clear target. Always make your questions as specific as you can.` },
            { word: `starting point`, definition: `Where you BEGIN. Your question is your research STARTING POINT.`,
              audioPrompt: `A starting point, {name}, is where you begin. Your question is your research starting point. From there, you go find sources. Take notes. Build understanding. But it all starts with that question. Without it, you have no map. Write your question down first. Then start exploring.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: FIND Sources`,
          paragraphs: [
            `Once you have your question, you need SOURCES — places to find answers.`,
            `LIBRARIES have books on almost every topic. The LIBRARIAN can help you find the right one. MUSEUMS have real artifacts and experts. KID-FRIENDLY WEBSITES (with a grown-up's help) can answer many questions. ENCYCLOPEDIAS, both online and in books, are great starting points. EXPERTS — like teachers, doctors, scientists — know lots in their field. Don't just use ONE source. Use SEVERAL. More sources = better research.`,
          ],
          image: `/explorer-assets/ela/l20-s3-find-sources.webp`,
          imageCaption: `Sources = places to find answers. Libraries, museums, websites, experts. Use SEVERAL, not just one.`,
          vocab: [
            { word: `source`,         definition: `A place you get information. Libraries, websites, and experts are all SOURCES.`,
              audioPrompt: `A source, {name}, is a place you get information. Libraries are sources. Books are sources. Websites are sources. Experts are sources. Documentaries are sources. The world is full of sources. Researchers find the right ones for their question.` },
            { word: `library`,        definition: `A place full of books, often free to use. LIBRARIES are research treasure houses.`,
              audioPrompt: `A library, {name}, is a place full of books, often free to use. Libraries are research treasure houses. Public libraries have thousands of books and a librarian who helps you find the right one.` },
            { word: `several`,        definition: `More than one. Use SEVERAL sources for good research.`,
              audioPrompt: `Several, {name}, means more than one. Use several sources for good research. Why? Because one source can be wrong. Or limited. Or out of date. By checking several, you confirm what's true. You also see different angles on the topic. Always use several sources, never just one.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: TRUST the Right Sources`,
          paragraphs: [
            `Not every source is RELIABLE. Some sources have wrong information.`,
            `RELIABLE sources include: library books from libraries, encyclopedia articles, museum websites, government science websites, university websites, expert authors. LESS RELIABLE: random people's blogs, social media posts, websites that look unprofessional, anything anyone can edit without checking. ALWAYS ASK A TRUSTED ADULT if you're not sure. Reliable sources have facts you can TRUST. That's the foundation of good research.`,
          ],
          image: `/explorer-assets/ela/l20-s4-trust-sources.webp`,
          imageCaption: `Reliable sources have trustworthy facts. Library books, museums, experts. Always check with a grown-up.`,
          vocab: [
            { word: `reliable`,       definition: `Trustworthy. RELIABLE sources have correct information you can trust.`,
              audioPrompt: `Reliable, {name}, means trustworthy. Reliable sources have correct information you can trust. Library books are usually reliable. Museum websites are reliable. Government science websites are reliable. Reliable sources have been checked by experts. Their information is more likely to be true.` },
            { word: `wrong`,          definition: `Not correct. Some sources have WRONG information. That's why we check several.`,
              audioPrompt: `Wrong, {name}, means not correct. Some sources have wrong information. That's why we check several sources, to catch errors. It's why we use reliable sources, to start with information that's more likely to be true. Never trust just one source completely. Always verify.` },
            { word: `trusted adult`,  definition: `A grown-up you rely on. Ask a TRUSTED ADULT if a source seems off.`,
              audioPrompt: `A trusted adult, {name}, is a grown-up you rely on. Parents. Teachers. Grandparents. Librarians. If you're not sure if a source is reliable, ask them. They've had more practice. They can spot suspicious sources faster. Always check with a trusted adult when something feels off. Better safe than wrong.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 4: TAKE NOTES (In Your Own Words)`,
          paragraphs: [
            `As you find answers, TAKE NOTES. But write them in your OWN WORDS — not exactly as the source says.`,
            `Copying word-for-word and pretending it's yours is called PLAGIARISM. That's not okay. Real researchers READ a source, UNDERSTAND it, then write the information in their own words. Like this: source says "Dolphins are highly intelligent marine mammals." Your notes say: "Dolphins are really smart ocean animals." Same idea — your words. That's research done right.`,
          ],
          image: `/explorer-assets/ela/l20-s5-take-notes.webp`,
          imageCaption: `Take notes in your OWN words. Read, understand, rewrite. Copying word-for-word is called plagiarism — not okay.`,
          vocab: [
            { word: `take notes`,     definition: `Write down important facts from sources. Notes help you remember.`,
              audioPrompt: `To take notes, {name}, is to write down important facts from sources. Notes help you remember. They become the raw material for your final writing. Without notes, you'd forget half of what you learn. Good researchers always take notes as they read.` },
            { word: `own words`,      definition: `Words you write yourself. Always put notes in YOUR OWN WORDS, not the source's.`,
              audioPrompt: `Your own words, {name}, means words you write yourself. Always put notes in your own words. Read what the source says. Make sure you understand it. Then write the idea in your own way. This proves you really understand. Just copying doesn't show understanding.` },
            { word: `plagiarism`,     definition: `Copying someone else's words and pretending they're yours. NOT okay.`,
              audioPrompt: `Plagiarism, {name}, is copying someone else's words and pretending they're yours. It's not okay. Authors, scientists, and journalists who plagiarize get in serious trouble. Even just one or two sentences copied without crediting the author is plagiarism.` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You're a Lifelong Learner Now`,
          paragraphs: [
            `Look at you, {name}. Twenty lessons ago, you started this journey. Now look how far you've come.`,
            `You can read fluently. You can find main ideas, themes, and inferences. You know how to analyze stories. You can write narratives, informational pieces, and opinions. You know grammar, punctuation, spelling. AND — now you can RESEARCH anything. That means you can learn ANYTHING. For the rest of your life. You are a LIFELONG LEARNER. The whole world of knowledge is yours to explore. Go.`,
          ],
          image: `/explorer-assets/ela/l20-s6-lifelong-learner.webp`,
          imageCaption: `You're a lifelong learner now. The whole world of knowledge is yours. Go explore.`,
          vocab: [
            { word: `journey`,        definition: `A long trip. You've completed a LEARNING JOURNEY through ELA.`,
              audioPrompt: `A journey, {name}, is a long trip. You've completed a learning journey through ELA Explorer. Twenty lessons. From fluency to research. From reading skills to writing skills to mechanics. Every lesson built on the ones before.` },
            { word: `whole world`,    definition: `Everything that exists to learn. The WHOLE WORLD of knowledge is yours.`,
              audioPrompt: `The whole world, {name}, means everything that exists to learn. The whole world of knowledge is yours to explore. Every book ever written. Every science ever discovered. Every culture ever created. Every art ever made. All of it.` },
            { word: `go`,             definition: `Move forward. Now GO use everything you've learned.`,
              audioPrompt: `Go, {name}. That's a single small word. But it carries a huge meaning. Go means move forward. Use what you've learned. Don't just stop here. Read books. Write stories. Research questions that bug you. Stay curious. The lessons end here, but YOUR learning is just beginning.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Last game of our ELA Explorer journey, {name}!`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l20-g1`, image: `l20-game-1.webp`, label: `Good researchers use SEVERAL sources, not just one.`,
              matchPhrase: `Yes! One source can be wrong, limited, or out of date. Using several lets you check facts and see different angles. More sources = better research.`,
              correctMatch: `fact` },
            { id: `l20-g2`, image: `l20-game-2.webp`, label: `Real researchers rewrite information in their OWN words instead of copying.`,
              matchPhrase: `True! Read, understand, then rewrite in your own words. That proves you really understand. Copying word-for-word is called plagiarism — not okay.`,
              correctMatch: `fact` },
            { id: `l20-g3`, image: `l20-game-3.webp`, label: `Just grab the very first answer you find — no need to check if it's right.`,
              matchPhrase: `Not at all! The first answer might be wrong, incomplete, or from an unreliable source. Always check more than one source. Verify facts. That's how good research works.`,
              correctMatch: `myth` },
            { id: `l20-g4`, image: `l20-game-4.webp`, label: `It's okay to copy whole sentences from books and pretend the words are yours.`,
              matchPhrase: `Definitely not! That's called PLAGIARISM and it's not okay. Real researchers either rewrite in their own words or use quotation marks and credit the original author.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Last quiz of our ELA Explorer journey, {name}!`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What's the FIRST step in research?`,
              options: [`Buy a fancy notebook`, `Ask a specific question — what do you want to know?`, `Take a nap`, `Run around the room`],
              correctIndex: 1,
              explanation: `Ask a specific question. That's your starting point. The better your question, the better your research. Without a question, you're just wandering.` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `Which of these is a RELIABLE source?`,
              options: [`A library book from the library`, `Random social media posts`, `Rumors at school`, `Made-up stories from strangers`],
              correctIndex: 0,
              explanation: `Library books are reliable. They've been written, edited, and selected by professionals. Museum sites, encyclopedias, expert authors are also reliable. Random social media and rumors? Less so.` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `Why use SEVERAL sources instead of just one?`,
              options: [`To make research take longer`, `Because one source can be wrong, limited, or out of date — multiple sources verify the facts`, `Because it's the law`, `Just for fun`],
              correctIndex: 1,
              explanation: `Multiple sources help you verify facts and see different angles. One source can have errors. Several sources together give you a fuller, more accurate picture.` },
            { id: `l20-q4`, format: `true-false`,
              question: `When taking research notes, you should write information in your OWN words — not copy exactly.`,
              correctAnswer: true,
              explanation: `True! Always rewrite in your own words. That's how you show you actually understand. Copying word-for-word is plagiarism — not okay.` },
            { id: `l20-q5`, format: `fill-blank`,
              question: `Copying someone else's words and pretending they're yours is called ___.`,
              options: [`plagiarism`, `pizza`, `painting`, `puzzle`],
              correctIndex: 0,
              explanation: `Plagiarism! Real researchers don't do it. They either rewrite in their own words or use quotation marks and credit the original author. Always.` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `Why is CURIOSITY one of the most important traits a person can have?`,
              options: [`It's not really important`, `Because curious people learn more, discover more, and grow more — their whole lives`, `Only on weekends`, `Just because`],
              correctIndex: 1,
              explanation: `Curious people learn more, discover more, and grow more — their whole lives. World-changers stay curious. Scientists, inventors, artists — all kept asking questions. Stay curious. It's your superpower.` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The greatest minds in history were RESEARCHERS at heart. Einstein researched physics for decades. Marie Curie researched radioactivity. Jane Goodall researched chimpanzees. Today, scientists research every single day — finding new medicines, exploring space, understanding climate. The skills you learned today are the SAME skills they use. Just smaller. Research skills scale up your whole life. You're joining a long line of curious humans who change the world.`,
          familyAdventure: `Pick a QUESTION your family has wondered about. Maybe "how do rainbows form?" or "where did pasta come from?" or "how do bees make honey?" Research it TOGETHER. Find at least TWO sources — a library book, a kid-friendly website. Take notes in your own words. Share what you learned at dinner. That's a real research project — and a fun family memory.`,
          creativePrompt: `Make a "I want to know..." LIST. Write down 5-10 questions you've always wondered about. Anything! Big ones (why is the sky blue?) or small ones (how do worms see?). Keep the list. Whenever you have time, pick one and research it. Over months and years, you'll learn TONS just by following your own curiosity. Your list is the start of a learning lifetime.`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `WONDERFUL, {name}! You did it! All TWENTY lessons of ELA Explorer — COMPLETE. You can read fluently. You find main ideas, themes, inferences. You analyze stories. You write narratives, informational pieces, and opinions. You know grammar, punctuation, spelling. And now you can research ANYTHING. You're a reader, a writer, and a lifelong learner. The whole world of words is open to you. Stay curious. Read widely. Write often. Keep going. I'm so proud of you. Thank you for journeying with me, {name}. This is goodbye for ELA Explorer — but it's the beginning of your life as a lifelong learner. Go.`,
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
  console.log(`[LESSON-ELA-L20] Loaded: "Research Skills: Finding and Using Sources" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
