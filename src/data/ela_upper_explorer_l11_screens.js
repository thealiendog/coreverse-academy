// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L11 — Taking Notes and Paraphrasing
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS W.4.8 / W.5.8 — Take notes and provide a list of sources
//            CCSS W.4.9 / W.5.9 — Draw evidence from texts
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — why and what to write down, paraphrasing vs quoting vs
//        summarizing, the Read-Cover-Write method, avoiding plagiarism
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-11`,
      title: `Taking Notes and Paraphrasing`,
      duration: 18,
      xpReward: 75,
      badge: `note-taking-ninja`,
      badgeName: `Note-Taking Ninja`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. You read a great article. An hour later, you remember almost none of it. Without notes, information leaks out of your brain like water through a sieve. Today you'll learn what to actually write down, how to paraphrase (which proves you understand AND avoids accidental cheating), and a technique called Read-Cover-Write that turns notes from a chore into a real thinking tool. Let's go.`,
          headline: `Notes and Paraphrasing`,
          subtitle: `How to capture what you read without forgetting it or copying it`,
          visual: `/ue-assets/ela/l11-welcome.webp`,
        },

        // ── SECTION 1 — WHY NOTES AND WHAT TO WRITE ───────────────────────────
        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Notes Are Not Copying`,
          paragraphs: [
            `Notes serve three jobs. They help you REMEMBER what you read. They organize your THINKING. And they give you a REFERENCE you can come back to later. Research even shows that the act of writing notes by hand improves memory by itself, separate from looking at them later. Notes are part of how learning actually happens.`,
            `Here's the rule. Don't write everything. That's just copying. Instead, capture main IDEAS and key SUPPORTING DETAILS. If a paragraph has seven sentences, your notes might be one or two that summarize the point. Ask yourself: if I could only keep three things from this page, what would they be? Those three are your notes.`,
          ],
          image: `/ue-assets/ela/l11-s1-not-copying.webp`,
          imageCaption: `Good notes are short, focused, and in your own words.`,
          vocab: [
            { word: `note-taking`,
              definition: `Capturing main ideas and key supporting details from a source in your own short, organized form.`,
              audioPrompt: `Note-taking is capturing the most important ideas from a source in your own words, {name}. Not copying. Not writing everything. Just the main ideas and the key details that support them. Good notes are short. They're focused. They're in your own language. The test of good notes is whether you could rebuild the argument later just from what you wrote.` },
            { word: `main idea`,
              definition: `The central point of a paragraph or passage — the one thing the author most wants you to take away.`,
              audioPrompt: `The main idea is the central point of a passage, {name}. Every paragraph has one. It's what the author most wants you to understand. Details, examples, and evidence all support the main idea, but they're not it. Good note-takers train themselves to identify the main idea first, then capture only the details that matter most. The question to ask is: if I could only remember one thing from this paragraph, what would it be?` },
          ],
        },

        // ── SECTION 2 — PARAPHRASE, QUOTE, SUMMARIZE ─────────────────────────
        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Paraphrase, Quote, or Summarize`,
          paragraphs: [
            `Three ways exist to use what you read. PARAPHRASING means restating an idea completely in your own words and sentence structure. Same meaning, your voice. QUOTING means using the exact words from the source, with quotation marks. SUMMARIZING means condensing a lot of information into a short overview, also in your words.`,
            `Most of the time, you should paraphrase. Quoting is for those rare moments when the exact wording matters (like a famous historical quote). Summarizing is for when you need to cover a lot of ground fast. Paraphrasing is the workhorse skill that proves you understand the material AND keeps you from accidentally copying.`,
          ],
          image: `/ue-assets/ela/l11-s2-paraphrase-quote-summarize.webp`,
          imageCaption: `Paraphrase = restate. Quote = exact words. Summarize = condense.`,
          vocab: [
            { word: `paraphrase`,
              definition: `Restating an idea completely in your own words and sentence structure, while keeping the original meaning.`,
              audioPrompt: `To paraphrase is to restate an idea in your own words, {name}. Not just swapping a word or two. Completely different wording, completely different sentence structure, same meaning. Paraphrasing proves you actually understood the source. If you can rewrite it from scratch and keep the meaning, the idea is yours to use. If you can only kind of change the words, you didn't really get it. Read it again.` },
            { word: `summarize`,
              definition: `Condensing a large amount of information into a short overview in your own words, covering the key points.`,
              audioPrompt: `To summarize is to condense a lot of information into a short overview, {name}. While a paraphrase restates one specific idea in detail, a summary covers the big picture of a whole passage or section. You decide what the key points are and write them briefly in your own words. Summarizing is useful when you need to capture the gist of something fast, without going point by point.` },
          ],
        },

        // ── SECTION 3 — READ-COVER-WRITE ──────────────────────────────────────
        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Read-Cover-Write Method`,
          paragraphs: [
            `Here's the best paraphrasing trick ever invented. Step one: READ the passage. Step two: COVER it up so you can't see it. Step three: WRITE what you remember in your own words. Step four: peek back and check that your version captured the meaning accurately. This forces your brain to actually process the information instead of just rearranging the author's words.`,
            `Try it the next time you're stuck paraphrasing. The moment you can't see the original, your own language takes over. Your version will sound like YOU, not like the author. If your paraphrase looks too similar to the source after Read-Cover-Write, that's a sign you didn't fully understand the idea yet. Read it again and try once more.`,
          ],
          image: `/ue-assets/ela/l11-s3-read-cover-write.webp`,
          imageCaption: `Read it. Cover it. Write it. Check it. Best paraphrasing trick there is.`,
          vocab: [
            { word: `plagiarism`,
              definition: `Using someone else's words or ideas without giving them credit, on purpose or by accident.`,
              audioPrompt: `Plagiarism is using someone else's words or ideas without giving them credit, {name}. It happens on purpose when someone copies and pretends it's theirs. It happens by accident when someone takes sloppy notes and forgets where an idea came from. Either way, the rule is the same. Paraphrase carefully, quote when you must, and always note where ideas came from. The Read-Cover-Write method is the best protection against accidental plagiarism.` },
            { word: `Read-Cover-Write`,
              definition: `A three-step paraphrasing method: read the passage, cover it up, then write what you remember in your own words — then check for accuracy.`,
              audioPrompt: `Read-Cover-Write is the best paraphrasing technique there is, {name}. Step one: read the passage. Step two: cover it so you can't see it. Step three: write what you remember in your own words. Then peek back and check. When the original is hidden, your own language takes over. You can't accidentally copy what you can't see. If your version still looks too close to the source after this, that's a sign you didn't fully understand it yet. Read it again.` },
          ],
        },

        // ── SECTION 4 — KEEP CREDIT WITH THE IDEA ─────────────────────────────
        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Keep the Credit With the Idea`,
          paragraphs: [
            `Every note you take should record WHERE the idea came from. Title, author, date, page or URL. The single biggest cause of accidental plagiarism is sloppy note-taking. You wrote down a great fact months ago. Now you don't remember if it came from you or from a book. If you didn't note the source, you can't credit it. And if you can't credit it, you can't safely use it.`,
            `Honest researchers credit their sources. It's not just a rule. It's how knowledge actually works. Every idea comes from somewhere. By citing where you got something, you let your reader trace the trail back. You also protect yourself from accusations that you stole ideas. Notes WITH sources are useful. Notes WITHOUT sources are unusable.`,
          ],
          image: `/ue-assets/ela/l11-s4-credit-the-source.webp`,
          imageCaption: `If you didn't note the source, you can't safely use the idea.`,
          vocab: [
            { word: `quote`,
              definition: `Using the exact words from a source, enclosed in quotation marks, with credit to the original author.`,
              audioPrompt: `To quote is to use the exact words from a source, {name}. Quoted text goes in quotation marks, and the source gets credited. Quotes are for moments when the exact wording matters: a famous historical line, a perfect phrase, or a piece of testimony where the precise words are evidence. Most of the time, paraphrasing is better. Quoting too much makes your writing feel patched together instead of yours.` },
            { word: `attribution`,
              definition: `Giving proper credit to the original author or source for their words or ideas.`,
              audioPrompt: `Attribution means giving credit where credit is due, {name}. When you use someone else's words in a quote, attribution says who said it. When you use someone's idea in a paraphrase, attribution says where it came from. Attribution isn't just a rule to follow. It's how honest communication works. Every idea has a source. Tracing that trail is what lets knowledge build on itself.` },
          ],
        },

        // ── INTERACTIVE GAME — Paraphrase Investigation ──────────────────────
        {
          id: `l11-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Original passage:\n\n"Honeybees communicate through a complex movement called the waggle dance, which tells other bees the direction and distance of a food source. Without this dance, hives could not coordinate where to find nectar."\n\nFour students wrote about this. For each one, decide: is it a GOOD PARAPHRASE, a TOO-CLOSE COPY (accidental plagiarism risk), or a CORRECT QUOTE?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `good-paraphrase`, label: `Good Paraphrase`, color: `#34D399`, description: `Same meaning in completely different wording and sentence structure. Cited the source. Safe to use.` },
            { id: `too-close-copy`,   label: `Too-Close Copy`,   color: `#F87171`, description: `Used the author's wording or sentence structure with only minor changes. Risk of plagiarism.` },
            { id: `correct-quote`,   label: `Correct Quote`,   color: `#FBBF24`, description: `Uses exact words from the source, in quotation marks, with credit. Acceptable.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Student #1`,
              clues: [
                { text: `"Bees use a special wiggle dance to tell each other where food is."` },
                { text: `"They use it to share direction and distance to nectar."` },
                { text: `Credits the original article at the end of her notes.` },
              ],
              correctAnswer: `good-paraphrase`,
              realWorldExample: `Solid paraphrase. Different words, same meaning, properly credited.`,
              explanation: `Different sentence structure. Different vocabulary ("special wiggle dance" instead of "complex movement"). Captures the meaning fully. Cites the source. Clean paraphrase.`,
            },
            {
              id: `case-2`,
              caseTitle: `Student #2`,
              clues: [
                { text: `"Honeybees communicate using a complex motion called the waggle dance."` },
                { text: `"This dance tells bees the direction and distance to find food."` },
                { text: `Didn't credit the source.` },
              ],
              correctAnswer: `too-close-copy`,
              realWorldExample: `Classic example of accidental plagiarism. Words swapped, structure unchanged.`,
              explanation: `Almost identical sentence structure. "Communicate using" instead of "communicate through." "Direction and distance to find food" instead of "direction and distance of a food source." This is rephrasing, not paraphrasing. And no credit was given. This kind of "swap-a-word" copy is the most common accidental plagiarism.`,
            },
            {
              id: `case-3`,
              caseTitle: `Student #3`,
              clues: [
                { text: `Writes: According to the article, bees "communicate through a complex movement called the waggle dance."` },
                { text: `The exact phrase is in quotation marks.` },
                { text: `The source is credited at the end.` },
              ],
              correctAnswer: `correct-quote`,
              realWorldExample: `Proper quoting. Exact words, quote marks, credit.`,
              explanation: `When you use the author's exact words, you must put them in quotation marks AND credit the source. This student did both. It's a quote, not a paraphrase, and it's done correctly.`,
            },
            {
              id: `case-4`,
              caseTitle: `Student #4 — The Tricky One`,
              clues: [
                { text: `"The waggle dance is a complex movement honeybees use to communicate where to find food."` },
                { text: `"Without it, hives wouldn't be able to coordinate where the nectar is."` },
                { text: `Cites the source at the end.` },
              ],
              correctAnswer: `too-close-copy`,
              realWorldExample: `Sneaky one. Looks like paraphrasing but isn't fully.`,
              explanation: `The first sentence is rearranged but uses too many of the author's exact words ("complex movement," "communicate," "find food"). The second sentence is almost identical to the original. Citing the source isn't enough by itself. The wording AND structure both need to be in your own voice. This student needs to apply Read-Cover-Write and try again. The lesson: credit alone doesn't fix copying. The words have to actually be yours.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What are the three main JOBS of taking notes?`,
              options: [
                `Copying every word, decorating the page, impressing the teacher`,
                `Helping you remember, organizing your thinking, and creating a reference for later`,
                `Filling notebooks, looking busy, and showing effort`,
                `Memorizing word-for-word, testing speed, and proving you read it`,
              ],
              correctIndex: 1,
              explanation: `Notes help you remember, organize, and refer back. Research shows even just writing notes by hand improves memory, separate from looking at them later.` },

            { id: `l11-q2`, format: `multiple-choice`,
              question: `What's the difference between PARAPHRASING and QUOTING?`,
              options: [
                `They're the same`,
                `Paraphrasing means restating ideas in your own words; quoting uses the exact original words inside quotation marks`,
                `Paraphrasing is for fiction, quoting is for nonfiction`,
                `Quoting uses your words; paraphrasing uses theirs`,
              ],
              correctIndex: 1,
              explanation: `Paraphrasing rewrites the idea in your own language. Quoting uses the original words exactly, with quote marks. Paraphrasing is usually better; quoting is for when the exact wording really matters.` },

            { id: `l11-q3`, format: `multiple-choice`,
              question: `What is the READ-COVER-WRITE method?`,
              options: [
                `Reading three times fast`,
                `Read the passage, cover it up, write what you remember in your own words, then check for accuracy`,
                `Reading only first and last sentences`,
                `Covering your eyes and guessing`,
              ],
              correctIndex: 1,
              explanation: `Read-Cover-Write forces your brain to actually process the idea, not just rearrange the author's words. When you can't see the original, your own language takes over. Best paraphrasing trick out there.` },

            { id: `l11-q4`, format: `multiple-choice`,
              question: `Roughly how much of the original should your notes capture?`,
              options: [
                `Every single word`,
                `About one-quarter: the main ideas and key supporting details, not everything`,
                `Only the first sentence of each paragraph`,
                `Nothing — notes aren't useful`,
              ],
              correctIndex: 1,
              explanation: `Good notes are far shorter than the original. They capture main ideas and key details, not everything. Ask yourself: if I could only keep three things from this page, what would they be?` },

            { id: `l11-q5`, format: `true-false`,
              question: `True or false: Citing the source is enough to make sure you haven't plagiarized, even if your wording is very close to the original.`,
              correctAnswer: false,
              explanation: `False. Citation alone isn't enough. The wording AND structure need to be your own (or the text in quotation marks). Otherwise, you're copying with credit, which is still a kind of plagiarism.` },

            { id: `l11-q6`, format: `multiple-choice`,
              question: `What is PLAGIARISM?`,
              options: [
                `A way of formatting`,
                `Using someone else's words or ideas without giving them credit, on purpose or by accident`,
                `Reading a source too many times`,
                `Citing too many sources`,
              ],
              correctIndex: 1,
              explanation: `Plagiarism is taking words or ideas without credit. It can be intentional (copying on purpose) or accidental (sloppy notes lose track of the source). The Read-Cover-Write method and good source tracking are the best protection against both.` },

            { id: `l11-q7`, format: `multiple-choice`,
              question: `Original passage: "Honeybees communicate through a complex movement called the waggle dance." A student writes: "Bees use a complex motion called the waggle dance to communicate." What is this?`,
              options: [
                `A good paraphrase`,
                `A too-close copy — words swapped but structure and key phrases nearly identical`,
                `A proper quote`,
                `A correct summary`,
              ],
              correctIndex: 1,
              explanation: `Too-close copy. The student swapped a few words but kept the same sentence structure and most of the original vocabulary. This is the most common form of accidental plagiarism. Apply Read-Cover-Write and try again.` },

            { id: `l11-q8`, format: `multiple-choice`,
              question: `Why is recording the SOURCE of every note so important?`,
              options: [
                `It looks more professional`,
                `Without the source recorded, you can't credit the idea later — and if you can't credit it, you can't safely use it`,
                `Sources are required for every test`,
                `Sources make your notes longer`,
              ],
              correctIndex: 1,
              explanation: `Sloppy notes that lose track of where ideas came from are the #1 cause of accidental plagiarism. Always record the source with the note. Future-you will thank present-you.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's your usual note-taking style right now? What would you change?` },
            { id: `r2`, text: `Have you ever written something and then worried it sounded too much like the original source? What did you do?` },
            { id: `r3`, text: `Why do you think paraphrasing is harder than quoting, even though it sounds easier?` },
            { id: `r4`, text: `If you taught the Read-Cover-Write method to a friend in one sentence, what would you say?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Paraphrasing isn't just for school. It's what professionals do every day. Journalists paraphrase what experts said. Lawyers paraphrase what witnesses said. Teachers paraphrase what textbooks say. Even in everyday conversation, when you tell a friend what someone else told you, you're paraphrasing. The skill of accurately capturing someone else's meaning in your own words is one of the highest forms of understanding. It also keeps you honest.`,
          familyAdventure: `Family Read-Cover-Write Race. Pick one short article. Each family member reads it. Then everyone closes the article and writes a one-sentence paraphrase of the main idea from memory. Compare. Did everyone capture the same core meaning? Were the words different? This exercise shows that paraphrasing isn't about replacing words. It's about understanding well enough to rewrite from scratch.`,
          creativePrompt: {
            intro: `Find a short passage from any article or book. Practice all three skills on it.`,
            floor: `Write at least 5 sentences. Include one direct quote, one paraphrase, and one summary of the same passage. Label each one.`,
            stretch: `Write 8 to 10 sentences. After your quote, paraphrase, and summary, add a paragraph explaining which one you'd use in different situations and why.`,
            open: `Write as much as you want. Build a full set of research notes on the passage that demonstrate proper citation, accurate paraphrasing, and selective quoting.`,
            frames: [
              `My passage is from ___.`,
              `Direct quote: "___" (with credit).`,
              `Paraphrase: ___.`,
              `Summary: ___.`,
              `I'd use the ___ when ___ because ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now take notes that capture main ideas, paraphrase without accidentally copying, use the Read-Cover-Write method, and keep your sources connected to your notes. Next lesson: we shift from reading and research into writing your own arguments. How do you build a strong essay that actually convinces people? See you there. — Quill.`,
          badge: `note-taking-ninja`,
          badgeName: `Note-Taking Ninja`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L11;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L11.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L11 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
