// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L05 — Text Structure: How Authors Organize Information
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.2-3.5
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L05 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-05`,
      title:     `Text Structure: How Authors Organize Information`,
      duration:  12,
      xpReward:  50,
      badge:     `structure-explorer`,
      badgeName: `Structure Explorer`,

      screens: [

        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Every text you read is BUILT. Like a house. Like a sentence. Like anything well-made. Authors organize their writing using patterns — they don't just throw words on the page. Today you'll learn the most common patterns authors use. Once you can SPOT the pattern, you'll understand texts much faster. Let's go.`,
          headline: `Text Structure: How Authors Organize Information`,
          subtitle: `The patterns authors use to organize their writing — and how to spot them`,
          visual: `/explorer-assets/ela/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Texts Have Blueprints`,
          paragraphs: [
            `Imagine a builder building a house with NO blueprint. Just random walls and pipes. Chaos.`,
            `Now imagine an author writing with no plan. Random sentences. No order. Equally bad. Good authors organize their writing using PATTERNS — invisible blueprints behind their words. The most common patterns are SEQUENCE, DESCRIPTION, PROBLEM/SOLUTION, CAUSE/EFFECT, and COMPARE/CONTRAST. Knowing these patterns is like getting X-ray vision for texts. You can see the structure underneath.`,
          ],
          image: `/explorer-assets/ela/l05-s1-blueprints.webp`,
          imageCaption: `Texts have blueprints — invisible patterns underneath the words. Learn to spot them = X-ray vision.`,
          vocab: [
            { word: `text structure`, definition: `The organizational pattern an author uses to arrange information.`,
              audioPrompt: `Text structure, {name}, is the organizational pattern an author uses to arrange their information. It's the invisible blueprint behind the words. Some texts go in time order. Some describe one thing in detail. Some compare two things.` },
            { word: `pattern`,        definition: `A repeating way of doing something. Texts follow PATTERNS.`,
              audioPrompt: `A pattern, {name}, is a repeating way of doing something. Texts follow patterns. Same patterns show up in many texts. Once you learn them, you'll spot them everywhere. It's a powerful skill — like recognizing songs by their first few notes. Patterns help you predict what's coming next.` },
            { word: `blueprint`,      definition: `A building plan. Text structure is like a BLUEPRINT for the text.`,
              audioPrompt: `A blueprint, {name}, is a building plan. Architects use blueprints before building houses. Authors use text structures the same way — as plans for how to organize their ideas. The blueprint is usually invisible to readers. But strong readers can SEE it. That's what we're learning today.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Pattern 1: SEQUENCE`,
          paragraphs: [
            `SEQUENCE means things happen in ORDER. First this. Then that. Finally this.`,
            `Recipes use sequence. Instructions use sequence. History books often use sequence. So do "how something works" texts. "First you mix the flour. Then you add water. Next you knead the dough. Finally you bake it." Sequence is everywhere. Signal words for sequence: FIRST, NEXT, THEN, AFTER, FINALLY, LAST. When you see those words, you're probably in a sequence text.`,
          ],
          image: `/explorer-assets/ela/l05-s2-sequence.webp`,
          imageCaption: `Sequence — things happen in order. First, next, then, finally. Recipes, instructions, history.`,
          vocab: [
            { word: `sequence`,       definition: `Things happening in ORDER. A common text structure.`,
              audioPrompt: `Sequence, {name}, is things happening in order. First, then, next, finally. Recipes are in sequence. Instructions are in sequence. Many history texts are in sequence. When events have to happen in a certain order, sequence is the best structure to use.` },
            { word: `order`,          definition: `One thing after another. Sequence texts show events in ORDER.`,
              audioPrompt: `Order, {name}, means one thing after another. Sequence texts show events in order. You can't bake the bread before mixing the dough. You can't make a sandwich before getting the bread. Some things only work in the right order — and sequence texts respect that.` },
            { word: `signal words`,   definition: `Special words that hint at the structure. SIGNAL WORDS help you spot patterns.`,
              audioPrompt: `Signal words, {name}, are special words that hint at the structure. First, next, then, finally — these all signal sequence. Each text pattern has its own signal words. Learning them is like learning code. Spot the signals — you know the structure.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Pattern 2: DESCRIPTION`,
          paragraphs: [
            `DESCRIPTION means the author paints a detailed PICTURE of one thing.`,
            `A text about volcanoes might describe what they look like, how big they are, what colors the lava is, what sounds they make. All those details paint a vivid picture. Description texts focus on ONE topic and give lots of details about it. Signal words: FOR EXAMPLE, FOR INSTANCE, SUCH AS, CHARACTERISTICS, FEATURES. When you see those, the author is probably describing something.`,
          ],
          image: `/explorer-assets/ela/l05-s3-description.webp`,
          imageCaption: `Description — author paints a detailed picture of ONE thing. Lots of details. For example, such as, features.`,
          vocab: [
            { word: `description`,    definition: `A structure that gives lots of DETAILS about one topic.`,
              audioPrompt: `Description, {name}, is a structure that gives lots of details about one topic. The author picks something — an animal, a place, a person — and tells you many things about it. Description doesn't have to happen in order.` },
            { word: `detail`,         definition: `A small fact that adds to the bigger picture. Description uses many DETAILS.`,
              audioPrompt: `A detail, {name}, is a small fact that adds to the bigger picture. Description structure uses many details. Color details. Size details. Sound details. Feeling details. The more vivid the details, the more the reader can SEE the thing being described. Details bring topics to life.` },
            { word: `for example`,    definition: `Signal phrase for description. "FOR EXAMPLE..." often introduces a detail.`,
              audioPrompt: `For example, {name}, is a signal phrase for description. When you see those words, the author is about to give you a specific detail to support a bigger point. Same with such as, for instance, and including. These phrases all signal that descriptive details are coming.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Pattern 3: PROBLEM AND SOLUTION`,
          paragraphs: [
            `Some texts start with a PROBLEM. Then explore the SOLUTION.`,
            `"Many cities had too much trash. So they invented recycling programs." Problem stated. Solution explained. News articles use this often. Science writing uses it. Even some history. Signal words: PROBLEM, ISSUE, SOLUTION, ANSWER, SO, THIS LED TO, AS A RESULT. When you spot these, the text might be using problem/solution structure.`,
          ],
          image: `/explorer-assets/ela/l05-s4-problem-solution.webp`,
          imageCaption: `Problem and solution — text presents a problem, then explains the solution. News articles use this often.`,
          vocab: [
            { word: `problem`,        definition: `Something that needs to be fixed. The first part of problem/solution structure.`,
              audioPrompt: `A problem, {name}, is something that needs to be fixed. In problem/solution structure, the author starts by telling you about the problem. Maybe it's a real-world issue. Maybe it's a scientific puzzle. Maybe it's a historical challenge. The problem comes first — it sets up everything that follows.` },
            { word: `solution`,       definition: `An answer that fixes the problem. The second part of problem/solution structure.`,
              audioPrompt: `A solution, {name}, is an answer that fixes the problem. In problem/solution structure, the author explains the solution after presenting the problem. The solution might work great. It might work partly. It might still be in development. But the structure is the same — problem first, solution second.` },
            { word: `issue`,          definition: `Another word for problem. Texts may call it an ISSUE.`,
              audioPrompt: `An issue, {name}, is another word for problem. Texts may use issue instead of problem, but it means the same thing. There's an issue with plastic pollution. Same as there's a problem with plastic pollution. Either word can signal problem/solution structure.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Signal Words: Your Decoder Keys`,
          paragraphs: [
            `Each text structure has its own SIGNAL WORDS — words that act like clues to the pattern.`,
            `SEQUENCE: first, next, then, after, finally, last. DESCRIPTION: for example, such as, features, characteristics. PROBLEM/SOLUTION: problem, issue, solution, answer, so, as a result. COMPARE/CONTRAST: like, similar, both, but, however, unlike (more on this in our next lesson). CAUSE/EFFECT: because, since, as a result, therefore (we cover this in the lesson after that). Learn these signal words — they're your decoder keys to text structures.`,
          ],
          image: `/explorer-assets/ela/l05-s5-signal-words.webp`,
          imageCaption: `Signal words = decoder keys. Each pattern has its own. Spot them, know the structure.`,
          vocab: [
            { word: `decoder`,        definition: `Something that helps you understand a hidden code. Signal words are DECODERS for text structure.`,
              audioPrompt: `A decoder, {name}, is something that helps you understand a hidden code. Signal words are decoders for text structure. They unlock the pattern the author is using.` },
            { word: `clue`,           definition: `A hint that helps solve a mystery. Signal words are CLUES to text structure.`,
              audioPrompt: `A clue, {name}, is a hint that helps solve a mystery. Signal words are clues to text structure. They're hints the author leaves about how the text is organized. Spot the clues — solve the mystery of the pattern. Strong readers always look for clues.` },
            { word: `decoder keys`,   definition: `Tools that unlock something hidden. Signal words are DECODER KEYS for nonfiction.`,
              audioPrompt: `Decoder keys, {name}, are tools that unlock something hidden. Signal words are decoder keys for nonfiction. They unlock how the text is organized. Once you know them, every nonfiction text becomes easier to navigate. You can predict what's coming next.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Why Structure Matters`,
          paragraphs: [
            `Spotting the STRUCTURE makes reading easier. Here's why.`,
            `When you know it's a SEQUENCE text, you know to follow the order. When you know it's a DESCRIPTION text, you know to look for details. When you know it's PROBLEM/SOLUTION, you know to find both parts. The structure tells you HOW to read the text. Good readers identify the structure FIRST, then dive into the words. It's like checking a map before starting a trip. Saves time. Helps you understand more.`,
          ],
          image: `/explorer-assets/ela/l05-s6-structure-power.webp`,
          imageCaption: `Spot the structure FIRST. Then you know how to read the text. Like checking a map before a trip.`,
          vocab: [
            { word: `identify`,       definition: `To name what something is. IDENTIFY the structure to read smarter.`,
              audioPrompt: `To identify, {name}, is to name what something is. Identify the structure before diving deep into a text. Is it sequence? Description? Problem/solution? Once you know, you can read smarter. You know what to expect. You know what to look for. You know how the text is organized.` },
            { word: `map`,            definition: `A guide showing how to navigate. Text structure is like a MAP for the text.`,
              audioPrompt: `A map, {name}, is a guide showing how to navigate. Text structure is like a map for the text. Without knowing the structure, you might wander. With it, you know exactly where things are. The main idea here.` },
            { word: `efficient`,      definition: `Doing more with less effort. Knowing structure makes reading more EFFICIENT.`,
              audioPrompt: `Efficient, {name}, means doing more with less effort. Knowing text structure makes reading more efficient. You don't waste time getting lost. You don't re-read paragraphs trying to figure out what's happening. You spot the pattern, follow it, and absorb the information. That's efficient reading.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about text structure, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `Knowing the text structure helps you navigate and understand a text faster.`,
              matchPhrase: `Yes! Spotting the structure first is like checking a map before a trip. You know what to expect and where to find things. Smart readers always identify structure first.`,
              correctMatch: `fact` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `Signal words like "first," "next," and "for example" are CLUES to text structure.`,
              matchPhrase: `True! Each structure has its own signal words. First/next/finally = sequence. For example/such as = description. Signal words are decoder keys.`,
              correctMatch: `fact` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `Good authors just throw words on the page randomly — no plan at all.`,
              matchPhrase: `Not true! Good authors organize their writing using patterns. There's always a structure behind the words — even if it's invisible to less-experienced readers.`,
              correctMatch: `myth` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `Every single text in the world uses the exact same one structure.`,
              matchPhrase: `Definitely not! There are MANY structures — sequence, description, problem/solution, compare/contrast, cause/effect. Authors choose the one that fits their message best.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is TEXT STRUCTURE?`,
              options: [`The size of the letters`, `The organizational pattern an author uses to arrange information`, `The cover of the book`, `The author's name`],
              correctIndex: 1,
              explanation: `Text structure is the organizational pattern an author uses to arrange information. The invisible blueprint behind the words.` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `Which signal words go with SEQUENCE structure?`,
              options: [`Like, similar, both`, `First, next, then, finally`, `For example, such as`, `Because, since`],
              correctIndex: 1,
              explanation: `First, next, then, finally — these signal sequence. Things happening in order. Common in recipes, instructions, history.` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `What does DESCRIPTION structure do?`,
              options: [`Tells events in order`, `Paints a detailed picture of one topic with lots of details`, `Compares two things`, `Asks a question`],
              correctIndex: 1,
              explanation: `Description focuses on one topic and gives many details about it. Color, size, sound, feel — whatever paints a vivid picture.` },
            { id: `l05-q4`, format: `true-false`,
              question: `Signal words are CLUES that help you spot the text structure.`,
              correctAnswer: true,
              explanation: `True! Signal words are clues. Each structure has its own. Spot the signals, know the structure. They're decoder keys to nonfiction.` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `Problem and ___ structure presents an issue, then explains how to fix it.`,
              options: [`solution`, `sandwich`, `silliness`, `silence`],
              correctIndex: 0,
              explanation: `Solution! Problem and solution structure starts with a problem, then explains the solution. Common in news articles and science writing.` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `Why does it help to spot the structure FIRST?`,
              options: [`It doesn't help`, `Because you'll know how the text is organized and what to expect — like reading a map`, `Just for fun`, `Only teachers care`],
              correctIndex: 1,
              explanation: `Spotting the structure first tells you HOW to read the text. What to expect. Where to find things. Like a map for the trip ahead.` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Adults use text structure recognition CONSTANTLY. Reading news? Often problem/solution or sequence. Reading a recipe? Always sequence. Reading a Wikipedia article? Usually description. Reading a science paper? Often cause/effect. The faster you can identify structure, the faster you read AND understand. It's not a school skill — it's a life skill. You'll use it every day forever.`,
          familyAdventure: `Pick three different texts at home — a recipe, a news article, and a book chapter. Look at each one together. Can you identify the STRUCTURE? Is it sequence? Description? Problem/solution? Look for signal words to help you decide. Compare and discuss. Notice how different texts use different structures.`,
          creativePrompt: `Write a SHORT paragraph (4-5 sentences) using ONE structure. Pick sequence (like a recipe), description (like an animal report), or problem/solution (like a tiny news article). Include at least TWO signal words for your structure. Show someone — can they guess which structure you used?`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that texts have STRUCTURES — invisible blueprints organizing the words. Sequence, description, problem/solution, and more. You know signal words help you spot patterns. You know that identifying structure first makes reading easier. You've got X-ray vision for nonfiction now. I'm proud of you. Thank you for journeying with me.`,
          badge: `structure-explorer`,
          badgeName: `Structure Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L05.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L05] Loaded: "Text Structure: How Authors Organize Information" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
