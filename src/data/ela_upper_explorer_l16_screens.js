// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L16 — Grammar: Verb Tense, Agreement, and Consistency
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS L.4.1 / L.5.1 — Conventions of grammar
//            CCSS L.4.3 / L.5.3 — Use language and conventions effectively
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — verb tense basics, subject-verb agreement,
//        tense consistency, when shifting tense is appropriate
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-16`,
      title: `Grammar: Verb Tense, Agreement, and Consistency`,
      duration: 18,
      xpReward: 75,
      badge: `tense-master`,
      badgeName: `Tense Master`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. "I am walked to the store yesterday." Hear how wrong that sounds? Your brain caught a tense problem instantly. Today you'll learn what verb tense actually does, why subject-verb agreement matters, and when shifting tenses is a smart choice versus a sloppy mistake. By the end, you'll have one of the most useful editing skills in writing. Let's go.`,
          headline: `Verb Tense and Agreement`,
          subtitle: `When time matches, writing flows. When it doesn't, everything stalls.`,
          visual: `/ue-assets/ela/l16-welcome.webp`,
        },

        // ── SECTION 1 — VERB TENSE BASICS ─────────────────────────────────────
        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Verb Tense Actually Does`,
          paragraphs: [
            `VERB TENSE tells the reader WHEN something happens. Past tense: "I walked to school." Present tense: "I walk to school." Future tense: "I will walk to school." Same action, three different time frames. The verb changes to show which one. Tense is one of the simplest grammar tools and one of the most powerful.`,
            `Beyond past, present, and future, English has more specific tense forms. "I have walked" (something started in the past and connects to now). "I had walked" (one past thing happened before another past thing). You don't need to memorize every form. You just need to know that the verb form ALWAYS signals time, and that mismatched tenses confuse readers fast.`,
          ],
          image: `/ue-assets/ela/l16-s1-tense-basics.webp`,
          imageCaption: `Tense = time. Past, present, future, and combinations.`,
          vocab: [
            { word: `verb tense`,
              definition: `The form of a verb that shows when an action happens. Past, present, or future.`,
              audioPrompt: `Verb tense shows when something happens, {name}. "I walked" is past. "I walk" is present. "I will walk" is future. The verb changes to show the time. Tense is one of the simplest tools in writing, but using it wrong is one of the fastest ways to confuse a reader. Pick your time frame and signal it clearly through your verbs.` },
            { word: `present tense`,
              definition: `The verb form that shows an action happening now or happening regularly. Example: "I walk to school every day."`,
              audioPrompt: `Present tense shows what's happening now or what happens regularly, {name}. "I walk." "She reads." "They study." The verb form doesn't change for most subjects in English. You use present tense for facts, habits, and what's happening right now. It's the most common tense in everyday speech.` },
          ],
        },

        // ── SECTION 2 — SUBJECT-VERB AGREEMENT ────────────────────────────────
        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Subject-Verb Agreement`,
          paragraphs: [
            `In every sentence, the verb has to match the subject in NUMBER. Singular subjects take singular verbs. Plural subjects take plural verbs. "She runs every morning" (singular subject, singular verb). "They run every morning" (plural subject, plural verb). Match singular with singular, plural with plural. That's agreement.`,
            `Most agreement is automatic. Where people slip up is when the subject is a long phrase, or there's a confusing word between subject and verb. "The box of cookies (is or are?) on the table." The subject is BOX, not COOKIES. So it's "is." When you're stuck, find the real subject and ignore everything between it and the verb. Match the verb to the actual subject.`,
          ],
          image: `/ue-assets/ela/l16-s2-agreement.webp`,
          imageCaption: `Singular subject, singular verb. Plural subject, plural verb. Match them.`,
          vocab: [
            { word: `subject-verb agreement`,
              definition: `The grammar rule that says a verb must match its subject in number. Singular subjects take singular verbs; plural subjects take plural verbs.`,
              audioPrompt: `Subject-verb agreement means the verb matches the subject in number, {name}. "The dog barks." Singular subject, singular verb. "The dogs bark." Plural subject, plural verb. Mostly automatic, but it gets tricky when other words sit between the subject and the verb. When in doubt, find the real subject, ignore the noise, and match.` },
            { word: `singular`,
              definition: `One. A singular subject refers to one person or thing, and requires a singular verb form.`,
              audioPrompt: `Singular means one, {name}. One dog. One book. One teacher. Singular subjects take singular verb forms. "She runs." "He studies." "The dog barks." When you have a singular subject, you need a singular verb. The most common agreement error happens when a plural noun sits between the singular subject and the verb, tricking you into using the wrong form.` },
          ],
        },

        // ── SECTION 3 — TENSE CONSISTENCY ─────────────────────────────────────
        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Stay Consistent in Tense`,
          paragraphs: [
            `Within a paragraph or scene, your tenses should stay CONSISTENT. If you start in past tense, stay in past tense. If you start in present, stay in present. "I walked to the park. The sun was bright. I sit on a bench." That last shift to present sounds wrong because the rest is past tense. Pick a time frame and stick with it.`,
            `Inconsistent tense is one of the most common mistakes in early writing, and one of the easiest to fix once you see it. The trick is to re-read your work and circle every verb. If you see a mix of "walked, was, sit," you have a problem. Pick one tense and edit the others to match. Your writing will instantly feel more polished.`,
          ],
          image: `/ue-assets/ela/l16-s3-consistency.webp`,
          imageCaption: `Pick a tense. Stay there. Your reader will thank you.`,
          vocab: [
            { word: `consistency`,
              definition: `Keeping your verb tense the same within a section, so the reader stays in one time frame.`,
              audioPrompt: `Consistency in tense means staying in the same time frame, {name}. If you start in past tense, finish in past tense. If you start in present, stay in present. Mixing tenses by accident is one of the most common writing mistakes. Re-read your work and check every verb. If your tenses jump around, your reader gets lost. Pick a time and stick with it.` },
            { word: `edit`,
              definition: `To review and revise writing to fix errors, including tense inconsistencies and agreement problems.`,
              audioPrompt: `Editing means reviewing your writing to catch and fix errors, {name}. Tense consistency is one of the main things editors look for. Go verb by verb. If you started in past tense and a verb is suddenly in present, fix it. Editing is where good writing gets polished. The best writers aren't the ones who write perfectly the first time. They're the ones who edit most carefully.` },
          ],
        },

        // ── SECTION 4 — WHEN SHIFTS ARE GOOD ──────────────────────────────────
        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Shifting Tense Is the Right Move`,
          paragraphs: [
            `Sometimes you SHOULD shift tense, and shifting on purpose is a powerful tool. The rule is simple: shift when the time actually changes. "Yesterday I walked to school. Today I am driving." Past tense for yesterday, present tense for today. The shift makes sense because the time genuinely moved.`,
            `You can also shift to make a point. "I lived there for ten years. Now I am free." That shift from past to present marks a real change in the writer's life. The verbs do the work the writer doesn't have to spell out. Strong writers use tense shifts deliberately. The rule isn't "never shift." The rule is "shift on purpose, never by accident."`,
          ],
          image: `/ue-assets/ela/l16-s4-when-shifts-work.webp`,
          imageCaption: `Shift tense on purpose, never by accident.`,
          vocab: [
            { word: `tense shift`,
              definition: `Changing verb tense within a piece of writing, on purpose, to mark a real change in time or to make a point.`,
              audioPrompt: `A tense shift is changing the verb tense in your writing, {name}. Done on purpose, it's a tool. "Yesterday I walked, today I am running" shifts because time actually changed. Done by accident, it's a mistake that confuses readers. The rule: shift when the time changes or when you want to make a point. Never shift just because you weren't paying attention.` },
            { word: `purpose`,
              definition: `The reason behind a writing choice. When tense shifts on purpose, it signals a meaningful change. Accidental shifts have no purpose.`,
              audioPrompt: `Purpose is the reason behind a choice, {name}. In writing, every decision should have one. When a tense shift has purpose, it marks a real change in time or a meaningful contrast. When it has no purpose, it's just an error. Ask yourself: why did I shift tenses here? If you can't answer that, fix the shift. Strong writers make choices on purpose.` },
          ],
        },

        // ── INTERACTIVE GAME — Tense Investigation ────────────────────────────
        {
          id: `l16-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four short writing samples. For each one, identify the problem. Is it INCONSISTENT TENSE (accidental shift), AGREEMENT ERROR (subject and verb don't match), or NO ERROR (the writing is correct, even if it feels unusual)?\n\nOne of these passages is actually correct. Don't invent a problem that isn't there.`,
          options: [
            { id: `inconsistent-tense`, label: `Inconsistent Tense`, color: `#F87171`, description: `Accidental shift between past and present (or other tenses) without a reason.` },
            { id: `agreement-error`,   label: `Agreement Error`,   color: `#FBBF24`, description: `Singular subject paired with plural verb, or vice versa. Numbers don't match.` },
            { id: `no-error`,          label: `No Error`,          color: `#34D399`, description: `Tense and agreement are both correct. Pass it through.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Sample #1`,
              clues: [
                { text: `"Yesterday I walked to school."` },
                { text: `"The sun was shining."` },
                { text: `"Halfway there, I drop my book."` },
              ],
              correctAnswer: `inconsistent-tense`,
              realWorldExample: `Common mistake in narrative writing.`,
              explanation: `Started in past tense ("walked," "was"), then suddenly shifted to present ("drop"). Nothing in the time frame changed. The shift was accidental. Should be "I dropped my book." Re-reading and circling every verb would catch this fast.`,
            },
            {
              id: `case-2`,
              caseTitle: `Sample #2`,
              clues: [
                { text: `"The team of soccer players are arriving today."` },
                { text: `Subject: TEAM (singular). Verb: ARE (plural).` },
                { text: `Singular subject with plural verb.` },
              ],
              correctAnswer: `agreement-error`,
              realWorldExample: `Classic mistake when extra words sit between subject and verb.`,
              explanation: `The subject is TEAM, which is singular. The verb should be "is arriving," not "are arriving." The phrase "of soccer players" is in between and tricks the writer into using a plural verb. Always match the verb to the real subject, not the closest noun.`,
            },
            {
              id: `case-3`,
              caseTitle: `Sample #3`,
              clues: [
                { text: `"Last summer, I went to camp for the first time."` },
                { text: `"Now, I look back on those weeks as the moment I learned to be brave."` },
                { text: `Past tense for what happened, present tense for what the writer now thinks.` },
              ],
              correctAnswer: `no-error`,
              realWorldExample: `Intentional, correct tense shift that marks a change in time.`,
              explanation: `Looks like a shift, but this is a CORRECT one. Past tense for the past event ("went," "learned"). Present tense for what the writer thinks NOW ("look back"). The shift is on purpose because the time actually changes. This is the right way to use tense shifts. No error.`,
            },
            {
              id: `case-4`,
              caseTitle: `Sample #4 — The Tricky One`,
              clues: [
                { text: `"The box of old letters were on the top shelf."` },
                { text: `Subject: BOX (singular). Verb: WERE (plural).` },
                { text: `Easy to mistake because "letters" is right next to the verb.` },
              ],
              correctAnswer: `agreement-error`,
              realWorldExample: `Same trap as #2 but flipped: extra words trick you into the wrong verb.`,
              explanation: `Tricky because LETTERS is right next to WERE, which makes the plural verb feel right. But the real subject is BOX (singular). One box, not many. Should be "The box of old letters WAS on the top shelf." The lesson: always find the real subject, even if other nouns sit between it and the verb. This is one of the most common agreement mistakes in formal writing.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What does VERB TENSE tell the reader?`,
              options: [
                `Who's speaking`,
                `WHEN an action happens (past, present, future)`,
                `Where the action happens`,
                `Why the action matters`,
              ],
              correctIndex: 1,
              explanation: `Tense signals time. The form of the verb tells the reader whether something already happened, is happening now, or will happen later.` },

            { id: `l16-q2`, format: `multiple-choice`,
              question: `What does SUBJECT-VERB AGREEMENT mean?`,
              options: [
                `The subject and verb start with the same letter`,
                `The verb matches the subject in number: singular with singular, plural with plural`,
                `The verb comes before the subject`,
                `Subject and verb agree about meaning`,
              ],
              correctIndex: 1,
              explanation: `Agreement is a matching rule. "The dog barks." Singular subject, singular verb. "The dogs bark." Plural subject, plural verb. Always match the verb to the real subject.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `"The box of cookies (is/are) on the table." Which verb is correct?`,
              options: [
                `"are," because cookies is plural`,
                `"is," because the real subject is BOX, which is singular`,
                `Either is fine`,
                `Neither is correct`,
              ],
              correctIndex: 1,
              explanation: `The subject is BOX, not COOKIES. The verb has to match BOX, which is singular. Ignore the extra phrase ("of cookies") and find the real subject. "Is" is correct.` },

            { id: `l16-q4`, format: `multiple-choice`,
              question: `Why is TENSE CONSISTENCY important?`,
              options: [
                `It's a rule with no real reason`,
                `Mixed tenses confuse readers and make writing feel sloppy`,
                `Past tense is always better`,
                `Consistency only matters in fiction`,
              ],
              correctIndex: 1,
              explanation: `When tenses jump around for no reason, readers lose track of when things happen. Pick a tense and stick with it within each section. Editing is mostly about catching these slips.` },

            { id: `l16-q5`, format: `true-false`,
              question: `True or false: Shifting verb tense is always wrong.`,
              correctAnswer: false,
              explanation: `False. Shifting tense on purpose, when the time actually changes, is a powerful tool. "Yesterday I was scared. Today I am free." That's a meaningful shift. The rule is shift on purpose, never by accident.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `"I walked to school yesterday. The sun was shining. I drop my book." What's wrong?`,
              options: [
                `Nothing — it's fine`,
                `Inconsistent tense: started in past, shifted to present without a reason`,
                `The book is the wrong thing to drop`,
                `It's too short`,
              ],
              correctIndex: 1,
              explanation: `Past tense ("walked," "was") then suddenly present ("drop"). Nothing in the time frame changed. The shift was accidental. Should be "I dropped my book."` },

            { id: `l16-q7`, format: `multiple-choice`,
              question: `"My friends and I (is/are) studying for the test." Which is correct?`,
              options: [
                `"is" — singular`,
                `"are" — the subject "my friends and I" is plural`,
                `Either is fine`,
                `"was" — past tense`,
              ],
              correctIndex: 1,
              explanation: `"My friends and I" includes multiple people. Plural subject = plural verb. "Are" is correct.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `What's the SAFEST way to catch tense and agreement mistakes when editing?`,
              options: [
                `Read it once and trust your gut`,
                `Re-read your writing and circle (or check) every single verb, asking which subject it belongs to and what time frame it's in`,
                `Only check the long sentences`,
                `Skip editing — drafts are good enough`,
              ],
              correctIndex: 1,
              explanation: `Every verb has a job: matching its subject and signaling time. Going verb-by-verb during editing catches the mistakes that the gut misses, especially in long sentences.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Can you think of a time you read or heard something that mixed tenses and it threw you off?` },
            { id: `r2`, text: `Why is subject-verb agreement easier in simple sentences than in long ones?` },
            { id: `r3`, text: `When have you wanted to shift tense on PURPOSE to make a point? What were you trying to show?` },
            { id: `r4`, text: `What's one editing habit you could add to catch tense or agreement mistakes in your own writing?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Verb tense and agreement are two of the most-checked things in any kind of professional writing. Editors, teachers, hiring managers, and college admissions all notice when verbs don't agree or tenses jump around. These small grammar issues add up to a big impression: either "this person cares about their writing" or "this person didn't proofread." Catching these mistakes during editing is one of the highest-payoff habits a writer can build.`,
          familyAdventure: `Tense Hunt. Read a short piece of writing together (a paragraph from a book, an article, or a story someone in the family wrote). As a family, circle every verb and check two things: does each verb match its subject? Are all the verbs in the same tense? See how easy it is to spot errors when you slow down and check verb by verb.`,
          creativePrompt: {
            intro: `Write a short narrative paragraph, then edit it specifically for tense and agreement.`,
            floor: `Write at least 5 sentences in past tense about something that happened to you. Re-read and check that every verb is past tense and every subject and verb agree.`,
            stretch: `Write 8 to 10 sentences. Include at least one INTENTIONAL tense shift to mark a change in time or a change in your thinking. Explain why you made the shift.`,
            open: `Write a longer piece (a real story or essay) with deliberate tense control. Use past tense for the events, present tense for the reflection, and explain in a short note why those choices serve the meaning.`,
            frames: [
              `My narrative is about ___.`,
              `I started in ___ tense.`,
              `Every verb in my first paragraph is in ___ tense.`,
              `I shifted to ___ tense when ___ because ___.`,
              `If I were editing, I'd watch most carefully for ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now identify verb tense, match subjects and verbs correctly even when extra words get in the way, hold a consistent tense across a paragraph, and shift tense on purpose when time actually changes. Next lesson: vocabulary. Specifically Greek and Latin roots, which secretly power half the long words in English. Learn the roots, decode hundreds of words. See you there. — Quill.`,
          badge: `tense-master`,
          badgeName: `Tense Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L16;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L16.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L16 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
