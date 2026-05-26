// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L01 — Close Reading: Analyzing Texts in Depth  (v3 — energized)
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RL.4.1 / RL.5.1 / RI.4.1 / RI.5.1 — cite textual evidence, analyze in detail
//            CCSS RL.4.4 / RL.5.4 / RI.4.4 / RI.5.4 — word choice and meaning
// CALIBRATED: UE spec v1.1 + proposed v1.2 deltas (welcome preview rule, 4 vocab ceiling)
// SCOPE: 4 sections — Tourist read + Builder read + Detective read + Annotation
// CHANGES v2→v3:
//   - Welcome rewritten to explicitly preview the lesson
//   - Section names reframed: Tourist / Builder / Detective / Mark It Up
//   - Vocab cut from 8 terms → 4 (1 per section: comprehension, structure, craft, annotate)
//   - Other terms (passage, summary, evidence, deliberate, margin) defined inline
//   - Audio prompts trimmed to 40-50 words
//   - Quill's voice punched up — more energy, fewer hedges
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-01`,
      title: `Close Reading: Analyzing Texts in Depth`,
      duration: 18,
      xpReward: 75,
      badge: `close-reader`,
      badgeName: `Close Reader`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Quill here. Today you're learning something most adults never figured out: there are THREE different ways to read the same page — and each one shows you stuff the others totally miss. We'll go through them as a tourist, a builder, and a detective. Then I'll teach you how to mark up a book so it actually helps you think instead of just sitting there looking pretty. Let's go.`,
          headline: `Close Reading`,
          subtitle: `Three ways to read the same page — and find something new every time`,
          visual: `/ue-assets/ela/l01-welcome.webp`,
        },

        // ── SECTION 1 — TOURIST ──────────────────────────────────────────────
        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Read Like a Tourist`,
          paragraphs: [
            `First read: be a tourist. A tourist in a new city isn't trying to memorize street names or analyze the architecture. They're just taking it in. Who's here? What's this place about? Same with a passage. First time through, just get the surface — what's happening, who's in it, what the main idea is.`,
            `One rule: if you can't summarize what you just read in two or three sentences, you didn't actually read it. Read it again. Also — circle any word you don't know. A skipped word becomes a hole, and the hole gets bigger every time you go back through.`,
          ],
          image: `/ue-assets/ela/l01-s1-tourist.webp`,
          imageCaption: `Tourist read = just take it in. Get the surface.`,
          vocab: [
            { word: `comprehension`,
              definition: `Understanding the basic meaning of a text — who, what, where, when, and what happens.`,
              audioPrompt: `Comprehension is the basic understanding, {name}. Who's in the passage, what happens, what's the point. A lot of readers try to analyze before they actually understand — that's like debating a movie you only half-watched. Get the basics first. If you can't summarize it in two or three sentences, read it again.` },
            { word: `summary`,
              definition: `A short restatement of the main ideas of a text, in your own words.`,
              audioPrompt: `A summary is a short restatement in your own words, {name} — usually two or three sentences. It proves you understood the passage well enough to explain it yourself. After every tourist read, try writing one. Can't do it? Read it again.` },
          ],
        },

        // ── SECTION 2 — BUILDER ──────────────────────────────────────────────
        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Read Like a Builder`,
          paragraphs: [
            `Second read: be a builder. Builders don't ask "what's this house about?" — they ask "how is it put together?" Where are the support beams? What goes first, what goes last? That's exactly what you're doing on read two. Stop asking what the passage SAYS and start asking how it's BUILT.`,
            `Notice the short sentences and the long ones. Notice where the author slows down for detail and where they speed past. Notice what comes first, what's saved for the end. Authors don't pace by accident — every choice is a choice. Once you see the design, the text stops feeling random.`,
          ],
          image: `/ue-assets/ela/l01-s2-builder.webp`,
          imageCaption: `Builder read = see how it's made.`,
          vocab: [
            { word: `structure`,
              definition: `The way a text is organized — its parts, sections, order, and the connections between ideas.`,
              audioPrompt: `Structure is the architecture of a text, {name}. How the author arranged the parts. Where the paragraph breaks fall. What comes first, what comes last. An essay that saves its strongest evidence for the end hits harder than one that opens with it. Authors choose structure on purpose.` },
            { word: `evidence`,
              definition: `Facts, examples, statistics, or quotations an author uses to support a claim.`,
              audioPrompt: `Evidence is what an author uses to back up a claim, {name}. Facts. Statistics. Examples. Quotes from experts. Without evidence, a claim is just an opinion in the air. On your builder read, notice what evidence the author chose — and why that piece and not another.` },
          ],
        },

        // ── SECTION 3 — DETECTIVE ────────────────────────────────────────────
        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Read Like a Detective`,
          paragraphs: [
            `Third read: be a detective. Every word is a clue. The question stops being WHAT and HOW — it becomes WHY. Why did the author pick this word and not a simpler one? Why include this detail but leave that one out? Why end the sentence right there?`,
            `Here's the secret: every word in good writing was chosen on purpose. A character called "hollow" instead of "sad" — that's a clue. A speech ending on one short word — that's a strategy. Once you start asking why, you can't stop. That's where reading turns into thinking.`,
          ],
          image: `/ue-assets/ela/l01-s3-detective.webp`,
          imageCaption: `Detective read = every word is a clue.`,
          vocab: [
            { word: `craft`,
              definition: `The deliberate, skilled choices an author makes — about words, structure, pacing, and detail — to shape how a text affects readers.`,
              audioPrompt: `Craft is the deliberate work behind a text, {name}. Word choice. Sentence rhythm. What to include, what to leave out. Every one is a decision the author made on purpose. When you read for craft, you stop treating the text like it just happened — and start seeing the author as a maker.` },
            { word: `deliberate`,
              definition: `Done on purpose, with thought and intention — not random or accidental.`,
              audioPrompt: `Deliberate means done on purpose, {name}. With thought. With intention. Once you start assuming authors are deliberate, your reading changes. Strange word? Not random — deliberate. Weird sentence break? Not a mistake — deliberate. The detective question is always: why this choice?` },
          ],
        },

        // ── SECTION 4 — MARK IT UP ──────────────────────────────────────────
        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Mark It Up`,
          paragraphs: [
            `Real close readers don't keep books clean. They underline, circle, draw arrows, write questions in the empty space at the edges of the page. It looks messy. That's the point. A clean book at the end of a close read usually means you weren't really thinking.`,
            `Pick whatever works for you. Underline key lines. Circle words you don't know. Write questions in the margins — "why this word?" "what does this remind me of?" Star surprising stuff. Annotation isn't decoration. It's evidence that your brain was actually awake.`,
          ],
          image: `/ue-assets/ela/l01-s4-markup.webp`,
          imageCaption: `Mark it up. Messy pages = active brain.`,
          vocab: [
            { word: `annotate`,
              definition: `To mark up a text while reading — with underlines, circles, notes, questions, and arrows — to track your thinking.`,
              audioPrompt: `To annotate is to mark up a text while you read, {name}. Underline key phrases. Circle words you don't know. Write questions in the margin. Star surprising lines. A clean book at the end of a close read usually means a passive reader. A messy one means an active one.` },
            { word: `margin`,
              definition: `The blank space at the edges of a page, used by close readers for notes, questions, and reactions.`,
              audioPrompt: `The margin is the blank space at the edges of a page, {name}. For most readers, it stays empty. For close readers, it's where the conversation happens — where you write questions, mark reactions, and leave evidence that your brain was actually working.` },
          ],
        },

        // ── INTERACTIVE GAME — Investigation: Four Readers, One Passage ───────
        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Time to investigate, {name}. Four different readers each marked up the SAME passage. Your job: figure out which kind of reader each one is. Here's the passage they all read:\n\n"The old library smelled of paper and dust and something else Mira couldn't name. She pushed past the heavy oak door and stopped. Books lined every wall, floor to ceiling, in colors so faded they had forgotten what they used to be. Somewhere in the back, a clock ticked. Mira had been inside hundreds of libraries. None of them had ever felt like this."\n\nNow look at how each reader marked it up. Tourist, Builder, or Detective? Watch out — one of these is trickier than it looks.`,
          options: [
            { id: `tourist`,    label: `Tourist Reader`,    color: `#60A5FA`, description: `Just taking it in — basic understanding, summary, looking up unknown words.` },
            { id: `builder`,    label: `Builder Reader`,    color: `#A78BFA`, description: `Looking at how the passage is put together — sentence rhythm, paragraph breaks, order.` },
            { id: `detective`,  label: `Detective Reader`,  color: `#FBBF24`, description: `Hunting word choices — why every word is the word the author picked.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Reader #1`,
              clues: [
                { text: `At the top of the page, wrote: "A girl named Mira walks into an old library that feels different from other libraries."` },
                { text: `Underlined the words "old library" and "heavy oak door."` },
                { text: `Circled the word "faded" with a small question mark next to it.` },
              ],
              correctAnswer: `tourist`,
              realWorldExample: `Pure tourist read — getting the basic story straight and flagging unfamiliar words.`,
              explanation: `A short summary at the top. Basic underlines for setting. A question mark on an unfamiliar word. Classic tourist moves — taking in the surface, not yet asking how or why.`,
            },
            {
              id: `case-2`,
              caseTitle: `Reader #2`,
              clues: [
                { text: `Numbered each sentence in the margin: 1 through 7.` },
                { text: `Drew a bracket around the first three sentences and wrote: "Sets up the scene. Short, then longer."` },
                { text: `Noted next to the last two sentences: "Pace slows down — author is making us linger."` },
              ],
              correctAnswer: `builder`,
              realWorldExample: `Pure builder read — looking at how the passage was paced and ordered.`,
              explanation: `Numbering sentences, tracking pacing, noticing where the author slows down. None of those are about meaning — they're all about construction. This reader is looking at how the passage was built.`,
            },
            {
              id: `case-3`,
              caseTitle: `Reader #3`,
              clues: [
                { text: `Circled the word "forgotten" with a long note: "Books don't actually forget. Why give books feelings? Is the library being treated like it's alive?"` },
                { text: `Underlined "she pushed past" and wrote: "Not 'opened.' PUSHED PAST. Why? Does Mira feel something is in her way?"` },
                { text: `In the margin: "What does it mean that the smell is 'something else she couldn't name'? Why doesn't the author just name it?"` },
              ],
              correctAnswer: `detective`,
              realWorldExample: `Pure detective read — every annotation is hunting a word choice.`,
              explanation: `Each annotation is a "why" question about a specific word. The reader is treating the author as a maker who picked every word on purpose. That's detective territory.`,
            },
            {
              id: `case-4`,
              caseTitle: `Reader #4 — The Tricky One`,
              clues: [
                { text: `The page looks almost empty. No underlines. No circles. No marks across most of the passage.` },
                { text: `One annotation, in the margin next to the line about the books: "The books forgot. Not the people — the books. The author is giving objects memory. Why?"` },
                { text: `That's the whole annotation. One line on the whole page.` },
              ],
              correctAnswer: `detective`,
              realWorldExample: `Depth isn't measured in marks. One sharp question can be deeper work than dozens of underlines.`,
              explanation: `An almost-empty page LOOKS like a lazy reader. But that single annotation is the deepest move in the lesson — questioning why an author gave objects memory. That's detective work, done quietly. The takeaway: quantity of marks isn't the same as quality of thinking.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is the main idea behind close reading?`,
              options: [
                `Reading as fast as possible to cover more material`,
                `Reading the same passage multiple times with a different goal each pass`,
                `Reading only the most exciting parts of a book`,
                `Reading silently so you can focus`,
              ],
              correctIndex: 1,
              explanation: `Close reading isn't about speed — it's about depth. You read the same passage multiple times, with a different focus each pass.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `What's a tourist reader doing?`,
              options: [
                `Figuring out why the author picked every word`,
                `Studying the structure of the text`,
                `Just taking in the surface — what's happening, who's in it`,
                `Annotating every line in the margin`,
              ],
              correctIndex: 2,
              explanation: `Tourist read = getting the surface. Like a real tourist in a new city — just take it in first, before you start analyzing.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `Which question best matches a BUILDER reader?`,
              options: [
                `Who is the main character?`,
                `How is the passage put together — sentence rhythm, paragraph breaks, what comes first?`,
                `What does this word remind me of from my own life?`,
                `Is this passage worth my time?`,
              ],
              correctIndex: 1,
              explanation: `The builder read shifts from "what" to "how." Structure, pacing, order — that's all builder territory.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `An author calls a character "hollow" instead of "sad." A DETECTIVE reader would ask:`,
              options: [
                `Is "hollow" in the dictionary?`,
                `What page is this on?`,
                `Why did the author pick "hollow" specifically when "sad" was available?`,
                `How long did this sentence take to write?`,
              ],
              correctIndex: 2,
              explanation: `Detective questions are "why this exact choice?" The author had other words and picked this one. Detectives ask why.` },

            { id: `l01-q5`, format: `true-false`,
              question: `True or false: A page with no annotations at all is always evidence of lazy reading.`,
              correctAnswer: false,
              explanation: `False. Most empty pages mean the reader wasn't engaged — but a single deep annotation can be more rigorous than dozens of shallow underlines. What matters is the thinking, not the volume of marks.` },

            { id: `l01-q6`, format: `multiple-choice`,
              question: `Why might a close reader write QUESTIONS in the margin instead of just underlining?`,
              options: [
                `Margins look more decorative than underlines`,
                `Questions force the reader to actively think — not just notice`,
                `Underlining is against the rules`,
                `Margins are easier to find later`,
              ],
              correctIndex: 1,
              explanation: `Underlining is passive — it marks "this is important" without saying why. A question forces engagement. The margin is where thinking happens.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `A reader summarizes a passage in two sentences, looks up one unfamiliar word, and stops. Which read are they on?`,
              options: [
                `Detective — they're analyzing word choice`,
                `Builder — they're studying structure`,
                `Tourist — they're working on the surface`,
                `They've finished all three`,
              ],
              correctIndex: 2,
              explanation: `Summarizing and learning unknown words are tourist moves. They haven't gotten to structure or word-choice analysis yet.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `Why is close reading worth the extra time?`,
              options: [
                `Teachers require it`,
                `It's a tradition in old books`,
                `It reveals layers a single reading misses — making you a sharper reader and thinker`,
                `It makes books last longer`,
              ],
              correctIndex: 2,
              explanation: `Close reading is slower, but every important text — a contract, a poem, a speech, a research paper — rewards depth. One careful read beats five fast reads.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Which kind of reader are you usually — tourist, builder, or detective? Why?` },
            { id: `r2`, text: `What's a book or story in your life that might be worth reading again, but as a detective this time?` },
            { id: `r3`, text: `What surprised you about the difference between Reader #3 and Reader #4 in the investigation?` },
            { id: `r4`, text: `If you had to teach close reading to a younger sibling in one sentence, what would you say?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Reading is one of the few skills where the technique you use changes how much you get. Most people read every text the same way — eyes across, get the gist, done. The world's sharpest readers — scholars, judges, editors, top students — don't. They know when to skim, when to read once, and when to slow down to a crawl. The skill isn't reading fast or slow. The skill is knowing which speed each text deserves.`,
          familyAdventure: `Try a Three-Read Challenge as a family. Pick one short passage everyone has access to — the first paragraph of a favorite book, a song lyric, or a paragraph from the news. Everyone reads it three times silently — once as a tourist, once as a builder, once as a detective. After each read, take 30 seconds to share what you noticed. By the third read, compare notes: who caught what? Did anyone notice something nobody else did?`,
          creativePrompt: {
            intro: `Pick one short passage you love — from a book, a movie, a song, or even a speech. Now write a close read of it. Walk through what the tourist, builder, and detective each notice.`,
            floor: `Write at least 5 sentences. One sentence summarizing what the passage says (tourist). Two sentences on its structure or pacing (builder). Two sentences on word choices that seem deliberate (detective).`,
            stretch: `Write 8–10 sentences. Build a real argument about what makes the passage work — using specific evidence. Pick one word or one sentence and defend why it's important.`,
            open: `Write as much as you want. Treat the passage the way a scholar would. Annotate it on paper first, then write a longer close-reading essay that pulls in everything you noticed.`,
            frames: [
              `The passage I picked is ___.`,
              `As a tourist, I noticed ___.`,
              `As a builder, I saw the author built it by ___.`,
              `As a detective, the choice I think is most deliberate is ___ because ___.`,
              `One thing I missed at first but caught later was ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now read a passage as a tourist, a builder, AND a detective — and you know that messy pages mean active brains. Next lesson: every author writes for a reason. Inform, persuade, entertain — how do you tell which one? See you there. — Quill.`,
          badge: `close-reader`,
          badgeName: `Close Reader`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L01 v3] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
