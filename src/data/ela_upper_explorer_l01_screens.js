// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L01 — Close Reading: Analyzing Texts in Depth
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.4.1 / RI.4.3 / RI.4.6 / RI.5.1 / RI.5.6
// CALIBRATED: UE spec v1.1 (May 2026)
// SCOPE: 3-read strategy + annotation + author craft awareness
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-01`,
      title: `Close Reading: Analyzing Texts in Depth`,
      duration: 20,
      xpReward: 75,
      badge: `close-reader`,
      badgeName: `Close Reader`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Quill here. I'm your ELA guide — a porcupine who reads every important passage at least three times, because each reading reveals something new. Most people read a text once and move on. But the deepest insights come from reading the same passage multiple times — first for meaning, then for structure, then for the author's craft. Today you're going to learn exactly how to do that. By the end, close reading will feel completely natural.`,
          headline: `Close Reading`,
          subtitle: `How to unlock every layer of meaning in any text`,
          visual: `/ue-assets/ela/l01-welcome.webp`,
        },

        // ── SECTION 1 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `First Read: What Does It Say?`,
          paragraphs: [
            `The first read is all about comprehension — understanding the basic meaning. What is this text about? What happens? What is the main idea? You're not analyzing yet, just understanding the surface level.`,
            `After the first read, you should be able to summarize the passage in a few sentences. If you can't, reread before going any deeper. Comprehension is the foundation everything else builds on. No amount of analysis helps if you're confused about what the text actually says.`,
            `Think about reading the way a scientist thinks about an experiment. You start by observing — no conclusions yet, just careful noticing. Your first read is pure observation. Write a quick summary afterward, even just a sentence, to lock in what you understood.`,
          ],
          image: `/ue-assets/ela/l01-s1-first-read.webp`,
          imageCaption: `The first read is for understanding what the text says — not yet how or why.`,
          vocab: [
            {
              word: `comprehension`,
              definition: `Understanding the basic meaning of a text — what it says on the surface level.`,
              audioPrompt: `Comprehension means understanding the basic meaning of a text, {name}. It sounds simple, but it's the most important step. If your comprehension is shaky — if you're confused about what happened or what the main idea is — then every analysis you build on top of it will be shaky too. Good readers check comprehension constantly: can I summarize this? Can I explain it in my own words? If the answer is no, they reread before going deeper. Comprehension is the foundation.`,
            },
            {
              word: `summary`,
              definition: `A short restatement of the main ideas in a text, in your own words.`,
              audioPrompt: `A summary is a short restatement of the main ideas in a text, {name}. The key phrase is "in your own words." Copying phrases from the text isn't summarizing — it's just copying. A real summary shows you understood what you read well enough to explain it yourself. Great summaries are short — two or three sentences for a short passage. After your first read of anything, write a quick mental summary: what was this about? What was the most important thing?`,
            },
          ],
        },

        // ── SECTION 2 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Second Read: How Does It Work?`,
          paragraphs: [
            `The second read focuses on structure and technique. How did the author organize the information? What text structure did they use — cause and effect, compare and contrast, chronological order, problem and solution? What evidence supports the claims?`,
            `You're looking at the mechanics — the way the text is built. Notice paragraph breaks, signal words, and the order of ideas. Words like "however," "because," "as a result," and "in contrast" are the author's signals for how ideas connect. Following those signals shows you the author's strategy.`,
            `The "how" reveals purpose. An author who organizes a text chronologically is telling a story in time. An author who uses cause and effect is helping you understand why things happened. An author who compares and contrasts is building your ability to judge. Notice the structure and you notice the strategy.`,
          ],
          image: `/ue-assets/ela/l01-s2-second-read.webp`,
          imageCaption: `The second read reveals structure — how the author built the argument.`,
          vocab: [
            {
              word: `text structure`,
              definition: `The way an author organizes information — such as cause/effect, compare/contrast, or chronological order.`,
              audioPrompt: `Text structure is the way an author organizes information, {name}. Common structures include chronological order, cause and effect, compare and contrast, and problem and solution. Authors choose structures deliberately. A news article about a disaster often uses cause and effect. A history book might use chronological order. When you spot the structure, you spot the author's strategy — that's one of the main goals of the second read. Look for signal words. They're the map.`,
            },
            {
              word: `signal words`,
              definition: `Words that show how ideas connect — such as "however," "because," "in contrast," and "as a result."`,
              audioPrompt: `Signal words show how ideas connect, {name}. "Because" signals a cause. "As a result" signals an effect. "However" and "in contrast" signal a comparison or contradiction. "First," "next," "finally" signal chronological order. Authors use these like road signs. On your second read, underline signal words and ask what job each one is doing — showing a cause, a contrast, a sequence? Signal words are one of the fastest ways to understand how a text is built.`,
            },
          ],
        },

        // ── SECTION 3 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Third Read: Why These Choices?`,
          paragraphs: [
            `The third read is the deepest. Why did the author use this particular word instead of a simpler one? Why start with that sentence? Why include this detail but not that one? Every word in a well-written text was chosen deliberately.`,
            `When you ask "why," you engage with the author as a craftsperson. You move from understanding to evaluating. This is where critical thinking lives. You're no longer just receiving the text — you're interrogating it.`,
            `This is also where you find the author's perspective and purpose. Does the author seem to admire the subject or distrust it? Are some viewpoints emphasized over others? Which details are vivid, and which are vague? Every choice reveals something about what the author values, believes, or wants you to feel.`,
          ],
          image: `/ue-assets/ela/l01-s3-third-read.webp`,
          imageCaption: `The third read: every word was chosen — why that one?`,
          vocab: [
            {
              word: `author's craft`,
              definition: `The deliberate choices an author makes — in word choice, structure, and detail — to create a specific effect.`,
              audioPrompt: `Author's craft is the set of deliberate choices a writer makes to create a specific effect, {name}. Word choice — using "shattered" instead of "broke" — is craft. Opening with a shocking fact instead of a definition — craft. Including one specific detail that makes the passage feel real — craft. On your third read, look at the writing itself, not just the message. Ask: what did the author choose? What was the alternative? Why this choice? Answering those questions is deep analysis.`,
            },
            {
              word: `perspective`,
              definition: `The author's particular point of view or way of seeing a topic, shaped by experience, values, and purpose.`,
              audioPrompt: `Perspective is the author's particular point of view, {name}. Two authors can write about the same topic and produce completely different texts — because they see it from different angles, with different values and goals. An author who grew up without clean water will write about water access differently than one who never had to think about it. On your third read, look for perspective: what does the author believe? What do they value? Recognizing perspective is how you read critically, not just passively.`,
            },
          ],
        },

        // ── SECTION 4 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Annotation: Leaving Your Marks`,
          paragraphs: [
            `Close readers annotate — they mark up the text as they read. Underline key phrases. Circle unfamiliar words. Write questions in the margins. Draw arrows connecting related ideas. Star surprising statements.`,
            `Annotations are a conversation between you and the text. They slow you down in a good way, forcing active engagement instead of passive reading. When you annotate, you're making decisions: what matters here? What's surprising? What question does this raise?`,
            `Don't worry about having a perfect system. Some readers use colors — one for vocabulary, one for main ideas, one for questions. Some just write marginal notes in their own words. What matters is that your annotations make the text more useful to you later, and that they prove you were thinking while you read.`,
          ],
          image: `/ue-assets/ela/l01-s4-annotation.webp`,
          imageCaption: `Annotation is a conversation between you and the text.`,
          vocab: [
            {
              word: `annotation`,
              definition: `Notes, underlines, circles, and questions a reader adds to a text while reading actively.`,
              audioPrompt: `Annotation means marking up a text as you read, {name}. Underlining, circling, writing questions in the margins, starring surprising ideas — all of that is annotation. It seems simple but it changes everything. When you annotate, you can't let words slide past — you have to decide what each part means and whether it matters. That's active reading. Pick one annotation habit and stick with it — even just writing one question per paragraph. That single habit will make you a noticeably better reader.`,
            },
            {
              word: `active reading`,
              definition: `Reading with full engagement — thinking, questioning, and responding to a text rather than just consuming it.`,
              audioPrompt: `Active reading means engaging with a text rather than letting words go past, {name}. A passive reader finishes a page and couldn't tell you what happened on it. An active reader is having a conversation with the author — agreeing, disagreeing, questioning, noticing. Annotation is one tool. So is pausing to summarize after each paragraph. So is asking "why did the author include this?" When you're present in the text, your comprehension goes up and you actually remember what you read.`,
            },
          ],
        },

        // ── INTERACTIVE ──────────────────────────────────────────────────────
        {
          id: `l01-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to apply what you learned, {name}. You'll look at four reading scenarios, one at a time. For each one, decide what kind of reading move fits best. Some of these are trickier than they look — pay attention to the details.`,
          headline: `Three-Read Investigation`,
          intro: `You're going to practice the three-read strategy on real passages. For each case, decide what kind of analysis belongs in each read.`,
          cases: [
            {
              id: `case-1`,
              title: `First Read in Action`,
              situation: `You open a science article about ocean currents. After reading it once, you realize you could summarize the main idea in two sentences. Which read did you just complete?`,
              options: [
                { id: `a`, text: `First read — you understood the basic meaning` },
                { id: `b`, text: `Second read — you analyzed the structure` },
                { id: `c`, text: `Third read — you evaluated the author's choices` },
                { id: `d`, text: `No read — you need to start over` },
              ],
              correct: `a`,
              rationale: `The first read is for comprehension — understanding what the text says. Being able to summarize the main idea in two sentences is exactly the goal of the first read.`,
            },
            {
              id: `case-2`,
              title: `Signal Words`,
              situation: `On your second read of a history article, you notice the author uses "as a result" and "because of this" repeatedly. What is this evidence of?`,
              options: [
                { id: `a`, text: `The author is writing for young readers` },
                { id: `b`, text: `The text uses a cause-and-effect structure` },
                { id: `c`, text: `The author has a biased perspective` },
                { id: `d`, text: `The text is poorly organized` },
              ],
              correct: `b`,
              rationale: `"As a result" and "because of this" are cause-and-effect signal words. Finding them on your second read reveals the text's structure — cause and effect — which is one of the main goals of a second read.`,
            },
            {
              id: `case-3`,
              title: `Word Choice`,
              situation: `On your third read of an article about a protest, you notice the author calls it a "riot" — not a "demonstration." What question should you ask?`,
              options: [
                { id: `a`, text: `What is the dictionary definition of riot?` },
                { id: `b`, text: `Why did the author choose "riot" — what does that word choice reveal about perspective?` },
                { id: `c`, text: `Was the author at the event?` },
                { id: `d`, text: `How long was the article?` },
              ],
              correct: `b`,
              rationale: `On the third read, you ask "why these choices?" "Riot" and "demonstration" describe the same event but carry very different meanings. Asking why the author chose "riot" reveals how word choice shapes perspective — a core craft question.`,
            },
            {
              id: `case-4`,
              title: `Annotation Decision`,
              situation: `While reading a difficult paragraph, you come across a term you don't recognize. What's the most useful annotation to make?`,
              options: [
                { id: `a`, text: `Underline the word and write a question mark next to it` },
                { id: `b`, text: `Skip it and keep reading` },
                { id: `c`, text: `Rewrite the whole paragraph` },
                { id: `d`, text: `Stop reading entirely` },
              ],
              correct: `a`,
              rationale: `Circling or underlining an unfamiliar word and marking it with a question is exactly what annotation is for. It flags the word for follow-up without breaking your reading flow — and it proves you were paying attention.`,
            },
          ],
        },

        // ── QUIZ ─────────────────────────────────────────────────────────────
        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            {
              id: `q1`,
              text: `What is the purpose of the first read?`,
              type: `multiple-choice`,
              options: [
                `To memorize it word for word`,
                `To understand the basic meaning — what the text says`,
                `To find mistakes in the writing`,
                `To identify the author's biography`,
              ],
              correct: `To understand the basic meaning — what the text says`,
              explanation: `The first read is for comprehension — understanding what the text says, so you can summarize it in a few sentences.`,
            },
            {
              id: `q2`,
              text: `What does the second read focus on?`,
              type: `multiple-choice`,
              options: [
                `Memorizing vocabulary definitions`,
                `How the text works — its structure and techniques`,
                `Whether you personally agree with the author`,
                `Reading the text faster`,
              ],
              correct: `How the text works — its structure and techniques`,
              explanation: `The second read is about structure and technique — how the author organized the information and what evidence they used.`,
            },
            {
              id: `q3`,
              text: `What question drives the third read?`,
              type: `multiple-choice`,
              options: [
                `What is this text about?`,
                `How long is it?`,
                `Why did the author make these specific choices?`,
                `When was it written?`,
              ],
              correct: `Why did the author make these specific choices?`,
              explanation: `The third read is the deepest — you ask why the author chose specific words, details, and structures, which reveals their craft and perspective.`,
            },
            {
              id: `q4`,
              text: `What is annotation?`,
              type: `multiple-choice`,
              options: [
                `Reading without making any marks`,
                `Marking up a text with notes, underlines, and questions as you read`,
                `Writing a summary after you finish reading`,
                `Copying the text word for word`,
              ],
              correct: `Marking up a text with notes, underlines, and questions as you read`,
              explanation: `Annotation means actively marking up a text — underlining key phrases, circling unknown words, writing questions in the margins — to stay engaged and thinking.`,
            },
            {
              id: `q5`,
              text: `Why does close reading require multiple reads?`,
              type: `multiple-choice`,
              options: [
                `Because the first reading is always wrong`,
                `Each reading reveals different layers that a single reading misses`,
                `To make reading take longer`,
                `Because teachers require it`,
              ],
              correct: `Each reading reveals different layers that a single reading misses`,
              explanation: `Each read has a different focus — meaning, structure, craft. A single read can't do all three. Multiple reads let you go deeper each time.`,
            },
            {
              id: `q6`,
              text: `Signal words like "however" and "as a result" help a reader understand what?`,
              type: `multiple-choice`,
              options: [
                `The author's biography`,
                `How ideas in the text connect`,
                `The reading level of the text`,
                `The length of each paragraph`,
              ],
              correct: `How ideas in the text connect`,
              explanation: `Signal words are connection words — they show whether two ideas are cause and effect, contrast, sequence, or something else. Noticing them is a key part of the second read.`,
            },
            {
              id: `q7`,
              text: `Close reading is only for fiction.`,
              type: `true-false`,
              correct: `False`,
              explanation: `Close reading works for any text — fiction, nonfiction, articles, essays, poetry. The three-read strategy is especially powerful for dense informational texts.`,
            },
            {
              id: `q8`,
              text: `Asking "why did the author use this word instead of another?" is part of analyzing author's craft.`,
              type: `true-false`,
              correct: `True`,
              explanation: `Author's craft is all about deliberate choices. Asking why an author chose one word over another is exactly the kind of question the third read is designed for.`,
            },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l01-reflection`,
          type: `reflection`,
          prompts: [
            `Think about a book, article, or text you've read recently. If you went back and did a second read focused on structure, what signal words do you think you'd find?`,
            `Which of the three reads do you think is hardest for you — first, second, or third — and why?`,
            `Think about a time you reread something and noticed something you'd missed. What did you find on the second pass?`,
            `Quill says annotation is a "conversation between you and the text." What's one question you'd write in the margin of your last reading assignment?`,
          ],
        },

        // ── REAL WORLD ────────────────────────────────────────────────────────
        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Close reading isn't just a school skill, {name}. Lawyers read contracts three times. Scientists read research papers three times — once for the finding, once for the method, once to evaluate. The strategy you learned today travels with you everywhere.`,
          headline: `Close Reading Is Everywhere`,
          body: `Lawyers read contracts three times looking for loopholes. Scientists read research papers three times — once for the finding, once for the method, once to evaluate the conclusion. Great readers in every field use this same strategy.`,
          familyAdventure: `Choose a short passage together — from a news article, a favorite book, or even a cereal box. Read it aloud three times. After each read, share what you noticed that time that you missed before. By the third read, everyone will be amazed at how much more they see. Discuss which details were hiding in plain sight.`,
          creativePrompt: {
            floor: `Find a paragraph from a book or article. Underline three words that seem deliberately chosen. Write one sentence about why you think the author picked one of those words.`,
            stretch: `Find a short article (6–10 paragraphs). Do all three reads. Write one sentence for each: what it said, how it was organized, and one craft choice you noticed.`,
            open: `Pick a text you love. Do a full annotated close reading — first read summary, second read structure notes, third read craft analysis. What did you notice on the third read that you'd completely missed on the first?`,
          },
        },

        // ── CELEBRATION ──────────────────────────────────────────────────────
        {
          id: `l01-celebration`,
          type: `celebration`,
          badge: `close-reader`,
          badgeName: `Close Reader`,
          xpEarned: 75,
          message: `You just learned the three-read strategy that scholars, lawyers, and critical thinkers use every day. First read: comprehension. Second read: structure. Third read: craft. Plus annotation — the tool that makes all three reads more powerful. Next lesson we'll look at how authors use purpose and perspective to shape everything they write. — Quill.`,
        },
      ],
    },
  ],
};

export default ELA_UE_L01;
