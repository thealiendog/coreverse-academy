// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L01 — Close Reading: Analyzing Texts in Depth
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RL.4.1 / RL.5.1 / RI.4.1 / RI.5.1 — cite textual evidence, analyze in detail
//            CCSS RL.4.4 / RL.5.4 / RI.4.4 / RI.5.4 — word choice and meaning
// CALIBRATED: UE spec v1.1 (May 2026)
// SCOPE: 5 concepts — what close reading is + the three reads (comprehension, structure, craft) + annotation
// CUT: skimming/scanning theory, speed reading, rhetorical analysis (moved to later lessons)
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-01`,
      title: `Close Reading: Analyzing Texts in Depth`,
      duration: 22,
      xpReward: 75,
      badge: `close-reader`,
      badgeName: `Close Reader`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Quill here. I've been your ELA guide since the Little Stars days — back when letters became sounds, sounds became words, and words became stories. Now we step into something deeper: reading like a scholar. Today's question — what if reading something once means you've barely read it at all? By the end of this lesson, you'll know how the sharpest readers in the world get more out of one page than most people get out of a whole book.`,
          headline: `Close Reading`,
          subtitle: `How to read a passage three times — and find something new each time`,
          visual: `/ue-assets/ela/l01-welcome.webp`,
        },

        // ── SECTION 1 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Close Reading Actually Is`,
          paragraphs: [
            `Most reading looks like this. Eyes move across the page. The brain catches the gist. Done. That kind of reading works fine for menus, group chats, and the back of a cereal box. But for anything that actually matters — a book that changed people's lives, a speech that shaped a country, a poem written 200 years ago — that kind of reading misses almost everything.`,
            `Close reading is the opposite. You slow down. You read the same passage twice, three times, even four times — but with a different goal each pass. First time: what does it say? Second time: how is it built? Third time: why every word? Each reading uncovers something the others walked right past.`,
            `Scholars do this. Lawyers do it with contracts. Judges do it with the Constitution. Literary critics do it with novels. They aren't smarter than you — they're just more patient. And once you know how to do it, you'll spot things in any text that most readers miss completely.`,
          ],
          image: `/ue-assets/ela/l01-s1-close-reading.webp`,
          imageCaption: `One passage. Three readings. Three different things to find.`,
          vocab: [
            { word: `close reading`,
              definition: `Reading the same text more than once, with a different focus each pass, to uncover layers of meaning a single read misses.`,
              audioPrompt: `Close reading is reading the same passage more than once, with a different goal each time, {name}. First pass — what does it say? Second pass — how is it built? Third pass — why these particular words? Each reading reveals what the others missed. Scholars, judges, and literary critics all work this way. It's slower, but it makes you sharper than readers who only ever read something once. The first text you close-read will surprise you with how much was hiding in plain sight.` },
            { word: `passage`,
              definition: `A short section of a text — usually a paragraph or a few sentences — that a reader pulls out to read closely.`,
              audioPrompt: `A passage is a short chunk of text, {name} — usually a paragraph or a few sentences — that you pull out to read closely. You don't close-read a whole book. You pick the passage that seems most important, most strange, or most beautiful, and you focus there. The opening of a story. The climax. A paragraph that confused you. A line that made you stop. Skilled readers learn to spot which passages reward slowing down — that's a skill in itself.` },
          ],
        },

        // ── SECTION 2 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `First Read: What Does It Say?`,
          paragraphs: [
            `The first read has one job: understanding. What is this passage about? Who's in it? What happens? What's the main idea? You're not analyzing yet. You're not asking deep questions. You're just getting the surface.`,
            `After your first read, you should be able to say what the passage is about in two or three sentences. If you can't — read it again. Comprehension is the foundation for everything else. You can't ask why an author made a choice if you don't first know what they actually said.`,
            `The first read also catches the words you don't know. Circle them. Look them up if you can. A word you skip becomes a hole in your understanding — and that hole grows bigger on every read after. Fix the holes before they cause problems later.`,
          ],
          image: `/ue-assets/ela/l01-s2-first-read.webp`,
          imageCaption: `First read = comprehension. Just get the surface.`,
          vocab: [
            { word: `comprehension`,
              definition: `Understanding the basic meaning of a text — who, what, where, when, and what happens.`,
              audioPrompt: `Comprehension is the basic understanding of what a text says, {name}. Who's in it. What happens. What's the point. It sounds simple, but a lot of readers skip past comprehension and try to analyze before they actually understand. That's like debating a movie you only half-watched. Get the basics first. Be able to summarize the passage in two or three sentences. If you can't, read it again. Comprehension is the floor everything else stands on — never the ceiling.` },
            { word: `summary`,
              definition: `A short statement of the main ideas of a text, in your own words.`,
              audioPrompt: `A summary is a short statement of the main ideas of a passage in your own words, {name} — usually two or three sentences. It captures the surface, what the passage is about and what happens, without going into analysis. After every first read, try writing a summary. It forces your brain to commit to what you actually understood. If you can't write one, you don't understand the passage yet. That's not a failure — that's useful information. Read it again.` },
          ],
        },

        // ── SECTION 3 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Second Read: How Is It Built?`,
          paragraphs: [
            `Now things get interesting. The second read isn't about what the passage says — it's about how the author put it together. What's the structure? Where do the paragraph breaks fall? What order are the ideas in? What evidence supports the claims?`,
            `You're looking at the text the way a mechanic looks at an engine — not whether it runs, but how. Notice the long sentences and the short ones. Notice where the author slows down with detail. Notice where they speed up and skip ahead. Authors don't pace by accident. Every choice is a choice.`,
            `The second read often reveals the author's strategy. If a persuasive essay starts with a story, that's a hook. If a science article saves the most surprising fact for last, that's a payoff. Once you see the structure, the text stops feeling random — and starts feeling designed.`,
          ],
          image: `/ue-assets/ela/l01-s3-second-read.webp`,
          imageCaption: `Second read = structure. How is the text built?`,
          vocab: [
            { word: `structure`,
              definition: `The way a text is organized — its parts, sections, order, and the connections between ideas.`,
              audioPrompt: `Structure is the architecture of a text, {name} — how the author arranged the parts. Where the paragraph breaks fall. What comes first, what comes last. A persuasive essay that saves its strongest evidence for the end hits harder than one that opens with it. A story that starts in the middle of the action lands differently than one that starts at the beginning. Authors choose structure deliberately. Once you see it, you start seeing the design behind every text.` },
            { word: `evidence`,
              definition: `Facts, examples, statistics, or quotations an author uses to support a claim.`,
              audioPrompt: `Evidence is what an author uses to back up a claim, {name}. Facts. Statistics. Examples. Quotes from experts. Stories from real people. Without evidence, a claim is just an opinion floating in the air. With evidence, the claim becomes an argument. On your second read, notice what evidence the author chose. Why this fact and not that one? Why an expert here and a story there? The pattern shows you what the author thinks is convincing.` },
          ],
        },

        // ── SECTION 4 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Third Read: Why These Choices?`,
          paragraphs: [
            `The third read is the deepest, and a lot of readers never make it this far. The question stops being what or how — and becomes why. Why did the author pick this word and not a simpler one? Why open with this sentence? Why include this detail but leave that one out?`,
            `Every word in well-crafted writing was chosen on purpose. The author had options — different words, different sentence orders, different details. They picked these specific ones. The third read asks why. When you can answer that, you stop reading the text and start reading the author.`,
            `This is where critical thinking lives. A character is called "hollow" instead of "sad" — that's a clue. A speech ends on a one-word sentence — that's a strategy. A news article quotes one expert by name and another only as "officials said" — that's a choice with consequences. Once you start asking why, you can't unsee it.`,
          ],
          image: `/ue-assets/ela/l01-s4-third-read.webp`,
          imageCaption: `Third read = craft. Why every word is there.`,
          vocab: [
            { word: `craft`,
              definition: `The deliberate, skilled choices an author makes — about words, structure, pacing, and detail — to shape how a text affects readers.`,
              audioPrompt: `Craft is the deliberate, skilled work behind a text, {name}. Word choice. Sentence rhythm. What to include and what to leave out. Pacing. Tone. Every one of those is a decision made on purpose. When you read for craft, you stop treating the text like it just happened — and start seeing the author as a maker. Like a carpenter who picked this wood and that joint for specific reasons. Reading for craft is what scholars and writers do.` },
            { word: `deliberate`,
              definition: `Done on purpose, with thought and intention — not random or accidental.`,
              audioPrompt: `Deliberate means done on purpose, {name}. With thought. With intention. The opposite of random or accidental. When we say an author was deliberate about a word choice, we mean they picked it on purpose — they had other options and chose this one. Once you start assuming authors are deliberate, your reading changes. Strange word? Not random — deliberate. Weird sentence break? Not a mistake — deliberate. A detail that seems out of place? Probably there on purpose. The question becomes why.` },
          ],
        },

        // ── SECTION 5 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Annotation: Making the Page Talk Back`,
          paragraphs: [
            `Close readers annotate. That means they mark up the text as they read — underlining, circling, writing notes in the margins. It looks messy. That's the point. A clean book at the end of a close read usually means you weren't really thinking.`,
            `There's no one right way to annotate. Some readers underline key phrases. Some circle unfamiliar words. Some write questions in the margin: "Why this word?" "What does this remind me of?" Some draw arrows between connected ideas. The system doesn't matter as much as the habit. Active reading leaves marks.`,
            `Annotation isn't decoration. It's evidence of thinking. Look back at any well-annotated book — the marks aren't random. Each one captured something the reader noticed. The page becomes a record of the conversation between you and the text. When you come back a year later, your annotations bring the whole thing back.`,
          ],
          image: `/ue-assets/ela/l01-s5-annotation.webp`,
          imageCaption: `Annotation = the reader thinking on the page.`,
          vocab: [
            { word: `annotate`,
              definition: `To mark up a text while reading — with underlines, circles, notes, questions, and arrows — to track your thinking.`,
              audioPrompt: `To annotate is to mark up a text while you read it, {name}. Underline key phrases. Circle words you don't know. Write questions in the margin. Draw arrows between connected ideas. Star surprising lines. The point isn't to follow a system — it's to leave evidence of your thinking on the page. A clean book at the end of a close read usually means the reader was passive. A messy one means they were active. Annotation slows you down in the best possible way.` },
            { word: `margin`,
              definition: `The blank space at the edges of a page, used by close readers for notes, questions, and reactions.`,
              audioPrompt: `The margin is the blank space at the edges of a page, {name}. For most readers, it stays empty. For close readers, it's where the conversation happens. That's where you write questions — "Why this word?" "What does this remind me of?" That's where you note reactions: surprise, confusion, recognition. The margin is the place where you stop being a passive reader and start being an active one. Good annotators come back to their margins later and remember exactly what they were thinking.` },
          ],
        },

        // ── INTERACTIVE GAME — Investigation: Four Readers, One Passage ───────
        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Time to investigate, {name}. Four different readers each annotated the SAME passage. Your job is to figure out what kind of reader each one is. Here's the passage they all marked up:\n\n"The old library smelled of paper and dust and something else Mira couldn't name. She pushed past the heavy oak door and stopped. Books lined every wall, floor to ceiling, in colors so faded they had forgotten what they used to be. Somewhere in the back, a clock ticked. Mira had been inside hundreds of libraries. None of them had ever felt like this."\n\nNow look at how each reader marked it up. Which read level — first, second, or third — was each one actually doing? Watch out: one of these is trickier than it looks.`,
          options: [
            { id: `first-read`,  label: `First-Read Reader (Comprehension)`, color: `#60A5FA`, description: `Focused on what the passage says — basic understanding, summary, looking up unknown words.` },
            { id: `second-read`, label: `Second-Read Reader (Structure)`,    color: `#A78BFA`, description: `Focused on how the passage is built — sentence rhythm, paragraph breaks, evidence, organization.` },
            { id: `third-read`,  label: `Third-Read Reader (Craft)`,         color: `#FBBF24`, description: `Focused on why the author made specific choices — word choice, deliberate detail, design.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Reader #1`,
              clues: [
                { text: `At the top of the page, wrote: "A girl named Mira walks into an old library that feels different from other libraries she's been in."` },
                { text: `Underlined the words "old library" and "heavy oak door."` },
                { text: `Circled the word "faded" with a small question mark next to it.` },
              ],
              correctAnswer: `first-read`,
              realWorldExample: `This is what comprehension looks like in practice — getting the basic story straight and flagging unfamiliar words.`,
              explanation: `A short summary at the top. Basic underlines for setting. A question mark on an unfamiliar word. Classic first-read moves. This reader is focused on the surface — what the passage says — not yet on how it's built or why.`,
            },
            {
              id: `case-2`,
              caseTitle: `Reader #2`,
              clues: [
                { text: `Numbered each sentence in the margin: 1 through 7.` },
                { text: `Drew a bracket around the first three sentences and wrote: "Sets up the scene. Short, then longer."` },
                { text: `Noted next to the last two sentences: "Pace slows down at the end — author is making us linger before the next moment."` },
              ],
              correctAnswer: `second-read`,
              realWorldExample: `This is a structural reader — looking at how the author paced and ordered the passage, not just what it said.`,
              explanation: `Numbering sentences, tracking pacing, noticing where the author slows down or speeds up. None of those are about meaning — they're all about construction. This reader has already done the first read and is now investigating how the passage was built.`,
            },
            {
              id: `case-3`,
              caseTitle: `Reader #3`,
              clues: [
                { text: `Circled the word "forgotten" with a long note: "Books don't actually forget. Why give books feelings? Is the library being treated like it's alive?"` },
                { text: `Underlined "she pushed past" and wrote: "Not 'opened.' Pushed PAST. Why? Does Mira feel something is in her way?"` },
                { text: `In the margin: "What does it mean that the smell is 'something else she couldn't name'? Why doesn't the author just name it?"` },
              ],
              correctAnswer: `third-read`,
              realWorldExample: `This is craft-level reading — interrogating why every word is the word the author chose.`,
              explanation: `Each annotation is a "why" question about a specific word choice. The reader is treating the author as a maker who picked every word on purpose. That's third-read territory: not what the passage says, not how it's built, but why these particular choices.`,
            },
            {
              id: `case-4`,
              caseTitle: `Reader #4 — The Tricky One`,
              clues: [
                { text: `The page looks almost empty. No underlines. No circles. No marks across most of the passage.` },
                { text: `One annotation, in the margin next to the line about the books: "The books forgot. Not the people — the books. The author is giving objects memory. Why?"` },
                { text: `That's the whole annotation. One line of writing on the whole page.` },
              ],
              correctAnswer: `third-read`,
              realWorldExample: `Depth of close reading isn't measured in marks. One sharp question about word choice can be deeper work than dozens of underlines.`,
              explanation: `An almost-empty page looks like a lazy reader. But that single annotation is the deepest move in the lesson — interrogating why an author chose to treat objects as if they have feelings. That's third-read craft work, just done with restraint. Lesson: quantity of marks isn't the same as quality of thinking.`,
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
              explanation: `Close reading isn't about speed or coverage — it's about depth. You read the same passage multiple times, with a different focus each pass, so you uncover what a single reading misses.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `What is the goal of the FIRST read?`,
              options: [
                `Figure out why the author picked every word`,
                `Notice the structure and pacing`,
                `Understand what the passage says — basic comprehension`,
                `Write a full analysis of the author's craft`,
              ],
              correctIndex: 2,
              explanation: `First read = comprehension. You're getting the surface: what the passage is about, who's in it, what happens. Everything deeper builds on this floor.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `Which question best matches the SECOND read?`,
              options: [
                `Who is the main character?`,
                `How is the passage organized — its sentence rhythm, paragraph breaks, and use of evidence?`,
                `What does this word remind me of from my own life?`,
                `Is this passage worth my time?`,
              ],
              correctIndex: 1,
              explanation: `The second read shifts from "what" to "how." Structure, pacing, paragraph breaks, and how the author uses evidence — that's all second-read territory.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `An author calls a character "hollow" instead of "sad." A third-read reader would ask:`,
              options: [
                `Is "hollow" in the dictionary?`,
                `What page is this on?`,
                `Why did the author pick "hollow" specifically when "sad" was available?`,
                `How long did this sentence take to write?`,
              ],
              correctIndex: 2,
              explanation: `Third-read questions are "why this exact choice?" The author had other words and picked this one. The third read assumes that choice was deliberate and asks what it does.` },

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
              explanation: `Underlining alone is passive — it marks "this is important" without saying why. Writing a question forces engagement. The margin is where thinking happens, not just noticing.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `A reader summarizes a passage in two sentences, looks up one unfamiliar word, and stops there. What read level is this reader at?`,
              options: [
                `Third-read — they're analyzing word choice`,
                `Second-read — they're studying structure`,
                `First-read — they're working on comprehension`,
                `They've finished all three reads`,
              ],
              correctIndex: 2,
              explanation: `Summarizing the surface meaning and learning unfamiliar words are first-read moves. The reader hasn't gotten to structure or craft yet. That's not a problem — it just means there's more work available if they go deeper.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `Why is close reading worth the extra time it takes?`,
              options: [
                `Teachers require it`,
                `It's a tradition in old books`,
                `It reveals layers of meaning that a single reading misses — making you a sharper reader and thinker`,
                `It makes books last longer`,
              ],
              correctIndex: 2,
              explanation: `Close reading is slower, but every important text — a contract, a poem, a speech, a research paper — rewards depth. One careful read of an important passage beats five fast reads every time.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a text in your life that you've only ever read once that might be worth a second read?` },
            { id: `r2`, text: `Which of the three reads (comprehension, structure, craft) sounds hardest to you, and why?` },
            { id: `r3`, text: `What surprised you about the difference between Reader #3 and Reader #4 in the investigation?` },
            { id: `r4`, text: `If you had to teach close reading to a younger sibling in one sentence, what would you say?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Reading is one of the few skills where the technique you use changes how much you actually get. Most people read every text the same way — eyes across, get the gist, move on. The world's sharpest readers — scholars, judges, editors, top students — don't. They have different speeds for different texts. They know when to skim, when to read once, and when to slow down to a crawl. The skill isn't reading fast or reading slow. The skill is knowing which speed each text deserves.`,
          familyAdventure: `Try a Three-Read Challenge as a family. Pick one short passage everyone has access to — the first paragraph of a favorite book, a poem you've heard before, a song's first verse, or a paragraph from the news. Everyone reads it three times silently — first for comprehension, then for structure, then for craft. After each read, take 30 seconds to share what you noticed. By the third read, compare notes: who caught what? Did anyone notice something nobody else did? You'll see how much was hiding in plain sight.`,
          creativePrompt: {
            intro: `Pick one short passage you love — from a book, a movie, a song, or even a speech. Now write a close read of it. Walk through what the first, second, and third reads each reveal.`,
            floor: `Write at least 5 sentences. One sentence summarizing what the passage says. Two sentences on its structure or pacing. Two sentences on word choices that seem deliberate.`,
            stretch: `Write 8–10 sentences. Build a real argument about what makes the passage work — using specific evidence from the text. Pick one word or one sentence and defend why it's important.`,
            open: `Write as much as you want. Treat the passage the way a scholar would. Annotate it on paper first, then write a longer close-reading essay that pulls in everything you noticed.`,
            frames: [
              `The passage I picked is ___.`,
              `On the first read, what stood out to me was ___.`,
              `On the second read, I noticed the author built it by ___.`,
              `On the third read, the choice I think is most deliberate is ___ because ___.`,
              `One thing I missed the first time but caught later was ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now explain what close reading actually is, walk through the three reads — comprehension, structure, craft — and tell the difference between a reader who's marking up a page and a reader who's actually thinking. Next lesson, we go after a different question: every author writes for a reason. Inform, persuade, entertain — how do you tell which one? See you there. — Quill.`,
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
  console.log(`[LESSON-ELA-UE-L01 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
