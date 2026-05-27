// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L07 — Figurative Language: Metaphor, Simile, Allusion, and Irony
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RL.4.4 / RL.5.4 — Word and phrase meaning, figurative language
//            CCSS L.4.5 / L.5.5 — Understanding figurative language nuance
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — metaphor and simile, allusion, irony, why figurative
//        language matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-07`,
      title: `Figurative Language: Metaphor, Simile, Allusion, and Irony`,
      duration: 18,
      xpReward: 75,
      badge: `figurative-language-expert`,
      badgeName: `Figurative Language Expert`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. When someone says "time is money," they don't mean you can stick minutes in a bank. When a story describes a character with "a heart of stone," the character isn't actually made of rock. Figurative language is when writers say one thing and mean another, and once you know what to listen for, you'll hear it in songs, speeches, books, and everyday conversation. Today we'll cover four major types: metaphor, simile, allusion, and irony. Let's go.`,
          headline: `Figurative Language`,
          subtitle: `When writers say one thing and mean another`,
          visual: `/ue-assets/ela/l07-welcome.webp`,
        },

        // ── SECTION 1 — METAPHOR AND SIMILE ───────────────────────────────────
        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Metaphor and Simile`,
          paragraphs: [
            `Both metaphor and simile compare two things to create a vivid image. The difference is just one word. A SIMILE uses LIKE or AS: "life is LIKE a box of chocolates." A METAPHOR drops the comparison and says one thing IS another: "life IS a rollercoaster." Same idea, more direct. Metaphors hit harder. Similes feel softer because they openly admit they're comparing.`,
            `Both work by connecting something unfamiliar to something familiar. You haven't lived a hundred lives, so "life is a rollercoaster" tells you something only because you understand rollercoasters. Good writers reach for these comparisons constantly, especially when describing emotions, places, or experiences that would be flat in plain language.`,
          ],
          image: `/ue-assets/ela/l07-s1-metaphor-simile.webp`,
          imageCaption: `Simile: uses like or as. Metaphor: says one thing IS another.`,
          vocab: [
            { word: `metaphor`,
              definition: `A comparison that says one thing IS another, without using like or as. Example: "Her voice was music."`,
              audioPrompt: `A metaphor says one thing IS another, {name}. Not LIKE another. IS. "Time is a thief." "The classroom was a zoo." "Her voice was music." The author isn't saying time literally steals or the classroom literally has animals. They're saying that things behave similarly. Metaphors hit harder than similes because they collapse the comparison. They make the connection feel true instead of just suggested.` },
            { word: `comparison`,
              definition: `Noting how two things are similar or different. Both metaphors and similes are comparisons, but they make the connection in different ways.`,
              audioPrompt: `A comparison looks at how two things are similar or different, {name}. Metaphors and similes are both comparisons, but they work differently. A simile openly admits it's comparing by using "like" or "as." A metaphor makes the comparison by saying one thing IS another. Same job, different technique.` },
          ],
        },

        // ── SECTION 2 — ALLUSION ──────────────────────────────────────────────
        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Allusion`,
          paragraphs: [
            `An allusion is when a writer makes a quick reference to a well-known story, person, event, or work of art. Saying "she has the Midas touch" alludes to King Midas from Greek mythology, who turned everything he touched into gold. In two words, the writer borrowed a whole story and used it to mean "she succeeds at everything she touches."`,
            `Allusions are efficient. They let a writer pack a lot of meaning into a few words by borrowing what the reader already knows. The catch: if you don't know the reference, the allusion is invisible to you. That's why great readers build up a wide bank of stories, history, and culture. The more you know, the more allusions you can catch.`,
          ],
          image: `/ue-assets/ela/l07-s2-allusion.webp`,
          imageCaption: `Allusion: a quick reference that borrows meaning from something famous.`,
          vocab: [
            { word: `allusion`,
              definition: `A brief reference to a well-known person, story, event, or work of art that adds meaning by borrowing what readers already know.`,
              audioPrompt: `An allusion is a brief reference to something famous, {name}. A story, a person, a piece of art. Saying someone "opened Pandora's box" alludes to Greek mythology, where opening one box released all the world's troubles. The writer doesn't have to retell that whole story. They just gesture at it. Allusions are powerful because they pack big meaning into small words. You catch them if you know the reference. The more you know, the richer your reading gets.` },
            { word: `reference`,
              definition: `A mention of something outside the current text. An allusion is a specific kind of reference to something famous.`,
              audioPrompt: `A reference is a mention of something outside the text you're reading, {name}. An allusion is a special kind of reference — one that points to something famous, like a myth, a historical event, or a classic story. When a writer makes an allusion, they're trusting that you recognize the reference and can bring its meaning into the current text.` },
          ],
        },

        // ── SECTION 3 — IRONY ─────────────────────────────────────────────────
        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Irony`,
          paragraphs: [
            `Irony is when the opposite of what you'd expect happens or is said. There are three kinds. VERBAL irony is saying the opposite of what you mean. Walking outside in a thunderstorm and saying "nice weather we're having" is verbal irony. SITUATIONAL irony is when the result clashes with the setup. A fire station burning down is situational irony. DRAMATIC irony is when the audience knows something a character doesn't. We watch a character open the door we know a monster is behind. That's dramatic irony.`,
            `Irony does a lot of work in stories. It creates humor. It builds tension. It makes scenes feel layered because two things are happening at once. The literal words AND the opposite meaning. Strong readers learn to spot irony fast because missing it means missing huge amounts of what the author intended.`,
          ],
          image: `/ue-assets/ela/l07-s3-irony.webp`,
          imageCaption: `Three kinds of irony: verbal, situational, and dramatic.`,
          vocab: [
            { word: `irony`,
              definition: `When the opposite of what's expected happens (situational), is said (verbal), or when the audience knows something a character doesn't (dramatic).`,
              audioPrompt: `Irony is when expectations get flipped, {name}. Saying "great weather!" during a downpour is verbal irony. A fire station burning down is situational irony. Watching a character walk into a trap that the audience can see coming is dramatic irony. Irony adds layers because two meanings exist at the same time. The literal one and the opposite one. Spotting irony is one of the biggest skills in catching what authors actually mean.` },
            { word: `dramatic irony`,
              definition: `When the audience knows something a character doesn't, creating tension or humor from the gap in knowledge.`,
              audioPrompt: `Dramatic irony is when you know something a character in the story doesn't, {name}. You watch them walk into a situation knowing what they can't see coming. That gap between what you know and what the character knows is where the tension lives. Horror movies use this constantly. The audience is shouting "don't open that door!" because they know what's behind it and the character doesn't.` },
          ],
        },

        // ── SECTION 4 — WHY FIGURATIVE LANGUAGE MATTERS ───────────────────────
        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Figurative Language Matters`,
          paragraphs: [
            `You'll forget plain descriptions a few minutes after reading them. But "time is a thief that steals our days" sticks. Why? Because figurative language creates an image AND an emotion at once. The brain remembers both more deeply than it remembers literal information. That's why poets, songwriters, and the best speech-writers reach for figurative language constantly.`,
            `Figurative language also reveals how a character or author SEES the world. When someone calls a challenge "a mountain to climb," they see difficulty as something you conquer step by step. When someone calls the same challenge "a swamp," they see it as something murky and stuck. Same difficulty, totally different mindset. Figurative language gives you a window into how someone is thinking.`,
          ],
          image: `/ue-assets/ela/l07-s4-why-it-matters.webp`,
          imageCaption: `Figurative language makes ideas stick AND reveals how the speaker sees the world.`,
          vocab: [
            { word: `simile`,
              definition: `A comparison that uses LIKE or AS to connect two things. Example: "Her voice was like music."`,
              audioPrompt: `A simile compares two things using LIKE or AS, {name}. "Her voice was like music." "He fought like a lion." "The night was as dark as ink." Similes are softer than metaphors because they openly admit they're comparing. They're easier to spot than metaphors for the same reason. Both create vivid images, but similes wear the comparison on their sleeve while metaphors hide it inside the statement.` },
            { word: `figurative language`,
              definition: `Words or phrases that go beyond their literal meaning to create images, emotions, or emphasis. Includes metaphor, simile, allusion, irony, and more.`,
              audioPrompt: `Figurative language is any language that goes beyond its literal meaning, {name}. Metaphor, simile, allusion, irony — these are all types of figurative language. The opposite is literal language, which means exactly what it says. Writers reach for figurative language when they want to create an image, stir an emotion, or make an idea stick. Literal language informs. Figurative language makes you feel.` },
          ],
        },

        // ── INTERACTIVE GAME — Figurative Language Investigation ──────────────
        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four examples of figurative language. For each one, name the type. Is it METAPHOR, SIMILE, ALLUSION, or IRONY? Watch the wording carefully. One of these LOOKS like one type but is actually another.`,
          options: [
            { id: `metaphor`,  label: `Metaphor`,  color: `#A78BFA`, description: `Says one thing IS another, no like or as. "Time is a thief."` },
            { id: `simile`,    label: `Simile`,    color: `#60A5FA`, description: `Compares using LIKE or AS. "Her smile was like sunshine."` },
            { id: `allusion`,  label: `Allusion`,  color: `#34D399`, description: `Quick reference to a famous story, person, or event.` },
            { id: `irony`,     label: `Irony`,     color: `#FBBF24`, description: `The opposite of what's expected happens or is said.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Example #1`,
              clues: [
                { text: `From a novel: "He stood frozen, like a deer caught in headlights."` },
                { text: `The word LIKE is doing the comparison.` },
                { text: `The author is comparing the character's stillness to the way deer freeze in front of car headlights.` },
              ],
              correctAnswer: `simile`,
              realWorldExample: `One of the most common similes in English.`,
              explanation: `The presence of LIKE makes this a simile. Two things being compared, openly. If the author had written "he WAS a deer caught in headlights" without the like, it would have been a metaphor.`,
            },
            {
              id: `case-2`,
              caseTitle: `Example #2`,
              clues: [
                { text: `From a speech: "Every project he touches turns to gold. He has the Midas touch."` },
                { text: `King Midas is a figure from Greek mythology.` },
                { text: `The speaker is borrowing a famous story to describe how successful this person is.` },
              ],
              correctAnswer: `allusion`,
              realWorldExample: `Allusions to mythology and Shakespeare appear constantly in modern speech and writing.`,
              explanation: `The speaker isn't telling Midas's story. They're gesturing at it, expecting you to know it. That's an allusion. The reference lets them say "he succeeds at everything" in three words by borrowing a whole myth.`,
            },
            {
              id: `case-3`,
              caseTitle: `Example #3`,
              clues: [
                { text: `A character spends the whole story afraid of water and refusing to learn to swim.` },
                { text: `In the final scene, his cruise ship sinks.` },
                { text: `The author makes a big deal of the fact that this is the one thing he feared most.` },
              ],
              correctAnswer: `irony`,
              realWorldExample: `Classic situational irony, often used in dramatic stories.`,
              explanation: `The character spent the whole story avoiding water. The story ends with him facing it in the worst possible way. The outcome is the opposite of what he tried to make happen. That's situational irony.`,
            },
            {
              id: `case-4`,
              caseTitle: `Example #4 — The Tricky One`,
              clues: [
                { text: `From a poem: "Time, that thief, stole our summer in a single week."` },
                { text: `Time isn't actually a thief. It can't steal anything.` },
                { text: `The poet is treating time as if it's a person who takes things.` },
              ],
              correctAnswer: `metaphor`,
              realWorldExample: `Personifying metaphor, used in poetry for centuries.`,
              explanation: `Looks tricky because the comma after "Time" might make you think it's a comparison phrase. But there's no LIKE or AS. The poet is saying time IS a thief. That's a metaphor. Specifically, a metaphor where a non-human thing (time) is treated as a person. Strong figurative language often combines techniques. The metaphor here also has a hint of personification, treating time as someone who can do thief things.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is the difference between a SIMILE and a METAPHOR?`,
              options: [
                `Similes are longer`,
                `Similes use LIKE or AS to compare; metaphors say one thing IS another directly`,
                `Similes are only used in poetry`,
                `There is no difference`,
              ],
              correctIndex: 1,
              explanation: `Both compare two things. The simile keeps the comparison open with "like" or "as." The metaphor drops the comparison and just states it as fact. "He fought like a lion" is simile. "He was a lion" is metaphor.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `What is an ALLUSION?`,
              options: [
                `A trick or illusion`,
                `A brief reference to a famous person, story, event, or work that borrows their meaning`,
                `A type of irony`,
                `A grammatical error`,
              ],
              correctIndex: 1,
              explanation: `Allusions borrow meaning from things readers already know. "He has the Midas touch" alludes to Greek mythology. The writer doesn't retell the myth, they just gesture at it.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `Walking outside in a thunderstorm and saying "great weather we're having" is an example of:`,
              options: [
                `Allusion`,
                `Metaphor`,
                `Verbal irony`,
                `Simile`,
              ],
              correctIndex: 2,
              explanation: `Verbal irony is saying the opposite of what you actually mean. The speaker means terrible weather; the words say great. The mismatch is the point.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `A fire station burning down is an example of:`,
              options: [
                `Metaphor`,
                `Situational irony`,
                `Allusion`,
                `Simile`,
              ],
              correctIndex: 1,
              explanation: `Situational irony is when the outcome clashes with the expected setup. A building dedicated to fighting fires being destroyed BY fire is exactly the opposite of what you'd expect.` },

            { id: `l07-q5`, format: `true-false`,
              question: `True or false: Figurative language is just decoration that makes writing fancier.`,
              correctAnswer: false,
              explanation: `False. Figurative language makes ideas memorable AND reveals how the speaker sees the world. Calling difficulty "a mountain to climb" vs. "a swamp" tells you something true about the speaker's mindset. It's a tool with real meaning, not decoration.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `In the sentence "time is a thief that steals our days," what type of figurative language is being used?`,
              options: [
                `Simile, because it compares two things`,
                `Metaphor, because time is directly called a thief without using like or as`,
                `Allusion to a famous thief`,
                `Irony because time can't really steal`,
              ],
              correctIndex: 1,
              explanation: `No "like" or "as" is used. The writer says time IS a thief. That's a metaphor. The writer is treating time as if it can steal, even though it can't literally.` },

            { id: `l07-q7`, format: `multiple-choice`,
              question: `Why is figurative language MEMORABLE compared to plain descriptions?`,
              options: [
                `It uses bigger words`,
                `It creates a vivid image AND an emotion at once, which the brain remembers more deeply`,
                `It's always funny`,
                `It rhymes`,
              ],
              correctIndex: 1,
              explanation: `Plain descriptions only give you information. Figurative language gives you information PLUS a sensory image PLUS an emotional reaction. The brain remembers multi-sensory things much better than plain facts.` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `An audience watches a character walk into a room not knowing a monster is hiding there. The audience knows. The character doesn't. This is:`,
              options: [
                `Verbal irony`,
                `Situational irony`,
                `Dramatic irony`,
                `An allusion`,
              ],
              correctIndex: 2,
              explanation: `Dramatic irony is when the audience knows something a character doesn't. The tension and emotion come from the gap. It's one of the most powerful tools in fiction, especially in suspense and horror.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Think of a metaphor or simile you've used in real life. What does it reveal about how you see that thing?` },
            { id: `r2`, text: `What's a song lyric you love that uses figurative language? What makes it stick in your head?` },
            { id: `r3`, text: `When was the last time you saw or experienced situational irony? Tell the story.` },
            { id: `r4`, text: `If you had to describe how you feel right now as a metaphor, what would it be?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Figurative language isn't just for English class. It's how humans communicate big feelings and abstract ideas every day. Sports announcers use it. Songwriters live by it. Politicians use it to make speeches that stick. Comedians build entire careers on irony. The skill of recognizing figurative language doesn't just help you understand books better. It helps you understand the world better, because so much of how people talk depends on it.`,
          familyAdventure: `Figurative Language Bingo Night. Make a simple bingo card with five squares: METAPHOR, SIMILE, ALLUSION, VERBAL IRONY, and SITUATIONAL IRONY. Watch a movie or TV show together. Whoever spots an example first calls it out. First to get all five wins. You'll be shocked at how much figurative language is hidden in everyday entertainment.`,
          creativePrompt: {
            intro: `Write a short paragraph (any topic) that uses at least ONE metaphor, ONE simile, ONE allusion, and ONE example of irony.`,
            floor: `Write at least 5 sentences. Include one of each type. Label them at the end so a reader could spot which is which.`,
            stretch: `Write 8 to 10 sentences telling a small story. Use all four types naturally, where they belong. Add a short note at the end explaining where you used each one and why.`,
            open: `Write as much as you want. Build a real piece of writing (a poem, a short story, a speech) that uses figurative language all the way through.`,
            frames: [
              `My metaphor was ___.`,
              `My simile was ___.`,
              `My allusion was to ___.`,
              `My irony was ___.`,
              `The one I think worked best was ___ because ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now tell metaphor from simile, spot an allusion, identify the three kinds of irony, and explain WHY figurative language makes writing memorable. Next lesson: every story has a SHAPE. Beginning, middle, end. But the shape can be more interesting than people think. We'll explore exposition, climax, resolution, and the choices authors make about pacing and structure. See you there. — Quill.`,
          badge: `figurative-language-expert`,
          badgeName: `Figurative Language Expert`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L07.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L07 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
