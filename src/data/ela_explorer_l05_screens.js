// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L05 — Text Structure: How Authors Organize Information
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.2-3.5
// REWRITE v2 (May 2026): Grade 1 accessible, SEQUENCE/DESCRIPTION/
// PROBLEM-SOLUTION identification game, CCSS signal words taught explicitly
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
          guideText: `Welcome back, {name}! Every text you read is BUILT. Like a house. Authors organize their writing using PATTERNS. Today you learn the most common patterns. Once you spot the pattern, you'll understand texts faster! Let's go!`,
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
            `Imagine a builder building a house with NO blueprint. Just random walls and pipes. Chaos!`,
            `Now imagine an author writing with no plan. Random sentences. No order. Just as bad! Good authors use PATTERNS — invisible blueprints behind their words. The most common patterns are SEQUENCE, DESCRIPTION, and PROBLEM/SOLUTION. Knowing these patterns is like getting X-RAY VISION for texts!`,
          ],
          image: `/explorer-assets/ela/l05-s1-blueprints.webp`,
          imageCaption: `Texts have blueprints — invisible patterns underneath the words!`,
          vocab: [
            { word: `text structure`, definition: `The pattern an author uses to organize information.`,
              audioPrompt: `Text structure is the pattern an author uses to organize information. It's the invisible blueprint behind the words. Different texts use different patterns!` },
            { word: `pattern`,        definition: `A repeating way of doing something.`,
              audioPrompt: `A pattern is a repeating way of doing something. Texts follow patterns. Once you learn them, you'll spot them everywhere — like recognizing your favorite songs!` },
            { word: `blueprint`,      definition: `A building plan. Text structure is like a BLUEPRINT.`,
              audioPrompt: `A blueprint is a building plan. Architects use them for houses. Authors use text structures the same way — as plans for organizing their ideas!` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Pattern 1: SEQUENCE`,
          paragraphs: [
            `SEQUENCE means things happen in ORDER! First this. Then that. Finally this.`,
            `Recipes use sequence. Instructions use sequence. History books often use sequence. "First mix the flour. Then add water. Next knead the dough. Finally bake it!" Signal words: FIRST, NEXT, THEN, AFTER, FINALLY, LAST. When you see those — you're probably in a sequence text!`,
          ],
          image: `/explorer-assets/ela/l05-s2-sequence.webp`,
          imageCaption: `Sequence — things happen in order. First, next, then, finally!`,
          vocab: [
            { word: `sequence`,     definition: `Things happening in ORDER.`,
              audioPrompt: `Sequence is things happening in order. First, then, next, finally. Recipes are in sequence. Instructions are in sequence. Many history texts are in sequence!` },
            { word: `order`,        definition: `One thing after another.`,
              audioPrompt: `Order means one thing after another. Sequence texts show events in order. You can't bake bread before mixing it! Some things only work in the right order.` },
            { word: `signal words`, definition: `Special words that hint at the structure.`,
              audioPrompt: `Signal words are special words that hint at the structure. First, next, then, finally — these all signal sequence. Each pattern has its own signal words!` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Pattern 2: DESCRIPTION`,
          paragraphs: [
            `DESCRIPTION means the author paints a detailed PICTURE of one thing!`,
            `A text about volcanoes might describe what they look like, how big they are, what color the lava is, what sounds they make! All those details paint a vivid picture. Description focuses on ONE topic. Signal words: FOR EXAMPLE, FOR INSTANCE, SUCH AS, FEATURES. When you see those — the author is describing something!`,
          ],
          image: `/explorer-assets/ela/l05-s3-description.webp`,
          imageCaption: `Description — author paints a detailed picture of ONE thing!`,
          vocab: [
            { word: `description`, definition: `A pattern that gives lots of DETAILS about one topic.`,
              audioPrompt: `Description is a pattern that gives lots of details about one topic. The author picks something — an animal, a place, a person — and tells you many things about it!` },
            { word: `detail`,      definition: `A small fact that adds to the bigger picture.`,
              audioPrompt: `A detail is a small fact that adds to the picture. Color details. Size details. Sound details. The more vivid the details, the more the reader can SEE the thing!` },
            { word: `for example`, definition: `Signal phrase that introduces a detail.`,
              audioPrompt: `For example is a signal phrase for description. When you see those words, the author is about to give you a specific detail. Same with SUCH AS and FOR INSTANCE!` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Pattern 3: PROBLEM AND SOLUTION`,
          paragraphs: [
            `Some texts start with a PROBLEM. Then explore the SOLUTION!`,
            `"Many cities had too much trash. So they invented recycling programs!" Problem stated. Solution explained. News articles use this often. Science writing uses it. Signal words: PROBLEM, ISSUE, SOLUTION, ANSWER, SO, AS A RESULT. Spot those — you're probably reading a problem/solution text!`,
          ],
          image: `/explorer-assets/ela/l05-s4-problem-solution.webp`,
          imageCaption: `Problem and solution — text presents a problem, then explains the solution!`,
          vocab: [
            { word: `problem`,  definition: `Something that needs to be fixed.`,
              audioPrompt: `A problem is something that needs to be fixed. In problem/solution structure, the author starts by telling you about the problem. It sets up everything that follows!` },
            { word: `solution`, definition: `An answer that fixes the problem.`,
              audioPrompt: `A solution is an answer that fixes the problem. The author explains the solution after presenting the problem. Problem first, solution second!` },
            { word: `issue`,    definition: `Another word for problem.`,
              audioPrompt: `An issue is another word for problem. Some texts use issue instead of problem. They mean the same thing. Both can signal problem/solution structure!` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Signal Words: Decoder Keys`,
          paragraphs: [
            `Each pattern has its own SIGNAL WORDS — clues to the pattern!`,
            `SEQUENCE: first, next, then, finally. DESCRIPTION: for example, such as, features. PROBLEM/SOLUTION: problem, issue, solution, so, as a result. These signal words are like DECODER KEYS! Spot them and you know the pattern. Strong readers learn them by heart!`,
          ],
          image: `/explorer-assets/ela/l05-s5-signal-words.webp`,
          imageCaption: `Signal words = decoder keys. Each pattern has its own!`,
          vocab: [
            { word: `decoder`,      definition: `Something that helps you understand a code.`,
              audioPrompt: `A decoder is something that helps you understand a code. Signal words are decoders for text structure. They unlock the pattern the author is using!` },
            { word: `clue`,         definition: `A hint that helps solve a mystery.`,
              audioPrompt: `A clue is a hint that helps solve a mystery. Signal words are clues to text structure. The author leaves them on purpose — to help you find the pattern!` },
            { word: `decoder keys`, definition: `Tools that unlock something hidden.`,
              audioPrompt: `Decoder keys are tools that unlock hidden things. Signal words unlock how a text is organized. Once you know them, every text becomes easier to read!` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Why Structure Matters`,
          paragraphs: [
            `Spotting the STRUCTURE makes reading easier! Here's why.`,
            `When you know it's a SEQUENCE text, you follow the order. When you know it's a DESCRIPTION text, you look for details. When you know it's PROBLEM/SOLUTION, you find both parts. The structure tells you HOW to read! It's like checking a map before a trip!`,
          ],
          image: `/explorer-assets/ela/l05-s6-structure-power.webp`,
          imageCaption: `Spot the structure FIRST. Then you know how to read the text!`,
          vocab: [
            { word: `identify`,  definition: `To name what something is.`,
              audioPrompt: `To identify means to name what something is. Identify the structure first. Is it sequence? Description? Problem-solution? Once you know, you can read smarter!` },
            { word: `map`,       definition: `A guide showing how to navigate.`,
              audioPrompt: `A map is a guide showing how to navigate. Text structure is like a map. Without one, you might wander. With one, you know exactly where things are!` },
            { word: `efficient`, definition: `Doing more with less effort.`,
              audioPrompt: `Efficient means doing more with less effort. Knowing text structure makes reading more efficient. You spot the pattern, follow it, and absorb the information!` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 passages. Drag each one into its TEXT STRUCTURE — sequence, description, or problem-solution!`,
          buckets: [
            { id: `sequence`,    label: `⏱️ SEQUENCE (in order)`,         color: `#FBBF24` },
            { id: `description`, label: `🎨 DESCRIPTION (details)`,        color: `#34D399` },
            { id: `problemsol`,  label: `🧩 PROBLEM-SOLUTION`,             color: `#A78BFA` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `First, mix the flour. Next, add water. Then, knead the dough. Finally, bake!`,
              matchPhrase: `Yes! That's SEQUENCE. The signal words "first, next, then, finally" tell you events are in order!`,
              correctMatch: `sequence` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `Tigers have orange fur with black stripes. They have sharp teeth. They roar loudly.`,
              matchPhrase: `Great! That's DESCRIPTION. Lots of details about ONE topic — tigers!`,
              correctMatch: `description` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `Many beaches had too much plastic trash. So volunteers started cleanup days.`,
              matchPhrase: `Yes! That's PROBLEM-SOLUTION. The problem (trash) and the solution (cleanups) — with the signal word "so"!`,
              correctMatch: `problemsol` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `Bees have fuzzy yellow bodies. They have see-through wings and big eyes.`,
              matchPhrase: `Perfect! Another DESCRIPTION. Lots of details about bees — what they look like!`,
              correctMatch: `description` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is TEXT STRUCTURE?`,
              options: [`The size of letters`, `The pattern an author uses to organize information`, `The cover`, `The author's name`],
              correctIndex: 1,
              explanation: `Text structure is the pattern an author uses to organize information — the invisible blueprint behind the words!` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `Which signal words go with SEQUENCE?`,
              options: [`Like, similar, both`, `First, next, then, finally`, `For example, such as`, `Because, since`],
              correctIndex: 1,
              explanation: `First, next, then, finally — these signal sequence! Things happening in order!` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `What does DESCRIPTION structure do?`,
              options: [`Tells events in order`, `Paints a detailed picture of ONE topic`, `Compares two things`, `Asks a question`],
              correctIndex: 1,
              explanation: `Description focuses on ONE topic and gives many details about it — color, size, sound, feel!` },
            { id: `l05-q4`, format: `true-false`,
              question: `Signal words help you spot the text structure.`,
              correctAnswer: true,
              explanation: `True! Signal words are clues. Each structure has its own. Spot them, know the structure!` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `Problem and ___ structure presents an issue, then explains how to fix it.`,
              options: [`solution`, `sandwich`, `silliness`, `silence`],
              correctIndex: 0,
              explanation: `Solution! Problem and solution structure starts with a problem, then explains the solution!` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `Why spot the structure FIRST?`,
              options: [`It doesn't help`, `You know how the text is organized — like a map for the trip`, `Just for fun`, `Only teachers care`],
              correctIndex: 1,
              explanation: `Spotting the structure first tells you HOW to read the text. Like checking a map before a trip!` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Adults use text structure CONSTANTLY! Reading news? Often problem/solution. Reading a recipe? Always sequence. Reading Wikipedia? Usually description. The faster you spot structure, the faster you read AND understand!`,
          familyAdventure: `Pick three texts at home — a recipe, a news article, and a book chapter. Look at each one. Can you spot the STRUCTURE? Sequence? Description? Problem-solution? Use signal words to help. Compare and discuss!`,
          creativePrompt: `Write a SHORT paragraph (4-5 sentences) using ONE structure! Pick sequence (like a recipe), description (like an animal report), or problem-solution. Use at least TWO signal words. Show someone — can they guess which structure?`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know that texts have STRUCTURES — invisible blueprints! Sequence, description, problem-solution. You know signal words help you spot patterns. You've got X-RAY VISION for nonfiction now! Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L05] Loaded: "Text Structure" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
