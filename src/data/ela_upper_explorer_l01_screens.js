// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L01 — Close Reading: Analyzing Texts in Depth  (v4 — pedagogy-aligned)
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RL.4.1 / RL.5.1 / RI.4.1 / RI.5.1 — cite textual evidence
//            CCSS RL.4.4 / RL.5.4 / RI.4.4 / RI.5.4 — word choice and meaning
// CALIBRATED: UE spec v1.1 — "Use real domain terms. Define them inline. Reuse them."
// FRAMEWORK: Fisher & Frey three-read protocol (industry standard, Grade 4-5)
//            + Smekens-style concrete metaphor scaffolds (eyeglasses / microscope / detective)
//            inline as memory hooks — NOT replacing the real terminology
// CHANGES v3→v4:
//   - Headlines restored to real academic terms (First Read / Second Read / Third Read)
//   - Metaphor scaffolds (eyeglasses / microscope / detective) embedded inline as hooks
//   - Welcome names Quill explicitly as the guide for reading and writing
//   - Cut "sitting there looking pretty"
//   - Game intro tightened, passage gets its own visual block
//   - Game options use real terms with metaphor in descriptions
//   - Quiz, reflection, creative prompt all use real terminology
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
          guideText: `Hey {name}, it's Quill — your guide for reading and writing. Today you're learning something most adults never figure out: there are three different ways to read the same page, and each one reveals something the others miss. We'll go through all three together — like putting on eyeglasses, then a microscope, then a detective's badge. By the end you'll also know how to mark up a book so it actually helps you think. Let's go.`,
          headline: `Close Reading`,
          subtitle: `Three reads on the same page — and how each one reveals something new`,
          visual: `/ue-assets/ela/l01-welcome.webp`,
        },

        // ── SECTION 1 — FIRST READ ────────────────────────────────────────────
        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `First Read: What Does It Say?`,
          paragraphs: [
            `Think of the first read like putting on eyeglasses. You're not analyzing yet. You're not asking deep questions. You're just trying to see the passage clearly. What's it about? Who's in it? What happens? What's the main idea? This first read is for comprehension — basic understanding.`,
            `One rule: if you can't summarize what you just read in two or three sentences, you didn't really comprehend it. Read it again. Also — circle any word you don't know. A word you skip becomes a hole in your understanding, and the hole gets bigger every time you go back through.`,
          ],
          image: `/ue-assets/ela/l01-s1-first-read.webp`,
          imageCaption: `First read = put on eyeglasses. Just see the passage clearly.`,
          vocab: [
            { word: `comprehension`,
              definition: `Understanding the basic meaning of a text — who, what, where, when, and what happens.`,
              audioPrompt: `Comprehension is basic understanding, {name}. Who's in the passage, what happens, what's the main point. Most readers skip past comprehension and try to analyze before they actually understand — that's like debating a movie you only half-watched. The first read is for comprehension. If you can't summarize the passage in two or three sentences, read it again.` },
            { word: `summary`,
              definition: `A short restatement of the main ideas of a text, in your own words.`,
              audioPrompt: `A summary is a short restatement in your own words, {name} — two or three sentences. It proves you understood the passage well enough to explain it yourself. After every first read, try writing one. Can't do it? Read it again.` },
          ],
        },

        // ── SECTION 2 — SECOND READ ───────────────────────────────────────────
        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Second Read: How Is It Built?`,
          paragraphs: [
            `Now switch to a microscope. The second read isn't about what the passage SAYS — it's about HOW the author put it together. You're zooming in. What's the structure? Where do the paragraph breaks fall? What's in the first sentence vs. the last? What evidence supports the author's claims?`,
            `Notice the long sentences and the short ones. Notice where the author slows down with detail and where they speed past. Notice what comes first and what's saved for the end. Authors don't pace by accident — every choice is a choice. Once you see the design, the text stops feeling random.`,
          ],
          image: `/ue-assets/ela/l01-s2-second-read.webp`,
          imageCaption: `Second read = microscope. Zoom in on how it's built.`,
          vocab: [
            { word: `structure`,
              definition: `The way a text is organized — its parts, sections, order, and the connections between ideas.`,
              audioPrompt: `Structure is the architecture of a text, {name}. How the author arranged the parts. Where the paragraph breaks fall. What comes first, what gets the middle, what comes last. An essay that saves its strongest evidence for the end hits harder than one that opens with it. The second read is for structure. Authors choose it on purpose.` },
            { word: `evidence`,
              definition: `Facts, examples, statistics, or quotations an author uses to support a claim.`,
              audioPrompt: `Evidence is what an author uses to back up a claim, {name}. Facts. Statistics. Examples. Quotes from experts. Without evidence, a claim is just an opinion. On your second read, notice what evidence the author chose — and why that piece and not another.` },
          ],
        },

        // ── SECTION 3 — THIRD READ ────────────────────────────────────────────
        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Third Read: Why These Word Choices?`,
          paragraphs: [
            `Now be a detective. The third read is the deepest, and a lot of readers never make it this far. The question stops being WHAT or HOW — and becomes WHY. Why did the author pick THIS word and not a simpler one? Why include this detail but leave that one out? Why end the sentence right there?`,
            `Here's the secret: every word in good writing was chosen on purpose. A character called "hollow" instead of "sad" — that's a clue. A speech ending on one short word — that's a strategy. The third read is for craft — for studying the choices an author made on purpose. Once you start asking why, you can't stop.`,
          ],
          image: `/ue-assets/ela/l01-s3-third-read.webp`,
          imageCaption: `Third read = detective. Every word is a clue.`,
          vocab: [
            { word: `craft`,
              definition: `The deliberate, skilled choices an author makes — about words, structure, pacing, and detail — to shape how a text affects readers.`,
              audioPrompt: `Craft is the deliberate work behind a text, {name}. Word choice. Sentence rhythm. What to include, what to leave out. Every one is a decision the author made on purpose. The third read is for craft. When you read for craft, you stop treating the text like it just happened — and start seeing the author as a maker.` },
            { word: `deliberate`,
              definition: `Done on purpose, with thought and intention — not random or accidental.`,
              audioPrompt: `Deliberate means done on purpose, {name}. With thought. With intention. Once you assume authors are deliberate, your reading changes. Strange word? Not random — deliberate. Weird sentence break? Not a mistake — deliberate. The detective question is always: why this choice?` },
          ],
        },

        // ── SECTION 4 — ANNOTATION ────────────────────────────────────────────
        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Annotation: Marking Up the Page`,
          paragraphs: [
            `Close readers don't keep books clean. They annotate — they underline, circle, draw arrows, write questions in the margins. It looks messy. That's the point. A clean book at the end of a close read usually means the reader wasn't really thinking.`,
            `Pick whatever style works for you. Underline key lines. Circle words you don't know. Write questions in the margins — "why this word?" "what does this remind me of?" Star surprising stuff. Annotation isn't decoration. It's evidence that your brain was actually awake while you read.`,
          ],
          image: `/ue-assets/ela/l01-s4-annotation.webp`,
          imageCaption: `Annotate as you read. Messy pages = active brains.`,
          vocab: [
            { word: `annotate`,
              definition: `To mark up a text while reading — with underlines, circles, notes, questions, and arrows — to track your thinking.`,
              audioPrompt: `To annotate is to mark up a text while you read, {name}. Underline key phrases. Circle words you don't know. Write questions in the margin. Star surprising lines. A clean book at the end of a close read usually means a passive reader. A messy one means an active one. Annotation slows you down in the best possible way.` },
            { word: `margin`,
              definition: `The blank space at the edges of a page, used by close readers for notes, questions, and reactions.`,
              audioPrompt: `The margin is the blank space at the edges of a page, {name}. For most readers, it stays empty. For close readers, it's where the conversation happens — where you write questions, note reactions, and leave evidence that your brain was actually working.` },
          ],
        },

        // ── INTERACTIVE GAME — Investigation: Four Readers, One Passage ───────
        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Detective time, {name}. Four readers each marked up the SAME passage. Each one was on a different read — first, second, or third. Your job: figure out which one.\n\nHere's the passage they all read:\n\n"The old library smelled of paper and dust and something else Mira couldn't name. She pushed past the heavy oak door and stopped. Books lined every wall, floor to ceiling, in colors so faded they had forgotten what they used to be. Somewhere in the back, a clock ticked. Mira had been inside hundreds of libraries. None of them had ever felt like this."\n\nWatch out — one of these is trickier than it looks.`,
          options: [
            { id: `first-read`,  label: `First-Read Reader`,  color: `#60A5FA`, description: `Eyeglasses. Getting the surface — basic understanding, summary, unfamiliar words.` },
            { id: `second-read`, label: `Second-Read Reader`, color: `#A78BFA`, description: `Microscope. Zooming in on how the passage is built — sentence rhythm, paragraph breaks, order.` },
            { id: `third-read`,  label: `Third-Read Reader`,  color: `#FBBF24`, description: `Detective. Hunting word choices — why every word is the word the author picked.` },
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
              correctAnswer: `first-read`,
              realWorldExample: `Pure first read — getting the basic story straight and flagging unfamiliar words.`,
              explanation: `A short summary at the top. Basic underlines for setting. A question mark on an unfamiliar word. Classic first-read moves — eyeglasses on, just trying to see the passage clearly.`,
            },
            {
              id: `case-2`,
              caseTitle: `Reader #2`,
              clues: [
                { text: `Numbered each sentence in the margin: 1 through 7.` },
                { text: `Drew a bracket around the first three sentences and wrote: "Sets up the scene. Short, then longer."` },
                { text: `Noted next to the last two sentences: "Pace slows down — author is making us linger."` },
              ],
              correctAnswer: `second-read`,
              realWorldExample: `Pure second read — looking at how the passage was paced and ordered.`,
              explanation: `Numbering sentences, tracking pacing, noticing where the author slows down. None of those are about meaning — they're all about construction. This reader has the microscope out.`,
            },
            {
              id: `case-3`,
              caseTitle: `Reader #3`,
              clues: [
                { text: `Circled the word "forgotten" with a long note: "Books don't actually forget. Why give books feelings? Is the library being treated like it's alive?"` },
                { text: `Underlined "she pushed past" and wrote: "Not 'opened.' PUSHED PAST. Why? Does Mira feel something is in her way?"` },
                { text: `In the margin: "What does it mean that the smell is 'something else she couldn't name'? Why doesn't the author just name it?"` },
              ],
              correctAnswer: `third-read`,
              realWorldExample: `Pure third read — every annotation is hunting a word choice.`,
              explanation: `Each annotation is a "why" question about a specific word. This reader is treating the author as a maker who picked every word on purpose. Pure detective work.`,
            },
            {
              id: `case-4`,
              caseTitle: `Reader #4 — The Tricky One`,
              clues: [
                { text: `The page looks almost empty. No underlines. No circles. No marks across most of the passage.` },
                { text: `One annotation, in the margin next to the line about the books: "The books forgot. Not the people — the books. The author is giving objects memory. Why?"` },
                { text: `That's the whole annotation. One line on the whole page.` },
              ],
              correctAnswer: `third-read`,
              realWorldExample: `Depth isn't measured in marks. One sharp question can be deeper work than dozens of underlines.`,
              explanation: `An almost-empty page LOOKS like a lazy reader. But that single annotation is the deepest move in the lesson — questioning why an author gave objects memory. That's third-read detective work, done with restraint. Quantity of marks isn't the same as quality of thinking.`,
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
              question: `What's the FIRST read for?`,
              options: [
                `Figuring out why the author picked every word`,
                `Studying how the passage is structured`,
                `Comprehension — getting the basic meaning of what the passage says`,
                `Annotating every line in the margin`,
              ],
              correctIndex: 2,
              explanation: `First read = comprehension. You're putting on eyeglasses to see the passage clearly. What's it about, who's in it, what happens. Everything deeper builds on this floor.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `Which question best matches the SECOND read?`,
              options: [
                `Who is the main character?`,
                `How is the passage built — sentence rhythm, paragraph breaks, what comes first?`,
                `What does this word remind me of from my own life?`,
                `Is this passage worth my time?`,
              ],
              correctIndex: 1,
              explanation: `The second read shifts from "what" to "how." Structure, pacing, order — that's all second-read territory. Microscope's on.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `An author calls a character "hollow" instead of "sad." A THIRD-read reader would ask:`,
              options: [
                `Is "hollow" in the dictionary?`,
                `What page is this on?`,
                `Why did the author pick "hollow" specifically when "sad" was available?`,
                `How long did this sentence take to write?`,
              ],
              correctIndex: 2,
              explanation: `Third-read questions are "why this exact choice?" The author had other words and picked this one. Detectives ask why.` },

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
                `Third read — they're analyzing word choice`,
                `Second read — they're studying structure`,
                `First read — they're working on comprehension`,
                `They've finished all three`,
              ],
              correctIndex: 2,
              explanation: `Summarizing and learning unknown words are first-read moves. The reader hasn't gotten to structure or word-choice analysis yet.` },

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
            { id: `r1`, text: `Which read sounds hardest to you — first, second, or third? Why?` },
            { id: `r2`, text: `What's a book or story in your life that might be worth reading again, but as a third-read detective this time?` },
            { id: `r3`, text: `What surprised you about the difference between Reader #3 and Reader #4 in the investigation?` },
            { id: `r4`, text: `If you had to teach close reading to a younger sibling in one sentence, what would you say?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Reading is one of the few skills where the technique you use changes how much you get. Most people read every text the same way — eyes across, get the gist, done. The world's sharpest readers — scholars, judges, editors, top students — don't. They know when to skim, when to read once, and when to slow down to a crawl. The skill isn't reading fast or slow. The skill is knowing which speed each text deserves.`,
          familyAdventure: `Try a Three-Read Challenge as a family. Pick one short passage everyone has access to — the first paragraph of a favorite book, a song lyric, or a paragraph from the news. Everyone reads it three times silently — once for comprehension, once for structure, once for craft. After each read, take 30 seconds to share what you noticed. By the third read, compare notes: who caught what? Did anyone notice something nobody else did?`,
          creativePrompt: {
            intro: `Pick one short passage you love — from a book, a movie, a song, or even a speech. Now write a close read of it. Walk through what the first, second, and third reads each reveal.`,
            floor: `Write at least 5 sentences. One sentence on what the passage says (first read). Two sentences on how it's built (second read). Two sentences on word choices that seem deliberate (third read).`,
            stretch: `Write 8–10 sentences. Build a real argument about what makes the passage work — using specific evidence from the text. Pick one word or one sentence and defend why it's important.`,
            open: `Write as much as you want. Treat the passage the way a scholar would. Annotate it on paper first, then write a longer close-reading essay that pulls in everything you noticed.`,
            frames: [
              `The passage I picked is ___.`,
              `On the first read, what stood out was ___.`,
              `On the second read, I noticed the author built it by ___.`,
              `On the third read, the word choice I think is most deliberate is ___ because ___.`,
              `One thing I missed at first but caught later was ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You now know the three reads — first for comprehension, second for structure, third for craft — and you know that messy pages mean active brains. Next lesson: every author writes for a reason. Inform, persuade, entertain — how do you tell which one? See you there. — Quill.`,
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
  console.log(`[LESSON-ELA-UE-L01 v4] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
