// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L18 — Academic Vocabulary: Words That Cross Subjects
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS L.4.6 / L.5.6 — Acquire and use general academic and
//            domain-specific words and phrases
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what academic vocabulary is, key verbs (analyze, evaluate,
//        synthesize), key concept words (compare, contrast, cause, effect),
//        what it means to truly own a word
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-18`,
      title: `Academic Vocabulary: Words That Cross Subjects`,
      duration: 18,
      xpReward: 75,
      badge: `academic-vocab-pro`,
      badgeName: `Academic Vocab Pro`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. Some words are like passports. They work in every subject. "Analyze" works in science, math, English, and history. So does "evaluate." So does "compare." These ACADEMIC VOCABULARY words show up everywhere, and the kids who really understand them have a huge advantage on tests, essays, and class discussions. Today you'll learn the most important academic words and what they actually mean when a teacher uses them. Let's go.`,
          headline: `Academic Vocabulary`,
          subtitle: `Words that work in every subject. Learn them, use them everywhere.`,
          visual: `/ue-assets/ela/l18-welcome.webp`,
        },

        // ── SECTION 1 — WHAT IS ACADEMIC VOCAB ────────────────────────────────
        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Words That Work Everywhere`,
          paragraphs: [
            `ACADEMIC VOCABULARY is the set of words that show up across every subject. They're not specific to one field. They're the words teachers use when they ask you to think. "Analyze this poem." "Evaluate this experiment." "Compare these two events." Same word, different subject. Once you understand what each one really asks for, you can answer test questions and essay prompts way more confidently.`,
            `Most teachers assume you already know these words. A lot of students fake it because they don't. Knowing exactly what "analyze" or "evaluate" means makes the difference between a confused answer and a sharp one. It's the difference between writing a vague response and writing the response the teacher actually asked for.`,
          ],
          image: `/ue-assets/ela/l18-s1-passport-words.webp`,
          imageCaption: `Academic vocab works in every classroom. Learn it once, use it forever.`,
          vocab: [
            { word: `academic vocabulary`,
              definition: `Words that appear across every school subject and signal a specific kind of thinking. Examples: analyze, evaluate, compare, contrast, summarize.`,
              audioPrompt: `Academic vocabulary is the set of words that show up in every subject, {name}. Analyze. Evaluate. Compare. Contrast. Summarize. These words are like passports. They work in math, science, English, social studies, and beyond. When teachers ask you to "analyze" or "evaluate," they're asking for a specific kind of thinking. Knowing exactly what each word means is one of the biggest advantages a student can have.` },
            { word: `domain-specific vocabulary`,
              definition: `Words that belong to one particular subject area. Unlike academic vocabulary, they don't transfer across subjects. Example: "photosynthesis" (science), "integer" (math).`,
              audioPrompt: `Domain-specific vocabulary is words that belong to one particular subject, {name}. "Photosynthesis" is a science word. "Integer" is a math word. "Legislature" is a social studies word. These words don't transfer across subjects the way academic vocabulary does. Knowing the difference helps you study smarter: learn academic vocab for every class, domain vocab for each specific class.` },
          ],
        },

        // ── SECTION 2 — KEY VERBS ──────────────────────────────────────────────
        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Key Academic Verbs`,
          paragraphs: [
            `ANALYZE means break something into parts and study how the parts work together. "Analyze this poem" means look at its word choices, structure, rhythm, and theme separately. EVALUATE means make a judgment about quality or value. "Evaluate this experiment" means decide whether it worked, whether the evidence was strong, and what could improve it. SYNTHESIZE means combine information from multiple sources into one new understanding. "Synthesize these articles" means weave their ideas together.`,
            `These three verbs (analyze, evaluate, synthesize) are some of the most powerful in academic writing. Notice how different they are. Analyze breaks apart. Evaluate judges. Synthesize combines. When a teacher uses one, they want you to do exactly that specific thing. Doing the wrong one is one of the most common reasons students lose points on essay tests.`,
          ],
          image: `/ue-assets/ela/l18-s2-key-verbs.webp`,
          imageCaption: `Analyze = break apart. Evaluate = judge. Synthesize = combine.`,
          vocab: [
            { word: `analyze`,
              definition: `To break something into parts and examine how each part works and connects to the others.`,
              audioPrompt: `To analyze is to break something into parts and study them, {name}. Not just summarize. Not just describe. Actually examine the parts and how they connect. To analyze a poem, you look at word choice, structure, rhythm, and meaning. To analyze an event, you look at causes, decisions, and effects. The opposite of analyzing is just retelling. When teachers ask you to analyze, they want depth, not just description.` },
            { word: `evidence`,
              definition: `Facts, examples, or data used to support a claim or judgment. Evaluating without evidence is just an opinion.`,
              audioPrompt: `Evidence is the facts, examples, or data you use to support what you're saying, {name}. "This is good" is an opinion. "This is good because X, Y, and Z support it" is a judgment backed by evidence. Academic writing always depends on evidence. Whether you're analyzing a poem, evaluating an experiment, or synthesizing articles, the strength of your response depends on the strength of your evidence.` },
          ],
        },

        // ── SECTION 3 — KEY CONCEPT WORDS ─────────────────────────────────────
        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Compare, Contrast, Cause, Effect`,
          paragraphs: [
            `Four more passport words. COMPARE means show how two things are SIMILAR. CONTRAST means show how two things are DIFFERENT. These often come together: "Compare and contrast these two stories" means cover both the similarities AND the differences. Don't skip one half.`,
            `CAUSE means what made something happen. EFFECT means what the result was. "What caused the war?" asks about reasons. "What were the effects of the war?" asks about results. Same event, different angle. These four words are everywhere in social studies, science, and reading. Knowing exactly what they mean turns confusing prompts into clear instructions.`,
          ],
          image: `/ue-assets/ela/l18-s3-concept-words.webp`,
          imageCaption: `Compare = similar. Contrast = different. Cause = reason. Effect = result.`,
          vocab: [
            { word: `evaluate`,
              definition: `To make a careful judgment about the quality, value, or effectiveness of something using evidence.`,
              audioPrompt: `To evaluate is to make a careful judgment about something, {name}. Was it good? Was it effective? Was the evidence strong? Evaluating isn't just having an opinion. It's an opinion backed by reasons. When teachers ask you to evaluate a book, an experiment, or an argument, they want you to weigh evidence and reach a thoughtful conclusion. Specific, supported, and clear.` },
            { word: `compare`,
              definition: `To identify the ways two or more things are similar to each other.`,
              audioPrompt: `To compare is to focus on what two things have in common, {name}. When a prompt says "compare," it's asking for the similarities. Ancient Rome and Ancient Greece both had democracies. Both had powerful armies. Both had Olympic games. Those are comparisons. Don't confuse compare with contrast. Compare is similarities only. "Compare and contrast" means cover both.` },
          ],
        },

        // ── SECTION 4 — TRULY OWNING A WORD ───────────────────────────────────
        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What It Means to Truly OWN a Word`,
          paragraphs: [
            `Recognizing a word and OWNING a word are different things. Recognizing means you've seen it and can roughly translate it. Owning means you can use it accurately, define it in your own words, recognize it in conversation, and apply it correctly. Most students recognize "analyze" but can't use it in a sentence without help. That's a gap.`,
            `Three signs you've truly owned a word. One: you can define it in your own words without looking it up. Two: you can use it correctly in a sentence right now. Three: when someone else uses it, you immediately know what they mean. If you can do all three, the word is yours. Aim for owning, not just recognizing. Twenty owned academic words beat a hundred half-recognized ones every time.`,
          ],
          image: `/ue-assets/ela/l18-s4-owning-words.webp`,
          imageCaption: `Define + use + recognize = a word you actually own.`,
          vocab: [
            { word: `synthesize`,
              definition: `To combine information or ideas from multiple sources into a new, unified understanding.`,
              audioPrompt: `To synthesize is to combine information from multiple sources into a new understanding, {name}. Not summarizing each one separately. Actually weaving them together into something fuller than any single source could give you. Synthesis is what college papers, professional reports, and serious journalism all depend on. It's also the highest-level academic verb you'll see in school.` },
            { word: `ownership`,
              definition: `Truly knowing a word — being able to define it in your own words, use it correctly in a sentence, and recognize it immediately when someone else uses it.`,
              audioPrompt: `Word ownership means you truly know a word, {name}. Not just recognizing it when you see it. Actually being able to define it in your own words, use it correctly right now, and understand it instantly when someone else uses it. Most students recognize academic words but don't own them. The goal is ownership. Twenty owned words beat a hundred half-recognized ones every time.` },
          ],
        },

        // ── INTERACTIVE GAME — Academic Vocab Investigation ───────────────────
        {
          id: `l18-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four essay prompts from different classes. For each one, decide which kind of THINKING it's actually asking for. Is it ANALYZE (break apart), COMPARE/CONTRAST (similarities and differences), or CAUSE/EFFECT (reasons and results)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `analyze`,            label: `Analyze`,            color: `#A78BFA`, description: `Break the topic into parts and examine how the parts work and connect.` },
            { id: `compare-contrast`,   label: `Compare/Contrast`,   color: `#FBBF24`, description: `Show how two things are similar AND how they're different.` },
            { id: `cause-effect`,       label: `Cause/Effect`,       color: `#34D399`, description: `Explain what made something happen and what the results were.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Prompt #1 (English class)`,
              clues: [
                { text: `"Analyze the use of imagery in the poem 'Stopping by Woods on a Snowy Evening.'"` },
                { text: `Keyword: ANALYZE.` },
                { text: `Asks you to break the poem's imagery into parts and examine each.` },
              ],
              correctAnswer: `analyze`,
              realWorldExample: `Standard literary analysis prompt.`,
              explanation: `The word "analyze" tells you exactly what to do: break the imagery into parts, examine each one, and explain how it works. Not summarize the poem. Not say whether you liked it. Actually take the imagery apart and study the pieces.`,
            },
            {
              id: `case-2`,
              caseTitle: `Prompt #2 (Science class)`,
              clues: [
                { text: `"Explain how a volcano forms and what happens to the surrounding land afterward."` },
                { text: `First part asks HOW it forms (reasons leading up to it).` },
                { text: `Second part asks what happens AFTER (results).` },
              ],
              correctAnswer: `cause-effect`,
              realWorldExample: `Classic cause-and-effect science prompt.`,
              explanation: `Even though "cause" and "effect" aren't in the prompt, the structure clearly asks for both. How something forms (cause). What happens to the land afterward (effect). Always read the structure of a prompt, not just the keywords.`,
            },
            {
              id: `case-3`,
              caseTitle: `Prompt #3 (History class)`,
              clues: [
                { text: `"Discuss the similarities and differences between Ancient Rome and Ancient Greece."` },
                { text: `Similarities = how they're alike.` },
                { text: `Differences = how they're different.` },
              ],
              correctAnswer: `compare-contrast`,
              realWorldExample: `Classic compare-and-contrast history prompt.`,
              explanation: `"Similarities and differences" is compare-and-contrast wording. The teacher wants both halves. Strong answers cover similarities AND differences. Skipping one or the other loses points.`,
            },
            {
              id: `case-4`,
              caseTitle: `Prompt #4 (English class) — The Tricky One`,
              clues: [
                { text: `"Discuss the main themes in the novel."` },
                { text: `The word "discuss" is vague.` },
                { text: `But what kind of thinking does it actually require?` },
              ],
              correctAnswer: `analyze`,
              realWorldExample: `Many "discuss" prompts are really asking for analysis.`,
              explanation: `"Discuss" sounds open-ended, but in academic writing, it usually means analyze. You can't really "discuss" a theme without breaking it into pieces and examining how it works. When you see "discuss," "explore," or "examine," they almost always mean analyze. Lesson: read past the soft keywords to figure out what kind of thinking the teacher actually wants.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What is ACADEMIC VOCABULARY?`,
              options: [
                `Words only used in college`,
                `Words that appear across every school subject and signal specific kinds of thinking`,
                `Words from one specific subject`,
                `Words teachers invent for tests`,
              ],
              correctIndex: 1,
              explanation: `Academic vocabulary words like analyze, evaluate, compare, and synthesize show up everywhere from math to social studies. They signal a specific kind of thinking the teacher is asking for.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `What does ANALYZE mean?`,
              options: [
                `Summarize`,
                `Break something into parts and study how the parts work and connect`,
                `Ignore the details`,
                `Memorize`,
              ],
              correctIndex: 1,
              explanation: `Analyzing isn't summarizing. It's breaking the topic into parts and examining each one. Word choice, structure, evidence, themes. Look at the pieces and how they work together.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `If a prompt says "compare and contrast," what does it want?`,
              options: [
                `Only the similarities`,
                `Only the differences`,
                `BOTH similarities AND differences`,
                `Pick one or the other`,
              ],
              correctIndex: 2,
              explanation: `"Compare and contrast" means cover BOTH. Comparing = similarities. Contrasting = differences. Strong answers cover both halves. Skipping either one loses points.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `What does SYNTHESIZE mean?`,
              options: [
                `Pick one source and ignore the rest`,
                `Combine information from multiple sources into a new, unified understanding`,
                `Summarize each source separately`,
                `Copy the best sentences`,
              ],
              correctIndex: 1,
              explanation: `Synthesis weaves multiple sources into something fuller than any single one. It's the highest-level academic thinking move, and it's what college papers and professional reports depend on.` },

            { id: `l18-q5`, format: `true-false`,
              question: `True or false: If you recognize an academic word when you read it, that means you've fully owned the word.`,
              correctAnswer: false,
              explanation: `False. Recognition and ownership are different. Recognition means you've seen it. Ownership means you can define it in your own words, use it correctly, and recognize it in any context. Aim for ownership, not just recognition.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `Science prompt: "Explain what caused the dinosaurs to go extinct, and what happened to the ecosystem afterward." What kind of thinking is being asked for?`,
              options: [
                `Analyze`,
                `Cause and effect — what caused extinction, and what were the results`,
                `Compare and contrast`,
                `Summarize`,
              ],
              correctIndex: 1,
              explanation: `"Caused" and "what happened afterward" are cause-and-effect signals. Strong answers cover the causes (asteroid, climate, etc.) AND the effects (changes to the ecosystem).` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `What does EVALUATE mean?`,
              options: [
                `Have any opinion`,
                `Make a careful judgment about quality, value, or effectiveness, using evidence`,
                `Summarize without judging`,
                `Memorize`,
              ],
              correctIndex: 1,
              explanation: `Evaluating is more than having an opinion. It's an opinion backed by reasons and evidence. Was it effective? Was the evidence strong? What worked, what didn't? Specific, supported, and clear.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `Why is academic vocabulary one of the highest-leverage skills in school?`,
              options: [
                `Teachers like it`,
                `Because the same words appear across every subject, so learning them improves performance in math, science, English, and social studies all at once`,
                `It's required for tests only`,
                `It impresses parents`,
              ],
              correctIndex: 1,
              explanation: `Academic vocab is cross-subject. Owning these words pays off in every class for the rest of your school career. Twenty owned words beat a hundred half-recognized ones.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Which academic word from today (analyze, evaluate, synthesize, compare, contrast, cause, effect) do you see most in your schoolwork?` },
            { id: `r2`, text: `Which one feels hardest to actually USE in a sentence, not just recognize?` },
            { id: `r3`, text: `Have you ever lost points on a test or essay because you did the WRONG kind of thinking the prompt asked for? What happened?` },
            { id: `r4`, text: `If you had to teach someone the difference between "analyze" and "summarize" in one sentence, what would you say?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Academic vocabulary doesn't stop being useful when school ends. The same words show up in college applications, job interviews, and professional writing. Doctors, lawyers, scientists, journalists, and engineers all use "analyze," "evaluate," "synthesize," and "compare" constantly. Owning these words now is an investment that pays dividends for the rest of your life. It's the kind of vocabulary that signals you're a serious thinker.`,
          familyAdventure: `Academic Vocab Spy Game. As a family, watch a news segment, listen to a podcast, or read an article together. Whoever spots the first academic vocab word (analyze, evaluate, synthesize, compare, contrast, cause, effect) calls it out. Discuss how it was used. Was it the right word for the context? Did the speaker mean exactly what the word means? You'll be amazed at how often these words show up.`,
          creativePrompt: {
            intro: `Pick ANY topic you care about. Practice using academic vocabulary on it.`,
            floor: `Write at least 5 sentences. Use at least three different academic vocab words (analyze, evaluate, compare, contrast, cause, effect, synthesize). Underline each one.`,
            stretch: `Write 8 to 10 sentences using at least FIVE different academic vocab words correctly. Each use should match what the word actually means.`,
            open: `Write a real paragraph or essay that demonstrates fluent academic vocabulary use. After the paragraph, write a short note about which words you used and what each one meant in context.`,
            frames: [
              `My topic is ___.`,
              `When I analyze it, I notice ___.`,
              `If I compare and contrast two parts of it: ___ and ___.`,
              `One main cause of ___ is ___, and the effect is ___.`,
              `If I evaluate it, I'd say ___ because ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now use the most important academic verbs (analyze, evaluate, synthesize), handle compare/contrast and cause/effect prompts correctly, and tell the difference between recognizing a word and actually owning one. Next lesson: presentations. We shift from writing to speaking. How do you give a speech that actually holds people's attention? See you there. — Quill.`,
          badge: `academic-vocab-pro`,
          badgeName: `Academic Vocab Pro`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L18;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L18.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L18 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
